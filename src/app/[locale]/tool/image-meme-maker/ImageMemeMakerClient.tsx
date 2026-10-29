"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download } from "lucide-react";
import { data, type Locale } from "./data";

function drawCaption(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, px: number) {
  ctx.font = `bold ${px}px Impact, "Arial Black", sans-serif`;
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = px / 12;
  ctx.lineJoin = "round";

  const words = text.toUpperCase().split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);

  lines.forEach((line, i) => {
    const ly = y + i * px * 1.1;
    ctx.strokeText(line, x, ly);
    ctx.fillText(line, x, ly);
  });
}

export default function ImageMemeMaker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fileName, setFileName] = useState("");
  const [originalType, setOriginalType] = useState("");
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [topText, setTopText] = useState("TOP TEXT");
  const [bottomText, setBottomText] = useState("BOTTOM TEXT");
  const [fontSize, setFontSize] = useState(8);

  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    if (!canvas) return;
    const w = imgEl.naturalWidth;
    const h = imgEl.naturalHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(imgEl, 0, 0);

    const px = Math.max(16, (Math.min(w, h) * fontSize) / 100);
    const maxWidth = w * 0.92;

    if (topText.trim()) {
      drawCaption(ctx, topText, w / 2, px * 1.1, maxWidth, px);
    }
    if (bottomText.trim()) {
      const lines = Math.ceil(ctx.measureText(bottomText.toUpperCase()).width / maxWidth) || 1;
      drawCaption(ctx, bottomText, w / 2, h - px * 0.4 - (lines - 1) * px * 1.1, maxWidth, px);
    }

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
  }, [imgEl, originalType, topText, bottomText, fontSize]);

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="meme-file-input"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {!imgEl ? (
        <div
          onClick={() => document.getElementById("meme-file-input")?.click()}
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
                <label className="mb-1 block text-sm font-medium">{d.topTextLabel}</label>
                <input type="text" value={topText} onChange={(e) => setTopText(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.bottomTextLabel}</label>
                <input type="text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {d.sizeLabel}: {fontSize}%
                </label>
                <input type="range" min={3} max={15} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" />
              </div>
              <button
                onClick={() => document.getElementById("meme-file-input")?.click()}
                className="w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.changeImage}
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <p className="text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
              {resultUrl && <img src={resultUrl} alt={fileName} className="max-h-96 rounded-md object-contain" />}
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download={`meme.${outExt}`}
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
