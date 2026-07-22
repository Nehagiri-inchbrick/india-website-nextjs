export const bodyClass = "nri-page";
export const html = `
  <section class="nri-hero" aria-label="NRI Corner">
    <div class="nri-hero-media" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
        alt=""
        class="nri-hero-img"
      />
      <div class="nri-hero-shade"></div>
      <div class="nri-hero-glow"></div>
    </div>
    <div class="nri-container nri-hero-inner">
      <p class="nri-hero-brand">Inchbrick Realty</p>
      <h1>NRI <em>Corner</em></h1>
      <p class="nri-hero-desc">
        Buy, own, and manage property in India from anywhere in the world —
        with dedicated NRI advisory, FEMA guidance, and remote purchase support.
      </p>
      <div class="nri-hero-actions">
        <a href="/contact" class="nri-btn nri-btn--primary">Talk to NRI Advisor</a>
        <a href="#nri-process" class="nri-btn nri-btn--ghost">See Buying Process</a>
      </div>
    </div>
  </section>

  <nav class="nri-jump" aria-label="Page sections">
    <div class="nri-container nri-jump-inner">
      <a href="#nri-why">Why invest in India</a>
      <a href="#nri-process">Buying process</a>
      <a href="#nri-docs">Documentation</a>
      <a href="#nri-tax">Taxation</a>
      <a href="#nri-currency">Currency guide</a>
      <a href="#nri-faq">FAQs</a>
    </div>
  </nav>

  <div class="nri-main" data-html-main>
    <section class="nri-section" id="nri-why">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-chart-line"></i> Opportunity</span>
          <h2>Why Invest in <em>India</em></h2>
          <p>One of the world’s fastest-growing real estate markets — driven by urbanisation, infrastructure, and strong rental demand.</p>
        </div>
        <div class="nri-why-grid">
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-arrow-trend-up"></i></span>
            <h3>Strong Appreciation</h3>
            <p>Tier-1 and emerging corridors in NCR, Pune, Hyderabad, and Bangalore have delivered consistent capital growth.</p>
          </article>
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-indian-rupee-sign"></i></span>
            <h3>Rental Yield</h3>
            <p>Quality projects in IT hubs offer 3–5% gross rental yields with professional tenant management options.</p>
          </article>
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-road"></i></span>
            <h3>Infrastructure Boom</h3>
            <p>Metro expansions, expressways, and airport upgrades unlock micro-markets with long-term upside.</p>
          </article>
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-shield-halved"></i></span>
            <h3>RERA Protection</h3>
            <p>Regulatory reforms ensure project transparency, escrow accounts, and buyer safeguards.</p>
          </article>
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-house-user"></i></span>
            <h3>Future Home Base</h3>
            <p>Secure a retirement home or family base while living abroad — ready when you return.</p>
          </article>
          <article class="nri-why-card nri-reveal">
            <span class="nri-why-ico"><i class="fas fa-coins"></i></span>
            <h3>Currency Advantage</h3>
            <p>Foreign earnings often translate into stronger purchasing power for premium Indian real estate.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="nri-section nri-section--process" id="nri-process">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-route"></i> Step by step</span>
          <h2>Buying <em>Process</em></h2>
          <p>A streamlined NRI purchase journey — most steps can be completed remotely with Inchbrick coordination.</p>
        </div>
        <ol class="nri-process">
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">01</span>
            <div>
              <strong>Discovery &amp; Shortlisting</strong>
              <p>Share budget, city preference, and purpose. We curate RERA-verified projects with virtual tours.</p>
            </div>
          </li>
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">02</span>
            <div>
              <strong>Virtual Site Visits</strong>
              <p>Live video walkthroughs, floor plans, and neighbourhood briefings — no need to fly in for screening.</p>
            </div>
          </li>
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">03</span>
            <div>
              <strong>Legal &amp; Title Check</strong>
              <p>Partners verify title, approvals, builder track record, and encumbrance before you commit.</p>
            </div>
          </li>
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">04</span>
            <div>
              <strong>Booking &amp; Payment</strong>
              <p>Pay via NRE/NRO through approved channels. We guide FEMA-compliant fund transfers.</p>
            </div>
          </li>
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">05</span>
            <div>
              <strong>POA &amp; Registration</strong>
              <p>Execute Power of Attorney if not visiting India. Registration handled with local support.</p>
            </div>
          </li>
          <li class="nri-step nri-reveal">
            <span class="nri-step-num">06</span>
            <div>
              <strong>Handover &amp; Management</strong>
              <p>Rental setup, society transfer, tax filing assistance, and property management on request.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="nri-section" id="nri-docs">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-folder-open"></i> Paperwork</span>
          <h2>Documentation <em>Checklist</em></h2>
          <p>Everything you need for a smooth remote purchase — identity, banking, booking, and registration.</p>
        </div>
        <div class="nri-split">
          <div class="nri-panel nri-reveal">
            <div class="nri-panel-head">
              <span class="nri-panel-ico"><i class="fas fa-passport"></i></span>
              <div>
                <h3>Buyer Documents</h3>
                <p>Identity, status &amp; banking</p>
              </div>
            </div>
            <div class="nri-doc-group">
              <h4>Identity &amp; NRI Status</h4>
              <ul class="nri-checklist">
                <li><i class="fas fa-check"></i> Valid passport (Indian or foreign)</li>
                <li><i class="fas fa-check"></i> OCI / PIO card (if applicable)</li>
                <li><i class="fas fa-check"></i> PAN card (mandatory)</li>
                <li><i class="fas fa-check"></i> Overseas address proof</li>
                <li><i class="fas fa-check"></i> Indian address proof (if available)</li>
              </ul>
            </div>
            <div class="nri-doc-group">
              <h4>Banking &amp; Payment</h4>
              <ul class="nri-checklist">
                <li><i class="fas fa-check"></i> NRE / NRO account statements</li>
                <li><i class="fas fa-check"></i> FEMA declaration for remittance</li>
                <li><i class="fas fa-check"></i> Wire transfer / SWIFT confirmation</li>
                <li><i class="fas fa-check"></i> Form 15CA / 15CB (large remittances)</li>
              </ul>
            </div>
          </div>
          <div class="nri-panel nri-panel--accent nri-reveal">
            <div class="nri-panel-head">
              <span class="nri-panel-ico"><i class="fas fa-file-contract"></i></span>
              <div>
                <h3>Transaction Documents</h3>
                <p>Booking to registration</p>
              </div>
            </div>
            <div class="nri-doc-group">
              <h4>At Booking</h4>
              <ul class="nri-checklist">
                <li><i class="fas fa-check"></i> Application / allotment letter</li>
                <li><i class="fas fa-check"></i> Builder-buyer agreement</li>
                <li><i class="fas fa-check"></i> Payment schedule &amp; receipts</li>
                <li><i class="fas fa-check"></i> RERA registration certificate</li>
              </ul>
            </div>
            <div class="nri-doc-group">
              <h4>At Registration</h4>
              <ul class="nri-checklist">
                <li><i class="fas fa-check"></i> Power of Attorney (notarised &amp; apostilled)</li>
                <li><i class="fas fa-check"></i> Sale deed / conveyance deed</li>
                <li><i class="fas fa-check"></i> Encumbrance certificate</li>
                <li><i class="fas fa-check"></i> Occupancy / completion certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="nri-section nri-section--alt" id="nri-tax">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-calculator"></i> Compliance</span>
          <h2>Taxation <em>Essentials</em></h2>
          <p>Key tax considerations for NRIs owning residential property in India. Consult a CA for personalised advice.</p>
        </div>
        <div class="nri-tax-grid">
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-file-invoice-dollar"></i> TDS on Purchase</h3>
            <p>When buying from a resident seller, TDS @ 1% applies if property value exceeds ₹50 lakh.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-percent"></i> TDS on Sale</h3>
            <p>Buyer deducts TDS @ 20% (+ surcharge) when purchasing from an NRI seller under Section 195.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-home"></i> Rental Income</h3>
            <p>Taxable in India with 30% standard deduction. DTAA may provide relief based on residence.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-chart-pie"></i> Capital Gains</h3>
            <p>Long-term gains (24+ months) taxed at 12.5% without indexation. Exemptions under 54/54F.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-landmark"></i> Wealth Tax</h3>
            <p>Wealth tax abolished. Declare property in Indian ITR if you qualify as RNOR or resident.</p>
          </article>
          <article class="nri-tax-card nri-reveal">
            <h3><i class="fas fa-globe-americas"></i> Global Reporting</h3>
            <p>Declare foreign assets as required (FATCA, CRA). Keep Indian tax records for 7 years.</p>
          </article>
        </div>
        <p class="nri-disclaimer">*Indicative information only. Tax laws change — consult a qualified CA familiar with NRI taxation and DTAA.</p>
      </div>
    </section>

    <section class="nri-section" id="nri-currency">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-money-bill-transfer"></i> FEMA &amp; remittance</span>
          <h2>Currency <em>Guide</em></h2>
          <p>How to legally remit funds for purchase and repatriate sale proceeds from India.</p>
        </div>
        <div class="nri-currency-layout">
          <div class="nri-currency-info">
            <article class="nri-currency-block nri-reveal">
              <span class="nri-currency-num">01</span>
              <div>
                <h3>Permitted Accounts</h3>
                <p>NRIs must pay from <strong>NRE</strong> or <strong>NRO</strong> accounts. Foreign funds convert via inward remittance first.</p>
              </div>
            </article>
            <article class="nri-currency-block nri-reveal">
              <span class="nri-currency-num">02</span>
              <div>
                <h3>Repatriation Rules</h3>
                <p>Sale proceeds up to the amount remitted from abroad can be repatriated freely. Extra amounts under the USD 1M scheme.</p>
              </div>
            </article>
            <article class="nri-currency-block nri-reveal">
              <span class="nri-currency-num">03</span>
              <div>
                <h3>Loan for NRIs</h3>
                <p>Indian banks offer NRI home loans. EMI can be paid from overseas salary credited to an NRE account.</p>
              </div>
            </article>
          </div>
          <div class="nri-currency-table-wrap nri-reveal">
            <div class="nri-table-head">
              <h3>Indicative Exchange Reference</h3>
              <span>Live bank rates may differ</span>
            </div>
            <table class="nri-currency-table">
              <thead>
                <tr><th>Currency</th><th>Code</th><th>Indicative Rate*</th></tr>
              </thead>
              <tbody>
                <tr><td>US Dollar</td><td>USD</td><td>₹ 83.50</td></tr>
                <tr><td>British Pound</td><td>GBP</td><td>₹ 105.20</td></tr>
                <tr><td>Euro</td><td>EUR</td><td>₹ 90.80</td></tr>
                <tr><td>UAE Dirham</td><td>AED</td><td>₹ 22.75</td></tr>
                <tr><td>Singapore Dollar</td><td>SGD</td><td>₹ 62.10</td></tr>
                <tr><td>Australian Dollar</td><td>AUD</td><td>₹ 54.30</td></tr>
              </tbody>
            </table>
            <p class="nri-table-note">*Rates are illustrative. Check live rates with your bank before transfer.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="nri-section nri-section--alt" id="nri-faq">
      <div class="nri-container">
        <div class="nri-sec-head nri-reveal">
          <span class="nri-sec-kicker"><i class="fas fa-circle-question"></i> Common questions</span>
          <h2>FAQs</h2>
          <p>Quick answers to the most asked NRI property questions.</p>
        </div>
        <div class="nri-faq-list" id="nriFaqList"></div>
        <div class="nri-faq-cta nri-reveal">
          <p>Still have questions?</p>
          <a href="/contact" class="nri-btn nri-btn--primary">Contact NRI Desk</a>
        </div>
      </div>
    </section>
  </div>
`;
