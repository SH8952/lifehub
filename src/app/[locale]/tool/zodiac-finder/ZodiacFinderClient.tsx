"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

type Locale = "ko" | "en" | "ja" | "es";

interface ZodiacEntry {
  sign: string;
  emoji: string;
  dateRange: string;
  element: string;
  description: string;
}

interface ZodiacFinderClientProps {
  signs: ZodiacEntry[];
  locale: Locale;
  labels: {
    title: string;
    subtitle: string;
    selectBirthday: string;
    monthLabel: string;
    dayLabel: string;
    processingMsg: string;
    find: string;
    result: string;
    element: string;
    noResult: string;
    whyZodiac: string;
    zodiacExplanation: string;
    limitations: string;
    disclaimer: string;
    footer: string;
    faq: Array<{ q: string; a: string }>;
    back: string;
  };
  faq: Array<{ q: string; a: string }>;
  backHref: string;
}

const ELEMENT_NAMES: Record<Locale, Record<string, string>> = {
  ko: { 공기: "공기", 물: "물", 불: "불", 흙: "흙" },
  en: { Air: "Air", Water: "Water", Fire: "Fire", Earth: "Earth" },
  ja: { "空気": "空気", "水": "水", "火": "火", "土": "土" },
  es: { Aire: "Aire", Agua: "Agua", Fuego: "Fuego", Tierra: "Tierra" },
};

const ZODIAC_RANGES: Array<{
  sign: string;
  emoji: string;
  element: string;
  monthStart: number;
  dayStart: number;
  monthEnd: number;
  dayEnd: number;
}> = [
  { sign: "물병자리/Aquarius/みずがめ座/Acuario", emoji: "♒", element: "air", monthStart: 1, dayStart: 20, monthEnd: 2, dayEnd: 18 },
  { sign: "물고기자리/Pisces/うお座/Piscis", emoji: "♓", element: "water", monthStart: 2, dayStart: 19, monthEnd: 3, dayEnd: 20 },
  { sign: "양자리/Aries/おひつじ座/Aries", emoji: "♈", element: "fire", monthStart: 3, dayStart: 21, monthEnd: 4, dayEnd: 19 },
  { sign: "황소자리/Taurus/おうし座/Tauro", emoji: "♉", element: "earth", monthStart: 4, dayStart: 20, monthEnd: 5, dayEnd: 20 },
  { sign: "쌍둥이자리/Gemini/ふたご座/Géminis", emoji: "♊", element: "air", monthStart: 5, dayStart: 21, monthEnd: 6, dayEnd: 21 },
  { sign: "게자리/Cancer/かに座/Cáncer", emoji: "♋", element: "water", monthStart: 6, dayStart: 22, monthEnd: 7, dayEnd: 22 },
  { sign: "사자자리/Leo/しし座/Leo", emoji: "♌", element: "fire", monthStart: 7, dayStart: 23, monthEnd: 8, dayEnd: 22 },
  { sign: "처녀자리/Virgo/おとめ座/Virgo", emoji: "♍", element: "earth", monthStart: 8, dayStart: 23, monthEnd: 9, dayEnd: 22 },
  { sign: "천칭자리/Libra/てんびん座/Libra", emoji: "♎", element: "air", monthStart: 9, dayStart: 23, monthEnd: 10, dayEnd: 23 },
  { sign: "전갈자리/Scorpio/さそり座/Escorpio", emoji: "♏", element: "water", monthStart: 10, dayStart: 24, monthEnd: 11, dayEnd: 21 },
  { sign: "궁수자리/Sagittarius/いて座/Sagitario", emoji: "♐", element: "fire", monthStart: 11, dayStart: 22, monthEnd: 12, dayEnd: 21 },
  { sign: "염소자리/Capricorn/やぎ座/Capricornio", emoji: "♑", element: "earth", monthStart: 12, dayStart: 22, monthEnd: 1, dayEnd: 19 },
];

function findZodiac(month: number, day: number): (typeof ZODIAC_RANGES)[number] | null {
  for (const range of ZODIAC_RANGES) {
    const sameMonth = range.monthStart === range.monthEnd;
    if (sameMonth) {
      if (month === range.monthStart && day >= range.dayStart && day <= range.dayEnd) return range;
    } else {
      if ((month === range.monthStart && day >= range.dayStart) || (month === range.monthEnd && day <= range.dayEnd)) return range;
    }
  }
  return null;
}

function extractSignByLocale(allSigns: string, locale: Locale): string {
  const parts = allSigns.split("/");
  const idx = { ko: 0, en: 1, ja: 2, es: 3 }[locale] ?? 0;
  return parts[idx] ?? parts[0];
}

