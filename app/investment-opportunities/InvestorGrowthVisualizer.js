'use client';

import { useMemo, useState } from 'react';
import { ROI_VISUALIZER_PROJECTS } from './investor-landing-data';

const STEP_AMOUNT = 25_00_000;
const PERIODS = [3, 5, 7];
const DEFAULT_PROJECT = ROI_VISUALIZER_PROJECTS[0];

function formatCompactInr(amount) {
  if (amount >= 1_00_00_000) {
    const cr = amount / 1_00_00_000;
    return `₹${cr.toFixed(cr >= 10 ? 1 : 2)} Cr`;
  }
  if (amount >= 1_00_000) {
    const lakhs = amount / 1_00_000;
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} L`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function InvestorGrowthVisualizer() {
  const [projectId, setProjectId] = useState(DEFAULT_PROJECT?.id ?? '');
  const [amount, setAmount] = useState(DEFAULT_PROJECT?.priceInr ?? 4_00_00_000);
  const [years, setYears] = useState(5);

  const selectedProject = useMemo(
    () => ROI_VISUALIZER_PROJECTS.find((p) => p.id === projectId) ?? DEFAULT_PROJECT,
    [projectId]
  );

  const rate = (selectedProject?.growthPct ?? 7.5) / 100;

  function onProjectChange(id) {
    const p = ROI_VISUALIZER_PROJECTS.find((x) => x.id === id);
    if (!p) return;
    setProjectId(id);
    setAmount(p.priceInr);
  }

  const estimated = useMemo(() => Math.round(amount * Math.pow(1 + rate, years)), [amount, years, rate]);
  const gainPct = amount > 0 ? (((estimated - amount) / amount) * 100).toFixed(1) : '0';

  const sliderMin = selectedProject ? Math.round(selectedProject.priceInr * 0.5) : 50_00_000;
  const sliderMax = selectedProject ? Math.round(selectedProject.priceInr * 2) : 10_00_00_000;
  const sliderVal = Math.min(Math.max(amount, sliderMin), sliderMax);

  return (
    <section
      className="inv-growth inv-growth--creative inv-growth--short inv-creative inv-creative--dark inv-land-block inv-reveal"
      id="growth-visualizer"
      aria-labelledby="inv-growth-title"
    >
      <div className="inv-creative-bg inv-creative-bg--dark" aria-hidden="true" />

      <div className="inv-wrap inv-creative-inner">
        <header className="inv-growth-head inv-growth-head--creative inv-growth-head--short">
          <h2 id="inv-growth-title">
            See Where Your Investment <span className="inv-growth-title-accent">Could Go</span>
          </h2>
          <p className="inv-growth-head-lead">Project list price · illustrative growth only.</p>
        </header>

        <div className="inv-growth-compact" aria-live="polite">
          <div className="inv-growth-compact-controls">
            <label className="inv-growth-compact-field">
              <span>Project · list price</span>
              <select
                className="inv-growth-project-select"
                value={projectId}
                onChange={(e) => onProjectChange(e.target.value)}
                aria-label="Select project and list price"
              >
                {ROI_VISUALIZER_PROJECTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.priceLabel} ({p.city})
                  </option>
                ))}
              </select>
            </label>

            <div className="inv-growth-compact-field">
              <span>Hold</span>
              <div className="inv-growth-segment inv-growth-segment--period" role="group" aria-label="Years">
                {PERIODS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    className={`inv-growth-segment-btn${years === y ? ' is-active' : ''}`}
                    onClick={() => setYears(y)}
                    aria-pressed={years === y}
                  >
                    {y}Y
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="inv-growth-compact-field inv-growth-compact-field--range">
            <div className="inv-growth-field-top">
              <span>Amount</span>
              <strong>{formatCompactInr(amount)}</strong>
            </div>
            <input
              type="range"
              className="inv-growth-range"
              min={sliderMin}
              max={sliderMax}
              step={STEP_AMOUNT}
              value={sliderVal}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-label="Investment amount"
            />
          </div>

          <p className="inv-growth-compact-result">
            <strong>{formatCompactInr(amount)}</strong>
            <span className="inv-growth-compact-arrow" aria-hidden="true">
              →
            </span>
            <strong className="inv-growth-compact-future">{formatCompactInr(estimated)}</strong>
            <span className="inv-growth-compact-meta">
              {years}Y · +{gainPct}% · ~{selectedProject?.growthPct}% p.a.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
