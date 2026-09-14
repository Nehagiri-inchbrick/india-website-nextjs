(function () {
  function initHomeReviewsLink() {
    const link = document.querySelector(".home-social-proof .compact-reviews-cta");
    if (!link) return;

    link.setAttribute("href", "/reviews");
    link.removeAttribute("target");
    link.removeAttribute("rel");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeReviewsLink, { once: true });
  } else {
    initHomeReviewsLink();
  }

  window.addEventListener("html-page-scripts-ready", initHomeReviewsLink);
})();
