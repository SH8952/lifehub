"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2, X } from "lucide-react";
import { data, type Locale } from "./data";

interface ImageItem {
  file: File;
  previewUrl: string;
}

function loadImageEl(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

async function fileToJpegBytes(file: File): Promise<{ bytes: Uint8Array; width: number; height: number }> {
  const dataUrl: string = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
  const img = await loadImageEl(dataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { bytes: new Uint8Array(), width: 0, height: 0 };
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  const blob: Blob = await new Promise((resolve) => canvas.toBlob((b) => resolve(b as Blob), "image/jpeg", 0.92));
  const buf = await blob.arrayBuffer();
  return { bytes: new Uint8Array(buf), width: canvas.width, height: canvas.height };
}

export default function ImagesToPdf({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [items, setItems] = useState<ImageItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  const addFiles = useCallback((files: FileList | File[]) => {
    const imgFiles = Array.from(files).filter((f) => f.type.startsWith("image/"));
    const newItems = imgFiles.map((file) => ({ file, previewUrl: URL.createObjectURL(file) }));
    setItems((prev) => [...prev, ...newItems]);
    setResultUrl("");
  }, []);

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    setResultUrl("");
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const generatePdf = async () => {
    if (items.length === 0) return;
    setIsGenerating(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const pageW = 595.28;
      const pageH = 841.89;
      const margin = 28;
      for (const item of items) {
        const { bytes, width, height } = await fileToJpegBytes(item.file);
        if (!width || !height) continue;
        const image = await pdfDoc.embedJpg(bytes);
        const page = pdfDoc.addPage([pageW, pageH]);
        const maxW = pageW - margin * 2;
        const maxH = pageH - margin * 2;
        const scale = Math.min(maxW / width, maxH / height);
        const w = width * scale;
        const h = height * scale;
        page.drawImage(image, { x: (pageW - w) / 2, y: (pageH - h) / 2, width: w, height: h });
      }
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.slice().buffer], { type: "application/pdf" });
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      setResultUrl(URL.createObjectURL(blob));
    } finally {
      setIsGenerating(false);
    }
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
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <input
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        id="images-to-pdf-input"
        onChange={(e) => {
          if (e.target.files?.length) addFiles(e.target.files);
        }}
      />

      {items.length === 0 ? (
        <div
          onClick={() => document.getElementById("images-to-pdf-input")?.click()}
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
            <CardContent className="p-4">
              <p className="mb-3 text-sm font-semibold text-muted-foreground">{d.fileListLabel}</p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {items.map((item, i) => (
                  <div key={i} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 업로드/캔버스 결과 미리보기(blob 또는 data URL)라 next/image 최적화 대상 아님 */}
                    <img src={item.previewUrl} alt={item.file.name} className="h-24 w-full rounded-md border object-cover" />
                    <button
                      onClick={() => removeItem(i)}
                      className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      aria-label={d.remove}
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 text-xs text-white">{i + 1}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => document.getElementById("images-to-pdf-input")?.click()}
                className="mt-4 w-fit rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {d.addMore}
              </button>
            </CardContent>
          </Card>

          <button
            onClick={generatePdf}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {isGenerating ? d.generatingLabel : d.generateButton}
          </button>

          {resultUrl && (
            <a
              href={resultUrl}
              download="images.pdf"
              className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
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
