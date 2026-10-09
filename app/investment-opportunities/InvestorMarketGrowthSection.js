'use client';

import { useMemo, useState } from 'react';
import {
  MARKET_GROWTH_META,
  MARKET_GROWTH_PERIOD_SLICE,
  MARKET_GROWTH_PERIODS,
  MARKET_GROWTH_SERIES,
  MARKET_GROWTH_TYPES,
  MARKET_GROWTH_YEARS,
} from './investor-landing-data';

const CHART = { w: 860, h: 440, pad: { t: 50, r: 60, b: 75, l: 85 } };
const Y_MIN = 0;
const Y_MAX = 20;
const Y_TICKS = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const BAR_COLORS = [
  { name: 'lime', fill: 'url(#barGradLime)', stroke: '#4d7c0f', badge: '#84cc16' },
  { name: 'blue', fill: 'url(#barGradBlue)', stroke: '#1d4ed8', badge: '#3b82f6' },
  { name: 'yellow', fill: 'url(#barGradYellow)', stroke: '#a16207', badge: '#eab308' },
  { name: 'pink', fill: 'url(#barGradPink)', stroke: '#be185d', badge: '#ec4899' },
  { name: 'purple', fill: 'url(#barGradPurple)', stroke: '#6b21a8', badge: '#a855f7' },
];

function yToPx(value, pad) {
  const innerH = CHART.h - pad.t - pad.b;
  return pad.t + innerH - ((value - Y_MIN) / (Y_MAX - Y_MIN)) * innerH;
}

