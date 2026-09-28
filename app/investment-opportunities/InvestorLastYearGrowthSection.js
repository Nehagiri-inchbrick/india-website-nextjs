'use client';

import { useMemo, useState } from 'react';
import {
  LAST_YEAR_CITY_GROWTH,
  LAST_YEAR_GROWTH_META,
  LAST_YEAR_GROWTH_MODES,
} from './investor-landing-data';

function formatValue(mode, value) {
  return `+${value}%`;
}

export default function InvestorLastYearGrowthSection() {
  const [mode, setMode] = useState('price');

  const cities = useMemo(() => LAST_YEAR_CITY_GROWTH[mode] ?? LAST_YEAR_CITY_GROWTH.price, [mode]);
  const maxValue = useMemo(() => Math.max(...cities.map((c) => c.value), 1), [cities]);
  const modeHint = LAST_YEAR_GROWTH_META.modeHint[mode] ?? '';

  return (
    <section
      className="inv-yoy-growth inv-reveal"
      id="last-year-growth"
      aria-labelledby="inv-yoy-growth-title"
    >
      <div className="inv-yoy-growth-bg" aria-hidden="true" />
      <div className="inv-wrap inv-yoy-growth-inner">
        <header className="inv-yoy-growth-head">
          <p className="inv-yoy-growth-eyebrow">{LAST_YEAR_GROWTH_META.eyebrow}</p>
          <h2 id="inv-yoy-growth-title">What Changed in the Last 12 Months?</h2>
          <p className="inv-yoy-growth-period">
            <strong>Period:</strong> {LAST_YEAR_GROWTH_META.period}
          </p>
        </header>

        <div className="inv-yoy-growth-toggle" role="tablist" aria-label="Growth metric">
          {LAST_YEAR_GROWTH_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={mode === m.id}
              className={`inv-yoy-growth-mode${mode === m.id ? ' is-active' : ''}`}
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <p className="inv-yoy-growth-hint">{modeHint}</p>

        <ul className="inv-yoy-growth-grid">
          {cities.map((city, i) => {
            const barPct = (city.value / maxValue) * 100;
            return (
              <li key={city.id} style={{ '--inv-yoy-i': i }}>
                <article className="inv-yoy-growth-card">
                  <h3>{city.name}</h3>
                  <p className="inv-yoy-growth-value">{formatValue(mode, city.value)}</p>
                  <div className="inv-yoy-growth-bar" aria-hidden="true">
                    <span className="inv-yoy-growth-bar-fill" style={{ width: `${barPct}%` }} />
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="inv-yoy-growth-source">
          <strong>Source:</strong> {LAST_YEAR_GROWTH_META.source}
        </p>
      </div>
    </section>
  );
}
