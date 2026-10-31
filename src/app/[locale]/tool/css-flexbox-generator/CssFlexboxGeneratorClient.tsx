"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const DIRECTIONS = ["row", "row-reverse", "column", "column-reverse"] as const;
const JUSTIFY = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"] as const;
const ALIGN = ["flex-start", "center", "flex-end", "stretch", "baseline"] as const;
const WRAP = ["nowrap", "wrap", "wrap-reverse"] as const;

export default function CssFlexboxGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [direction, setDirection] = useState<(typeof DIRECTIONS)[number]>("row");
  const [justify, setJustify] = useState<(typeof JUSTIFY)[number]>("flex-start");
  const [align, setAlign] = useState<(typeof ALIGN)[number]>("stretch");
  const [wrap, setWrap] = useState<(typeof WRAP)[number]>("nowrap");
  const [gap, setGap] = useState(8);
  const [itemCount, setItemCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const fullCode = `display: flex;\nflex-direction: ${direction};\njustify-content: ${justify};\nalign-items: ${align};\nflex-wrap: ${wrap};\ngap: ${gap}px;`;

  const copyCode = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const selectClass = "w-full rounded-md border px-2 py-1.5 text-sm";

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.directionLabel}</label>
              <select className={selectClass} value={direction} onChange={(e) => setDirection(e.target.value as typeof direction)}>
                {DIRECTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.wrapLabel}</label>
              <select className={selectClass} value={wrap} onChange={(e) => setWrap(e.target.value as typeof wrap)}>
                {WRAP.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.justifyLabel}</label>
              <select className={selectClass} value={justify} onChange={(e) => setJustify(e.target.value as typeof justify)}>
                {JUSTIFY.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.alignLabel}</label>
              <select className={selectClass} value={align} onChange={(e) => setAlign(e.target.value as typeof align)}>
                {ALIGN.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.gapLabel}: {gap}px
              </label>
              <input type="range" min={0} max={40} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.itemCountLabel}: {itemCount}
              </label>
              <input type="range" min={2} max={10} value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))} className="w-full" />
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">{d.previewLabel}</p>
            <div
              className="min-h-40 rounded-lg border bg-muted/20 p-3"
              style={{ display: "flex", flexDirection: direction, justifyContent: justify, alignItems: align, flexWrap: wrap, gap: `${gap}px` }}
            >
              {Array.from({ length: itemCount }).map((_, i) => (
                <div key={i} className="flex h-12 w-16 items-center justify-center rounded-md bg-indigo-500 text-sm font-medium text-white">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.codeLabel}</p>
              <button onClick={copyCode} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                {copied ? d.copied : d.copyBtn}
              </button>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-md bg-muted/30 p-3 font-mono text-sm">{fullCode}</pre>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
