"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function SleepCycleCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [wakeTime, setWakeTime] = useState("07:00");
  const [options, setOptions] = useState<{ time: string; cycles: number; hours: number }[] | null>(null);

  const calculate = () => {
    const [h, m] = wakeTime.split(":").map(Number);
    const wakeMinutes = h * 60 + m;
    const results: { time: string; cycles: number; hours: number }[] = [];
    for (let cycles = 6; cycles >= 3; cycles--) {
      const sleepMinutes = cycles * 90 + 15;
      let bedMinutes = (wakeMinutes - sleepMinutes + 1440) % 1440;
      const bh = Math.floor(bedMinutes / 60);
      const bm = bedMinutes % 60;
      results.push({
        time: `${String(bh).padStart(2, "0")}:${String(bm).padStart(2, "0")}`,
        cycles,
        hours: (cycles * 90) / 60,
      });
    }
    setOptions(results);
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
          <div>
            <label className="mb-1 block text-sm font-medium">{d.wakeTimeLabel}</label>
            <input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm" />
          </div>

          <button onClick={calculate} className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            {d.calculateBtn}
          </button>

          {options && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="space-y-2">
                {options.map((opt, i) => {
                  const recommended = opt.cycles === 5 || opt.cycles === 6;
                  return (
                    <div key={i} className={`flex items-center justify-between rounded-md p-3 text-sm ${recommended ? "bg-emerald-50" : "bg-muted/30"}`}>
                      <span className="font-mono text-lg font-semibold">{opt.time}</span>
                      <span className="text-muted-foreground">
                        {opt.cycles} {d.cyclesLabel} ({opt.hours}{t("hoursShort") ? "" : ""}h {d.hoursLabel})
                      </span>
                      {recommended && <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs text-white">{d.recommendedBadge}</span>}
                    </div>
                  );
                })}
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
