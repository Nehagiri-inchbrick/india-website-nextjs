import Link from 'next/link';
import { TOP_MARKETS_META, TOP_PERFORMING_MARKETS } from './investor-landing-data';

const BAR_MAX = Math.max(...TOP_PERFORMING_MARKETS.map((m) => m.growthPct));

function MiniSparkline({ values }) {
  const w = 72;
  const h = 28;
  const pad = 3;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const points = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * innerW;
      const y = pad + innerH - ((v - min) / range) * innerH;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg className="inv-top-markets-spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline points={points} />
    </svg>
  );
}

export default function InvestorTopMarketsSection() {
  const titleMetric = `${TOP_MARKETS_META.metric} · ${TOP_MARKETS_META.period}`;

  return (
    <section
      className="inv-top-markets inv-land-block inv-reveal"
      id="top-markets"
      aria-labelledby="inv-top-markets-title"
    >
      <div className="inv-wrap">
        <header className="inv-top-markets-head">
          <p className="inv-mock-eyebrow">Top Performing Cities</p>
          <h2 id="inv-top-markets-title">
            Top Performing Markets — Based on {titleMetric}
          </h2>
          <p className="inv-top-markets-sub">
            Horizontal bars show CAGR for the ranked metric; sparklines trace indexed price paths (2020 = 100) over
            the same window.
          </p>
        </header>

        <ol className="inv-top-markets-list">
          {TOP_PERFORMING_MARKETS.map((market) => {
            const barWidth = (market.growthPct / BAR_MAX) * 100;
            return (
              <li key={market.id}>
                <article className="inv-top-markets-row">
                  <span className="inv-top-markets-rank">{String(market.rank).padStart(2, '0')}</span>
                  <div className="inv-top-markets-main">
                    <div className="inv-top-markets-title-row">
                      <h3>{market.name}</h3>
                      <span className="inv-top-markets-growth">
                        Growth: <strong>{market.growthPct}%</strong>
                      </span>
                    </div>
                    <div className="inv-top-markets-bar-wrap">
                      <span
                        className="inv-top-markets-bar"
                        style={{ width: `${barWidth}%` }}
                        role="presentation"
                      />
                    </div>
                  </div>
                  <MiniSparkline values={market.sparkline} />
                  <Link href={market.href} className="inv-top-markets-link">
                    View market
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              </li>
            );
          })}
        </ol>

        <p className="inv-top-markets-foot">
          <strong>Source:</strong> {TOP_MARKETS_META.source}. {TOP_MARKETS_META.footnote}
        </p>
      </div>
    </section>
  );
}
