/**
 * Contact page — enquiry form + office map tabs
 */
(function () {
  var OFFICE_MAPS = {
    india: {
      caption: "India — Dwarka Sector 12, New Delhi",
      embed:
        "https://maps.google.com/maps?q=Dwarka+Sector+12,+New+Delhi,+India&hl=en&z=14&output=embed",
      title: "Map: Inchbrick India office, New Delhi"
    },
    dubai: {
      caption: "Dubai — Churchill Towers, Business Bay",
      embed:
        "https://maps.google.com/maps?q=Churchill+Towers,+Business+Bay,+Dubai&hl=en&z=15&output=embed",
      title: "Map: Inchbrick Dubai office, Business Bay"
    }
  };

  var tabs = document.querySelectorAll("[data-office-tab]");
  var panels = document.querySelectorAll("[data-office-panel]");
  var mapFrame = document.getElementById("cxOfficeMap");
  var mapCaption = document.getElementById("cxMapCaption");

  function setOffice(officeId) {
    var data = OFFICE_MAPS[officeId];
    if (!data) return;

    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-office-tab") === officeId;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });

    panels.forEach(function (panel) {
      var on = panel.getAttribute("data-office-panel") === officeId;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });

    if (mapFrame && data.embed) {
      mapFrame.src = data.embed;
      mapFrame.title = data.title;
    }
    if (mapCaption) mapCaption.textContent = data.caption;
  }

  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setOffice(tab.getAttribute("data-office-tab"));
      });
    });
  }

  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name =
      (document.getElementById("cName") &&
        document.getElementById("cName").value.trim()) ||
      "there";
    var t = document.createElement("div");
    t.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;background:#0f2339;color:#fff;border:1px solid #c29a63;border-radius:14px;padding:12px 20px;font:600 13px Plus Jakarta Sans,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.2);display:flex;gap:8px;align-items:center";
    t.innerHTML =
      '<i class="fas fa-check-circle" style="color:#c29a63"></i> Thanks, ' +
      name +
      "! We'll call soon.";
    document.body.appendChild(t);
    e.target.reset();
    setTimeout(function () {
      t.style.opacity = "0";
      t.style.transition = "opacity .4s";
      setTimeout(function () {
        t.remove();
      }, 400);
    }, 3500);
  });
  }
})();
