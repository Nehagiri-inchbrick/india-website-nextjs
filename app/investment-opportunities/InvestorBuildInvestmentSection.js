'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BUILD_INVESTMENT_BUDGETS,
  BUILD_INVESTMENT_GOALS,
  BUILD_INVESTMENT_LOCATIONS,
  BUILD_INVESTMENT_META,
  BUILD_INVESTMENT_OPPORTUNITIES,
  BUILD_INVESTMENT_PROPERTY_TYPES,
} from './investor-landing-data';
import {
  INV_BUILD_INVESTMENT_EVENT,
  INV_BUILD_INVESTMENT_KEY,
  matchBuildInvestmentOpportunities,
} from './investor-build-investment';
import {
  INV_HERO_PREFS_EVENT,
  mapHeroPrefsToBuildFilters,
  readInvHeroPrefs,
} from './investor-hero-prefs';
import InvestorProjectsSlider, { ProjectsSliderSlide } from './InvestorProjectsSlider';

const DEFAULT_FILTERS = {
  budget: '1-3Cr',
  goal: 'capital-growth',
  locations: ['gurgaon', 'noida'],
  property: 'residential',
};

export default function InvestorBuildInvestmentSection() {
  const [budget, setBudget] = useState(DEFAULT_FILTERS.budget);
  const [goal, setGoal] = useState(DEFAULT_FILTERS.goal);
  const [locations, setLocations] = useState(DEFAULT_FILTERS.locations);
  const [property, setProperty] = useState(DEFAULT_FILTERS.property);
  const [showResults, setShowResults] = useState(false);

  const applyMappedPrefs = useCallback((prefs) => {
    const mapped = mapHeroPrefsToBuildFilters(prefs);
    if (!mapped) return;
    if (mapped.budget) setBudget(mapped.budget);
    if (mapped.goal) setGoal(mapped.goal);
    if (mapped.locations?.length) setLocations(mapped.locations);
    if (mapped.property) setProperty(mapped.property);
  }, []);

  useEffect(() => {
    applyMappedPrefs(readInvHeroPrefs());

    const onHeroPrefs = (e) => applyMappedPrefs(e.detail);
    window.addEventListener(INV_HERO_PREFS_EVENT, onHeroPrefs);
    return () => window.removeEventListener(INV_HERO_PREFS_EVENT, onHeroPrefs);
  }, [applyMappedPrefs]);

  const filters = useMemo(
    () => ({ budget, goal, locations, property }),
    [budget, goal, locations, property]
  );

  const matches = useMemo(
    () => matchBuildInvestmentOpportunities(BUILD_INVESTMENT_OPPORTUNITIES, filters, 12),
    [filters]
  );

  const toggleLocation = (id) => {
    setLocations((current) => {
      if (current.includes(id)) {
        return current.length > 1 ? current.filter((x) => x !== id) : current;
      }
      return [...current, id];
    });
  };

  const showMatching = useCallback(
    (e) => {
      e.preventDefault();
      setShowResults(true);
      try {
        sessionStorage.setItem(INV_BUILD_INVESTMENT_KEY, JSON.stringify(filters));
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new CustomEvent(INV_BUILD_INVESTMENT_EVENT, { detail: filters }));
      requestAnimationFrame(() => {
        document.getElementById('build-investment-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    [filters]
  );

  return (
    <section
      className="inv-build-match inv-creative inv-creative--dark inv-land-block inv-reveal"
      id="build-investment"
      aria-labelledby="inv-build-inv-title"
    >
      <div className="inv-build-match-bg" aria-hidden="true" />
      <div className="inv-creative-bg inv-creative-bg--dark" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-build-match-head">
          <p className="inv-build-match-eyebrow">{BUILD_INVESTMENT_META.eyebrow}</p>
          <h2 id="inv-build-inv-title">{BUILD_INVESTMENT_META.title}</h2>
          <p className="inv-build-match-lead">{BUILD_INVESTMENT_META.lead}</p>
        </header>

        <form className="inv-build-match-form" onSubmit={showMatching}>
          <div className="inv-build-match-panel">
            <div className="inv-build-match-row">
              <span className="inv-build-match-row-label">Budget</span>
              <div className="inv-build-match-chips">
                {BUILD_INVESTMENT_BUDGETS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`inv-build-match-chip${budget === b.id ? ' is-active' : ''}`}
                    aria-pressed={budget === b.id}
                    onClick={() => setBudget(b.id)}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="inv-build-match-row">
              <span className="inv-build-match-row-label">Goal</span>
              <div className="inv-build-match-chips">
                {BUILD_INVESTMENT_GOALS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={`inv-build-match-chip${goal === g.id ? ' is-active' : ''}`}
                    aria-pressed={goal === g.id}
                    onClick={() => setGoal(g.id)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="inv-build-match-row">
              <span className="inv-build-match-row-label">Cities</span>
              <div className="inv-build-match-chips">
                {BUILD_INVESTMENT_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    className={`inv-build-match-chip${locations.includes(loc.id) ? ' is-active' : ''}`}
                    aria-pressed={locations.includes(loc.id)}
                    onClick={() => toggleLocation(loc.id)}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="inv-build-match-row">
              <span className="inv-build-match-row-label">Property</span>
              <div className="inv-build-match-chips">
                {BUILD_INVESTMENT_PROPERTY_TYPES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`inv-build-match-chip${property === p.id ? ' is-active' : ''}`}
                    aria-pressed={property === p.id}
                    onClick={() => setProperty(p.id)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="inv-btn inv-btn-gold inv-build-match-submit">
              {BUILD_INVESTMENT_META.submitLabel}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </form>

        {showResults ? (
          <div className="inv-build-match-results" id="build-investment-results">
            <h3 className="inv-build-match-results-title">{BUILD_INVESTMENT_META.resultsTitle}</h3>
            <p className="inv-build-match-results-meta">{matches.length} matched</p>
            <InvestorProjectsSlider ariaLabel="Projects matching your preferences">
              {matches.map((item) => (
                <ProjectsSliderSlide key={item.id} className="inv-proj-slider-slide--build">
                  <article className="inv-build-inv-card">
                    <Link href={item.href} className="inv-build-inv-card-media">
                      <img src={item.img} alt="" loading="lazy" />
                    </Link>
                    <div className="inv-build-inv-card-body">
                      <h4>{item.name}</h4>
                      <p>
                        {item.city} · {item.segment}
                      </p>
                      <p className="inv-build-inv-card-price">{item.price}</p>
                      <p className="inv-build-inv-card-growth">Growth +{item.growthPct}%</p>
                      <Link href={item.href} className="inv-build-inv-card-link">
                        View project
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </ProjectsSliderSlide>
              ))}
            </InvestorProjectsSlider>
            <Link href="#top-projects" className="inv-build-inv-more">
              Top 10 ranked projects
              <i className="fas fa-arrow-down" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
