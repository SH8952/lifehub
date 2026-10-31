"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

interface Result {
  nominalValue: number;
  realValue: number;
  increase: number;
}

export default function RetirementSimulatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [currentAge, setCurrentAge] = useState("");
  const [retireAge, setRetireAge] = useState("");
  const [currentAssets, setCurrentAssets] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [annualInflation, setAnnualInflation] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const cAge = parseFloat(currentAge);
    const rAge = parseFloat(retireAge);
    const assets = parseFloat(currentAssets);
    const contribution = parseFloat(monthlyContribution);
    const retn = parseFloat(annualReturn);
    const inflation = parseFloat(annualInflation);

    if (
      isNaN(cAge) ||
      isNaN(rAge) ||
      isNaN(assets) ||
      isNaN(contribution) ||
      isNaN(retn) ||
      isNaN(inflation) ||
      rAge <= cAge ||
      assets < 0 ||
      contribution < 0
    ) {
      setResult(null);
      return;
    }

    const years = rAge - cAge;
    const months = years * 12;
    const monthlyReturn = retn / 100 / 12;

    let nominalValue: number;
    if (monthlyReturn === 0) {
      nominalValue = assets + contribution * months;
    } else {
      const factor = Math.pow(1 + monthlyReturn, months);
      nominalValue = assets * factor + contribution * ((factor - 1) / monthlyReturn);
    }

    const realValue = nominalValue / Math.pow(1 + inflation / 100, years);
    const increase = nominalValue - assets;

    setResult({ nominalValue, realValue, increase });
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
              locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"
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
            <label className="mb-1 block text-sm text-gray-600">{d.currentAge}</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.retireAge}</label>
            <input
              type="number"
              value={retireAge}
              onChange={(e) => setRetireAge(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.currentAssets}</label>
            <input
              type="number"
              value={currentAssets}
              onChange={(e) => setCurrentAssets(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.monthlyContribution}</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.annualReturn}</label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.annualInflation}</label>
            <input
              type="number"
              value={annualInflation}
              onChange={(e) => setAnnualInflation(e.target.value)}
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
                <div className="text-xs text-blue-600">{d.nominalValue}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.nominalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs text-gray-500">{d.realValue}</div>
                <div className="text-xl font-bold text-gray-900">
                  {result.realValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.increase}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.increase.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
