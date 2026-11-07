"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18n } from "./data";
import type { Locale } from "./data";

export default function DtiCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [income, setIncome] = useState("");
  const [debt, setDebt] = useState("");
  const [dti, setDti] = useState<number | null>(null);

  function handleCalculate() {
    const inc = parseFloat(income);
    const dbt = parseFloat(debt);
    if (isNaN(inc) || inc <= 0 || isNaN(dbt) || dbt < 0) return;
    setDti((dbt / inc) * 100);
  }

  function gradeLabel(rate: number) {
    if (rate <= 36) return { text: d.gradeGood, color: "text-emerald-700" };
    if (rate <= 43) return { text: d.gradeCaution, color: "text-amber-700" };
    return { text: d.gradeRisk, color: "text-red-700" };
  }

  return (
    <div>

      <Card className="border shadow-md">
        <CardContent className="space-y-4 p-6">
          <div className="rounded-lg bg-muted p-4 space-y-4">
            <h3 className="text-sm font-semibold">{d.inputs}</h3>
            <div>
              <label className="text-sm font-medium">{d.monthlyIncome}</label>
              <input
                type="number"
                min="0"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">{d.monthlyDebt}</label>
              <input
                type="number"
                min="0"
                value={debt}
                onChange={(e) => setDebt(e.target.value)}
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

          {dti !== null && (
            <div className="rounded-lg bg-indigo-50 p-6 text-center space-y-2">
              <p className="text-sm font-semibold text-indigo-700">{d.result}</p>
              <p className="text-3xl font-bold text-indigo-800">{dti.toFixed(1)}%</p>
              <p className={`text-sm font-medium ${gradeLabel(dti).color}`}>{gradeLabel(dti).text}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
