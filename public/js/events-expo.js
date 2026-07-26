(function () {
  'use strict';

  var DETAIL_URL = function (slug) {
    return '/event-detail?slug=' + encodeURIComponent(slug);
  };

  var data = [];
  var live = null;
  var upcoming = [];
  var past = [];

  function byDate(a, b) {
    return String(a.dateStart || '').localeCompare(String(b.dateStart || ''));
  }

  function refreshEventLists() {
    data = Array.isArray(window.EVENTS_DATA) ? window.EVENTS_DATA.slice() : [];
    live = data.find(function (e) { return e.status === 'live'; }) || null;
    upcoming = data.filter(function (e) {
      return e.status === 'upcoming' || e.status === 'live';
    }).sort(byDate);
    past = data.filter(function (e) { return e.status === 'past'; }).sort(function (a, b) {
      return String(b.dateStart || '').localeCompare(String(a.dateStart || ''));
    });
  }

  refreshEventLists();

  /* ── Active event banner ── */
  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatBannerTitle(event) {
    var name = event.name || ((event.city || '') + ' Property Expo');
    var city = event.city || '';
    if (!city) return escapeHtml(name);
    var re = new RegExp('^' + city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', 'i');
    if (!re.test(name)) return escapeHtml(name);
    var rest = name.replace(re, '');
    return '<span>' + escapeHtml(city) + '</span> ' + escapeHtml(rest);
  }

  function renderBanner(event) {
    var img = document.getElementById('exBannerImg');
    var kicker = document.getElementById('exBannerKicker');
    var title = document.getElementById('exBannerTitle');
    var sub = document.getElementById('exBannerSub');
    var meta = document.getElementById('exBannerMeta');
    var stats = document.getElementById('exBannerStats');
    var registerBtn = document.getElementById('exBannerRegister');
    var detailLink = document.getElementById('exBannerDetail');

    if (!event) {
      // Fallback: next upcoming becomes the banner focus
      event = upcoming[0] || past[0];
      if (!event) return;
      if (kicker) {
        kicker.classList.add('is-upcoming');
        kicker.innerHTML =
          '<span class="ex-dot-live" style="background:#c29a63;animation:none"></span> Next Expo · ' +
          escapeHtml(event.city || 'Upcoming');
      }
    } else if (kicker) {
      kicker.classList.remove('is-upcoming');
      kicker.innerHTML =
        '<span class="ex-dot-live"></span> ' +
        escapeHtml((event.city || 'Live') + ' · ' + (event.statusLabel || 'Live Now'));
    }

    if (img) {
      img.src = event.img;
      img.alt = event.name || event.city || '';
    }
    setBannerVideo(event);
    if (title) title.innerHTML = formatBannerTitle(event);
    if (sub) sub.textContent = event.excerpt || '';

    if (meta) {
      meta.innerHTML =
        '<li><i class="far fa-calendar" aria-hidden="true"></i> <span>' + escapeHtml(event.dateLabel || '') + '</span></li>' +
        '<li><i class="far fa-clock" aria-hidden="true"></i> <span>' + escapeHtml(event.time || '') + '</span></li>' +
        '<li><i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span>' + escapeHtml(event.venue || '') + '</span></li>';
    }

    if (stats && event.stats) {
      var labels = { projects: 'Projects', developers: 'Developers', visitors: 'Visitors', booths: 'Booths' };
      stats.innerHTML = Object.keys(labels).map(function (key) {
        if (!event.stats[key]) return '';
        return '<div class="ex-banner-stat"><strong>' + escapeHtml(event.stats[key]) + '</strong><span>' + labels[key] + '</span></div>';
      }).join('');
    }

    if (registerBtn) registerBtn.setAttribute('data-event', event.slug);
    if (detailLink) detailLink.href = DETAIL_URL(event.slug);
  }

  var FEATURED_COUNT = 6;
  var COMPACT_STEP = 8;
  var DEFAULT_BANNER_VIDEO = 'https://videos.pexels.com/video-files/3209676/3209676-hd_1920_1080_25fps.mp4';

  function playBannerVideo() {
    var video = document.getElementById('exBannerVideo');
    var hero = document.getElementById('exActiveBanner');
    if (!video || !hero || hero.classList.contains('has-static-banner')) return;
    var promise = video.play();
    if (promise && promise.catch) {
      promise.catch(function () {
        hero.classList.add('has-static-banner');
      });
    }
  }

  function initBannerVideo() {
    var video = document.getElementById('exBannerVideo');
    var hero = document.getElementById('exActiveBanner');
    if (!video || !hero) return;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      hero.classList.add('has-static-banner');
      video.pause();
      return;
    }

    video.addEventListener('loadeddata', function () {
      video.classList.add('is-ready');
      playBannerVideo();
    }, { once: true });

    video.addEventListener('error', function () {
      hero.classList.add('has-static-banner');
    });

    playBannerVideo();
  }

  function setBannerVideo(event) {
    var video = document.getElementById('exBannerVideo');
    var videoSrc = document.getElementById('exBannerVideoSrc');
    var hero = document.getElementById('exActiveBanner');
    if (!video || !videoSrc || !hero || hero.classList.contains('has-static-banner')) return;

    var src = (event && event.video) || DEFAULT_BANNER_VIDEO;
    var poster = (event && event.img) || video.getAttribute('poster') || '';

    if (poster) video.poster = poster;
    if (videoSrc.getAttribute('src') !== src) {
      video.classList.remove('is-ready');
      videoSrc.src = src;
      video.load();
    }
  }

  var REGION_MAP = {
    canada: 'americas',
    usa: 'americas',
    'united states': 'americas',
    'united states of america': 'americas',
    uk: 'europe',
    'united kingdom': 'europe',
    germany: 'europe',
    france: 'europe',
    netherlands: 'europe',
    uae: 'middle-east',
    'united arab emirates': 'middle-east',
    dubai: 'middle-east',
    qatar: 'middle-east',
    'saudi arabia': 'middle-east',
    australia: 'asia-pacific',
    malaysia: 'asia-pacific',
    singapore: 'asia-pacific',
    japan: 'asia-pacific',
    'hong kong': 'asia-pacific',
    india: 'india'
  };

  function getRegion(event) {
    if (event.region) return String(event.region).toLowerCase();
    var key = String(event.country || event.city || '').toLowerCase().trim();
    return REGION_MAP[key] || 'asia-pacific';
  }

  var MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var REGION_SHORT = {
    americas: 'NA',
    europe: 'EU',
    'middle-east': 'ME',
    'asia-pacific': 'APAC',
    india: 'INDIA'
  };

  var ui = {
    monthKey: 'all'
  };

  function monthKeyOf(event) {
    var raw = String(event.dateStart || '');
    if (/^\d{4}-\d{2}/.test(raw)) return raw.slice(0, 7);
    var label = String(event.dateLabel || '');
    var yearMatch = label.match(/\d{4}/);
    var monthMatch = label.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*/i);
    if (!yearMatch || !monthMatch) return 'unknown';
    var mi = MONTH_NAMES.findIndex(function (m) {
      return monthMatch[1].toLowerCase().indexOf(m.toLowerCase()) === 0;
    });
    if (mi < 0) return 'unknown';
    return yearMatch[0] + '-' + String(mi + 1).padStart(2, '0');
  }

  function monthLabelOf(key) {
    if (!key || key === 'all' || key === 'unknown') return 'All';
    var parts = key.split('-');
    var mi = parseInt(parts[1], 10) - 1;
    return (MONTH_NAMES[mi] || parts[1]) + ' ' + parts[0];
  }

  function parseDateParts(event) {
    var label = String(event.dateLabel || '');
    var days = (label.match(/(\d{1,2}\s*[–—\-]\s*\d{1,2}|\d{1,2})/) || [])[1] || '';
    var month = (label.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*/i) || [])[1] || '';
    if ((!days || !month) && event.dateStart) {
      var d = new Date(event.dateStart + 'T12:00:00');
      if (!isNaN(d.getTime())) {
        if (!days) days = String(d.getDate());
        if (!month) month = MONTH_NAMES[d.getMonth()];
      }
    }
    return {
      days: days.replace(/\s+/g, ''),
      month: month.slice(0, 3).toUpperCase()
    };
  }

  function eventTitleRest(event) {
    var name = event.name || '';
    var city = event.city || '';
    if (!city || !name) return name || 'Property Expo';
    var re = new RegExp('^' + city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', 'i');
    var rest = name.replace(re, '').trim();
    return rest || 'Property Expo';
  }

  function buildMonthTabs() {
    var counts = {};
    upcoming.forEach(function (e) {
      var key = monthKeyOf(e);
      counts[key] = (counts[key] || 0) + 1;
    });
    var keys = Object.keys(counts).filter(function (k) { return k !== 'unknown'; }).sort();
    if (!keys.length) return [{ key: 'all', label: 'All', count: upcoming.length }];

    return [{ key: 'all', label: 'All Months', count: upcoming.length }].concat(keys.map(function (key) {
      return {
        key: key,
        label: monthLabelOf(key),
        count: counts[key]
      };
    }));
  }

  function filteredUpcoming() {
    if (ui.monthKey === 'all') return upcoming;
    return upcoming.filter(function (e) { return monthKeyOf(e) === ui.monthKey; });
  }

  function timelineCard(e, i) {
    var isLive = e.status === 'live';
    var region = getRegion(e);
    var regionShort = REGION_SHORT[region] || 'GLOBAL';
    var parts = parseDateParts(e);
    var titleRest = eventTitleRest(e);

    return (
      '<li class="ex-cal-card' + (isLive ? ' is-live' : '') + (i === 0 ? ' is-next' : '') + '">' +
        '<a class="ex-cal-link" href="' + DETAIL_URL(e.slug) + '">' +
          '<div class="ex-cal-date" aria-hidden="true">' +
            '<strong>' + escapeHtml(parts.days || '—') + '</strong>' +
            '<span>' + escapeHtml(parts.month || '') + '</span>' +
          '</div>' +
          '<div class="ex-cal-info">' +
            '<div class="ex-cal-top">' +
              '<span class="ex-cal-region">' + escapeHtml(regionShort) + '</span>' +
              (isLive ? '<span class="ex-cal-live">Live</span>' : '') +
            '</div>' +
            '<h3>' + escapeHtml(e.city || e.name || 'Expo') + '</h3>' +
            '<p class="ex-cal-name">' + escapeHtml(titleRest) + '</p>' +
            '<span class="ex-cal-country">' + escapeHtml(e.country || '') + '</span>' +
          '</div>' +
          '<span class="ex-cal-go" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>' +
        '</a>' +
        '<button type="button" class="ex-cal-pass openRegisterModalBtn" data-event="' + escapeHtml(e.slug) + '">' +
          (isLive ? 'Register' : 'VIP Pass') +
        '</button>' +
      '</li>'
    );
  }

  function renderMonthTabs() {
    var wrap = document.getElementById('exCalMonths');
    if (!wrap) return;
    var tabs = buildMonthTabs();
    if (ui.monthKey !== 'all' && !tabs.some(function (t) { return t.key === ui.monthKey; })) {
      ui.monthKey = 'all';
    }
    wrap.innerHTML = tabs.map(function (tab) {
      return (
        '<button type="button" class="ex-cal-month' + (tab.key === ui.monthKey ? ' is-active' : '') + '" data-month="' + tab.key + '" role="tab" aria-selected="' + (tab.key === ui.monthKey) + '">' +
          '<strong>' + escapeHtml(tab.label) + '</strong>' +
          '<span>' + String(tab.count).padStart(2, '0') + ' ' + (tab.count === 1 ? 'city' : 'cities') + '</span>' +
        '</button>'
      );
    }).join('');
  }

  function renderUpcoming() {
    var list = filteredUpcoming();
    var root = document.getElementById('exTimeline');
    var hint = document.getElementById('exTlHint');
    var sub = document.getElementById('exUpcomingSub');
    var reserve = document.getElementById('exCalReserve');

    if (sub) {
      sub.textContent = upcoming.length
        ? 'Plan your city stop. Switch months to explore ' + upcoming.length + ' investor expos worldwide.'
        : 'Follow our global calendar — register early for priority VIP access.';
    }

    if (!root) return;

    if (!list.length) {
      root.innerHTML = '<li class="ex-cal-empty">No expos in this month. Try another tab.</li>';
      if (hint) hint.textContent = 'No matches for this month.';
      return;
    }

    root.innerHTML = list.map(timelineCard).join('');

    if (reserve) {
      reserve.setAttribute('data-event', list[0].slug || '');
    }

    if (hint) {
      if (ui.monthKey === 'all') {
        hint.textContent = 'Showing all ' + list.length + ' upcoming destinations — more cities are added through the year.';
      } else {
        hint.textContent = list.length + ' destination' + (list.length === 1 ? '' : 's') + ' in ' + monthLabelOf(ui.monthKey) + '.';
      }
    }
  }

  /* ── Upcoming calendar board ── */
  function renderTimeline() {
    renderMonthTabs();
    renderUpcoming();
  }

  /* ── Past events (featured journey) ── */
  var pastList = [];
  var pastActive = 0;

  function yearOf(e) {
    var match = String(e.dateLabel || '').match(/\d{4}/);
    return match ? match[0] : (e.dateLabel || '');
  }

  function renderPastYears() {
    var years = document.getElementById('exPastYears');
    if (!years) return;
    years.innerHTML = pastList.map(function (e, i) {
      return (
        '<li class="ex-past-year-item">' +
          '<button type="button" class="ex-past-year-btn' + (i === pastActive ? ' is-active' : '') + '" data-idx="' + i + '">' +
            '<span class="ex-past-year-label">' + escapeHtml(yearOf(e)) + '</span>' +
            '<span class="ex-past-year-dot" aria-hidden="true"></span>' +
          '</button>' +
        '</li>'
      );
    }).join('');
  }

  function pastStatCell(icon, value, label) {
    if (!value) return '';
    return (
      '<div class="ex-pf-stat">' +
        '<span class="ex-pf-stat-ico" aria-hidden="true"><i class="fas ' + icon + '"></i></span>' +
        '<div><strong>' + escapeHtml(value) + '</strong><span>' + escapeHtml(label) + '</span></div>' +
      '</div>'
    );
  }

  function renderPastFeature() {
    var wrap = document.getElementById('exPastFeature');
    if (!wrap) return;

    if (!pastList.length) {
      wrap.innerHTML = '<p class="ex-past-empty">Past expo highlights will appear here soon.</p>';
      return;
    }

    var e = pastList[pastActive] || pastList[0];
    var location = (e.city || '') + (e.country ? ', ' + e.country : '');
    var stats = e.stats || {};
    var highlights = Array.isArray(e.highlights) ? e.highlights.slice(0, 3) : [];
    var isLatest = pastActive === 0;

    wrap.innerHTML =
      '<article class="ex-pf-card">' +
        '<div class="ex-pf-media">' +
          '<img src="' + escapeHtml(e.img) + '" alt="' + escapeHtml(e.name || e.city || 'Past expo') + '" loading="lazy">' +
          (isLatest ? '<span class="ex-pf-latest"><i class="fas fa-star" aria-hidden="true"></i> Latest</span>' : '') +
          '<div class="ex-pf-statbar">' +
            pastStatCell('fa-users', stats.visitors, 'Visitors') +
            pastStatCell('fa-building', stats.developers, 'Developers') +
            pastStatCell('fa-globe', stats.projects, 'Projects Showcased') +
          '</div>' +
        '</div>' +
        '<div class="ex-pf-body">' +
          '<div class="ex-pf-meta">' +
            '<span><i class="far fa-calendar" aria-hidden="true"></i> ' + escapeHtml(e.dateLabel || '') + '</span>' +
            '<span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ' + escapeHtml(location) + '</span>' +
          '</div>' +
          '<h3>' + escapeHtml(e.name || (e.city + ' Property Expo')) + '</h3>' +
          '<p class="ex-pf-venue"><i class="fas fa-location-dot" aria-hidden="true"></i> ' + escapeHtml(e.venue || '') + '</p>' +
          '<p class="ex-pf-desc">' + escapeHtml(e.description || e.excerpt || '') + '</p>' +
          (highlights.length
            ? '<span class="ex-pf-hl-label">Highlights</span>' +
              '<ul class="ex-pf-hl">' +
                highlights.map(function (h) {
                  return '<li><i class="fas fa-circle-check" aria-hidden="true"></i> ' + escapeHtml(h) + '</li>';
                }).join('') +
              '</ul>'
            : '') +
          '<a class="ex-pf-cta" href="' + DETAIL_URL(e.slug) + '">View Recap <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
        '</div>' +
      '</article>';
  }

  function setPastActive(index) {
    if (!pastList.length) return;
    var n = pastList.length;
    pastActive = ((index % n) + n) % n;
    renderPastYears();
    renderPastFeature();
  }

  function renderPast(list) {
    pastList = Array.isArray(list) ? list : [];
    if (pastActive >= pastList.length) pastActive = 0;
    renderPastYears();
    renderPastFeature();
  }

  /* ── Modal event select ── */
  function fillEventSelect() {
    var select = document.getElementById('exEvent');
    if (!select) return;
    var options = data
      .filter(function (e) { return e.status === 'live' || e.status === 'upcoming'; })
      .sort(byDate)
      .map(function (e) {
        return '<option value="' + e.slug + '">' + e.city + ' · ' + e.dateLabel + '</option>';
      }).join('');
    select.innerHTML = '<option value="">Select expo</option>' + options;
  }

  renderBanner(live);
  initBannerVideo();
  renderTimeline();
  renderPast(past);
  fillEventSelect();

  window.__inchbrickInitEventsExpo = function () {
    refreshEventLists();
    renderBanner(live);
    renderTimeline();
    renderPast(past);
    fillEventSelect();
  };

  window.addEventListener('html-page-scripts-ready', function () {
    window.__inchbrickInitEventsExpo();
  });

  // Retry if React remount wiped the timeline after first paint
  setTimeout(function () {
    var root = document.getElementById('exTimeline');
    if (root && !root.querySelector('.ex-tl-item')) {
      window.__inchbrickInitEventsExpo();
    }
  }, 120);
  setTimeout(function () {
    var root = document.getElementById('exTimeline');
    if (root && !root.querySelector('.ex-tl-item')) {
      window.__inchbrickInitEventsExpo();
    }
  }, 500);

  /* Past events journey navigation */
  var pastPrev = document.getElementById('exPastPrev');
  var pastNext = document.getElementById('exPastNext');
  var pastYears = document.getElementById('exPastYears');

  if (pastPrev) {
    pastPrev.addEventListener('click', function () {
      setPastActive(pastActive - 1);
    });
  }
  if (pastNext) {
    pastNext.addEventListener('click', function () {
      setPastActive(pastActive + 1);
    });
  }
  if (pastYears) {
    pastYears.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-idx]');
      if (!btn) return;
      setPastActive(parseInt(btn.getAttribute('data-idx'), 10) || 0);
    });
  }

  /* Month tabs */
  var monthWrap = document.getElementById('exCalMonths');
  if (monthWrap) {
    monthWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-month]');
      if (!btn) return;
      ui.monthKey = btn.getAttribute('data-month') || 'all';
      renderTimeline();
    });
  }

  /* Modal */
  var modal = document.getElementById('expoRegisterModal');
  var closeBtn = document.getElementById('closeModalBtn');
  var evtSelect = document.getElementById('exEvent');

  function openModal(eventValue) {
    if (!modal) return;
    modal.classList.add('ex-open');
    document.body.style.overflow = 'hidden';
    if (eventValue && evtSelect) evtSelect.value = eventValue;
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('ex-open');
    document.body.style.overflow = '';
  }

  // Always start closed (avoids stuck blur overlay after remounts)
  closeModal();

  function bindRegister(el) {
    el.addEventListener('click', function () {
      openModal(el.getAttribute('data-event') || '');
    });
  }

  document.querySelectorAll('.openRegisterModalBtn').forEach(bindRegister);

  // Re-bind for timeline buttons added after DOM parse
  var timeline = document.getElementById('exTimeline');
  if (timeline) {
    timeline.addEventListener('click', function (e) {
      var btn = e.target.closest('.openRegisterModalBtn');
      if (btn) openModal(btn.getAttribute('data-event') || '');
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('ex-open')) closeModal();
  });

  /* Form */
  var form = document.getElementById('expoRegisterForm');
  var noteEl = document.getElementById('exFormNote');

  function setNote(msg, ok) {
    if (!noteEl) return;
    noteEl.textContent = msg;
    noteEl.className = 'ex-form-msg' + (ok ? ' ok' : '');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('exName') || {}).value.trim();
      var phone = (document.getElementById('exPhone') || {}).value.trim();
      var email = (document.getElementById('exEmail') || {}).value.trim();
      var evt = (evtSelect || {}).value;

      if (!name || !phone || !email || !evt) {
        setNote('Please fill all required fields.', false);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setNote('Enter a valid email.', false);
        return;
      }

      setNote('Registered! Check your email for your e-pass.', true);
      form.reset();
      setTimeout(function () {
        closeModal();
        setTimeout(function () { setNote('', false); }, 400);
      }, 2200);
    });
  }

  /* ── Gallery: cinematic exhibition reel ── */
  function runGalleryInit() {
    var track = document.getElementById('exGalTrack');
    var counter = document.getElementById('exGalCounter');
    var label = document.getElementById('exGalLabel');
    var thumbs = document.getElementById('exGalThumbs');
    var btnPrev = document.getElementById('exGalPrev');
    var btnNext = document.getElementById('exGalNext');
    var progress = document.getElementById('exGalProgress');
    var viewport = track && track.parentElement;
    var section = document.getElementById('ex-gallery');
    if (!track || !viewport || !section) return;

    if (section.dataset.galReady === '1') return;
    section.dataset.galReady = '1';

    if (typeof window.__exGalStopAuto === 'function') {
      window.__exGalStopAuto();
    }

    var slides = Array.prototype.slice.call(track.querySelectorAll('.ex-gal-slide'));
    var total = slides.length;
    if (!total) return;

    var current = 0;
    var animating = false;
    var autoTimer = null;
    var AUTO_MS = 5000;
    var ANIM_MS = 1050;
    var mobile = window.matchMedia('(max-width: 768px)');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var touchStartX = 0;
    var userPaused = false;
    var inView = false;
    var hoverReady = false;

    function pad(n) {
      return (n < 10 ? '0' : '') + n;
    }

    function stopProgress() {
      if (!progress) return;
      progress.classList.remove('is-running');
      progress.style.width = '0%';
      void progress.offsetWidth;
    }

    function startProgress() {
      if (!progress || reducedMotion.matches) return;
      stopProgress();
      progress.style.setProperty('--gal-auto', AUTO_MS + 'ms');
      section.style.setProperty('--gal-auto', AUTO_MS + 'ms');
      progress.classList.add('is-running');
    }

    function stopAuto() {
      if (autoTimer) {
        clearTimeout(autoTimer);
        autoTimer = null;
      }
      stopProgress();
    }

    function pauseAuto() {
      userPaused = true;
      stopAuto();
    }

    function resumeAuto() {
      userPaused = false;
      if (inView) scheduleAuto(AUTO_MS);
    }

    function scheduleAuto(delay) {
      stopAuto();
      if (userPaused || !inView || total < 2 || document.hidden) return;
      if (delay === AUTO_MS || delay >= AUTO_MS - 50) startProgress();
      autoTimer = setTimeout(function () {
        autoTimer = null;
        if (userPaused || !inView || document.hidden) return;
        if (animating) {
          scheduleAuto(250);
          return;
        }
        goTo(current + 1, 1);
        scheduleAuto(AUTO_MS);
      }, delay);
    }

    function resetAuto() {
      if (!userPaused && inView && !document.hidden) scheduleAuto(AUTO_MS);
    }

    window.__exGalStopAuto = function () {
      userPaused = true;
      stopAuto();
    };

    function sceneLabel(slide) {
      var title = slide.getAttribute('data-title') || '';
      var place = slide.getAttribute('data-place') || '';
      return place ? title + ' · ' + place : title;
    }

    function buildThumbs() {
      if (!thumbs) return;
      thumbs.innerHTML = slides.map(function (slide, i) {
        var img = slide.querySelector('img');
        var title = slide.getAttribute('data-title') || ('Scene ' + (i + 1));
        var src = img ? img.getAttribute('src') : '';
        return (
          '<button type="button" data-i="' + i + '" data-num="' + pad(i + 1) + '" data-title="' + title.replace(/"/g, '&quot;') + '" aria-label="' + title + '"' +
          (i === 0 ? ' class="is-active"' : '') + '>' +
            '<img src="' + src + '" alt="">' +
          '</button>'
        );
      }).join('');
    }

    function scrollThumbIntoView(btn) {
      if (!thumbs || !btn) return;
      var left = btn.offsetLeft;
      var right = left + btn.offsetWidth;
      var viewLeft = thumbs.scrollLeft;
      var viewRight = viewLeft + thumbs.clientWidth;
      if (left < viewLeft) {
        thumbs.scrollLeft = left - 8;
      } else if (right > viewRight) {
        thumbs.scrollLeft = right - thumbs.clientWidth + 8;
      }
    }

    function updateMeta(nextIndex) {
      if (counter) counter.textContent = pad(nextIndex + 1) + ' / ' + pad(total);
      if (thumbs) {
        Array.prototype.forEach.call(thumbs.children, function (btn, i) {
          btn.classList.toggle('is-active', i === nextIndex);
          if (i === nextIndex && inView) scrollThumbIntoView(btn);
        });
      }
      if (label) {
        label.classList.add('is-changing');
        window.setTimeout(function () {
          label.textContent = sceneLabel(slides[nextIndex]);
          label.classList.remove('is-changing');
        }, reducedMotion.matches ? 0 : 180);
      }
    }

    function clearMotionClasses() {
      slides.forEach(function (slide) {
        slide.classList.remove('is-entering', 'is-leaving', 'is-forward', 'is-back');
      });
      viewport.classList.remove('is-sweeping');
    }

    function setInstant(nextIndex) {
      clearMotionClasses();
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === nextIndex);
      });
      current = nextIndex;
      updateMeta(current);
    }

    function goTo(index, direction) {
      var next = (index + total) % total;
      if (next === current || animating) return;

      var step = (next - current + total) % total;
      var forward = direction != null ? direction > 0 : step <= total / 2;
      var dirClass = forward ? 'is-forward' : 'is-back';

      if (reducedMotion.matches) {
        setInstant(next);
        return;
      }

      animating = true;
      var prevSlide = slides[current];
      var nextSlide = slides[next];

      clearMotionClasses();
      slides.forEach(function (slide) {
        slide.classList.remove('is-active');
      });

      prevSlide.classList.add('is-leaving', dirClass);
      nextSlide.classList.add('is-entering', dirClass);
      viewport.classList.add('is-sweeping');
      current = next;
      updateMeta(current);

      window.setTimeout(function () {
        clearMotionClasses();
        nextSlide.classList.add('is-active');
        animating = false;
      }, mobile.matches ? 750 : ANIM_MS);
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1, -1); resetAuto(); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1, 1); resetAuto(); });

    if (thumbs) {
      thumbs.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-i]');
        if (!btn) return;
        goTo(parseInt(btn.getAttribute('data-i'), 10) || 0);
        resetAuto();
      });
    }

    viewport.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 50) return;
      goTo(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
      resetAuto();
    }, { passive: true });

    if (section) {
      section.addEventListener('mouseenter', function () {
        if (hoverReady) pauseAuto();
      });
      section.addEventListener('mouseleave', function () {
        if (hoverReady) resumeAuto();
      });

      if ('IntersectionObserver' in window) {
        var viewObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            inView = entry.isIntersecting && entry.intersectionRatio >= 0.3;
            if (inView && !userPaused && !document.hidden) {
              scheduleAuto(1200);
            } else {
              stopAuto();
            }
          });
        }, { threshold: [0, 0.3, 0.55] });
        viewObserver.observe(section);
      } else {
        inView = true;
      }
    } else {
      inView = true;
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto();
      else if (!userPaused && inView) scheduleAuto(AUTO_MS);
    });

    window.addEventListener('resize', function () {
      if (animating) return;
      setInstant(current);
    });

    buildThumbs();
    setInstant(0);

    window.setTimeout(function () {
      hoverReady = true;
    }, 1800);

    if (inView) scheduleAuto(1200);
  }

  function bootGallery() {
    if (!document.getElementById('exGalTrack')) {
      requestAnimationFrame(bootGallery);
      return;
    }
    function start() {
      runGalleryInit();
    }
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootGallery);
  } else {
    bootGallery();
  }

  window.addEventListener('pageshow', function (ev) {
    var section = document.getElementById('ex-gallery');
    if (!section || !document.getElementById('exGalTrack')) return;
    if (ev.persisted) {
      delete section.dataset.galReady;
      runGalleryInit();
    }
  });
})();
