(function () {
  /** Mouse-only drag helper. Touch uses native overflow scroll. */
  function enableMouseDrag(track) {
    if (!track || track.dataset.dragReady === "1") return;
    track.dataset.dragReady = "1";

    var isDown = false;
    var startX = 0;
    var startScroll = 0;
    var moved = false;

    track.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      // Touch devices already scroll natively — skip custom drag there.
      if (window.matchMedia("(pointer: coarse)").matches) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
    });

    window.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 6) {
        moved = true;
        track.classList.add("is-dragging");
      }
      if (!moved) return;
      track.scrollLeft = startScroll - dx;
      e.preventDefault();
    });

    window.addEventListener("mouseup", function () {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("is-dragging");
    });

    track.addEventListener(
      "click",
      function (e) {
        if (!moved) return;
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      },
      true
    );
  }

  function init() {
    document
      .querySelectorAll(
        ".wtrust-grid, .sp-features, .ls-grid, .developers-projects .developer-grid, .compact-review-list, .rv-video-grid, .mood-slider-viewport, .client-carousel-viewport"
      )
      .forEach(enableMouseDrag);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("html-page-scripts-ready", init);
  window.__inchbrickInitHorizontalDrag = init;
})();
