export const bodyClass = "about-page";
export const html = `
  <section class="ab-hero" aria-label="About Inchbrick Realty">
    <div class="ab-hero-media" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
        alt="">
    </div>
    <div class="ab-hero-veil" aria-hidden="true"></div>
    <div class="ab-hero-inner">
      <p class="ab-brand">Inchbrick Realty</p>
      <h1>Homes chosen with clarity.</h1>
      <p class="ab-hero-lead">India-focused advisory for buyers who want verified projects, honest guidance, and a calm path to keys.</p>
      <div class="ab-hero-actions">
        <a href="/contact#contactForm" class="ab-btn ab-btn--primary">Talk to an advisor</a>
        <a href="/projects" class="ab-btn ab-btn--ghost">Explore projects</a>
      </div>
    </div>
  </section>

  <div class="ab-main" data-html-main>
    <section class="ab-pulse" aria-label="Highlights">
      <div class="ab-pulse-item">
        <strong>10+</strong>
        <span>Years guiding buyers</span>
      </div>
      <div class="ab-pulse-item">
        <strong>50+</strong>
        <span>Cities across India</span>
      </div>
      <div class="ab-pulse-item">
        <strong>2,500+</strong>
        <span>Families helped home</span>
      </div>
    </section>

    <section class="ab-story" aria-labelledby="abStoryTitle">
      <div class="ab-story-copy">
        <p class="ab-label">Our story</p>
        <h2 id="abStoryTitle">Real estate, without the noise.</h2>
        <p>
          Inchbrick began with one idea: buying a home should feel clear. We shortlist RERA-verified projects,
          walk you through trade-offs, and stay with you from first visit to possession — across NCR, Mumbai,
          Pune, Bangalore, Hyderabad, and growing corridors beyond.
        </p>
      </div>
      <figure class="ab-story-visual">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=80"
          alt="Advisor discussing property options with a buyer">
      </figure>
    </section>

    <section class="ab-ways" aria-labelledby="abWaysTitle">
      <p class="ab-label ab-label--center">How we work</p>
      <h2 id="abWaysTitle" class="ab-ways-title">Three promises. Nothing more.</h2>
      <ol class="ab-ways-list">
        <li>
          <span class="ab-ways-num">01</span>
          <div>
            <h3>Verified first</h3>
            <p>RERA-checked projects, clear pricing, and comparisons you can trust.</p>
          </div>
        </li>
        <li>
          <span class="ab-ways-num">02</span>
          <div>
            <h3>Buyer before brand</h3>
            <p>Independent advice shaped around your budget, lifestyle, and timeline.</p>
          </div>
        </li>
        <li>
          <span class="ab-ways-num">03</span>
          <div>
            <h3>End-to-end calm</h3>
            <p>Site visits, documentation, loans, and NRI support — one steady partner.</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="ab-cta" aria-label="Get in touch">
      <h2>Ready for your next address?</h2>
      <p>Tell us what you are looking for. We will curate a shortlist worth your time.</p>
      <a href="/contact#contactForm" class="ab-btn ab-btn--primary">Get a callback</a>
    </section>
  </div>
`;