function getElementName(locale: Locale, element: string): string {
  const map: Record<Locale, Record<string, string>> = {
    ko: { air: "공기", water: "물", fire: "불", earth: "흙" },
    en: { air: "Air", water: "Water", fire: "Fire", earth: "Earth" },
    ja: { air: "空気", water: "水", fire: "火", earth: "土" },
    es: { air: "Aire", water: "Agua", fire: "Fuego", earth: "Tierra" },
  };
  return map[locale][element] ?? element;
}

export default function ZodiacFinderClient({
  signs,
  locale,
  labels,
  faq,
  backHref,
}: ZodiacFinderClientProps) {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [result, setResult] = useState<ZodiacEntry | null>(null);

  const handleFind = () => {
    if (selectedMonth == null || selectedDay == null) return;
    const zodiacRange = findZodiac(selectedMonth, selectedDay);
    if (zodiacRange) {
      const matched = signs.find((s) => s.sign === extractSignByLocale(zodiacRange.sign, locale));
      setResult(matched ?? null);
    } else {
      setResult(null);
    }
  };

  const selectedElement = useMemo(() => {
    if (!result) return null;
    return signs.find((s) => s.sign === result.sign);
  }, [result, signs]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{labels.title}</h1>
      <p className="mt-2 text-muted-foreground">{labels.subtitle}</p>

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">{labels.processingMsg}</p>
          </CardContent>
        </Card>
      </div>

      {/* Month selector */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-medium">{labels.selectBirthday}</p>
        <p className="mb-2 text-xs text-muted-foreground">
          {selectedMonth ? `${selectedMonth}${labels.monthLabel}` : "월 선택"}
          {selectedDay ? ` → ${selectedDay}${labels.dayLabel}` : ""}
        </p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => {
                setSelectedMonth(month);
                setSelectedDay(null);
                setResult(null);
              }}
              aria-pressed={selectedMonth === month}
              className={`flex items-center justify-center rounded-lg border p-3 text-center text-sm font-medium transition-colors ${
                selectedMonth === month
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {month}{labels.monthLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Day selector */}
      {selectedMonth != null && (
        <div className="mt-4">
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-9 lg:grid-cols-11">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const maxDay = getDaysInMonth(selectedMonth);
              const disabled = day > maxDay;
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    setSelectedDay(day);
                    setResult(null);
                  }}
                  aria-pressed={selectedDay === day}
                  className={`flex items-center justify-center rounded-lg border p-2 text-center text-sm transition-colors ${
                    disabled
                      ? "border-transparent bg-transparent text-muted-foreground opacity-40 cursor-not-allowed"
                      : selectedDay === day
                        ? "border-primary bg-primary text-primary-foreground font-semibold"
                        : "hover:bg-muted"
                  }`}
                >
                  {day}{labels.dayLabel}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Find button */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleFind}
          disabled={selectedMonth == null || selectedDay == null}
          className={buttonVariants({
            size: "lg",
            disabled: selectedMonth == null || selectedDay == null,
          })}
        >
          {labels.find}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div id="zodiac-result" className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">{labels.result}</h2>
          <Card className="border-2 border-primary shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{result.emoji}</span>
                <div>
                  <p className="text-2xl font-bold">{result.sign}</p>
                  <p className="text-sm text-muted-foreground">{result.dateRange}</p>
                  <p className="text-sm font-medium text-primary">
                    {labels.element}: {getElementName(locale, result.element)}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {result.description}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* All signs reference */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{labels.result}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((z, i) => (
            <Card
              key={i}
              className={`border shadow-sm transition-shadow ${
                result?.sign === z.sign ? "border-primary ring-1 ring-primary" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{z.emoji}</span>
                  <div>
                    <p className="text-lg font-semibold">{z.sign}</p>
                    <p className="text-sm text-muted-foreground">{z.dateRange}</p>
                    <p className="text-sm font-medium text-primary">
                      {labels.element}: {getElementName(locale, z.element)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {z.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why zodiac */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{labels.whyZodiac}</h2>
        <p className="whitespace-pre-line leading-relaxed">{labels.zodiacExplanation}</p>
        <p className="mt-4 text-sm text-muted-foreground">{labels.limitations}</p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {item.q}
                </p>
                <p className="text-base text-muted-foreground">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{labels.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{labels.footer}</p>

      <div className="mt-8">
        <a href={backHref} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          {"←"} {labels.back}
        </a>
      </div>
    </div>
  );
}

function getDaysInMonth(month: number): number {
  return new Date(2024, month, 0).getDate();
}
