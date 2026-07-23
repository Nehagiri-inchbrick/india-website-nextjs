/**
 * Trusted Brands / Iconic Projects — developer tabs + project carousel
 */
(function () {
  let currentBrandIndex = 0;
  let currentProjectSlide = 0;
  let bound = false;

  const brandShowcaseData = [
    { brand: "DLF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/DLF_logo.svg/1280px-DLF_logo.svg.png" },
    { brand: "LODHA", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lodha---New-LOgo.png" },
    { brand: "GODREJ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1280px-Godrej_Logo.svg.png" },
    { brand: "PRESTIGE", logo: "https://companieslogo.com/img/orig/PRESTIGE.NS_BIG-52e09255.png?t=1720244493" },
    { brand: "OBEROI", logo: "https://www.freelogovectors.net/wp-content/uploads/2020/09/oberoi_realty_logo.png" },
    { brand: "BRIGADE", logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Brigade_Group.svg" },
  ];

  const brandProjectCatalog = {
    DLF: [
      { name: "The Camellias", location: "Gurugram", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80", status: "Ready to move", price: "₹ 18 Cr onwards", bhk: "4–5 BHK", sqft: "7,500–16,000 sq.ft" },
      { name: "The Crest", location: "Gurugram", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", status: "Premium tower", price: "₹ 4.2 Cr onwards", bhk: "3–4 BHK", sqft: "2,600–4,100 sq.ft" },
      { name: "Capital Greens", location: "Delhi", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80", status: "Delivered", price: "₹ 2.8 Cr onwards", bhk: "3–4 BHK", sqft: "1,850–3,200 sq.ft" },
      { name: "Ultima", location: "Gurugram", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80", status: "Luxury segment", price: "₹ 3.5 Cr onwards", bhk: "3–4 BHK", sqft: "2,200–3,800 sq.ft" },
      { name: "Skycourt", location: "Gurugram", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80", status: "Modern Living", price: "₹ 1.9 Cr onwards", bhk: "2–3 BHK", sqft: "1,350–2,100 sq.ft" },
      { name: "Regency Park", location: "Gurugram", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80", status: "Premium Park", price: "₹ 3.1 Cr onwards", bhk: "3–4 BHK", sqft: "2,000–3,400 sq.ft" },
      { name: "Hamilton Court", location: "Gurugram", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80", status: "Classic Tower", price: "₹ 2.4 Cr onwards", bhk: "3 BHK", sqft: "1,750–2,650 sq.ft" },
    ],
    LODHA: [
      { name: "Lodha Park", location: "Worli, Mumbai", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", status: "Flagship", price: "₹ 8.5 Cr onwards", bhk: "3–4 BHK", sqft: "1,900–3,600 sq.ft" },
      { name: "Lodha Marq", location: "Mumbai", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", status: "Under construction", price: "₹ 12 Cr onwards", bhk: "4–5 BHK", sqft: "2,800–5,200 sq.ft" },
      { name: "Lodha Bellagio", location: "Pune", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80", status: "New launch", price: "₹ 1.6 Cr onwards", bhk: "2–3 BHK", sqft: "950–1,650 sq.ft" },
      { name: "Lodha World View", location: "Mumbai", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80", status: "Ultra luxury", price: "₹ 15 Cr onwards", bhk: "4–5 BHK", sqft: "3,200–6,800 sq.ft" },
      { name: "Lodha World Towers", location: "Mumbai", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80", status: "Iconic Skyline", price: "₹ 10 Cr onwards", bhk: "3–4 BHK", sqft: "2,400–4,500 sq.ft" },
      { name: "Lodha Solitaire", location: "Mumbai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80", status: "Premium Living", price: "₹ 6.2 Cr onwards", bhk: "3 BHK", sqft: "1,650–2,400 sq.ft" },
    ],
    GODREJ: [
      { name: "Godrej Riverhills", location: "Pune", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", status: "Township", price: "₹ 95 L onwards", bhk: "2–3 BHK", sqft: "780–1,420 sq.ft" },
      { name: "Godrej Woods", location: "Noida", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80", status: "Green project", price: "₹ 1.4 Cr onwards", bhk: "2–3 BHK", sqft: "1,100–1,850 sq.ft" },
      { name: "Godrej Horizon", location: "Mumbai", image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80", status: "Ongoing", price: "₹ 2.2 Cr onwards", bhk: "2–3 BHK", sqft: "850–1,550 sq.ft" },
      { name: "Godrej Park Retreat", location: "Bangalore", image: "https://images.unsplash.com/photo-1512915922686-57c11ff9b6b9?auto=format&fit=crop&w=900&q=80", status: "Top seller", price: "₹ 1.1 Cr onwards", bhk: "2–3 BHK", sqft: "950–1,600 sq.ft" },
      { name: "Godrej Golf Links", location: "Greater Noida", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80", status: "Golf View", price: "₹ 1.8 Cr onwards", bhk: "3–4 BHK", sqft: "1,400–2,800 sq.ft" },
      { name: "Godrej Emerald", location: "Thane", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80", status: "Premium", price: "₹ 1.3 Cr onwards", bhk: "2–3 BHK", sqft: "720–1,280 sq.ft" },
    ],
    PRESTIGE: [
      { name: "Prestige Lakeside", location: "Bangalore", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80", status: "Delivered", price: "₹ 2.5 Cr onwards", bhk: "3–4 BHK", sqft: "1,800–3,500 sq.ft" },
      { name: "Prestige City", location: "Hyderabad", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80", status: "Mega township", price: "₹ 85 L onwards", bhk: "2–3 BHK", sqft: "1,050–1,750 sq.ft" },
      { name: "Prestige Falcon", location: "Bangalore", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80", status: "Luxury", price: "₹ 3.8 Cr onwards", bhk: "3–4 BHK", sqft: "2,100–3,900 sq.ft" },
      { name: "Prestige Sunrise", location: "Kochi", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80", status: "Ready homes", price: "₹ 72 L onwards", bhk: "2–3 BHK", sqft: "980–1,520 sq.ft" },
      { name: "Prestige Kingfisher", location: "Bangalore", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", status: "Ultra Luxury", price: "₹ 5.5 Cr onwards", bhk: "4 BHK", sqft: "3,400–5,100 sq.ft" },
    ],
    OBEROI: [
      { name: "Oberoi Sky City", location: "Mumbai", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80", status: "Luxury towers", price: "₹ 2.8 Cr onwards", bhk: "2–3 BHK", sqft: "850–1,450 sq.ft" },
      { name: "Oberoi Esquire", location: "Mumbai", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80", status: "Delivered", price: "₹ 4.5 Cr onwards", bhk: "3–4 BHK", sqft: "1,650–2,900 sq.ft" },
      { name: "Oberoi Garden City", location: "Thane", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", status: "Planned phase", price: "₹ 1.9 Cr onwards", bhk: "2–3 BHK", sqft: "950–1,680 sq.ft" },
      { name: "Oberoi Eternia", location: "Mulund", image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=900&q=80", status: "Top rated", price: "₹ 2.1 Cr onwards", bhk: "2–3 BHK", sqft: "880–1,420 sq.ft" },
      { name: "Oberoi Elysian", location: "Mumbai", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80", status: "Flagship", price: "₹ 5.8 Cr onwards", bhk: "3–4 BHK", sqft: "1,900–3,200 sq.ft" },
    ],
    BRIGADE: [
      { name: "Brigade Exotica", location: "Bangalore", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80", status: "Completed", price: "₹ 1.7 Cr onwards", bhk: "3 BHK", sqft: "1,550–2,350 sq.ft" },
      { name: "Brigade Cornerstone", location: "Bangalore", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80", status: "Mixed use", price: "₹ 1.2 Cr onwards", bhk: "2–3 BHK", sqft: "1,050–1,750 sq.ft" },
      { name: "Brigade Utopia", location: "Bangalore", image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80", status: "New launch", price: "₹ 98 L onwards", bhk: "2–3 BHK", sqft: "920–1,480 sq.ft" },
      { name: "Brigade Lakefront", location: "Chennai", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80", status: "Waterfront", price: "₹ 1.5 Cr onwards", bhk: "3 BHK", sqft: "1,350–2,100 sq.ft" },
      { name: "Brigade Atmosphere", location: "Bangalore", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", status: "Villas", price: "₹ 3.2 Cr onwards", bhk: "4 BHK Villa", sqft: "2,800–4,200 sq.ft" },
    ],
  };

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function updateBrandShowcase(index) {
    const tabsRoot = document.getElementById("brandTabs");
    if (!tabsRoot || !brandShowcaseData.length) return false;

    currentBrandIndex =
      (index + brandShowcaseData.length) % brandShowcaseData.length;
    const active = brandShowcaseData[currentBrandIndex];
    const brandProjects = brandProjectCatalog[active.brand] || [];

    tabsRoot.querySelectorAll(".developer-card").forEach(function (card, i) {
      card.classList.toggle("active", i === currentBrandIndex);
    });

    const projectTrack = document.getElementById("brandProjectTrack");
    if (projectTrack) {
      projectTrack.style.transform = "translateX(0)";
      currentProjectSlide = 0;
      projectTrack.innerHTML = brandProjects
        .map(function (project) {
          return (
            '<article class="project-card">' +
            '<div class="project-card-image-wrap">' +
            '<div class="project-dev-badge">' +
            '<img src="' + escapeHtml(active.logo) + '" alt="' + escapeHtml(active.brand) + ' logo">' +
            "</div>" +
            '<img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.name) + '">' +
            "</div>" +
            '<div class="project-card-body">' +
            '<h4 class="project-card-name">' + escapeHtml(project.name) + "</h4>" +
            '<p class="project-card-loc"><i class="fas fa-location-dot"></i> ' + escapeHtml(project.location) + "</p>" +
            '<p class="project-card-price">' + escapeHtml(project.price) + "</p>" +
            '<div class="project-card-specs">' +
            '<span><i class="fas fa-bed"></i> ' + escapeHtml(project.bhk) + "</span>" +
            '<span><i class="fas fa-vector-square"></i> ' + escapeHtml(project.sqft) + "</span>" +
            "</div>" +
            '<div class="project-card-tag">' + escapeHtml(project.status) + "</div>" +
            "</div>" +
            "</article>"
          );
        })
        .join("");
      projectTrack.style.opacity = "1";
    }

    const dotsRoot = document.getElementById("brandSliderDots");
    if (dotsRoot) {
      dotsRoot.querySelectorAll(".slider-dot").forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentBrandIndex);
      });
    }

    return true;
  }

  function slideProjects(direction) {
    const track = document.getElementById("brandProjectTrack");
    if (!track) return;
    const card = track.querySelector(".project-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24;
    const totalProjects = track.children.length;
    const visibleCount =
      window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 3 : 5;
    const maxSlides = Math.max(0, totalProjects - visibleCount);

    currentProjectSlide = Math.min(
      Math.max(currentProjectSlide + direction, 0),
      maxSlides
    );
    track.style.transform =
      "translateX(-" + currentProjectSlide * cardWidth + "px)";
  }

  function onDocClick(e) {
    const card = e.target.closest("#brandTabs .developer-card");
    if (card) {
      const index = parseInt(card.getAttribute("data-brand-index"), 10);
      if (!Number.isNaN(index)) {
        e.preventDefault();
        updateBrandShowcase(index);
      }
      return;
    }

    const dot = e.target.closest("#brandSliderDots .slider-dot");
    if (dot) {
      const dots = Array.from(
        document.querySelectorAll("#brandSliderDots .slider-dot")
      );
      const index = dots.indexOf(dot);
      if (index >= 0) updateBrandShowcase(index);
      return;
    }

    if (e.target.closest("#brandPrev")) {
      e.preventDefault();
      slideProjects(-1);
      return;
    }
    if (e.target.closest("#brandNext")) {
      e.preventDefault();
      slideProjects(1);
    }
  }

  function initBrandShowcase() {
    const tabsRoot = document.getElementById("brandTabs");
    if (!tabsRoot) return false;

    if (!bound) {
      document.addEventListener("click", onDocClick);
      bound = true;
    }

    // Ensure empty project track gets initial cards
    const track = document.getElementById("brandProjectTrack");
    if (!track || !track.children.length) {
      updateBrandShowcase(currentBrandIndex || 0);
    } else {
      // Keep active card in sync
      updateBrandShowcase(currentBrandIndex || 0);
    }
    return true;
  }

  window.__inchbrickInitBrandShowcase = initBrandShowcase;

  function boot() {
    if (initBrandShowcase()) return;
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (initBrandShowcase() || tries > 40) clearInterval(timer);
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("html-page-scripts-ready", function () {
    initBrandShowcase();
  });
})();
