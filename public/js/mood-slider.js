/**
 * Curated Lifestyle Collections — home mood card slider
 */
(function () {
  "use strict";

  var bound = false;

  function getStep(viewport) {
    var card = viewport.querySelector(".mood-card");
    var gap = 16;
    if (!card) return 280 + gap;
    var styles = window.getComputedStyle(viewport.querySelector(".mood-cards-container") || viewport);
    var gapVal = parseFloat(styles.columnGap || styles.gap || String(gap));
    if (!Number.isFinite(gapVal)) gapVal = gap;
    return card.offsetWidth + gapVal;
  }

  function onClick(e) {
    var prev = e.target.closest && e.target.closest("#moodPrev, .mood-prev");
    var next = e.target.closest && e.target.closest("#moodNext, .mood-next");
    if (!prev && !next) return;

    var wrap = (prev || next).closest(".mood-slider-wrap");
    var viewport =
      (wrap && wrap.querySelector("#moodViewport, .mood-slider-viewport")) ||
      document.getElementById("moodViewport");
    if (!viewport) return;

    e.preventDefault();
    var step = getStep(viewport);
    viewport.scrollBy({ left: next ? step : -step, behavior: "smooth" });
  }

  function initMoodSlider() {
    var viewport = document.getElementById("moodViewport");
    var prevBtn = document.getElementById("moodPrev");
    var nextBtn = document.getElementById("moodNext");
    if (!viewport || !prevBtn || !nextBtn) return false;

    if (!bound) {
      document.addEventListener("click", onClick);
      bound = true;
    }

    // Ensure horizontal scroll works even if CSS was overflow:hidden
    viewport.style.overflowX = "auto";
    viewport.style.overflowY = "hidden";
    viewport.style.scrollBehavior = "smooth";
    viewport.style.webkitOverflowScrolling = "touch";

    return true;
  }

  window.__inchbrickInitMoodSlider = initMoodSlider;

  function boot() {
    if (initMoodSlider()) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (initMoodSlider() || tries > 40) clearInterval(timer);
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("html-page-scripts-ready", function () {
    initMoodSlider();
  });
})();
