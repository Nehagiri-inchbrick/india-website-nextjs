'use client';

import { useMemo, useState } from 'react';
import {
  INV_PAYMENT_PLAN_KEY,
  PAYMENT_PLAN_EXPLORER,
  PAYMENT_PLANS,
} from './investor-landing-data';

function formatInrCompact(amount) {
  if (amount >= 1_00_00_000) {
    const cr = amount / 1_00_00_000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  const lakhs = amount / 1_00_000;
  return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)}L`;
}

function formatInrFull(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function InvestorPaymentPlanSection() {
  const [planId, setPlanId] = useState('20-80');
  const [amount, setAmount] = useState(PAYMENT_PLAN_EXPLORER.defaultAmount);

  const plan = useMemo(
    () => PAYMENT_PLANS.find((p) => p.id === planId) ?? PAYMENT_PLANS[2],
    [planId]
  );

  const breakdown = useMemo(() => {
    const today = Math.round((amount * plan.todayPct) / 100);
    const construction = Math.round((amount * plan.constructionPct) / 100);
    const possession = amount - today - construction;
    return { today, construction, possession };
  }, [amount, plan]);

  const viewProjects = () => {
    try {
      sessionStorage.setItem(INV_PAYMENT_PLAN_KEY, planId);
    } catch {
      /* ignore */
    }
    document.getElementById('top-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.dispatchEvent(new CustomEvent('inchbrick-inv-payment-plan', { detail: planId }));
  };

  const amountCrLabel = formatInrCompact(amount);

  return (
    <section
      className="inv-pay-plan inv-creative inv-creative--plan inv-land-block inv-reveal"
      id="payment-plan"
      aria-labelledby="inv-pay-plan-title"
    >
      <div className="inv-creative-bg" aria-hidden="true" />
      <div className="inv-wrap inv-creative-inner">
        <header className="inv-mock-section-head inv-mock-section-head--center">
          <p className="inv-mock-eyebrow">Payment Plan Explorer</p>
          <h2 id="inv-pay-plan-title">Choose Your Payment Strategy</h2>
          <p className="inv-pay-plan-lead">
            Two projects at the same price can demand very different cash flows — model yours before you shortlist.
          </p>
        </header>

        <div className="inv-pay-plan-tabs" role="tablist" aria-label="Payment plan type">
          {PAYMENT_PLANS.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={planId === p.id}
              className={`inv-pay-plan-tab${planId === p.id ? ' is-active' : ''}`}
              onClick={() => setPlanId(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <p className="inv-pay-plan-summary">{plan.summary}</p>

        <div className="inv-pay-plan-panel">
          <div className="inv-pay-plan-amount">
            <label htmlFor="inv-pay-plan-range">
              Property value
              <strong>{amountCrLabel} Property</strong>
            </label>
            <input
              id="inv-pay-plan-range"
              type="range"
              min={PAYMENT_PLAN_EXPLORER.minAmount}
              max={PAYMENT_PLAN_EXPLORER.maxAmount}
              step={PAYMENT_PLAN_EXPLORER.stepAmount}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <div className="inv-pay-plan-range-labels">
              <span>₹1 Cr</span>
              <span>₹10 Cr</span>
            </div>
          </div>

          <div className="inv-pay-plan-breakdown" aria-live="polite">
            <h3>{amountCrLabel} Property</h3>
            <ul>
              <li>
                <span className="inv-pay-plan-phase">Today</span>
                <strong title={formatInrFull(breakdown.today)}>{formatInrCompact(breakdown.today)}</strong>
                <span
                  className="inv-pay-plan-phase-bar"
                  style={{ width: `${(breakdown.today / amount) * 100}%` }}
                  aria-hidden="true"
                />
              </li>
              <li>
                <span className="inv-pay-plan-phase">During Construction</span>
                <strong title={formatInrFull(breakdown.construction)}>
                  {formatInrCompact(breakdown.construction)}
                </strong>
                <span
                  className="inv-pay-plan-phase-bar inv-pay-plan-phase-bar--mid"
                  style={{ width: `${(breakdown.construction / amount) * 100}%` }}
                  aria-hidden="true"
                />
              </li>
              <li>
                <span className="inv-pay-plan-phase">On Possession</span>
                <strong title={formatInrFull(breakdown.possession)}>{formatInrCompact(breakdown.possession)}</strong>
                <span
                  className="inv-pay-plan-phase-bar inv-pay-plan-phase-bar--late"
                  style={{ width: `${(breakdown.possession / amount) * 100}%` }}
                  aria-hidden="true"
                />
              </li>
            </ul>
          </div>
        </div>

        <button type="button" className="inv-btn inv-btn-gold inv-pay-plan-cta" onClick={viewProjects}>
          View Projects With This Plan
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </button>

        <p className="inv-pay-plan-note">{PAYMENT_PLAN_EXPLORER.disclaimer}</p>
      </div>
    </section>
  );
}
