"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






const defaultCosts: Record<Locale, Record<string, number>> = {
  ko: {
    residential: 400,
    office: 550,
    warehouse: 250,
    renovation: 0,
  },
  en: {
    residential: 400,
    office: 550,
    warehouse: 250,
    renovation: 0,
  },
  ja: {
    residential: 400,
    office: 550,
    warehouse: 250,
    renovation: 0,
  },
  es: {
    residential: 400,
    office: 550,
    warehouse: 250,
    renovation: 0,
  },
};

export default function ConstructionCostComponent({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [buildingType, setBuildingType] = useState("residential");
  const [area, setArea] = useState("");
  const [costPerPyeong, setCostPerPyeong] = useState("400");
  const [materialLevel, setMaterialLevel] = useState<"standard" | "premium">("standard");
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [areaInPyeong, setAreaInPyeong] = useState<number | null>(null);

  const d = i18nData[locale];

  const typeLabels = [
    { key: "residential", label: d.residential },
    { key: "office", label: d.office },
    { key: "warehouse", label: d.warehouse },
    { key: "renovation", label: d.renovation },
  ];

  function handleCalculate() {
    const areaNum = parseFloat(area);
    const costNum = parseFloat(costPerPyeong);

    if (isNaN(areaNum) || areaNum <= 0 || isNaN(costNum) || costNum <= 0) return;

    const pyeong = areaNum / 3.3058;
    setAreaInPyeong(Math.round(pyeong * 10) / 10);

    let multiplier = 1;
    if (materialLevel === "premium") multiplier = 1.5;

    let baseCost = costNum;
    if (buildingType === "renovation") {
      baseCost = 400 * 0.6;
    }

    setTotalCost(Math.round(pyeong * baseCost * multiplier));
  }

  function formatCost(cost: number) {
    if (cost >= 10000) {
      return `${(cost / 10000).toFixed(1)}억 ${((cost % 10000) / 1000).toFixed(0)}만원`;
    }
    return `${cost.toLocaleString()}만원`;
  }

  const presets = [
    { label: "10평", value: 33.1 },
    { label: "20평", value: 66.1 },
    { label: "30평", value: 99.2 },
    { label: "50평", value: 165.3 },
    { label: "100평", value: 330.6 },
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
            description: "Estimate total construction cost from building type and area",
            applicationCategory: "UtilityApplication",
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
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-lg bg-muted p-4 space-y-4">
              <div>
                <p className="text-sm font-medium">{d.buildingType}</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {typeLabels.map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setBuildingType(t.key)}
                      className={`rounded-md border px-3 py-2 text-sm ${buildingType === t.key ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">{d.area}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="100000"
                      step="0.1"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="0"
                    />
                    <span className="text-sm text-muted-foreground">{d.areaUnit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.areaHelp}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{d.perPyeongCost}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="number"
                      min="10"
                      max="5000"
                      step="10"
                      value={costPerPyeong}
                      onChange={(e) => setCostPerPyeong(e.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="0"
                    />
                    <span className="text-sm text-muted-foreground">만원/평</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.perPyeongCostHelp}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">{d.material}</p>
                <div className="mt-2 flex gap-2">
                  {(["standard", "premium"] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setMaterialLevel(level)}
                      className={`rounded-md border px-3 py-2 text-sm ${materialLevel === level ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                    >
                      {level === "standard" ? d.standard : d.premium}
                    </button>
                  ))}
                  {materialLevel === "premium" && (
                    <span className="text-xs text-muted-foreground self-center">+(50%)</span>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">{d.presets}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setArea(p.value.toString())}
                      className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                    >
                      {p.label} ({p.value}㎡)
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                {d.calculate}
              </button>
            </div>

            {totalCost !== null && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-4">
                <p className="text-sm font-medium">{d.result}</p>
                <div className="text-center">
                  <p className="text-sm font-medium text-indigo-600">{d.totalCost}</p>
                  <p className="mt-2 text-5xl font-bold text-indigo-700">{formatCost(totalCost)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.totalCostDesc}</p>
                </div>
                <div className="rounded-lg bg-white p-4 border text-sm text-muted-foreground space-y-1">
                  <p>
                    {areaInPyeong ? `${areaInPyeong}평 ≈ ${area}㎡` : "—"}
                  </p>
                  <p>
                    평당 공사비: {costPerPyeong}만원/평 × {areaInPyeong ? areaInPyeong + "평" : "—"}
                    {materialLevel === "premium" ? " (고급 +50%)" : " (표준)"}
                  </p>
                  {buildingType === "renovation" && (
                    <p className="text-xs text-yellow-600">리모델링 기준 (신규건축의 ~60%)</p>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyConstruction}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
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
