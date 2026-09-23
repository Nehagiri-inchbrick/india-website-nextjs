(function () {
  function run() {
    if (!window.CURRENCY) return;
    window.CURRENCY.annotatePrices(document.getElementById('main-content'));
  }

  function schedule() {
    requestAnimationFrame(run);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule);
  } else {
    schedule();
  }

  window.addEventListener('inchbrick-currency-change', schedule);
  window.addEventListener('html-page-scripts-ready', function () {
    setTimeout(schedule, 50);
  });

  var root = document.getElementById('main-content');
  if (root && typeof MutationObserver !== 'undefined') {
    var timer;
    var obs = new MutationObserver(function () {
      clearTimeout(timer);
      timer = setTimeout(run, 120);
    });
    obs.observe(root, { childList: true, subtree: true, characterData: true });
  }
})();
