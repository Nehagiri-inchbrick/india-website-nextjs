/**
 * Auth page — Login / Register / Forgot on one screen
 */
(function () {
  const views = document.querySelectorAll(".auth-form-view");
  const infoBlocks = document.querySelectorAll("[data-auth-info]");
  const panel = document.querySelector("[data-auth-panel]");
  const showLinks = document.querySelectorAll("[data-auth-show]");

  const stepCopy = {
    1: {
      title: "Let’s meet you",
      sub: "A few details so we can set up your Inchbrick space.",
    },
    2: {
      title: "Shape your search",
      sub: "City and property type help us surface better matches.",
    },
    3: {
      title: "Lock it in",
      sub: "Create a password and you’re ready to explore.",
    },
  };

  let regStep = 1;

  function setRegStep(step) {
    regStep = Math.min(3, Math.max(1, step));

    document.querySelectorAll("[data-reg-pane]").forEach((pane) => {
      pane.classList.toggle("is-active", Number(pane.dataset.regPane) === regStep);
    });

    document.querySelectorAll("[data-reg-step-btn]").forEach((btn) => {
      const n = Number(btn.dataset.regStepBtn);
      btn.classList.toggle("is-active", n === regStep);
      btn.classList.toggle("is-done", n < regStep);
      btn.setAttribute("aria-selected", n === regStep ? "true" : "false");
    });

    document.querySelectorAll("[data-reg-journey]").forEach((item) => {
      item.classList.toggle("is-on", Number(item.dataset.regJourney) === regStep);
    });

    const title = document.querySelector("[data-reg-title]");
    const sub = document.querySelector("[data-reg-sub]");
    const copy = stepCopy[regStep];
    if (title && copy) title.textContent = copy.title;
    if (sub && copy) sub.textContent = copy.sub;
  }

  function validateRegStep(step) {
    const pane = document.querySelector('[data-reg-pane="' + step + '"]');
    if (!pane) return true;
    const required = pane.querySelectorAll("input[required]");
    for (const input of required) {
      if (!input.checkValidity()) {
        input.reportValidity();
        input.focus();
        return false;
      }
    }
    if (step === 2) {
      const chips = pane.querySelectorAll('input[name="interest"]:checked');
      if (!chips.length) {
        alert("Pick at least one property type you’re looking for.");
        return false;
      }
    }
    return true;
  }

  function showView(name) {
    views.forEach((v) => {
      v.classList.toggle("is-active", v.dataset.authView === name);
    });
    infoBlocks.forEach((block) => {
      const key = name === "forgot" ? "forgot" : name;
      block.classList.toggle("is-active", block.dataset.authInfo === key);
    });
    if (panel) {
      panel.classList.toggle("is-register", name === "register");
    }
    if (name === "register") setRegStep(1);
    if (name === "login" || name === "register" || name === "forgot") {
      history.replaceState(null, "", "#" + name);
    }
  }

  showLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("data-auth-show");
      if (target) showView(target);
    });
  });

  document.querySelectorAll('a[href="/auth#register"], a[href="/auth#login"], a[href="/auth#forgot"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const hash = (a.getAttribute("href") || "").split("#")[1];
      if (!hash) return;
      e.preventDefault();
      showView(hash);
    });
  });

  document.querySelectorAll("[data-reg-next]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!validateRegStep(regStep)) return;
      setRegStep(regStep + 1);
    });
  });

  document.querySelectorAll("[data-reg-back]").forEach((btn) => {
    btn.addEventListener("click", () => setRegStep(regStep - 1));
  });

  document.querySelectorAll("[data-reg-step-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = Number(btn.dataset.regStepBtn);
      if (target <= regStep) {
        setRegStep(target);
        return;
      }
      for (let s = regStep; s < target; s += 1) {
        if (!validateRegStep(s)) return;
        setRegStep(s + 1);
      }
    });
  });

  const regPass = document.getElementById("regPass");
  const strengthBar = document.querySelector("[data-strength-bar]");
  const strengthLabel = document.querySelector("[data-strength-label]");

  function scorePassword(value) {
    let score = 0;
    if (value.length >= 8) score += 1;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
    if (/\d/.test(value)) score += 1;
    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    return score;
  }

  if (regPass && strengthBar) {
    regPass.addEventListener("input", () => {
      const score = scorePassword(regPass.value);
      const widths = ["0%", "25%", "50%", "75%", "100%"];
      const colors = ["#94a3b8", "#ef4444", "#f59e0b", "#22c55e", "#16a34a"];
      const labels = [
        "Password strength",
        "Weak — add more characters",
        "Fair — mix letters & numbers",
        "Good — almost there",
        "Strong password",
      ];
      strengthBar.style.width = widths[score];
      strengthBar.style.background = colors[score];
      if (strengthLabel) strengthLabel.textContent = labels[score];
    });
  }

  const hash = (location.hash || "#login").replace("#", "");
  if (hash === "register" || hash === "forgot") {
    showView(hash);
  } else {
    showView("login");
  }

  window.addEventListener("hashchange", function () {
    const next = (location.hash || "#login").replace("#", "");
    if (next === "register" || next === "forgot" || next === "login") {
      showView(next);
    }
  });

  document.querySelectorAll("[data-toggle-pass]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle-pass");
      const input = id ? document.getElementById(id) : null;
      if (!input) return;
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye", !show);
        icon.classList.toggle("fa-eye-slash", show);
      }
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  document.querySelectorAll(".auth-form-view form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.id === "registerForm") {
        if (!validateRegStep(3)) return;
        const p1 = form.querySelector("#regPass");
        const p2 = form.querySelector("#regPass2");
        if (p1 && p2 && p1.value !== p2.value) {
          alert("Passwords do not match. Please check and try again.");
          p2.focus();
          return;
        }
      }
      const btn = form.querySelector('[type="submit"].auth-submit') || form.querySelector(".auth-submit");
      const label = btn?.innerHTML;
      if (btn) {
        btn.innerHTML = "Please wait…";
        btn.disabled = true;
      }
      setTimeout(() => {
        if (btn && label) {
          btn.innerHTML = label;
          btn.disabled = false;
        }
        const msg =
          form.id === "forgotForm"
            ? "If this email is registered, you will receive a reset link shortly. (Demo)"
            : form.id === "registerForm"
              ? "Account created (demo). Connect your backend to enable real signup."
              : "This is a demo form. Connect your backend to enable this action.";
        alert(msg);
        if (form.id === "forgotForm") showView("login");
      }, 1000);
    });
  });

  ["authGoogleBtn", "authGoogleBtnReg"].forEach((id) => {
    const googleBtn = document.getElementById(id);
    if (googleBtn) {
      googleBtn.addEventListener("click", () => {
        alert("Google sign-in is demo-only. Connect OAuth in your backend.");
      });
    }
  });
})();
