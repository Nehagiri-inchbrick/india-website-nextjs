'use client';

import { useMemo, useState } from 'react';
import {
  MARKET_GROWTH_META,
  MARKET_GROWTH_PERIOD_SLICE,
  MARKET_GROWTH_PERIODS,
  MARKET_GROWTH_SERIES,
  MARKET_GROWTH_TYPES,
  MARKET_GROWTH_Y_TICKS,
} from './investor-landing-data';

const CHART = { w: 560, h: 240, pad: { t: 24, r: 20, b: 36, l: 44 } };
const Y_MIN = 0;
const Y_MAX = 20;

function buildLine(points, pad) {
  const innerW = CHART.w - pad.l - pad.r;
  const innerH = CHART.h - pad.t - pad.b;
  const n = points.length;
  if (n < 1) return '';

  return points
    .map((p, i) => {
      const x = pad.l + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
      const y = pad.t + innerH - ((p.value - Y_MIN) / (Y_MAX - Y_MIN)) * innerH;
      return `${x},${y}`;
    })
    .join(' ');
}

function yToPx(value, pad) {
  const innerH = CHART.h - pad.t - pad.b;
  return pad.t + innerH - ((value - Y_MIN) / (Y_MAX - Y_MIN)) * innerH;
}

export default function InvestorMarketGrowthSection() {
  const [period, setPeriod] = useState('5y');
  const [assetType, setAssetType] = useState('residential');

  const points = useMemo(() => {
    const full = MARKET_GROWTH_SERIES[assetType] ?? MARKET_GROWTH_SERIES.residential;
    const count = MARKET_GROWTH_PERIOD_SLICE[period] ?? full.length;
    return full.slice(-count);
  }, [period, assetType]);

  const linePoints = useMemo(() => buildLine(points, CHART.pad), [points]);
  const chartKey = `${period}-${assetType}-${linePoints}`;

  const activeTypeLabel = MARKET_GROWTH_TYPES.find((t) => t.id === assetType)?.label ?? 'Residential';

  return (
    <section
      className="inv-mkt-growth inv-creative inv-creative--chart inv-land-block inv-reveal"
      id="market-growth"
      aria-labelledby="inv-mkt-growth-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-mkt-growth-head inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Market Growth</p>
          <h2 id="inv-mkt-growth-title">How Has the Market Moved?</h2>
          <p className="inv-mkt-growth-lead">
            Track verified historical price momentum by asset class — switch horizon and segment to see how growth
            has compounded, not just where it stands today.
          </p>
        </header>

        <div className="inv-mkt-growth-controls">
          <div className="inv-mkt-growth-period" role="tablist" aria-label="Time horizon">
            {MARKET_GROWTH_PERIODS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={period === p.id}
                className={`inv-mkt-growth-tab${period === p.id ? ' is-active' : ''}`}
                onClick={() => setPeriod(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="inv-mkt-growth-types" role="tablist" aria-label="Property type">
            {MARKET_GROWTH_TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={assetType === t.id}
                className={`inv-mkt-growth-type${assetType === t.id ? ' is-active' : ''}`}
                onClick={() => setAssetType(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="inv-mkt-growth-chart-card">
          <div className="inv-mkt-growth-chart-top">
            <div>
              <h3>{MARKET_GROWTH_META.chartTitle}</h3>
              <p>
                {activeTypeLabel} · {MARKET_GROWTH_META.geography}
              </p>
            </div>
            <span className="inv-mkt-growth-y-label">{MARKET_GROWTH_META.yAxisLabel}</span>
          </div>

          <svg
            className="inv-mkt-growth-chart"
            viewBox={`0 0 ${CHART.w} ${CHART.h}`}
            role="img"
            aria-label={`${activeTypeLabel} market growth chart`}
          >
            {MARKET_GROWTH_Y_TICKS.map((tick) => (
              <g key={tick}>
                <line
                  x1={CHART.pad.l}
                  x2={CHART.w - CHART.pad.r}
                  y1={yToPx(tick, CHART.pad)}
                  y2={yToPx(tick, CHART.pad)}
                  className="inv-mkt-growth-grid"
                />
                <text x={CHART.pad.l - 8} y={yToPx(tick, CHART.pad) + 4} className="inv-mkt-growth-y-tick">
                  {tick}%
                </text>
              </g>
            ))}
            <polyline
              key={chartKey}
              points={linePoints}
              className="inv-mkt-growth-line inv-mkt-growth-line--animate"
            />
            {points.map((p, i) => {
              const n = points.length;
              const innerW = CHART.w - CHART.pad.l - CHART.pad.r;
              const x = CHART.pad.l + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
              const y = yToPx(p.value, CHART.pad);
              return (
                <g key={p.year}>
                  <circle cx={x} cy={y} r={4} className="inv-mkt-growth-dot" />
                  <text x={x} y={CHART.h - 10} className="inv-mkt-growth-x-tick">
                    {p.year}
                  </text>
                </g>
              );
            })}
          </svg>

          <p className="inv-mkt-growth-source">
            <strong>Source:</strong> {MARKET_GROWTH_META.source}
          </p>
        </div>

        <p className="inv-mkt-growth-disclaimer">{MARKET_GROWTH_META.disclaimer}</p>
      </div>
    </section>
  );
}
