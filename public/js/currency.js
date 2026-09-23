/**
 * Inchbrick currency — INR base; priceVal in listings is lakhs (1 L = ₹1,00,000).
 */
(function (global) {
  var STORAGE_KEY = 'inchbrick-currency';
  var DEFAULT = 'INR';

  var META = {
    INR: { symbol: '₹', label: 'INR · ₹', locale: 'en-IN', rateFromInr: 1 },
    USD: { symbol: '$', label: 'USD · $', locale: 'en-US', rateFromInr: 0.012 },
    GBP: { symbol: '£', label: 'GBP · £', locale: 'en-GB', rateFromInr: 0.0095 },
    AED: { symbol: 'AED', label: 'AED', locale: 'en-AE', rateFromInr: 0.044 },
    EUR: { symbol: '€', label: 'EUR · €', locale: 'de-DE', rateFromInr: 0.011 },
    SGD: { symbol: 'S$', label: 'SGD · S$', locale: 'en-SG', rateFromInr: 0.016 },
    AUD: { symbol: 'A$', label: 'AUD · A$', locale: 'en-AU', rateFromInr: 0.018 },
  };

  function getCode() {
    try {
      var c = localStorage.getItem(STORAGE_KEY);
      return META[c] ? c : DEFAULT;
    } catch (e) {
      return DEFAULT;
    }
  }

  function setCode(code) {
    if (!META[code]) code = DEFAULT;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* ignore */
    }
    global.dispatchEvent(
      new CustomEvent('inchbrick-currency-change', { detail: { code: code } })
    );
    return code;
  }

  function lakhsToInr(lakhs) {
    return Number(lakhs) * 100000;
  }

  function formatCompactForeign(amount, code) {
    var meta = META[code];
    var abs = Math.abs(amount);
    var sym = meta.symbol;
    if (abs >= 1000000) {
      return sym + ' ' + (amount / 1000000).toFixed(2).replace(/\.?0+$/, '') + 'M';
    }
    if (abs >= 1000) {
      return sym + ' ' + Math.round(amount / 1000).toLocaleString(meta.locale) + 'K';
    }
    return sym + ' ' + Math.round(amount).toLocaleString(meta.locale);
  }

  function formatLakhs(lakhs, opts) {
    opts = opts || {};
    var code = getCode();
    var n = Number(lakhs);
    if (!n && n !== 0) return '—';

    if (code === 'INR') {
      var star = opts.star ? '*' : '';
      var suffix = opts.suffix || '';
      if (n >= 100) {
        var cr = n / 100;
        var crStr = cr % 1 === 0 ? String(cr) : cr.toFixed(2).replace(/\.?0+$/, '');
        return '₹ ' + crStr + ' Cr' + star + suffix;
      }
      return '₹ ' + n + ' L' + star + suffix;
    }

    var inr = lakhsToInr(n);
    var converted = inr * META[code].rateFromInr;
    return formatCompactForeign(converted, code) + (opts.suffix || '');
  }

  function formatAmount(inrRupees, opts) {
    opts = opts || {};
    var code = getCode();
    var n = Number(inrRupees) || 0;
    if (code === 'INR') {
      return '₹ ' + Math.round(n).toLocaleString('en-IN') + (opts.suffix || '');
    }
    var converted = n * META[code].rateFromInr;
    return formatCompactForeign(converted, code) + (opts.suffix || '');
  }

  function parseTokenToLakhs(token) {
    if (!token) return null;
    var t = token.trim();
    var cr = t.match(/₹\s*([\d,.]+)\s*Cr/i);
    if (cr) return parseFloat(cr[1].replace(/,/g, '')) * 100;
    var l = t.match(/₹\s*([\d,.]+)\s*L/i);
    if (l) return parseFloat(l[1].replace(/,/g, ''));
    var plain = t.match(/₹\s*([\d,]+)/);
    if (plain) {
      var num = parseFloat(plain[1].replace(/,/g, ''));
      if (num >= 100000) return num / 100000;
      if (num >= 1000) return num / 100000;
      return num;
    }
    return null;
  }

  function convertPriceText(text) {
    if (!text || getCode() === 'INR') return text;
    return String(text).replace(/₹\s*[\d,.]+\s*(?:Cr|L|K)?\s*\*?/gi, function (match) {
      var lakhs = parseTokenToLakhs(match);
      if (lakhs == null) return match;
      var star = match.indexOf('*') !== -1 ? '*' : '';
      return formatLakhs(lakhs, { star: star });
    });
  }

  function listingPrice(listing) {
    if (!listing) return '—';
    if (listing.priceVal != null) {
      var star = listing.price && listing.price.indexOf('*') !== -1;
      var suffix = '';
      if (listing.price && /onwards/i.test(listing.price)) suffix = ' onwards';
      return formatLakhs(listing.priceVal, { star: star, suffix: suffix });
    }
    return convertPriceText(listing.price || '');
  }

  function applyNode(el) {
    if (!el || el.nodeType !== 1) return;
    if (el.dataset.priceLakhs != null) {
      var lakhs = Number(el.dataset.priceLakhs);
      var star = el.dataset.priceStar === '1';
      var suffix = el.dataset.priceSuffix || '';
      el.textContent = formatLakhs(lakhs, { star: star, suffix: suffix });
      return;
    }
    if (el.dataset.currencyOriginal != null) {
      el.textContent =
        getCode() === 'INR' ? el.dataset.currencyOriginal : convertPriceText(el.dataset.currencyOriginal);
    }
  }

  function annotatePrices(root) {
    root = root || document.getElementById('main-content') || document.body;
    if (!root) return;

    root.querySelectorAll('[data-price-lakhs]').forEach(applyNode);

    root.querySelectorAll('*').forEach(function (el) {
      if (el.children.length > 0) return;
      if (el.closest('script, style, noscript, select, option')) return;
      var text = el.textContent;
      if (!text || text.indexOf('₹') === -1) return;
      if (el.dataset.currencyOriginal == null) {
        el.dataset.currencyOriginal = text;
      }
      applyNode(el);
    });
  }

  global.CURRENCY = {
    META: META,
    getCode: getCode,
    setCode: setCode,
    formatLakhs: formatLakhs,
    formatAmount: formatAmount,
    listingPrice: listingPrice,
    convertPriceText: convertPriceText,
    annotatePrices: annotatePrices,
    applyNode: applyNode,
  };

  global.listingPrice = listingPrice;
})(window);
