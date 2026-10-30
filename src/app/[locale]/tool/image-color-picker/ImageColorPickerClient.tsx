"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

type ColorEntry = { hex: string; rgb: string };

export default function ImageColorPicker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [imageUrl, setImageUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [current, setCurrent] = useState<ColorEntry | null>(null);
  const [history, setHistory] = useState<ColorEntry[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setCurrent(null);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const onImageLoad = () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);
  };

  const pickColor = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    const rect = img.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex =
      "#" +
      [pixel[0], pixel[1], pixel[2]]
        .map((v) => v.toString(16).padStart(2, "0"))
        .join("");
    const rgb = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    const entry = { hex, rgb };
    setCurrent(entry);
    setHistory((prev) => [entry, ...prev].slice(0, 12));
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
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
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-violet-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          {!imageUrl ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => document.getElementById("color-picker-input")?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-12 text-center ${isDragging ? "border-violet-500 bg-violet-50" : "border-muted"}`}
            >
              <UploadCloud className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{d.uploadLabel}</p>
              <input
                id="color-picker-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{d.clickHintLabel}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={imageUrl}
                alt="uploaded"
                onLoad={onImageLoad}
                onClick={pickColor}
                className="max-h-96 w-full cursor-crosshair rounded-md border object-contain"
              />
              <canvas ref={canvasRef} className="hidden" />

              {current && (
                <div className="flex items-center gap-4 rounded-md bg-muted/30 p-4">
                  <div className="h-16 w-16 rounded-md border" style={{ backgroundColor: current.hex }} />
                  <div className="flex-1 space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{d.hexLabel}:</span>
                      <span className="font-mono font-medium">{current.hex}</span>
                      <button onClick={() => copyText(current.hex)} className="rounded border px-2 py-0.5 text-xs hover:bg-muted">
                        {copied === current.hex ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{d.rgbLabel}:</span>
                      <span className="font-mono font-medium">{current.rgb}</span>
                      <button onClick={() => copyText(current.rgb)} className="rounded border px-2 py-0.5 text-xs hover:bg-muted">
                        {copied === current.rgb ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {history.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-medium">{d.historyLabel}</p>
                    <button
                      onClick={() => {
                        setHistory([]);
                        setCurrent(null);
                        setImageUrl("");
                      }}
                      className="rounded-md border px-2 py-1 text-xs hover:bg-muted"
                    >
                      {d.resetBtn}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {history.map((c, i) => (
                      <button key={i} onClick={() => setCurrent(c)} title={c.hex} className="h-8 w-8 rounded-md border" style={{ backgroundColor: c.hex }} />
                    ))}
                  </div>
                </div>
              )}
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
