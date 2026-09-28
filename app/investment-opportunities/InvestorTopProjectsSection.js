'use client';

import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import InvestorProjectsSlider, { ProjectsSliderSlide } from './InvestorProjectsSlider';
import {
  TOP10_INVESTMENT_META,
  TOP10_INVESTMENT_PROJECTS,
  TOP_PERFORMING_PROJECTS,
  TOP_PROJECTS_META,
  resolveProjectPriceHikePct,
  resolveCompareProjectImg,
} from './investor-landing-data';
import {
  INV_PROJECT_COMPARE_MAX,
  toggleProjectCompareId,
  useProjectCompareIds,
} from './investor-project-compare';

const DEMAND_LABEL = { high: 'High', medium: 'Medium', low: 'Low' };

function SoldOutCard({ project, isCompare, onToggleCompare }) {
  const priceHikePct = resolveProjectPriceHikePct(project);
  return (
    <article className={`inv-top-proj-card inv-top-proj-card--ribbon${isCompare ? ' is-compare' : ''}`}>
      <div className="inv-top-proj-card-media">
        <span className="inv-proj-card-ribbon inv-proj-card-ribbon--sold">
          {TOP_PROJECTS_META.ribbons.soldOut.label}
        </span>
        <img src={project.img} alt="" loading="lazy" />
        {priceHikePct != null ? (
          <span className="inv-top-proj-hike-pill" title={TOP_PROJECTS_META.priceHikeNote}>
            +{priceHikePct}% price hike
          </span>
        ) : null}
      </div>
      <div className="inv-top-proj-card-body">
        <h3>{project.name}</h3>
        <p className="inv-top-proj-meta">
          {project.city} · {project.segment}
        </p>
        <p className="inv-top-proj-price">{project.price}</p>

        <dl className="inv-top-proj-stats inv-top-proj-stats--compact">
          <div>
            <dt>Growth</dt>
            <dd className="inv-top-proj-up">+{project.priceGrowthPct}%</dd>
          </div>
          <div>
            <dt>Demand</dt>
            <dd>{DEMAND_LABEL[project.demand]}</dd>
          </div>
          <div>
            <dt>Yield</dt>
            <dd>{project.rentalYieldPct}%</dd>
          </div>
          <div>
            <dt>Plan</dt>
            <dd>{project.paymentPlan}</dd>
          </div>
        </dl>

        <div className="inv-top-proj-actions">
          <button
            type="button"
            className={`inv-top-proj-compare${isCompare ? ' is-active' : ''}`}
            aria-pressed={isCompare}
            onClick={() => onToggleCompare(project.id)}
          >
            Compare
          </button>
          <Link href={project.href} className="inv-top-proj-view">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

function WhatsNextImageCard({ project, isCompare, onToggleCompare }) {
  const priceHikePct = resolveProjectPriceHikePct(project);
  return (
    <article className={`inv-top-proj-card inv-proj-whats-next-card${isCompare ? ' is-compare' : ''}`}>
      <div className="inv-top-proj-card-media">
        <span className="inv-proj-whats-next-rank" aria-label={`Rank ${project.rank}`}>
          {String(project.rank).padStart(2, '0')}
        </span>
        <img src={project.img} alt="" loading="lazy" />
      </div>
      <div className="inv-top-proj-card-body">
        <h3>{project.name}</h3>
        <p className="inv-top-proj-meta">
          {project.city} · {project.segment}
        </p>
        <p className="inv-top-proj-price">{project.price}</p>

        <dl className="inv-top-proj-stats inv-top-proj-stats--compact">
          <div>
            <dt>Growth</dt>
            <dd className="inv-top-proj-up">+{project.priceGrowthPct}%</dd>
          </div>
          {priceHikePct != null ? (
            <div>
              <dt>Hike</dt>
              <dd className="inv-top-proj-hike">+{priceHikePct}%</dd>
            </div>
          ) : null}
          <div>
            <dt>Yield</dt>
            <dd>{project.rentalYieldPct}%</dd>
          </div>
          <div>
            <dt>Plan</dt>
            <dd>{project.paymentPlan}</dd>
          </div>
        </dl>

        <div className="inv-top-proj-actions">
          <button
            type="button"
            className={`inv-top-proj-compare${isCompare ? ' is-active' : ''}`}
            aria-pressed={isCompare}
            onClick={() => onToggleCompare(project.id)}
          >
            Compare
          </button>
          <Link href={project.href} className="inv-top-proj-view">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

function WhatsNextSectionHead() {
  const w = TOP_PROJECTS_META.ribbons.whatsNext;
  return (
    <header className="inv-proj-next-center-head" aria-labelledby="inv-proj-next-title">
      <p className="inv-proj-next-center-eyebrow">{w.eyebrow}</p>
      <h3 id="inv-proj-next-title" className="inv-proj-next-center-title">
        What&apos;s <span className="inv-proj-next-center-accent">next</span>?
      </h3>
      <p className="inv-proj-next-center-subhead">{w.subhead}</p>
    </header>
  );
}

function RibbonSectionHead({ variant, title, blurb }) {
  const ribbon = variant === 'sold' ? TOP_PROJECTS_META.ribbons.soldOut : TOP_PROJECTS_META.ribbons.whatsNext;
  return (
    <header className={`inv-proj-ribbon-head inv-proj-ribbon-head--${variant}`}>
      <div className="inv-proj-ribbon-fold" aria-hidden="true">
        <span className="inv-proj-ribbon-fold-text">{ribbon.label}</span>
      </div>
      <div className="inv-proj-ribbon-head-copy">
        <h3 id={variant === 'sold' ? 'inv-proj-sold-title' : 'inv-proj-next-title'}>{title}</h3>
        <p>{blurb}</p>
      </div>
    </header>
  );
}

export default function InvestorTopProjectsSection() {
  const compareIds = useProjectCompareIds();

  const soldOutProjects = useMemo(
    () =>
      TOP_PERFORMING_PROJECTS.map((p) => ({
        ...p,
        priceHikePct: resolveProjectPriceHikePct(p),
      })),
    []
  );

  const whatsNextProjects = useMemo(
    () =>
      TOP10_INVESTMENT_PROJECTS.map((p) => ({
        ...p,
        priceHikePct: resolveProjectPriceHikePct(p),
        img: resolveCompareProjectImg(p),
      })),
    []
  );

  const compareProjects = useMemo(() => {
    const pool = new Map();
    TOP_PERFORMING_PROJECTS.forEach((p) => pool.set(p.id, p));
    TOP10_INVESTMENT_PROJECTS.forEach((p) => pool.set(p.id, p));
    return compareIds.map((id) => pool.get(id)).filter(Boolean);
  }, [compareIds]);

  const toggleCompare = useCallback(
    (id) => {
      toggleProjectCompareId(id, compareIds);
    },
    [compareIds]
  );

  const criteria = useMemo(() => TOP10_INVESTMENT_META.criteria, []);

  return (
    <section
      className="inv-top-proj inv-creative inv-creative--studio inv-land-block inv-reveal"
      id="top-projects"
      aria-labelledby="inv-top-proj-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-mock-section-head inv-proj-studio-head">
          <p className="inv-mock-eyebrow">{TOP_PROJECTS_META.eyebrow}</p>
          <h2 id="inv-top-proj-title">{TOP_PROJECTS_META.title}</h2>
          <p className="inv-top-proj-lead">{TOP_PROJECTS_META.lead}</p>
        </header>

        <div className="inv-proj-ribbon-stack">
          <section className="inv-proj-ribbon-block" aria-labelledby="inv-proj-sold-title">
            <RibbonSectionHead
              variant="sold"
              title={TOP_PROJECTS_META.ribbons.soldOut.title}
              blurb={TOP_PROJECTS_META.ribbons.soldOut.blurb}
            />
            <InvestorProjectsSlider ariaLabel="Sold-out pace projects">
              {soldOutProjects.map((project) => (
                <ProjectsSliderSlide key={project.id} className="inv-proj-slider-slide--card">
                  <SoldOutCard
                    project={project}
                    isCompare={compareIds.includes(project.id)}
                    onToggleCompare={toggleCompare}
                  />
                </ProjectsSliderSlide>
              ))}
            </InvestorProjectsSlider>
          </section>

          <section className="inv-proj-ribbon-block inv-proj-ribbon-block--next" aria-labelledby="inv-proj-next-title">
            <WhatsNextSectionHead />
            <InvestorProjectsSlider ariaLabel="What to explore next — top 10 projects">
              {whatsNextProjects.map((project) => (
                <ProjectsSliderSlide key={project.rank} className="inv-proj-slider-slide--card">
                  <WhatsNextImageCard
                    project={project}
                    isCompare={compareIds.includes(project.id)}
                    onToggleCompare={toggleCompare}
                  />
                </ProjectsSliderSlide>
              ))}
            </InvestorProjectsSlider>
            <details className="inv-proj-method-details inv-proj-method-details--light inv-proj-method-details--center">
              <summary>{TOP10_INVESTMENT_META.titleMethod}</summary>
              <p>{TOP10_INVESTMENT_META.methodology}</p>
              <ul className="inv-top10-inv-criteria" aria-label="Comparison criteria">
                {criteria.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>
          </section>
        </div>

        {compareProjects.length > 0 ? (
          <div className="inv-top-proj-compare-tray" aria-live="polite">
            <p>
              <strong>{compareProjects.length}</strong> of {INV_PROJECT_COMPARE_MAX} projects in your comparison
            </p>
            <ul>
              {compareProjects.map((p) => (
                <li key={p.id}>
                  {p.name} · {p.city}
                </li>
              ))}
            </ul>
            <Link href="#compare-projects" className="inv-btn inv-btn-gold inv-top-proj-compare-go">
              Review comparison
              <i className="fas fa-arrow-down" aria-hidden="true" />
            </Link>
          </div>
        ) : null}

        <p className="inv-top-proj-foot">
          <strong>Period:</strong> {TOP_PROJECTS_META.period} · <strong>Source:</strong> {TOP_PROJECTS_META.source}.{' '}
          {TOP_PROJECTS_META.footnote}
        </p>
      </div>
    </section>
  );
}
