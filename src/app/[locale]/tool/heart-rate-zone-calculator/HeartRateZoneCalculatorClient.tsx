"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function HeartRateZoneCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [age, setAge] = useState(35);
  const [restingHr, setRestingHr] = useState(65);
  const [result, setResult] = useState<{ maxHr: number; zones: { label: string; low: number; high: number }[] } | null>(null);

  const calculate = () => {
    const maxHr = 220 - age;
    const hrr = maxHr - restingHr;
    const zoneRanges = [
      { label: d.zoneVeryLight, lowPct: 0.5, highPct: 0.6 },
      { label: d.zoneLight, lowPct: 0.6, highPct: 0.7 },
      { label: d.zoneModerate, lowPct: 0.7, highPct: 0.8 },
      { label: d.zoneHard, lowPct: 0.8, highPct: 0.9 },
      { label: d.zoneMax, lowPct: 0.9, highPct: 1.0 },
    ];
    const zones = zoneRanges.map((z) => ({
      label: z.label,
      low: Math.round(hrr * z.lowPct + restingHr),
      high: Math.round(hrr * z.highPct + restingHr),
    }));
    setResult({ maxHr, zones });
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
              <label className="mb-1 block text-sm font-medium">{d.ageLabel}</label>
              <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.restingHrLabel}</label>
              <input type="number" value={restingHr} onChange={(e) => setRestingHr(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <div className="rounded-md bg-muted/30 p-3 text-sm">
                <span className="text-muted-foreground">{d.maxHrLabel}: </span>
                <span className="font-mono font-medium">
                  {result.maxHr} {d.bpmUnit}
                </span>
              </div>
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="space-y-2">
                {result.zones.map((z, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md bg-red-50 p-3 text-sm">
                    <span>{z.label}</span>
                    <span className="font-mono font-semibold text-red-700">
                      {z.low}~{z.high} {d.bpmUnit}
                    </span>
                  </div>
                ))}
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
