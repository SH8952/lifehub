"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return [0, 0, 0];
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export default function ContrastChecker({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fg, setFg] = useState("#1f2937");
  const [bg, setBg] = useState("#ffffff");

  const ratio = contrastRatio(fg, bg);
  const checks = [
    { label: d.aaNormalLabel, pass: ratio >= 4.5 },
    { label: d.aaLargeLabel, pass: ratio >= 3 },
    { label: d.aaaNormalLabel, pass: ratio >= 7 },
    { label: d.aaaLargeLabel, pass: ratio >= 4.5 },
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
            description: d.subtitle,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.foregroundLabel}</label>
              <div className="flex items-center gap-2">
                <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="h-10 w-14 cursor-pointer rounded-md border" />
                <input type="text" value={fg} onChange={(e) => setFg(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm font-mono" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.backgroundLabel}</label>
              <div className="flex items-center gap-2">
                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="h-10 w-14 cursor-pointer rounded-md border" />
                <input type="text" value={bg} onChange={(e) => setBg(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm font-mono" />
              </div>
            </div>
          </div>

          <div className="rounded-md bg-muted/30 p-4 text-center">
            <p className="text-sm text-muted-foreground">{d.ratioLabel}</p>
            <p className="text-3xl font-bold">{ratio.toFixed(2)}:1</p>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">{d.previewLabel}</p>
            <div className="flex h-24 items-center justify-center rounded-lg border text-lg" style={{ backgroundColor: bg, color: fg }}>
              {d.previewText}
            </div>
          </div>

          <div className="space-y-2">
            {checks.map((c, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                <span>{c.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${c.pass ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {c.pass ? d.pass : d.fail}
                </span>
              </div>
            ))}
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
