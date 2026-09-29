'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  COMPARE_PROJECTS_DEFAULT,
  COMPARE_PROJECTS_META,
  COMPARE_PROJECT_POOL,
} from './investor-landing-data';
import { PROJECT_CARD_IMG_FALLBACK } from './investor-data';
import {
  INV_PROJECT_COMPARE_MAX,
  persistProjectCompareIds,
  useProjectCompareIds,
} from './investor-project-compare';

const SLOT_LABELS = ['Project A', 'Project B', 'Project C'];
const SLOT_MODIFIERS = ['a', 'b', 'c'];

function projectSearchText(project) {
  return [project.name, project.city, project.unitType, project.segment, project.priceCompare, project.price]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function slotsFromIds(ids) {
  const slots = Array(INV_PROJECT_COMPARE_MAX).fill(null);
  ids.slice(0, INV_PROJECT_COMPARE_MAX).forEach((id, i) => {
    slots[i] = id;
  });
  return slots;
}

function idsFromSlots(slots) {
  return slots.filter(Boolean);
}

const DEFAULT_COMPARE_IDS = COMPARE_PROJECTS_DEFAULT.slice(0, INV_PROJECT_COMPARE_MAX);

function CompareProjectImage({ project }) {
  const initial = project.img || PROJECT_CARD_IMG_FALLBACK;
  const [imgSrc, setImgSrc] = useState(initial);

  useEffect(() => {
    setImgSrc(project.img || PROJECT_CARD_IMG_FALLBACK);
  }, [project.img, project.id]);

  return (
    <img
      src={imgSrc}
      alt=""
      loading="lazy"
      onError={() => {
        setImgSrc((current) =>
          current === PROJECT_CARD_IMG_FALLBACK ? current : PROJECT_CARD_IMG_FALLBACK
        );
      }}
    />
  );
}

function CompareFilledColumn({ project, slotLabel, onClear }) {
  return (
    <>
      <div className="inv-proj-compare-col-hero">
        <div className="inv-proj-compare-col-media">
          <CompareProjectImage project={project} />
          <div className="inv-proj-compare-col-media-shade" aria-hidden="true" />
          <span className="inv-proj-compare-col-slot inv-proj-compare-col-slot--on-image">{slotLabel}</span>
          <span className="inv-proj-compare-col-growth-pill">+{project.priceGrowthPct}% growth*</span>
          {project.priceHikePct != null ? (
            <span className="inv-proj-compare-col-hike-pill">+{project.priceHikePct}% hike</span>
          ) : null}
        </div>
      </div>
      <div className="inv-proj-compare-col-body">
        <h3 className="inv-proj-compare-col-name">{project.name}</h3>
        <p className="inv-proj-compare-col-meta">
          <i className="fas fa-location-dot" aria-hidden="true" /> {project.city}
          {(project.unitType ?? project.segment) ? (
            <>
              {' '}
              · {project.unitType ?? project.segment}
            </>
          ) : null}
        </p>
        <p className="inv-proj-compare-col-price">{project.priceCompare ?? project.price}</p>
        <dl className="inv-proj-compare-col-stats inv-proj-compare-col-stats--grid">
          <div>
            <dt>Size</dt>
            <dd>{project.sizeSqft ?? '—'}</dd>
          </div>
          <div>
            <dt>Yield*</dt>
            <dd>{project.rentalYieldPct}%</dd>
          </div>
          <div>
            <dt>Price hike*</dt>
            <dd>{project.priceHikePct != null ? `+${project.priceHikePct}%` : '—'}</dd>
          </div>
          <div>
            <dt>Possession</dt>
            <dd>{project.possession ?? '—'}</dd>
          </div>
          <div>
            <dt>Plan</dt>
            <dd>{project.paymentPlan}</dd>
          </div>
        </dl>
        <div className="inv-proj-compare-col-foot">
          {project.href ? (
            <Link href={project.href} className="inv-proj-compare-col-view">
              View project
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          ) : null}
          <button type="button" className="inv-proj-compare-col-remove" onClick={onClear}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default function InvestorCompareProjectsSection() {
  const compareIds = useProjectCompareIds(DEFAULT_COMPARE_IDS);
  const slots = useMemo(() => slotsFromIds(compareIds), [compareIds]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('');

  const commitSlots = useCallback((nextSlots) => {
    persistProjectCompareIds(idsFromSlots(nextSlots));
  }, []);

  const compareCities = useMemo(() => {
    const cities = new Set(COMPARE_PROJECT_POOL.map((p) => p.city).filter(Boolean));
    return [...cities].sort((a, b) => a.localeCompare(b));
  }, []);

  const filteredPool = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return COMPARE_PROJECT_POOL.filter((project) => {
      if (cityFilter && project.city !== cityFilter) return false;
      if (!q) return true;
      return projectSearchText(project).includes(q);
    });
  }, [searchQuery, cityFilter]);

  const selectedIds = compareIds;

  const slotProjects = useMemo(() => {
    return slots.map((id) => (id ? COMPARE_PROJECT_POOL.find((p) => p.id === id) : null));
  }, [slots]);

  const onToggleChip = useCallback(
    (id) => {
      if (slots.includes(id)) {
        commitSlots(slots.map((s) => (s === id ? null : s)));
        return;
      }
      const emptyIndex = slots.findIndex((s) => !s);
      if (emptyIndex === -1) return;
      const next = [...slots];
      next[emptyIndex] = id;
      commitSlots(next);
    },
    [slots, commitSlots]
  );

  const onSlotSelect = useCallback(
    (slotIndex, id) => {
      const next = [...slots];
      next[slotIndex] = id || null;
      if (id) {
        for (let i = 0; i < next.length; i += 1) {
          if (i !== slotIndex && next[i] === id) next[i] = null;
        }
      }
      commitSlots(next);
    },
    [slots, commitSlots]
  );

  const onClearSlot = useCallback(
    (slotIndex) => {
      commitSlots(slots.map((s, i) => (i === slotIndex ? null : s)));
    },
    [slots, commitSlots]
  );

  const fullComparisonHref = useMemo(() => {
    const params = new URLSearchParams({ compare: selectedIds.join(',') });
    return `/contact?${params.toString()}#contactForm`;
  }, [selectedIds]);

  return (
    <section
      className="inv-proj-compare inv-proj-compare--creative inv-creative inv-creative--matrix inv-land-block inv-reveal"
      id="compare-projects"
      aria-labelledby="inv-proj-compare-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">{COMPARE_PROJECTS_META.eyebrow}</p>
          <h2 id="inv-proj-compare-title">{COMPARE_PROJECTS_META.title}</h2>
          <p className="inv-proj-compare-lead">{COMPARE_PROJECTS_META.lead}</p>
        </header>

        <div className="inv-proj-compare-filters" role="search" aria-label="Filter projects">
          <label className="inv-proj-compare-filter-search">
            <span className="inv-sr-only">Search projects</span>
            <i className="fas fa-search" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name or city"
              autoComplete="off"
            />
          </label>
          <label className="inv-proj-compare-filter-city">
            <span className="inv-sr-only">City</span>
            <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} aria-label="City">
              <option value="">All cities</option>
              {compareCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="inv-proj-compare-picker" role="group" aria-label="Quick add projects to compare">
          {filteredPool.map((project) => {
            const active = slots.includes(project.id);
            const disabled = !active && selectedIds.length >= INV_PROJECT_COMPARE_MAX;
            return (
              <button
                key={project.id}
                type="button"
                className={`inv-proj-compare-chip${active ? ' is-active' : ''}`}
                aria-pressed={active}
                disabled={disabled}
                onClick={() => onToggleChip(project.id)}
              >
                {project.name}
              </button>
            );
          })}
        </div>

        <div className="inv-proj-compare-stage" aria-label="Side by side project comparison">
          <div className="inv-proj-compare-columns">
            {slotProjects.map((project, index) => (
              <div
                key={SLOT_LABELS[index]}
                className={`inv-proj-compare-col inv-proj-compare-col--${SLOT_MODIFIERS[index]}${project ? ' is-filled' : ' is-empty'
                  }`}
              >
                {project ? (
                  <CompareFilledColumn
                    project={project}
                    slotLabel={SLOT_LABELS[index]}
                    onClear={() => onClearSlot(index)}
                  />
                ) : (
                  <div className="inv-proj-compare-col-empty">
                    <span className="inv-proj-compare-col-empty-icon" aria-hidden="true">
                      <i className="fas fa-building" />
                    </span>
                    <p className="inv-proj-compare-col-slot">{SLOT_LABELS[index]}</p>
                    <p>Add a project to this column</p>
                    <label className="inv-proj-compare-col-select">
                      <span className="inv-sr-only">Choose {SLOT_LABELS[index]}</span>
                      <select
                        value=""
                        onChange={(e) => onSlotSelect(index, e.target.value)}
                        aria-label={`Choose project for ${SLOT_LABELS[index]}`}
                      >
                        <option value="">Select project…</option>
                        {filteredPool
                          .filter((p) => !slots.includes(p.id))
                          .map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} — {p.city}
                            </option>
                          ))}
                      </select>
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="inv-proj-compare-note">{COMPARE_PROJECTS_META.starredNote}</p>

        <div className="inv-proj-compare-actions">
          <Link href="#top-projects" className="inv-btn inv-btn-ghost inv-proj-compare-back">
            Add from Spotlight
          </Link>
          <Link
            href={fullComparisonHref}
            className="inv-btn inv-btn-gold inv-proj-compare-full"
            aria-disabled={selectedIds.length === 0}
          >
            View Full Comparison
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
