"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2, X } from "lucide-react";
import { data, type Locale } from "./data";

type Box = { page: number; xRatio: number; yRatio: number; wRatio: number; hRatio: number };

export default function PdfRedact({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [canvasUrl, setCanvasUrl] = useState("");
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [drawStart, setDrawStart] = useState<{ x: number; y: number } | null>(null);
  const [drawCurrent, setDrawCurrent] = useState<{ x: number; y: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const imgWrapRef = useRef<HTMLDivElement>(null);

  const renderPage = async (f: File, pageNum: number) => {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
    const bytes = await f.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
    setNumPages(pdf.numPages);
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    await page.render({ canvas, canvasContext: ctx, viewport }).promise;
    setCanvasUrl(canvas.toDataURL("image/png"));
  };

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setBoxes([]);
    setResultUrl("");
    setCurrentPage(1);
    await renderPage(f, 1);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const changePage = async (delta: number) => {
    if (!file) return;
    const next = Math.min(Math.max(currentPage + delta, 1), numPages);
    setCurrentPage(next);
    await renderPage(file, next);
  };

  const getRatio = (clientX: number, clientY: number) => {
    const el = imgWrapRef.current;
    if (!el) return { x: 0, y: 0 };
    const rect = el.getBoundingClientRect();
    return {
      x: Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1),
      y: Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1),
    };
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const r = getRatio(e.clientX, e.clientY);
    setDrawStart(r);
    setDrawCurrent(r);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drawStart) return;
    setDrawCurrent(getRatio(e.clientX, e.clientY));
  };

  const onMouseUp = () => {
    if (!drawStart || !drawCurrent) return;
    const xRatio = Math.min(drawStart.x, drawCurrent.x);
    const yRatio = Math.min(drawStart.y, drawCurrent.y);
    const wRatio = Math.abs(drawCurrent.x - drawStart.x);
    const hRatio = Math.abs(drawCurrent.y - drawStart.y);
    if (wRatio > 0.01 && hRatio > 0.01) {
      setBoxes((prev) => [...prev, { page: currentPage, xRatio, yRatio, wRatio, hRatio }]);
    }
    setDrawStart(null);
    setDrawCurrent(null);
  };

  const removeBox = (idx: number) => {
    setBoxes((prev) => prev.filter((_, i) => i !== idx));
  };

  const applyAndDownload = async () => {
    if (!file || boxes.length === 0) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pages = doc.getPages();
      for (const box of boxes) {
        const page = pages[box.page - 1];
        if (!page) continue;
        const { width, height } = page.getSize();
        const boxWidth = box.wRatio * width;
        const boxHeight = box.hRatio * height;
        const x = box.xRatio * width;
        const y = height - box.yRatio * height - boxHeight;
        page.drawRectangle({ x, y, width: boxWidth, height: boxHeight, color: rgb(0, 0, 0) });
      }
      const outBytes = await doc.save();
      const blob = new Blob([outBytes.slice().buffer], { type: "application/pdf" });
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      setResultUrl(URL.createObjectURL(blob));
    } finally {
      setIsProcessing(false);
    }
  };

  const currentPageBoxes = boxes.filter((b) => b.page === currentPage);

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
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-slate-700 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-red-600">{d.disclaimer}</p>

      <Card>
        <CardContent className="space-y-4 p-6">
          {!file ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => document.getElementById("pdf-redact-input")?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-12 text-center ${isDragging ? "border-slate-500 bg-slate-50" : "border-muted"}`}
            >
              <UploadCloud className="mb-2 h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{d.uploadLabel}</p>
              <input
                id="pdf-redact-input"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <button onClick={() => changePage(-1)} disabled={currentPage <= 1} className="rounded-md border px-2 py-1 disabled:opacity-40">
                    {d.prevPageBtn}
                  </button>
                  <span>
                    {d.pageLabel} {currentPage} / {numPages}
                  </span>
                  <button onClick={() => changePage(1)} disabled={currentPage >= numPages} className="rounded-md border px-2 py-1 disabled:opacity-40">
                    {d.nextPageBtn}
                  </button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">{d.dragHintLabel}</p>

              {canvasUrl && (
                <div
                  ref={imgWrapRef}
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  className="relative select-none overflow-hidden rounded-md border"
                  style={{ cursor: "crosshair" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={canvasUrl} alt={`page-${currentPage}`} className="w-full" draggable={false} />
                  {currentPageBoxes.map((b, i) => (
                    <div
                      key={i}
                      className="absolute bg-black/80"
                      style={{
                        left: `${b.xRatio * 100}%`,
                        top: `${b.yRatio * 100}%`,
                        width: `${b.wRatio * 100}%`,
                        height: `${b.hRatio * 100}%`,
                      }}
                    />
                  ))}
                  {drawStart && drawCurrent && (
                    <div
                      className="absolute border-2 border-red-500 bg-red-500/20"
                      style={{
                        left: `${Math.min(drawStart.x, drawCurrent.x) * 100}%`,
                        top: `${Math.min(drawStart.y, drawCurrent.y) * 100}%`,
                        width: `${Math.abs(drawCurrent.x - drawStart.x) * 100}%`,
                        height: `${Math.abs(drawCurrent.y - drawStart.y) * 100}%`,
                      }}
                    />
                  )}
                </div>
              )}

              <div>
                <p className="mb-2 text-sm font-medium">
                  {d.boxesLabel} ({boxes.length})
                </p>
                {boxes.length === 0 ? (
                  <p className="text-sm text-muted-foreground">{d.noBoxesMsg}</p>
                ) : (
                  <div className="space-y-1">
                    {boxes.map((b, i) => (
                      <div key={i} className="flex items-center justify-between rounded-md bg-muted/30 px-3 py-1.5 text-sm">
                        <span>
                          {d.boxItemLabel} {b.page}
                        </span>
                        <button onClick={() => removeBox(i)} aria-label={d.removeBtn}>
                          <X className="h-4 w-4 text-muted-foreground hover:text-red-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={applyAndDownload}
                disabled={boxes.length === 0 || isProcessing}
                className="flex items-center gap-2 rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
              >
                {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                {isProcessing ? d.processingLabel : d.downloadBtn}
              </button>

              {resultUrl && (
                <a href={resultUrl} download="redacted.pdf" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
                  <Download className="h-4 w-4" />
                  {d.downloadBtn}
                </a>
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
