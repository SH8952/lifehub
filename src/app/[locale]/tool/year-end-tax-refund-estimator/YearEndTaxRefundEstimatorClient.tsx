"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const INCOME_BRACKETS = [
  { max: 14_000_000, rate: 0.06, deduction: 0 },
  { max: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { max: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { max: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { max: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { max: 500_000_000, rate: 0.4, deduction: 25_940_000 },
  { max: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { max: Infinity, rate: 0.45, deduction: 65_940_000 },
];

function earnedIncomeDeduction(salary: number): number {
  if (salary <= 5_000_000) return salary * 0.7;
  if (salary <= 15_000_000) return 3_500_000 + (salary - 5_000_000) * 0.4;
  if (salary <= 45_000_000) return 7_500_000 + (salary - 15_000_000) * 0.15;
  if (salary <= 100_000_000) return 12_000_000 + (salary - 45_000_000) * 0.05;
  return 14_750_000 + (salary - 100_000_000) * 0.02;
}

function calcIncomeTax(taxable: number): number {
  if (taxable <= 0) return 0;
  const bracket = INCOME_BRACKETS.find((b) => taxable <= b.max) ?? INCOME_BRACKETS[INCOME_BRACKETS.length - 1];
  return Math.max(0, taxable * bracket.rate - bracket.deduction);
}

function earnedIncomeTaxCredit(calculatedTax: number): number {
  const raw = calculatedTax <= 1_300_000 ? calculatedTax * 0.55 : 715_000 + (calculatedTax - 1_300_000) * 0.3;
  return Math.min(raw, 740_000);
}

export default function YearEndTaxRefundEstimator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [annualSalary, setAnnualSalary] = useState(45000000);
  const [withheldTax, setWithheldTax] = useState(1500000);
  const [dependents, setDependents] = useState(1);
  const [otherDeductions, setOtherDeductions] = useState(3000000);
  const [result, setResult] = useState<{ taxable: number; finalTax: number; diff: number } | null>(null);

  const calculate = () => {
    const earnedDeduction = earnedIncomeDeduction(annualSalary);
    const earnedIncome = Math.max(0, annualSalary - earnedDeduction);
    const personalDeduction = dependents * 1_500_000;
    const totalDeduction = personalDeduction + otherDeductions;
    const taxable = Math.max(0, earnedIncome - totalDeduction);
    const calculatedTax = calcIncomeTax(taxable);
    const credit = earnedIncomeTaxCredit(calculatedTax);
    const finalTax = Math.max(0, calculatedTax - credit);
    const diff = withheldTax - finalTax;
    setResult({ taxable, finalTax, diff });
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
              <label className="mb-1 block text-sm font-medium">{d.annualSalaryLabel}</label>
              <input type="number" value={annualSalary} onChange={(e) => setAnnualSalary(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.withheldTaxLabel}</label>
              <input type="number" value={withheldTax} onChange={(e) => setWithheldTax(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.dependentsLabel}</label>
              <input type="number" min={1} max={10} value={dependents} onChange={(e) => setDependents(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.otherDeductionsLabel}</label>
              <input type="number" value={otherDeductions} onChange={(e) => setOtherDeductions(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
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
                  <p className="text-xs text-muted-foreground">{d.taxableLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.taxable)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.calculatedTaxLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.finalTax)}</p>
                </div>
              </div>
              <div className={`rounded-md p-3 ${result.diff >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                <p className="text-xs text-muted-foreground">{result.diff >= 0 ? d.refundLabel : d.additionalPaymentLabel}</p>
                <p className={`font-mono text-lg font-semibold ${result.diff >= 0 ? "text-green-700" : "text-red-700"}`}>{fmt(Math.abs(result.diff))}</p>
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
