/**
 * Developer detail — compact profile
 */
(function () {
  const data = window.DEVELOPERS_DATA || [];
  const root = document.getElementById("developerDetailRoot");
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);

  const PORTFOLIO_IMGS = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80"
  ];

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function stars(n) {
    let html = "";
    for (let i = 1; i <= 5; i++) {
      html += '<i class="fas fa-star' + (i <= Math.round(n) ? "" : " dd-star-dim") + '"></i>';
    }
    return html;
  }

  function enrich(d) {
    const years = new Date().getFullYear() - parseInt(d.since, 10);
    const portfolio = [
      ...(d.completed || []).map((p) => ({ ...p, status: "Completed", label: p.year, cls: "done" })),
      ...(d.ongoing || []).map((p) => ({ ...p, status: "Ongoing", label: p.status, cls: "live" })),
      ...(d.upcoming || []).map((p) => ({ ...p, status: "Upcoming", label: p.launch, cls: "new" }))
    ].slice(0, 6);
    return { ...d, years, portfolio };
  }

  function renderNotFound() {
    document.title = "Developer Not Found | Inchbrick Realty";
    root.innerHTML =
      '<div class="dd-not-found"><h1>Developer not found</h1><p>This profile may have been removed.</p><a href="/developers">Back to developers</a></div>';
  }

  function renderHero(d) {
    return (
      '<section class="dd-hero" style="--dd-hero-img:url(\'' + d.img + '\')">' +
      '<div class="dd-hero-shade"></div>' +
      '<div class="dd-wrap dd-hero-inner">' +
      '<a href="/developers" class="dd-back"><i class="fas fa-arrow-left"></i> Developers</a>' +
      '<div class="dd-hero-main">' +
      '<div class="dd-hero-brand">' +
      '<span class="dd-logo">' + esc(d.short.slice(0, 2).toUpperCase()) + "</span>" +
      "<div>" +
      '<span class="dd-kicker"><i class="fas fa-shield-halved"></i> RERA Verified</span>' +
      "<h1>" + esc(d.name) + "</h1>" +
      "<p>" + esc(d.tagline) + "</p>" +
      "</div></div>" +
      '<div class="dd-hero-actions">' +
      '<a href="/contact#contactForm" class="dd-btn dd-btn--fill"><i class="fas fa-paper-plane"></i> Enquire Now</a>' +
      '<a href="#dd-projects" class="dd-btn dd-btn--line">View Projects</a>' +
      "</div></div>" +
      '<div class="dd-stats">' +
      stat(d.years + "+", "Years") +
      stat(d.projects + "+", "Projects") +
      stat(d.cities + "+", "Cities") +
      stat(d.rating + "/5", "Rating") +
      "</div></div></section>"
    );
  }

  function stat(val, label) {
    return '<div class="dd-stat"><strong>' + esc(val) + "</strong><span>" + esc(label) + "</span></div>";
  }

  function renderAbout(d) {
    const blurb = d.overview.length > 220 ? d.overview.slice(0, 217).trim() + "..." : d.overview;
    return (
      '<section class="dd-block">' +
      '<div class="dd-wrap dd-about">' +
      '<div class="dd-about-copy">' +
      '<span class="dd-label">About</span>' +
      "<h2>Company Snapshot</h2>" +
      "<p>" + esc(blurb) + "</p>" +
      '<ul class="dd-chips">' +
      (d.highlights || []).slice(0, 4).map((h) => "<li>" + esc(h) + "</li>").join("") +
      "</ul></div>" +
      '<aside class="dd-aside">' +
      '<div class="dd-aside-row"><i class="fas fa-location-dot"></i><div><em>HQ</em><strong>' + esc(d.hq) + "</strong></div></div>" +
      '<div class="dd-aside-row"><i class="fas fa-calendar"></i><div><em>Established</em><strong>' + esc(d.since) + "</strong></div></div>" +
      '<div class="dd-aside-row"><i class="fas fa-star"></i><div><em>Buyer Rating</em><strong>' + d.rating + " - " + stars(d.rating) + "</strong></div></div>" +
      "</aside></div></section>"
    );
  }

  function renderProjects(d) {
    const cards = d.portfolio
      .map(
        (p, i) =>
          '<article class="dd-card">' +
          '<div class="dd-card-media"><img src="' + PORTFOLIO_IMGS[i % PORTFOLIO_IMGS.length] + '" alt="' + esc(p.name) + '" loading="lazy">' +
          '<span class="dd-tag dd-tag--' + p.cls + '">' + esc(p.status) + "</span></div>" +
          '<div class="dd-card-body"><strong>' + esc(p.name) + "</strong>" +
          "<span>" + esc(p.city) + " - " + esc(p.type) + "</span>" +
          "<em>" + esc(p.label) + "</em></div></article>"
      )
      .join("");

    return (
      '<section class="dd-block dd-block--soft" id="dd-projects">' +
      '<div class="dd-wrap">' +
      '<div class="dd-head"><div><span class="dd-label">Portfolio</span><h2>Featured Projects</h2></div>' +
      '<a href="/listings" class="dd-link">Browse listings <i class="fas fa-arrow-right"></i></a></div>' +
      '<div class="dd-cards">' + cards + "</div></div></section>"
    );
  }

  function renderProof(d) {
    const awards = (d.awards || [])
      .slice(0, 3)
      .map(
        (a) =>
          '<article class="dd-award"><span>' + esc(a.year) + "</span>" +
          '<i class="fas fa-trophy"></i><strong>' + esc(a.title) + "</strong>" +
          "<em>" + esc(a.org) + "</em></article>"
      )
      .join("");

    const reviews = (d.reviews || [])
      .slice(0, 2)
      .map(
        (r) =>
          '<article class="dd-quote"><div class="dd-stars">' + stars(r.rating) + "</div>" +
          '<p>"' + esc(r.text) + '"</p>' +
          "<footer><strong>" + esc(r.name) + "</strong><span>" + esc(r.city) + "</span></footer></article>"
      )
      .join("");

    return (
      '<section class="dd-block">' +
      '<div class="dd-wrap dd-proof">' +
      '<div><div class="dd-head"><div><span class="dd-label">Recognition</span><h2>Awards</h2></div></div>' +
      '<div class="dd-awards">' + awards + "</div></div>" +
      '<div><div class="dd-head"><div><span class="dd-label">Buyers</span><h2>What Clients Say</h2></div></div>' +
      '<div class="dd-quotes">' + reviews + "</div></div>" +
      "</div></section>"
    );
  }

  function renderCta(d) {
    return (
      '<section class="dd-cta">' +
      '<div class="dd-wrap dd-cta-inner">' +
      '<div><span class="dd-kicker">Ready to explore?</span>' +
      "<h2>Interested in " + esc(d.name) + " projects?</h2>" +
      "<p>Get curated options, payment plans, and site-visit slots from Inchbrick advisors.</p></div>" +
      '<div class="dd-cta-actions">' +
      '<a href="/contact#contactForm" class="dd-btn dd-btn--fill"><i class="fas fa-phone"></i> Talk to Expert</a>' +
      '<a href="tel:+919876543210" class="dd-btn dd-btn--ghost">+91 98765 43210</a>' +
      "</div></div></section>"
    );
  }

  function render(d) {
    const dev = enrich(d);
    document.title = dev.name + " | Developer Profile | Inchbrick Realty";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = (dev.overview || "").slice(0, 155);

    root.innerHTML =
      renderHero(dev) +
      renderAbout(dev) +
      renderProjects(dev) +
      renderProof(dev) +
      renderCta(dev);
  }

  if (!root) return;
  const developer = data.find((d) => d.id === id);
  if (!developer) {
    renderNotFound();
    return;
  }
  render(developer);
})();
