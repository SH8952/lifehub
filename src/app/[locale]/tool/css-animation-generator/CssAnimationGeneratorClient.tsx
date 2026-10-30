"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type AnimType = "bounce" | "fade" | "spin" | "pulse" | "shake";

const KEYFRAMES: Record<AnimType, string> = {
  bounce: `@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}`,
  fade: `@keyframes fade {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.2; }\n}`,
  spin: `@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}`,
  pulse: `@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.15); }\n}`,
  shake: `@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-8px); }\n  75% { transform: translateX(8px); }\n}`,
};

export default function CssAnimationGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [type, setType] = useState<AnimType>("bounce");
  const [duration, setDuration] = useState(1.5);
  const [infinite, setInfinite] = useState(true);
  const [copied, setCopied] = useState(false);

  const animationStyle = `${type} ${duration}s ease-in-out ${infinite ? "infinite" : "1"}`;
  const fullCode = `${KEYFRAMES[type]}\n\n.element {\n  animation: ${animationStyle};\n}`;

  const copyCode = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const typeOptions: { key: AnimType; label: string }[] = [
    { key: "bounce", label: d.typeBounce },
    { key: "fade", label: d.typeFade },
    { key: "spin", label: d.typeSpin },
    { key: "pulse", label: d.typePulse },
    { key: "shake", label: d.typeShake },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <style>{Object.values(KEYFRAMES).join("\n\n")}</style>

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
          <div>
            <label className="mb-1 block text-sm font-medium">{d.typeLabel}</label>
            <div className="flex flex-wrap gap-2">
              {typeOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setType(opt.key)}
                  className={`rounded-md border px-3 py-1.5 text-sm ${type === opt.key ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.durationLabel}: {duration}s
              </label>
              <input type="range" min={0.2} max={5} step={0.1} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={infinite} onChange={(e) => setInfinite(e.target.checked)} />
                {d.infiniteLabel}
              </label>
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">{d.previewLabel}</p>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-muted/20">
              <div
                className="h-16 w-16 rounded-lg bg-indigo-500"
                style={{ animation: animationStyle }}
              />
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.codeLabel}</p>
              <button onClick={copyCode} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                {copied ? d.copied : d.copyBtn}
              </button>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-md bg-muted/30 p-3 font-mono text-xs">{fullCode}</pre>
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
