'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { INV_HERO_BUDGETS, INV_HERO_CITIES, INV_HERO_PROPERTY_TYPES, saveInvHeroPrefs } from './investor-hero-prefs';
import { INVESTOR_FEATURED_BANNER } from './investor-landing-data';
import { POPULAR_CITIES_GROWTH } from './city-growth-data';
import InvestorCityGrowthModal from './InvestorCityGrowthModal';
import InvestorPageNav from './InvestorPageNav';

const EMPTY_PREFS = {
  city: '',
  budget: '',
  propertyType: '',
  horizon: '',
};

function splitHeadline(headline, highlight) {
  if (!highlight || !headline.includes(highlight)) {
    return { before: headline, highlight: '', after: '' };
  }
  const index = headline.indexOf(highlight);
  return {
    before: headline.slice(0, index),
    highlight,
    after: headline.slice(index + highlight.length),
  };
}

function MiniSparkline({ values }) {
  const w = 42;
  const h = 16;
  const pad = 2;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const points = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * innerW;
      const y = pad + innerH - ((v - min) / range) * innerH;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg className="inv-hero-city-spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline points={points} fill="none" stroke="#f2d6a2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function InvestorHeroSection() {
  const [prefs, setPrefs] = useState(EMPTY_PREFS);
  const [selectedModalCity, setSelectedModalCity] = useState(null);

  const banner = INVESTOR_FEATURED_BANNER;

  const headlineParts = useMemo(
    () => splitHeadline(banner.headline, banner.headlineHighlight),
    [banner.headline, banner.headlineHighlight]
  );

  const update = useCallback((key, value) => {
    setPrefs((current) => ({ ...current, [key]: value }));
  }, []);

  const explore = useCallback(
    (e) => {
      e.preventDefault();
      saveInvHeroPrefs(prefs);
      setTimeout(() => {
        const el = document.getElementById('hero-search-results');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    },
    [prefs]
  );

  return (
    <section
      className="inv-hero-v3-fullscreen"
      aria-labelledby="inv-hero-banner-title"
    >
      {/* High-res background image */}
      <div
        className="inv-hero-v3-bg"
        style={{ backgroundImage: `url('${banner.image}')` }}
        aria-hidden="true"
      />

      {/* Multi-layered cinematic gradient overlays */}
      <div className="inv-hero-v3-overlay" aria-hidden="true" />
      <div className="inv-hero-v3-lighting-glow" aria-hidden="true" />

      {/* Main Container fitting 100vh */}
      <div className="inv-wrap inv-hero-v3-container">
        {/* Top Header & Headline */}
        <div className="inv-hero-v3-header">
          <div className="inv-hero-v3-eyebrow-pill">
            <span className="inv-hero-v3-pulse" aria-hidden="true" />
            <span className="inv-hero-v3-eyebrow-text">RERA VERIFIED • HIGH-YIELD INVESTMENT HUB</span>
          </div>

          <h1 id="inv-hero-banner-title" className="inv-hero-v3-title">
            {headlineParts.before}
            {headlineParts.highlight && (
              <span className="inv-hero-v3-gold-gradient">{headlineParts.highlight}</span>
            )}
            {headlineParts.after}
          </h1>

          <p className="inv-hero-v3-sub">
            High-yield corridors · Verified top developers · End-to-end investment management
          </p>
        </div>

        {/* Combined Action Row & Search Filter Bar */}
        <div className="inv-hero-v3-filter-actions-bar">
          <form className="inv-hero-v3-search-form" role="search" onSubmit={explore}>
            {/* City Field */}
            <div className="inv-hero-v3-field">
              <i className="fas fa-location-dot inv-hero-v3-icon" aria-hidden="true" />
              <div className="inv-hero-v3-field-content">
                <span className="inv-hero-v3-field-label">CITY</span>
                <select
                  value={prefs.city}
                  onChange={(e) => update('city', e.target.value)}
                  aria-label="Select City"
                >
                  {INV_HERO_CITIES.map((opt) => (
                    <option key={opt.value || 'any-city'} value={opt.value}>
                      {opt.value ? opt.label : 'All Cities'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <span className="inv-hero-v3-divider" aria-hidden="true" />

            {/* Budget Field */}
            <div className="inv-hero-v3-field">
              <i className="fas fa-wallet inv-hero-v3-icon" aria-hidden="true" />
              <div className="inv-hero-v3-field-content">
                <span className="inv-hero-v3-field-label">BUDGET</span>
                <select
                  value={prefs.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  aria-label="Select Budget"
                >
                  <option value="">Any Budget</option>
                  {INV_HERO_BUDGETS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <span className="inv-hero-v3-divider" aria-hidden="true" />

            {/* Property Type Field */}
            <div className="inv-hero-v3-field">
              <i className="fas fa-building inv-hero-v3-icon" aria-hidden="true" />
              <div className="inv-hero-v3-field-content">
                <span className="inv-hero-v3-field-label">PROPERTY TYPE</span>
                <select
                  value={prefs.propertyType}
                  onChange={(e) => update('propertyType', e.target.value)}
                  aria-label="Select Property Type"
                >
                  {INV_HERO_PROPERTY_TYPES.map((t) => (
                    <option key={t.value || 'any-type'} value={t.value}>
                      {t.value ? t.label : 'All Types'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <button type="submit" className="inv-hero-v3-btn-search">
              <i className="fas fa-magnifying-glass" aria-hidden="true" />
              Find Deals
            </button>
          </form>

          {/* Quick CTA Buttons */}
          <div className="inv-hero-v3-cta-group">
            <Link href={banner.exploreHref} className="inv-hero-v3-btn-primary">
              Explore Projects <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
            <Link href={banner.roiHref} className="inv-hero-v3-btn-secondary">
              <i className="fas fa-calculator" aria-hidden="true" /> ROI Calculator
            </Link>
          </div>
        </div>

        {/* Popular City Growth Hub Banner Strip - 6 Cities without Scrolling */}
        <div className="inv-hero-v3-city-strip">
          <div className="inv-hero-v3-strip-header">
            <div className="inv-hero-v3-strip-title">
              <i className="fas fa-chart-line inv-hero-v3-trend-icon" aria-hidden="true" />
              <strong>POPULAR CITY GROWTH HUB</strong>
            </div>
            <span className="inv-hero-v3-strip-sub">
              Click any city card to view top project growth graphs 📈
            </span>
          </div>

          <div className="inv-hero-v3-city-grid">
            {POPULAR_CITIES_GROWTH.map((c) => (
              <button
                key={c.id}
                type="button"
                className="inv-hero-v3-city-card"
                onClick={() => setSelectedModalCity(c)}
                aria-label={`View ${c.name} project growth charts`}
              >
                <div className="inv-hero-v3-card-top">
                  <span className="inv-hero-v3-city-name">{c.name}</span>
                  <span className="inv-hero-v3-badge">{c.badge}</span>
                </div>

                <div className="inv-hero-v3-card-mid">
                  <div className="inv-hero-v3-growth">
                    <strong>+{c.yoyGrowthPct}%</strong>
                    <small>YoY</small>
                  </div>
                  <MiniSparkline values={c.sparkline} />
                </div>

                <div className="inv-hero-v3-card-bot">
                  <span className="inv-hero-v3-price">{c.avgPriceSqft}/sqft</span>
                  <span className="inv-hero-v3-action">
                    Graph <i className="fas fa-chart-line" aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Integrated Bottom of Banner Tabs */}
      <InvestorPageNav />

      {/* City Growth Graph Popup Modal */}
      {selectedModalCity && (
        <InvestorCityGrowthModal
          city={selectedModalCity}
          onClose={() => setSelectedModalCity(null)}
        />
      )}
    </section>
  );
}

