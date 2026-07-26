/**
 * Projects page — sidebar tabs + filtered grid
 */
(function () {
  "use strict";

  var CATEGORY_META = {
    featured: {
      title: "Featured Projects",
      desc: "Top picks with strong demand, trusted builders, and clear possession timelines.",
    },
    ready: {
      title: "Ready-to-Move",
      desc: "Homes you can visit today and move into without waiting on construction.",
    },
    "under-construction": {
      title: "Under Construction",
      desc: "Live projects with construction progress, payment plans, and future upside.",
    },
    "new-launch": {
      title: "New Launches",
      desc: "Fresh inventory with launch pricing and early-bird payment benefits.",
    },
    luxury: {
      title: "Luxury Projects",
      desc: "Signature residences with elite amenities and landmark addresses.",
    },
    commercial: {
      title: "Commercial Projects",
      desc: "Offices, retail, and mixed-use spaces in high-footfall corridors.",
    },
    township: {
      title: "Township Projects",
      desc: "Integrated communities with open spaces, schools, retail, and lifestyle zones.",
    },
  };

  var activeCategory = "featured";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function getData() {
    return Array.isArray(window.PROJECTS_DATA) ? window.PROJECTS_DATA : [];
  }

  function cardHtml(p) {
    return (
      '<a class="pj-card" href="/listings">' +
      '<div class="pj-card-media">' +
      '<img src="' +
      esc(p.img) +
      '" alt="' +
      esc(p.name) +
      '" loading="lazy">' +
      (p.tag ? '<span class="pj-card-badge">' + esc(p.tag) + "</span>" : "") +
      "</div>" +
      '<div class="pj-card-body">' +
      '<span class="pj-card-dev">' +
      esc(p.developer) +
      "</span>" +
      "<h3>" +
      esc(p.name) +
      "</h3>" +
      '<p class="pj-card-loc"><i class="fas fa-location-dot" aria-hidden="true"></i> ' +
      esc(p.location) +
      "</p>" +
      '<div class="pj-card-meta">' +
      "<strong>" +
      esc(p.price) +
      "</strong>" +
      "<span>" +
      esc(p.bhk) +
      "</span>" +
      "</div>" +
      '<span class="pj-card-status">' +
      esc(p.status) +
      "</span>" +
      '<span class="pj-card-cta">View details <i class="fas fa-arrow-right" aria-hidden="true"></i></span>' +
      "</div></a>"
    );
  }

  function getFilters() {
    var search = document.querySelector("[data-pj-search]");
    var city = document.querySelector("[data-pj-city]");
    var status = document.querySelector("[data-pj-status]");

    return {
      query: search ? search.value.trim().toLowerCase() : "",
      city: city ? city.value : "",
      status: status ? status.value : "",
    };
  }

  function matchesFilters(p, filters) {
    var searchable = [
      p.name,
      p.developer,
      p.city,
      p.location,
      p.bhk,
      p.status,
      p.tag,
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!filters.query || searchable.indexOf(filters.query) !== -1) &&
      (!filters.city || p.city === filters.city) &&
      (!filters.status || p.status === filters.status)
    );
  }

  function inCategory(p, cat) {
    return Array.isArray(p.categories) && p.categories.indexOf(cat) !== -1;
  }

  function render() {
    var grid = document.querySelector("[data-pj-grid]");
    if (!grid) return;

    var filters = getFilters();
    var hasFilters = Boolean(filters.query || filters.city || filters.status);
    var filteredData = getData().filter(function (p) {
      return matchesFilters(p, filters);
    });

    Object.keys(CATEGORY_META).forEach(function (cat) {
      var badge = document.querySelector('[data-pj-count="' + cat + '"]');
      if (badge) {
        badge.textContent = filteredData.filter(function (p) {
          return inCategory(p, cat);
        }).length;
      }
    });

    document.querySelectorAll("[data-pj-tab]").forEach(function (tab) {
      tab.classList.toggle(
        "is-active",
        tab.getAttribute("data-pj-tab") === activeCategory
      );
    });

    var meta = CATEGORY_META[activeCategory];
    var title = document.querySelector("[data-pj-title]");
    var desc = document.querySelector("[data-pj-desc]");
    if (title && meta) title.textContent = meta.title;
    if (desc && meta) desc.textContent = meta.desc;

    var items = filteredData.filter(function (p) {
      return inCategory(p, activeCategory);
    });

    var summary = document.querySelector("[data-pj-summary]");
    if (summary) {
      summary.textContent =
        items.length + (items.length === 1 ? " project" : " projects");
      summary.classList.toggle("is-empty", !items.length);
    }

    if (!items.length) {
      grid.innerHTML =
        '<p class="pj-empty">' +
        (hasFilters
          ? "No matching projects in this category. Try adjusting your search or filters."
          : "Projects coming soon in this category.") +
        "</p>";
      return;
    }
    grid.innerHTML = items.map(cardHtml).join("");
  }

  function populateCities() {
    var select = document.querySelector("[data-pj-city]");
    if (!select || select.options.length > 1) return;

    Array.from(
      new Set(
        getData().map(function (p) {
          return p.city;
        })
      )
    )
      .filter(Boolean)
      .sort()
      .forEach(function (city) {
        var option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        select.appendChild(option);
      });
  }

  function bind() {
    var form = document.querySelector("[data-pj-search-form]");
    if (form && form.dataset.pjBound !== "true") {
      form.dataset.pjBound = "true";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        render();
      });
      form.addEventListener("input", render);
      form.addEventListener("change", render);

      var clear = form.querySelector("[data-pj-clear]");
      if (clear) {
        clear.addEventListener("click", function () {
          form.reset();
          render();
          var search = form.querySelector("[data-pj-search]");
          if (search) search.focus();
        });
      }
    }

    var tabs = document.querySelector("[data-pj-tabs]");
    if (tabs && tabs.dataset.pjBound !== "true") {
      tabs.dataset.pjBound = "true";
      tabs.addEventListener("click", function (event) {
        var tab = event.target.closest("[data-pj-tab]");
        if (!tab) return;
        activeCategory = tab.getAttribute("data-pj-tab");
        render();
        var panel = document.querySelector(".pj-panel");
        if (panel && window.matchMedia("(max-width: 900px)").matches) {
          panel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }

  function init() {
    populateCities();
    bind();
    render();
  }

  window.__inchbrickInitProjects = init;

  function boot() {
    if (document.querySelector("[data-pj-grid]")) {
      init();
      return;
    }
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (document.querySelector("[data-pj-grid]") || tries > 40) {
        clearInterval(timer);
        if (document.querySelector("[data-pj-grid]")) init();
      }
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.addEventListener("html-page-scripts-ready", init);
})();
