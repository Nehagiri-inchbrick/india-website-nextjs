/**
 * Inch & Brick — Google Reviews & Client Stories sliders
 * Targets: .mockup-reviews-track and .mockup-videos-track containers
 */
(function () {

  function slideWidth(track) {
    var child = track.children[0];
    if (!child) return 0;
    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.gap || styles.columnGap) || 16;
    return child.getBoundingClientRect().width + gap;
  }

  function visibleCount(track) {
    if (window.innerWidth <= 768) return 1;
    var child = track.children[0];
    if (!child) return 1;
    var vp = track.parentElement; /* .mockup-slider-viewport */
    var vpWidth = vp ? vp.getBoundingClientRect().width : window.innerWidth;
    var childWidth = child.getBoundingClientRect().width;
    return Math.max(1, Math.round(vpWidth / childWidth));
  }

  function makeSlider(opts) {
    /* opts: { track, prevBtn, nextBtn, dots } */
    var track = opts.track;
    var prev  = opts.prevBtn;
    var next  = opts.nextBtn;
    var dots  = opts.dots || [];
    if (!track) return;

    var index = 0;

    function maxIdx() {
      return Math.max(0, track.children.length - visibleCount(track));
    }

    function render() {
      var max = maxIdx();
      index = Math.min(Math.max(index, 0), max);
      track.style.transform = 'translateX(-' + (index * slideWidth(track)) + 'px)';

      if (prev) prev.disabled = (index <= 0);
      if (next) next.disabled = (index >= max);

      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    if (prev) prev.addEventListener('click', function () { index--; render(); });
    if (next) next.addEventListener('click', function () { index++; render(); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { index = i; render(); });
    });

    /* Touch swipe */
    var startX = 0, deltaX = 0, dragging = false;
    track.addEventListener('touchstart', function (e) {
      if (!e.touches[0]) return;
      dragging = true; startX = e.touches[0].clientX; deltaX = 0;
    }, { passive: true });
    track.addEventListener('touchmove', function (e) {
      if (!dragging || !e.touches[0]) return;
      deltaX = e.touches[0].clientX - startX;
    }, { passive: true });
    track.addEventListener('touchend', function () {
      if (!dragging) return;
      dragging = false;
      if (Math.abs(deltaX) > 40) { index += deltaX < 0 ? 1 : -1; render(); }
    });

    window.addEventListener('resize', render);
    setTimeout(render, 200);
  }

  function initMockupSliders() {
    /* ---- Reviews slider ---- */
    var reviewsSection = document.getElementById('reviewsVideoSection');
    if (!reviewsSection) return;

    var googleRow   = reviewsSection.querySelector('.mockup-google');
    var storiesRow  = reviewsSection.querySelector('.mockup-stories');

    if (googleRow && !googleRow.dataset.mockupReady) {
      googleRow.dataset.mockupReady = '1';
      makeSlider({
        track:   googleRow.querySelector('.mockup-track'),
        prevBtn: googleRow.querySelector('.mockup-nav-btn.prev'),
        nextBtn: googleRow.querySelector('.mockup-nav-btn.next'),
        dots:    Array.from(googleRow.querySelectorAll('.m-dot'))
      });
    }

    /* ---- Client Stories slider ---- */
    if (storiesRow && !storiesRow.dataset.mockupReady) {
      storiesRow.dataset.mockupReady = '1';
      makeSlider({
        track:   storiesRow.querySelector('.mockup-track'),
        prevBtn: storiesRow.querySelector('.mockup-nav-btn.prev'),
        nextBtn: storiesRow.querySelector('.mockup-nav-btn.next'),
        dots:    Array.from(storiesRow.querySelectorAll('.m-dot'))
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMockupSliders);
  } else {
    initMockupSliders();
  }

  window.addEventListener('html-page-scripts-ready', initMockupSliders);

})();
