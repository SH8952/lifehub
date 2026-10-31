"use client";

import { useState } from "react";
import { i18n, type Locale } from "./data";

type Tab = "fuelUsed" | "economy";
type EconomyUnit = "kml" | "l100km" | "mpg";

interface Result {
  economyKmL: number;
  fuelUsedL: number;
  totalCost: number;
  perPerson: number | null;
}

function toKmL(value: number, unit: EconomyUnit): number {
  if (unit === "kml") return value;
  if (unit === "l100km") return 100 / value;
  return value / 2.352; // mpg
}

function fromKmL(kml: number, unit: EconomyUnit): number {
  if (unit === "kml") return kml;
  if (unit === "l100km") return 100 / kml;
  return kml * 2.352; // mpg
}

function unitLabel(unit: EconomyUnit, d: { unitKmL: string; unitLPer100km: string; unitMpg: string }): string {
  if (unit === "kml") return d.unitKmL;
  if (unit === "l100km") return d.unitLPer100km;
  return d.unitMpg;
}

export default function FuelCostCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [distance, setDistance] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);
  const [tab, setTab] = useState<Tab>("fuelUsed");
  const [fuelUsedInput, setFuelUsedInput] = useState("");
  const [economyValue, setEconomyValue] = useState("");
  const [economyUnit, setEconomyUnit] = useState<EconomyUnit>("kml");
  const [fuelPrice, setFuelPrice] = useState("");
  const [passengers, setPassengers] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function handleCalculate() {
    const dist0 = parseFloat(distance);
    const price = parseFloat(fuelPrice);
    if (isNaN(dist0) || isNaN(price) || dist0 <= 0 || price < 0) {
      setResult(null);
      return;
    }
    const dist = roundTrip ? dist0 * 2 : dist0;

    let economyKmL: number;
    let fuelUsedL: number;

    if (tab === "fuelUsed") {
      const fu = parseFloat(fuelUsedInput);
      if (isNaN(fu) || fu <= 0) {
        setResult(null);
        return;
      }
      fuelUsedL = fu;
      economyKmL = dist / fu;
    } else {
      const ev = parseFloat(economyValue);
      if (isNaN(ev) || ev <= 0) {
        setResult(null);
        return;
      }
      economyKmL = toKmL(ev, economyUnit);
      fuelUsedL = dist / economyKmL;
    }

    const totalCost = fuelUsedL * price;
    const pax = parseFloat(passengers);
    const perPerson = !isNaN(pax) && pax > 0 ? totalCost / pax : null;

    setResult({ economyKmL, fuelUsedL, totalCost, perPerson });
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
            <label className="mb-1 block text-sm text-gray-600">{d.distance}</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div className="flex items-end pb-2">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={roundTrip} onChange={(e) => setRoundTrip(e.target.checked)} />
              {d.roundTrip}
            </label>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setTab("fuelUsed")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              tab === "fuelUsed" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.tabFuelUsed}
          </button>
          <button
            onClick={() => setTab("economy")}
            className={`flex-1 rounded px-3 py-2 text-sm ${
              tab === "economy" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.tabEconomy}
          </button>
        </div>

        {tab === "fuelUsed" ? (
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-600">{d.fuelUsed}</label>
            <input
              type="number"
              value={fuelUsedInput}
              onChange={(e) => setFuelUsedInput(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
        ) : (
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.economyValue}</label>
              <input
                type="number"
                value={economyValue}
                onChange={(e) => setEconomyValue(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
                placeholder="0"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">{d.economyUnit}</label>
              <select
                value={economyUnit}
                onChange={(e) => setEconomyUnit(e.target.value as EconomyUnit)}
                className="w-full rounded border border-gray-300 px-3 py-2"
              >
                <option value="kml">{d.unitKmL}</option>
                <option value="l100km">{d.unitLPer100km}</option>
                <option value="mpg">{d.unitMpg}</option>
              </select>
            </div>
          </div>
        )}

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.fuelPrice}</label>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="0"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-600">{d.passengers}</label>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2"
              placeholder="1"
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
                <div className="text-xs text-gray-500">{d.economyLabel}</div>
                <div className="text-xl font-bold text-gray-900">
                  {fromKmL(result.economyKmL, tab === "economy" ? economyUnit : "kml").toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {tab === "economy" ? unitLabel(economyUnit, d) : d.unitKmL}
                </div>
              </div>
              <div className="rounded-lg bg-amber-50 p-4">
                <div className="text-xs text-amber-600">{d.totalCost}</div>
                <div className="text-xl font-bold text-amber-700">
                  {result.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              {result.perPerson !== null && (
                <div className="rounded-lg bg-blue-50 p-4">
                  <div className="text-xs text-blue-600">{d.perPerson}</div>
                  <div className="text-xl font-bold text-blue-700">
                    {result.perPerson.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
