(function () {
  function initWtrustDrag() {
    var track = document.querySelector(".wtrust-grid");
    if (!track || track.dataset.dragReady === "1") return;
    track.dataset.dragReady = "1";

    var isDown = false;
    var startX = 0;
    var startScroll = 0;
    var moved = false;

    function onDown(clientX) {
      isDown = true;
      moved = false;
      startX = clientX;
      startScroll = track.scrollLeft;
      track.classList.add("is-dragging");
    }

    function onMove(clientX, e) {
      if (!isDown) return;
      var dx = clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startScroll - dx;
      if (e && e.cancelable && moved) e.preventDefault();
    }

    function onUp() {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("is-dragging");
    }

    track.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      onDown(e.clientX);
    });

    window.addEventListener("mousemove", function (e) {
      onMove(e.clientX, e);
    });

    window.addEventListener("mouseup", onUp);

    track.addEventListener(
      "touchstart",
      function (e) {
        if (!e.touches || !e.touches.length) return;
        onDown(e.touches[0].clientX);
      },
      { passive: true }
    );

    track.addEventListener(
      "touchmove",
      function (e) {
        if (!e.touches || !e.touches.length) return;
        onMove(e.touches[0].clientX, e);
      },
      { passive: false }
    );

    track.addEventListener("touchend", onUp);
    track.addEventListener("touchcancel", onUp);

    track.addEventListener(
      "click",
      function (e) {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWtrustDrag);
  } else {
    initWtrustDrag();
  }

  window.addEventListener("html-page-scripts-ready", initWtrustDrag);
})();
