export const CURRENCY_META = {
  INR: { symbol: '₹', label: 'INR · ₹', rateFromInr: 1 },
  USD: { symbol: '$', label: 'USD · $', rateFromInr: 0.012 },
  GBP: { symbol: '£', label: 'GBP · £', rateFromInr: 0.0095 },
  AED: { symbol: 'AED', label: 'AED', rateFromInr: 0.044 },
  EUR: { symbol: '€', label: 'EUR · €', rateFromInr: 0.011 },
  SGD: { symbol: 'S$', label: 'SGD · S$', rateFromInr: 0.016 },
  AUD: { symbol: 'A$', label: 'AUD · A$', rateFromInr: 0.018 },
};

export function getStoredCurrencyCode() {
  if (typeof window === 'undefined') return 'INR';
  try {
    const c = localStorage.getItem('inchbrick-currency');
    return CURRENCY_META[c] ? c : 'INR';
  } catch {
    return 'INR';
  }
}

export function formatInrAmount(n, code) {
  const c = code || getStoredCurrencyCode();
  const val = Number(n) || 0;
  if (c === 'INR') return '₹ ' + Math.round(val).toLocaleString('en-IN');
  const meta = CURRENCY_META[c];
  const converted = val * meta.rateFromInr;
  const abs = Math.abs(converted);
  if (abs >= 1_000_000) return meta.symbol + ' ' + (converted / 1_000_000).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (abs >= 1000) return meta.symbol + ' ' + Math.round(converted / 1000).toLocaleString() + 'K';
  return meta.symbol + ' ' + Math.round(converted).toLocaleString();
}
