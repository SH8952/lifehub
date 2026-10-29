"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

interface Result {
  monthlyPayment: number;
  totalFee: number;
  totalPayment: number;
}

export default function CardInstallmentCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("3");
  const [monthlyFeeRate, setMonthlyFeeRate] = useState("1.5");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const amt = parseFloat(amount);
    const n = parseFloat(months);
    const rate = parseFloat(monthlyFeeRate);
    if (isNaN(amt) || isNaN(n) || isNaN(rate) || amt <= 0 || n <= 0 || rate < 0) {
      setResult(null);
      return;
    }
    const totalFee = (amt * rate * n) / 100;
    const totalPayment = amt + totalFee;
    const monthlyPayment = totalPayment / n;
    setResult({ monthlyPayment, totalFee, totalPayment });
  }

  const monthOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24];
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

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.amount}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="0"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.months}</label>
            <select
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
            >
              {monthOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.monthlyFeeRate}</label>
            <input
              type="number"
              value={monthlyFeeRate}
              onChange={(e) => setMonthlyFeeRate(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="1.5"
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
                <div className="text-xs text-blue-600">{d.monthlyPayment}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.totalFee}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.totalFee.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs text-gray-500">{d.totalPayment}</div>
                <div className="text-xl font-bold text-gray-900">
                  {result.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
