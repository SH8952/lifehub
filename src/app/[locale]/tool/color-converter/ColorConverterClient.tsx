"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

function isValidHex(hex: string) {
  return /^#?[0-9a-fA-F]{6}$/.test(hex);
}

function normalizeHex(hex: string) {
  const h = hex.startsWith("#") ? hex : `#${hex}`;
  return h.toLowerCase();
}

function hexToRgb(hex: string) {
  const h = normalizeHex(hex).slice(1);
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number) {
  const clamp = (n: number) => Math.min(255, Math.max(0, Math.round(n || 0)));
  const toHex = (n: number) => clamp(n).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default function ColorConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [hexInput, setHexInput] = useState("#4f46e5");
  const [rgb, setRgb] = useState(hexToRgb("#4f46e5"));
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const hexValid = isValidHex(hexInput);
  const currentHex = hexValid ? normalizeHex(hexInput) : "#000000";
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const handleHexChange = (value: string) => {
    setHexInput(value);
    if (isValidHex(value)) {
      setRgb(hexToRgb(value));
    }
  };

  const handleRgbChange = (channel: "r" | "g" | "b", value: number) => {
    const next = { ...rgb, [channel]: Math.min(255, Math.max(0, value || 0)) };
    setRgb(next);
    setHexInput(rgbToHex(next.r, next.g, next.b));
  };

  const handlePicker = (value: string) => {
    setHexInput(value);
    setRgb(hexToRgb(value));
  };

  const handleCopy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 1500);
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          <Card>
            <CardContent className="p-4">
              <label className="mb-1 block text-sm font-medium">{d.hexLabel}</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => handleHexChange(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 font-mono text-sm"
                />
                <button onClick={() => handleCopy("hex", currentHex)} className="inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-2 text-xs hover:bg-muted">
                  {copiedField === "hex" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copiedField === "hex" ? d.copiedMsg : d.copyBtn}
                </button>
              </div>
              {!hexValid && <p className="mt-1 text-xs text-red-600">{d.invalidHex}</p>}
              <div className="mt-3 flex items-center gap-2">
                <label className="text-sm font-medium">{d.pickerLabel}</label>
                <input type="color" value={currentHex} onChange={(e) => handlePicker(e.target.value)} className="h-8 w-14 cursor-pointer rounded border" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium">{d.rgbLabel}</label>
                <button onClick={() => handleCopy("rgb", rgbString)} className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted">
                  {copiedField === "rgb" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copiedField === "rgb" ? d.copiedMsg : d.copyBtn}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(["r", "g", "b"] as const).map((ch) => (
                  <div key={ch}>
                    <label className="mb-1 block text-xs uppercase text-muted-foreground">{ch}</label>
                    <input
                      type="number"
                      min={0}
                      max={255}
                      value={rgb[ch]}
                      onChange={(e) => handleRgbChange(ch, Number(e.target.value))}
                      className="w-full rounded-md border px-2 py-1.5 text-sm"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 font-mono text-sm text-muted-foreground">{rgbString}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardContent className="flex flex-col items-center gap-2 p-4">
            <p className="text-sm font-semibold text-muted-foreground">{d.previewLabel}</p>
            <div className="h-28 w-28 rounded-lg border shadow-inner" style={{ backgroundColor: currentHex }} />
          </CardContent>
        </Card>
      </div>

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
