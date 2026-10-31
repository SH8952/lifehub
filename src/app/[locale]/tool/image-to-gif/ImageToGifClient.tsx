"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { GIFEncoder, quantize, applyPalette } from "gifenc";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export default function ImageToGif({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [delay, setDelay] = useState(500);
  const [isGenerating, setIsGenerating] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const imgFiles = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, 10);
    if (imgFiles.length < 1) return;
    const dataUrls = await Promise.all(
      imgFiles.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          })
      )
    );
    const loadedImages = await Promise.all(dataUrls.map((url) => loadImage(url)));
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length < 2) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGenerating(true);

    const w = images[0].naturalWidth;
    const h = images[0].naturalHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gif = GIFEncoder();

    for (const img of images) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      const dw = Math.min(w, img.naturalWidth);
      const dh = Math.min(h, img.naturalHeight);
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);

      const { data: pixels } = ctx.getImageData(0, 0, w, h);
      const palette = quantize(pixels, 256);
      const index = applyPalette(pixels, palette);
      gif.writeFrame(index, w, h, { palette, delay });
    }

    gif.finish();
    const bytes = gif.bytes();
    const blob = new Blob([bytes.slice().buffer], { type: "image/gif" });
    if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    const url = URL.createObjectURL(blob);
    resultUrlRef.current = url;
    setResultUrl(url);
    setIsGenerating(false);
  }, [images, delay]);

  useEffect(() => {
    return () => {
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    };
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };

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
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        id="to-gif-file-input"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
        }}
      />

      {images.length < 2 ? (
        <div
          onClick={() => document.getElementById("to-gif-file-input")?.click()}
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
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.delayLabel}: {delay}ms
                </label>
                <input type="range" min={100} max={2000} step={50} value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="w-full" />
              </div>
              <button
                onClick={() => document.getElementById("to-gif-file-input")?.click()}
                className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <p className="text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
              {isGenerating ? (
                <p className="text-sm text-muted-foreground">{d.generatingLabel}</p>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님
                resultUrl && <img src={resultUrl} alt="gif" className="max-h-96 rounded-md object-contain" />
              )}
            </CardContent>
          </Card>

          {resultUrl && !isGenerating && (
            <a
              href={resultUrl}
              download="animation.gif"
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
