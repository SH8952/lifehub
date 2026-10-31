"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck } from "lucide-react";
import { data, type Locale } from "./data";

type MoveType = "full" | "semi" | "basic";
type Distance = "same" | "far";

const RATE_PER_PYEONG: Record<MoveType, number> = { full: 15, semi: 10, basic: 6 };
const LADDER_FEE = 15;
const FAR_SURCHARGE = 10;

export default function MovingCostEstimatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [area, setArea] = useState<string>("20");
  const [moveType, setMoveType] = useState<MoveType>("semi");
  const [distance, setDistance] = useState<Distance>("same");
  const [ladder, setLadder] = useState<boolean>(false);

  const result = useMemo(() => {
    const a = parseFloat(area);
    if (!a || a <= 0) return null;
    const base = a * RATE_PER_PYEONG[moveType];
    const withSurcharge = base + (distance === "far" ? FAR_SURCHARGE : 0) + (ladder ? LADDER_FEE : 0);
    const low = Math.round(withSurcharge * 0.85);
    const high = Math.round(withSurcharge * 1.3);
    return { low, high };
  }, [area, moveType, distance, ladder]);

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
            <label className="mb-2 block text-sm font-medium">{d.moveTypeLabel}</label>
            <div className="space-y-2">
              {([
                ["full", d.moveTypeFull],
                ["semi", d.moveTypeSemi],
                ["basic", d.moveTypeBasic],
              ] as [MoveType, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setMoveType(val)}
                  className={`block w-full rounded-md border px-3 py-2 text-left text-sm ${moveType === val ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.distanceLabel}</label>
            <div className="flex gap-2">
              {([
                ["same", d.distanceSame],
                ["far", d.distanceFar],
              ] as [Distance, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setDistance(val)}
                  className={`flex-1 rounded-md border px-3 py-2 text-xs ${distance === val ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.ladderLabel}</label>
            <div className="flex gap-2">
              <button
                onClick={() => setLadder(true)}
                className={`flex-1 rounded-md border px-3 py-2 text-xs ${ladder ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
              >
                {d.ladderYes}
              </button>
              <button
                onClick={() => setLadder(false)}
                className={`flex-1 rounded-md border px-3 py-2 text-xs ${!ladder ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
              >
                {d.ladderNo}
              </button>
            </div>
          </div>

          {result && (
            <div className="rounded-lg bg-amber-50 p-5 text-center">
              <Truck className="mx-auto mb-2 h-6 w-6 text-amber-600" />
              <p className="text-sm text-muted-foreground">{d.resultTitle}</p>
              <p className="text-3xl font-bold text-amber-700">
                {result.low} ~ {result.high} <span className="text-base">{d.resultRangeUnit}</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{d.resultNote}</p>
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
