"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  i18n,
  elementNamesFull,
  elementColors,
  generalFortune,
  wealthFortune,
  loveFortune,
  healthFortune,
  yearModifiers,
  yearModifierSentence,
  luckyColors,
  luckyItems,
  cautionTexts,
} from "./data";
import type { Locale } from "./data";

/* ---------- calculation algorithm (day-pillar element reused from saju-pool design) ---------- */

// element index: 0=목(木), 1=화(火), 2=토(土), 3=금(金), 4=수(水)
const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 갑을=목, 병정=화, 무기=토, 경신=금, 임계=수

function jdn(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  return d + Math.floor((153 * m2 + 2) / 5) + 365 * y2 + Math.floor(y2 / 4) - Math.floor(y2 / 100) + Math.floor(y2 / 400) - 32045;
}

const REF_OFFSET = 9;

function getDayElementIdx(year: number, month: number, day: number): number {
  const j = jdn(year, month, day);
  const dayStemIdx = ((j + REF_OFFSET) % 10 + 10) % 10;
  return STEM_ELEMENT[dayStemIdx];
}

function getYearModifierIdx(year: number, month: number, day: number): number {
  return ((year + month + day) % 12 + 12) % 12;
}

interface TojungResult {
  elementIdx: number;
  modIdx: number;
}

/* ---------- client component ---------- */

export default function TojungFortuneClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = i18n(locale);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState<TojungResult | null>(null);

  function handleCalculate() {
    const y = parseInt(year);
    const m = parseInt(month);
    const dd = parseInt(day);

    if (isNaN(y) || isNaN(m) || isNaN(dd)) return;
    if (y < 1900 || y > 2100) return;
    if (m < 1 || m > 12) return;
    if (dd < 1 || dd > 31) return;

    setResult({
      elementIdx: getDayElementIdx(y, m, dd),
      modIdx: getYearModifierIdx(y, m, dd),
    });
  }

  const modSentence = result
    ? yearModifierSentence[locale].replace("{mod}", yearModifiers[locale][result.modIdx])
    : "";

  return (
    <div>

      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          <div className="rounded-lg bg-muted p-4 space-y-4">
            <h3 className="text-sm font-semibold">{d.inputs}</h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium">{d.year}</label>
                <input
                  type="number"
                  min="1900"
                  max="2100"
                  placeholder="1990"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">{d.month}</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  placeholder="1"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">{d.day}</label>
                <input
                  type="number"
                  min="1"
                  max="31"
                  placeholder="1"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
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
            <div className="rounded-lg bg-indigo-50 p-6 space-y-5">
              <div className="text-center">
                <p className="text-sm font-semibold text-indigo-700">{d.result}</p>
                <p className={`mt-2 text-2xl font-bold ${elementColors[result.elementIdx].text}`}>
                  {elementColors[result.elementIdx].icon} {elementNamesFull[locale][result.elementIdx]}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{modSentence}</p>
              </div>

              <div className="space-y-3">
                <div className={`rounded-lg ${elementColors[result.elementIdx].bg} p-3`}>
                  <p className="text-xs font-semibold text-muted-foreground">{d.generalLabel}</p>
                  <p className="mt-1 text-sm">{generalFortune[locale][result.elementIdx]}</p>
                </div>
                <div className={`rounded-lg ${elementColors[result.elementIdx].bg} p-3`}>
                  <p className="text-xs font-semibold text-muted-foreground">{d.wealthLabel}</p>
                  <p className="mt-1 text-sm">{wealthFortune[locale][result.elementIdx]}</p>
                </div>
                <div className={`rounded-lg ${elementColors[result.elementIdx].bg} p-3`}>
                  <p className="text-xs font-semibold text-muted-foreground">{d.loveLabel}</p>
                  <p className="mt-1 text-sm">{loveFortune[locale][result.elementIdx]}</p>
                </div>
                <div className={`rounded-lg ${elementColors[result.elementIdx].bg} p-3`}>
                  <p className="text-xs font-semibold text-muted-foreground">{d.healthLabel}</p>
                  <p className="mt-1 text-sm">{healthFortune[locale][result.elementIdx]}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{d.luckyColor}</p>
                  <p className="mt-1 text-sm font-medium">{luckyColors[locale][result.elementIdx]}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{d.luckyItem}</p>
                  <p className="mt-1 text-sm font-medium">{luckyItems[locale][result.elementIdx]}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-muted-foreground">{d.caution}</p>
                <p className="mt-1 text-sm">{cautionTexts[locale][result.elementIdx]}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
    </div>
  );
}
