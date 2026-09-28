'use client';

import { useMemo, useState } from 'react';
import {
  CITY_COMPARE_META,
  CITY_COMPARE_YEARS,
  CITY_MARKET_COMPARE,
} from './investor-landing-data';

const LEVEL_LABEL = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};

function entrySymbols(tier) {
  return '₹'.repeat(Math.max(1, Math.min(3, tier)));
}

function chartGeometry(series, width, height, pad) {
  const allValues = series.flatMap((s) => s.values);
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const range = max - min || 1;
  const innerW = width - pad * 2;
  const innerH = height - pad * 2;

  return series.map((s) => {
    const points = s.values
      .map((v, i) => {
        const x = pad + (i / (s.values.length - 1)) * innerW;
        const y = pad + innerH - ((v - min) / range) * innerH;
        return `${x},${y}`;
      })
      .join(' ');
    return { ...s, points };
  });
}

export default function InvestorCityCompareSection() {
  const [selected, setSelected] = useState(() => ['gurgaon', 'noida']);

  const pickCity = (slotIndex, cityId) => {
    if (!cityId) return;
    setSelected((current) => {
      const next = [
        current[0] ?? CITY_MARKET_COMPARE[0].id,
        current[1] ?? CITY_MARKET_COMPARE[1].id,
      ];
      next[slotIndex] = cityId;
      if (next[0] === next[1]) {
        const alternate = CITY_MARKET_COMPARE.find((c) => c.id !== cityId);
        if (alternate) {
          next[1 - slotIndex] = alternate.id;
        }
      }
      return next;
    });
  };

  const toggleCity = (id) => {
    setSelected((current) => {
      const slots = [
        current[0] ?? CITY_MARKET_COMPARE[0].id,
        current[1] ?? CITY_MARKET_COMPARE[1].id,
      ];
      if (slots.includes(id)) {
        if (slots[0] === id && slots[1] !== id) {
          return slots;
        }
        if (slots[1] === id && slots[0] !== id) {
          return slots;
        }
        const alt = CITY_MARKET_COMPARE.find((c) => c.id !== id);
        return alt ? [id, alt.id] : slots;
      }
      return [slots[0], id];
    });
  };

  const chartSelected = useMemo(() => {
    const ids = selected.filter(Boolean);
    if (ids.length <= 1) return ids;
    return ids[0] === ids[1] ? [ids[0]] : ids.slice(0, 2);
  }, [selected]);

  const chartSeries = useMemo(() => {
    return CITY_MARKET_COMPARE.filter((c) => chartSelected.includes(c.id)).map((c, i) => ({
      id: c.id,
      name: c.name,
      values: c.priceIndex,
      color: ['#d4af37', '#7dd3fc', '#f472b6', '#86efac'][i % 4],
    }));
  }, [chartSelected]);

  const lines = useMemo(() => chartGeometry(chartSeries, 520, 200, 28), [chartSeries]);

  return (
    <section className="inv-city-compare inv-creative inv-creative--split inv-land-block inv-reveal" id="city-compare" aria-labelledby="inv-city-compare-title">
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-city-compare-head">
          <p className="inv-mock-eyebrow">Market data compare</p>
          <h2 id="inv-city-compare-title">Compare city fundamentals side by side</h2>
          <p className="inv-city-compare-lead">
            Select two cities to compare indexed prices, demand, rental yield, and entry bands.
          </p>
        </header>

        <div className="inv-city-compare-pick" role="group" aria-label="Choose cities to compare">
          <p className="inv-city-compare-pick-label">Your comparison</p>
          <div className="inv-city-compare-pick-row">
            <label className="inv-city-compare-pick-field">
              <span>City A</span>
              <select
                value={selected[0] ?? CITY_MARKET_COMPARE[0].id}
                onChange={(e) => pickCity(0, e.target.value)}
                aria-label="First city to compare"
              >
                {CITY_MARKET_COMPARE.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </label>
            <span className="inv-city-compare-pick-vs" aria-hidden="true">
              vs
            </span>
            <label className="inv-city-compare-pick-field">
              <span>City B</span>
              <select
                value={selected[1] ?? CITY_MARKET_COMPARE[1].id}
                onChange={(e) => pickCity(1, e.target.value)}
                aria-label="Second city to compare"
              >
                {CITY_MARKET_COMPARE.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="inv-city-compare-pick-chips">
            {CITY_MARKET_COMPARE.map((city) => {
              const inCompare = selected.includes(city.id);
              return (
                <button
                  key={city.id}
                  type="button"
                  className={`inv-city-compare-pick-chip${inCompare ? ' is-active' : ''}`}
                  aria-pressed={inCompare}
                  onClick={() => toggleCity(city.id)}
                >
                  {city.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="inv-city-compare-layout">
          <div className="inv-city-compare-chart-wrap">
            <div className="inv-city-compare-chart-head">
              <span>Indexed residential prices (2020 = 100)</span>
              <ul className="inv-city-compare-legend">
                {chartSeries.map((s) => (
                  <li key={s.id}>
                    <span className="inv-city-compare-swatch" style={{ background: s.color }} aria-hidden="true" />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
            <svg
              className="inv-city-compare-chart"
              viewBox="0 0 520 200"
              role="img"
              aria-label={`Price index chart for ${chartSeries.map((s) => s.name).join(' and ')}`}
            >
              {[0, 1, 2, 3].map((g) => (
                <line
                  key={g}
                  x1={28}
                  x2={492}
                  y1={28 + g * 48}
                  y2={28 + g * 48}
                  className="inv-city-compare-grid"
                />
              ))}
              {lines.map((line) => (
                <polyline key={line.id} points={line.points} className="inv-city-compare-line" stroke={line.color} />
              ))}
              {CITY_COMPARE_YEARS.map((year, i) => (
                <text
                  key={year}
                  x={28 + (i / (CITY_COMPARE_YEARS.length - 1)) * (520 - 56)}
                  y={196}
                  className="inv-city-compare-axis"
                >
                  {year}
                </text>
              ))}
            </svg>
            <p className="inv-city-compare-method">{CITY_COMPARE_META.methodology}</p>
          </div>

          <div className="inv-city-compare-table-wrap">
            <table className="inv-city-compare-table">
              <caption className="inv-city-compare-caption">
                City metrics for your selection — use dropdowns above or click rows (max 2 cities)
              </caption>
              <thead>
                <tr>
                  <th scope="col">City</th>
                  <th scope="col">Price Growth</th>
                  <th scope="col">Demand</th>
                  <th scope="col">Rental</th>
                  <th scope="col">
                    Entry
                    <span className="inv-city-compare-th-hint"> (ticket band)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {CITY_MARKET_COMPARE.map((row) => {
                  const isSelected = selected.includes(row.id);
                  return (
                    <tr
                      key={row.id}
                      className={isSelected ? 'is-selected' : ''}
                      onClick={() => toggleCity(row.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleCity(row.id);
                        }
                      }}
                      tabIndex={0}
                      aria-selected={isSelected}
                    >
                      <th scope="row">{row.name}</th>
                      <td>
                        <span className="inv-city-compare-growth" title={`${row.priceCagrPct}% CAGR`}>
                          <span className="inv-city-compare-arrow" aria-hidden="true">
                            {row.priceTrend === 'up' ? '↑' : row.priceTrend === 'down' ? '↓' : '→'}
                          </span>
                          <span className="inv-city-compare-cagr">{row.priceCagrPct}% CAGR</span>
                        </span>
                      </td>
                      <td>
                        <span className={`inv-city-compare-pill inv-city-compare-pill--${row.demand}`}>
                          {LEVEL_LABEL[row.demand]}
                        </span>
                      </td>
                      <td>
                        <span className={`inv-city-compare-pill inv-city-compare-pill--${row.rental}`}>
                          {LEVEL_LABEL[row.rental]}
                        </span>
                      </td>
                      <td>
                        <span className="inv-city-compare-entry" title={row.entryNote}>
                          {entrySymbols(row.entryTier)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="inv-city-compare-disclaimer">{CITY_COMPARE_META.disclaimer}</p>
      </div>
    </section>
  );
}
