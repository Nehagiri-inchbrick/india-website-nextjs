'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BUILD_INVESTMENT_OPPORTUNITIES } from './investor-landing-data';
import { INV_HERO_PREFS_EVENT } from './investor-hero-prefs';

export default function InvestorHeroSearchResults() {
  const [show, setShow] = useState(false);
  const [rawPrefs, setRawPrefs] = useState({ city: '', budget: '' });
  const trackRef = useRef(null);

  useEffect(() => {
    // ONLY show section when user explicitly clicks search (event is dispatched)
    const onHeroPrefs = (e) => {
      if (e.detail) {
        setRawPrefs(e.detail);
        setShow(true);
      }
    };

    window.addEventListener(INV_HERO_PREFS_EVENT, onHeroPrefs);
    return () => window.removeEventListener(INV_HERO_PREFS_EVENT, onHeroPrefs);
  }, []);

  const scrollLeft = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }, []);

  const { matches, filterLabel } = useMemo(() => {
    const city = (rawPrefs.city || '').toLowerCase().trim();
    const budget = rawPrefs.budget || '';

    let catalog = [...BUILD_INVESTMENT_OPPORTUNITIES];
    let labelParts = [];

    if (city) {
      labelParts.push(`City: ${city.charAt(0).toUpperCase() + city.slice(1)}`);
    }
    if (budget) {
      labelParts.push(`Budget: ${budget}`);
    }

    let filtered = catalog;

    if (city && budget) {
      filtered = catalog.filter((item) => {
        const matchCity = item.locations?.includes(city) || item.city?.toLowerCase() === city;
        const matchBudget = item.budgetBands?.includes(budget);
        return matchCity && matchBudget;
      });

      // If strict filter yields no results, fallback to matching either city or budget
      if (filtered.length === 0) {
        filtered = catalog.filter((item) => {
          const matchCity = item.locations?.includes(city) || item.city?.toLowerCase() === city;
          const matchBudget = item.budgetBands?.includes(budget);
          return matchCity || matchBudget;
        });
      }
    } else if (city) {
      filtered = catalog.filter((item) => {
        return item.locations?.includes(city) || item.city?.toLowerCase() === city;
      });
    } else if (budget) {
      filtered = catalog.filter((item) => {
        return item.budgetBands?.includes(budget);
      });
    }

    // If still empty or no filter applied, return full catalog sorted by rank boost
    if (filtered.length === 0) {
      filtered = [...catalog].sort((a, b) => (b.rankBoost ?? 0) - (a.rankBoost ?? 0));
    }

    return {
      matches: filtered,
      filterLabel: labelParts.length > 0 ? labelParts.join(' • ') : 'All Top Opportunities',
    };
  }, [rawPrefs]);

  if (!show) return null;

  return (
    <section
      id="hero-search-results"
      className="inv-hero-search-results-section"
      style={{
        padding: '2rem 0 1.5rem 0',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1.5rem',
      }}
      aria-labelledby="hero-search-results-title"
    >
      <div className="inv-wrap" style={{ position: 'relative' }}>
        {/* Compact Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '0.85rem',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#b8853b',
                display: 'block',
                marginBottom: '0.15rem',
              }}
            >
              Search Results ({filterLabel})
            </span>
            <h2
              id="hero-search-results-title"
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#0f172a',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Matched Investment Projects
            </h2>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
            Found {matches.length} curated project{matches.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Projects Carousel with Left & Right Nav Buttons */}
        {matches.length > 0 ? (
          <div style={{ position: 'relative', marginTop: '0.5rem' }}>
            {/* Left Nav Button */}
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous projects"
              style={{
                position: 'absolute',
                left: '-16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f172a',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>

            {/* Scrollable Track */}
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: '1.25rem',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                padding: '0.5rem 0.25rem 0.75rem 0.25rem',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {matches.map((item) => (
                <article
                  key={item.id}
                  style={{
                    minWidth: '280px',
                    maxWidth: '300px',
                    flex: '0 0 auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: 'block',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      backgroundColor: '#f1f5f9',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Link>

                  <div
                    style={{
                      padding: '0.9rem 1rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                    }}
                  >
                    <h4
                      style={{
                        margin: '0 0 0.3rem',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </h4>

                    <p
                      style={{
                        margin: '0 0 0.6rem',
                        fontSize: '0.8rem',
                        color: '#64748b',
                        fontWeight: '500',
                      }}
                    >
                      {item.city} · {item.segment}
                    </p>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '0.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          color: '#0f172a',
                        }}
                      >
                        {item.price}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          color: '#15803d',
                          backgroundColor: '#dcfce7',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                        }}
                      >
                        +{item.growthPct}%
                      </span>
                    </div>

                    <Link
                      href={item.href}
                      style={{
                        marginTop: '0.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: '#b8853b',
                        textDecoration: 'none',
                      }}
                    >
                      View project
                      <i className="fas fa-arrow-right" aria-hidden="true" style={{ fontSize: '0.75rem' }} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Nav Button */}
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next projects"
              style={{
                position: 'absolute',
                right: '-16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f172a',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
