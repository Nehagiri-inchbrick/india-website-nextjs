/**
 * Contact page — enquiry form toast
 */
(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

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
})();
