(function () {
  function initHomeReviewsLink() {
    const link = document.querySelector(".compact-reviews-cta");
    if (!link) return;

    link.setAttribute("href", "/reviews");
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.innerHTML = 'View All Reviews <i class="fas fa-arrow-right" aria-hidden="true"></i>';
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeReviewsLink, { once: true });
  } else {
    initHomeReviewsLink();
  }

  window.addEventListener("html-page-scripts-ready", initHomeReviewsLink);
})();
