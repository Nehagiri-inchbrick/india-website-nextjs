(function () {
  'use strict';

  var DETAIL_URL = function (slug) {
    return '/event-detail?slug=' + encodeURIComponent(slug);
  };

  var data = Array.isArray(window.EVENTS_DATA) ? window.EVENTS_DATA.slice() : [];

  function byDate(a, b) {
    return String(a.dateStart || '').localeCompare(String(b.dateStart || ''));
  }

  var live = data.find(function (e) { return e.status === 'live'; }) || null;
  var upcoming = data.filter(function (e) { return e.status === 'upcoming'; }).sort(byDate);
  var past = data.filter(function (e) { return e.status === 'past'; }).sort(function (a, b) {
    return String(b.dateStart || '').localeCompare(String(a.dateStart || ''));
  });

  /* ── Active event banner ── */
  function renderBanner(event) {
    var img = document.getElementById('exBannerImg');
    var kicker = document.getElementById('exBannerKicker');
    var title = document.getElementById('exBannerTitle');
    var sub = document.getElementById('exBannerSub');
    var meta = document.getElementById('exBannerMeta');
    var stats = document.getElementById('exBannerStats');
    var registerBtn = document.getElementById('exBannerRegister');
    var detailLink = document.getElementById('exBannerDetail');
    var ctaBtn = document.getElementById('exCtaRegister');
    var devs = document.getElementById('exBannerDevs');

    if (!event) {
      // Fallback: next upcoming becomes the banner focus
      event = upcoming[0] || past[0];
      if (!event) return;
      if (kicker) {
        kicker.innerHTML = '<span class="ex-dot-live" style="background:#c29a63;animation:none"></span> Next Expo';
        kicker.style.background = 'rgba(194,154,99,.22)';
        kicker.style.borderColor = 'rgba(194,154,99,.5)';
        kicker.style.color = '#f2d6a2';
      }
    } else if (kicker) {
      kicker.innerHTML =
        '<span class="ex-dot-live"></span> ' +
        (event.city || 'Live') + ' · ' + (event.statusLabel || 'Live Now');
    }

    if (img) {
      img.src = event.img;
      img.alt = event.name || event.city || '';
    }
    setBannerVideo(event);
    if (title) title.textContent = event.name || (event.city + ' Property Expo');
    if (sub) sub.textContent = event.excerpt || '';

    if (meta) {
      meta.innerHTML =
        '<li><i class="far fa-calendar" aria-hidden="true"></i> <span>' + (event.dateLabel || '') + '</span></li>' +
        '<li><i class="far fa-clock" aria-hidden="true"></i> <span>' + (event.time || '') + '</span></li>' +
        '<li><i class="fas fa-map-marker-alt" aria-hidden="true"></i> <span>' + (event.venue || '') + '</span></li>';
    }

    if (stats && event.stats) {
      var labels = { projects: 'Projects', developers: 'Developers', visitors: 'Visitors', booths: 'Booths' };
      stats.innerHTML = Object.keys(labels).map(function (key) {
        if (!event.stats[key]) return '';
        return '<div class="ex-banner-stat"><strong>' + event.stats[key] + '</strong><span>' + labels[key] + '</span></div>';
      }).join('');
    }

    if (registerBtn) registerBtn.setAttribute('data-event', event.slug);
    if (ctaBtn) ctaBtn.setAttribute('data-event', event.slug);
    if (detailLink) detailLink.href = DETAIL_URL(event.slug);

    if (devs && Array.isArray(event.developers)) {
      var logos = event.developers.slice(0, 5).map(function (d) {
        return '<img src="' + d.logo + '" alt="' + (d.name || '') + '">';
      }).join('');
      var more = event.developers.length > 5
        ? '<span>+' + (event.developers.length - 5) + ' more</span>'
        : '';
      devs.innerHTML = logos + more;
    }
  }

  var FEATURED_COUNT = 4;
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

  var ui = {
    region: 'all',
    compactVisible: 0,
    expanded: false
  };

  function filteredUpcoming() {
    if (ui.region === 'all') return upcoming;
    return upcoming.filter(function (e) { return getRegion(e) === ui.region; });
  }

  function timelineCard(e, i) {
    return (
      '<li class="ex-tl-item' + (i === 0 ? ' is-next' : '') + '">' +
        '<span class="ex-tl-dot" aria-hidden="true"></span>' +
        '<div class="ex-tl-card">' +
          '<div class="ex-tl-img"><img src="' + e.img + '" alt="' + (e.city || '') + '" loading="lazy"></div>' +
          '<div class="ex-tl-body">' +
            '<span class="ex-tl-date"><i class="far fa-calendar" aria-hidden="true"></i> ' + (e.dateLabel || '') + '</span>' +
            '<h3>' + (e.name || e.city) + '</h3>' +
            '<p class="ex-tl-loc"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>' +
              (e.venue || '') + (e.city ? ' · ' + e.city : '') +
            '</p>' +
            '<div class="ex-tl-actions">' +
              '<button type="button" class="ex-btn ex-btn--fill openRegisterModalBtn" data-event="' + e.slug + '">' +
                'Get VIP Pass <i class="fas fa-arrow-right" aria-hidden="true"></i>' +
              '</button>' +
              '<a class="ex-btn ex-btn--gold-outline" href="' + DETAIL_URL(e.slug) + '">Details</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</li>'
    );
  }

  function compactRow(e) {
    return (
      '<li>' +
        '<a class="ex-compact-item" href="' + DETAIL_URL(e.slug) + '">' +
          '<span class="ex-compact-date">' + (e.dateLabel || '') + '</span>' +
          '<div class="ex-compact-info">' +
            '<h4>' + (e.name || e.city) + '</h4>' +
            '<p>' + (e.city || '') + (e.country ? ', ' + e.country : '') + '</p>' +
          '</div>' +
          '<span class="ex-compact-cta">Details <i class="fas fa-arrow-right" aria-hidden="true"></i></span>' +
        '</a>' +
      '</li>'
    );
  }

  function updateFilterCounts() {
    var allBtn = document.querySelector('.ex-filter[data-region="all"] span');
    if (allBtn) allBtn.textContent = String(upcoming.length);

    document.querySelectorAll('.ex-filter[data-region]').forEach(function (btn) {
      var region = btn.getAttribute('data-region');
      if (region === 'all') return;
      var count = upcoming.filter(function (e) { return getRegion(e) === region; }).length;
      var badge = btn.querySelector('span');
      if (!badge) {
        badge = document.createElement('span');
        btn.appendChild(badge);
      }
      badge.textContent = String(count);
      btn.hidden = count === 0;
    });
  }

  function renderUpcoming() {
    var list = filteredUpcoming();
    var root = document.getElementById('exTimeline');
    var compactWrap = document.getElementById('exCompactWrap');
    var compactList = document.getElementById('exCompactList');
    var moreBtn = document.getElementById('exShowMoreBtn');
    var lessBtn = document.getElementById('exShowLessBtn');
    var hint = document.getElementById('exTlHint');
    var sub = document.getElementById('exUpcomingSub');

    if (sub) {
      sub.textContent = upcoming.length
        ? upcoming.length + ' upcoming expos worldwide — browse the next stops or filter by region.'
        : 'Follow our global calendar — register early for priority VIP access.';
    }

    if (!root) return;

    if (!list.length) {
      root.innerHTML = '<li class="ex-tl-empty">No upcoming expos in this region. Try another filter.</li>';
      if (compactWrap) compactWrap.hidden = true;
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = true;
      if (hint) hint.textContent = 'No matches for this filter.';
      return;
    }

    var featured = list.slice(0, FEATURED_COUNT);
    var rest = list.slice(FEATURED_COUNT);

    root.innerHTML = featured.map(timelineCard).join('');

    if (!rest.length) {
      if (compactWrap) compactWrap.hidden = true;
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = true;
      if (hint) {
        hint.textContent = 'Showing all ' + list.length + ' upcoming expo' + (list.length === 1 ? '' : 's') +
          (ui.region === 'all' ? '' : ' in this region') + '.';
      }
      return;
    }

    if (!ui.expanded) {
      ui.compactVisible = 0;
      if (compactWrap) compactWrap.hidden = true;
      if (compactList) compactList.innerHTML = '';
      if (moreBtn) {
        moreBtn.hidden = false;
        moreBtn.innerHTML = 'Show more expos (' + rest.length + ' more) <i class="fas fa-chevron-down" aria-hidden="true"></i>';
      }
      if (lessBtn) lessBtn.hidden = true;
      if (hint) {
        hint.textContent = 'Showing next ' + featured.length + ' of ' + list.length +
          ' — tap Show more for the compact calendar.';
      }
      return;
    }

    var visible = Math.min(ui.compactVisible || COMPACT_STEP, rest.length);
    ui.compactVisible = visible;
    if (compactWrap) compactWrap.hidden = false;
    if (compactList) compactList.innerHTML = rest.slice(0, visible).map(compactRow).join('');

    var remaining = rest.length - visible;
    if (moreBtn) {
      moreBtn.hidden = remaining <= 0;
      moreBtn.innerHTML = remaining > 0
        ? 'Show ' + Math.min(COMPACT_STEP, remaining) + ' more <i class="fas fa-chevron-down" aria-hidden="true"></i>'
        : '';
    }
    if (lessBtn) lessBtn.hidden = false;
    if (hint) {
      hint.textContent = 'Showing ' + (featured.length + visible) + ' of ' + list.length + ' upcoming expos.';
    }
  }

  /* ── Upcoming timeline (featured + compact) ── */
  function renderTimeline() {
    updateFilterCounts();
    renderUpcoming();
  }

  /* ── Past events ── */
  function renderPast(list) {
    var track = document.getElementById('pastExposTrack');
    if (!track) return;

    if (!list.length) {
      track.innerHTML = '<p class="ex-past-empty">Past expo highlights will appear here soon.</p>';
      return;
    }

    track.innerHTML = list.map(function (e) {
      var location = (e.city || '') + (e.country ? ', ' + e.country : '');
      return (
        '<a href="' + DETAIL_URL(e.slug) + '" class="ex-past-card">' +
          '<div class="ex-past-img">' +
            '<img src="' + e.img + '" alt="' + (e.name || e.city || 'Past expo') + '" loading="lazy">' +
            '<span class="ex-past-year">' + (e.dateLabel || '') + '</span>' +
            '<span class="ex-past-shade"></span>' +
          '</div>' +
          '<div class="ex-past-body">' +
            '<span class="ex-past-badge"><i class="fas fa-check-circle" aria-hidden="true"></i> Completed</span>' +
            '<h3>' + (e.name || e.city + ' Property Expo') + '</h3>' +
            '<ul class="ex-past-meta">' +
              '<li><i class="far fa-calendar" aria-hidden="true"></i> ' + (e.dateLabel || '') + '</li>' +
              '<li><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ' + (e.venue || '') + '</li>' +
            '</ul>' +
            '<span class="ex-past-loc">' + location + '</span>' +
            '<span class="ex-past-link">View recap <i class="fas fa-arrow-right" aria-hidden="true"></i></span>' +
          '</div>' +
        '</a>'
      );
    }).join('');
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

  /* Past events carousel */
  var pastTrack = document.getElementById('pastExposTrack');
  var pastPrev = document.getElementById('exPastPrev');
  var pastNext = document.getElementById('exPastNext');

  function pastStep() {
    var card = pastTrack && pastTrack.querySelector('.ex-past-card');
    if (!card) return 340;
    var gap = parseFloat(window.getComputedStyle(pastTrack).gap) || 16;
    return card.offsetWidth + gap;
  }

  if (pastTrack && pastPrev && pastNext) {
    pastPrev.addEventListener('click', function () {
      pastTrack.scrollBy({ left: -pastStep(), behavior: 'smooth' });
    });
    pastNext.addEventListener('click', function () {
      pastTrack.scrollBy({ left: pastStep(), behavior: 'smooth' });
    });
  }

  /* Filters + show more */
  document.querySelectorAll('.ex-filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.ex-filter').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      ui.region = btn.getAttribute('data-region') || 'all';
      ui.expanded = false;
      ui.compactVisible = 0;
      renderUpcoming();
    });
  });

  var moreBtn = document.getElementById('exShowMoreBtn');
  var lessBtn = document.getElementById('exShowLessBtn');

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      if (!ui.expanded) {
        ui.expanded = true;
        ui.compactVisible = COMPACT_STEP;
      } else {
        ui.compactVisible += COMPACT_STEP;
      }
      renderUpcoming();
    });
  }

  if (lessBtn) {
    lessBtn.addEventListener('click', function () {
      ui.expanded = false;
      ui.compactVisible = 0;
      renderUpcoming();
      var section = document.getElementById('ex-upcoming');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  /* ── Gallery: compact reel (no scroll-jack) ── */
  function runGalleryInit() {
    var track = document.getElementById('exGalTrack');
    var counter = document.getElementById('exGalCounter');
    var label = document.getElementById('exGalLabel');
    var thumbs = document.getElementById('exGalThumbs');
    var btnPrev = document.getElementById('exGalPrev');
    var btnNext = document.getElementById('exGalNext');
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

    function stopAuto() {
      if (autoTimer) {
        clearTimeout(autoTimer);
        autoTimer = null;
      }
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
          '<button type="button" data-i="' + i + '" aria-label="' + title + '"' +
          (i === 0 ? ' class="is-active"' : '') + '>' +
            '<img src="' + src + '" alt="">' +
          '</button>'
        );
      }).join('');
    }

    function sizeSlides() {
      /* stacked slides — no width sizing needed */
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
