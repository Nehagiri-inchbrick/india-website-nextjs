'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

const HIGH_DEMAND_PROPERTIES = [
  {
    id: 1,
    title: 'Luxury Apartments',
    location: 'Bengaluru | Whitefield',
    tag: 'Selling Fast',
    tagType: 'red',
    yield: '4.8%',
    appreciation: '+32%',
    entryPrice: '₹16,500/sq.ft',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    fiveYearGrowth: '+31%',
    avgPrice: '₹13,800/sq.ft',
    chartSeries: [7500, 9800, 11200, 10800, 15000],
    href: '/listings?city=bangalore',
  },
  {
    id: 2,
    title: 'Villas',
    location: 'Pune | Hinjewadi',
    tag: 'Hotspot',
    tagType: 'navy',
    yield: '4.5%',
    appreciation: '+28%',
    entryPrice: '₹12,000/sq.ft',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    fiveYearGrowth: '+28%',
    avgPrice: '₹11,500/sq.ft',
    chartSeries: [6800, 8500, 9800, 10200, 13500],
    href: '/listings?city=pune',
  },
  {
    id: 3,
    title: 'High-rise Residences',
    location: 'Mumbai | Andheri East',
    tag: 'High Demand',
    tagType: 'red',
    yield: '4.3%',
    appreciation: '+26%',
    entryPrice: '₹18,500/sq.ft',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    fiveYearGrowth: '+35%',
    avgPrice: '₹16,200/sq.ft',
    chartSeries: [9000, 11500, 13200, 14800, 18500],
    href: '/listings?city=mumbai',
  },
  {
    id: 4,
    title: 'Golf Course Condos',
    location: 'Gurugram | Sector 54',
    tag: 'Prime',
    tagType: 'navy',
    yield: '4.1%',
    appreciation: '+24%',
    entryPrice: '₹15,200/sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    fiveYearGrowth: '+30%',
    avgPrice: '₹14,000/sq.ft',
    chartSeries: [8200, 10000, 11500, 12800, 15200],
    href: '/listings?city=gurgaon',
  },
];

const CHART_YEARS = ['2020', '2021', '2022', '2023', '2024'];

