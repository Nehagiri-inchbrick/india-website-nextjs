export const bodyClass = "contact-page";
export const html = `
  <div class="bg-world-map">
    <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" class="bg-world-map-svg" aria-hidden="true">
      <defs>
        <linearGradient id="mapBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="50%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <filter id="continentShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.06"/>
        </filter>
      </defs>
      <rect width="1000" height="500" fill="url(#mapBgGrad)" rx="16"/>
      <g class="map-continents" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" filter="url(#continentShadow)">
        <path d="M 80,70 Q 150,50 240,60 T 310,90 Q 340,120 320,150 T 260,190 T 280,230 T 240,250 T 210,230 T 170,180 T 100,130 Z" />
        <path d="M 330,30 Q 380,20 410,35 T 400,75 T 340,65 Z" />
        <path d="M 250,260 Q 300,270 330,310 T 310,400 T 280,450 T 255,370 T 240,300 Z" />
        <path d="M 440,90 Q 500,80 540,100 T 520,160 T 460,160 T 440,120 Z" />
        <path d="M 465,120 Q 478,115 475,135 T 462,138 Z" fill="#ffffff" stroke="#ef4444" stroke-width="0.75" />
        <path d="M 450,180 Q 530,170 570,210 T 580,270 T 540,360 T 490,370 T 450,260 Z" />
        <path d="M 540,90 Q 650,70 820,90 T 880,140 T 840,230 T 780,270 T 700,240 T 630,200 T 560,150 Z" />
        <path d="M 685,210 L 735,210 L 745,240 L 722,278 L 690,245 Z" fill="#ffffff" stroke="#ef4444" stroke-width="1.5" />
        <path d="M 610,198 L 655,195 L 668,225 L 642,250 L 610,222 Z" fill="#ffffff" stroke="#ef4444" stroke-width="1.5" />
        <path d="M 790,340 Q 860,330 890,370 T 850,420 T 780,370 Z" />
      </g>
    </svg>
  </div>
  <div class="cx-page" data-html-main>
    <section class="cx-intro">
      <div class="cx-wrap cx-intro-grid">
        <div class="cx-intro-copy">
          <p class="cx-eyebrow">Contact Inchbrick</p>
          <h1>We&apos;re here to help you find the right property</h1>
          <p class="cx-intro-text">Questions about listings, loans, site visits, or NRI purchases — message us or reach out directly. Advisors are available in India and Dubai.</p>
        </div>
        <div class="cx-quick" aria-label="Quick contact">
          <a class="cx-quick-item" href="tel:+919876543210">
            <i class="fas fa-phone" aria-hidden="true"></i>
            <span>Call</span>
            <strong>+91 98765 43210</strong>
          </a>
          <a class="cx-quick-item" href="mailto:support@inchbrickrealty.com">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <span>Email</span>
            <strong>support@inchbrickrealty.com</strong>
          </a>
          <a class="cx-quick-item cx-quick-item--wa" href="https://wa.me/919876543210" target="_blank" rel="noopener">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
            <span>WhatsApp</span>
            <strong>Start a chat</strong>
          </a>
          <a class="cx-quick-item" href="#our-offices">
            <i class="fas fa-building" aria-hidden="true"></i>
            <span>Offices</span>
            <strong>India &amp; Dubai</strong>
          </a>
        </div>
      </div>
    </section>

    <section class="cx-workspace">
      <div class="cx-wrap cx-workspace-inner">
        <div class="cx-visual">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=900&amp;q=85" alt="" loading="lazy" />
          <div class="cx-visual-caption">
            <p>Verified projects · Expert guidance · End-to-end support</p>
          </div>
        </div>
        <div class="cx-workspace-main">
          <form class="cx-form" id="contactForm" novalidate>
            <h2>Send us a message</h2>
            <p class="cx-form-lead">Fill in your details — we&apos;ll respond as soon as possible.</p>
            <div class="cx-form-row">
              <div class="cx-field">
                <label for="cName">Your name</label>
                <input type="text" id="cName" required placeholder="Full name" autocomplete="name">
              </div>
              <div class="cx-field">
                <label for="cPhone">Phone</label>
                <input type="tel" id="cPhone" required placeholder="+91 98765 43210" autocomplete="tel">
              </div>
            </div>
            <div class="cx-field">
              <label for="cInterest">I&apos;m interested in</label>
              <div class="cx-select-wrap">
                <select id="cInterest" required>
                  <option value="">Choose one</option>
                  <option>Buy a home</option>
                  <option>Invest</option>
                  <option>Home loan</option>
                  <option>Site visit</option>
                </select>
              </div>
            </div>
            <div class="cx-field">
              <label for="cMessage">Message <span class="cx-optional">(optional)</span></label>
              <textarea id="cMessage" rows="4" placeholder="City, budget, project name…"></textarea>
            </div>
            <button type="submit" class="btn-send cx-submit">
              <i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message
            </button>
          </form>
          <aside class="cx-rail" aria-label="Office hours">
            <div class="cx-rail-block">
              <h3>India desk</h3>
              <p>Mon–Sat · 9 AM – 8 PM IST</p>
            </div>
            <div class="cx-rail-block">
              <h3>Dubai desk</h3>
              <p>Sun–Thu · 10 AM – 7 PM GST</p>
            </div>
            <a class="cx-rail-link" href="#our-offices">Visit our offices <i class="fas fa-arrow-down" aria-hidden="true"></i></a>
          </aside>
        </div>
      </div>
    </section>

    <section class="cx-offices-band" id="our-offices" aria-labelledby="cx-offices-title">
      <div class="cx-wrap">
        <header class="cx-offices-header">
          <h2 id="cx-offices-title">Our Offices</h2>
          <p>One map — switch between India and Dubai. More locations opening soon.</p>
        </header>

        <div class="cx-offices-map-block">
          <div class="cx-office-tabs" role="tablist" aria-label="Office locations">
            <button type="button" class="cx-office-tab is-active" role="tab" id="cx-tab-india" aria-selected="true" aria-controls="cx-office-panel-india" data-office-tab="india">
              <span class="cx-office-tab-flag" aria-hidden="true">🇮🇳</span>
              <span class="cx-office-tab-label"><strong>India</strong> New Delhi</span>
            </button>
            <button type="button" class="cx-office-tab" role="tab" id="cx-tab-dubai" aria-selected="false" aria-controls="cx-office-panel-dubai" data-office-tab="dubai">
              <span class="cx-office-tab-flag" aria-hidden="true">🇦🇪</span>
              <span class="cx-office-tab-label"><strong>Dubai</strong> Business Bay</span>
            </button>
          </div>

          <div class="cx-offices-map-layout">
            <div class="cx-office-panels">
              <article class="cx-office-panel is-active" id="cx-office-panel-india" role="tabpanel" aria-labelledby="cx-tab-india" data-office-panel="india">
                <header class="cx-office-head">
                  <span class="cx-office-loc">🇮🇳 India Office</span>
                  <h3>New Delhi</h3>
                </header>
                <dl class="cx-office-dl">
                  <div><dt>Address</dt><dd>Dwarka Sector 12, New Delhi</dd></div>
                  <div><dt>Phone</dt><dd><a href="tel:+919876543210">+91 98765 43210</a></dd></div>
                  <div><dt>Email</dt><dd><a href="mailto:support@inchbrickrealty.com">support@inchbrickrealty.com</a></dd></div>
                  <div><dt>Hours</dt><dd>Mon–Sat · 9:00 AM – 8:00 PM IST</dd></div>
                </dl>
                <a class="cx-office-btn" data-directions="india" href="https://www.google.com/maps/dir/?api=1&amp;destination=Dwarka+Sector+12,+New+Delhi,+India" target="_blank" rel="noopener noreferrer">Get Directions</a>
              </article>

              <article class="cx-office-panel" id="cx-office-panel-dubai" role="tabpanel" aria-labelledby="cx-tab-dubai" data-office-panel="dubai">
                <header class="cx-office-head">
                  <span class="cx-office-loc">🇦🇪 Dubai Office</span>
                  <h3>Business Bay</h3>
                </header>
                <dl class="cx-office-dl">
                  <div><dt>Address</dt><dd>Churchill Towers, Business Bay, Dubai</dd></div>
                  <div><dt>Phone</dt><dd><a href="tel:+971501234567">+971 50 123 4567</a></dd></div>
                  <div><dt>Email</dt><dd><a href="mailto:nri@inchbrickrealty.com">nri@inchbrickrealty.com</a></dd></div>
                  <div><dt>Hours</dt><dd>Sun–Thu · 10:00 AM – 7:00 PM GST</dd></div>
                </dl>
                <a class="cx-office-btn" data-directions="dubai" href="https://www.google.com/maps/dir/?api=1&amp;destination=Churchill+Towers,+Business+Bay,+Dubai" target="_blank" rel="noopener noreferrer">Get Directions</a>
              </article>
            </div>

            <figure class="cx-map-single">
              <figcaption id="cxMapCaption">India — Dwarka Sector 12, New Delhi</figcaption>
              <div class="cx-map-embed cx-map-embed--hero">
                <iframe
                  id="cxOfficeMap"
                  title="Inchbrick office location map"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Dwarka+Sector+12,+New+Delhi,+India&amp;hl=en&amp;z=14&amp;output=embed"
                ></iframe>
              </div>
            </figure>
          </div>
        </div>

        <div class="cx-upcoming" aria-labelledby="cx-upcoming-title">
          <div class="cx-upcoming-head">
            <h3 id="cx-upcoming-title">Upcoming offices</h3>
            <p>We&apos;re opening desks closer to NRIs worldwide — tell us your city in the contact form.</p>
          </div>
          <ul class="cx-upcoming-list">
            <li class="cx-upcoming-item">
              <span class="cx-upcoming-flag" aria-hidden="true">🇬🇧</span>
              <span class="cx-upcoming-city">London</span>
              <span class="cx-upcoming-badge">Coming soon</span>
            </li>
            <li class="cx-upcoming-item">
              <span class="cx-upcoming-flag" aria-hidden="true">🇸🇬</span>
              <span class="cx-upcoming-city">Singapore</span>
              <span class="cx-upcoming-badge">Coming soon</span>
            </li>
            <li class="cx-upcoming-item">
              <span class="cx-upcoming-flag" aria-hidden="true">🇺🇸</span>
              <span class="cx-upcoming-city">New Jersey</span>
              <span class="cx-upcoming-badge">Coming soon</span>
            </li>
            <li class="cx-upcoming-item">
              <span class="cx-upcoming-flag" aria-hidden="true">🇨🇦</span>
              <span class="cx-upcoming-city">Toronto</span>
              <span class="cx-upcoming-badge">Coming soon</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
`;
