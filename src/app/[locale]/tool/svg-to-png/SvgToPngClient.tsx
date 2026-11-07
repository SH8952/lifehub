"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function SvgToPng({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [svgCode, setSvgCode] = useState(d.defaultSvg);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [pngUrl, setPngUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setSvgCode(String(reader.result ?? ""));
    };
    reader.readAsText(file);
  };

  const convert = () => {
    setError(false);
    setPngUrl(null);
    try {
      const svgBlob = new Blob([svgCode], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, width, height);
        setPngUrl(canvas.toDataURL("image/png"));
        URL.revokeObjectURL(url);
      };
      img.onerror = () => {
        setError(true);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    } catch {
      setError(true);
    }
  };

  const download = () => {
    if (!pngUrl) return;
    const a = document.createElement("a");
    a.href = pngUrl;
    a.download = "converted.png";
    a.click();
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
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <textarea
              value={svgCode}
              onChange={(e) => setSvgCode(e.target.value)}
              className="h-40 w-full resize-none rounded-md border p-3 font-mono text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.uploadLabel}</label>
            <input ref={fileInputRef} type="file" accept=".svg,image/svg+xml" onChange={handleFileUpload} className="block w-full text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.widthLabel}</label>
              <input type="number" min={1} max={4000} value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.heightLabel}</label>
              <input type="number" min={1} max={4000} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full rounded-md border px-2 py-1.5 text-sm" />
            </div>
          </div>

          <button onClick={convert} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.convertBtn}
          </button>

          {error && <p className="text-sm text-red-600">{d.errorInvalid}</p>}

          {pngUrl && (
            <div>
              <p className="mb-1 text-sm font-medium">{d.previewLabel}</p>
              <div className="flex flex-col items-center gap-3 rounded-md border bg-muted/20 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pngUrl} alt="converted" className="max-w-full" style={{ maxHeight: 300 }} />
                <button onClick={download} className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted">
                  {d.downloadBtn}
                </button>
              </div>
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
