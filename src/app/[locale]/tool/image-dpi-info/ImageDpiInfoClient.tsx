"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import { data, type Locale } from "./data";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function ImageDpiInfo({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setFileSize(file.size);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => setImgEl(img);
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const w = imgEl?.naturalWidth ?? 0;
  const h = imgEl?.naturalHeight ?? 0;
  const divisor = w && h ? gcd(w, h) : 1;
  const aspectW = w / divisor;
  const aspectH = h / divisor;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
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
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="dpi-file-input"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {!imgEl ? (
        <div
          onClick={() => document.getElementById("dpi-file-input")?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-muted-foreground/30 hover:bg-muted/50"}`}
        >
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <p className="font-medium">{d.uploadLabel}</p>
          <p className="text-sm text-muted-foreground">{d.uploadHint}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
              <img src={imgEl.src} alt={fileName} className="max-h-72 rounded-md object-contain" />
              <button
                onClick={() => document.getElementById("dpi-file-input")?.click()}
                className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="mb-3 text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-md border p-3">
                  <dt className="text-xs text-muted-foreground">{d.dimensionLabel}</dt>
                  <dd className="text-lg font-semibold">{w} × {h} px</dd>
                </div>
                <div className="rounded-md border p-3">
                  <dt className="text-xs text-muted-foreground">{d.fileSizeLabel}</dt>
                  <dd className="text-lg font-semibold">{formatBytes(fileSize)}</dd>
                </div>
                <div className="rounded-md border p-3">
                  <dt className="text-xs text-muted-foreground">{d.aspectLabel}</dt>
                  <dd className="text-lg font-semibold">{aspectW}:{aspectH}</dd>
                </div>
                <div className="rounded-md border p-3 sm:col-span-2">
                  <dt className="mb-1 text-xs text-muted-foreground">{d.printSizeLabel}</dt>
                  <dd className="space-y-1 text-sm">
                    {[72, 150, 300].map((dpi) => (
                      <div key={dpi}>
                        {dpi} DPI: {(w / dpi).toFixed(1)}&quot; × {(h / dpi).toFixed(1)}&quot; ({((w / dpi) * 2.54).toFixed(1)}cm × {((h / dpi) * 2.54).toFixed(1)}cm)
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      )}

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
