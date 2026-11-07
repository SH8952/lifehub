"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

type ImgFormat = "png" | "jpeg";

export default function PdfThumbnailExtract({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [fileName, setFileName] = useState("");
  const [isRendering, setIsRendering] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [format, setFormat] = useState<ImgFormat>("png");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (file: File) => {
    if (file.type !== "application/pdf") return;
    setFileName(file.name);
    setIsRendering(true);
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      const bytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      await page.render({ canvas, canvasContext: ctx, viewport }).promise;

      if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
      const mime = format === "png" ? "image/png" : "image/jpeg";
      const dataUrl = canvas.toDataURL(mime, 0.92);
      setThumbnailUrl(dataUrl);
    } finally {
      setIsRendering(false);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
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
        accept="application/pdf"
        className="hidden"
        id="pdf-thumbnail-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!fileName ? (
        <div
          onClick={() => document.getElementById("pdf-thumbnail-input")?.click()}
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
            <CardContent className="flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{fileName}</p>
                <button
                  onClick={() => document.getElementById("pdf-thumbnail-input")?.click()}
                  className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
                >
                  {d.changeFile}
                </button>
              </div>

              {isRendering ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {d.rendering}
                </div>
              ) : thumbnailUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumbnailUrl} alt={fileName} className="max-h-96 self-start rounded-md border object-contain" />
                  <div>
                    <label className="mb-1 block text-sm font-medium">{d.formatLabel}</label>
                    <div className="flex gap-2">
                      {(["png", "jpeg"] as ImgFormat[]).map((f) => (
                        <button
                          key={f}
                          onClick={() => setFormat(f)}
                          className={`rounded-md border px-4 py-2 text-sm uppercase ${format === f ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                  <a
                    href={thumbnailUrl}
                    download={`${fileName.replace(/\.pdf$/i, "") || "thumbnail"}.${format}`}
                    className="inline-flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    <Download className="h-4 w-4" />
                    {d.download}
                  </a>
                </>
              ) : null}
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
