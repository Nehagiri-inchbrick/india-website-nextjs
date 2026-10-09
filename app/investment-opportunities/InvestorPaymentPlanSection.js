'use client';

import { useMemo, useState } from 'react';

function formatInr(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

function formatInrCompact(n) {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(1)} L`;
  return `₹${n.toLocaleString('en-IN')}`;
}

const PLAN_TABS = [
  { id: 'home-loan', label: 'Home Loan', icon: 'fa-home' },
  { id: 'down-payment', label: 'Down Payment', icon: 'fa-coins' },
  { id: 'construction-linked', label: 'Construction Linked', icon: 'fa-hard-hat' },
];

const CONSTRUCTION_PHASES = [
  { label: 'On Booking (10%)', pct: 10 },
  { label: 'On Foundation (20%)', pct: 20 },
  { label: 'On Structure (30%)', pct: 30 },
  { label: 'On Possession (40%)', pct: 40 },
];

function calcEMI(principal, annualRate, months) {
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

function Slider({ id, min, max, step = 1, value, onChange, formatLabel }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="inv-pps-slider-wrap">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="inv-pps-range"
        style={{ '--pps-pct': `${pct}%` }}
      />
      <div className="inv-pps-range-ends">
        <span>{formatLabel(min)}</span>
        <span>{formatLabel(max)}</span>
      </div>
    </div>
  );
}

function FieldCard({ icon, label, htmlFor, value, children }) {
  return (
    <div className="inv-pps-field-card">
      <div className="inv-pps-field-card-top">
        <span className="inv-pps-field-icon" aria-hidden="true">
          <i className={`fas ${icon}`} />
        </span>
        <div className="inv-pps-field-card-copy">
          <label className="inv-pps-field-lbl" htmlFor={htmlFor}>
            {label}
            <i className="fas fa-info-circle" aria-hidden="true" title="Illustrative estimate" />
          </label>
          <span className="inv-pps-field-val">{value}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function ResultRow({ icon, label, value }) {
  return (
    <div className="inv-pps-result-row">
      <span className="inv-pps-result-icon" aria-hidden="true">
        <i className={`fas ${icon}`} />
      </span>
      <div className="inv-pps-result-copy">
        <span className="inv-pps-result-lbl">{label}</span>
        <strong className="inv-pps-result-val">{value}</strong>
      </div>
    </div>
  );
}

export default function InvestorPaymentPlanSection() {
  const [planId, setPlanId] = useState('home-loan');
  const [propValue, setPropValue] = useState(1_00_00_000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [downPct, setDownPct] = useState(20);
  const interestRate = 8.5;

  const results = useMemo(() => {
    if (planId === 'home-loan') {
      const loanAmt = propValue * ((100 - downPct) / 100);
      const months = loanTenure * 12;
      const emi = calcEMI(loanAmt, interestRate, months);
      const total = emi * months;
      const interest = total - loanAmt;
      return { emi, interest, total };
    }
    if (planId === 'down-payment') {
      const downAmt = propValue * (downPct / 100);
      return { emi: null, downAmt, total: propValue };
    }
    return {
      emi: null,
      phases: CONSTRUCTION_PHASES.map((p) => ({
        ...p,
        amount: (propValue * p.pct) / 100,
      })),
      total: propValue,
    };
  }, [planId, propValue, loanTenure, downPct, interestRate]);

  return (
    <section
      className="inv-pps inv-land-block inv-reveal"
      id="payment-plan"
      aria-labelledby="inv-pps-title"
    >
      <div className="inv-pps-decor" aria-hidden="true">
        <div className="inv-pps-decor-villa" />
        <div className="inv-pps-decor-arc inv-pps-decor-arc--a" />
        <div className="inv-pps-decor-arc inv-pps-decor-arc--b" />
        <span className="inv-pps-decor-orb inv-pps-decor-orb--a" />
        <span className="inv-pps-decor-orb inv-pps-decor-orb--b" />
      </div>

      <div className="inv-wrap inv-pps-inner">
        <header className="inv-pps-head">
          <p className="inv-pps-eyebrow">
            <span className="inv-pps-eyebrow-line" aria-hidden="true" />
            Payment Strategy
          </p>
          <h2 id="inv-pps-title" className="inv-pps-title">
            Choose your payment <span>strategy</span>
          </h2>
          <p className="inv-pps-lead">
            Model home loan, down payment, or construction-linked plans — same numbers, clearer next
            step.
          </p>
        </header>

        <div className="inv-pps-board">
          <div className="inv-pps-centre">
            <div className="inv-pps-tabs" role="tablist" aria-label="Payment plan type">
              {PLAN_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={planId === t.id}
                  className={`inv-pps-tab${planId === t.id ? ' is-active' : ''}`}
                  onClick={() => setPlanId(t.id)}
                >
                  <i className={`fas ${t.icon}`} aria-hidden="true" />
                  {t.label}
                </button>
              ))}
            </div>

            <div className="inv-pps-sliders">
              <FieldCard
                icon="fa-home"
                label={planId === 'down-payment' ? 'Property Value' : 'Property Value'}
                htmlFor="pps-prop"
                value={formatInr(propValue)}
              >
                <Slider
                  id="pps-prop"
                  min={50_00_000}
                  max={10_00_00_000}
                  step={5_00_000}
                  value={propValue}
                  onChange={setPropValue}
                  formatLabel={formatInrCompact}
                />
              </FieldCard>

              {planId === 'home-loan' && (
                <FieldCard
                  icon="fa-calendar-alt"
                  label="Loan Tenure"
                  htmlFor="pps-tenure"
                  value={`${loanTenure} Years`}
                >
                  <Slider
                    id="pps-tenure"
                    min={5}
                    max={30}
                    value={loanTenure}
                    onChange={setLoanTenure}
                    formatLabel={(v) => `${v}Y`}
                  />
                </FieldCard>
              )}

              {planId === 'down-payment' && (
                <FieldCard
                  icon="fa-percent"
                  label="Down Payment %"
                  htmlFor="pps-down"
                  value={`${downPct}% · ${formatInrCompact(propValue * (downPct / 100))}`}
                >
                  <Slider
                    id="pps-down"
                    min={10}
                    max={100}
                    step={5}
                    value={downPct}
                    onChange={setDownPct}
                    formatLabel={(v) => `${v}%`}
                  />
                </FieldCard>
              )}

              {planId === 'construction-linked' && (
                <div className="inv-pps-phases">
                  {CONSTRUCTION_PHASES.map((p) => (
                    <div key={p.label} className="inv-pps-phase-row">
                      <span className="inv-pps-phase-lbl">{p.label}</span>
                      <span className="inv-pps-phase-val">
                        {formatInrCompact((propValue * p.pct) / 100)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="inv-pps-results" aria-live="polite">
            <div className="inv-pps-results-wave" aria-hidden="true" />

            {planId === 'home-loan' && (
              <div className="inv-pps-results-stack">
                <ResultRow
                  icon="fa-calendar-check"
                  label="Monthly EMI"
                  value={formatInr(Math.round(results.emi))}
                />
                <ResultRow
                  icon="fa-coins"
                  label="Total Interest"
                  value={formatInr(Math.round(results.interest))}
                />
                <ResultRow
                  icon="fa-wallet"
                  label="Total Amount"
                  value={formatInr(Math.round(results.total))}
                />
              </div>
            )}

            {planId === 'down-payment' && (
              <div className="inv-pps-results-stack">
                <ResultRow
                  icon="fa-coins"
                  label="Down Payment"
                  value={formatInrCompact(Math.round(results.downAmt))}
                />
                <ResultRow
                  icon="fa-chart-pie"
                  label="Balance"
                  value={formatInrCompact(Math.round(results.total - results.downAmt))}
                />
                <ResultRow
                  icon="fa-wallet"
                  label="Total Amount"
                  value={formatInrCompact(results.total)}
                />
              </div>
            )}

            {planId === 'construction-linked' && (
              <div className="inv-pps-results-stack">
                <ResultRow
                  icon="fa-key"
                  label="On Booking"
                  value={formatInrCompact(results.phases[0].amount)}
                />
                <ResultRow
                  icon="fa-home"
                  label="On Possession"
                  value={formatInrCompact(results.phases[3].amount)}
                />
                <ResultRow
                  icon="fa-wallet"
                  label="Total Value"
                  value={formatInrCompact(results.total)}
                />
              </div>
            )}

            <button type="button" className="inv-pps-cta-btn">
              Calculate Now
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
