"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Relation = "spouse" | "childAdult" | "childMinor" | "parent" | "other" | "stranger";
const DEDUCTIONS: Record<Relation, number> = {
  spouse: 600_000_000,
  childAdult: 50_000_000,
  childMinor: 20_000_000,
  parent: 50_000_000,
  other: 10_000_000,
  stranger: 0,
};

const BRACKETS = [
  { max: 100_000_000, rate: 0.1, deduction: 0 },
  { max: 500_000_000, rate: 0.2, deduction: 10_000_000 },
  { max: 1_000_000_000, rate: 0.3, deduction: 60_000_000 },
  { max: 3_000_000_000, rate: 0.4, deduction: 160_000_000 },
  { max: Infinity, rate: 0.5, deduction: 460_000_000 },
];

function calcTax(taxable: number): number {
  if (taxable <= 0) return 0;
  const bracket = BRACKETS.find((b) => taxable <= b.max) ?? BRACKETS[BRACKETS.length - 1];
  return Math.max(0, taxable * bracket.rate - bracket.deduction);
}

export default function GiftTaxEstimator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [amount, setAmount] = useState(100000000);
  const [relation, setRelation] = useState<Relation>("childAdult");
  const [result, setResult] = useState<{ deduction: number; taxable: number; tax: number } | null>(null);

  const calculate = () => {
    const deduction = DEDUCTIONS[relation];
    const taxable = Math.max(0, amount - deduction);
    const tax = calcTax(taxable);
    setResult({ deduction, taxable, tax });
  };

  const fmt = (n: number) => Math.round(n).toLocaleString();

  const relationOptions: { key: Relation; label: string }[] = [
    { key: "spouse", label: d.relationSpouse },
    { key: "childAdult", label: d.relationChildAdult },
    { key: "childMinor", label: d.relationChildMinor },
    { key: "parent", label: d.relationParent },
    { key: "other", label: d.relationOther },
    { key: "stranger", label: d.relationStranger },
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.amountLabel}</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.relationLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={relation} onChange={(e) => setRelation(e.target.value as Relation)}>
                {relationOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.deductionLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.deduction)}</p>
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
