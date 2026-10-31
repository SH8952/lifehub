"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PaintRoller } from "lucide-react";
import { data, type Locale } from "./data";

type AreaUnit = "sqm" | "pyeong";
type PaintType = "water" | "oil";

const COVERAGE_PER_LITER: Record<PaintType, number> = { water: 10, oil: 8 };
const PYEONG_TO_SQM = 3.3058;

export default function PaintAmountCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [area, setArea] = useState<string>("30");
  const [areaUnit, setAreaUnit] = useState<AreaUnit>("sqm");
  const [coats, setCoats] = useState<number>(2);
  const [paintType, setPaintType] = useState<PaintType>("water");

  const result = useMemo(() => {
    const a = parseFloat(area);
    if (!a || a <= 0) return null;
    const sqm = areaUnit === "pyeong" ? a * PYEONG_TO_SQM : a;
    const liters = (sqm * coats) / COVERAGE_PER_LITER[paintType];
    return Math.ceil(liters * 10) / 10;
  }, [area, areaUnit, coats, paintType]);

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
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">{d.areaLabel}</label>
            <input
              type="number"
              min="1"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={d.areaPlaceholder}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.areaUnitLabel}</label>
            <div className="flex gap-2">
              {([
                ["sqm", d.unitSqm],
                ["pyeong", d.unitPyeong],
              ] as [AreaUnit, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setAreaUnit(val)}
                  className={`flex-1 rounded-md border px-3 py-2 text-xs ${areaUnit === val ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              {d.coatsLabel}: {coats}
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={coats}
              onChange={(e) => setCoats(parseInt(e.target.value, 10))}
              className="w-full"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.paintTypeLabel}</label>
            <div className="space-y-2">
              {([
                ["water", d.paintWater],
                ["oil", d.paintOil],
              ] as [PaintType, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setPaintType(val)}
                  className={`block w-full rounded-md border px-3 py-2 text-left text-sm ${paintType === val ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {result !== null && (
            <div className="rounded-lg bg-amber-50 p-5 text-center">
              <PaintRoller className="mx-auto mb-2 h-6 w-6 text-amber-600" />
              <p className="text-sm text-muted-foreground">{d.resultLabel}</p>
              <p className="text-3xl font-bold text-amber-700">
                {result} <span className="text-base">{d.resultUnit}</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{d.canNote}</p>
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
