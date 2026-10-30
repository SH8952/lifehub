"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function SalaryRaiseCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<"rate" | "target">("rate");
  const [currentSalary, setCurrentSalary] = useState(40000000);
  const [raiseRate, setRaiseRate] = useState(5);
  const [targetSalary, setTargetSalary] = useState(42000000);
  const [result, setResult] = useState<{ newSalary: number; increase: number; monthlyIncrease: number; impliedRate: number } | null>(null);

  const calculate = () => {
    let newSalary: number;
    let impliedRate: number;
    if (mode === "rate") {
      newSalary = currentSalary * (1 + raiseRate / 100);
      impliedRate = raiseRate;
    } else {
      newSalary = targetSalary;
      impliedRate = ((targetSalary - currentSalary) / currentSalary) * 100;
    }
    const increase = newSalary - currentSalary;
    const monthlyIncrease = increase / 12;
    setResult({ newSalary, increase, monthlyIncrease, impliedRate });
  };

  const fmt = (n: number) => Math.round(n).toLocaleString();

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
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex gap-2">
            <button onClick={() => setMode("rate")} className={`rounded-md border px-3 py-1.5 text-sm ${mode === "rate" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
              {d.modeByRate}
            </button>
            <button onClick={() => setMode("target")} className={`rounded-md border px-3 py-1.5 text-sm ${mode === "target" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
              {d.modeByTarget}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.currentSalaryLabel}</label>
              <input type="number" value={currentSalary} onChange={(e) => setCurrentSalary(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            {mode === "rate" ? (
              <div>
                <label className="mb-1 block text-sm font-medium">{d.raiseRateLabel}</label>
                <input type="number" step={0.1} value={raiseRate} onChange={(e) => setRaiseRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
              </div>
            ) : (
              <div>
                <label className="mb-1 block text-sm font-medium">{d.targetSalaryLabel}</label>
                <input type="number" value={targetSalary} onChange={(e) => setTargetSalary(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
              </div>
            )}
          </div>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.newSalaryLabel}</p>
                  <p className="font-mono text-lg font-semibold text-indigo-700">{fmt(result.newSalary)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.impliedRateLabel}</p>
                  <p className="font-mono font-medium">{result.impliedRate.toFixed(2)}%</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.increaseAmountLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.increase)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.monthlyIncreaseLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.monthlyIncrease)}</p>
                </div>
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
