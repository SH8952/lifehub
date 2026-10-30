"use client";

import { useTranslations } from "next-intl";
import { useRef, useState, useCallback } from "react";
import { zipSync } from "fflate";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

type VariantKey = "original" | "grayscale" | "sepia" | "negative" | "blur" | "bright";

const FILTERS: Record<VariantKey, string> = {
  original: "none",
  grayscale: "grayscale(1)",
  sepia: "sepia(1)",
  negative: "invert(1)",
  blur: "blur(6px)",
  bright: "brightness(1.4)",
};

export default function ImageZipDownload({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fileName, setFileName] = useState("");
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [selected, setSelected] = useState<Record<VariantKey, boolean>>({
    original: true,
    grayscale: true,
    sepia: true,
    negative: true,
    blur: false,
    bright: false,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
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

  const nameFor = (key: VariantKey) => {
    const map: Record<VariantKey, string> = {
      original: d.originalName,
      grayscale: d.grayscaleName,
      sepia: d.sepiaName,
      negative: d.negativeName,
      blur: d.blurName,
      bright: d.brightName,
    };
    return map[key];
  };

  const renderVariant = (key: VariantKey): Promise<Uint8Array> => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas || !imgEl) return resolve(new Uint8Array());
      canvas.width = imgEl.naturalWidth;
      canvas.height = imgEl.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(new Uint8Array());
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = FILTERS[key];
      ctx.drawImage(imgEl, 0, 0);
      ctx.filter = "none";
      canvas.toBlob(
        (blob) => {
          if (!blob) return resolve(new Uint8Array());
          blob.arrayBuffer().then((buf) => resolve(new Uint8Array(buf)));
        },
        "image/jpeg",
        0.9
      );
    });
  };

  const downloadZip = async () => {
    if (!imgEl) return;
    setIsPreparing(true);
    const keys = (Object.keys(selected) as VariantKey[]).filter((k) => selected[k]);
    const files: Record<string, Uint8Array> = {};
    for (const key of keys) {
      const bytes = await renderVariant(key);
      files[`${key}.jpg`] = bytes;
    }
    const zipped = zipSync(files);
    const blob = new Blob([zipped.slice().buffer], { type: "application/zip" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "image-variants.zip";
    a.click();
    URL.revokeObjectURL(url);
    setIsPreparing(false);
  };

  const anySelected = Object.values(selected).some(Boolean);

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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="zip-file-input"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {!imgEl ? (
        <div
          onClick={() => document.getElementById("zip-file-input")?.click()}
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
          <canvas ref={canvasRef} className="hidden" />

          <Card>
            <CardContent className="flex flex-col items-center gap-3 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
              <img src={imgEl.src} alt={fileName} className="max-h-72 rounded-md object-contain" />
              <button
                onClick={() => document.getElementById("zip-file-input")?.click()}
                className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="mb-3 text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(Object.keys(FILTERS) as VariantKey[]).map((key) => (
                  <label key={key} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selected[key]}
                      onChange={(e) => setSelected((prev) => ({ ...prev, [key]: e.target.checked }))}
                    />
                    {nameFor(key)}
                  </label>
                ))}
              </div>
              <button
                onClick={downloadZip}
                disabled={!anySelected || isPreparing}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                {isPreparing ? d.preparingLabel : d.download}
              </button>
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
