"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18n, stems, branches, elementNamesFull, elementColors } from "./data";
import type { Locale } from "./data";

/* ---------- calculation algorithm ---------- */

const STEM_LABELS = ["갑(甲)", "을(乙)", "병(丙)", "정(丁)", "무(戊)", "기(己)", "경(庚)", "신(辛)", "임(壬)", "계(癸)"];
const BRANCH_LABELS = ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(戌)", "해(亥)"];
// element index: 0=목(木), 1=화(火), 2=토(土), 3=금(金), 4=수(水)
const STEM_ELEMENT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 갑을=목, 병정=화, 무기=토, 경신=금, 임계=수
const BRANCH_ELEMENT = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4]; // 자=수, 축=토, 인=목, 묘=목, 진=토, 사=화, 오=화, 미=토, 신=금, 유=금, 술=토, 해=수

function getYearStemBranch(year: number): [number, number] {
  const yearStemIdx = ((year - 4) % 10 + 10) % 10;
  const yearBranchIdx = ((year - 4) % 12 + 12) % 12;
  return [yearStemIdx, yearBranchIdx];
}

function getMonthBranchIdx(month: number, day: number): number {
  // 4th-of-month approximation
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];
  let idx = table[month - 1];
  if (day < 4) {
    idx = (idx - 1 + 12) % 12;
  }
  return idx;
}

function getMonthStemIdx(yearStemIdx: number, monthBranchIdx: number): number {
  // 五虎遁 (Wu Hu Dun) rule: year stem determines month stem starting from 寅
  const yinMonthStemTable = [2, 4, 6, 8, 0];
  const monthSeq = (monthBranchIdx - 2 + 12) % 12;
  return (yinMonthStemTable[yearStemIdx % 5] + monthSeq) % 10;
}

function jdn(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  return d + Math.floor((153 * m2 + 2) / 5) + 365 * y2 + Math.floor(y2 / 4) - Math.floor(y2 / 100) + Math.floor(y2 / 400) - 32045;
}

const REF_OFFSET = 9;

function getDayStemBranch(year: number, month: number, day: number): [number, number] {
  const j = jdn(year, month, day);
  const dayStemIdx = ((j + REF_OFFSET) % 10 + 10) % 10;
  const dayBranchIdx = ((j + REF_OFFSET) % 12 + 12) % 12;
  return [dayStemIdx, dayBranchIdx];
}

function getHourBranchIdx(hour: number): number {
  return Math.floor((hour + 1) / 2) % 12;
}

function getHourStemIdx(dayStemIdx: number, hourBranchIdx: number): number {
  // 五子遁 (Wu Zi Dun) rule: day stem determines hour stem starting from 子
  const ziHourStemTable = [0, 2, 4, 6, 8];
  return (ziHourStemTable[dayStemIdx % 5] + hourBranchIdx) % 10;
}

interface SajuResult {
  yearStem: number;
  yearBranch: number;
  monthStem: number;
  monthBranch: number;
  dayStem: number;
  dayBranch: number;
  hourStem: number;
  hourBranch: number;
  dayMasterElement: number;
}

function calculateSaju(year: number, month: number, day: number, hour: number): SajuResult {
  const [yearStem, yearBranch] = getYearStemBranch(year);
  const monthBranch = getMonthBranchIdx(month, day);
  const monthStem = getMonthStemIdx(yearStem, monthBranch);
  const [dayStem, dayBranch] = getDayStemBranch(year, month, day);
  const hourBranch = getHourBranchIdx(hour);
  const hourStem = getHourStemIdx(dayStem, hourBranch);
  // Day Master element: element of the day stem
  const dayMasterElement = STEM_ELEMENT[dayStem];
  return { yearStem, yearBranch, monthStem, monthBranch, dayStem, dayBranch, hourStem, hourBranch, dayMasterElement };
}

function countElements(result: SajuResult): number[] {
  const indices = [result.yearStem, result.monthStem, result.dayStem, result.hourStem];
  const counts = [0, 0, 0, 0, 0];
  for (const idx of indices) {
    counts[STEM_ELEMENT[idx]]++;
  }
  // Also count branches
  const branchIndices = [result.yearBranch, result.monthBranch, result.dayBranch, result.hourBranch];
  for (const idx of branchIndices) {
    counts[BRANCH_ELEMENT[idx]]++;
  }
  return counts;
}

