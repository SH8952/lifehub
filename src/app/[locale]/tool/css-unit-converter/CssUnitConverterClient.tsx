"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Unit = "px" | "rem" | "em" | "pt" | "%";

function toPx(value: number, unit: Unit, base: number): number {
  switch (unit) {
    case "px":
      return value;
    case "rem":
    case "em":
      return value * base;
    case "pt":
      return value * (96 / 72);
    case "%":
      return (value / 100) * base;
  }
}

function fromPx(px: number, unit: Unit, base: number): number {
  switch (unit) {
    case "px":
      return px;
    case "rem":
    case "em":
      return px / base;
    case "pt":
      return px * (72 / 96);
    case "%":
      return (px / base) * 100;
  }
}

export default function CssUnitConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [value, setValue] = useState(16);
  const [fromUnit, setFromUnit] = useState<Unit>("px");
  const [baseFont, setBaseFont] = useState(16);
  const [copied, setCopied] = useState<string | null>(null);

  const px = toPx(value, fromUnit, baseFont);
  const units: Unit[] = ["px", "rem", "em", "pt", "%"];

  const copyValue = (unit: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(unit);
    setTimeout(() => setCopied(null), 1500);
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
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.valueLabel}</label>
              <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.fromUnitLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={fromUnit} onChange={(e) => setFromUnit(e.target.value as Unit)}>
                {units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.baseFontLabel}</label>
              <input type="number" value={baseFont} onChange={(e) => setBaseFont(Number(e.target.value) || 16)} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">{d.resultLabel}</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {units.map((u) => {
                const converted = fromPx(px, u, baseFont);
                const text = `${Math.round(converted * 10000) / 10000}${u}`;
                return (
                  <button
                    key={u}
                    onClick={() => copyValue(u, text)}
                    className="flex flex-col items-start rounded-md border bg-muted/30 p-3 text-left hover:bg-muted/50"
                  >
                    <span className="text-xs text-muted-foreground">{u}</span>
                    <span className="font-mono font-medium">{copied === u ? d.copied : text}</span>
                  </button>
                );
              })}
            </div>
          </div>
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
