'use client';

import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import { INV_HERO_BUDGETS, INV_HERO_CITIES, saveInvHeroPrefs } from './investor-hero-prefs';
import { INVESTOR_FEATURED_BANNER } from './investor-landing-data';

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
      document.getElementById('build-investment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [prefs]
  );

  const ringStyle = {
    '--inv-appreciation-deg': `${Math.min(340, banner.priceAppreciationSinceLaunchPct * 3.6)}deg`,
  };

  return (
    <section
      className="inv-land-hero inv-land-hero--banner inv-land-hero--invest-project"
      aria-labelledby="inv-hero-banner-title"
    >
      <div
        className="inv-land-hero-bg"
        style={{ backgroundImage: `url('${banner.image}')` }}
        aria-hidden="true"
      />
      <div className="inv-land-hero-shade inv-land-hero-shade--banner inv-land-hero-shade--invest" aria-hidden="true" />
      <div className="inv-invest-proj-hero-fx" aria-hidden="true">
        <span className="inv-invest-proj-orb inv-invest-proj-orb--gold" />
        <span className="inv-invest-proj-orb inv-invest-proj-orb--red" />
      </div>

      <div className="inv-wrap inv-land-hero-layout inv-land-hero-layout--invest">
        <div className="inv-invest-proj-hero-shell inv-reveal">
          <div className="inv-invest-proj-banner inv-invest-proj-banner--open">
            <div className="inv-invest-proj-banner-grid">
              <div className="inv-invest-proj-banner-copy">
                <p className="inv-invest-proj-banner-kicker">
                  <span className="inv-invest-proj-kicker-mark" aria-hidden="true" />
                  {banner.developerLabel}
                </p>
                <h1 id="inv-hero-banner-title" className="inv-invest-proj-banner-headline">
                  {headlineParts.before}
                  {headlineParts.highlight ? (
                    <span className="inv-invest-proj-headline-accent">{headlineParts.highlight}</span>
                  ) : null}
                  {headlineParts.after}
                </h1>

                <div className="inv-invest-proj-banner-price-row">
                  <p className="inv-invest-proj-banner-price">{banner.price}</p>
                  <p className="inv-invest-proj-banner-meta">
                    <i className="fas fa-location-dot" aria-hidden="true" />
                    {banner.locationLine}
                  </p>
                </div>

                <div className="inv-invest-proj-banner-actions">
                  <Link href={banner.exploreHref} className="inv-btn inv-btn-gold inv-invest-proj-btn-primary">
                    Explore Project
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                  <Link href={banner.roiHref} className="inv-btn inv-invest-proj-btn-outline">
                    Calculate ROI
                  </Link>
                </div>
                <p className="inv-invest-proj-banner-foot">{banner.appreciationFootnote}</p>
              </div>

              <div
                className="inv-invest-proj-banner-stat"
                style={ringStyle}
                aria-label={`${banner.priceAppreciationSinceLaunchPct}% ${banner.appreciationLabel}`}
              >
                <div className="inv-invest-proj-stat-ring" aria-hidden="true">
                  <span className="inv-invest-proj-stat-ring-fill" />
                  <span className="inv-invest-proj-stat-ring-core">
                    <span className="inv-invest-proj-appreciation-value">
                      <i className="fas fa-arrow-trend-up" aria-hidden="true" />
                      {banner.priceAppreciationSinceLaunchPct}%
                    </span>
                  </span>
                </div>
                <p className="inv-invest-proj-banner-stat-name">{banner.projectName}</p>
                <span className="inv-invest-proj-appreciation-label">{banner.appreciationLabel}</span>
              </div>
            </div>
          </div>

          <form className="inv-hero-searchbar inv-hero-searchbar--invest" role="search" onSubmit={explore}>
            <span className="inv-hero-searchbar-icon" aria-hidden="true">
              <i className="fas fa-search" />
            </span>
            <label className="inv-hero-searchbar-field">
              <span className="inv-sr-only">City</span>
              <select
                value={prefs.city}
                onChange={(e) => update('city', e.target.value)}
                aria-label="City"
              >
                {INV_HERO_CITIES.map((opt) => (
                  <option key={opt.value || 'any-city'} value={opt.value}>
                    {opt.value ? opt.label : 'City'}
                  </option>
                ))}
              </select>
            </label>
            <span className="inv-hero-searchbar-divider" aria-hidden="true" />
            <label className="inv-hero-searchbar-field">
              <span className="inv-sr-only">Budget</span>
              <select
                value={prefs.budget}
                onChange={(e) => update('budget', e.target.value)}
                aria-label="Budget"
              >
                <option value="">Budget</option>
                {INV_HERO_BUDGETS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="inv-hero-searchbar-btn">
              Search
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
