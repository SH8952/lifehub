"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type Mode = "rentToDeposit" | "depositToRent";

interface Result {
  newDeposit: number;
  newRent: number;
}

export default function DepositRentConverterClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [mode, setMode] = useState<Mode>("rentToDeposit");
  const [currentDeposit, setCurrentDeposit] = useState("");
  const [currentRent, setCurrentRent] = useState("");
  const [rate, setRate] = useState("5.5");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const deposit = parseFloat(currentDeposit);
    const rent = parseFloat(currentRent);
    const r = parseFloat(rate);
    if (isNaN(deposit) || isNaN(rent) || isNaN(r) || deposit < 0 || rent < 0 || r <= 0) {
      setResult(null);
      return;
    }

    if (mode === "rentToDeposit") {
      const additionalDeposit = ((rent * 12) / r) * 100;
      setResult({ newDeposit: deposit + additionalDeposit, newRent: 0 });
    } else {
      const rentIncrease = (deposit * r) / 100 / 12;
      setResult({ newDeposit: 0, newRent: rent + rentIncrease });
    }
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

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setMode("rentToDeposit")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "rentToDeposit" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modeRentToDeposit}
          </button>
          <button
            onClick={() => setMode("depositToRent")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              mode === "depositToRent" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.modeDepositToRent}
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.currentDeposit}</label>
            <input
              type="number"
              value={currentDeposit}
              onChange={(e) => setCurrentDeposit(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.currentRent}</label>
            <input
              type="number"
              value={currentRent}
              onChange={(e) => setCurrentRent(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-gray-600">{d.rate}</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="5.5"
          />
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
                <div className="text-xs text-gray-500">{d.newDeposit}</div>
                <div className="text-xl font-bold text-gray-900">
                  {result.newDeposit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <div className="text-xs text-blue-600">{d.newRent}</div>
                <div className="text-xl font-bold text-blue-700">
                  {result.newRent.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
