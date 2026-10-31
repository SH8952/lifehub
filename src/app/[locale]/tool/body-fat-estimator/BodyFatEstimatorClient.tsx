"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function BodyFatEstimator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState(170);
  const [neck, setNeck] = useState(38);
  const [waist, setWaist] = useState(85);
  const [hip, setHip] = useState(95);
  const [result, setResult] = useState<{ bodyFat: number; category: string } | { error: true } | null>(null);

  const categorize = (bf: number, g: "male" | "female") => {
    if (g === "male") {
      if (bf < 6) return d.categoryEssential;
      if (bf < 14) return d.categoryAthletic;
      if (bf < 18) return d.categoryFit;
      if (bf < 25) return d.categoryAverage;
      return d.categoryHigh;
    } else {
      if (bf < 14) return d.categoryEssential;
      if (bf < 21) return d.categoryAthletic;
      if (bf < 25) return d.categoryFit;
      if (bf < 32) return d.categoryAverage;
      return d.categoryHigh;
    }
  };

  const calculate = () => {
    if (gender === "male") {
      if (waist <= neck) {
        setResult({ error: true });
        return;
      }
      const bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
      setResult({ bodyFat: bf, category: categorize(bf, gender) });
    } else {
      if (waist + hip <= neck) {
        setResult({ error: true });
        return;
      }
      const bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
      setResult({ bodyFat: bf, category: categorize(bf, gender) });
    }
  };

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.genderLabel}</label>
            <select value={gender} onChange={(e) => setGender(e.target.value as "male" | "female")} className="w-full rounded-md border px-2 py-1.5 text-sm">
              <option value="male">{d.genderMale}</option>
              <option value="female">{d.genderFemale}</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.heightLabel}</label>
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.neckLabel}</label>
              <input type="number" value={neck} onChange={(e) => setNeck(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.waistLabel}</label>
              <input type="number" value={waist} onChange={(e) => setWaist(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            {gender === "female" && (
              <div>
                <label className="mb-1 block text-sm font-medium">{d.hipLabel}</label>
                <input type="number" value={hip} onChange={(e) => setHip(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
              </div>
            )}
          </div>

          <button onClick={calculate} className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700">
            {d.calculateBtn}
          </button>

          {result && "error" in result && <p className="text-sm text-red-600">{d.invalidInputMsg}</p>}

          {result && !("error" in result) && (
            <div className="space-y-2">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-rose-50 p-3">
                  <p className="text-xs text-muted-foreground">{d.resultLabel}</p>
                  <p className="font-mono text-lg font-semibold text-rose-700">{result.bodyFat.toFixed(1)}%</p>
                </div>
                <div className="rounded-md bg-muted/30 p-3">
                  <p className="text-xs text-muted-foreground">{d.categoryLabel}</p>
                  <p className="font-medium">{result.category}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{d.disclaimer}</p>
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
