"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type Frequency = "yearly" | "monthly" | "daily";

const FREQ_N: Record<Frequency, number> = { yearly: 1, monthly: 12, daily: 365 };

interface Result {
  finalAmount: number;
  totalInterest: number;
}

export default function CompoundInterestCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [principal, setPrincipal] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const p = parseFloat(principal);
    const r = parseFloat(annualRate);
    const y = parseFloat(years);
    if (isNaN(p) || isNaN(r) || isNaN(y) || p < 0 || r < 0 || y <= 0) {
      setResult(null);
      return;
    }
    const n = FREQ_N[frequency];
    const finalAmount = p * Math.pow(1 + r / 100 / n, n * y);
    const totalInterest = finalAmount - p;
    setResult({ finalAmount, totalInterest });
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
            <label className="mb-1 block text-sm text-gray-600">{d.principal}</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
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

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.frequency}</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Frequency)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            >
              <option value="yearly">{d.freqYearly}</option>
              <option value="monthly">{d.freqMonthly}</option>
              <option value="daily">{d.freqDaily}</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.years}</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          {d.calculate}
        </button>

        {result && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">{d.result}</h3>
            <div className="grid gap-3">
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="text-xs text-blue-600">{d.finalAmount}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.finalAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.totalInterest}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
