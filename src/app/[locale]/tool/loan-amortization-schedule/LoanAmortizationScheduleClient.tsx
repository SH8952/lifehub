"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type RepaymentType = "equalPayment" | "equalPrincipal";

interface ScheduleRow {
  round: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface Result {
  totalPayment: number;
  totalInterest: number;
  schedule: ScheduleRow[];
}

export default function LoanAmortizationScheduleClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [loanAmount, setLoanAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [months, setMonths] = useState("");
  const [repaymentType, setRepaymentType] = useState<RepaymentType>("equalPayment");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(annualRate);
    const n = Math.round(parseFloat(months));
    if (isNaN(amount) || isNaN(rate) || isNaN(n) || amount <= 0 || rate < 0 || n <= 0 || n > 360) {
      setResult(null);
      return;
    }
    const r = rate / 100 / 12;
    const schedule: ScheduleRow[] = [];
    let balance = amount;
    let totalPayment = 0;

    if (repaymentType === "equalPayment") {
      let monthlyPayment: number;
      if (r === 0) {
        monthlyPayment = amount / n;
      } else {
        const factor = Math.pow(1 + r, n);
        monthlyPayment = (amount * r * factor) / (factor - 1);
      }
      for (let i = 1; i <= n; i++) {
        const interest = balance * r;
        let principal = monthlyPayment - interest;
        if (i === n) {
          principal = balance;
        }
        balance = Math.max(0, balance - principal);
        const payment = principal + interest;
        totalPayment += payment;
        schedule.push({ round: i, payment, principal, interest, balance });
      }
    } else {
      const fixedPrincipal = amount / n;
      for (let i = 1; i <= n; i++) {
        const interest = balance * r;
        let principal = fixedPrincipal;
        if (i === n) {
          principal = balance;
        }
        balance = Math.max(0, balance - principal);
        const payment = principal + interest;
        totalPayment += payment;
        schedule.push({ round: i, payment, principal, interest, balance });
      }
    }

    const totalInterest = totalPayment - amount;
    setResult({ totalPayment, totalInterest, schedule });
  }

  const locales: Locale[] = ["ko", "en", "ja", "es"];
  const localeLabels: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語", es: "Español" };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded px-3 py-1 text-sm ${
              locale === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.loanAmount}</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.annualRate}</label>
            <input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.months}</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="0 (최대 360)"
            max={360}
          />
        </div>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setRepaymentType("equalPayment")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              repaymentType === "equalPayment" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.typeEqualPayment}
          </button>
          <button
            onClick={() => setRepaymentType("equalPrincipal")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              repaymentType === "equalPrincipal" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.typeEqualPrincipal}
          </button>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.calculate}
        </button>

        {result && (
          <div className="mt-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-700">{d.result}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="text-xs text-blue-600">{d.totalPayment}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.totalInterest}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-700">{d.scheduleTitle}</h4>
              <div className="max-h-96 overflow-y-auto rounded-lg border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-gray-100">
                    <tr>
                      <th className="px-2 py-2 text-left">{d.colRound}</th>
                      <th className="px-2 py-2 text-right">{d.colPayment}</th>
                      <th className="px-2 py-2 text-right">{d.colPrincipal}</th>
                      <th className="px-2 py-2 text-right">{d.colInterest}</th>
                      <th className="px-2 py-2 text-right">{d.colBalance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.round} className="border-t border-gray-100">
                        <td className="px-2 py-1.5">{row.round}</td>
                        <td className="px-2 py-1.5 text-right">
                          {row.payment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                        <td className="px-2 py-1.5 text-right">
                          {row.principal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                        <td className="px-2 py-1.5 text-right">
                          {row.interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                        <td className="px-2 py-1.5 text-right">
                          {row.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
