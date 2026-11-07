"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import { data, type Locale } from "./data";

type Tab = "wallpaper" | "flooring";
type WallpaperType = "synthetic" | "silk";

const ROLL_COVERAGE: Record<WallpaperType, number> = { synthetic: 2.5, silk: 2 };
const FLOORING_LOSS = 1.1;

export default function WallpaperFlooringCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("wallpaper");
  const [area, setArea] = useState<string>("20");
  const [wallpaperType, setWallpaperType] = useState<WallpaperType>("synthetic");

  const wallpaperRolls = useMemo(() => {
    const a = parseFloat(area);
    if (!a || a <= 0) return null;
    return Math.ceil(a / ROLL_COVERAGE[wallpaperType]);
  }, [area, wallpaperType]);

  const flooringArea = useMemo(() => {
    const a = parseFloat(area);
    if (!a || a <= 0) return null;
    return Math.ceil(a * FLOORING_LOSS * 2) / 2;
  }, [area]);

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

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("wallpaper")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "wallpaper" ? "bg-amber-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabWallpaper}
        </button>
        <button
          onClick={() => setTab("flooring")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "flooring" ? "bg-amber-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabFlooring}
        </button>
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

          {tab === "wallpaper" && (
            <div>
              <label className="mb-2 block text-sm font-medium">{d.wallpaperTypeLabel}</label>
              <div className="space-y-2">
                {([
                  ["synthetic", d.wallpaperSynthetic],
                  ["silk", d.wallpaperSilk],
                ] as [WallpaperType, string][]).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setWallpaperType(val)}
                    className={`block w-full rounded-md border px-3 py-2 text-left text-sm ${wallpaperType === val ? "border-amber-600 bg-amber-50" : "hover:bg-muted"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "wallpaper" && wallpaperRolls !== null && (
            <div className="rounded-lg bg-amber-50 p-5 text-center">
              <Home className="mx-auto mb-2 h-6 w-6 text-amber-600" />
              <p className="text-sm text-muted-foreground">{d.wallpaperResultLabel}</p>
              <p className="text-3xl font-bold text-amber-700">
                {wallpaperRolls} <span className="text-base">{d.wallpaperResultUnit}</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{d.lossNote}</p>
            </div>
          )}

          {tab === "flooring" && flooringArea !== null && (
            <div className="rounded-lg bg-amber-50 p-5 text-center">
              <Home className="mx-auto mb-2 h-6 w-6 text-amber-600" />
              <p className="text-sm text-muted-foreground">{d.flooringResultLabel}</p>
              <p className="text-3xl font-bold text-amber-700">
                {flooringArea} <span className="text-base">{d.flooringResultUnit}</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{d.lossNote}</p>
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
