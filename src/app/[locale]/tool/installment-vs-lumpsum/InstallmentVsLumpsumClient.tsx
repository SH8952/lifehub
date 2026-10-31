"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function InstallmentVsLumpsum({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [price, setPrice] = useState(1200000);
  const [installmentMonths, setInstallmentMonths] = useState(6);
  const [installmentRate, setInstallmentRate] = useState(10);
  const [lumpSumDiscount, setLumpSumDiscount] = useState(2);
  const [result, setResult] = useState<{ installmentTotal: number; lumpSumTotal: number; better: "installment" | "lumpsum"; savings: number } | null>(null);

  const calculate = () => {
    // Average balance declines linearly; fee ~= price * rate/12 * (n+1)/2 / n * n = price * rate * (n+1) / (24)
    const n = installmentMonths;
    const fee = price * (installmentRate / 100) * ((n + 1) / 24);
    const installmentTotal = price + fee;
    const lumpSumTotal = price * (1 - lumpSumDiscount / 100);
    const better = installmentTotal <= lumpSumTotal ? "installment" : "lumpsum";
    const savings = Math.abs(installmentTotal - lumpSumTotal);
    setResult({ installmentTotal, lumpSumTotal, better, savings });
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

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.priceLabel}</label>
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.installmentMonthsLabel}</label>
              <input type="number" min={1} max={36} value={installmentMonths} onChange={(e) => setInstallmentMonths(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.installmentRateLabel}</label>
              <input type="number" step={0.1} value={installmentRate} onChange={(e) => setInstallmentRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.lumpSumDiscountLabel}</label>
              <input type="number" step={0.1} value={lumpSumDiscount} onChange={(e) => setLumpSumDiscount(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className={`rounded-md p-3 ${result.better === "installment" ? "bg-green-50" : "bg-muted/30"}`}>
                  <p className="text-xs text-muted-foreground">{d.installmentTotalLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.installmentTotal)}</p>
                </div>
                <div className={`rounded-md p-3 ${result.better === "lumpsum" ? "bg-green-50" : "bg-muted/30"}`}>
                  <p className="text-xs text-muted-foreground">{d.lumpSumTotalLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.lumpSumTotal)}</p>
                </div>
              </div>
              <div className="rounded-md bg-indigo-50 p-3">
                <p className="text-xs text-muted-foreground">{d.betterOptionLabel}</p>
                <p className="font-mono text-lg font-semibold text-indigo-700">
                  {result.better === "installment" ? d.installmentTotalLabel : d.lumpSumTotalLabel} ({d.savingsLabel}: {fmt(result.savings)})
                </p>
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
