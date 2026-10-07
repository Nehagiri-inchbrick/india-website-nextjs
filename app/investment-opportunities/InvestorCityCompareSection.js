'use client';

import { useCallback, useMemo, useRef, useState } from 'react';

const ALL_CITIES = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    tag: 'Top Performer',
    tagType: 'performer',
    price: '₹8,500/sq.ft',
    priceVal: 8500,
    yield: '4.8%',
    growth: '+32%',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    chartColor: '#f97316',
    series: [7500, 9200, 12000, 14800, 17500],
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    tag: 'High Demand',
    tagType: 'demand',
    price: '₹14,500/sq.ft',
    priceVal: 14500,
    yield: '4.2%',
    growth: '+28%',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    chartColor: '#22c55e',
    series: [6500, 8000, 10500, 12500, 15000],
  },
  {
    id: 'pune',
    name: 'Pune',
    tag: 'Steady Growth',
    tagType: 'growth',
    price: '₹7,800/sq.ft',
    priceVal: 7800,
    yield: '4.5%',
    growth: '+26%',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    chartColor: '#06b6d4',
    series: [5500, 7200, 9000, 11000, 13000],
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi NCR',
    tag: 'Prime Location',
    tagType: 'location',
    price: '₹10,500/sq.ft',
    priceVal: 10500,
    yield: '4.1%',
    growth: '+24%',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    chartColor: '#818cf8',
    series: [4800, 6000, 7800, 9200, 11000],
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    tag: 'IT Corridor',
    tagType: 'growth',
    price: '₹6,800/sq.ft',
    priceVal: 6800,
    yield: '4.6%',
    growth: '+29%',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    chartColor: '#eab308',
    series: [4200, 5500, 7200, 8800, 10500],
  },
  {
    id: 'chennai',
    name: 'Chennai',
    tag: 'Stable Yield',
    tagType: 'demand',
    price: '₹7,200/sq.ft',
    priceVal: 7200,
    yield: '4.3%',
    growth: '+22%',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    chartColor: '#ec4899',
    series: [4000, 5200, 6800, 8200, 9800],
  },
];

const CHART_YEARS = ['2020', '2021', '2022', '2023', '2024'];
const Y_TICKS = [20000, 15000, 10000, 5000, 0];

