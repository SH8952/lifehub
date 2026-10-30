"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { data, type Locale } from "./data";

const DRINK_MG: Record<string, number> = {
  dripCoffee: 95,
  americano: 154,
  espresso: 63,
  energyDrink: 80,
  blackTea: 47,
  greenTea: 28,
  cola: 35,
  chocolate: 20,
};

export default function CaffeineIntakeTracker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [drink, setDrink] = useState("dripCoffee");
  const [entries, setEntries] = useState<{ key: string; label: string; mg: number }[]>([]);

  const drinkLabels: Record<string, string> = {
    dripCoffee: d.drinkDripCoffee,
    americano: d.drinkAmericano,
    espresso: d.drinkEspresso,
    energyDrink: d.drinkEnergyDrink,
    blackTea: d.drinkBlackTea,
    greenTea: d.drinkGreenTea,
    cola: d.drinkCola,
    chocolate: d.drinkChocolate,
  };

  const addEntry = () => {
    setEntries([...entries, { key: drink, label: drinkLabels[drink], mg: DRINK_MG[drink] }]);
  };

  const removeEntry = (idx: number) => {
    setEntries(entries.filter((_, i) => i !== idx));
  };

  const total = entries.reduce((sum, e) => sum + e.mg, 0);
  const overLimit = total > 400;

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
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-amber-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex gap-2">
            <select value={drink} onChange={(e) => setDrink(e.target.value)} className="flex-1 rounded-md border px-2 py-1.5 text-sm">
              {Object.keys(DRINK_MG).map((key) => (
                <option key={key} value={key}>
                  {drinkLabels[key]} ({DRINK_MG[key]}
                  {d.mgUnit})
                </option>
              ))}
            </select>
            <button onClick={addEntry} className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700">
              {d.addBtn}
            </button>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">{d.listLabel}</p>
            {entries.length === 0 ? (
              <p className="text-sm text-muted-foreground">{d.emptyMsg}</p>
            ) : (
              <div className="space-y-1">
                {entries.map((e, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md bg-muted/30 px-3 py-2 text-sm">
                    <span>
                      {e.label} — {e.mg}
                      {d.mgUnit}
                    </span>
                    <button onClick={() => removeEntry(i)} aria-label={d.removeLabel}>
                      <X className="h-4 w-4 text-muted-foreground hover:text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {entries.length > 0 && (
            <div className="flex items-center justify-between">
              <button onClick={() => setEntries([])} className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted">
                {d.resetBtn}
              </button>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{d.totalLabel}</p>
                <p className={`font-mono text-xl font-semibold ${overLimit ? "text-red-600" : "text-amber-700"}`}>
                  {total}
                  {d.mgUnit}
                </p>
              </div>
            </div>
          )}

          {overLimit && <p className="text-sm text-red-600">{d.overLimitMsg}</p>}
          <p className="text-xs text-muted-foreground">{d.limitLabel}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
