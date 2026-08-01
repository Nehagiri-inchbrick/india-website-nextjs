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

  function titleLine(p) {
    var type = String(p.bhk || p.type || "Apartment");
    if (/plot/i.test(type)) return "Residential Plot";
    if (/office|retail|commercial/i.test(type + " " + (p.categories || []).join(" "))) {
      return type.indexOf("BHK") !== -1 ? type : "Commercial Space";
    }
    if (/villa/i.test(type)) return type.replace(/villa/i, "Villa") + (/,/.test(type) ? "" : ", Premium");
    if (/4|5/.test(type)) return type + (/,/.test(type) ? "" : ", 4 Baths");
    if (/2/.test(type)) return type + (/,/.test(type) ? "" : ", 2 Baths");
    if (/3/.test(type)) return type + (/,/.test(type) ? "" : ", 3 Baths");
    return type + " Apartment";
  }

  function cardHref(p) {
    if (p.listingId) return "/listing-detail?id=" + encodeURIComponent(p.listingId);
    if (p.city) return "/listings?city=" + encodeURIComponent(p.city);
    return "/listings?q=" + encodeURIComponent(p.name || "");
  }

  function statusClass(status) {
    var s = String(status || "").toLowerCase();
    if (s.indexOf("ready") !== -1) return "is-ready";
    if (s.indexOf("new") !== -1) return "is-new";
    if (s.indexOf("under") !== -1) return "is-uc";
    return "";
  }

  function cardHtml(p) {
    var amenities = Array.isArray(p.amenities) ? p.amenities.slice(0, 3) : [];
    var amenityHtml = amenities.length
      ? '<ul class="pj-card-amenities">' +
        amenities
          .map(function (a) {
            return "<li>" + esc(a) + "</li>";
          })
          .join("") +
        "</ul>"
      : "";

    return (
      '<a class="pj-card" href="' +
      cardHref(p) +
      '" aria-label="View ' +
      esc(p.name) +
      '">' +
      '<div class="pj-card-media">' +
      '<img src="' +
      esc(p.img) +
      '" alt="' +
      esc(p.name) +
      '" loading="lazy">' +
      (p.tag
        ? '<span class="pj-card-tag">' + esc(p.tag) + "</span>"
        : "") +
      '<span class="pj-card-verified"><i class="fas fa-circle-check"></i> RERA guided</span>' +
      '<button type="button" class="pj-card-wish" aria-label="Save project"><i class="far fa-heart"></i></button>' +
      '<span class="pj-card-price pj-card-price--media">' +
      esc(p.price) +
      "</span>" +
      "</div>" +
      '<div class="pj-card-body">' +
      '<div class="pj-card-top">' +
      '<span class="pj-card-dev">' +
      esc(p.developer || "Developer") +
      "</span>" +
      '<span class="pj-card-status ' +
      statusClass(p.status) +
      '">' +
      esc(p.status || "") +
      "</span>" +
      "</div>" +
      '<div class="pj-card-title-row">' +
      '<h3 class="pj-card-title">' +
      esc(p.name) +
      "</h3>" +
      '<span class="pj-card-price pj-card-price--inline">' +
      esc(p.price) +
      "</span>" +
      "</div>" +
      '<p class="pj-card-loc"><i class="fas fa-location-dot" aria-hidden="true"></i> ' +
      esc(p.location || p.city) +
      "</p>" +
      '<ul class="pj-card-meta">' +
      (p.bhk ? "<li><strong>Config</strong><span>" + esc(p.bhk) + "</span></li>" : "") +
      (p.size ? "<li><strong>Size</strong><span>" + esc(p.size) + "</span></li>" : "") +
      "</ul>" +
      amenityHtml +
      '<div class="pj-card-foot">' +
      (p.rera
        ? '<span class="pj-card-rera"><i class="fas fa-shield-halved" aria-hidden="true"></i> RERA ' +
          esc(p.rera) +
          "</span>"
        : "<span>Curated project</span>") +
      '<span class="pj-card-cta">View details <i class="fas fa-arrow-right" aria-hidden="true"></i></span>' +
      "</div></div></a>"
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
      p.rera,
      p.possession,
      p.size,
      Array.isArray(p.amenities) ? p.amenities.join(" ") : "",
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
    grid.querySelectorAll(".pj-card-wish").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.toggle("is-active");
        var icon = btn.querySelector("i");
        if (icon) {
          icon.classList.toggle("far");
          icon.classList.toggle("fas");
        }
      });
    });
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

  function updateFilterDots() {
    var filters = getFilters();
    var cityDot = document.querySelector('[data-pj-dot="city"]');
    var statusDot = document.querySelector('[data-pj-dot="status"]');
    if (cityDot) cityDot.hidden = !filters.city;
    if (statusDot) statusDot.hidden = !filters.status;
  }

  function openFilterSheet(type) {
    var sheet = document.querySelector("[data-pj-sheet]");
    var title = document.querySelector("[data-pj-sheet-title]");
    if (!sheet) return;

    var titles = {
      search: "Search projects",
      city: "Filter by city",
      status: "Filter by status",
    };

    sheet.classList.add("is-open");
    if (title) title.textContent = titles[type] || "Filters";

    document.querySelectorAll("[data-pj-panel]").forEach(function (el) {
      el.classList.toggle("is-shown", el.getAttribute("data-pj-panel") === type);
    });

    document.querySelectorAll("[data-pj-open]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-pj-open") === type);
    });

    if (type === "search") {
      var input = document.querySelector("[data-pj-search]");
      if (input) setTimeout(function () { input.focus(); }, 180);
    }
  }

  function closeFilterSheet() {
    var sheet = document.querySelector("[data-pj-sheet]");
    if (sheet) sheet.classList.remove("is-open");
    document.querySelectorAll("[data-pj-open]").forEach(function (btn) {
      btn.classList.remove("is-active");
    });
  }

  function resetFilters(form) {
    if (!form) return;
    form.reset();
    render();
    updateFilterDots();
    closeFilterSheet();
    var search = form.querySelector("[data-pj-search]");
    if (search) search.focus();
  }

  function bind() {
    var form = document.querySelector("[data-pj-search-form]");
    if (form && form.dataset.pjBound !== "true") {
      form.dataset.pjBound = "true";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        render();
        updateFilterDots();
      });
      form.addEventListener("input", function () {
        render();
        updateFilterDots();
      });
      form.addEventListener("change", function () {
        render();
        updateFilterDots();
      });

      form.querySelectorAll("[data-pj-clear], [data-pj-clear-desk]").forEach(function (clear) {
        clear.addEventListener("click", function () {
          resetFilters(form);
        });
      });

      form.querySelectorAll("[data-pj-open]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var type = btn.getAttribute("data-pj-open");
          var sheet = document.querySelector("[data-pj-sheet]");
          if (
            sheet &&
            sheet.classList.contains("is-open") &&
            btn.classList.contains("is-active")
          ) {
            closeFilterSheet();
            return;
          }
          openFilterSheet(type);
        });
      });

      var closeBtn = form.querySelector("[data-pj-sheet-close]");
      if (closeBtn) {
        closeBtn.addEventListener("click", closeFilterSheet);
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

  function populateStats() {
    var data = getData();
    var total = document.querySelector('[data-pj-stat="total"]');
    var cities = document.querySelector('[data-pj-stat="cities"]');
    var devs = document.querySelector('[data-pj-stat="devs"]');
    if (total) total.textContent = data.length + "+";
    if (cities) {
      cities.textContent =
        Array.from(
          new Set(
            data.map(function (p) {
              return p.city;
            })
          )
        ).filter(Boolean).length + "+";
    }
    if (devs) {
      devs.textContent =
        Array.from(
          new Set(
            data.map(function (p) {
              return p.developer;
            })
          )
        ).filter(Boolean).length + "+";
    }
  }

  function init() {
    populateCities();
    populateStats();
    bind();
    render();
    updateFilterDots();
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