export default function InvestorCityCompareSection() {
  const [selectedCompare, setSelectedCompare] = useState(['bengaluru', 'mumbai', 'pune']);
  const [activeTimeframe, setActiveTimeframe] = useState('1Y');
  const [cityFilter, setCityFilter] = useState('all');
  const [hoveredYearIdx, setHoveredYearIdx] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const cardsViewportRef = useRef(null);

  const scrollCards = useCallback((direction) => {
    const viewport = cardsViewportRef.current;
    if (!viewport) return;
    // Scroll by one full page of visible cards (3 on desktop, fewer on smaller screens)
    viewport.scrollBy({ left: direction * viewport.clientWidth, behavior: 'smooth' });
  }, []);

  // Handle city selection change in the Compare widget
  const handleRemoveCity = (cityId) => {
    if (selectedCompare.length <= 1) return;
    setSelectedCompare(selectedCompare.filter((id) => id !== cityId));
  };

  const handleAddCity = (cityId) => {
    if (selectedCompare.includes(cityId) || selectedCompare.length >= 3) return;
    setSelectedCompare([...selectedCompare, cityId]);
  };

  // Filter series for the chart
  const displayedCities = useMemo(() => {
    if (cityFilter === 'all') return ALL_CITIES;
    return ALL_CITIES.filter((c) => c.id === cityFilter);
  }, [cityFilter]);

  // Geometry calculation for SVG multi-line chart
  const width = 540;
  const height = 230;
  const padL = 40;
  const padR = 20;
  const padT = 20;
  const padB = 30;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const yMin = 0;
  const yMax = 20000;

  const chartLines = useMemo(() => {
    return displayedCities.map((city) => {
      const pts = city.series.map((val, idx) => {
        const x = padL + (idx / (CHART_YEARS.length - 1)) * innerW;
        const y = padT + innerH - ((val - yMin) / (yMax - yMin)) * innerH;
        return { x, y, val };
      });
      const pointsString = pts.map((p) => `${p.x},${p.y}`).join(' ');
      return {
        ...city,
        pts,
        pointsString,
      };
    });
  }, [displayedCities, innerW, innerH]);

  return (
    <section className="inv-compare-sec-root" id="city-compare">
      <div className="inv-compare-container">

        {/* ============================================================ */}
        {/* SECTION 1: COMPARE TOP CITIES                                */}
        {/* ============================================================ */}
        <div className="inv-compare-top-block">

          {/* Section Header */}
          <div className="inv-compare-header-row">
            <div className="inv-compare-header-left">
              <div className="inv-compare-eyebrow">
                <span className="inv-compare-icon-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18M3 7l9-4 9 4M3 7l3 9a3 3 0 0 0 6 0L9 7M15 7l3 9a3 3 0 0 0 6 0l-3-9" />
                  </svg>
                </span>
                CITY COMPARISON
              </div>
              <h2 className="inv-compare-title">Compare Top Cities</h2>
              <p className="inv-compare-subtitle">
                Explore how India&apos;s top cities stack up — from pricing to rental yields and long-term growth potential.
              </p>
            </div>

            <div className="inv-compare-header-right">
              <button
                type="button"
                className="inv-compare-btn-outline"
                onClick={() => setShowModal(true)}
              >
                View Full Comparison &rarr;
              </button>
            </div>
          </div>

          {/* Cards & Widget Row */}
          <div className="inv-compare-main-grid">

            {/* City cards slider — 3 visible per row */}
            <div className="inv-compare-cards-slider">
              <button
                type="button"
                className="inv-compare-cards-nav-btn inv-compare-cards-nav-btn--prev"
                aria-label="Previous cities"
                onClick={() => scrollCards(-1)}
              >
                <i className="fas fa-chevron-left" aria-hidden="true" />
              </button>

              <div
                className="inv-compare-cards-viewport"
                ref={cardsViewportRef}
                tabIndex={0}
              >
                <div
                  className="inv-compare-cards-track"
                  role="list"
                  aria-label="Top cities to compare"
                >
                  {ALL_CITIES.map((city) => (
                    <div key={city.id} className="inv-compare-card-slide" role="listitem">
                      <div className="inv-city-card">
                        <div className="inv-city-card-img-wrap">
                          <img src={city.image} alt={city.name} className="inv-city-card-img" />
                          <button type="button" className="inv-city-card-icon-btn" title="View details">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          </button>
                        </div>

                        <div className="inv-city-card-content">
                          <div className="inv-city-card-top">
                            <h3 className="inv-city-card-name">{city.name}</h3>
                            <span className={`inv-city-tag inv-city-tag--${city.tagType}`}>
                              {city.tag}
                            </span>
                          </div>

                          <div className="inv-city-card-metrics">
                            <div className="inv-city-metric">
                              <span className="inv-metric-lbl">Avg. Property Price</span>
                              <strong className="inv-metric-val">{city.price}</strong>
                            </div>
                            <div className="inv-city-metric">
                              <span className="inv-metric-lbl">Rental Yield</span>
                              <strong className="inv-metric-val">{city.yield}</strong>
                            </div>
                            <div className="inv-city-metric">
                              <span className="inv-metric-lbl">Growth (3Y)</span>
                              <strong className="inv-metric-val inv-metric-val--growth">{city.growth}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="inv-compare-cards-nav-btn inv-compare-cards-nav-btn--next"
                aria-label="Next cities"
                onClick={() => scrollCards(1)}
              >
                <i className="fas fa-chevron-right" aria-hidden="true" />
              </button>
            </div>

            {/* Right Compare Widget Box */}
            <div className="inv-compare-widget-card">
              <div className="inv-widget-head">
                <span className="inv-widget-icon-bg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18M3 7l9-4 9 4M3 7l3 9a3 3 0 0 0 6 0L9 7M15 7l3 9a3 3 0 0 0 6 0l-3-9" />
                  </svg>
                </span>
                <div>
                  <h3 className="inv-widget-title">Compare Cities</h3>
                  <p className="inv-widget-sub">Select up to 3 cities to compare key metrics side by side.</p>
                </div>
              </div>

              <div className="inv-widget-selects">
                {[0, 1, 2].map((slotIdx) => {
                  const currentCityId = selectedCompare[slotIdx];
                  const currentCity = ALL_CITIES.find((c) => c.id === currentCityId);
                  return (
                    <div key={slotIdx} className="inv-widget-select-field">
                      {currentCity ? (
                        <div className="inv-widget-tag-pill">
                          <span>{currentCity.name}</span>
                          <button
                            type="button"
                            className="inv-widget-tag-remove"
                            onClick={() => handleRemoveCity(currentCity.id)}
                            title="Remove city"
                          >
                            &times;
                          </button>
                        </div>
                      ) : (
                        <select
                          className="inv-widget-dropdown"
                          value=""
                          onChange={(e) => handleAddCity(e.target.value)}
                        >
                          <option value="" disabled>Select a city...</option>
                          {ALL_CITIES.filter((c) => !selectedCompare.includes(c.id)).map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      )}
                      <span className="inv-widget-arrow">&#9662;</span>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="inv-widget-btn-primary"
                onClick={() => setShowModal(true)}
              >
                Compare Now &rarr;
              </button>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: MARKET TRENDS & INSIGHTS                          */}
        {/* ============================================================ */}
        <div className="inv-trends-block">

          {/* Header Row */}
          <div className="inv-trends-header">
            <div className="inv-trends-header-left">
              <div className="inv-trends-eyebrow">
                <span className="inv-trends-icon-badge">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                Market Trends &amp; Insights
              </div>
              <p className="inv-trends-subtitle">
                Stay ahead with the latest market data, price trends and expert insights.
              </p>
            </div>

            <div className="inv-trends-controls">
              <div className="inv-pills-group" role="tablist">
                {['1Y', '3Y', '5Y'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`inv-pill-btn ${activeTimeframe === t ? 'is-active' : ''}`}
                    onClick={() => setActiveTimeframe(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="inv-trends-select-wrap">
                <select
                  className="inv-trends-city-dropdown"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option value="all">All Cities</option>
                  {ALL_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
                <span className="inv-dropdown-chevron">&#9662;</span>
              </div>
            </div>
          </div>

          {/* 3 Columns Grid */}
          <div className="inv-trends-grid">

            {/* Card 1: Multi-Line Price Chart */}
            <div className="inv-trend-card inv-trend-card--chart">
              <div className="inv-chart-card-head">
                <h3 className="inv-trend-card-title">Average Property Price (₹/sq.ft)</h3>
                <div className="inv-chart-legend">
                  {displayedCities.map((c) => (
                    <div key={c.id} className="inv-legend-item">
                      <span className="inv-legend-dot" style={{ backgroundColor: c.chartColor }} />
                      <span>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inv-chart-svg-wrap">
                <svg viewBox={`0 0 ${width} ${height}`} className="inv-chart-svg">
                  {/* Grid Lines */}
                  {Y_TICKS.map((tick) => {
                    const y = padT + innerH - ((tick - yMin) / (yMax - yMin)) * innerH;
                    return (
                      <g key={tick}>
                        <line x1={padL} y1={y} x2={width - padR} y2={y} className="inv-chart-grid-line" />
                        <text x={padL - 8} y={y + 4} className="inv-chart-y-text">
                          {tick >= 1000 ? `${tick / 1000}K` : tick}
                        </text>
                      </g>
                    );
                  })}

                  {/* X Axis Labels */}
                  {CHART_YEARS.map((year, idx) => {
                    const x = padL + (idx / (CHART_YEARS.length - 1)) * innerW;
                    return (
                      <text key={year} x={x} y={height - 8} className="inv-chart-x-text">
                        {year}
                      </text>
                    );
                  })}

                  {/* Lines & Node Dots */}
                  {chartLines.map((line) => (
                    <g key={line.id}>
                      <polyline
                        fill="none"
                        stroke={line.chartColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={line.pointsString}
                      />
                      {line.pts.map((pt, pIdx) => (
                        <circle
                          key={pIdx}
                          cx={pt.x}
                          cy={pt.y}
                          r={hoveredYearIdx === pIdx ? 6 : 4}
                          fill="#ffffff"
                          stroke={line.chartColor}
                          strokeWidth="2.5"
                          className="inv-chart-dot"
                          onMouseEnter={() => setHoveredYearIdx(pIdx)}
                          onMouseLeave={() => setHoveredYearIdx(null)}
                        >
                          <title>{`${line.name} (${CHART_YEARS[pIdx]}): ₹${pt.val.toLocaleString()}/sq.ft`}</title>
                        </circle>
                      ))}
                    </g>
                  ))}
                </svg>

                {/* Tooltip Overlay */}
                {hoveredYearIdx !== null && (
                  <div
                    className="inv-chart-tooltip"
                    style={{
                      left: `${padL + (hoveredYearIdx / (CHART_YEARS.length - 1)) * innerW}px`,
                    }}
                  >
                    <div className="inv-tooltip-year">{CHART_YEARS[hoveredYearIdx]}</div>
                    {displayedCities.map((c) => (
                      <div key={c.id} className="inv-tooltip-row">
                        <span className="inv-tooltip-dot" style={{ backgroundColor: c.chartColor }} />
                        <span>{c.name}:</span>
                        <strong>₹{c.series[hoveredYearIdx].toLocaleString()}/sq.ft</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: Key Market Insights */}
            <div className="inv-trend-card inv-trend-card--insights">
              <h3 className="inv-trend-card-title">Key Market Insights</h3>

              <div className="inv-insights-list">
                <div className="inv-insight-item">
                  <div className="inv-insight-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8853b" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div className="inv-insight-text">
                    <strong className="inv-insight-val">+28%</strong>
                    <span className="inv-insight-lbl">Avg. Price Growth (Last 3 Years)</span>
                  </div>
                </div>

                <div className="inv-insight-item">
                  <div className="inv-insight-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8853b" strokeWidth="2">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
                    </svg>
                  </div>
                  <div className="inv-insight-text">
                    <strong className="inv-insight-val">4.5%</strong>
                    <span className="inv-insight-lbl">Average Rental Yield (Top Cities)</span>
                  </div>
                </div>

                <div className="inv-insight-item">
                  <div className="inv-insight-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8853b" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="inv-insight-text">
                    <strong className="inv-insight-val">12.4%</strong>
                    <span className="inv-insight-lbl">Annual Demand Growth (India)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Top Performing Cities with Map */}
            <div className="inv-trend-card inv-trend-card--top-performers">
              <div className="inv-map-bg-overlay">
                <svg viewBox="0 0 200 220" className="inv-india-map-svg" fill="none" stroke="#cbd5e1" strokeWidth="1">
                  {/* Subtle India Map Outline */}
                  <path d="M 100,10 C 120,20 140,25 150,40 C 160,55 170,70 165,90 C 160,110 150,130 140,150 C 130,170 115,190 100,210 C 85,190 70,170 60,150 C 50,130 40,110 35,90 C 30,70 40,55 50,40 C 60,25 80,20 100,10 Z" fill="#f8fafc" opacity="0.6" />
                  {/* Location Pin Dots */}
                  <circle cx="85" cy="145" r="3" fill="#22c55e" />
                  <circle cx="65" cy="115" r="3" fill="#22c55e" />
                  <circle cx="75" cy="125" r="3" fill="#22c55e" />
                  <circle cx="90" cy="75" r="3" fill="#22c55e" />
                </svg>
              </div>

              <div className="inv-performers-content">
                <h3 className="inv-trend-card-title">Top Performing Cities</h3>

                <div className="inv-performers-list">
                  {ALL_CITIES.map((c) => (
                    <div key={c.id} className="inv-performer-row">
                      <div className="inv-performer-left">
                        <span className="inv-performer-icon">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </span>
                        <span className="inv-performer-name">{c.name}</span>
                      </div>
                      <span className="inv-performer-growth">{c.growth}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="inv-performers-btn"
                  onClick={() => setShowModal(true)}
                >
                  View Full Report &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Comparison Modal Drawer */}
      {showModal && (
        <div className="inv-compare-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="inv-compare-modal" onClick={(e) => e.stopPropagation()}>
            <div className="inv-modal-header">
              <h3>Side-by-Side City Fundamental Matrix</h3>
              <button type="button" className="inv-modal-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="inv-modal-body">
              <table className="inv-modal-table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Avg Price/sq.ft</th>
                    <th>Rental Yield</th>
                    <th>3Y Price Growth</th>
                    <th>Market Sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {ALL_CITIES.map((c) => (
                    <tr key={c.id}>
                      <td><strong>{c.name}</strong></td>
                      <td>{c.price}</td>
                      <td>{c.yield}</td>
                      <td style={{ color: '#16a34a', fontWeight: 'bold' }}>{c.growth}</td>
                      <td>
                        <span className={`inv-city-tag inv-city-tag--${c.tagType}`}>{c.tag}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
