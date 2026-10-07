'use client';

import Link from 'next/link';
import { useCallback, useMemo, useRef, useState } from 'react';
import { INV_HERO_BUDGETS, INV_HERO_CITIES, INV_HERO_PROPERTY_TYPES, saveInvHeroPrefs } from './investor-hero-prefs';
import { INVESTOR_FEATURED_BANNER } from './investor-landing-data';
import { POPULAR_CITIES_GROWTH } from './city-growth-data';
import InvestorCityGrowthModal from './InvestorCityGrowthModal';

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

const CITY_THUMBS = {
  gurugram: '/images/nri-cities/gurugram.png',
  mumbai: '/images/nri-cities/mumbai.png',
  bengaluru: '/images/nri-cities/bengaluru.png',
  hyderabad: '/images/nri-cities/hyderabad.png',
  noida: '/images/nri-cities/noida.png',
  pune: '/images/nri-cities/pune.png',
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

function MiniSparkline({ values, id = 'spark' }) {
  const w = 72;
  const h = 28;
  const padX = 3;
  const padY = 4;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const fillId = `invHeroSparkFill-${id}`;

  const coords = values.map((v, i) => {
    const x = padX + (i / (values.length - 1)) * (w - padX * 2);
    const y = padY + (h - padY * 2) - ((v - min) / range) * (h - padY * 2);
    return { x, y };
  });

  const linePoints = coords.map((p) => `${p.x},${p.y}`).join(' ');
  const areaPoints = [
    `${coords[0].x},${h - 1}`,
    ...coords.map((p) => `${p.x},${p.y}`),
    `${coords[coords.length - 1].x},${h - 1}`,
  ].join(' ');

  return (
    <svg className="inv-hero-v3-city-spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${fillId})`} />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#16a34a"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {coords.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === coords.length - 1 ? 2.6 : 1.8}
          fill={i === coords.length - 1 ? '#059669' : '#fff'}
          stroke="#16a34a"
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}

function cleanBadge(badge) {
  return String(badge || '').replace(/^[^A-Za-z0-9]+/, '').trim();
}

export default function InvestorHeroSection() {
  const [prefs, setPrefs] = useState(EMPTY_PREFS);
  const [selectedModalCity, setSelectedModalCity] = useState(null);
  const cityViewportRef = useRef(null);

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

  const scrollCities = useCallback((direction) => {
    const viewport = cityViewportRef.current;
    if (!viewport) return;
    viewport.scrollBy({ left: direction * viewport.clientWidth, behavior: 'smooth' });
  }, []);

  return (
    <section className="inv-hero-v3-fullscreen" aria-labelledby="inv-hero-banner-title">
      <div
        className="inv-hero-v3-bg"
        style={{ backgroundImage: `url('${banner.image}')` }}
        aria-hidden="true"
      />
      <div className="inv-hero-v3-overlay" aria-hidden="true" />

  

      <div className="inv-wrap inv-hero-v3-container">
        {/* Left-aligned content */}
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

        {/* 6 cities in one row */}
        <div className="inv-hero-v3-city-strip">
          <div className="inv-hero-v3-strip-header">
            <div className="inv-hero-v3-strip-title">
              <i className="fas fa-chart-line" aria-hidden="true" />
              <strong>POPULAR CITY GROWTH HUB</strong>
            </div>
            <span className="inv-hero-v3-strip-sub">
              Click any city card to view top project growth graphs
            </span>
          </div>

          <div className="inv-hero-v3-city-slider">
            <button
              type="button"
              className="inv-hero-v3-city-nav inv-hero-v3-city-nav--prev"
              aria-label="Previous cities"
              onClick={() => scrollCities(-1)}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>

            <div className="inv-hero-v3-city-viewport" ref={cityViewportRef}>
              <div className="inv-hero-v3-city-track" role="list">
                {POPULAR_CITIES_GROWTH.map((c) => (
                  <div key={c.id} className="inv-hero-v3-city-slide" role="listitem">
                    <button
                      type="button"
                      className="inv-hero-v3-city-card"
                      onClick={() => setSelectedModalCity(c)}
                      aria-label={`View ${c.name} project growth charts`}
                    >
                      <div className="inv-hero-v3-city-thumb">
                        <img src={CITY_THUMBS[c.id] || CITY_THUMBS.gurugram} alt="" loading="lazy" />
                      </div>
                      <div className="inv-hero-v3-city-body">
                        <div className="inv-hero-v3-card-top">
                          <span className="inv-hero-v3-city-name">{c.name}</span>
                          <span className="inv-hero-v3-badge">{cleanBadge(c.badge)}</span>
                        </div>
                        <div className="inv-hero-v3-card-mid">
                          <div className="inv-hero-v3-growth">
                            <strong>+{c.yoyGrowthPct}%</strong>
                            <small>YoY</small>
                          </div>
                          <MiniSparkline values={c.sparkline} id={c.id} />
                        </div>
                        <div className="inv-hero-v3-card-bot">
                          <span>{c.avgPriceSqft}/sqft</span>
                          <i className="fas fa-chart-line" aria-hidden="true" />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="inv-hero-v3-city-nav inv-hero-v3-city-nav--next"
              aria-label="Next cities"
              onClick={() => scrollCities(1)}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {selectedModalCity && (
        <InvestorCityGrowthModal
          city={selectedModalCity}
          onClose={() => setSelectedModalCity(null)}
        />
      )}
    </section>
  );
}
