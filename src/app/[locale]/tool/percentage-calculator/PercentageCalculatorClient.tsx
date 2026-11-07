"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Mode = 1 | 2 | 3 | 4;

export default function PercentageCalculator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<Mode>(1);
  const [a, setA] = useState(20);
  const [b, setB] = useState(100);
  const [n, setN] = useState(10);

  const result = useMemo(() => {
    switch (mode) {
      case 1:
        return b !== 0 ? (a / b) * 100 : NaN;
      case 2:
        return (b * n) / 100;
      case 3:
        return a !== 0 ? ((b - a) / a) * 100 : NaN;
      case 4:
        return n !== 0 ? (a * 100) / n : NaN;
    }
  }, [mode, a, b, n]);

  const formatNum = (num: number) => {
    if (isNaN(num) || !isFinite(num)) return "-";
    return Math.round(num * 10000) / 10000;
  };

  const modes: { key: Mode; label: string }[] = [
    { key: 1, label: d.mode1Title },
    { key: 2, label: d.mode2Title },
    { key: 3, label: d.mode3Title },
    { key: 4, label: d.mode4Title },
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
            description: d.subtitle,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`rounded-md border px-3 py-2 text-left text-sm font-medium ${mode === m.key ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {mode === 1 && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueA}</label>
                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueB}</label>
                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>
          )}

          {mode === 2 && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.percentN}</label>
                <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueB}</label>
                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>
          )}

          {mode === 3 && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueA}</label>
                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueB}</label>
                <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>
          )}

          {mode === 4 && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.valueA}</label>
                <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.percentN}</label>
                <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>
          )}

          <div className="rounded-lg bg-indigo-50 p-5 text-center">
            <p className="text-sm text-indigo-600">{d.resultLabel}</p>
            <p className="mt-1 text-3xl font-bold text-indigo-800">
              {formatNum(result)}
              {mode === 1 || mode === 3 ? "%" : ""}
            </p>
            {mode === 3 && !isNaN(result) && isFinite(result) && (
              <p className="mt-1 text-sm text-indigo-600">
                {result > 0 ? d.increase : result < 0 ? d.decrease : d.noChange}
              </p>
            )}
          </div>
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
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
