'use client';

import Link from 'next/link';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import '@/styles/city-growth.css';
import { POPULAR_CITIES_GROWTH } from './city-growth-data';
import InvestorCityGrowthModal from './InvestorCityGrowthModal';

const FEATURES = [
  { icon: 'fa-chart-line', label: 'Rising Property Values' },
  { icon: 'fa-building', label: 'World-Class Infrastructure' },
  { icon: 'fa-map-marker-alt', label: 'Growing Job Markets' },
  { icon: 'fa-users', label: 'High Rental Demand' },
];

const CITIES = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    growth: 12,
    height: 148,
    pin: '#0f2339',
    image:
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pune',
    name: 'Pune',
    growth: 16,
    height: 178,
    pin: '#c29a63',
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    growth: 20,
    height: 212,
    pin: '#0f2339',
    image:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'gurugram',
    name: 'Gurugram',
    growth: 24,
    height: 248,
    pin: '#c29a63',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    growth: 28,
    height: 286,
    pin: '#c9242b',
    image:
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80',
  },
];

function buildSmoothPath(points) {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  // Cardinal / Catmull-Rom → cubic Bezier so the curve passes through each bar top.
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

function arrowHeadPoints(from, to, size = 14) {
  const angle = Math.atan2(to.y - from.y, to.x - from.x);
  const spread = Math.PI / 7;
  const left = {
    x: to.x - size * Math.cos(angle - spread),
    y: to.y - size * Math.sin(angle - spread),
  };
  const right = {
    x: to.x - size * Math.cos(angle + spread),
    y: to.y - size * Math.sin(angle + spread),
  };
  return `${to.x},${to.y} ${left.x},${left.y} ${right.x},${right.y}`;
}

export default function InvestorCityGrowthShowcaseSection() {
  const [selectedModalCity, setSelectedModalCity] = useState(null);
  const [trend, setTrend] = useState({ path: '', arrow: '', width: 0, height: 0 });
  const chartRef = useRef(null);
  const barRefs = useRef([]);

  const cityById = useMemo(() => {
    const map = {};
    POPULAR_CITIES_GROWTH.forEach((c) => {
      map[c.id] = c;
    });
    return map;
  }, []);

  const openCity = (id) => {
    const city = cityById[id];
    if (city) setSelectedModalCity(city);
  };

  const measureTrend = () => {
    const chart = chartRef.current;
    if (!chart) return;
    const chartBox = chart.getBoundingClientRect();
    if (!chartBox.width || !chartBox.height) return;

    // Anchor just above each % label so the stroke clears bars + labels.
    const points = barRefs.current
      .map((bar) => {
        if (!bar) return null;
        const col = bar.closest('.inv-cgrowth-col');
        const pct = col?.querySelector('.inv-cgrowth-pct');
        const target = pct || bar;
        const box = target.getBoundingClientRect();
        return {
          x: box.left - chartBox.left + box.width / 2,
          y: box.top - chartBox.top - 8,
        };
      })
      .filter(Boolean);

    if (points.length < 2) return;

    const last = points[points.length - 1];
    const prev = points[points.length - 2];
    const dx = Math.max(22, (last.x - prev.x) * 0.45);
    const dy = Math.max(16, (prev.y - last.y) * 0.65 + 8);
    const tip = {
      x: Math.min(last.x + dx, chartBox.width - 6),
      y: Math.max(8, last.y - dy),
    };

    // Stop the stroke just before the tip so the arrowhead stays crisp.
    const angle = Math.atan2(tip.y - last.y, tip.x - last.x);
    const neck = {
      x: tip.x - 18 * Math.cos(angle),
      y: tip.y - 18 * Math.sin(angle),
    };

    setTrend({
      path: buildSmoothPath([...points, neck]),
      arrow: arrowHeadPoints(neck, tip, 17),
      width: chartBox.width,
      height: chartBox.height,
    });
  };

  useLayoutEffect(() => {
    measureTrend();
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return undefined;

    const onResize = () => measureTrend();
    window.addEventListener('resize', onResize);

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(onResize);
      ro.observe(chart);
    }

    // Remeasure after bar rise animation + fonts/images settle.
    const timers = [80, 400, 750, 1200, 1800].map((ms) =>
      window.setTimeout(measureTrend, ms)
    );

    if (document.fonts?.ready) {
      document.fonts.ready.then(measureTrend).catch(() => {});
    }

    return () => {
      window.removeEventListener('resize', onResize);
      timers.forEach((id) => window.clearTimeout(id));
      ro?.disconnect();
    };
  }, []);

  return (
    <section
      className="inv-cgrowth"
      id="city-growth"
      aria-labelledby="inv-cgrowth-title"
    >
      <div className="inv-cgrowth-decor inv-cgrowth-decor--leaves" aria-hidden="true" />
      <div className="inv-cgrowth-decor inv-cgrowth-decor--terrace" aria-hidden="true" />
      <div className="inv-cgrowth-decor inv-cgrowth-decor--orb" aria-hidden="true" />

      <div className="inv-cgrowth-inner">
        <div className="inv-cgrowth-copy">
          <p className="inv-cgrowth-kicker">
            <span className="inv-cgrowth-kicker-line" aria-hidden="true" />
            City Growth
          </p>

          <h2 id="inv-cgrowth-title" className="inv-cgrowth-title">
            <span className="inv-cgrowth-title-navy">Top Cities.</span>{' '}
            <span className="inv-cgrowth-title-gold">Stronger Growth.</span>
          </h2>

          <p className="inv-cgrowth-lead">
            From rising infrastructure to expanding opportunities, these cities are not just
            growing — they&apos;re shaping a better tomorrow. Invest where the future is.
          </p>

          <ul className="inv-cgrowth-features">
            {FEATURES.map((item) => (
              <li key={item.label}>
                <span className="inv-cgrowth-feature-icon" aria-hidden="true">
                  <i className={`fas ${item.icon}`} />
                </span>
                <span className="inv-cgrowth-feature-label">{item.label}</span>
              </li>
            ))}
          </ul>

          <Link href="#top-products" className="inv-cgrowth-cta">
            Explore Investment Opportunities
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <div className="inv-cgrowth-visual">
          <p className="inv-cgrowth-chart-label">
            Average Property Price Growth (Last 5 Years)
          </p>

          <div className="inv-cgrowth-chart" ref={chartRef}>
            <div className="inv-cgrowth-bars">
              {CITIES.map((city, index) => (
                <button
                  key={city.id}
                  type="button"
                  className="inv-cgrowth-col"
                  style={{ '--cg-i': index }}
                  onClick={() => openCity(city.id)}
                  aria-label={`${city.name} +${city.growth}% — view charts`}
                >
                  <span className="inv-cgrowth-pct">+{city.growth}%</span>
                  <span
                    className="inv-cgrowth-bar"
                    style={{ height: `${city.height}px` }}
                    ref={(el) => {
                      barRefs.current[index] = el;
                    }}
                  >
                    <img src={city.image} alt="" loading="lazy" />
                  </span>
                  <span className="inv-cgrowth-city">
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ color: city.pin }}
                      aria-hidden="true"
                    />
                    {city.name}
                  </span>
                </button>
              ))}
            </div>

            {trend.width > 0 ? (
              <svg
                className="inv-cgrowth-trend"
                width={trend.width}
                height={trend.height}
                viewBox={`0 0 ${trend.width} ${trend.height}`}
                aria-hidden="true"
              >
                <path
                  d={trend.path}
                  fill="none"
                  stroke="#a67c3d"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon points={trend.arrow} fill="#a67c3d" stroke="#a67c3d" strokeWidth="1" />
              </svg>
            ) : null}
          </div>

          <p className="inv-cgrowth-tagline">
            Better Cities <span aria-hidden="true">·</span> Higher Returns{' '}
            <span aria-hidden="true">·</span> Brighter Futures
            <span className="inv-cgrowth-tagline-line" aria-hidden="true" />
          </p>
        </div>
      </div>

      {selectedModalCity ? (
        <InvestorCityGrowthModal
          city={selectedModalCity}
          onClose={() => setSelectedModalCity(null)}
        />
      ) : null}
    </section>
  );
}
