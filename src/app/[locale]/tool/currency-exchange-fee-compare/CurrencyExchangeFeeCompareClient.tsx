"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function CurrencyExchangeFeeCompare({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [amount, setAmount] = useState(1000000);
  const [baseRate, setBaseRate] = useState(1350);
  const [spread, setSpread] = useState(1.75);
  const [discountRate, setDiscountRate] = useState(90);
  const [result, setResult] = useState<{ feeNoDiscount: number; feeWithDiscount: number; receivedNoDiscount: number; receivedWithDiscount: number; saved: number } | null>(null);

  const calculate = () => {
    const spreadFraction = spread / 100;
    const feeRateNoDiscount = spreadFraction;
    const feeRateWithDiscount = spreadFraction * (1 - discountRate / 100);

    const feeNoDiscount = amount * feeRateNoDiscount;
    const feeWithDiscount = amount * feeRateWithDiscount;
    const receivedNoDiscount = amount - feeNoDiscount;
    const receivedWithDiscount = amount - feeWithDiscount;
    const saved = feeNoDiscount - feeWithDiscount;

    setResult({ feeNoDiscount, feeWithDiscount, receivedNoDiscount, receivedWithDiscount, saved });
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
              <label className="mb-1 block text-sm font-medium">{d.amountLabel}</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.baseRateLabel}</label>
              <input type="number" value={baseRate} onChange={(e) => setBaseRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.spreadLabel}</label>
              <input type="number" step={0.01} value={spread} onChange={(e) => setSpread(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.discountRateLabel}</label>
              <input type="number" min={0} max={100} value={discountRate} onChange={(e) => setDiscountRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <button onClick={calculate} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.calculateBtn}
          </button>

          {result && (
            <div className="space-y-3">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.noDiscountLabel} — {d.feeLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.feeNoDiscount)}</p>
                </div>
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.withDiscountLabel} — {d.feeLabel}</p>
                  <p className="font-mono font-medium text-indigo-700">{fmt(result.feeWithDiscount)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.noDiscountLabel} — {d.receivedLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.receivedNoDiscount)}</p>
                </div>
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.withDiscountLabel} — {d.receivedLabel}</p>
                  <p className="font-mono font-medium text-indigo-700">{fmt(result.receivedWithDiscount)}</p>
                </div>
              </div>
              <div className="rounded-md bg-green-50 p-3">
                <p className="text-xs text-muted-foreground">{d.savedByDiscountLabel}</p>
                <p className="font-mono text-lg font-semibold text-green-700">{fmt(result.saved)}</p>
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
