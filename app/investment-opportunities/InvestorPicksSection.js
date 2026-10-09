'use client';

import Link from 'next/link';
import { INVESTORS_PICK_META, INVESTORS_PICKS } from './investor-landing-data';

export default function InvestorPicksSection() {
  return (
    <section
      className="inv-picks inv-picks--posthero inv-reveal"
      id="investors-pick"
      aria-labelledby="inv-picks-title"
    >
      <div className="inv-wrap">
        <header className="inv-picks-head">
          <div className="inv-picks-head-copy">
            <p className="inv-mock-eyebrow">{INVESTORS_PICK_META.eyebrow}</p>
            <h2 id="inv-picks-title">{INVESTORS_PICK_META.title}</h2>
            <p>{INVESTORS_PICK_META.lead}</p>
          </div>
          <Link href="/contact" className="inv-picks-desk-link">
            Talk to the desk <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </header>

        <ul className="inv-picks-grid">
          {INVESTORS_PICKS.map((pick, index) => (
            <li key={pick.id} style={{ '--pick-i': index }}>
              <article className={`inv-picks-tile${index === 0 ? ' inv-picks-tile--lead' : ''}`}>
                <Link href={pick.href} className="inv-picks-tile-media">
                  <img src={pick.img} alt="" loading="lazy" />
                  <span className="inv-picks-rank">{pick.rank}</span>
                  <span className="inv-picks-tag">{pick.tag}</span>
                </Link>
                <div className="inv-picks-tile-body">
                  <p className="inv-picks-city">{pick.city}</p>
                  <h3>
                    <Link href={pick.href}>{pick.name}</Link>
                  </h3>
                  <p className="inv-picks-why-sm">{pick.why}</p>
                  <div className="inv-picks-tile-stats">
                    <span>
                      <strong>{pick.price}</strong>
                      entry
                    </span>
                    <span>
                      <strong>{pick.growth}</strong>
                      growth
                    </span>
                    <span>
                      <strong>{pick.yield}</strong>
                      yield
                    </span>
                  </div>
                  <Link href={pick.href} className="inv-picks-tile-cta">
                    Explore pick <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
