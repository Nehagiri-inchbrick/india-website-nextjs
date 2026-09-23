'use client';

import Link from 'next/link';
import { WHY_INVEST_INDIA } from './investor-landing-data';

const BENEFIT_TONES = ['teal', 'gold', 'coral', 'indigo'];

export default function InvestorLeadSection() {
  return (
    <section className="inv-land-lead inv-land-lead--light" id="invest-cta">
      <div className="inv-land-lead-deco" aria-hidden="true">
        <span className="inv-land-lead-ring" />
        <span className="inv-land-lead-dots" />
      </div>
      <div className="inv-wrap inv-land-lead-shell">
        <header className="inv-land-lead-head inv-reveal">
          <p className="inv-mock-eyebrow">Start your journey</p>
          <h2>
            Ready to find your <em>perfect property?</em>
          </h2>
          <p className="inv-land-lead-sub">
            Share a few details — our advisors will match you with launches, corridors, and ticket sizes
            that fit your goals.
          </p>
          <ul className="inv-land-lead-trust" aria-label="Service promises">
            <li>
              <i className="fas fa-shield-halved" aria-hidden="true" /> Verified listings
            </li>
            <li>
              <i className="fas fa-headset" aria-hidden="true" /> Free consultation
            </li>
            <li>
              <i className="fas fa-globe" aria-hidden="true" /> NRI-friendly process
            </li>
          </ul>
        </header>

        <div className="inv-land-lead-grid inv-land-lead-grid--light inv-reveal">
          <div className="inv-land-lead-story">
            <h3>Why invest in India?</h3>
            <div className="inv-land-lead-benefits">
              {WHY_INVEST_INDIA.map((item, i) => (
                <article
                  key={item.title}
                  className={`inv-land-lead-benefit inv-land-lead-benefit--${BENEFIT_TONES[i % BENEFIT_TONES.length]}`}
                >
                  <span className="inv-land-lead-benefit-ico">
                    <i className={`fas ${item.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link href="/market-insights" className="inv-land-lead-link">
              Explore market insights
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>

          <div className="inv-land-form-card inv-land-form-card--lift">
            <span className="inv-land-form-badge">
              <i className="fas fa-paper-plane" aria-hidden="true" />
              Quick enquiry
            </span>
            <form
              className="inv-land-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = '/contact#contactForm';
              }}
            >
              <label>
                Full name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email address
                <input type="email" name="email" placeholder="you@email.com" required />
              </label>
              <div className="inv-land-form-row">
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="+91 …" />
                </label>
                <label>
                  Interested in
                  <select name="interest" defaultValue="investment">
                    <option value="investment">Residential investment</option>
                    <option value="nri">NRI purchase</option>
                    <option value="rental">Rental yield</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="inv-btn inv-btn-gold inv-land-submit">
                Submit request
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
              <p className="inv-land-form-note">We typically respond within one business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
