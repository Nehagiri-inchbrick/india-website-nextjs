'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const CHART = { w: 720, h: 360, pad: { t: 50, r: 50, b: 65, l: 75 } };
const Y_MIN = 0;
const Y_TICKS = [0, 10, 20, 30, 40, 50, 60];

const BAR_COLORS = [
  { name: 'lime', fill: 'url(#projBarGradLime)', stroke: '#4d7c0f', badge: '#84cc16' },
  { name: 'blue', fill: 'url(#projBarGradBlue)', stroke: '#1d4ed8', badge: '#3b82f6' },
  { name: 'yellow', fill: 'url(#projBarGradYellow)', stroke: '#a16207', badge: '#eab308' },
  { name: 'pink', fill: 'url(#projBarGradPink)', stroke: '#be185d', badge: '#ec4899' },
];

function yToPx(value, pad, maxVal) {
  const innerH = CHART.h - pad.t - pad.b;
  const yMax = Math.max(60, Math.ceil((maxVal + 10) / 10) * 10);
  return pad.t + innerH - ((value - Y_MIN) / (yMax - Y_MIN)) * innerH;
}

export default function InvestorCityGrowthModal({ city, onClose }) {
  const [selectedProjectId, setSelectedProjectId] = useState(city?.topProjects?.[0]?.id || null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only runs client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (city) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [city]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const selectedProject = useMemo(() => {
    if (!city?.topProjects) return null;
    return city.topProjects.find((p) => p.id === selectedProjectId) || city.topProjects[0];
  }, [city, selectedProjectId]);

  if (!city || !selectedProject || !mounted) return null;

  // Build points for vertical bar chart over time for the single selected project
  // Price history points turned into compounded % growth from launch
  const initialPrice = selectedProject.priceHistory?.[0]?.price || 1.0;
  const points = (selectedProject.priceHistory || []).map((ph) => {
    const growth = Math.round(((ph.price - initialPrice) / initialPrice) * 100 * 10) / 10;
    return {
      year: ph.year,
      price: ph.price,
      value: growth,
    };
  });

  const maxVal = Math.max(...points.map((p) => p.value), 10);
  const yMax = Math.max(60, Math.ceil((maxVal + 10) / 10) * 10);
  const yTicksCalculated = [0, yMax * 0.2, yMax * 0.4, yMax * 0.6, yMax * 0.8, yMax].map((v) => Math.round(v));

  // Find index of highest growth bar
  const maxIdx = points.reduce((best, p, i) => (p.value > points[best].value ? i : best), 0);

  const innerW = CHART.w - CHART.pad.l - CHART.pad.r;
  const n = points.length;

  const modalContent = (
    <div
      className="inv-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inv-city-modal-title"
      style={{ position: 'fixed', inset: 0, zIndex: 999999 }}
    >
      <div className="inv-modal-container inv-single-proj-bar-modal">
        {/* Header with Project Selector Tabs */}
        <div className="inv-modal-header">
          <div>
            <span className="inv-city-modal-badge">{city.name} Project Spotlight</span>
            <h2 id="inv-city-modal-title" className="inv-modal-title">
              {selectedProject.name} <span className="inv-accent">Growth Chart</span>
            </h2>
          </div>
          <button
            type="button"
            className="inv-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>

        {/* Project Selector Pills */}
        <div className="inv-modal-project-pills" role="tablist">
          {city.topProjects.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === selectedProject.id}
              className={`inv-modal-proj-pill ${p.id === selectedProject.id ? 'is-active' : ''}`}
              onClick={() => setSelectedProjectId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* 1 to 2 Line Project Info */}
        <div className="inv-single-proj-info-strip">
          <div className="inv-single-proj-line">
            <i className="fas fa-building" aria-hidden="true" />
            <strong>{selectedProject.developer}</strong> • {selectedProject.location} • {selectedProject.unitType}
          </div>
          <div className="inv-single-proj-line">
            <i className="fas fa-chart-line" aria-hidden="true" />
            Launch Price: <strong>{selectedProject.launchPrice}</strong> ➔ Current Market Price: <strong className="inv-gold-txt">{selectedProject.currentPrice}</strong>
            <span className="inv-badge-growth-highlight">+{selectedProject.growthPct}% Total Appreciation</span>
          </div>
        </div>

        {/* Vertical SVG Bar Chart (Styled like 'How Has the Market Moved?') */}
        <div className="inv-single-proj-chart-wrap">
          {/* Y-Axis Label */}
          <div className="inv-svg-y-label">
            <i className="fas fa-arrow-up" aria-hidden="true" />
            Growth Rate (%)
          </div>

          <svg
            className="inv-single-proj-svg"
            viewBox={`0 0 ${CHART.w} ${CHART.h}`}
            role="img"
            aria-label={`${selectedProject.name} price growth bar chart`}
          >
            <defs>
              <linearGradient id="projBarGradLime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a3e635" />
                <stop offset="100%" stopColor="#65a30d" />
              </linearGradient>

              <linearGradient id="projBarGradBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>

              <linearGradient id="projBarGradYellow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>

              <linearGradient id="projBarGradPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>

              <linearGradient id="projBarGradGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>

              <marker
                id="redArrowModal"
                viewBox="0 0 10 10"
                refX="3"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 10 0 L 0 5 L 10 10 z" fill="#ef4444" />
              </marker>

              <marker
                id="yAxisArrowModal"
                viewBox="0 0 10 10"
                refX="5"
                refY="3"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 10 L 5 0 L 10 10 z" fill="#94a3b8" />
              </marker>

              <marker
                id="xAxisArrowModal"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Horizontal Grid lines */}
            {yTicksCalculated.map((tick) => {
              const py = yToPx(tick, CHART.pad, maxVal);
              return (
                <g key={`grid-modal-${tick}`}>
                  <line
                    x1={CHART.pad.l}
                    x2={CHART.w - CHART.pad.r}
                    y1={py}
                    y2={py}
                    stroke="rgba(15, 23, 42, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={CHART.pad.l - 12}
                    y={py + 4}
                    textAnchor="end"
                    fill="#64748b"
                    fontSize="11"
                    fontWeight="700"
                  >
                    {tick}%
                  </text>
                </g>
              );
            })}

            {/* Vertical Grid Lines */}
            {points.map((p, i) => {
              const colX = CHART.pad.l + (n === 1 ? innerW / 2 : ((i + 0.5) / n) * innerW);
              return (
                <line
                  key={`vgrid-modal-${p.year}`}
                  x1={colX}
                  x2={colX}
                  y1={CHART.pad.t - 10}
                  y2={CHART.h - CHART.pad.b}
                  stroke="rgba(15, 23, 42, 0.05)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Y-Axis Line */}
            <line
              x1={CHART.pad.l}
              y1={CHART.pad.t - 15}
              x2={CHART.pad.l}
              y2={CHART.h - CHART.pad.b}
              stroke="#64748b"
              strokeWidth="2"
              markerStart="url(#yAxisArrowModal)"
            />

            {/* X-Axis Line */}
            <line
              x1={CHART.pad.l}
              y1={CHART.h - CHART.pad.b}
              x2={CHART.w - CHART.pad.r + 15}
              y2={CHART.h - CHART.pad.b}
              stroke="#64748b"
              strokeWidth="2"
              markerEnd="url(#xAxisArrowModal)"
            />

            {/* Bars + Red Dotted Projection Lines */}
            {points.map((p, idx) => {
              const colCenter = CHART.pad.l + (n === 1 ? innerW / 2 : ((idx + 0.5) / n) * innerW);
              const barWidth = Math.min(64, Math.max(38, innerW / (n * 1.8)));
              const barX = colCenter - barWidth / 2;

              const topY = yToPx(p.value, CHART.pad, maxVal);
              const bottomY = CHART.h - CHART.pad.b;
              const barHeight = Math.max(6, bottomY - topY);

              const colorScheme = BAR_COLORS[idx % BAR_COLORS.length];
              const isHovered = hoveredIdx === idx;
              const isMax = idx === maxIdx;

              return (
                <g
                  key={`bar-single-${p.year}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Pulsing ring for max bar */}
                  {isMax && (
                    <rect
                      x={barX - 5}
                      y={topY - 5}
                      width={barWidth + 10}
                      height={barHeight + 5}
                      rx="8"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2.5"
                      className="inv-mkt-bar-blink"
                    />
                  )}

                  {/* Red Dotted Projection Line to Y-Axis */}
                  <line
                    x1={colCenter}
                    y1={topY}
                    x2={CHART.pad.l + 3}
                    y2={topY}
                    stroke="#ef4444"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                    markerEnd="url(#redArrowModal)"
                  />

                  {/* Bar rect */}
                  <rect
                    x={barX}
                    y={topY}
                    width={barWidth}
                    height={barHeight}
                    rx="4"
                    fill={isMax ? 'url(#projBarGradGold)' : colorScheme.fill}
                    stroke={isMax ? '#b8853b' : colorScheme.stroke}
                    strokeWidth={isMax ? '2.5' : '1.5'}
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      filter: isMax
                        ? 'drop-shadow(0 4px 12px rgba(212,175,55,0.4))'
                        : isHovered
                        ? 'brightness(1.08)'
                        : 'opacity(0.95)',
                    }}
                  />

                  {/* Crown badge above highest bar */}
                  {isMax && (
                    <g transform={`translate(${colCenter}, ${topY - 40})`}>
                      <rect x="-28" y="-12" width="56" height="20" rx="10" fill="#d4af37" />
                      <text x="0" y="2" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="900">
                        👑 HIGHEST
                      </text>
                    </g>
                  )}

                  {/* Growth Callout Badge on Top */}
                  <g transform={`translate(${colCenter}, ${isMax ? topY - 16 : topY - 12})`}>
                    <rect
                      x="-22"
                      y="-11"
                      width="44"
                      height="18"
                      rx="5"
                      fill={isMax ? '#d4af37' : '#0f172a'}
                      stroke={isMax ? '#0f172a' : colorScheme.badge}
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="2"
                      textAnchor="middle"
                      fill={isMax ? '#0f172a' : '#ffffff'}
                      fontSize="10"
                      fontWeight="800"
                    >
                      +{p.value}%
                    </text>
                  </g>

                  {/* X-Axis Year Label */}
                  <text
                    x={colCenter}
                    y={CHART.h - CHART.pad.b + 22}
                    textAnchor="middle"
                    fill={isMax ? '#92400e' : '#1e293b'}
                    fontSize={isMax ? '13' : '12'}
                    fontWeight={isMax ? '800' : '700'}
                  >
                    {p.year}
                  </text>

                  {/* Price under year */}
                  <text
                    x={colCenter}
                    y={CHART.h - CHART.pad.b + 38}
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="10"
                    fontWeight="600"
                  >
                    ₹{p.price} Cr
                  </text>
                </g>
              );
            })}
          </svg>

          {/* X-Axis Label */}
          <div className="inv-svg-x-label">
            Timeline (Years)
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
