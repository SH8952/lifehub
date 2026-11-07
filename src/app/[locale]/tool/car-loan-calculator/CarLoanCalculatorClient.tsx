"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

interface Result {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export default function CarLoanCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const price = parseFloat(carPrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(annualRate);
    const n = parseFloat(months);
    if (isNaN(price) || isNaN(down) || isNaN(rate) || isNaN(n) || price < 0 || down < 0 || rate < 0 || n <= 0) {
      setResult(null);
      return;
    }
    const principal = price - down;
    const r = rate / 100 / 12;
    let monthlyPayment: number;
    if (r === 0) {
      monthlyPayment = principal / n;
    } else {
      const factor = Math.pow(1 + r, n);
      monthlyPayment = (principal * r * factor) / (factor - 1);
    }
    const totalPayment = monthlyPayment * n + down;
    const totalInterest = totalPayment - price;
    setResult({ monthlyPayment, totalPayment, totalInterest });
  }


  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.carPrice}</label>
            <input
              type="number"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.downPayment}</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
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
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.months}</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
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
                <div className="text-xs text-blue-600">{d.monthlyPayment}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs text-gray-500">{d.totalPayment}</div>
                <div className="text-xl font-bold text-gray-900">
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
          </div>
        )}
      </div>
    </div>
  );
}
