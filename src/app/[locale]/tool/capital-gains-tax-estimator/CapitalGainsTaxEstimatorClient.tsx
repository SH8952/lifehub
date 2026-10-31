"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const BASIC_DEDUCTION = 2_500_000;

const BRACKETS = [
  { max: 14_000_000, rate: 0.06, deduction: 0 },
  { max: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { max: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { max: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { max: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { max: 500_000_000, rate: 0.4, deduction: 25_940_000 },
  { max: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { max: Infinity, rate: 0.45, deduction: 65_940_000 },
];

function calcTax(taxable: number): number {
  if (taxable <= 0) return 0;
  const bracket = BRACKETS.find((b) => taxable <= b.max) ?? BRACKETS[BRACKETS.length - 1];
  return Math.max(0, taxable * bracket.rate - bracket.deduction);
}

export default function CapitalGainsTaxEstimator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [salePrice, setSalePrice] = useState(800000000);
  const [acquisitionPrice, setAcquisitionPrice] = useState(500000000);
  const [expenses, setExpenses] = useState(10000000);
  const [holdingYears, setHoldingYears] = useState(5);
  const [oneHouse, setOneHouse] = useState(false);
  const [result, setResult] = useState<{ gain: number; longTermDeduction: number; taxable: number; tax: number } | null>(null);

  const calculate = () => {
    const gain = Math.max(0, salePrice - acquisitionPrice - expenses);
    const deductionRate = holdingYears < 3 ? 0 : oneHouse ? Math.min(0.8, holdingYears * 0.04) : Math.min(0.3, holdingYears * 0.02);
    const longTermDeduction = gain * deductionRate;
    const taxable = Math.max(0, gain - longTermDeduction - BASIC_DEDUCTION);
    const tax = calcTax(taxable);
    setResult({ gain, longTermDeduction, taxable, tax });
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {oneHouse && salePrice <= 1_200_000_000 && holdingYears >= 2 && (
        <p className="mb-4 rounded-md bg-amber-50 p-3 text-sm text-amber-800">{d.exemptNotice}</p>
      )}

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.salePriceLabel}</label>
              <input type="number" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.acquisitionPriceLabel}</label>
              <input type="number" value={acquisitionPrice} onChange={(e) => setAcquisitionPrice(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.expensesLabel}</label>
              <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.holdingYearsLabel}</label>
              <input type="number" min={0} max={50} value={holdingYears} onChange={(e) => setHoldingYears(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={oneHouse} onChange={(e) => setOneHouse(e.target.checked)} />
            {d.oneHouseLabel}
          </label>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.gainLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.gain)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.longTermDeductionLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.longTermDeduction)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.taxableLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.taxable)}</p>
                </div>
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.taxLabel}</p>
                  <p className="font-mono text-lg font-semibold text-indigo-700">{fmt(result.tax)}</p>
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
