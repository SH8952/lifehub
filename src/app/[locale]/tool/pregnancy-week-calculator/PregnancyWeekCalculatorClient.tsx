"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function PregnancyWeekCalculator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [lmp, setLmp] = useState("");
  const [result, setResult] = useState<{ weeks: number; days: number; dueDate: string; trimester: 1 | 2 | 3 } | null>(null);

  const calculate = () => {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;
    const dueDateObj = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000);
    const dueDate = dueDateObj.toISOString().slice(0, 10);
    const trimester = weeks < 14 ? 1 : weeks < 28 ? 2 : 3;
    setResult({ weeks, days, dueDate, trimester });
  };

  const trimesterLabels: Record<number, string> = {
    1: d.trimester1,
    2: d.trimester2,
    3: d.trimester3,
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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.lmpLabel}</label>
            <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm" />
          </div>

          <button onClick={calculate} className="rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md bg-pink-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.currentWeekLabel}</p>
                  <p className="font-mono text-lg font-semibold text-pink-700">
                    {result.weeks}{d.weeksUnit} {result.days}{d.daysUnit}
                  </p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.dueDateLabel}</p>
                  <p className="font-mono font-medium">{result.dueDate}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.trimesterLabel}</p>
                  <p className="font-medium">{trimesterLabels[result.trimester]}</p>
                </div>
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