export default function InvestorMarketGrowthSection() {
  const [period, setPeriod] = useState('5y');
  const [assetType, setAssetType] = useState('residential');
  const [selectedYear, setSelectedYear] = useState('all');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const points = useMemo(() => {
    const full = MARKET_GROWTH_SERIES[assetType] ?? MARKET_GROWTH_SERIES.residential;
    let series = full;
    if (selectedYear !== 'all') {
      const endIdx = full.findIndex((p) => p.year === selectedYear);
      series = endIdx >= 0 ? full.slice(0, endIdx + 1) : full;
    }
    const count = MARKET_GROWTH_PERIOD_SLICE[period] ?? series.length;
    return series.slice(-Math.min(count, series.length));
  }, [period, assetType, selectedYear]);

  const maxIdx = useMemo(() => {
    if (points.length === 0) return -1;
    let best = 0;
    points.forEach((p, i) => {
      if (p.value > points[best].value) best = i;
    });
    return best;
  }, [points]);

  const focusIdx = useMemo(() => {
    if (selectedYear === 'all') return maxIdx;
    const idx = points.findIndex((p) => p.year === selectedYear);
    return idx >= 0 ? idx : maxIdx;
  }, [points, selectedYear, maxIdx]);

  const activeTypeLabel = MARKET_GROWTH_TYPES.find((t) => t.id === assetType)?.label ?? 'Residential';
  const focusPoint = points[focusIdx] ?? points[points.length - 1];
  const latestVal = focusPoint?.value ?? 0;
  const firstVal = points.length > 0 ? points[0].value : 0;
  const growthChange = (latestVal - firstVal).toFixed(1);
  const yearLabel = selectedYear === 'all' ? 'Latest' : selectedYear;

  const innerW = CHART.w - CHART.pad.l - CHART.pad.r;
  const innerH = CHART.h - CHART.pad.t - CHART.pad.b;
  const n = points.length;

  return (
    <section
      className="inv-mkt-growth inv-creative inv-creative--chart inv-land-block inv-reveal"
      id="market-growth"
      aria-labelledby="inv-mkt-growth-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        {/* Section Header */}
        <header className="inv-mkt-growth-head inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Market Growth</p>
          <h2 id="inv-mkt-growth-title">How Has the Market Moved?</h2>
          <p className="inv-mkt-growth-lead">
            Track verified historical price momentum by asset class — switch horizon and segment to see how growth
            has compounded, not just where it stands today.
          </p>
        </header>

        {/* Controls Row */}
        <div className="inv-mkt-growth-controls">
          <div className="inv-mkt-growth-year-wrap">
            <span className="inv-mkt-growth-year-label" id="inv-mkt-growth-year-label">
              Year
            </span>
            <div
              className="inv-mkt-growth-years"
              role="tablist"
              aria-labelledby="inv-mkt-growth-year-label"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedYear === 'all'}
                className={`inv-mkt-growth-year-btn${selectedYear === 'all' ? ' is-active' : ''}`}
                onClick={() => setSelectedYear('all')}
              >
                All
              </button>
              {MARKET_GROWTH_YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  role="tab"
                  aria-selected={selectedYear === y}
                  className={`inv-mkt-growth-year-btn${selectedYear === y ? ' is-active' : ''}`}
                  onClick={() => setSelectedYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="inv-mkt-growth-period-select">
              <label htmlFor="inv-mkt-growth-period" className="inv-sr-only">
                Time horizon
              </label>
              <select
                id="inv-mkt-growth-period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                aria-label="Select time horizon"
              >
                {MARKET_GROWTH_PERIODS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
              <i className="fas fa-chevron-down" aria-hidden="true" />
            </div>
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

        {/* Main Chart Container */}
        <div className="inv-mkt-growth-chart-card inv-mkt-growth-chart-card--grid">
          
          {/* Header Bar */}
          <div className="inv-mkt-growth-chart-top">
            <div>
              <h3>{MARKET_GROWTH_META.chartTitle}</h3>
              <p>
                {activeTypeLabel} · {MARKET_GROWTH_META.geography}
                {selectedYear !== 'all' ? ` · Through ${selectedYear}` : ''}
              </p>
            </div>
            <div className="inv-mkt-growth-stat-pills">
              <div className="inv-mkt-stat-badge">
                <span className="inv-mkt-stat-label">{yearLabel} YoY Growth</span>
                <strong className="inv-mkt-stat-val">+{latestVal}%</strong>
              </div>
              <div className="inv-mkt-stat-badge">
                <span className="inv-mkt-stat-label">Period Gain</span>
                <strong className="inv-mkt-stat-val inv-mkt-stat-val--gold">
                  {Number(growthChange) >= 0 ? `+${growthChange}%` : `${growthChange}%`}
                </strong>
              </div>
            </div>
          </div>

          {/* SVG Bar Chart with Grid & Dotted Projection Lines */}
          <div className="inv-mkt-chart-svg-wrap" style={{ position: 'relative' }}>
            
            {/* Y-Axis Title on the Left with Up Arrow */}
            <div
              style={{
                position: 'absolute',
                left: '12px',
                top: '48%',
                transform: 'translateY(-50%) rotate(-90%)',
                transformOrigin: 'center',
                fontSize: '0.78rem',
                fontWeight: '700',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              <i className="fas fa-arrow-up" style={{ color: '#475569' }} />
              Growth Rate (%)
            </div>

            <svg
              className="inv-mkt-growth-chart"
              viewBox={`0 0 ${CHART.w} ${CHART.h}`}
              role="img"
              aria-label={`${activeTypeLabel} market growth bar chart`}
            >
              <defs>
                {/* Bar Gradients */}
                <linearGradient id="barGradLime" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="100%" stopColor="#65a30d" />
                </linearGradient>

                <linearGradient id="barGradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>

                <linearGradient id="barGradYellow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </linearGradient>

                <linearGradient id="barGradPink" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#db2777" />
                </linearGradient>

                <linearGradient id="barGradPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>

                {/* Gold gradient for highest bar */}
                <linearGradient id="barGradGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#92400e" />
                </linearGradient>

                {/* Red Arrow Head for Projection Dotted Lines */}
                <marker
                  id="redArrow"
                  viewBox="0 0 10 10"
                  refX="3"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 10 0 L 0 5 L 10 10 z" fill="#ef4444" />
                </marker>

                {/* Main Y-Axis Up Arrowhead */}
                <marker
                  id="yAxisArrow"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="3"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto"
                >
                  <path d="M 0 10 L 5 0 L 10 10 z" fill="#334155" />
                </marker>

                {/* Main X-Axis Right Arrowhead */}
                <marker
                  id="xAxisArrow"
                  viewBox="0 0 10 10"
                  refX="7"
                  refY="5"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
                </marker>
              </defs>

              {/* Grid Background Matrix Lines */}
              {Y_TICKS.map((tick) => {
                const py = yToPx(tick, CHART.pad);
                return (
                  <g key={`grid-${tick}`}>
                    <line
                      x1={CHART.pad.l}
                      x2={CHART.w - CHART.pad.r + 15}
                      y1={py}
                      y2={py}
                      stroke="#e2e8f0"
                      strokeWidth="1.2"
                    />
                    <text
                      x={CHART.pad.l - 12}
                      y={py + 4}
                      textAnchor="end"
                      fill="#475569"
                      fontSize="12"
                      fontWeight="700"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}

              {/* Vertical Grid Lines for each column */}
              {points.map((p, i) => {
                const colX = CHART.pad.l + (n === 1 ? innerW / 2 : ((i + 0.5) / n) * innerW);
                return (
                  <line
                    key={`vgrid-${p.year}`}
                    x1={colX}
                    x2={colX}
                    y1={CHART.pad.t - 10}
                    y2={CHART.h - CHART.pad.b}
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                );
              })}

              {/* Main Y-Axis Solid Line with Arrow */}
              <line
                x1={CHART.pad.l}
                y1={CHART.pad.t - 18}
                x2={CHART.pad.l}
                y2={CHART.h - CHART.pad.b}
                stroke="#334155"
                strokeWidth="2.5"
                markerStart="url(#yAxisArrow)"
              />

              {/* Main X-Axis Solid Line with Arrow */}
              <line
                x1={CHART.pad.l}
                y1={CHART.h - CHART.pad.b}
                x2={CHART.w - CHART.pad.r + 20}
                y2={CHART.h - CHART.pad.b}
                stroke="#334155"
                strokeWidth="2.5"
                markerEnd="url(#xAxisArrow)"
              />

              {/* Bars + Red Dotted Projection Lines */}
              {points.map((p, idx) => {
                const colCenter = CHART.pad.l + (n === 1 ? innerW / 2 : ((idx + 0.5) / n) * innerW);
                const barWidth = Math.min(68, Math.max(42, innerW / (n * 1.8)));
                const barX = colCenter - barWidth / 2;

                const topY = yToPx(p.value, CHART.pad);
                const bottomY = CHART.h - CHART.pad.b;
                const barHeight = Math.max(4, bottomY - topY);

                const colorScheme = BAR_COLORS[idx % BAR_COLORS.length];
                const isHovered = hoveredIdx === idx;
                const isMax = idx === focusIdx;
                const dimOthers = selectedYear !== 'all' && !isMax;

                return (
                  <g
                    key={`bar-group-${p.year}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{ cursor: 'pointer', opacity: dimOthers ? 0.45 : 1 }}
                  >
                    {/* Pulsing glow ring for the top bar */}
                    {isMax && (
                      <rect
                        x={barX - 6}
                        y={topY - 6}
                        width={barWidth + 12}
                        height={barHeight + 6}
                        rx="8"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="2.5"
                        className="inv-mkt-bar-blink"
                      />
                    )}

                    {/* Red Dotted Projection Line from Top of Bar to Y-Axis */}
                    <line
                      x1={colCenter}
                      y1={topY}
                      x2={CHART.pad.l + 3}
                      y2={topY}
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                      markerEnd="url(#redArrow)"
                    />

                    {/* Vertical Colored Bar */}
                    <rect
                      x={barX}
                      y={topY}
                      width={barWidth}
                      height={barHeight}
                      rx="4"
                      fill={isMax ? 'url(#barGradGold)' : colorScheme.fill}
                      stroke={isMax ? '#b8853b' : colorScheme.stroke}
                      strokeWidth={isMax ? '2.5' : '1.5'}
                      style={{
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformOrigin: `${colCenter}px ${bottomY}px`,
                        filter: isMax
                          ? 'drop-shadow(0 0 12px rgba(212,175,55,0.8)) drop-shadow(0 6px 18px rgba(0,0,0,0.25))'
                          : isHovered
                          ? 'brightness(1.1) drop-shadow(0 6px 12px rgba(0,0,0,0.15))'
                          : 'opacity(0.88)',
                      }}
                    />

                    {/* Crown badge above the top bar */}
                    {isMax && (
                      <g transform={`translate(${colCenter}, ${topY - 44})`}>
                        <rect x="-30" y="-14" width="60" height="22" rx="11" fill="#d4af37" />
                        <text x="0" y="3" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">
                          👑 BEST
                        </text>
                      </g>
                    )}

                    {/* Exact Percentage Callout Badge on Top of Bar */}
                    <g transform={`translate(${colCenter}, ${isMax ? topY - 18 : topY - 14})`}>
                      <rect
                        x="-24"
                        y="-12"
                        width="48"
                        height="20"
                        rx="6"
                        fill={isMax ? '#d4af37' : '#0f172a'}
                        stroke={isMax ? '#0f172a' : colorScheme.badge}
                        strokeWidth="1.5"
                      />
                      <text
                        x="0"
                        y="2"
                        textAnchor="middle"
                        fill={isMax ? '#0f172a' : '#ffffff'}
                        fontSize="11"
                        fontWeight="800"
                      >
                        {p.value}%
                      </text>
                    </g>

                    {/* X-Axis Category Name Below Bar */}
                    <text
                      x={colCenter}
                      y={CHART.h - CHART.pad.b + 24}
                      textAnchor="middle"
                      fill={isMax ? '#b8853b' : '#0f172a'}
                      fontSize={isMax ? '14' : '13'}
                      fontWeight={isMax ? '800' : '700'}
                    >
                      {p.year}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* X-Axis Label at Bottom with Right Arrow */}
            <div
              style={{
                textAlign: 'center',
                marginTop: '0.4rem',
                fontSize: '0.825rem',
                fontWeight: '700',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              Timeline (Years)
              <i className="fas fa-arrow-right" style={{ color: '#475569' }} />
            </div>
          </div>

          <p className="inv-mkt-growth-source">
            <strong>Source:</strong> {MARKET_GROWTH_META.source}
          </p>
        </div>

        <p className="inv-mkt-growth-disclaimer">{MARKET_GROWTH_META.disclaimer}</p>
      </div>
    </section>
  );
}
