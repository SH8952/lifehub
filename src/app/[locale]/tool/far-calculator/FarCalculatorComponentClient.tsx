"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






interface FarResult {
  far: number | null;
  lotCoverage: number;
}

export default function FarCalculatorComponent({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floorArea, setFloorArea] = useState("");
  const [result, setResult] = useState<FarResult | null>(null);

  const d = i18nData[locale];

  const presets = [
    { label: "10평", value: 33.1 },
    { label: "30평", value: 99.3 },
    { label: "50평", value: 165.5 },
    { label: "100평", value: 331.0 },
  ];

  function handleCalculate() {
    const land = parseFloat(landArea);
    const build = parseFloat(buildingArea);
    const flo = parseFloat(floorArea);

    if (isNaN(land) || land <= 0 || isNaN(build) || build <= 0) return;
    if (build > land) {
      return;
    }

    if (isNaN(flo) || flo <= 0) {
      setResult({ far: null, lotCoverage: Math.round((build / land) * 10000) / 100 });
      return;
    }

    const farVal = Math.round((flo / land) * 10000) / 100;
    const lotVal = Math.round((build / land) * 10000) / 100;
    setResult({ far: farVal, lotCoverage: lotVal });
  }


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
            description: "Calculate Floor Area Ratio (FAR) and Lot Coverage from land and building areas",
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
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-lg bg-muted p-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-medium">{d.landArea}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      step="0.1"
                      value={landArea}
                      onChange={(e) => setLandArea(e.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="0"
                    />
                    <span className="text-sm text-muted-foreground">{d.landAreaUnit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.landAreaHelp}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{d.buildingArea}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      step="0.1"
                      value={buildingArea}
                      onChange={(e) => setBuildingArea(e.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="0"
                    />
                    <span className="text-sm text-muted-foreground">{d.buildingAreaUnit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.buildingAreaHelp}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{d.floorArea}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="100000"
                      step="0.1"
                      value={floorArea}
                      onChange={(e) => setFloorArea(e.target.value)}
                      className="w-full rounded-md border px-3 py-2"
                      placeholder="0"
                    />
                    <span className="text-sm text-muted-foreground">{d.floorAreaUnit}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{d.floorAreaHelp}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">{d.presets}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setLandArea(p.value.toString())}
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

            {result && (
              <div className="rounded-lg bg-indigo-50 p-6 space-y-4">
                <p className="text-sm font-medium">{d.result}</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="text-center rounded-lg bg-white p-4 border">
                    <p className="text-sm font-medium text-indigo-600">{d.far}</p>
                    {result.far !== null ? (
                      <>
                        <p className="mt-2 text-5xl font-bold text-indigo-700">{result.far}%</p>
                        <p className="mt-1 text-xs text-muted-foreground">{d.farDesc}</p>
                      </>
                    ) : (
                      <p className="mt-2 text-5xl font-bold text-muted-foreground">—</p>
                    )}
                  </div>
                  <div className="text-center rounded-lg bg-white p-4 border">
                    <p className="text-sm font-medium text-blue-600">{d.lotCoverage}</p>
                    <p className="mt-2 text-5xl font-bold text-blue-700">{result.lotCoverage}%</p>
                    <p className="mt-1 text-xs text-muted-foreground">{d.lotCoverageDesc}</p>
                    <div className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-muted-foreground">
                      <p>
                        최대 건축 가능: {landArea && parseFloat(landArea) > 0 ? (parseFloat(landArea) * result.lotCoverage / 100).toFixed(1) : "0"}㎡
                      </p>
                      <p className="mt-1">
                        예상 층수: {result.far && result.lotCoverage ? Math.round(result.far / result.lotCoverage) : "—"}층
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyFar}</h2>
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
