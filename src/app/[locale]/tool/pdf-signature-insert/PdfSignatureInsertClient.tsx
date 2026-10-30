"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

export default function PdfSignatureInsert({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [previewUrl, setPreviewUrl] = useState("");
  const [posX, setPosX] = useState(60);
  const [posY, setPosY] = useState(80);
  const [sigWidth, setSigWidth] = useState(30);
  const [hasSignature, setHasSignature] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const sigCanvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setResultUrl("");
    const bytes = await f.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    setPageCount(doc.getPageCount());
    setPageNumber(1);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  useEffect(() => {
    if (!file) return;
    let active = true;
    (async () => {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();
      const bytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      if (!ctx || !active) return;
      await page.render({ canvas, canvasContext: ctx, viewport }).promise;
      if (active) setPreviewUrl(canvas.toDataURL("image/png"));
    })();
    return () => {
      active = false;
    };
  }, [file, pageNumber]);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const point = "touches" in e ? e.touches[0] : e;
    return {
      x: ((point.clientX - rect.left) / rect.width) * canvas.width,
      y: ((point.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    drawingRef.current = true;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPos(e, canvas);
    ctx?.beginPath();
    ctx?.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawingRef.current) return;
    const canvas = sigCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPos(e, canvas);
    if (!ctx) return;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#111827";
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const endDraw = () => {
    drawingRef.current = false;
  };

  const clearSignature = () => {
    const canvas = sigCanvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const applySignature = async () => {
    if (!file || !sigCanvasRef.current || !hasSignature) return;
    setIsProcessing(true);
    try {
      const sigDataUrl = sigCanvasRef.current.toDataURL("image/png");
      const sigBytes = Uint8Array.from(atob(sigDataUrl.split(",")[1]), (c) => c.charCodeAt(0));

      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pages = doc.getPages();
      const page = pages[pageNumber - 1];
      const { width, height } = page.getSize();

      const embeddedImage = await doc.embedPng(sigBytes);
      const drawWidth = (sigWidth / 100) * width;
      const aspect = embeddedImage.height / embeddedImage.width;
      const drawHeight = drawWidth * aspect;

      const drawX = (posX / 100) * width - drawWidth / 2;
      const drawY = height - (posY / 100) * height - drawHeight / 2;

      page.drawImage(embeddedImage, {
        x: drawX,
        y: drawY,
        width: drawWidth,
        height: drawHeight,
      });

      const outBytes = await doc.save();
      const blob = new Blob([outBytes.slice().buffer], { type: "application/pdf" });
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      setResultUrl(URL.createObjectURL(blob));
    } finally {
      setIsProcessing(false);
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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        id="pdf-signature-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-signature-input")?.click()}
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
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{file.name}</p>
                  <button
                    onClick={() => document.getElementById("pdf-signature-input")?.click()}
                    className="rounded-md border px-3 py-1 text-xs hover:bg-muted"
                  >
                    {d.changeFile}
                  </button>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">{d.pageLabel}</label>
                  <input
                    type="number"
                    min={1}
                    max={pageCount ?? undefined}
                    value={pageNumber}
                    onChange={(e) => setPageNumber(Math.min(Math.max(1, Number(e.target.value) || 1), pageCount ?? 1))}
                    className="w-24 rounded-md border px-2 py-1 text-sm"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">/ {pageCount}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col gap-2 p-4">
                <label className="text-sm font-medium">{d.signaturePadLabel}</label>
                <canvas
                  ref={sigCanvasRef}
                  width={400}
                  height={160}
                  className="w-full touch-none rounded-md border bg-white"
                  onMouseDown={startDraw}
                  onMouseMove={draw}
                  onMouseUp={endDraw}
                  onMouseLeave={endDraw}
                  onTouchStart={startDraw}
                  onTouchMove={draw}
                  onTouchEnd={endDraw}
                />
                <button onClick={clearSignature} className="w-fit rounded-md border px-3 py-1 text-xs hover:bg-muted">
                  {d.clearSignature}
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col gap-3 p-4">
                <label className="text-sm font-medium">{d.positionLabel}</label>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">
                    {d.xLabel}: {posX}%
                  </label>
                  <input type="range" min={0} max={100} value={posX} onChange={(e) => setPosX(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">
                    {d.yLabel}: {posY}%
                  </label>
                  <input type="range" min={0} max={100} value={posY} onChange={(e) => setPosY(Number(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-muted-foreground">
                    {d.widthLabel}: {sigWidth}%
                  </label>
                  <input type="range" min={5} max={80} value={sigWidth} onChange={(e) => setSigWidth(Number(e.target.value))} className="w-full" />
                </div>
              </CardContent>
            </Card>

            {!hasSignature && <p className="text-sm text-amber-600">{d.signatureRequired}</p>}

            <button
              onClick={applySignature}
              disabled={isProcessing || !hasSignature}
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {isProcessing ? d.processing : d.generateButton}
            </button>

            {resultUrl && (
              <a
                href={resultUrl}
                download="signed.pdf"
                className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                {d.download}
              </a>
            )}
          </div>

          <Card>
            <CardContent className="p-4">
              <label className="mb-2 block text-sm font-medium">{d.previewLabel}</label>
              <div className="relative overflow-hidden rounded-md border bg-gray-50">
                {previewUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="" className="w-full" />
                )}
                <div
                  style={{
                    position: "absolute",
                    left: `${posX}%`,
                    top: `${posY}%`,
                    width: `${sigWidth}%`,
                    transform: "translate(-50%, -50%)",
                    border: "1px dashed #6366f1",
                    pointerEvents: "none",
                  }}
                  className="aspect-[5/2] bg-indigo-500/10"
                />
              </div>
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
