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

  const estimated = useMemo(
    () => Math.round(amount * Math.pow(1 + rate, years)),
    [amount, years, rate]
  );
  const gainPct = amount > 0 ? (((estimated - amount) / amount) * 100).toFixed(1) : '0';
  const gainAmt = estimated - amount;

  const sliderMin = selectedProject ? Math.round(selectedProject.priceInr * 0.5) : 50_00_000;
  const sliderMax = selectedProject ? Math.round(selectedProject.priceInr * 2) : 10_00_00_000;
  const sliderVal = Math.min(Math.max(amount, sliderMin), sliderMax);
  const sliderPct =
    sliderMax > sliderMin ? ((sliderVal - sliderMin) / (sliderMax - sliderMin)) * 100 : 0;

  return (
    <section
      className="inv-growth inv-growth--board inv-land-block inv-reveal"
      id="growth-visualizer"
      aria-labelledby="inv-growth-title"
    >
      <div className="inv-wrap">
        <header className="inv-growth-board-head">
          <p className="inv-growth-board-eyebrow">
            <span className="inv-growth-board-eyebrow-line" aria-hidden="true" />
            Growth Path
          </p>
          <h2 id="inv-growth-title" className="inv-growth-board-title">
            See Where Your Investment <span>Could Go</span>
          </h2>
          <p className="inv-growth-board-lead">
            Project list price with illustrative compounding — adjust hold period and amount to preview
            potential value.
          </p>
        </header>

        <div className="inv-growth-board" aria-live="polite">
          <div className="inv-growth-board-controls">
            <label className="inv-growth-board-field">
              <span>Project · list price</span>
              <select
                className="inv-growth-board-select"
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

            <div className="inv-growth-board-field">
              <span>Hold period</span>
              <div className="inv-growth-board-periods" role="group" aria-label="Years">
                {PERIODS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    className={`inv-growth-board-period${years === y ? ' is-active' : ''}`}
                    onClick={() => setYears(y)}
                    aria-pressed={years === y}
                  >
                    {y} Years
                  </button>
                ))}
              </div>
            </div>

            <div className="inv-growth-board-field inv-growth-board-field--range">
              <div className="inv-growth-board-field-top">
                <span>Investment amount</span>
                <strong>{formatCompactInr(amount)}</strong>
              </div>
              <input
                type="range"
                className="inv-growth-board-range"
                min={sliderMin}
                max={sliderMax}
                step={STEP_AMOUNT}
                value={sliderVal}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-label="Investment amount"
                style={{ '--growth-pct': `${sliderPct}%` }}
              />
            </div>
          </div>

          <aside className="inv-growth-board-result">
            <p className="inv-growth-board-result-kicker">Projected value</p>
            <p className="inv-growth-board-result-path">
              <span>{formatCompactInr(amount)}</span>
              <i className="fas fa-arrow-right" aria-hidden="true" />
              <strong>{formatCompactInr(estimated)}</strong>
            </p>
            <dl className="inv-growth-board-result-meta">
              <div>
                <dt>Horizon</dt>
                <dd>{years} years</dd>
              </div>
              <div>
                <dt>Illustrative gain</dt>
                <dd>
                  +{gainPct}% · {formatCompactInr(gainAmt)}
                </dd>
              </div>
              <div>
                <dt>Assumed CAGR</dt>
                <dd>~{selectedProject?.growthPct}% p.a.</dd>
              </div>
            </dl>
            <p className="inv-growth-board-note">Illustrative only — not a forecast or guarantee.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
