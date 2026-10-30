"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat } from "lucide-react";
import { data, type Locale } from "./data";

const DENSITY_G_PER_ML: Record<string, number> = {
  water: 1,
  sugar: 0.85,
  flour: 0.5,
  butter: 0.95,
  salt: 1.2,
  oil: 0.92,
  milk: 1.03,
};

const VOLUME_ML: Record<string, number> = {
  cup: 240,
  tbsp: 15,
  tsp: 5,
  ml: 1,
};

export default function CookingMeasurementConverterClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [ingredient, setIngredient] = useState<string>("water");
  const [amount, setAmount] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<string>("cup");
  const [toUnit, setToUnit] = useState<string>("g");

  const result = useMemo(() => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return null;
    const density = DENSITY_G_PER_ML[ingredient] ?? 1;

    const ml = fromUnit === "g" ? amt / density : amt * (VOLUME_ML[fromUnit] ?? 1);
    const out = toUnit === "g" ? ml * density : ml / (VOLUME_ML[toUnit] ?? 1);
    return Math.round(out * 100) / 100;
  }, [ingredient, amount, fromUnit, toUnit]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
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
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-orange-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">{d.ingredientLabel}</label>
            <select
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
            >
              {d.ingredients.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.amountLabel}</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium">{d.fromUnitLabel}</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                {d.units.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{d.toUnitLabel}</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                {d.units.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {result !== null && (
            <div className="rounded-lg bg-orange-50 p-5 text-center">
              <ChefHat className="mx-auto mb-2 h-6 w-6 text-orange-600" />
              <p className="text-sm text-muted-foreground">{d.resultLabel}</p>
              <p className="text-3xl font-bold text-orange-700">
                {result} {d.units.find((u) => u.key === toUnit)?.key}
              </p>
            </div>
          )}
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
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
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

      <p className="mt-8 text-xs text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
