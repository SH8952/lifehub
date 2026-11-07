"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale, type Data } from "./data";






export default function AgeCalculator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [birthYear, setBirthYear] = useState<string>("1990");
  const [birthMonth, setBirthMonth] = useState<string>("1");
  const [birthDay, setBirthDay] = useState<string>("1");
  const [ageResult, setAgeResult] = useState<{ years: number; months: number; days: number } | null>(null);
  const [zodiac, setZodiac] = useState("");
  const [daysToNext, setDaysToNext] = useState<number | null>(null);

  const d = i18nData[locale];

  function handleCalculate() {
    const year = parseInt(birthYear);
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);

    if (isNaN(year) || isNaN(month) || isNaN(day)) return;

    if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > new Date().getFullYear()) {
      const messages: Record<Locale, string> = {
        ko: "올바른 생년월일을 입력하세요.",
        en: "Please enter a valid birth date.",
        ja: "正しい生年月日を入力してください。",
        es: "Por favor, ingrese una fecha de nacimiento válida.",
      };
      alert(messages[locale]);
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult({ years, months, days });

    // Calculate Chinese zodiac
    const zodiacIndex = ((year - 4) % 12 + 12) % 12;
    setZodiac(d.chineseZodiac[zodiacIndex]);

    // Calculate days to next birthday
    const nextBirthday = new Date(today.getFullYear(), month - 1, day);
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysToNext(diffDays);
  }

  function handleAgeDisplay() {
    if (!ageResult) return null;
    const parts: string[] = [];
    if (ageResult.years > 0) parts.push(`${ageResult.years}${d.years}`);
    if (ageResult.months > 0) parts.push(`${ageResult.months}${d.months}`);
    if (ageResult.days > 0) parts.push(`${ageResult.days}${d.days}`);
    return parts.join(" ") || "0일";
  }

  const presets = [
    { label: "20대", year: 2003 },
    { label: "30대", year: 1993 },
    { label: "40대", year: 1983 },
    { label: "50대", year: 1973 },
    { label: "60대", year: 1963 },
    { label: "70대", year: 1953 },
  ];

  function setPreset(year: number) {
    const birthDate = new Date();
    setBirthYear(String(year));
    setBirthMonth(String(birthDate.getMonth() + 1));
    setBirthDay(String(birthDate.getDate()));
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight">{d.inputs}</h1>
      <p className="mt-2 text-muted-foreground">
        {d.whyAge}
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Age Calculator",
            description: "Calculate exact age from birthdate in years, months, and days",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      {/* Calculator */}
      <AgeCalculatorForm
        d={d}
        birthYear={birthYear}
        setBirthYear={setBirthYear}
        birthMonth={birthMonth}
        setBirthMonth={setBirthMonth}
        birthDay={birthDay}
        setBirthDay={setBirthDay}
        calculate={handleCalculate}
        ageResult={ageResult}
        zodiac={zodiac}
        daysToNext={daysToNext}
        fullAge={d.fullAge}
        yearsLabel={d.years}
        monthsLabel={d.months}
        daysLabel={d.days}
        ageDisplay={handleAgeDisplay()}
        presets={presets}
        setPreset={setPreset}
      />

      {/* Why section */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyAge}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.ageExplanation}</p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}

interface Preset {
  label: string;
  year: number;
}

function AgeCalculatorForm({
  d,
  birthYear,
  setBirthYear,
  birthMonth,
  setBirthMonth,
  birthDay,
  setBirthDay,
  calculate,
  ageResult,
  zodiac,
  daysToNext,
  fullAge,
  yearsLabel,
  monthsLabel,
  daysLabel,
  ageDisplay,
  presets,
  setPreset,
}: {
  d: Data;
  birthYear: string;
  setBirthYear: (v: string) => void;
  birthMonth: string;
  setBirthMonth: (v: string) => void;
  birthDay: string;
  setBirthDay: (v: string) => void;
  calculate: () => void;
  ageResult: { years: number; months: number; days: number } | null;
  zodiac: string;
  daysToNext: number | null;
  fullAge: string;
  yearsLabel: string;
  monthsLabel: string;
  daysLabel: string;
  ageDisplay: string | null;
  presets: Preset[];
  setPreset: (year: number) => void;
}) {
  return (
    <div className="mt-8">
      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.inputs}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                calculate();
              }}
              className="mt-3 grid gap-4 sm:grid-cols-3"
            >
              <label>
                <p className="text-sm font-medium">{d.birthYear}</p>
                <input
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </label>
              <label>
                <p className="text-sm font-medium">{d.birthMonth}</p>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </label>
              <label>
                <p className="text-sm font-medium">{d.birthDay}</p>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </label>

              <div className="sm:col-span-3">
                <p className="text-sm text-muted-foreground">프리셋</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.year}
                      type="button"
                      onClick={() => setPreset(p.year)}
                      className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                    >
                      {p.label} ({new Date().getFullYear() - p.year}세)
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white"
                >
                  {d.calculate}
                </button>
              </div>
            </form>
          </div>

          {ageDisplay && (
            <div className="rounded-lg bg-indigo-50 p-4">
              <p className="text-sm font-medium">{d.result}</p>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">{fullAge}</p>
                  <p className="mt-1 text-4xl font-bold text-indigo-700">{ageDisplay}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">{d.zodiacYear}</p>
                  <p className="mt-1 text-3xl font-bold text-indigo-700">{zodiac || "-"}</p>
                  {daysToNext !== null && zodiac && (
                    <p className="mt-2 text-sm text-muted-foreground">{d.nextBirthday}: D-{daysToNext}</p>
                  )}
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
