'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { INVESTMENT_HOTSPOTS, INV_COMPARE_CITY_EVENT } from './investor-landing-data';

const FLOW_IDS = ['gurgaon', 'noida', 'mumbai', 'bangalore', 'pune', 'hyderabad', 'dubai'];

export default function InvestorHotspotsSection() {
  const [activeId, setActiveId] = useState('gurgaon');

  useEffect(() => {
    const onCompare = (event) => {
      const ids = event.detail?.ids;
      if (Array.isArray(ids) && ids[0]) {
        setActiveId(ids[0]);
      }
    };
    window.addEventListener(INV_COMPARE_CITY_EVENT, onCompare);
    return () => window.removeEventListener(INV_COMPARE_CITY_EVENT, onCompare);
  }, []);

  const active = useMemo(
    () => INVESTMENT_HOTSPOTS.find((h) => h.id === activeId) || INVESTMENT_HOTSPOTS[0],
    [activeId]
  );

  const flowPoints = useMemo(() => {
    return FLOW_IDS.map((id) => {
      const h = INVESTMENT_HOTSPOTS.find((x) => x.id === id);
      return h ? `${h.mapX},${h.mapY}` : '';
    })
      .filter(Boolean)
      .join(' ');
  }, []);

  return (
    <section className="inv-hotspots inv-reveal" id="hotspots" aria-labelledby="inv-hotspots-title">
      <div className="inv-wrap">
        <header className="inv-hotspots-head">
          <p className="inv-mock-eyebrow inv-hotspots-eyebrow">Investment Hotspots</p>
          <h2 id="inv-hotspots-title">Where Smart Money Is Moving</h2>
          <p className="inv-hotspots-lead">
            Follow capital flows across India&apos;s top corridors — then into Dubai. Select a glowing market to
            see what investors are targeting.
          </p>
        </header>

        <div className="inv-hotspots-stage">
          <div className="inv-hotspots-map-wrap">
            <svg
              className="inv-hotspots-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="invHotGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#f2d6a2" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.35" />
                </linearGradient>
                <filter id="invHotBlur">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <ellipse cx="34" cy="48" rx="28" ry="32" className="inv-hotspots-land" />
              <ellipse cx="84" cy="40" rx="8" ry="6" className="inv-hotspots-uae" />
              <polyline
                points={flowPoints}
                className="inv-hotspots-flow"
                fill="none"
                stroke="url(#invHotGlow)"
                strokeWidth="0.45"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#invHotBlur)"
              />
            </svg>

            <div className="inv-hotspots-pins" role="tablist" aria-label="Investment hotspots">
              {INVESTMENT_HOTSPOTS.map((spot) => {
                const isActive = spot.id === activeId;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="inv-hotspot-panel"
                    id={`inv-hotspot-tab-${spot.id}`}
                    className={`inv-hotspots-pin${isActive ? ' is-active' : ''}${spot.region === 'uae' ? ' inv-hotspots-pin--uae' : ''}`}
                    style={{ left: `${spot.mapX}%`, top: `${spot.mapY}%` }}
                    onClick={() => setActiveId(spot.id)}
                  >
                    <span className="inv-hotspots-pin-dot">
                      <span className="inv-hotspots-pin-pulse" aria-hidden="true" />
                      <span className="inv-hotspots-pin-core" aria-hidden="true" />
                    </span>
                    <span className="inv-hotspots-pin-label">{spot.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside
            className="inv-hotspots-panel"
            id="inv-hotspot-panel"
            role="tabpanel"
            aria-labelledby={`inv-hotspot-tab-${active.id}`}
          >
            <p className="inv-hotspots-panel-kicker">Now viewing</p>
            <h3>{active.name}</h3>
            <p className="inv-hotspots-panel-primary">{active.primary}</p>
            <p className="inv-hotspots-panel-corridor">{active.corridor}</p>
            <Link href={active.href} className="inv-hotspots-panel-cta">
              Explore Opportunities
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>

        <p className="inv-hotspots-route" aria-hidden="true">
          {FLOW_IDS.map((id) => INVESTMENT_HOTSPOTS.find((h) => h.id === id)?.name)
            .filter(Boolean)
            .join(' → ')}
        </p>
      </div>
    </section>
  );
}
