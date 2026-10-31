"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const SALE_BANDS = [
  { max: 50_000_000, rate: 0.006, cap: 250_000 },
  { max: 200_000_000, rate: 0.005, cap: 800_000 },
  { max: 900_000_000, rate: 0.004, cap: Infinity },
  { max: 1_200_000_000, rate: 0.005, cap: Infinity },
  { max: 1_500_000_000, rate: 0.006, cap: Infinity },
  { max: Infinity, rate: 0.007, cap: Infinity },
];

const LEASE_BANDS = [
  { max: 50_000_000, rate: 0.005, cap: 200_000 },
  { max: 100_000_000, rate: 0.004, cap: 300_000 },
  { max: 600_000_000, rate: 0.003, cap: Infinity },
  { max: 1_200_000_000, rate: 0.004, cap: Infinity },
  { max: 1_500_000_000, rate: 0.005, cap: Infinity },
  { max: Infinity, rate: 0.006, cap: Infinity },
];

export default function RealtyCommissionCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [dealType, setDealType] = useState<"sale" | "lease">("sale");
  const [amount, setAmount] = useState(500000000);
  const [result, setResult] = useState<{ rate: number; commission: number } | null>(null);

  const calculate = () => {
    const bands = dealType === "sale" ? SALE_BANDS : LEASE_BANDS;
    const band = bands.find((b) => amount <= b.max) ?? bands[bands.length - 1];
    const raw = amount * band.rate;
    const commission = Math.min(raw, band.cap);
    setResult({ rate: band.rate * 100, commission });
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
              <label className="mb-1 block text-sm font-medium">{d.dealTypeLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={dealType} onChange={(e) => setDealType(e.target.value as "sale" | "lease")}>
                <option value="sale">{d.dealSale}</option>
                <option value="lease">{d.dealLease}</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.amountLabel}</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
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
                  <p className="text-xs text-muted-foreground">{d.rateAppliedLabel}</p>
                  <p className="font-mono font-medium">{result.rate.toFixed(1)}%</p>
                </div>
                <div className="rounded-md bg-indigo-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.maxCommissionLabel}</p>
                  <p className="font-mono text-lg font-semibold text-indigo-700">{fmt(result.commission)}</p>
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
