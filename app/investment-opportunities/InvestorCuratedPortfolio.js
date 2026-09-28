'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CURATED_PORTFOLIO, PORTFOLIO_FILTERS } from './investor-landing-data';
import {
  INV_HERO_BUDGETS,
  INV_HERO_CITIES,
  INV_HERO_HORIZONS,
  INV_HERO_PREFS_EVENT,
  INV_HERO_PREF_KEY,
  INV_HERO_PROPERTY_TYPES,
  cityMatchesPortfolio,
  readInvHeroPrefs,
} from './investor-hero-prefs';

function labelFor(options, value, fallback) {
  if (!value) return fallback;
  return options.find((o) => o.value === value || o.id === value)?.label ?? value;
}

export default function InvestorCuratedPortfolio() {
  const [filter, setFilter] = useState(null);
  const [heroPrefs, setHeroPrefs] = useState(null);

  const applyHeroPrefs = useCallback((prefs) => {
    if (!prefs) {
      setHeroPrefs(null);
      setFilter(null);
      return;
    }
    setHeroPrefs(prefs);
    setFilter(prefs.propertyType || null);
  }, []);

  useEffect(() => {
    applyHeroPrefs(readInvHeroPrefs());
    const onPrefs = (event) => applyHeroPrefs(event.detail);
    window.addEventListener(INV_HERO_PREFS_EVENT, onPrefs);
    return () => window.removeEventListener(INV_HERO_PREFS_EVENT, onPrefs);
  }, [applyHeroPrefs]);

  const items = useMemo(() => {
    let list = CURATED_PORTFOLIO;
    if (filter) {
      list = list.filter((p) => p.category === filter);
    }
    if (heroPrefs?.city) {
      list = list.filter((p) => cityMatchesPortfolio(heroPrefs.city, p.city));
    }
    return list;
  }, [filter, heroPrefs]);

  const prefsSummary = useMemo(() => {
    if (!heroPrefs) return null;
    const parts = [];
    if (heroPrefs.city) parts.push(labelFor(INV_HERO_CITIES, heroPrefs.city, heroPrefs.city));
    if (heroPrefs.budget) parts.push(labelFor(INV_HERO_BUDGETS, heroPrefs.budget, heroPrefs.budget));
    if (heroPrefs.propertyType) {
      parts.push(labelFor(INV_HERO_PROPERTY_TYPES, heroPrefs.propertyType, heroPrefs.propertyType));
    }
    if (heroPrefs.horizon) {
      parts.push(labelFor(INV_HERO_HORIZONS, heroPrefs.horizon, `${heroPrefs.horizon} yr`));
    }
    return parts.length ? parts.join(' · ') : null;
  }, [heroPrefs]);

  const clearHeroPrefs = () => {
    applyHeroPrefs(null);
    try {
      sessionStorage.removeItem(INV_HERO_PREF_KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="inv-curated inv-land-block inv-reveal" id="opportunities" aria-labelledby="inv-curated-title">
      <div className="inv-wrap">
        <header className="inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Investment Opportunities</p>
          <h2 id="inv-curated-title">Curated Investment Opportunities</h2>
          <p className="inv-curated-lead">
            Six premium picks — vetted for growth corridors, developer credibility, and investor-ready documentation.
          </p>
        </header>

        {prefsSummary ? (
          <p className="inv-curated-prefs-banner inv-reveal">
            <i className="fas fa-sliders" aria-hidden="true" />
            Showing matches for <strong>{prefsSummary}</strong>
            <button type="button" className="inv-curated-prefs-clear" onClick={clearHeroPrefs}>
              Clear
            </button>
          </p>
        ) : null}

        <div className="inv-curated-filters" role="tablist" aria-label="Portfolio filters">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={`inv-curated-filter${filter === f.id ? ' is-active' : ''}`}
              onClick={() => setFilter((current) => (current === f.id ? null : f.id))}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="inv-curated-grid">
          {items.map((item) => (
            <li key={item.id}>
              <article className="inv-curated-card">
                <Link href={item.href} className="inv-curated-card-media">
                  <img src={item.img} alt="" loading="lazy" />
                </Link>
                <div className="inv-curated-card-body">
                  <p className="inv-curated-card-meta">
                    {item.city} <span aria-hidden="true">|</span> {item.segment}
                  </p>
                  <h3>{item.name}</h3>
                  <p className="inv-curated-card-price">{item.price}</p>
                  <p className="inv-curated-card-bhk">{item.bhk}</p>
                  <ul className="inv-curated-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <Link href={item.href} className="inv-curated-card-cta">
                    View Opportunity
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {items.length === 0 ? (
          <p className="inv-curated-empty">No projects match those filters right now. Try another city or category.</p>
        ) : null}
      </div>
    </section>
  );
}
