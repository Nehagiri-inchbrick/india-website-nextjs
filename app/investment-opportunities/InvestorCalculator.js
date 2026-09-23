'use client';

import { useEffect, useMemo, useState } from 'react';
import { formatInrAmount, getStoredCurrencyCode } from '@/lib/currency';

export default function InvestorCalculator() {
  const [currency, setCurrency] = useState('INR');
  const [purchase, setPurchase] = useState(8500000);
  const [monthlyRent, setMonthlyRent] = useState(32000);
  const [maintenance, setMaintenance] = useState(48000);
  const [downPct, setDownPct] = useState(25);
  const [appRate, setAppRate] = useState(8);
  const [years, setYears] = useState(7);
  const [interestRate, setInterestRate] = useState(8.5);

  useEffect(() => {
    const sync = () => setCurrency(getStoredCurrencyCode());
    sync();
    window.addEventListener('inchbrick-currency-change', sync);
    return () => window.removeEventListener('inchbrick-currency-change', sync);
  }, []);

  function money(n) {
    return formatInrAmount(n, currency);
  }

  const roi = useMemo(() => {
    const invested = purchase * (downPct / 100);
    const futureVal = purchase * Math.pow(1 + appRate / 100, years);
    const capGain = futureVal - purchase;
    const rentTotal = monthlyRent * 12 * years - maintenance * years;
    const totalReturn = capGain + rentTotal;
    const roiPct = invested > 0 ? (totalReturn / invested) * 100 : 0;
    const annualRoi =
      invested > 0 ? (Math.pow(1 + totalReturn / invested, 1 / years) - 1) * 100 : 0;
    return { invested, capGain, rentTotal, totalReturn, roiPct, annualRoi };
  }, [purchase, downPct, appRate, monthlyRent, years, maintenance]);

  return (
    <div className="inv-calc inv-calc-mock">
      <div className="inv-calc-grid">
        <div className="inv-calc-form">
          <p className="inv-calc-mode">
            <span className="is-on">Buy property</span>
            <span>Rent &amp; yield</span>
          </p>
          <label>
            Property value
            <input
              type="number"
              min="100000"
              step="100000"
              value={purchase}
              onChange={(e) => setPurchase(Number(e.target.value) || 0)}
            />
          </label>
          <label>
            Monthly rent
            <input
              type="number"
              min="0"
              step="1000"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value) || 0)}
            />
          </label>
          <label>
            Annual maintenance
            <input
              type="number"
              min="0"
              step="5000"
              value={maintenance}
              onChange={(e) => setMaintenance(Number(e.target.value) || 0)}
            />
          </label>
          <label>
            Down payment <b>{downPct}%</b>
            <input
              type="range"
              min="10"
              max="50"
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
            />
          </label>
          <label>
            Annual appreciation <b>{appRate}%</b>
            <input
              type="range"
              min="3"
              max="15"
              step="0.5"
              value={appRate}
              onChange={(e) => setAppRate(Number(e.target.value))}
            />
          </label>
          <label>
            Hold period <b>{years} years</b>
            <input
              type="range"
              min="3"
              max="15"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </label>
          <label>
            Interest rate <b>{interestRate}%</b>
            <input
              type="range"
              min="7"
              max="12"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="inv-calc-result inv-calc-result-mock">
          <p>Estimated returns</p>
          <strong>{roi.roiPct.toFixed(1)}%</strong>
          <ul>
            <li>
              <span>Capital gain</span>
              <b>{money(roi.capGain)}</b>
            </li>
            <li>
              <span>Rental income</span>
              <b>{money(roi.rentTotal)}</b>
            </li>
            <li>
              <span>Total returns</span>
              <b>{money(roi.totalReturn)}</b>
            </li>
            <li>
              <span>Annual ROI</span>
              <b>{roi.annualRoi.toFixed(1)}%</b>
            </li>
          </ul>
          <em>Illustrative only. Excludes taxes, stamp duty, and loan interest.</em>
        </div>
      </div>
    </div>
  );
}