export default function InvestorTopProjectsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeTimeframe, setActiveTimeframe] = useState('5Y');

  const visibleCards = useMemo(() => {
    const card1 = HIGH_DEMAND_PROPERTIES[slideIndex % HIGH_DEMAND_PROPERTIES.length];
    const card2 = HIGH_DEMAND_PROPERTIES[(slideIndex + 1) % HIGH_DEMAND_PROPERTIES.length];
    return [card1, card2];
  }, [slideIndex]);

  const activeProperty = visibleCards[0];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? HIGH_DEMAND_PROPERTIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % HIGH_DEMAND_PROPERTIES.length);
  };

  // SVG Chart points calculation
  const width = 280;
  const height = 150;
  const padL = 30;
  const padR = 15;
  const padT = 15;
  const padB = 25;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const yMin = 0;
  const yMax = 20000;

  const chartPoints = useMemo(() => {
    const pts = activeProperty.chartSeries.map((val, idx) => {
      const x = padL + (idx / (CHART_YEARS.length - 1)) * innerW;
      const y = padT + innerH - ((val - yMin) / (yMax - yMin)) * innerH;
      return { x, y, val };
    });
    const lineString = pts.map((p) => `${p.x},${p.y}`).join(' ');
    const areaString = `${padL},${padT + innerH} ${lineString} ${width - padR},${padT + innerH}`;
    return { pts, lineString, areaString };
  }, [activeProperty, innerW, innerH]);

  return (
    <section className="inv-demand-sec-root" id="top-projects">
      <div className="inv-demand-container">

        {/* Header Row */}
        <div className="inv-demand-header">
          <div className="inv-demand-header-left">
            <div className="inv-demand-eyebrow">
              TOP CITIES &amp; AREAS
            </div>
            <h2 className="inv-demand-title">High demand today — and what to explore next</h2>
            <p className="inv-demand-subtitle">
              Curated properties with strong fundamentals, rental demand and growth potential.
            </p>
          </div>

          <div className="inv-demand-header-right">
            <div className="inv-pills-group">
              {['1Y', '3Y', '5Y'].map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`inv-pill-btn ${activeTimeframe === t ? 'is-active-red' : ''}`}
                  onClick={() => setActiveTimeframe(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <Link href="/listings" className="inv-demand-explore-link">
              Explore All Properties &rarr;
            </Link>
          </div>
        </div>

        {/* 2 Main Columns Layout with Side Arrow Controls */}
        <div className="inv-demand-main-stage">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="inv-slider-arrow inv-slider-arrow--prev"
            onClick={handlePrev}
            title="Previous properties"
          >
            &#8249;
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="inv-slider-arrow inv-slider-arrow--next"
            onClick={handleNext}
            title="Next properties"
          >
            &#8250;
          </button>

          <div className="inv-demand-grid">

            {/* Left 2 Cards Slider */}
            <div className="inv-demand-cards-col">
              <div className="inv-demand-cards-pair">
                {visibleCards.map((card) => (
                  <article key={card.id} className="inv-demand-card">
                    <div className="inv-demand-card-media">
                      <img src={card.image} alt={card.title} className="inv-demand-card-img" />
                      <span className={`inv-demand-card-badge inv-demand-card-badge--${card.tagType}`}>
                        {card.tag}
                      </span>
                    </div>

                    <div className="inv-demand-card-body">
                      <h3 className="inv-demand-card-title">{card.title}</h3>
                      <p className="inv-demand-card-location">{card.location}</p>

                      <div className="inv-demand-card-metrics">
                        <div className="inv-demand-metric">
                          <span className="inv-demand-metric-lbl">
                            <span className="inv-metric-icon">&#8962;</span> Yield
                          </span>
                          <strong className="inv-demand-metric-val">{card.yield}</strong>
                        </div>

                        <div className="inv-demand-metric">
                          <span className="inv-demand-metric-lbl">
                            <span className="inv-metric-icon">&#8679;</span> Appreciation
                          </span>
                          <strong className="inv-demand-metric-val">{card.appreciation}</strong>
                        </div>

                        <div className="inv-demand-metric">
                          <span className="inv-demand-metric-lbl">Entry Price</span>
                          <strong className="inv-demand-metric-val inv-demand-metric-val--price">
                            {card.entryPrice}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Market Trend Chart Box */}
            <div className="inv-demand-chart-card">
              <h3 className="inv-demand-chart-title">Average Property Price (₹/sq.ft)</h3>

              <div className="inv-demand-chart-split">

                {/* SVG Area Chart */}
                <div className="inv-demand-chart-area">
                  <svg viewBox={`0 0 ${width} ${height}`} className="inv-demand-svg">
                    <defs>
                      <linearGradient id="redAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Y Axis Grid Lines */}
                    {[15000, 10000, 5000, 0].map((tick) => {
                      const y = padT + innerH - ((tick - yMin) / (yMax - yMin)) * innerH;
                      return (
                        <g key={tick}>
                          <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                          <text x={padL - 6} y={y + 3} className="inv-chart-y-text">
                            {tick >= 1000 ? `${tick / 1000}K` : tick}
                          </text>
                        </g>
                      );
                    })}

                    {/* Area Gradient Fill */}
                    <polygon points={chartPoints.areaString} fill="url(#redAreaGrad)" />

                    {/* Polyline */}
                    <polyline
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={chartPoints.lineString}
                    />

                    {/* Dots */}
                    {chartPoints.pts.map((pt, pIdx) => (
                      <circle
                        key={pIdx}
                        cx={pt.x}
                        cy={pt.y}
                        r="3.5"
                        fill="#ffffff"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />
                    ))}

                    {/* X Axis Labels */}
                    {CHART_YEARS.map((year, idx) => {
                      const x = padL + (idx / (CHART_YEARS.length - 1)) * innerW;
                      return (
                        <text key={year} x={x} y={height - 6} className="inv-chart-x-text">
                          {year}
                        </text>
                      );
                    })}
                  </svg>
                </div>

                {/* Right Highlight Metrics */}
                <div className="inv-demand-highlights">
                  <div className="inv-demand-highlight-box">
                    <span className="inv-highlight-icon-bg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8853b" strokeWidth="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    </span>
                    <div className="inv-highlight-content">
                      <span className="inv-highlight-lbl">{activeTimeframe} Growth</span>
                      <strong className="inv-highlight-val">{activeProperty.fiveYearGrowth}</strong>
                    </div>
                  </div>

                  <div className="inv-demand-highlight-box">
                    <span className="inv-highlight-icon-bg">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8853b" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <div className="inv-highlight-content">
                      <span className="inv-highlight-lbl">Avg. Price (2024)</span>
                      <strong className="inv-highlight-val inv-highlight-val--price">
                        {activeProperty.avgPrice}
                      </strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
