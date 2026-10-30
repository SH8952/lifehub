"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

type Layout = "2x1" | "1x2" | "2x2" | "3x1";
const LAYOUTS: Layout[] = ["2x1", "1x2", "2x2", "3x1"];

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

export default function ImageCollageMaker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [layout, setLayout] = useState<Layout>("2x2");
  const [gap, setGap] = useState(8);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const imgFiles = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, 4);
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

    let cols = 2, rows = 1;
    if (layout === "2x1") { cols = 2; rows = 1; }
    if (layout === "1x2") { cols = 1; rows = 2; }
    if (layout === "2x2") { cols = 2; rows = 2; }
    if (layout === "3x1") { cols = 3; rows = 1; }

    const cellW = 500;
    const cellH = 500;
    const totalW = cellW * cols + gap * (cols + 1);
    const totalH = cellH * rows + gap * (rows + 1);
    canvas.width = totalW;
    canvas.height = totalH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, totalW, totalH);

    const cellCount = cols * rows;
    for (let i = 0; i < cellCount; i++) {
      const img = images[i % images.length];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const dx = gap + col * (cellW + gap);
      const dy = gap + row * (cellH + gap);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const cellRatio = cellW / cellH;
      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
      if (imgRatio > cellRatio) {
        sw = img.naturalHeight * cellRatio;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        sh = img.naturalWidth / cellRatio;
        sy = (img.naturalHeight - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, dx, dy, cellW, cellH);
    }

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
        const url = URL.createObjectURL(blob);
        resultUrlRef.current = url;
        setResultUrl(url);
      },
      "image/jpeg",
      0.92
    );
  }, [images, layout, gap]);

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        id="collage-file-input"
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files);
        }}
      />

      {images.length < 2 ? (
        <div
          onClick={() => document.getElementById("collage-file-input")?.click()}
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
                <label className="mb-1 block text-sm font-medium">{d.layoutLabel}</label>
                <div className="flex flex-wrap gap-2">
                  {LAYOUTS.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLayout(l)}
                      className={`rounded-md border px-4 py-2 text-sm ${layout === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.gapLabel}: {gap}px
                </label>
                <input type="range" min={0} max={40} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full" />
              </div>
              <button
                onClick={() => document.getElementById("collage-file-input")?.click()}
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
              {resultUrl && <img src={resultUrl} alt="collage" className="max-h-96 rounded-md object-contain" />}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download="collage.jpg"
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
