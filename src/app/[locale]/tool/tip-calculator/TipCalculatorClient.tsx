"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18n } from "./data";
import type { Locale } from "./data";

const PRESETS = [10, 15, 18, 20];

export default function TipCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("15");
  const [people, setPeople] = useState("1");
  const [result, setResult] = useState<{ tip: number; total: number; perPerson: number } | null>(null);

  function handleCalculate() {
    const amt = parseFloat(amount);
    const pct = parseFloat(percent);
    const ppl = parseInt(people) || 1;
    if (isNaN(amt) || amt < 0 || isNaN(pct) || pct < 0 || ppl < 1) return;

    const tip = amt * (pct / 100);
    const total = amt + tip;
    const perPerson = total / ppl;
    setResult({ tip, total, perPerson });
  }

  return (
    <div>
      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card className="border shadow-md">
        <CardContent className="space-y-4 p-6">
          <div className="rounded-lg bg-muted p-4 space-y-4">
            <h3 className="text-sm font-semibold">{d.inputs}</h3>

            <div>
              <label className="text-sm font-medium">{d.amount}</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">{d.percent}</label>
              <div className="mt-1 flex gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPercent(String(p))}
                    className={`rounded-md border px-3 py-1 text-sm ${
                      percent === String(p) ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"
                    }`}
                  >
                    {p}%
                  </button>
                ))}
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={percent}
                  onChange={(e) => setPercent(e.target.value)}
                  className="w-20 rounded-md border px-2 py-1 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">{d.people}</label>
              <input
                type="number"
                min="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <button
              type="button"
              onClick={handleCalculate}
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              {d.calculate}
            </button>
          </div>

          {result && (
            <div className="rounded-lg bg-indigo-50 p-6 space-y-3">
              <p className="text-center text-sm font-semibold text-indigo-700">{d.result}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">{d.tipAmount}</p>
                  <p className="mt-1 text-lg font-bold text-indigo-800">{result.tip.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{d.totalAmount}</p>
                  <p className="mt-1 text-lg font-bold text-indigo-800">{result.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{d.perPerson}</p>
                  <p className="mt-1 text-lg font-bold text-indigo-800">{result.perPerson.toFixed(2)}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
