"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Accident = "none" | "one" | "multi";

export default function CarInsuranceEstimator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [vehicleValue, setVehicleValue] = useState(25000000);
  const [age, setAge] = useState(35);
  const [experience, setExperience] = useState(10);
  const [accident, setAccident] = useState<Accident>("none");
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  const calculate = () => {
    let base = vehicleValue * 0.035;
    if (age < 25) base *= 1.5;
    else if (age < 30) base *= 1.2;
    else if (age > 65) base *= 1.15;

    if (experience < 2) base *= 1.3;
    else if (experience < 5) base *= 1.1;
    else if (experience > 10) base *= 0.9;

    if (accident === "one") base *= 1.2;
    else if (accident === "multi") base *= 1.5;

    const low = base * 0.85;
    const high = base * 1.2;
    setResult({ low, high });
  };

  const fmt = (n: number) => Math.round(n).toLocaleString();

  const accidentOptions: { key: Accident; label: string }[] = [
    { key: "none", label: d.accidentNone },
    { key: "one", label: d.accidentOne },
    { key: "multi", label: d.accidentMulti },
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.vehicleValueLabel}</label>
              <input type="number" value={vehicleValue} onChange={(e) => setVehicleValue(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.ageLabel}</label>
              <input type="number" min={18} max={100} value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.experienceLabel}</label>
              <input type="number" min={0} max={80} value={experience} onChange={(e) => setExperience(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.accidentHistoryLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={accident} onChange={(e) => setAccident(e.target.value as Accident)}>
                {accidentOptions.map((opt) => (
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
              <div className="rounded-md bg-indigo-50 p-3">
                <p className="text-xs text-muted-foreground">{d.annualPremiumRangeLabel}</p>
                <p className="font-mono text-lg font-semibold text-indigo-700">
                  {fmt(result.low)} ~ {fmt(result.high)}
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
