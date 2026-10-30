"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const MET_VALUES: Record<string, number> = {
  walkSlow: 2.8,
  walkBrisk: 4.3,
  running: 9.8,
  cycling: 7.5,
  swimming: 7.0,
  yoga: 2.5,
  weightTraining: 3.5,
  hiit: 8.0,
  jumpRope: 11.0,
  hiking: 6.0,
};

export default function ExerciseCalorieCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [exercise, setExercise] = useState("running");
  const [weight, setWeight] = useState(65);
  const [duration, setDuration] = useState(30);
  const [result, setResult] = useState<number | null>(null);

  const exerciseLabels: Record<string, string> = {
    walkSlow: d.exerciseWalkSlow,
    walkBrisk: d.exerciseWalkBrisk,
    running: d.exerciseRunning,
    cycling: d.exerciseCycling,
    swimming: d.exerciseSwimming,
    yoga: d.exerciseYoga,
    weightTraining: d.exerciseWeightTraining,
    hiit: d.exerciseHiit,
    jumpRope: d.exerciseJumpRope,
    hiking: d.exerciseHiking,
  };

  const calculate = () => {
    const met = MET_VALUES[exercise];
    setResult(met * weight * (duration / 60));
  };

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
            description: d.subtitle,
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-orange-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.exerciseLabel}</label>
            <select value={exercise} onChange={(e) => setExercise(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm">
              {Object.keys(MET_VALUES).map((key) => (
                <option key={key} value={key}>
                  {exerciseLabels[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.weightLabel}</label>
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.durationLabel}</label>
              <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700">
            {d.calculateBtn}
          </button>

          {result !== null && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="rounded-md bg-orange-50 p-4">
                <p className="font-mono text-2xl font-semibold text-orange-700">
                  {Math.round(result).toLocaleString()} {d.kcalUnit}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.metLabel}: {MET_VALUES[exercise]}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
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
