"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";
import { data, type Locale } from "./data";

type Unit = "kg" | "lb";

const PERCENTS = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

export default function OneRepMaxCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = data[locale];

  const [weight, setWeight] = useState<string>("100");
  const [reps, setReps] = useState<string>("5");
  const [unit, setUnit] = useState<Unit>("kg");

  const oneRm = useMemo(() => {
    const w = parseFloat(weight);
    const r = parseFloat(reps);
    if (!w || w <= 0 || !r || r <= 0) return null;
    return w * (1 + r / 30);
  }, [weight, reps]);

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
            applicationCategory: "HealthApplication",
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
              <label className="mb-2 block text-sm font-medium">{d.weightLabel}</label>
              <input
                type="number"
                min="0"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">{d.repsLabel}</label>
              <input
                type="number"
                min="1"
                max="20"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.unitLabel}</label>
            <div className="flex gap-2">
              {([
                ["kg", d.unitKg],
                ["lb", d.unitLb],
              ] as [Unit, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setUnit(val)}
                  className={`flex-1 rounded-md border px-3 py-2 text-xs ${unit === val ? "border-rose-700 bg-rose-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {oneRm !== null && (
            <>
              <div className="rounded-lg bg-rose-50 p-5 text-center">
                <Dumbbell className="mx-auto mb-2 h-6 w-6 text-rose-700" />
                <p className="text-sm text-muted-foreground">{d.resultLabel}</p>
                <p className="text-3xl font-bold text-rose-800">
                  {Math.round(oneRm)} {unit}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium">{d.tableTitle}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-muted-foreground">
                        <th className="py-2">{d.percentCol}</th>
                        <th className="py-2">{d.weightCol}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PERCENTS.map((p) => (
                        <tr key={p} className="border-b last:border-0">
                          <td className="py-2">{p}%</td>
                          <td className="py-2 font-medium">
                            {Math.round(oneRm * (p / 100))} {unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
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
