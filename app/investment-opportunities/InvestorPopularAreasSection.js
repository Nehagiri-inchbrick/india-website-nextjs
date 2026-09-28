'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { POPULAR_AREAS_META, POPULAR_INVESTMENT_AREAS } from './investor-landing-data';

const DEMAND_LABEL = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

export default function InvestorPopularAreasSection() {
  const [cityId, setCityId] = useState(POPULAR_INVESTMENT_AREAS[0]?.id ?? 'gurgaon');

  const activeCity = useMemo(
    () => POPULAR_INVESTMENT_AREAS.find((c) => c.id === cityId) ?? POPULAR_INVESTMENT_AREAS[0],
    [cityId]
  );

  return (
    <section
      className="inv-pop-areas inv-creative inv-creative--mesh inv-land-block inv-reveal"
      id="popular-areas"
      aria-labelledby="inv-pop-areas-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Popular investment areas</p>
          <h2 id="inv-pop-areas-title">{POPULAR_AREAS_META.title}</h2>
          <p className="inv-pop-areas-lead">{POPULAR_AREAS_META.lead}</p>
        </header>

        <div className="inv-pop-areas-tabs" role="tablist" aria-label="Select city">
          {POPULAR_INVESTMENT_AREAS.map((city) => (
            <button
              key={city.id}
              type="button"
              role="tab"
              id={`inv-pop-tab-${city.id}`}
              aria-selected={city.id === cityId}
              aria-controls="inv-pop-areas-panel"
              className={`inv-pop-areas-tab${city.id === cityId ? ' is-active' : ''}`}
              onClick={() => setCityId(city.id)}
            >
              {city.name}
            </button>
          ))}
        </div>

        <div
          className="inv-pop-areas-panel"
          id="inv-pop-areas-panel"
          role="tabpanel"
          aria-labelledby={`inv-pop-tab-${activeCity.id}`}
        >
          <ul className="inv-pop-areas-grid">
            {activeCity.areas.map((area) => (
              <li key={area.id}>
                <article className="inv-pop-area-card">
                  <h3>{area.name}</h3>
                  <dl className="inv-pop-area-stats">
                    <div>
                      <dt>Price Growth</dt>
                      <dd>
                        <span className="inv-pop-area-up" aria-hidden="true">
                          ↑
                        </span>{' '}
                        {area.priceGrowthPct}%
                      </dd>
                    </div>
                    <div>
                      <dt>Demand</dt>
                      <dd>
                        <span className={`inv-pop-area-demand inv-pop-area-demand--${area.demand}`}>
                          {DEMAND_LABEL[area.demand]}
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt>Projects</dt>
                      <dd>{area.projects}</dd>
                    </div>
                    <div>
                      <dt>Avg. Price</dt>
                      <dd>{area.avgPriceSqft}/sq.ft.</dd>
                    </div>
                  </dl>
                  <Link href={area.href} className="inv-pop-area-cta">
                    Explore Area
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <p className="inv-pop-areas-source">
          <strong>Period:</strong> {POPULAR_AREAS_META.period} · <strong>Source:</strong> {POPULAR_AREAS_META.source}
        </p>
      </div>
    </section>
  );
}
