"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type TaxType = "general" | "preferred" | "free";
const TAX_RATES: Record<TaxType, number> = { general: 0.154, preferred: 0.095, free: 0 };

export default function SavingsMaturityCalculator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [monthly, setMonthly] = useState(300000);
  const [rate, setRate] = useState(3.5);
  const [months, setMonths] = useState(12);
  const [taxType, setTaxType] = useState<TaxType>("general");
  const [result, setResult] = useState<{ principal: number; grossInterest: number; tax: number; net: number } | null>(null);

  const calculate = () => {
    const principal = monthly * months;
    const grossInterest = monthly * (rate / 100 / 12) * ((months * (months + 1)) / 2);
    const tax = grossInterest * TAX_RATES[taxType];
    const net = principal + grossInterest - tax;
    setResult({ principal, grossInterest, tax, net });
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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.monthlyLabel}</label>
              <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.rateLabel}</label>
              <input type="number" step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.monthsLabel}</label>
              <input type="number" min={1} max={120} value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.taxTypeLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={taxType} onChange={(e) => setTaxType(e.target.value as TaxType)}>
                <option value="general">{d.taxGeneral}</option>
                <option value="preferred">{d.taxPreferred}</option>
                <option value="free">{d.taxFree}</option>
              </select>
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.totalPrincipalLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.principal)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.grossInterestLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.grossInterest)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.taxLabel}</p>
                  <p className="font-mono font-medium">-{fmt(result.tax)}</p>
                </div>
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.maturityAmountLabel}</p>
                  <p className="font-mono text-lg font-semibold text-indigo-700">{fmt(result.net)}</p>
                </div>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground">{d.disclaimer}</p>
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
