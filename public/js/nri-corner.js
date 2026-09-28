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

  var INV_TABS = [
    { id: "high-growth", label: "High Growth" },
    { id: "new-launches", label: "New Launches" },
    { id: "premium", label: "Premium" },
    { id: "ready", label: "Ready to Move" }
  ];

  var INV_MARKETS = {
    "high-growth": [
      {
        city: "GURUGRAM",
        tag: "NCR corridor",
        price: "\u20b91.8 Cr onwards",
        growth: "+24.5%",
        yield: "3.2%",
        projects: "25+ Projects",
        href: "/investment-opportunities#hotspots",
        img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "HYDERABAD",
        tag: "Financial district",
        price: "\u20b970 L onwards",
        growth: "+21.8%",
        yield: "3.9%",
        projects: "18+ Projects",
        href: "/investment-opportunities#top-markets",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "PUNE",
        tag: "Hinjewadi belt",
        price: "\u20b965 L onwards",
        growth: "+18.2%",
        yield: "3.6%",
        projects: "22+ Projects",
        href: "/investment-opportunities#opportunities",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    "new-launches": [
      {
        city: "NOIDA",
        tag: "Expressway launches",
        price: "\u20b955 L onwards",
        growth: "+16.4%",
        yield: "3.1%",
        projects: "30+ Projects",
        href: "/investment-opportunities#top-projects",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "BENGALURU",
        tag: "Peripheral townships",
        price: "\u20b980 L onwards",
        growth: "+15.1%",
        yield: "3.4%",
        projects: "28+ Projects",
        href: "/investment-opportunities#top10-investment",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "CHENNAI",
        tag: "OMR pipeline",
        price: "\u20b945 L onwards",
        growth: "+14.3%",
        yield: "3.0%",
        projects: "16+ Projects",
        href: "/investment-opportunities",
        img: "https://images.unsplash.com/photo-1582407947304-f1665a551c6b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    premium: [
      {
        city: "MUMBAI",
        tag: "Premium towers",
        price: "\u20b92.4 Cr onwards",
        growth: "+12.6%",
        yield: "2.9%",
        projects: "14+ Projects",
        href: "/investment-opportunities#top10-investment",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "GURUGRAM",
        tag: "Golf-side estates",
        price: "\u20b93.2 Cr onwards",
        growth: "+19.4%",
        yield: "3.0%",
        projects: "12+ Projects",
        href: "/investment-opportunities#hotspots",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "BENGALURU",
        tag: "Central luxury",
        price: "\u20b91.6 Cr onwards",
        growth: "+17.0%",
        yield: "3.3%",
        projects: "11+ Projects",
        href: "/investment-opportunities",
        img: "https://images.unsplash.com/photo-1600047509807-ba8f64d4a519?auto=format&fit=crop&w=800&q=80"
      }
    ],
    ready: [
      {
        city: "GURUGRAM",
        tag: "Ready inventory",
        price: "\u20b91.1 Cr onwards",
        growth: "+11.2%",
        yield: "3.5%",
        projects: "9+ Projects",
        href: "/investment-opportunities#payment-plan",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "PUNE",
        tag: "Immediate possession",
        price: "\u20b972 L onwards",
        growth: "+10.4%",
        yield: "3.7%",
        projects: "13+ Projects",
        href: "/investment-opportunities",
        img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
      },
      {
        city: "HYDERABAD",
        tag: "Handover-ready",
        price: "\u20b985 L onwards",
        growth: "+9.8%",
        yield: "4.0%",
        projects: "10+ Projects",
        href: "/investment-opportunities#top-markets",
        img: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  var invTabsEl = document.getElementById("nriInvTabs");
  var invGridEl = document.getElementById("nriInvGrid");
  var activeInvTab = "high-growth";

  function renderInvCards(tabId) {
    if (!invGridEl) return;
    var items = INV_MARKETS[tabId] || [];
    invGridEl.innerHTML = items
      .map(function (m) {
        return (
          '<article class="nri-inv-card">' +
          '<div class="nri-inv-card-media">' +
          '<img src="' +
          m.img +
          '" alt="" loading="lazy" />' +
          '<span class="nri-inv-card-badge">' +
          m.tag +
          "</span></div>" +
          '<div class="nri-inv-card-body">' +
          "<h3 class=\"nri-inv-city\">" +
          m.city +
          "</h3>" +
          '<p class="nri-inv-price">' +
          m.price +
          "</p>" +
          '<div class="nri-inv-stats">' +
          '<div class="nri-inv-stat nri-inv-stat--up"><span>Historical Price Growth*</span><strong>' +
          m.growth +
          "</strong></div>" +
          '<div class="nri-inv-stat"><span>Rental Yield*</span><strong>' +
          m.yield +
          "</strong></div></div>" +
          '<p class="nri-inv-projects"><i class="fas fa-layer-group" aria-hidden="true"></i>' +
          m.projects +
          "</p>" +
          '<a class="nri-btn nri-btn--primary" href="' +
          m.href +
          '">Explore <i class="fas fa-arrow-right" aria-hidden="true"></i></a>' +
          "</div></article>"
        );
      })
      .join("");
  }

  function setInvTab(tabId) {
    activeInvTab = tabId;
    if (invTabsEl) {
      invTabsEl.querySelectorAll(".nri-inv-tab").forEach(function (btn) {
        var isActive = btn.getAttribute("data-tab") === tabId;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }
    renderInvCards(tabId);
  }

  if (invTabsEl && invGridEl) {
    invTabsEl.innerHTML = INV_TABS.map(function (tab, i) {
      return (
        '<button type="button" class="nri-inv-tab' +
        (i === 0 ? " is-active" : "") +
        '" role="tab" data-tab="' +
        tab.id +
        '" aria-selected="' +
        (i === 0 ? "true" : "false") +
        '" aria-controls="nriInvGrid" id="nri-inv-tab-' +
        tab.id +
        '">' +
        tab.label +
        "</button>"
      );
    }).join("");

    invTabsEl.querySelectorAll(".nri-inv-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setInvTab(btn.getAttribute("data-tab"));
      });
    });

    renderInvCards(activeInvTab);
  }

  var calcProperty = document.getElementById("nriCalcProperty");
  if (calcProperty) {
    var calcDown = document.getElementById("nriCalcDown");
    var calcHold = document.getElementById("nriCalcHold");
    var calcRent = document.getElementById("nriCalcRent");
    var calcGrowth = document.getElementById("nriCalcGrowth");
    var calcEls = {
      propertyOut: document.getElementById("nriCalcPropertyOut"),
      downOut: document.getElementById("nriCalcDownOut"),
      holdOut: document.getElementById("nriCalcHoldOut"),
      rentOut: document.getElementById("nriCalcRentOut"),
      growthOut: document.getElementById("nriCalcGrowthOut"),
      fv: document.getElementById("nriCalcFv"),
      cap: document.getElementById("nriCalcCap"),
      rentTotal: document.getElementById("nriCalcRentTotal"),
      roi: document.getElementById("nriCalcRoi"),
      splitCap: document.getElementById("nriCalcSplitCap"),
      splitRent: document.getElementById("nriCalcSplitRent")
    };
    var fmtIn = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

    function formatMoney(n) {
      if (window.CURRENCY && window.CURRENCY.formatAmount) {
        return window.CURRENCY.formatAmount(n);
      }
      return "₹ " + fmtIn.format(Math.round(n));
    }

    function formatCompact(n) {
      if (n >= 10000000) {
        var cr = n / 10000000;
        return "₹" + (cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1)) + " Cr";
      }
      if (n >= 100000) {
        var lakhs = n / 100000;
        return "₹" + (lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)) + " L";
      }
      if (n >= 1000) {
        return "₹" + Math.round(n / 1000) + "K";
      }
      return formatMoney(n);
    }

    function setRangeFill(input) {
      var min = Number(input.min);
      var max = Number(input.max);
      var val = Number(input.value);
      var pct = max > min ? ((val - min) / (max - min)) * 100 : 0;
      input.style.setProperty("--nri-calc-fill", pct + "%");
    }

    function syncDownMax() {
      var prop = Number(calcProperty.value);
      calcDown.max = String(prop);
      if (Number(calcDown.value) > prop) {
        calcDown.value = String(prop);
      }
    }

    function runCalc() {
      syncDownMax();
      var property = Number(calcProperty.value);
      var down = Number(calcDown.value);
      var years = Number(calcHold.value);
      var rentMo = Number(calcRent.value);
      var growthPct = Number(calcGrowth.value);
      var rate = growthPct / 100;

      calcEls.propertyOut.textContent = formatCompact(property);
      calcEls.downOut.textContent = formatCompact(down);
      calcEls.holdOut.textContent = years + (years === 1 ? " Year" : " Years");
      calcEls.rentOut.textContent = formatCompact(rentMo) + " / Month";
      calcEls.growthOut.textContent = growthPct + "% / Year";

      [calcProperty, calcDown, calcHold, calcRent, calcGrowth].forEach(setRangeFill);

      var futureValue = property * Math.pow(1 + rate, years);
      var capital = futureValue - property;
      var rentTotal = rentMo * 12 * years;
      var roi = down > 0 ? ((capital + rentTotal) / down) * 100 : 0;

      calcEls.fv.textContent = formatCompact(futureValue);
      calcEls.cap.textContent = formatCompact(capital);
      calcEls.rentTotal.textContent = formatCompact(rentTotal);
      calcEls.roi.textContent = (roi >= 100 ? roi.toFixed(0) : roi.toFixed(1)) + "%";

      var totalReturn = capital + rentTotal;
      var capPct = totalReturn > 0 ? (capital / totalReturn) * 100 : 50;
      var rentPct = totalReturn > 0 ? (rentTotal / totalReturn) * 100 : 50;
      calcEls.splitCap.style.width = capPct.toFixed(1) + "%";
      calcEls.splitRent.style.width = rentPct.toFixed(1) + "%";
    }

    [calcProperty, calcDown, calcHold, calcRent, calcGrowth].forEach(function (input) {
      input.addEventListener("input", runCalc);
    });

    runCalc();
  }

  var NRI_COUNTRY_STORIES = [
    {
      id: "uae",
      country: "United Arab Emirates",
      label: "UAE",
      stories: [
        {
          name: "Arjun K.",
          initials: "AK",
          role: "Finance · Dubai",
          quote:
            "Inchbrick ran virtual walkthroughs on UAE time. PoA was apostilled in ten days — I signed the builder agreement without flying to India.",
          indiaCity: "Gurugram",
          corridor: "Dwarka Expressway",
          meta: "3 BHK · Under construction · 2024"
        },
        {
          name: "Priya & Rohit M.",
          initials: "PR",
          role: "Healthcare · Abu Dhabi",
          quote:
            "We needed FEMA clarity on NRE transfers. Their team lined up the bank letter and RERA escrow milestones before we paid the booking amount.",
          indiaCity: "Hyderabad",
          corridor: "Financial District",
          meta: "4 BHK · Ready · 2023"
        }
      ]
    },
    {
      id: "uk",
      country: "United Kingdom",
      label: "UK",
      stories: [
        {
          name: "James S.",
          initials: "JS",
          role: "Tech · London",
          quote:
            "Shortlisted three Mumbai projects on video, then Inchbrick's legal partner cleared title and society NOC while I was still in the UK.",
          indiaCity: "Mumbai",
          corridor: "Western suburbs",
          meta: "2 BHK · Resale · 2024"
        },
        {
          name: "Ananya D.",
          initials: "AD",
          role: "Consulting · Manchester",
          quote:
            "Registration felt daunting from abroad. They coordinated PoA, stamp duty, and handover keys through a single point of contact.",
          indiaCity: "Pune",
          corridor: "Hinjewadi belt",
          meta: "3 BHK · Possession · 2023"
        }
      ]
    },
    {
      id: "usa",
      country: "United States",
      label: "USA",
      stories: [
        {
          name: "Vikram P.",
          initials: "VP",
          role: "Product · New Jersey",
          quote:
            "I wanted rental yield, not just appreciation. They compared Bengaluru ORR projects with actual tenant demand data before I wired from my NRE account.",
          indiaCity: "Bengaluru",
          corridor: "Outer Ring Road",
          meta: "3 BHK · Leased · 2024"
        },
        {
          name: "Meera T.",
          initials: "MT",
          role: "Physician · Texas",
          quote:
            "Time zones were the hard part. Weekly calls at 7 a.m. CST, document uploads same day — we closed on a Gurugram premium tower in six weeks.",
          indiaCity: "Gurugram",
          corridor: "Golf Course Ext.",
          meta: "4 BHK · Under construction · 2025"
        }
      ]
    },
    {
      id: "singapore",
      country: "Singapore",
      label: "Singapore",
      stories: [
        {
          name: "Rahul C.",
          initials: "RC",
          role: "Banking · Singapore",
          quote:
            "Used Inchbrick for both investment and parents' retirement home. One advisor tracked two cities — Hyderabad and Goa — with separate payment plans.",
          indiaCity: "Hyderabad",
          corridor: "Gachibowli",
          meta: "3 BHK · Ready · 2024"
        }
      ]
    },
    {
      id: "canada",
      country: "Canada",
      label: "Canada",
      stories: [
        {
          name: "Harpreet & Simran G.",
          initials: "HS",
          role: "Engineering · Toronto",
          quote:
            "First-time buyers in India from Canada. They explained TDS, Form 15CA, and builder milestone plans in plain language before our first remittance.",
          indiaCity: "Chandigarh",
          corridor: "Tricity",
          meta: "3 BHK · Under construction · 2024"
        }
      ]
    },
    {
      id: "australia",
      country: "Australia",
      label: "Australia",
      stories: [
        {
          name: "Neha R.",
          initials: "NR",
          role: "Marketing · Sydney",
          quote:
            "I invested while on a temporary visa path. Inchbrick flagged RNOR timing and helped structure the purchase through my NRO account correctly.",
          indiaCity: "Mumbai",
          corridor: "Thane",
          meta: "2 BHK · Ready · 2023"
        }
      ]
    }
  ];

  var countryTabs = document.getElementById("nriCountryTabs");
  var countryPanel = document.getElementById("nriCountryPanel");
  var activeCountryId = NRI_COUNTRY_STORIES[0] ? NRI_COUNTRY_STORIES[0].id : "";
  var countryStorySlide = 0;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function storyInitials(story) {
    if (story.initials) return String(story.initials).slice(0, 2).toUpperCase();
    return getProfileInitials(story.name);
  }

  function getProfileInitials(name) {
    var clean = String(name).replace(/\./g, "").trim();
    if (!clean) return "?";
    if (clean.indexOf("&") >= 0) {
      var pair = clean.split("&").map(function (p) {
        return p.trim();
      });
      var a = pair[0] ? pair[0].charAt(0) : "";
      var b = pair[1] ? pair[1].charAt(0) : "";
      return (a + b).toUpperCase() || "?";
    }
    var words = clean.split(/\s+/).filter(Boolean);
    if (words.length >= 2) {
      return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
    }
    return words[0].charAt(0).toUpperCase();
  }

  function abroadFromRole(role) {
    var parts = String(role).split("·");
    return parts.length > 1 ? parts[parts.length - 1].trim() : parts[0].trim();
  }

  function renderTestimonialStars(rating) {
    var r = Math.min(5, Math.max(1, rating || 5));
    var html =
      '<div class="nri-testimonial-stars" role="img" aria-label="' + r + ' out of 5 stars">';
    for (var i = 0; i < 5; i++) {
      html +=
        '<i class="fas fa-star' +
        (i < r ? "" : " nri-testimonial-star--dim") +
        '" aria-hidden="true"></i>';
    }
    return html + "</div>";
  }

  function renderCountryStorySlide(story, slideIndex, groupLabel) {
    var initials = storyInitials(story);
    var rating = story.rating || 5;
    return (
      '<article class="nri-testimonial-slide" data-country-slide="' +
      slideIndex +
      '" aria-hidden="' +
      (slideIndex === 0 ? "false" : "true") +
      '">' +
      '<div class="nri-testimonial-card">' +
      '<div class="nri-testimonial-card-head">' +
      renderTestimonialStars(rating) +
      '<span class="nri-testimonial-verified"><i class="fas fa-check-circle" aria-hidden="true"></i> Verified NRI buyer</span>' +
      "</div>" +
      '<blockquote class="nri-testimonial-quote"><p>' +
      escapeHtml(story.quote) +
      "</p></blockquote>" +
      '<p class="nri-testimonial-purchase">' +
      "Purchased in <strong>" +
      escapeHtml(story.indiaCity) +
      "</strong> · " +
      escapeHtml(story.corridor) +
      " · " +
      escapeHtml(story.meta) +
      "</p>" +
      '<footer class="nri-testimonial-author">' +
      '<span class="nri-testimonial-avatar" aria-hidden="true">' +
      escapeHtml(initials) +
      "</span>" +
      '<div class="nri-testimonial-author-text">' +
      "<cite>" +
      escapeHtml(story.name) +
      "</cite>" +
      "<span>" +
      escapeHtml(story.role) +
      "</span>" +
      '<span class="nri-testimonial-author-country">' +
      escapeHtml(groupLabel) +
      "</span></div></footer></div></article>"
    );
  }

  function renderCountryProfilePill(story, index, isActive) {
    var initials = storyInitials(story);
    return (
      '<button type="button" class="nri-testimonial-picker' +
      (isActive ? " is-active" : "") +
      '" role="tab" aria-selected="' +
      (isActive ? "true" : "false") +
      '" data-country-profile="' +
      index +
      '" aria-label="Review by ' +
      escapeHtml(story.name) +
      '">' +
      '<span class="nri-testimonial-avatar nri-testimonial-avatar--sm">' +
      escapeHtml(initials) +
      "</span>" +
      '<span class="nri-testimonial-picker-name">' +
      escapeHtml(story.name) +
      "</span></button>"
    );
  }

  function updateCountrySlider(panelRoot, index) {
    if (!panelRoot) return;
    var slides = panelRoot.querySelectorAll(".nri-testimonial-slide");
    var total = slides.length;
    if (!total) return;
    countryStorySlide = (index + total) % total;

    var track = panelRoot.querySelector(".nri-testimonial-track");
    if (track) {
      track.style.transform = "translate3d(-" + countryStorySlide * 100 + "%, 0, 0)";
    }

    slides.forEach(function (slide, i) {
      slide.setAttribute("aria-hidden", i === countryStorySlide ? "false" : "true");
    });

    panelRoot.querySelectorAll(".nri-testimonial-picker").forEach(function (pill, i) {
      var on = i === countryStorySlide;
      pill.classList.toggle("is-active", on);
      pill.setAttribute("aria-selected", on ? "true" : "false");
    });

    panelRoot.querySelectorAll(".nri-testimonial-dot").forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === countryStorySlide);
      dot.setAttribute("aria-selected", i === countryStorySlide ? "true" : "false");
    });

    var prevBtn = panelRoot.querySelector(".nri-testimonial-nav--prev");
    var nextBtn = panelRoot.querySelector(".nri-testimonial-nav--next");
    var single = total <= 1;
    if (prevBtn) prevBtn.disabled = single;
    if (nextBtn) nextBtn.disabled = single;
  }

  function bindCountrySlider(panelRoot) {
    if (!panelRoot) return;
    var prevBtn = panelRoot.querySelector(".nri-testimonial-nav--prev");
    var nextBtn = panelRoot.querySelector(".nri-testimonial-nav--next");

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        updateCountrySlider(panelRoot, countryStorySlide - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        updateCountrySlider(panelRoot, countryStorySlide + 1);
      });
    }

    panelRoot.querySelectorAll("[data-country-profile]").forEach(function (pill) {
      pill.addEventListener("click", function () {
        updateCountrySlider(panelRoot, Number(pill.getAttribute("data-country-profile")));
      });
    });

    panelRoot.querySelectorAll("[data-country-dot]").forEach(function (dot) {
      dot.addEventListener("click", function () {
        updateCountrySlider(panelRoot, Number(dot.getAttribute("data-country-dot")));
      });
    });

    var viewport = panelRoot.querySelector(".nri-testimonial-viewport");
    if (viewport) {
      var touchStartX = 0;
      viewport.addEventListener(
        "touchstart",
        function (e) {
          touchStartX = e.touches[0].clientX;
        },
        { passive: true }
      );
      viewport.addEventListener(
        "touchend",
        function (e) {
          var dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) < 48) return;
          updateCountrySlider(panelRoot, countryStorySlide + (dx < 0 ? 1 : -1));
        },
        { passive: true }
      );
    }

    updateCountrySlider(panelRoot, 0);
  }

  function renderCountryPanel(countryId) {
    if (!countryPanel) return;
    var group = NRI_COUNTRY_STORIES.find(function (g) {
      return g.id === countryId;
    });
    if (!group) return;

    countryStorySlide = 0;
    var slidesHtml = group.stories
      .map(function (story, i) {
        return renderCountryStorySlide(story, i, group.country);
      })
      .join("");
    var profilesHtml = group.stories
      .map(function (story, i) {
        return renderCountryProfilePill(story, i, i === 0);
      })
      .join("");
    var dotsHtml = group.stories
      .map(function (_, i) {
        return (
          '<button type="button" class="nri-testimonial-dot' +
          (i === 0 ? " is-active" : "") +
          '" aria-label="Review ' +
          (i + 1) +
          " of " +
          group.stories.length +
          '" data-country-dot="' +
          i +
          '" aria-selected="' +
          (i === 0 ? "true" : "false") +
          '"></button>'
        );
      })
      .join("");

    countryPanel.innerHTML =
      '<div class="nri-testimonial-wrap" data-country-id="' +
      escapeHtml(group.id) +
      '">' +
      '<p class="nri-testimonial-region">Reviews from buyers in <strong>' +
      escapeHtml(group.country) +
      "</strong></p>" +
      '<div class="nri-testimonial-slider">' +
      '<button type="button" class="nri-testimonial-nav nri-testimonial-nav--prev" aria-label="Previous review">' +
      '<i class="fas fa-chevron-left" aria-hidden="true"></i></button>' +
      '<div class="nri-testimonial-viewport">' +
      '<div class="nri-testimonial-track">' +
      slidesHtml +
      "</div></div>" +
      '<button type="button" class="nri-testimonial-nav nri-testimonial-nav--next" aria-label="Next review">' +
      '<i class="fas fa-chevron-right" aria-hidden="true"></i></button></div>' +
      '<div class="nri-testimonial-pickers" role="tablist" aria-label="Select review">' +
      profilesHtml +
      "</div>" +
      '<div class="nri-testimonial-dots" role="tablist" aria-label="Review pagination">' +
      dotsHtml +
      "</div></div>";

    bindCountrySlider(countryPanel.querySelector(".nri-testimonial-wrap"));
  }

  function setActiveCountry(countryId) {
    activeCountryId = countryId;
    if (countryTabs) {
      countryTabs.querySelectorAll("[data-country-tab]").forEach(function (btn) {
        var on = btn.getAttribute("data-country-tab") === countryId;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
    }
    renderCountryPanel(countryId);
  }

  if (countryTabs && countryPanel && NRI_COUNTRY_STORIES.length) {
    countryTabs.innerHTML = NRI_COUNTRY_STORIES.map(function (group, i) {
      return (
        '<button type="button" class="nri-country-tab' +
        (i === 0 ? " is-active" : "") +
        '" role="tab" id="nri-country-tab-' +
        group.id +
        '" data-country-tab="' +
        group.id +
        '" aria-controls="nriCountryPanel" aria-selected="' +
        (i === 0 ? "true" : "false") +
        '">' +
        escapeHtml(group.label) +
        "</button>"
      );
    }).join("");

    countryTabs.querySelectorAll("[data-country-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setActiveCountry(btn.getAttribute("data-country-tab"));
      });
    });

    setActiveCountry(activeCountryId);
  }

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
