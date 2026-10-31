"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, Coffee } from "lucide-react";
import { data, type Locale } from "./data";

type Tab = "abv" | "coffee";

export default function BeverageAbvCoffeeRatioCalculatorClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("abv");

  const [originalAbv, setOriginalAbv] = useState<string>("40");
  const [originalVolume, setOriginalVolume] = useState<string>("500");
  const [targetAbv, setTargetAbv] = useState<string>("20");

  const [coffeeAmount, setCoffeeAmount] = useState<string>("20");
  const [ratioKey, setRatioKey] = useState<string>(d.ratioPresets[0]?.key ?? "handdrip");

  const abvResult = useMemo(() => {
    const oAbv = parseFloat(originalAbv);
    const oVol = parseFloat(originalVolume);
    const tAbv = parseFloat(targetAbv);
    if (!oAbv || !oVol || !tAbv || oAbv <= 0 || oVol <= 0 || tAbv <= 0) return null;
    if (tAbv >= oAbv) return { invalid: true as const };
    const finalVolume = (oVol * oAbv) / tAbv;
    const waterToAdd = finalVolume - oVol;
    return { invalid: false as const, waterToAdd: Math.round(waterToAdd), finalVolume: Math.round(finalVolume) };
  }, [originalAbv, originalVolume, targetAbv]);

  const coffeeResult = useMemo(() => {
    const amt = parseFloat(coffeeAmount);
    const preset = d.ratioPresets.find((p) => p.key === ratioKey);
    if (!amt || amt <= 0 || !preset) return null;
    return Math.round(amt * preset.ratio);
  }, [coffeeAmount, ratioKey, d.ratioPresets]);

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

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("abv")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "abv" ? "bg-orange-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabAbv}
        </button>
        <button
          onClick={() => setTab("coffee")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "coffee" ? "bg-orange-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabCoffee}
        </button>
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          {tab === "abv" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.originalAbvLabel}</label>
                  <input
                    type="number"
                    min="0"
                    value={originalAbv}
                    onChange={(e) => setOriginalAbv(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{d.originalVolumeLabel}</label>
                  <input
                    type="number"
                    min="0"
                    value={originalVolume}
                    onChange={(e) => setOriginalVolume(e.target.value)}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{d.targetAbvLabel}</label>
                <input
                  type="number"
                  min="0"
                  value={targetAbv}
                  onChange={(e) => setTargetAbv(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>

              {abvResult && abvResult.invalid && (
                <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">{d.abvInvalidMsg}</p>
              )}

              {abvResult && !abvResult.invalid && (
                <div className="rounded-lg bg-orange-50 p-5 text-center">
                  <Wine className="mx-auto mb-2 h-6 w-6 text-orange-600" />
                  <p className="text-sm text-muted-foreground">{d.waterToAddLabel}</p>
                  <p className="text-3xl font-bold text-orange-700">{abvResult.waterToAdd} ml</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {d.finalVolumeLabel}: {abvResult.finalVolume} ml
                  </p>
                </div>
              )}
            </>
          )}

          {tab === "coffee" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-medium">{d.coffeeAmountLabel}</label>
                <input
                  type="number"
                  min="0"
                  value={coffeeAmount}
                  onChange={(e) => setCoffeeAmount(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{d.ratioLabel}</label>
                <select
                  value={ratioKey}
                  onChange={(e) => setRatioKey(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                >
                  {d.ratioPresets.map((p) => (
                    <option key={p.key} value={p.key}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {coffeeResult !== null && (
                <div className="rounded-lg bg-orange-50 p-5 text-center">
                  <Coffee className="mx-auto mb-2 h-6 w-6 text-orange-600" />
                  <p className="text-sm text-muted-foreground">{d.waterAmountLabel}</p>
                  <p className="text-3xl font-bold text-orange-700">{coffeeResult} ml</p>
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
