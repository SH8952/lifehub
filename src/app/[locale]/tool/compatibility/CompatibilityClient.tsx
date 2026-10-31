"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  i18n,
  elementNamesFull,
  elementColors,
  tierNames,
  tierRates,
  strengthsTemplates,
  challengesTemplates,
  adviceTemplates,
} from "./data";
import type { Locale } from "./data";

/* ---------- calculation algorithm (day-pillar element reused from saju-pool design) ---------- */

const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 0=목,1=화,2=토,3=금,4=수

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

// tier: 0=상생(최고), 1=동일오행, 2=상극(주의)
function getTier(elemA: number, elemB: number): { tier: number; genDirection: "a2b" | "b2a" | null } {
  if (elemA === elemB) return { tier: 1, genDirection: null };
  const generatesAtoB = (elemA + 1) % 5 === elemB;
  const generatesBtoA = (elemB + 1) % 5 === elemA;
  if (generatesAtoB) return { tier: 0, genDirection: "a2b" };
  if (generatesBtoA) return { tier: 0, genDirection: "b2a" };
  return { tier: 2, genDirection: null };
}

interface CompatResult {
  elemA: number;
  elemB: number;
  tier: number;
  genDirection: "a2b" | "b2a" | null;
}

/* ---------- client component ---------- */

export default function CompatibilityClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [name1, setName1] = useState("");
  const [year1, setYear1] = useState("");
  const [month1, setMonth1] = useState("");
  const [day1, setDay1] = useState("");

  const [name2, setName2] = useState("");
  const [year2, setYear2] = useState("");
  const [month2, setMonth2] = useState("");
  const [day2, setDay2] = useState("");

  const [result, setResult] = useState<CompatResult | null>(null);

  function handleCalculate() {
    const y1 = parseInt(year1), m1 = parseInt(month1), dd1 = parseInt(day1);
    const y2 = parseInt(year2), m2 = parseInt(month2), dd2 = parseInt(day2);

    for (const v of [y1, m1, dd1, y2, m2, dd2]) {
      if (isNaN(v)) return;
    }
    if (y1 < 1900 || y1 > 2100 || y2 < 1900 || y2 > 2100) return;
    if (m1 < 1 || m1 > 12 || m2 < 1 || m2 > 12) return;
    if (dd1 < 1 || dd1 > 31 || dd2 < 1 || dd2 > 31) return;

    const elemA = getDayElementIdx(y1, m1, dd1);
    const elemB = getDayElementIdx(y2, m2, dd2);
    const { tier, genDirection } = getTier(elemA, elemB);
    setResult({ elemA, elemB, tier, genDirection });
  }

  function personInput(
    label: string,
    name: string,
    setName: (v: string) => void,
    year: string,
    setYear: (v: string) => void,
    month: string,
    setMonth: (v: string) => void,
    day: string,
    setDay: (v: string) => void
  ) {
    return (
      <div className="rounded-lg bg-muted p-4 space-y-3">
        <h3 className="text-sm font-semibold">{label}</h3>
        <div>
          <label className="text-sm font-medium">{d.name}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="text-sm font-medium">{d.birthYear}</label>
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
            <label className="text-sm font-medium">{d.birthMonth}</label>
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
            <label className="text-sm font-medium">{d.birthDay}</label>
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
      </div>
    );
  }

  return (
    <div>
      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card className="border shadow-md">
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {personInput(d.person1, name1, setName1, year1, setYear1, month1, setMonth1, day1, setDay1)}
            {personInput(d.person2, name2, setName2, year2, setYear2, month2, setMonth2, day2, setDay2)}
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            {d.calculate}
          </button>

          {result && (
            <div className="rounded-lg bg-indigo-50 p-6 space-y-5">
              <p className="text-center text-sm font-semibold text-indigo-700">{d.result}</p>

              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{name1 || d.person1}</p>
                  <p className={`mt-1 text-xl font-bold ${elementColors[result.elemA].text}`}>
                    {elementColors[result.elemA].icon} {elementNamesFull[locale][result.elemA]}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">{name2 || d.person2}</p>
                  <p className={`mt-1 text-xl font-bold ${elementColors[result.elemB].text}`}>
                    {elementColors[result.elemB].icon} {elementNamesFull[locale][result.elemB]}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-semibold">{d.compatibility}</p>
                <p className="mt-1 text-2xl font-bold text-indigo-800">{tierNames[locale][result.tier]}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {d.compatibilityRate}: {tierRates[result.tier]}%
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg bg-white p-3">
                  <p className="text-xs font-semibold text-muted-foreground">{d.strengths}</p>
                  <p className="mt-1 text-sm">
                    {(() => {
                      const generatorElem = result.genDirection === "b2a" ? result.elemB : result.elemA;
                      const receiverElem = result.genDirection === "b2a" ? result.elemA : result.elemB;
                      return strengthsTemplates[locale][result.tier]
                        .replace("{a}", elementNamesFull[locale][generatorElem].split("(")[0])
                        .replace("{b}", elementNamesFull[locale][receiverElem].split("(")[0]);
                    })()}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="text-xs font-semibold text-muted-foreground">{d.challenges}</p>
                  <p className="mt-1 text-sm">{challengesTemplates[locale][result.tier]}</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="text-xs font-semibold text-muted-foreground">{d.advice}</p>
                  <p className="mt-1 text-sm">{adviceTemplates[locale][result.tier]}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
    </div>
  );
}
