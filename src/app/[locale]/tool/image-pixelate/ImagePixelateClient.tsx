"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

export default function ImagePixelate({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fileName, setFileName] = useState<string>("");
  const [originalType, setOriginalType] = useState<string>("");
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [blockSize, setBlockSize] = useState(10);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const smallCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setOriginalType(file.type);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => setImgEl(img);
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!imgEl) return;
    const canvas = canvasRef.current;
    const small = smallCanvasRef.current;
    if (!canvas || !small) return;
    const w = imgEl.naturalWidth;
    const h = imgEl.naturalHeight;
    canvas.width = w;
    canvas.height = h;

    const sw = Math.max(1, Math.floor(w / blockSize));
    const sh = Math.max(1, Math.floor(h / blockSize));
    small.width = sw;
    small.height = sh;
    const sctx = small.getContext("2d");
    if (!sctx) return;
    sctx.clearRect(0, 0, sw, sh);
    sctx.drawImage(imgEl, 0, 0, sw, sh);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, sw, sh, 0, 0, w, h);

    const mime = originalType || "image/jpeg";
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
        const url = URL.createObjectURL(blob);
        resultUrlRef.current = url;
        setResultUrl(url);
      },
      mime,
      0.92
    );
  }, [imgEl, originalType, blockSize]);

  useEffect(() => {
    return () => {
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const outExt = (originalType || "image/jpeg") === "image/png" ? "png" : "jpg";

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {!imgEl ? (
        <div
          onClick={() => fileInputRef.current?.click()}
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
          <canvas ref={smallCanvasRef} className="hidden" />

          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.blockLabel}: {blockSize}px
                </label>
                <input
                  type="range"
                  min={2}
                  max={50}
                  value={blockSize}
                  onChange={(e) => setBlockSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <p className="text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
              {resultUrl && <img src={resultUrl} alt={fileName} className="max-h-96 rounded-md object-contain" />}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download={`result.${outExt}`}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              {d.download}
            </a>
          )}
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
