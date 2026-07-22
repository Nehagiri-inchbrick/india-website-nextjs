(function () {
  var FAQS = [
    {
      q: "Can NRIs buy any type of property in India?",
      a: "NRIs and OCIs can purchase residential and commercial properties freely. Agricultural land, farmhouses, and plantation property cannot be acquired without RBI special permission."
    },
    {
      q: "Do I need to visit India to complete the purchase?",
      a: "Not necessarily. Many NRIs complete bookings and registration via a notarised and apostilled Power of Attorney. Inchbrick coordinates virtual tours, legal checks, and POA execution."
    },
    {
      q: "Which bank account should I use for payment?",
      a: "Payments must be made from your NRE or NRO account in India. Funds remitted from abroad should be credited to these accounts first, in compliance with FEMA regulations."
    },
    {
      q: "Can I get a home loan as an NRI?",
      a: "Yes. Major Indian banks offer NRI home loans based on overseas income. EMI can be serviced from NRE/NRO accounts. Loan eligibility varies by country of employment and income proof."
    },
    {
      q: "How is TDS handled when I sell property?",
      a: "The buyer deducts TDS under Section 195 (typically 20% plus surcharge) before paying the NRI seller. You can claim credit or refund by filing an Indian income tax return."
    },
    {
      q: "Can I repatriate sale proceeds abroad?",
      a: "Yes, up to the amount originally remitted from abroad for that property. Additional repatriation may be possible under the USD 1 million scheme per financial year, subject to RBI norms."
    },
    {
      q: "Is PAN mandatory for NRI property buyers?",
      a: "Yes. PAN is required for property registration, TDS compliance, and income tax filing on rental income or capital gains in India."
    },
    {
      q: "What documents are needed for Power of Attorney?",
      a: "POA must be executed on stamp paper, notarised in your country of residence, and apostilled (or consularised). The attorney in India should be a trusted family member or legal representative."
    }
  ];

  var faqList = document.getElementById("nriFaqList");
  if (faqList) {
    faqList.innerHTML = FAQS.map(function (item, i) {
      return (
        '<article class="nri-faq-item' + (i === 0 ? " is-open" : "") + '">' +
        '<button type="button" class="nri-faq-q" aria-expanded="' + (i === 0 ? "true" : "false") + '">' +
        item.q + '<i class="fas fa-chevron-down"></i></button>' +
        '<div class="nri-faq-a">' + item.a + "</div></article>"
      );
    }).join("");

    faqList.querySelectorAll(".nri-faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".nri-faq-item");
        var isOpen = item.classList.contains("is-open");

        faqList.querySelectorAll(".nri-faq-item").forEach(function (el) {
          el.classList.remove("is-open");
          el.querySelector(".nri-faq-q").setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".nri-reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 4) * 0.06 + "s";
      revealObs.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Sticky jump active state
  var jumpLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nri-jump-inner a[href^='#']")
  );
  var sections = jumpLinks
    .map(function (a) {
      return document.querySelector(a.getAttribute("href"));
    })
    .filter(Boolean);

  if (jumpLinks.length && sections.length && "IntersectionObserver" in window) {
    var activeId = "";
    var sectionObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) activeId = entry.target.id;
        });
        jumpLinks.forEach(function (a) {
          a.classList.toggle(
            "is-active",
            a.getAttribute("href") === "#" + activeId
          );
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (sec) {
      sectionObs.observe(sec);
    });
  }
})();
