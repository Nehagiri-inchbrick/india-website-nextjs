'use client';

import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import {
  TOP10_INVESTMENT_META,
  TOP10_INVESTMENT_PROJECTS,
} from './investor-landing-data';
import { toggleProjectCompareId, useProjectCompareIds } from './investor-project-compare';

const DEMAND_LABEL = { high: 'High', medium: 'Medium', low: 'Low' };

export default function InvestorTop10InvestmentSection() {
  const compareIds = useProjectCompareIds();

  const onCompare = useCallback(
    (id) => {
      toggleProjectCompareId(id, compareIds);
    },
    [compareIds]
  );

  const criteria = useMemo(() => TOP10_INVESTMENT_META.criteria, []);

  return (
    <section
      className="inv-top10-inv inv-land-block inv-reveal"
      id="top10-investment"
      aria-labelledby="inv-top10-inv-title"
    >
      <div className="inv-wrap">
        <header className="inv-top10-inv-head">
          <p className="inv-mock-eyebrow">{TOP10_INVESTMENT_META.eyebrow}</p>
          <h2 id="inv-top10-inv-title">{TOP10_INVESTMENT_META.headline}</h2>
          <p className="inv-top10-inv-method-title">{TOP10_INVESTMENT_META.titleMethod}</p>
          <p className="inv-top10-inv-method">{TOP10_INVESTMENT_META.methodology}</p>
          <ul className="inv-top10-inv-criteria" aria-label="Comparison criteria">
            {criteria.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </header>

        <ol className="inv-top10-inv-list">
          {TOP10_INVESTMENT_PROJECTS.map((project) => {
            const inCompare = compareIds.includes(project.id);
            return (
              <li key={project.rank}>
                <article className="inv-top10-inv-row">
                  <span className="inv-top10-inv-rank">{String(project.rank).padStart(2, '0')}</span>
                  <div className="inv-top10-inv-main">
                    <h3>{project.name}</h3>
                    <p className="inv-top10-inv-meta">
                      {project.city} · {project.segment}
                    </p>
                    <p className="inv-top10-inv-price">{project.price}</p>
                    <dl className="inv-top10-inv-metrics">
                      <div>
                        <dt>Growth</dt>
                        <dd>+{project.priceGrowthPct}%</dd>
                      </div>
                      <div>
                        <dt>Rental</dt>
                        <dd>{project.rentalYieldPct}%</dd>
                      </div>
                      <div>
                        <dt>Demand</dt>
                        <dd>{DEMAND_LABEL[project.demand]}</dd>
                      </div>
                      <div>
                        <dt>Payment Plan</dt>
                        <dd>{project.paymentPlan}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="inv-top10-inv-actions">
                    <button
                      type="button"
                      className={`inv-top10-inv-compare${inCompare ? ' is-active' : ''}`}
                      aria-pressed={inCompare}
                      onClick={() => onCompare(project.id)}
                    >
                      Compare
                    </button>
                    <Link href={project.href} className="inv-top10-inv-view">
                      View Project
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <p className="inv-top10-inv-foot">
          <strong>Source:</strong> {TOP10_INVESTMENT_META.source}
        </p>
      </div>
    </section>
  );
}
