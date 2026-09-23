export const bodyClass = 'faq-page nri-faq-page';
export const html = `
  <section class="fq-hero fq-hero--nri" aria-label="NRI frequently asked questions">
    <div class="fq-container">
      <a href="/nri-corner" class="fq-back"><i class="fas fa-arrow-left"></i> NRI Corner</a>
      <div class="fq-hero-row">
        <div class="fq-hero-copy">
          <span class="fq-kicker"><i class="fas fa-globe"></i> NRI Help Centre</span>
          <h1>NRI Property <span>FAQ</span></h1>
          <p>
            Answers for overseas Indians on FEMA rules, remittances, documentation, POA, taxation,
            and buying residential property in India with Inchbrick Realty.
          </p>
        </div>
        <div class="fq-hero-pills" aria-label="Topics">
          <span>FEMA</span>
          <span>Remittance</span>
          <span>POA</span>
          <span>TDS</span>
        </div>
      </div>
    </div>
  </section>

  <main class="fq-main" data-html-main>
    <div class="fq-container">
      <div class="fq-layout">
        <nav class="fq-nav" aria-label="NRI FAQ categories">
          <a href="#eligibility">Eligibility</a>
          <a href="#buying">Buying process</a>
          <a href="#docs">Documentation</a>
          <a href="#payment">Payment &amp; forex</a>
          <a href="#tax">Tax &amp; TDS</a>
          <a href="#poa">Power of Attorney</a>
          <a href="#manage">Ownership &amp; rent</a>
          <a href="#loan">NRI home loan</a>
        </nav>

        <div class="fq-content">
          <section class="fq-group" id="eligibility">
            <h2>Eligibility &amp; FEMA</h2>
            <div class="fq-list">
              <details class="fq-item" open>
                <summary>Who is considered an NRI for property purchase in India?</summary>
                <p>
                  You are generally treated as an NRI if you stay outside India for more than 182 days in a financial year,
                  or if you qualify as an OCI/PIO under applicable rules. Your residential status drives which accounts you
                  use and how funds must be routed.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can NRIs buy residential property in India?</summary>
                <p>
                  Yes. NRIs and OCIs can purchase residential and commercial property in India under FEMA guidelines.
                  Agricultural land, farmhouses, and plantation property are restricted — we only shortlist compliant assets.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can an NRI buy property jointly with a resident Indian?</summary>
                <p>
                  Yes, joint ownership with a resident relative or spouse is common. All co-owners must complete KYC,
                  and payment must come from permitted NRI accounts for your share of the consideration.
                </p>
              </details>
              <details class="fq-item">
                <summary>Are there limits on how many properties an NRI can own?</summary>
                <p>
                  FEMA does not cap the number of residential or commercial units you may hold. Practical limits are
                  budget, loan eligibility, and repatriation planning — not a fixed property count.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="buying">
            <h2>Buying process</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Can I buy property in India without travelling?</summary>
                <p>
                  Yes. We arrange live video walkthroughs, builder calls across time zones, digital shortlists, and
                  POA-based registration where permitted. Many NRIs complete the entire journey with one short India visit
                  — or none, depending on state rules and lender requirements.
                </p>
              </details>
              <details class="fq-item">
                <summary>What is the typical timeline from shortlist to registration?</summary>
                <p>
                  For ready or near-ready inventory, 4–8 weeks is common once KYC and funds are in place. Under-construction
                  bookings may be faster for token payment, with registration tied to builder milestones and state RERA norms.
                </p>
              </details>
              <details class="fq-item">
                <summary>Do you verify RERA and builder track record for NRI buyers?</summary>
                <p>
                  Yes. Every project we recommend is checked for RERA registration (where applicable), payment plans,
                  possession history, and agreement clauses before you pay a token.
                </p>
              </details>
              <details class="fq-item">
                <summary>Which cities do NRIs usually invest in through Inchbrick?</summary>
                <p>
                  Mumbai, Pune, Bangalore, Hyderabad, Delhi NCR, Chennai, and select tier-2 corridors with IT and
                  infrastructure growth. We match city and micro-market to your goal — self-use, rental yield, or long-term appreciation.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="docs">
            <h2>Documentation &amp; KYC</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>What documents do NRIs need to buy property?</summary>
                <p>
                  Typically passport, PAN, overseas address proof, Indian visa/OCI card (if applicable), bank statements,
                  and NRE/NRO account details. Builders and registrars may ask for notarised or apostilled copies — we
                  share a checklist for your country and project.
                </p>
              </details>
              <details class="fq-item">
                <summary>Is PAN mandatory for NRIs buying property in India?</summary>
                <p>
                  Yes. PAN is required for property registration, TDS compliance, and most home loan applications. If you
                  do not have one, apply early — processing can take a few weeks from overseas.
                </p>
              </details>
              <details class="fq-item">
                <summary>Do overseas documents need to be notarised or apostilled?</summary>
                <p>
                  Often yes, for POA and identity proofs used in India. Requirements vary by state and registrar. Our team
                  coordinates with your local notary and Indian consulate steps so paperwork is accepted the first time.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="payment">
            <h2>Payment &amp; forex</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Which bank account should I use to pay for property?</summary>
                <p>
                  Purchase consideration should be paid from your NRE or NRO account through normal banking channels.
                  Cash payments above prescribed limits are not permitted — always use traceable wire transfers and cheques.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can I remit money from abroad directly to the builder?</summary>
                <p>
                  Funds are usually credited to your NRE/NRO account first, then paid to the builder or escrow as per
                  RERA and sale agreement terms. Your bank will document the outward remittance for compliance.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can sale proceeds be repatriated outside India?</summary>
                <p>
                  Repatriation of sale proceeds is allowed within FEMA limits, generally up to the amount brought in through
                  banking channels for that property (subject to taxes and RBI rules). Retain all FEMA and tax certificates —
                  we connect you with CA support for repatriation filings.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="tax">
            <h2>Tax &amp; TDS</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Is TDS applicable when an NRI buys property?</summary>
                <p>
                  When you buy from a resident seller, the buyer must deduct TDS on the sale value if it exceeds the
                  threshold under Section 194IA. When you sell as an NRI, buyers deduct TDS at higher rates unless a
                  lower withholding certificate is obtained — seek CA advice before listing.
                </p>
              </details>
              <details class="fq-item">
                <summary>Do NRIs pay income tax on rental income in India?</summary>
                <p>
                  Yes. Rental income is taxable in India. You may claim standard deductions and home loan interest subject
                  to IT rules. DTAA with your country of residence may reduce double taxation — consult a tax advisor.
                </p>
              </details>
              <details class="fq-item">
                <summary>What happens to capital gains when an NRI sells property?</summary>
                <p>
                  Long-term and short-term gains are taxed per holding period and asset type. Exemptions may be available
                  under sections such as 54/54F when reinvesting in specified property — planning before sale is critical.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="poa">
            <h2>Power of Attorney</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Can registration be done through a Power of Attorney?</summary>
                <p>
                  In many states, a properly executed POA allows a trusted representative to sign and register on your behalf.
                  The POA must be specific, notarised, and often stamped and adjudicated in India — we work with legal partners
                  on draft and execution.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can a POA holder take a home loan for the NRI?</summary>
                <p>
                  Loan sanction is in your name as the NRI borrower; the POA holder may represent you for documentation and
                  registration per bank policy. Lenders require your KYC, income proof, and NRE/NRO statements.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="manage">
            <h2>Ownership &amp; rent</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Can Inchbrick help manage my property after purchase?</summary>
                <p>
                  Yes. We can connect you with rental management, tenant screening, maintenance, and periodic inspection
                  partners in major cities so your asset stays occupied and compliant while you are overseas.
                </p>
              </details>
              <details class="fq-item">
                <summary>How are rent and maintenance payments handled for NRIs?</summary>
                <p>
                  Rent is typically credited to your NRO account. Society maintenance and property tax can be paid via
                  standing instructions. We help set up simple reporting so you track cash flow from abroad.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-group" id="loan">
            <h2>NRI home loan</h2>
            <div class="fq-list">
              <details class="fq-item">
                <summary>Are home loans available for NRIs?</summary>
                <p>
                  Yes. Leading Indian banks and HFCs offer NRI home loans for purchase and construction. Eligibility depends
                  on income country, employment type, age, and property legal status. Inchbrick coordinates with lender partners
                  after your shortlist is fixed.
                </p>
              </details>
              <details class="fq-item">
                <summary>What income proof do NRI lenders usually ask for?</summary>
                <p>
                  Salary slips, employment contract, overseas bank statements, IT returns or W-2/1099 equivalents, and
                  credit bureau reports where available. Self-employed NRIs submit business financials and bank history.
                </p>
              </details>
              <details class="fq-item">
                <summary>Can loan EMI be paid from an NRE account?</summary>
                <p>
                  EMIs are commonly debited from NRE or NRO accounts per lender policy. Confirm with your bank whether
                  the specific loan account accepts NRE debits for the property type you are buying.
                </p>
              </details>
            </div>
          </section>

          <section class="fq-cta" aria-label="Talk to NRI advisor">
            <h2>Need personalised NRI guidance?</h2>
            <p>
              Share your country, budget, and timeline — an Inchbrick NRI advisor will respond with a compliant shortlist
              and documentation plan.
            </p>
            <div class="fq-cta-actions">
              <a href="/contact#contactForm" class="fq-btn fq-btn--primary">Talk to NRI Advisor</a>
              <a href="/nri-corner" class="fq-btn fq-btn--ghost">Explore NRI Corner</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
`;
