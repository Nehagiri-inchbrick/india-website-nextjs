'use client';

import { useMemo, useState } from 'react';

/* ── helpers ─────────────────────────────────────────────── */
function formatInr(n) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

function formatInrCompact(n) {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000)    return `₹${(n / 1_00_000).toFixed(1)}L`;
  return `₹${n.toLocaleString('en-IN')}`;
}

/* ── plan types ──────────────────────────────────────────── */
const PLAN_TABS = [
  { id: 'home-loan',           label: 'Home Loan' },
  { id: 'down-payment',        label: 'Down Payment' },
  { id: 'construction-linked', label: 'Construction Linked' },
];

/* For Construction Linked: no interest, just a per-phase breakdown */
const CONSTRUCTION_PHASES = [
  { label: 'On Booking (10%)',    pct: 10 },
  { label: 'On Foundation (20%)', pct: 20 },
  { label: 'On Structure (30%)',  pct: 30 },
  { label: 'On Possession (40%)', pct: 40 },
];

function calcEMI(principal, annualRate, months) {
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

/* ── slider with thumb label ─────────────────────────────── */
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

/* ── main component ──────────────────────────────────────── */
export default function InvestorPaymentPlanSection() {
  const [planId, setPlanId]       = useState('home-loan');
  const [propValue, setPropValue] = useState(1_00_00_000);       // ₹1 Cr
  const [loanTenure, setLoanTenure] = useState(20);               // years
  const [downPct, setDownPct]     = useState(20);                 // %
  const [interestRate]            = useState(8.5);                // fixed display

  const results = useMemo(() => {
    if (planId === 'home-loan') {
      const loanAmt = propValue * ((100 - downPct) / 100);
      const months  = loanTenure * 12;
      const emi     = calcEMI(loanAmt, interestRate, months);
      const total   = emi * months;
      const interest= total - loanAmt;
      return { emi, interest, total };
    }
    if (planId === 'down-payment') {
      const downAmt = propValue * (downPct / 100);
      return { emi: null, downAmt, total: propValue };
    }
    // construction-linked
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
    <section className="inv-pps-root" id="payment-plan">
      <div className="inv-pps-container">

        {/* Left text block */}
        <div className="inv-pps-left">
          <p className="inv-pps-eyebrow">INVESTMENT CALCULATOR</p>
          <h2 className="inv-pps-title">Choose your payment strategy</h2>
          <p className="inv-pps-subtitle">
            Plan your investment with flexible payment options and see how your returns can grow.
          </p>
        </div>

        {/* Centre: tabs + sliders */}
        <div className="inv-pps-centre">

          {/* Tab Bar */}
          <div className="inv-pps-tabs" role="tablist">
            {PLAN_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={planId === t.id}
                className={`inv-pps-tab${planId === t.id ? ' is-active' : ''}`}
                onClick={() => setPlanId(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Sliders */}
          <div className="inv-pps-sliders">
            {/* Slider 1: Property Value / Down Payment */}
            <div className="inv-pps-field">
              <div className="inv-pps-field-head">
                <label className="inv-pps-field-lbl">
                  {planId === 'down-payment' ? 'Down Payment Amount' : 'Property Value'}
                </label>
                <span className="inv-pps-field-val">
                  {planId === 'down-payment'
                    ? formatInr(propValue * (downPct / 100))
                    : formatInr(propValue)}
                </span>
              </div>
              <Slider
                id="pps-prop"
                min={50_00_000}
                max={10_00_00_000}
                step={5_00_000}
                value={propValue}
                onChange={setPropValue}
                formatLabel={formatInrCompact}
              />
            </div>

            {/* Slider 2: Loan Tenure (home-loan) / Down % (down-payment) / Phase display (construction) */}
            {planId === 'home-loan' && (
              <div className="inv-pps-field">
                <div className="inv-pps-field-head">
                  <label className="inv-pps-field-lbl">Loan Tenure</label>
                  <span className="inv-pps-field-val">{loanTenure} Years</span>
                </div>
                <Slider
                  id="pps-tenure"
                  min={5}
                  max={30}
                  value={loanTenure}
                  onChange={setLoanTenure}
                  formatLabel={(v) => v}
                />
              </div>
            )}

            {planId === 'down-payment' && (
              <div className="inv-pps-field">
                <div className="inv-pps-field-head">
                  <label className="inv-pps-field-lbl">Down Payment %</label>
                  <span className="inv-pps-field-val">{downPct}%</span>
                </div>
                <Slider
                  id="pps-down"
                  min={10}
                  max={100}
                  step={5}
                  value={downPct}
                  onChange={setDownPct}
                  formatLabel={(v) => `${v}%`}
                />
              </div>
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

        {/* Right: Results panel */}
        <div className="inv-pps-results">
          {planId === 'home-loan' && (
            <>
              <div className="inv-pps-results-grid">
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">Monthly EMI</span>
                  <strong className="inv-pps-result-val">{formatInr(Math.round(results.emi))}</strong>
                </div>
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">+Total Interest</span>
                  <strong className="inv-pps-result-val">{formatInr(Math.round(results.interest))}</strong>
                </div>
              </div>
              <div className="inv-pps-result-total">
                <span className="inv-pps-result-lbl">Total Amount</span>
                <strong className="inv-pps-result-total-val">{formatInr(Math.round(results.total))}</strong>
              </div>
            </>
          )}

          {planId === 'down-payment' && (
            <>
              <div className="inv-pps-results-grid">
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">Down Payment</span>
                  <strong className="inv-pps-result-val">{formatInrCompact(Math.round(results.downAmt))}</strong>
                </div>
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">Balance</span>
                  <strong className="inv-pps-result-val">
                    {formatInrCompact(Math.round(results.total - results.downAmt))}
                  </strong>
                </div>
              </div>
              <div className="inv-pps-result-total">
                <span className="inv-pps-result-lbl">Total Amount</span>
                <strong className="inv-pps-result-total-val">{formatInrCompact(results.total)}</strong>
              </div>
            </>
          )}

          {planId === 'construction-linked' && (
            <>
              <div className="inv-pps-results-grid">
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">On Booking</span>
                  <strong className="inv-pps-result-val">{formatInrCompact(results.phases[0].amount)}</strong>
                </div>
                <div className="inv-pps-result-item">
                  <span className="inv-pps-result-lbl">On Possession</span>
                  <strong className="inv-pps-result-val">{formatInrCompact(results.phases[3].amount)}</strong>
                </div>
              </div>
              <div className="inv-pps-result-total">
                <span className="inv-pps-result-lbl">Total Value</span>
                <strong className="inv-pps-result-total-val">{formatInrCompact(results.total)}</strong>
              </div>
            </>
          )}

          <button type="button" className="inv-pps-cta-btn">
            Calculate Now
          </button>
        </div>

      </div>
    </section>
  );
}
