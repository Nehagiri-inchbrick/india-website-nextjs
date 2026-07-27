(function () {
  function initHotDeals() {
    const root = document.getElementById("liveDealsSection");
    if (!root || root.dataset.hotDealsReady === "true") return;

    const cards = Array.from(root.querySelectorAll(".hpd-feature-deal"));
    const dots = Array.from(root.querySelectorAll(".hpd-slider-dot"));
    const prev = root.querySelector("#hotDealPrev");
    const next = root.querySelector("#hotDealNext");

    if (!cards.length) return;

    const deals = [
      {
        id: 5,
        name: "Skyline Towers",
        meta: "Bandra West, Mumbai · ₹ 2.85 Cr*"
      },
      {
        id: 3,
        name: "Sunrise Park Villas",
        meta: "Hinjewadi, Pune · ₹ 1.42 Cr*"
      },
      {
        id: 18,
        name: "Flex Space Apartments",
        meta: "Indiranagar, Bangalore · ₹ 1.08 Cr*"
      }
    ];

    root.dataset.hotDealsReady = "true";

    let current = Math.max(
      0,
      cards.findIndex((card) => card.classList.contains("active"))
    );
    let timer = null;

    function render(index) {
      current = (index + cards.length) % cards.length;
      cards.forEach((card, cardIndex) => {
        card.classList.toggle("active", cardIndex === current);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === current);
        dot.setAttribute("aria-pressed", dotIndex === current ? "true" : "false");
      });
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      stopAuto();
      timer = window.setInterval(() => {
        render(current + 1);
      }, 4500);
    }

    cards.forEach((card, index) => {
      const deal = deals[index];
      if (!deal) return;

      const href = "/listing-detail?id=" + deal.id;
      const imageLink = card.querySelector(".hpd-card-img");
      const ctaLink = card.querySelector(".hpd-card-cta");
      const nameEl = card.querySelector(".hpd-card-name");
      const metaEl = card.querySelector(".hpd-card-meta");
      const img = card.querySelector(".hpd-card-img img");

      card.dataset.listingId = String(deal.id);
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "View " + deal.name);

      if (imageLink) {
        imageLink.setAttribute("href", href);
        imageLink.setAttribute("aria-label", "View " + deal.name);
      }
      if (ctaLink) ctaLink.setAttribute("href", href);
      if (nameEl) nameEl.textContent = deal.name;
      if (img) img.alt = deal.name;
      if (metaEl) {
        const parts = deal.meta.split("·");
        metaEl.innerHTML = parts.length > 1
          ? parts[0].trim() + ' · <strong>' + parts[1].trim() + "</strong>"
          : deal.meta;
      }

      function goToDetail(event) {
        if (!card.classList.contains("active")) return;
        if (event.target.closest(".hpd-slider-nav, .hpd-slider-dot, .hpd-card-cta, .hpd-card-img")) {
          return;
        }
        window.location.href = href;
      }

      card.addEventListener("click", goToDetail);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (card.classList.contains("active")) window.location.href = href;
        }
      });
    });

    prev?.addEventListener("click", () => {
      render(current - 1);
      startAuto();
    });

    next?.addEventListener("click", () => {
      render(current + 1);
      startAuto();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        render(index);
        startAuto();
      });
    });

    root.addEventListener("mouseenter", stopAuto);
    root.addEventListener("mouseleave", startAuto);

    render(current);
    startAuto();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHotDeals, { once: true });
  } else {
    initHotDeals();
  }

  window.addEventListener("html-page-scripts-ready", initHotDeals);
})();
