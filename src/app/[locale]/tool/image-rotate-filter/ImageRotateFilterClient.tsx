"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, RotateCw, RotateCcw, FlipHorizontal, FlipVertical } from "lucide-react";
import { data, type Locale } from "./data";

export default function ImageRotateFilter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [originalType, setOriginalType] = useState<string>("image/png");
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [grayscale, setGrayscale] = useState(false);
  const [sepia, setSepia] = useState(false);
  const [resultUrl, setResultUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setOriginalType(file.type || "image/png");
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setImgEl(img);
        setRotation(0);
        setFlipH(false);
        setFlipV(false);
        setBrightness(0);
        setContrast(0);
        setGrayscale(false);
        setSepia(false);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!imgEl) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nw = imgEl.naturalWidth;
    const nh = imgEl.naturalHeight;
    const swapped = rotation === 90 || rotation === 270;
    const outW = swapped ? nh : nw;
    const outH = swapped ? nw : nh;
    canvas.width = outW;
    canvas.height = outH;

    ctx.clearRect(0, 0, outW, outH);
    ctx.save();
    ctx.translate(outW / 2, outH / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
    ctx.filter = `brightness(${100 + brightness}%) contrast(${100 + contrast}%) grayscale(${grayscale ? 100 : 0}%) sepia(${sepia ? 100 : 0}%)`;
    ctx.drawImage(imgEl, -nw / 2, -nh / 2);
    ctx.restore();

    canvas.toBlob((blob) => {
      if (!blob) return;
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResultUrl(url);
    }, originalType);
  }, [imgEl, rotation, flipH, flipV, brightness, contrast, grayscale, sepia, originalType]);

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

  const resetAll = () => {
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setBrightness(0);
    setContrast(0);
    setGrayscale(false);
    setSepia(false);
  };

  const outExt = originalType === "image/png" ? "png" : originalType === "image/webp" ? "webp" : "jpg";

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

          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setRotation((r) => (r + 90) % 360)} className="flex items-center gap-1 rounded-md border px-3 py-2 text-sm hover:bg-muted">
                  <RotateCw className="h-4 w-4" />
                  {d.rotateCw}
                </button>
                <button onClick={() => setRotation((r) => (r + 270) % 360)} className="flex items-center gap-1 rounded-md border px-3 py-2 text-sm hover:bg-muted">
                  <RotateCcw className="h-4 w-4" />
                  {d.rotateCcw}
                </button>
                <button
                  onClick={() => setFlipH((v) => !v)}
                  className={`flex items-center gap-1 rounded-md border px-3 py-2 text-sm ${flipH ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                >
                  <FlipHorizontal className="h-4 w-4" />
                  {d.flipH}
                </button>
                <button
                  onClick={() => setFlipV((v) => !v)}
                  className={`flex items-center gap-1 rounded-md border px-3 py-2 text-sm ${flipV ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                >
                  <FlipVertical className="h-4 w-4" />
                  {d.flipV}
                </button>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.brightnessLabel}: {brightness}
                </label>
                <input type="range" min={-100} max={100} value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-full" />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.contrastLabel}: {contrast}
                </label>
                <input type="range" min={-100} max={100} value={contrast} onChange={(e) => setContrast(Number(e.target.value))} className="w-full" />
              </div>

              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={grayscale} onChange={(e) => setGrayscale(e.target.checked)} />
                  {d.grayscaleLabel}
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={sepia} onChange={(e) => setSepia(e.target.checked)} />
                  {d.sepiaLabel}
                </label>
              </div>

              <div className="flex flex-wrap gap-2">
                <button onClick={resetAll} className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted">
                  {d.reset}
                </button>
                <button onClick={() => fileInputRef.current?.click()} className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted">
                  {d.changeImage}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
              {resultUrl && <img src={resultUrl} alt="result" className="max-h-96 rounded-md object-contain" />}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download={`edited.${outExt}`}
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
