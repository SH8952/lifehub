"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type Mode = "pretax" | "posttax";

interface Result {
  preTax: number;
  tax: number;
  postTax: number;
}

export default function VatCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("10");
  const [mode, setMode] = useState<Mode>("pretax");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const amt = parseFloat(amount);
    const r = parseFloat(rate);
    if (isNaN(amt) || isNaN(r) || amt < 0 || r < 0) {
      setResult(null);
      return;
    }
    if (mode === "pretax") {
      const tax = amt * (r / 100);
      const postTax = amt + tax;
      setResult({ preTax: amt, tax, postTax });
    } else {
      const preTax = amt / (1 + r / 100);
      const tax = amt - preTax;
      setResult({ preTax, tax, postTax: amt });
    }
  }


  return (
    <div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{d.inputs}</h2>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setMode("pretax")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "pretax" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modePretax}
          </button>
          <button
            onClick={() => setMode("posttax")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "posttax" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modePosttax}
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.amount}</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.rate}</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="10"
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
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs text-gray-500">{d.preTax}</div>
                <div className="text-xl font-bold text-gray-900">
                  {result.preTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.taxAmount}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="text-xs text-blue-600">{d.postTax}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.postTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
