"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function WaterIntakeCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [weight, setWeight] = useState(65);
  const [activity, setActivity] = useState<"low" | "medium" | "high">("medium");
  const [result, setResult] = useState<number | null>(null);

  const activityMultiplier: Record<string, number> = { low: 30, medium: 35, high: 40 };

  const calculate = () => {
    setResult(weight * activityMultiplier[activity]);
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.weightLabel}</label>
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.activityLabel}</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value as "low" | "medium" | "high")} className="w-full rounded-md border px-2 py-1.5 text-sm">
                <option value="low">{d.activityLow}</option>
                <option value="medium">{d.activityMedium}</option>
                <option value="high">{d.activityHigh}</option>
              </select>
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
            {d.calculateBtn}
          </button>

          {result !== null && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="rounded-md bg-sky-50 p-4">
                <p className="font-mono text-2xl font-semibold text-sky-700">
                  {Math.round(result).toLocaleString()} {d.mlUnit}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.cupsLabel}: {Math.round(result / 500)} {d.cupsUnit}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">{d.disclaimer}</p>
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
