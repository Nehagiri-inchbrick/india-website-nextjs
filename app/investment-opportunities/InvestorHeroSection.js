'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { INV_HERO_BUDGETS, INV_HERO_CITIES, INV_HERO_PROPERTY_TYPES, saveInvHeroPrefs } from './investor-hero-prefs';
import { INVESTOR_FEATURED_BANNER } from './investor-landing-data';

const EMPTY_PREFS = {
  city: '',
  budget: '',
  propertyType: '',
  horizon: '',
};

const HERO_FEATURES = [
  { icon: 'fa-shield-halved', label: 'Trusted Developers' },
  { icon: 'fa-chart-column', label: 'High ROI Opportunities' },
  { icon: 'fa-file-lines', label: 'Transparent Process' },
  { icon: 'fa-headset', label: 'Dedicated NRI Support' },
];

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

export default function InvestorHeroSection() {
  const [prefs, setPrefs] = useState(EMPTY_PREFS);

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
        document.getElementById('hero-search-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    },
    [prefs]
  );

  return (
    <section className="inv-hero-v3-fullscreen" aria-labelledby="inv-hero-banner-title">
      <div
        className="inv-hero-v3-bg"
        style={{ backgroundImage: `url('${banner.image}')` }}
        aria-hidden="true"
      />
      <div className="inv-hero-v3-overlay" aria-hidden="true" />

      <div className="inv-wrap inv-hero-v3-container">
        <div className="inv-hero-v3-top">
          <div className="inv-hero-v3-eyebrow-pill">
            <i className="fas fa-shield-halved" aria-hidden="true" />
            <span>RERA VERIFIED • HIGH-YIELD INVESTMENT HUB</span>
          </div>

          <h1 id="inv-hero-banner-title" className="inv-hero-v3-title">
            {headlineParts.before}
            {headlineParts.highlight ? <em>{headlineParts.highlight}</em> : null}
            {headlineParts.after}
          </h1>

          <p className="inv-hero-v3-sub">
            High-yield corridors · Verified top developers · End-to-end investment management
          </p>

          <ul className="inv-hero-v3-features">
            {HERO_FEATURES.map((f) => (
              <li key={f.label}>
                <span className="inv-hero-v3-feature-ico" aria-hidden="true">
                  <i className={`fas ${f.icon}`} />
                </span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className="inv-hero-v3-search-form" role="search" onSubmit={explore}>
          <div className="inv-hero-v3-field">
            <i className="fas fa-location-dot" aria-hidden="true" />
            <div>
              <span className="inv-hero-v3-field-label">CITY</span>
              <select value={prefs.city} onChange={(e) => update('city', e.target.value)} aria-label="Select City">
                {INV_HERO_CITIES.map((opt) => (
                  <option key={opt.value || 'any-city'} value={opt.value}>
                    {opt.value ? opt.label : 'All Cities'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <span className="inv-hero-v3-divider" aria-hidden="true" />
          <div className="inv-hero-v3-field">
            <i className="fas fa-wallet" aria-hidden="true" />
            <div>
              <span className="inv-hero-v3-field-label">BUDGET</span>
              <select value={prefs.budget} onChange={(e) => update('budget', e.target.value)} aria-label="Select Budget">
                <option value="">Any Budget</option>
                {INV_HERO_BUDGETS.map((b) => (
                  <option key={b.id} value={b.id}>{b.label}</option>
                ))}
              </select>
            </div>
          </div>
          <span className="inv-hero-v3-divider" aria-hidden="true" />
          <div className="inv-hero-v3-field">
            <i className="fas fa-building" aria-hidden="true" />
            <div>
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
          <button type="submit" className="inv-hero-v3-btn-search">
            <i className="fas fa-magnifying-glass" aria-hidden="true" />
            Find Deals
          </button>
        </form>

        <div className="inv-hero-v3-cta-group">
          <Link href={banner.exploreHref} className="inv-hero-v3-btn-primary">
            Explore Projects <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
          <Link href={banner.roiHref} className="inv-hero-v3-btn-secondary">
            <i className="fas fa-calculator" aria-hidden="true" /> ROI Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}
