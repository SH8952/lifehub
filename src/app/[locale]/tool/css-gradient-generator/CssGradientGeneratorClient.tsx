"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function CssGradientGenerator({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState("#6366F1");
  const [color2, setColor2] = useState("#EC4899");
  const [copied, setCopied] = useState(false);

  const gradientCss =
    type === "linear" ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`;
  const fullCode = `background: ${gradientCss};`;

  const copyCode = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.typeLabel}</label>
            <div className="flex gap-2">
              <button onClick={() => setType("linear")} className={`flex-1 rounded-md border px-3 py-2 text-sm ${type === "linear" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                {d.typeLinear}
              </button>
              <button onClick={() => setType("radial")} className={`flex-1 rounded-md border px-3 py-2 text-sm ${type === "radial" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                {d.typeRadial}
              </button>
            </div>
          </div>

          {type === "linear" && (
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.angleLabel}: {angle}°
              </label>
              <input type="range" min={0} max={360} value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.color1Label}</label>
              <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-10 w-full cursor-pointer rounded-md border" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.color2Label}</label>
              <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-10 w-full cursor-pointer rounded-md border" />
            </div>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">{d.previewLabel}</p>
            <div className="h-40 w-full rounded-lg border" style={{ background: gradientCss }} />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.codeLabel}</p>
              <button onClick={copyCode} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                {copied ? d.copied : d.copyBtn}
              </button>
            </div>
            <pre className="overflow-x-auto rounded-md bg-muted/30 p-3 font-mono text-sm">{fullCode}</pre>
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
