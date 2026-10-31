"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";
import { data, type Locale } from "./data";

type Tab = "pressure" | "size";

const PSI_TO_KPA = 6.89476;
const PSI_TO_BAR = 0.0689476;

export default function TirePressureSizeCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("pressure");
  const [vehicleKey, setVehicleKey] = useState<string>(d.vehicleTypes[0]?.key ?? "light");

  const [width, setWidth] = useState<string>("205");
  const [aspectRatio, setAspectRatio] = useState<string>("55");
  const [rim, setRim] = useState<string>("16");

  const vehicle = d.vehicleTypes.find((v) => v.key === vehicleKey) ?? d.vehicleTypes[0];

  const sizeResult = useMemo(() => {
    const w = parseFloat(width);
    const ar = parseFloat(aspectRatio);
    const r = parseFloat(rim);
    if (!w || !ar || !r || w <= 0 || ar <= 0 || r <= 0) return null;
    const sidewall = (w * ar) / 100;
    const outerMm = r * 25.4 + 2 * sidewall;
    return {
      sidewall: Math.round(sidewall * 10) / 10,
      outerMm: Math.round(outerMm),
      outerInch: Math.round((outerMm / 25.4) * 10) / 10,
    };
  }, [width, aspectRatio, rim]);

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

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("pressure")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "pressure" ? "bg-slate-700 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabPressure}
        </button>
        <button
          onClick={() => setTab("size")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "size" ? "bg-slate-700 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabSize}
        </button>
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          {tab === "pressure" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium">{d.vehicleTypeLabel}</label>
                <div className="space-y-2">
                  {d.vehicleTypes.map((v) => (
                    <button
                      key={v.key}
                      onClick={() => setVehicleKey(v.key)}
                      className={`block w-full rounded-md border px-3 py-2 text-left text-sm ${vehicleKey === v.key ? "border-slate-700 bg-slate-100" : "hover:bg-muted"}`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {vehicle && (
                <div className="rounded-lg bg-slate-100 p-5 text-center">
                  <Gauge className="mx-auto mb-2 h-6 w-6 text-slate-700" />
                  <p className="text-sm text-muted-foreground">{d.recommendedPressureLabel}</p>
                  <p className="text-3xl font-bold text-slate-800">
                    {vehicle.psiMin}–{vehicle.psiMax} {d.unitPsi}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    ({Math.round(vehicle.psiMin * PSI_TO_KPA)}–{Math.round(vehicle.psiMax * PSI_TO_KPA)} {d.unitKpa} /{" "}
                    {(vehicle.psiMin * PSI_TO_BAR).toFixed(1)}–{(vehicle.psiMax * PSI_TO_BAR).toFixed(1)} {d.unitBar})
                  </p>
                </div>
              )}
            </>
          )}

          {tab === "size" && (
            <>
              <p className="text-xs text-muted-foreground">{d.exampleNote}</p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.widthLabel}</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.aspectRatioLabel}</label>
                  <input
                    type="number"
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.rimLabel}</label>
                  <input
                    type="number"
                    value={rim}
                    onChange={(e) => setRim(e.target.value)}
                    className="w-full rounded-md border px-2 py-2 text-sm"
                  />
                </div>
              </div>

              {sizeResult && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-100 p-4 text-center">
                    <p className="text-xs text-muted-foreground">{d.outerDiameterLabel}</p>
                    <p className="text-xl font-bold text-slate-800">{sizeResult.outerMm} mm</p>
                    <p className="text-xs text-muted-foreground">({sizeResult.outerInch} in)</p>
                  </div>
                  <div className="rounded-lg bg-slate-100 p-4 text-center">
                    <p className="text-xs text-muted-foreground">{d.sidewallHeightLabel}</p>
                    <p className="text-xl font-bold text-slate-800">{sizeResult.sidewall} mm</p>
                  </div>
                </div>
              )}
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
