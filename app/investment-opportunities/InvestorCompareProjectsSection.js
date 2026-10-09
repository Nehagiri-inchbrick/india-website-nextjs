'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import '@/styles/compare-properties.css';
import {
  COMPARE_PROJECTS_DEFAULT,
  COMPARE_PROJECT_POOL,
} from './investor-landing-data';
import { PROJECT_CARD_IMG_FALLBACK } from './investor-data';
import {
  persistProjectCompareIds,
  useProjectCompareIds,
} from './investor-project-compare';

const COMPARE_SLOTS = 2;
const DEFAULT_COMPARE_IDS = COMPARE_PROJECTS_DEFAULT.slice(0, COMPARE_SLOTS);

const METRIC_ROWS = [
  {
    id: 'price',
    label: 'Starting Price',
    get: (p) => p?.priceCompare ?? p?.price ?? '—',
  },
  {
    id: 'area',
    label: 'Built-up Area',
    get: (p) => p?.sizeSqft ?? '—',
  },
  {
    id: 'yield',
    label: 'Rental Yield',
    get: (p) => (p?.rentalYieldPct != null ? `${p.rentalYieldPct}%` : '—'),
  },
  {
    id: 'growth',
    label: 'Price Growth',
    get: (p) => (p?.priceGrowthPct != null ? `+${p.priceGrowthPct}%` : '—'),
  },
  {
    id: 'possession',
    label: 'Possession',
    get: (p) => p?.possession ?? '—',
  },
];

function slotsFromIds(ids) {
  const slots = Array(COMPARE_SLOTS).fill(null);
  ids.slice(0, COMPARE_SLOTS).forEach((id, i) => {
    slots[i] = id;
  });
  return slots;
}

function idsFromSlots(slots) {
  return slots.filter(Boolean);
}

function CompareThumb({ project }) {
  const initial = project?.img || PROJECT_CARD_IMG_FALLBACK;
  const [imgSrc, setImgSrc] = useState(initial);

  useEffect(() => {
    setImgSrc(project?.img || PROJECT_CARD_IMG_FALLBACK);
  }, [project?.img, project?.id]);

  if (!project) {
    return <span className="inv-pcmp-thumb inv-pcmp-thumb--empty" aria-hidden="true" />;
  }

  return (
    <span className="inv-pcmp-thumb">
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
    </span>
  );
}

function ProjectPicker({ project, slotLabel, pool, onSelect, onClear }) {
  return (
    <div className={`inv-pcmp-pick${project ? '' : ' is-empty'}`}>
      <CompareThumb project={project} />
      <div className="inv-pcmp-pick-body">
        <span className="inv-pcmp-pick-slot">{slotLabel}</span>
        <label>
          <span className="inv-sr-only">Choose {slotLabel}</span>
          <select
            value={project?.id ?? ''}
            onChange={(e) => onSelect(e.target.value)}
            aria-label={`Choose project for ${slotLabel}`}
          >
            <option value="">Select project…</option>
            {pool.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.city}
              </option>
            ))}
          </select>
        </label>
        {project ? (
          <p className="inv-pcmp-pick-meta">
            {project.city}
            {project.unitType ? ` · ${project.unitType}` : ''}
          </p>
        ) : (
          <p className="inv-pcmp-pick-meta">Choose a project to compare</p>
        )}
      </div>
      {project ? (
        <button
          type="button"
          className="inv-pcmp-pick-clear"
          onClick={onClear}
          aria-label={`Remove ${slotLabel}`}
        >
          <i className="fas fa-xmark" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}

export default function InvestorCompareProjectsSection() {
  const storedIds = useProjectCompareIds(DEFAULT_COMPARE_IDS);
  const slots = useMemo(() => slotsFromIds(storedIds), [storedIds]);

  const commitSlots = useCallback((nextSlots) => {
    persistProjectCompareIds(idsFromSlots(nextSlots));
  }, []);

  const slotProjects = useMemo(
    () => slots.map((id) => (id ? COMPARE_PROJECT_POOL.find((p) => p.id === id) : null)),
    [slots]
  );

  const [projectA, projectB] = slotProjects;

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

  const availableFor = useCallback(
    (slotIndex) =>
      COMPARE_PROJECT_POOL.filter((p) => {
        const other = slots[(slotIndex + 1) % COMPARE_SLOTS];
        return p.id !== other;
      }),
    [slots]
  );

  const fullComparisonHref = useMemo(() => {
    const ids = idsFromSlots(slots);
    const params = new URLSearchParams({ compare: ids.join(',') });
    return `/contact?${params.toString()}#contactForm`;
  }, [slots]);

  return (
    <section
      className="inv-pcmp inv-reveal"
      id="compare-projects"
      aria-labelledby="inv-pcmp-title"
    >
      <div className="inv-pcmp-shell">
        <header className="inv-pcmp-head">
          <div className="inv-pcmp-head-copy">
            <p className="inv-pcmp-kicker">
              <span className="inv-pcmp-kicker-line" aria-hidden="true" />
              Compare
            </p>
            <h2 id="inv-pcmp-title" className="inv-pcmp-title">
              Compare Properties. <span>Side by Side.</span>
            </h2>
            <p className="inv-pcmp-lead">
              Price, yield, growth and possession — clear metrics to choose with confidence.
            </p>
          </div>
          <Link href={fullComparisonHref} className="inv-pcmp-head-cta">
            Full comparison
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </header>

        <div className="inv-pcmp-board">
          <div className="inv-pcmp-picks">
            <ProjectPicker
              project={projectA}
              slotLabel="Project A"
              pool={availableFor(0)}
              onSelect={(id) => onSlotSelect(0, id)}
              onClear={() => onClearSlot(0)}
            />
            <span className="inv-pcmp-vs" aria-hidden="true">
              VS
            </span>
            <ProjectPicker
              project={projectB}
              slotLabel="Project B"
              pool={availableFor(1)}
              onSelect={(id) => onSlotSelect(1, id)}
              onClear={() => onClearSlot(1)}
            />
          </div>

          <div className="inv-pcmp-table-wrap" role="table" aria-label="Property comparison metrics">
            <div className="inv-pcmp-table-head" role="row">
              <span role="columnheader">{projectA?.name ?? 'Project A'}</span>
              <span role="columnheader">Metric</span>
              <span role="columnheader">{projectB?.name ?? 'Project B'}</span>
            </div>
            <ul className="inv-pcmp-table" role="rowgroup">
              {METRIC_ROWS.map((row) => (
                <li key={row.id} role="row">
                  <span role="cell">{row.get(projectA)}</span>
                  <span className="inv-pcmp-table-metric" role="cell">
                    {row.label}
                  </span>
                  <span role="cell">{row.get(projectB)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
