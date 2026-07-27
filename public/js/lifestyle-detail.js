(function () {
  const GALLERY_POOL = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
  ];

  const PROPERTIES = [
    { name: "Ganga View Residences", loc: "Rishikesh, Uttarakhand", price: "₹ 68 L*", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { name: "Temple Town Villas", loc: "Haridwar, Uttarakhand", price: "₹ 95 L*", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=600&q=80" },
    { name: "Ghat Side Apartments", loc: "Varanasi, Uttar Pradesh", price: "₹ 72 L*", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" }
  ];

  const COLLECTIONS = {
    spiritual: {
      slug: "spiritual",
      name: "Spiritual Living",
      tagline: "Peaceful spaces for inner harmony and mindful living.",
      icon: "fa-om",
      accent: "#5c9e5c",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-leaf", title: "Calm surroundings", text: "Low-density townships near ashrams and retreat centres." },
        { icon: "fa-person-praying", title: "Spiritual access", text: "Temple towns and yoga hubs within easy reach." },
        { icon: "fa-home", title: "Second-home ready", text: "Ideal for long-stay living and mindful getaways." },
        { icon: "fa-chart-line", title: "Rental appeal", text: "Wellness tourism drives steady holiday demand." }
      ],
      featuredLocations: [
        { name: "Rishikesh", desc: "Yoga capital on the Ganges", img: "https://images.unsplash.com/photo-1524492412937-280ce19acd81?auto=format&fit=crop&w=600&q=80" },
        { name: "Haridwar", desc: "Ancient pilgrimage gateway", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74203?auto=format&fit=crop&w=600&q=80" },
        { name: "Varanasi", desc: "Timeless ghats and heritage", img: "https://images.unsplash.com/photo-1561361513-0665876603b4?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Temples",
      nearbyIcon: "fa-place-of-worship",
      nearby: [
        { name: "Parmarth Niketan", type: "Ashram", dist: "Rishikesh · 2 km" },
        { name: "Har Ki Pauri", type: "Ghat & Temple", dist: "Haridwar · 1.5 km" },
        { name: "Kashi Vishwanath", type: "Jyotirlinga", dist: "Varanasi · 3 km" },
        { name: "Neelkanth Mahadev", type: "Shiva Temple", dist: "Rishikesh · 12 km" }
      ],
      faq: [
        { q: "Is spiritual living good for investment?", a: "Select temple towns and retreat belts show steady appreciation and holiday rental demand, especially near established spiritual hubs." },
        { q: "Can NRIs buy property in these locations?", a: "Yes, subject to standard FEMA guidelines. Our team assists with documentation and RERA verification." },
        { q: "What property types are available?", a: "Apartments, villas, and plotted communities — typically in low-rise, green townships." }
      ]
    },
    "second-home": {
      slug: "second-home",
      name: "Second Home Seekers",
      tagline: "Your perfect weekend getaway away from the city rush.",
      icon: "fa-house-user",
      accent: "#c99b5b",
      img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-car", title: "Weekend access", text: "Within 2–4 hours of major metros." },
        { icon: "fa-key", title: "Holiday ready", text: "Managed villas and lock-and-leave apartments." },
        { icon: "fa-coins", title: "Rental income", text: "Earn from short-stay bookings when away." },
        { icon: "fa-shield-halved", title: "Secure communities", text: "Gated projects with 24/7 security." }
      ],
      featuredLocations: [
        { name: "Lonavala", desc: "Mist-covered hill escapes", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" },
        { name: "Goa", desc: "Coastal weekend retreats", img: "https://images.unsplash.com/photo-1519046909882-ff06b0f0a7b0?auto=format&fit=crop&w=600&q=80" },
        { name: "Nainital", desc: "Lake-side mountain charm", img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Attractions",
      nearbyIcon: "fa-camera",
      nearby: [
        { name: "Tiger Point", type: "Viewpoint", dist: "Lonavala · 4 km" },
        { name: "Candolim Beach", type: "Beach", dist: "North Goa · 2 km" },
        { name: "Naini Lake", type: "Lake", dist: "Nainital · 1 km" },
        { name: "Imagica Theme Park", type: "Entertainment", dist: "Lonavala · 8 km" }
      ],
      faq: [
        { q: "What is the ideal budget for a second home?", a: "Weekend apartments start around ₹ 45 L in emerging belts; premium villas range from ₹ 1.5 Cr to ₹ 5 Cr+." },
        { q: "Can I rent out my second home?", a: "Yes. Many buyers use professional managers for short-stay rentals, especially in Goa and hill stations." },
        { q: "How far should it be from my city?", a: "Most buyers prefer locations within a 3–4 hour drive for convenient weekend use." }
      ]
    },
    luxury: {
      slug: "luxury",
      name: "Luxury Living",
      tagline: "Experience unparalleled elegance in India's finest addresses.",
      icon: "fa-gem",
      accent: "#b9893f",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-concierge-bell", title: "Concierge lifestyle", text: "Private lifts, butler services, and club access." },
        { icon: "fa-crown", title: "Branded residences", text: "Limited inventory from top developers." },
        { icon: "fa-globe", title: "NRI friendly", text: "Documentation support and flexible payment plans." },
        { icon: "fa-arrow-trend-up", title: "Resale liquidity", text: "Prime belts with proven appreciation." }
      ],
      featuredLocations: [
        { name: "Worli", desc: "Sea-link skyline living", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" },
        { name: "Golf Course Road", desc: "Gurgaon's premium corridor", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
        { name: "Bengaluru CBD", desc: "Urban luxury towers", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Landmarks",
      nearbyIcon: "fa-landmark",
      nearby: [
        { name: "Bandra-Worli Sea Link", type: "Landmark", dist: "Worli · 1 km" },
        { name: "DLF Cyber Hub", type: "Dining & Retail", dist: "Gurgaon · 3 km" },
        { name: "UB City Mall", type: "Luxury Retail", dist: "Bengaluru · 2 km" },
        { name: "Lodi Gardens", type: "Heritage Park", dist: "Delhi · 4 km" }
      ],
      faq: [
        { q: "What defines a luxury property in India?", a: "Premium location, limited inventory, branded finishes, concierge amenities, and strong developer pedigree." },
        { q: "Are luxury homes RERA registered?", a: "All our listed luxury projects are RERA verified. We share registration numbers before site visits." },
        { q: "Do luxury projects offer payment plans?", a: "Most offer construction-linked plans; some branded residences have international payment schedules." }
      ]
    },
    waterfront: {
      slug: "waterfront",
      name: "Waterfront Living",
      tagline: "Sea-facing villas and apartments with coastal charm.",
      icon: "fa-water",
      accent: "#4a8bcf",
      img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-water", title: "Water views", text: "Sea, creek, or lake-facing homes." },
        { icon: "fa-umbrella-beach", title: "Coastal lifestyle", text: "Resort-style pools and beach access." },
        { icon: "fa-bed", title: "Holiday rentals", text: "Strong short-stay booking demand." },
        { icon: "fa-gem", title: "Limited supply", text: "Scarce premium coastal inventory." }
      ],
      featuredLocations: [
        { name: "North Goa", desc: "Vibrant beach belt", img: "https://images.unsplash.com/photo-1519046909882-ff06b0f0a7b0?auto=format&fit=crop&w=600&q=80" },
        { name: "Alibaug", desc: "Mumbai's coastal escape", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=600&q=80" },
        { name: "Kochi", desc: "Backwater waterfront", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Beaches & Waterfronts",
      nearbyIcon: "fa-umbrella-beach",
      nearby: [
        { name: "Candolim Beach", type: "Beach", dist: "North Goa · 1 km" },
        { name: "Mandwa Jetty", type: "Ferry Point", dist: "Alibaug · 2 km" },
        { name: "Marine Drive", type: "Promenade", dist: "Mumbai · 500 m" },
        { name: "Fort Kochi Beach", type: "Beach", dist: "Kochi · 3 km" }
      ],
      faq: [
        { q: "Are waterfront properties good for rental income?", a: "Coastal belts in Goa and Alibaug see strong seasonal and weekend rental demand." },
        { q: "What should I check before buying?", a: "CRZ clearance, clear title, developer track record, and actual view orientation from the unit." },
        { q: "Can I get home loans for holiday homes?", a: "Yes, most banks offer loans for second homes; terms vary by location and builder." }
      ]
    },
    family: {
      slug: "family",
      name: "Family Living",
      tagline: "Spacious homes for growing memories and everyday comfort.",
      icon: "fa-users",
      accent: "#c89868",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-bed", title: "Spacious layouts", text: "3 & 4 BHK with utility and storage." },
        { icon: "fa-school", title: "Schools nearby", text: "Reputed schools within 3 km." },
        { icon: "fa-tree", title: "Parks & play zones", text: "Kid-friendly community amenities." },
        { icon: "fa-house-chimney", title: "End-user demand", text: "Stable resale in family corridors." }
      ],
      featuredLocations: [
        { name: "Noida", desc: "Metro-linked family townships", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" },
        { name: "Pune", desc: "Suburban family belts", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
        { name: "Hyderabad", desc: "IT corridor family hubs", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Schools",
      nearbyIcon: "fa-school",
      nearby: [
        { name: "Delhi Public School", type: "CBSE", dist: "Noida · 2 km" },
        { name: "Vibgyor High", type: "ICSE", dist: "Pune · 1.5 km" },
        { name: "Oakridge International", type: "IB", dist: "Hyderabad · 3 km" },
        { name: "Ryan International", type: "CBSE", dist: "Gurgaon · 2 km" }
      ],
      faq: [
        { q: "What BHK size suits a family of four?", a: "Most families prefer 3 BHK (1,400–1,800 sqft) with an extra room for work or guests." },
        { q: "How important is school proximity?", a: "Homes within 2–3 km of reputed schools typically see stronger end-user demand and resale." },
        { q: "Are gated communities safer for families?", a: "Yes — 24/7 security, CCTV, and controlled access are standard in our family-focused listings." }
      ]
    },
    wellness: {
      slug: "wellness",
      name: "Wellness Living",
      tagline: "Health-focused townships surrounded by green serenity.",
      icon: "fa-spa",
      accent: "#3d9970",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-leaf", title: "Green cover", text: "Walking trails and landscaped open spaces." },
        { icon: "fa-dumbbell", title: "Fitness amenities", text: "Gyms, pools, and sports courts." },
        { icon: "fa-spa", title: "Spa & wellness", text: "Clubhouse wellness and recovery zones." },
        { icon: "fa-lungs", title: "Cleaner air", text: "Peripheral locations with lower pollution." }
      ],
      featuredLocations: [
        { name: "Dehradun", desc: "Valley wellness retreats", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80" },
        { name: "Karjat", desc: "Nature belts near Mumbai", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
        { name: "Bangalore North", desc: "Green township corridors", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Wellness Centres",
      nearbyIcon: "fa-spa",
      nearby: [
        { name: "Ananda in the Himalayas", type: "Spa Retreat", dist: "Dehradun · 25 km" },
        { name: "Atmantan Wellness", type: "Resort", dist: "Pune · 40 km" },
        { name: "Cult Fit Hub", type: "Fitness", dist: "Bangalore · 2 km" },
        { name: "Art of Living Centre", type: "Meditation", dist: "Bangalore · 18 km" }
      ],
      faq: [
        { q: "What is wellness living?", a: "Communities designed around health — green spaces, fitness infra, low density, and proximity to nature." },
        { q: "Is it suitable for remote workers?", a: "Very popular with WFH professionals seeking cleaner air and better work-life balance." },
        { q: "Do wellness townships appreciate well?", a: "Established green corridors near metros have shown steady long-term appreciation." }
      ]
    },
    golf: {
      slug: "golf",
      name: "Golf Communities",
      tagline: "Estates and villas within premier golf course belts.",
      icon: "fa-golf-ball-tee",
      accent: "#2d6a4f",
      img: "https://images.unsplash.com/photo-1587174485991-947173e6d088?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-golf-ball-tee", title: "Course access", text: "Fairway-adjacent villas and plots." },
        { icon: "fa-utensils", title: "Club dining", text: "Premium clubhouses and F&B." },
        { icon: "fa-tree", title: "Low density", text: "Expansive master-planned estates." },
        { icon: "fa-medal", title: "Prestige address", text: "Executive and NRI buyer appeal." }
      ],
      featuredLocations: [
        { name: "DLF Golf Links", desc: "Gurgaon's flagship course", img: "https://images.unsplash.com/photo-1587174485991-947173e6d088?auto=format&fit=crop&w=600&q=80" },
        { name: "E City Bangalore", desc: "Championship course belt", img: "https://images.unsplash.com/photo-1535131749006-ba7ca386457d?auto=format&fit=crop&w=600&q=80" },
        { name: "Greater Noida", desc: "Jaypee Greens corridor", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Golf Courses",
      nearbyIcon: "fa-golf-ball-tee",
      nearby: [
        { name: "DLF Golf & Country Club", type: "18-hole", dist: "Gurgaon · On-site" },
        { name: "Eagleton Golf Resort", type: "Resort Course", dist: "Bangalore · 5 km" },
        { name: "Jaypee Greens Golf", type: "Championship", dist: "Greater Noida · 2 km" },
        { name: "Aamby Valley Golf", type: "Hills Course", dist: "Lonavala · 15 km" }
      ],
      faq: [
        { q: "Do I need golf membership separately?", a: "Some projects include club access; others offer optional membership — we clarify before booking." },
        { q: "Are golf villas good investments?", a: "Established golf corridors in NCR and Bangalore hold premium resale value." },
        { q: "What sizes are available?", a: "Typically 3–5 BHK villas and large-format apartments from 2,500 sqft+." }
      ]
    },
    retirement: {
      slug: "retirement",
      name: "Retirement Living",
      tagline: "Secure, serene communities designed for golden years.",
      icon: "fa-person-cane",
      accent: "#8b68c8",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      benefits: [
        { icon: "fa-hand-holding-heart", title: "Senior-friendly", text: "Barrier-free layouts and elevator access." },
        { icon: "fa-user-nurse", title: "Healthcare support", text: "On-call medical and emergency tie-ups." },
        { icon: "fa-broom", title: "Maintenance-free", text: "Managed services and housekeeping." },
        { icon: "fa-sun", title: "Pleasant climate", text: "Locations suited for comfortable retirement." }
      ],
      featuredLocations: [
        { name: "Coimbatore", desc: "Calm southern retirement hub", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" },
        { name: "Dehradun", desc: "Valley climate and connectivity", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80" },
        { name: "Pondicherry", desc: "Coastal serenity", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80" }
      ],
      nearbyTitle: "Nearby Hospitals",
      nearbyIcon: "fa-hospital",
      nearby: [
        { name: "KMCH Hospital", type: "Multi-specialty", dist: "Coimbatore · 3 km" },
        { name: "Max Super Speciality", type: "Super-specialty", dist: "Dehradun · 4 km" },
        { name: "JIPMER", type: "Government Hospital", dist: "Pondicherry · 2 km" },
        { name: "Apollo Hospital", type: "Multi-specialty", dist: "Chennai · 8 km" }
      ],
      faq: [
        { q: "Are retirement communities age-restricted?", a: "Some are 55+ communities; others are general townships with senior-friendly design — we match based on preference." },
        { q: "Can children buy for parents?", a: "Yes. Many buyers purchase retirement homes for parents with power-of-attorney and joint documentation support." },
        { q: "What amenities matter most?", a: "Healthcare access, single-floor or lift access, 24/7 security, and maintenance services top the list." }
      ]
    }
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function getSlug() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || params.get("collection") || "spiritual";
    return COLLECTIONS[slug] ? slug : "spiritual";
  }

  function headBlock(label, title) {
    return '<div class="lsd-head"><span class="lsd-label">' + label + '</span><h2>' + title + '</h2></div>';
  }

  function renderHero(c) {
    const nav = Object.values(COLLECTIONS).map(function (item) {
      const active = item.slug === c.slug ? " is-active" : "";
      return '<a href="/lifestyle-detail?slug=' + item.slug + '" class="lsd-nav-chip' + active + '"><i class="fas ' + item.icon + '"></i><span>' + esc(item.name) + '</span></a>';
    }).join("");

    return (
      '<section class="lsd-hero" style="--ls-accent:' + c.accent + ';--lsd-hero:url(\'' + c.img + '\')">' +
      '<div class="lsd-hero-shade"></div>' +
      '<div class="ls-container lsd-hero-inner">' +
      '<a href="/lifestyle" class="lsd-back"><i class="fas fa-arrow-left"></i> Collections</a>' +
      '<div class="lsd-hero-main">' +
      '<div class="lsd-hero-copy">' +
      '<span class="lsd-kicker"><i class="fas ' + c.icon + '"></i> Lifestyle Collection</span>' +
      "<h1>" + esc(c.name) + "</h1>" +
      "<p>" + esc(c.tagline) + "</p>" +
      '<div class="lsd-hero-actions">' +
      '<a href="#ls-properties" class="lsd-btn lsd-btn--fill"><i class="fas fa-building"></i> View Homes</a>' +
      '<a href="/contact#contactForm" class="lsd-btn lsd-btn--line">Talk to Expert</a>' +
      "</div></div>" +
      '<div class="lsd-hero-stats">' +
      "<div><strong>120+</strong><span>Homes</span></div>" +
      "<div><strong>15+</strong><span>Cities</span></div>" +
      "<div><strong>4.8</strong><span>Rating</span></div>" +
      "</div></div>" +
      '<nav class="lsd-nav" aria-label="Collections">' + nav + "</nav>" +
      "</div></section>"
    );
  }

  function renderBenefits(c) {
    return (
      '<section class="lsd-block" id="ls-benefits">' +
      '<div class="ls-container">' +
      headBlock("Benefits", "Why this lifestyle") +
      '<div class="lsd-benefits">' +
      c.benefits.map(function (b, i) {
        return '<article class="lsd-benefit"><span>0' + (i + 1) + '</span><i class="fas ' + b.icon + '"></i><strong>' + esc(b.title) + "</strong><p>" + esc(b.text) + "</p></article>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderLocations(c) {
    return (
      '<section class="lsd-block lsd-block--soft" id="ls-locations">' +
      '<div class="ls-container">' +
      headBlock("Locations", "Featured destinations") +
      '<div class="lsd-locs">' +
      c.featuredLocations.map(function (l, i) {
        return '<article class="lsd-loc"><img src="' + l.img + '" alt="' + esc(l.name) + '" loading="lazy"><div><em>0' + (i + 1) + "</em><strong>" + esc(l.name) + "</strong><span>" + esc(l.desc) + "</span></div></article>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderProperties() {
    return (
      '<section class="lsd-block" id="ls-properties">' +
      '<div class="ls-container">' +
      '<div class="lsd-head-row">' + headBlock("Homes", "Recommended properties") +
      '<a href="/listings" class="lsd-link">All listings <i class="fas fa-arrow-right"></i></a></div>' +
      '<div class="lsd-props">' +
      PROPERTIES.map(function (p) {
        return '<a href="/listing-detail" class="lsd-prop"><img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"><div><strong>' + esc(p.name) + '</strong><span><i class="fas fa-location-dot"></i> ' + esc(p.loc) + "</span><em>" + esc(p.price) + "</em></div></a>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderNearby(c) {
    return (
      '<section class="lsd-block lsd-block--soft" id="ls-nearby">' +
      '<div class="ls-container">' +
      headBlock("Nearby", esc(c.nearbyTitle)) +
      '<div class="lsd-nearby">' +
      c.nearby.map(function (n) {
        return '<article class="lsd-near"><i class="fas ' + (c.nearbyIcon || "fa-map-pin") + '"></i><div><strong>' + esc(n.name) + "</strong><span>" + esc(n.type) + "</span></div><em>" + esc(n.dist) + "</em></article>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderGallery(c, idx) {
    const imgs = [c.img]
      .concat(c.featuredLocations.map(function (l) { return l.img; }))
      .concat(GALLERY_POOL.slice(idx, idx + 3))
      .slice(0, 6);
    return (
      '<section class="lsd-block" id="ls-gallery">' +
      '<div class="ls-container">' +
      headBlock("Gallery", "Lifestyle moments") +
      '<div class="lsd-gallery">' +
      imgs.map(function (url, i) {
        return '<figure class="lsd-gal' + (i === 0 ? " lsd-gal--hero" : "") + '"><img src="' + url + '" alt="' + esc(c.name) + " " + (i + 1) + '" loading="lazy"></figure>';
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderFaq(c) {
    return (
      '<section class="lsd-block lsd-block--soft" id="ls-faq">' +
      '<div class="ls-container lsd-faq-wrap">' +
      '<div class="lsd-faq-intro">' + headBlock("FAQ", "Quick answers") +
      "<p>Common questions about " + esc(c.name) + ".</p></div>" +
      '<div class="lsd-faq">' +
      c.faq.map(function (f) {
        return '<details class="lsd-faq-item"><summary>' + esc(f.q) + '<i class="fas fa-plus"></i></summary><p>' + esc(f.a) + "</p></details>";
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderCta(c) {
    return (
      '<section class="lsd-cta">' +
      '<div class="ls-container lsd-cta-inner">' +
      '<div><span class="lsd-kicker">Ready to explore?</span><h2>Find your ' + esc(c.name) + " home</h2>" +
      "<p>Get a curated shortlist from Inchbrick lifestyle advisors.</p></div>" +
      '<div class="lsd-cta-actions">' +
      '<a href="/listings" class="lsd-btn lsd-btn--fill">Browse Properties</a>' +
      '<a href="/contact#contactForm" class="lsd-btn lsd-btn--ghost">Talk to Expert</a>' +
      "</div></div></section>"
    );
  }

  function render(c, idx) {
    return (
      renderHero(c) +
      renderBenefits(c) +
      renderLocations(c) +
      renderProperties() +
      renderNearby(c) +
      renderGallery(c, Math.max(idx, 0)) +
      renderFaq(c) +
      renderCta(c)
    );
  }

  function init() {
    const root = document.getElementById("ls-detail-root");
    if (!root) return;
    const slug = getSlug();
    const c = COLLECTIONS[slug];
    const idx = Object.keys(COLLECTIONS).indexOf(slug);
    document.body.style.setProperty("--ls-accent", c.accent);
    document.title = c.name + " | Lifestyle Collections | Inchbrick Realty";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", c.tagline);
    root.innerHTML = render(c, idx);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
