"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Soup } from "lucide-react";
import { data, type Locale } from "./data";

interface Row {
  name: string;
  amount: string;
  unit: string;
}

const EMPTY_ROW: Row = { name: "", amount: "", unit: "" };

export default function RecipeServingConverterClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = data[locale];

  const [original, setOriginal] = useState<string>("2");
  const [target, setTarget] = useState<string>("4");
  const [rows, setRows] = useState<Row[]>([{ ...EMPTY_ROW }, { ...EMPTY_ROW }, { ...EMPTY_ROW }]);

  const scaleFactor = useMemo(() => {
    const o = parseFloat(original);
    const t = parseFloat(target);
    if (!o || o <= 0 || !t || t <= 0) return null;
    return t / o;
  }, [original, target]);

  const updateRow = (idx: number, field: keyof Row, value: string) => {
    setRows((prev) => prev.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  };

  const addRow = () => setRows((prev) => [...prev, { ...EMPTY_ROW }]);
  const removeRow = (idx: number) => setRows((prev) => prev.filter((_, i) => i !== idx));

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-sm font-medium">{d.originalServingsLabel}</label>
              <input
                type="number"
                min="1"
                value={original}
                onChange={(e) => setOriginal(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{d.targetServingsLabel}</label>
              <input
                type="number"
                min="1"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </div>

          {scaleFactor !== null && (
            <p className="text-center text-sm text-muted-foreground">
              {d.scaleFactorLabel}: <span className="font-semibold text-orange-700">×{Math.round(scaleFactor * 100) / 100}</span>
            </p>
          )}

          <div className="space-y-3">
            {rows.map((row, i) => {
              const amt = parseFloat(row.amount);
              const scaled = scaleFactor !== null && amt ? Math.round(amt * scaleFactor * 100) / 100 : null;
              return (
                <div key={i} className="flex items-end gap-2">
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => updateRow(i, "name", e.target.value)}
                    placeholder={d.namePlaceholder}
                    className="w-2/5 rounded-md border px-2 py-2 text-sm"
                  />
                  <input
                    type="number"
                    value={row.amount}
                    onChange={(e) => updateRow(i, "amount", e.target.value)}
                    placeholder="0"
                    className="w-1/5 rounded-md border px-2 py-2 text-sm"
                  />
                  <input
                    type="text"
                    value={row.unit}
                    onChange={(e) => updateRow(i, "unit", e.target.value)}
                    placeholder={d.unitPlaceholder}
                    className="w-1/5 rounded-md border px-2 py-2 text-sm"
                  />
                  <div className="flex w-1/5 items-center justify-end gap-1">
                    {scaled !== null && (
                      <span className="whitespace-nowrap text-xs font-semibold text-orange-700">
                        → {scaled}
                      </span>
                    )}
                    <button onClick={() => removeRow(i)} aria-label={d.removeRowBtn}>
                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={addRow}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            <Plus className="h-4 w-4" />
            {d.addRowBtn}
          </button>

          {scaleFactor !== null && (
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-4 text-sm text-orange-700">
              <Soup className="h-5 w-5 flex-shrink-0" />
              <span>{d.resultTitle}</span>
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
