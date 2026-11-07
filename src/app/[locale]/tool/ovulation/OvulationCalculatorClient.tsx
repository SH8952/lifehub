"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






interface OvulationResult {
  cycleDays: number;
  ovulationDate: Date;
  fertileStart: Date;
  fertileEnd: Date;
  nextPeriod: Date;
}

export default function OvulationCalculator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleDays, setCycleDays] = useState(28);
  const [result, setResult] = useState<OvulationResult | null>(null);

  const d = i18nData[locale];

  function formatDate(date: Date, lc: Locale) {
    return date.toLocaleDateString(lc === "ko" ? "ko-KR" : lc === "ja" ? "ja-JP" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function handleCalculate() {
    if (!lastPeriodDate) return;

    const lastPeriod = new Date(lastPeriodDate);
    if (isNaN(lastPeriod.getTime()) || lastPeriod.getTime() > new Date().getTime()) return;

    const ovulationDate = new Date(lastPeriod);
    ovulationDate.setDate(ovulationDate.getDate() + cycleDays - 14);

    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(nextPeriod.getDate() + cycleDays);

    setResult({
      cycleDays,
      ovulationDate,
      fertileStart,
      fertileEnd,
      nextPeriod,
    });
  }

  const presets = [
    { days: 21, label: d.presetShort },
    { days: 28, label: "28일" },
    { days: 30, label: "30일" },
    { days: 35, label: d.presetLong },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "Calculate ovulation day and fertile window from menstrual cycle data",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <p className="text-sm font-medium">{d.inputs}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium">{d.menstrualCycle}</p>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    type="number"
                    min="21"
                    max="45"
                    value={cycleDays}
                    onChange={(e) => setCycleDays(parseInt(e.target.value) || 28)}
                    className="w-full rounded-md border px-3 py-2"
                    placeholder={d.cyclePlaceholder}
                  />
                  <span className="text-sm text-muted-foreground">{d.cycleUnit}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{d.cycleHelp}</p>
              </div>
              <div>
                <p className="text-sm font-medium">{d.lastPeriod}</p>
                <input
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  value={lastPeriodDate}
                  onChange={(e) => setLastPeriodDate(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-muted-foreground">{d.presets}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.days}
                      type="button"
                      onClick={() => setCycleDays(p.days)}
                      className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                >
                  {d.calculate}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {result && (
        <div className="mt-8 space-y-6">
          <Card className="border shadow-md">
            <CardContent className="space-y-4 p-6">
              <p className="text-sm font-medium">{d.result}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <p className="text-sm font-medium">{d.ovulationDay}</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-700">{formatDate(result.ovulationDate, locale)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.ovulationDesc}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-blue-700">{d.fertileStart}</p>
                  <p className="mt-1 text-2xl font-bold text-blue-700">{formatDate(result.fertileStart, locale)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-blue-700">{d.fertileEnd}</p>
                  <p className="mt-1 text-2xl font-bold text-blue-700">{formatDate(result.fertileEnd, locale)}</p>
                </div>
              </div>
              <div className="rounded-lg bg-orange-50 p-4 border">
                <p className="text-sm font-medium text-orange-700">{d.nextPeriod}</p>
                <p className="text-2xl font-bold text-orange-800">{formatDate(result.nextPeriod, locale)}</p>
                <p className="text-xs text-muted-foreground">{d.nextPeriodDesc}</p>
                <p className="text-sm font-medium text-orange-700 mt-2">{d.testingStart}</p>
                <p className="text-2xl font-bold text-orange-800">{formatDate(result.nextPeriod, locale)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyOvulation}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
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
