"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function StockProfitCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [buyPrice, setBuyPrice] = useState(50000);
  const [sellPrice, setSellPrice] = useState(55000);
  const [quantity, setQuantity] = useState(10);
  const [feeRate, setFeeRate] = useState(0.015);
  const [taxRate, setTaxRate] = useState(0.18);
  const [result, setResult] = useState<{ totalBuy: number; totalSell: number; netProfit: number; returnRate: number } | null>(null);

  const calculate = () => {
    const buyAmount = buyPrice * quantity;
    const sellAmount = sellPrice * quantity;
    const buyFee = buyAmount * (feeRate / 100);
    const sellFee = sellAmount * (feeRate / 100);
    const sellTax = sellAmount * (taxRate / 100);
    const totalBuy = buyAmount + buyFee;
    const totalSell = sellAmount - sellFee - sellTax;
    const netProfit = totalSell - totalBuy;
    const returnRate = (netProfit / totalBuy) * 100;
    setResult({ totalBuy, totalSell, netProfit, returnRate });
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.buyPriceLabel}</label>
              <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.sellPriceLabel}</label>
              <input type="number" value={sellPrice} onChange={(e) => setSellPrice(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.quantityLabel}</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.feeRateLabel}</label>
              <input type="number" step={0.001} value={feeRate} onChange={(e) => setFeeRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.taxRateLabel}</label>
              <input type="number" step={0.01} value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
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
                  <p className="text-xs text-muted-foreground">{d.totalBuyLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.totalBuy)}</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.totalSellLabel}</p>
                  <p className="font-mono font-medium">{fmt(result.totalSell)}</p>
                </div>
                <div className={`rounded-md p-3 ${result.netProfit >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                  <p className="text-xs text-muted-foreground">{d.netProfitLabel}</p>
                  <p className={`font-mono text-lg font-semibold ${result.netProfit >= 0 ? "text-green-700" : "text-red-700"}`}>{fmt(result.netProfit)}</p>
                </div>
                <div className={`rounded-md p-3 ${result.returnRate >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                  <p className="text-xs text-muted-foreground">{d.returnRateLabel}</p>
                  <p className={`font-mono text-lg font-semibold ${result.returnRate >= 0 ? "text-green-700" : "text-red-700"}`}>{result.returnRate.toFixed(2)}%</p>
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
