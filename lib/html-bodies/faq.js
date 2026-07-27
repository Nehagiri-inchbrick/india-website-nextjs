export const bodyClass = "faq-page";
export const html = `
  <section class="fq-hero" aria-label="Frequently asked questions">
    <div class="fq-container">
      <a href="/" class="fq-back"><i class="fas fa-arrow-left"></i> Back to Home</a>
      <div class="fq-hero-row">
        <div class="fq-hero-copy">
          <span class="fq-kicker"><i class="fas fa-circle-question"></i> Help Centre</span>
          <h1>Frequently Asked <span>Questions</span></h1>
          <p>Clear answers on buying, loans, NRI support, documentation, and how Inchbrick Realty works.</p>
        </div>
        <div class="fq-hero-pills" aria-label="Topics">
          <span>Buying</span>
          <span>Home Loan</span>
          <span>NRI</span>
          <span>Legal</span>
        </div>
      </div>
    </div>
  </section>

  <main class="fq-main" data-html-main>
    <div class="fq-container">
      <div class="fq-layout">
        <nav class="fq-nav" aria-label="FAQ categories">
          <a href="#buying">Buying a home</a>
          <a href="#loan">Home loan</a>
          <a href="#nri">NRI buyers</a>
          <a href="#process">Our process</a>
          <a href="#legal">Legal &amp; RERA</a>
        </nav>

        <div class="fq-content">
          <section class="fq-group" id="buying">
            <h2>Buying a home</h2>
            <div class="fq-list">
              <details class="fq-item" open>
                <summary>How do I start searching for a property with Inchbrick?</summary>
                <p>Share your city, budget, BHK preference, and timeline. We shortlist RERA-verified projects that match, then arrange site visits or virtual tours so you can compare with clarity.</p>
              </details>
              <details class="fq-item">
                <summary>Do you charge buyers any brokerage or hidden fees?</summary>
                <p>Our advisory is transparent. We explain any applicable charges upfront before you proceed — no surprise fees at the time of booking.</p>
              </details>
              <details class="fq-item">
                <summary>Can I compare multiple projects before deciding?</summary>
                <p>Yes. Use our Compare Properties tool or ask your advisor for a side-by-side shortlist covering price, amenities, possession, builder track record, and locality.</p>
              </details>
              <details class="fq-item">
                <summary>Which cities do you cover?</summary>
                <p>We support buyers across major metros and growth corridors including Mumbai, Pune, Bangalore, Hyderabad, Delhi NCR, Chennai, Kolkata, Ahmedabad, Goa, and select investment markets.</p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="loan">
            <h2>Home loan</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Can Inchbrick help with home loan assistance?</summary>
                <p>Yes. We guide you through eligibility, documentation, and bank options. You can also use our EMI Calculator to estimate monthly payments before applying.</p>
              </details>
              <details class="fq-item">
                <summary>What documents are typically needed for a home loan?</summary>
                <p>Usually PAN, Aadhaar, income proof (salary slips / IT returns), bank statements, and property papers. Exact requirements vary by lender and employment type.</p>
              </details>
              <details class="fq-item">
                <summary>How early should I get loan pre-approval?</summary>
                <p>Getting pre-approval before shortlisting helps you buy with confidence and negotiate better. We recommend starting this as soon as your budget range is clear.</p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="nri">
            <h2>NRI buyers</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Can NRIs buy residential property in India?</summary>
                <p>Yes. NRIs can purchase residential and commercial property in India subject to FEMA guidelines. Agricultural land has restrictions — we guide you through compliant options.</p>
              </details>
              <details class="fq-item">
                <summary>Do you offer virtual tours for overseas buyers?</summary>
                <p>Yes. We arrange live video walkthroughs, recorded tours, and advisor calls across time zones so you can evaluate projects without multiple India trips.</p>
              </details>
              <details class="fq-item">
                <summary>Can registration be completed with a Power of Attorney?</summary>
                <p>In many cases, yes — with a properly executed POA. Our team coordinates documentation and local representation so the process stays smooth.</p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="process">
            <h2>Our process</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>What does end-to-end support include?</summary>
                <p>From shortlisting and site visits to negotiation, loan coordination, documentation, and registration follow-up — we stay involved until you have clarity at every stage.</p>
              </details>
              <details class="fq-item">
                <summary>How soon can I book a site visit?</summary>
                <p>Most site visits can be scheduled within 24–48 hours in major cities, subject to project availability and your preferred slots.</p>
              </details>
              <details class="fq-item">
                <summary>How do I contact an advisor?</summary>
                <p>Call +91 98765 43210, WhatsApp the same number, email support@inchbrickrealty.com, or use the Contact Us form for a callback.</p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="legal">
            <h2>Legal &amp; RERA</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Are all listed projects RERA verified?</summary>
                <p>We prioritise RERA-registered projects and help you verify registration numbers on the respective state portals before you book.</p>
              </details>
              <details class="fq-item">
                <summary>Can you help with legal due diligence?</summary>
                <p>Yes. We assist with property document checks and connect you with legal experts when deeper verification of title, approvals, or agreement clauses is needed.</p>
              </details>
              <details class="fq-item">
                <summary>What should I verify before paying a token amount?</summary>
                <p>Confirm RERA status, builder track record, payment schedule, possession timeline, and that the agreement terms match what was marketed. Never rush a token without documentation clarity.</p>
              </details>
            </div>
          </section>

          <section class="fq-cta" aria-label="Still need help">
            <h2>Still have a question?</h2>
            <p>Talk to an Inchbrick advisor for personalised guidance on projects, loans, or NRI buying.</p>
            <div class="fq-cta-actions">
              <a href="/contact#contactForm" class="fq-btn fq-btn--primary">Contact Us</a>
              <a href="/listings" class="fq-btn fq-btn--ghost">Browse Listings</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
`;