/* ---------- client component ---------- */

export default function SajuPoolClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = i18n(locale);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [unknownHour, setUnknownHour] = useState(false);
  const [result, setResult] = useState<SajuResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  function handleCalculate() {
    const y = parseInt(year);
    const m = parseInt(month);
    const d = parseInt(day);
    const h = parseInt(hour);

    if (isNaN(y) || isNaN(m) || isNaN(d)) return;
    if (y < 1900 || y > 2100) return;
    if (m < 1 || m > 12) return;
    if (d < 1 || d > 31) return;
    if (!unknownHour) {
      if (isNaN(h) || h < 0 || h > 23) return;
    }

    const sajuResult = calculateSaju(y, m, d, unknownHour ? 0 : h);
    setResult(sajuResult);
    setShowResult(true);
  }

  const elements = result ? countElements(result) : [0, 0, 0, 0, 0];
  const total = elements.reduce((a, b) => a + b, 0);

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

      <div className="mt-8">
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

              {!unknownHour && (
                <div>
                  <label className="text-sm font-medium">{d.hour}</label>
                  <input
                    type="number"
                    min="0"
                    max="23"
                    placeholder="14"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="unknown-hour"
                  checked={unknownHour}
                  onChange={(e) => setUnknownHour(e.target.checked)}
                  className="accent-indigo-600"
                />
                <label htmlFor="unknown-hour" className="text-sm text-muted-foreground cursor-pointer">
                  {d.hourUnknown}
                </label>
              </div>
              <p className="text-xs text-muted-foreground">{d.hourOptional}</p>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                {d.calculate}
              </button>
            </div>

            {showResult && result && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-6">
                <p className="text-sm font-semibold">{d.result}</p>

                {/* Day Master */}
                <div className="text-center">
                  <p className="text-sm font-medium text-indigo-600">{d.dayMaster}</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-800">
                    {stems[locale][result.dayStem]}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {elementNamesFull[locale][result.dayMasterElement]}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {d.sajuExplanation.split("\n\n")[0]}
                  </p>
                </div>

                {/* Four Pillars Grid */}
                <div>
                  <p className="mb-3 text-center text-sm font-semibold">{d.fourPillars}</p>
                  <div className="grid grid-cols-4 gap-3">
                    {([
                      { stem: result.yearStem, branch: result.yearBranch, label: "년주 (年柱)" },
                      { stem: result.monthStem, branch: result.monthBranch, label: "월주 (月柱)" },
                      { stem: result.dayStem, branch: result.dayBranch, label: "일주 (日柱)" },
                      { stem: result.hourStem, branch: result.hourBranch, label: unknownHour ? d.noHour : "시주 (時柱)" },
                    ]).map((pillar, i) => (
                      <div key={i} className="text-center space-y-1">
                        <p className="text-xs text-muted-foreground">{pillar.label}</p>
                        <div className={`rounded-lg ${elementColors[STEM_ELEMENT[pillar.stem]].bg} p-3`}>
                          <p className={`text-xl font-bold ${elementColors[STEM_ELEMENT[pillar.stem]].text}`}>
                            {stems[locale][pillar.stem]}
                          </p>
                          <p className={`mt-1 text-lg ${elementColors[STEM_ELEMENT[pillar.stem]].text}`}>
                            {branches[locale][pillar.branch]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Five Elements Ratio */}
                <div>
                  <p className="mb-3 text-center text-sm font-semibold">{d.fiveElements}</p>
                  <div className="flex justify-center gap-4">
                    {elements.map((count, idx) => {
                      const pct = total > 0 ? Math.round((count / total) * 100) : 0;
                      return (
                        <div key={idx} className="text-center">
                          <p className={`text-lg font-bold ${elementColors[idx].text}`}>
                            {elementColors[idx].icon} {pct}%
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {elementNamesFull[locale][idx].split("(")[0]}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>
    </div>
  );
}
