export const bodyClass = "contact-page";
export const html = `
  <div class="cx-page" data-html-main>
    <div class="cx-deco" aria-hidden="true">
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-10 140 C40 120, 80 90, 120 100 C170 112, 200 70, 250 50 C280 38, 300 20, 320 10" stroke="#c29a63" stroke-width="1.2" opacity="0.55"/>
        <path d="M-10 155 C50 135, 90 105, 135 115 C185 126, 215 85, 270 65 C300 52, 320 35, 340 25" stroke="#c29a63" stroke-width="1" opacity="0.35"/>
        <path d="M0 125 C55 108, 95 78, 140 88 C190 100, 220 58, 280 40" stroke="#c29a63" stroke-width="0.9" opacity="0.25"/>
      </svg>
    </div>

    <div class="cx-shell">
      <div class="cx-main">
        <header class="cx-head">
          <p class="cx-kicker">Let's connect <span></span></p>
          <h1>Contact Us</h1>
          <p class="cx-lead">Have a question about a property, home loan, or site visit? Send us a message and we'll get back to you soon.</p>
        </header>

        <div class="cx-content">
          <form class="cx-form" id="contactForm" novalidate>
            <div class="cx-form-row">
              <div class="cx-field">
                <label for="cName"><i class="fas fa-user" aria-hidden="true"></i> Your Name</label>
                <input type="text" id="cName" required placeholder="Enter your name">
              </div>
              <div class="cx-field">
                <label for="cPhone"><i class="fas fa-phone" aria-hidden="true"></i> Phone Number</label>
                <input type="tel" id="cPhone" required placeholder="+91 98765 43210">
              </div>
            </div>

            <div class="cx-field">
              <label for="cInterest"><i class="fas fa-building" aria-hidden="true"></i> Looking For</label>
              <div class="cx-select-wrap">
                <select id="cInterest" required>
                  <option value="">Choose an option</option>
                  <option>Buy a home</option>
                  <option>Invest</option>
                  <option>Home loan</option>
                  <option>Site visit</option>
                </select>
              </div>
            </div>

            <div class="cx-field">
              <label for="cMessage"><i class="fas fa-pen" aria-hidden="true"></i> Message <span class="cx-optional">(optional)</span></label>
              <textarea id="cMessage" placeholder="Tell us how we can help..."></textarea>
            </div>

            <button type="submit" class="btn-send cx-submit">
              <i class="fas fa-paper-plane" aria-hidden="true"></i> Send Message
            </button>
          </form>

          <div class="cx-divider" aria-hidden="true"><span></span></div>

          <aside class="cx-aside">
            <h2>Get in touch</h2>

            <a class="cx-item" href="tel:+919876543210">
              <span class="cx-ico"><i class="fas fa-phone"></i></span>
              <span class="cx-item-text">
                <strong>Call Us</strong>
                <span>+91 98765 43210</span>
                <em>Mon–Sat · 9 AM – 8 PM</em>
              </span>
            </a>

            <a class="cx-item" href="mailto:support@inchbrickrealty.com">
              <span class="cx-ico"><i class="fas fa-envelope"></i></span>
              <span class="cx-item-text">
                <strong>Email Us</strong>
                <span>support@inchbrickrealty.com</span>
              </span>
            </a>

            <a class="cx-item" href="https://wa.me/919876543210" target="_blank" rel="noopener">
              <span class="cx-ico"><i class="fab fa-whatsapp"></i></span>
              <span class="cx-item-text">
                <strong>WhatsApp</strong>
                <span>Chat with us</span>
              </span>
            </a>

            <div class="cx-item cx-item--static">
              <span class="cx-ico"><i class="fas fa-map-marker-alt"></i></span>
              <span class="cx-item-text">
                <strong>Our Office</strong>
                <span>Sector 62, Noida</span>
              </span>
            </div>

            <div class="cx-help">
              <i class="far fa-clock" aria-hidden="true"></i>
              <div>
                <strong>We're here to help!</strong>
                <p>Our team typically responds within a few minutes.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <aside class="cx-visual" aria-hidden="true">
        <div class="cx-visual-frame">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=85"
            alt="Modern residential building">
        </div>
      </aside>
    </div>
  </div>
`;
