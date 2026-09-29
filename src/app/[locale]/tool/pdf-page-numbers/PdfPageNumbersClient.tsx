"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { data, type Locale } from "./data";

type Position = "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right";
type Format = "number" | "current-total";

const POSITIONS: Position[] = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];

export default function PdfPageNumbers({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [position, setPosition] = useState<Position>("bottom-center");
  const [format, setFormat] = useState<Format>("number");
  const [startNumber, setStartNumber] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultUrlRef = useRef<string>("");

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setResultUrl("");
    try {
      const bytes = await f.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      setPageCount(doc.getPageCount());
    } catch {
      setPageCount(null);
    }
  };

  const handleProcess = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const pages = doc.getPages();
      const fontSize = 10;
      const margin = 28;

      pages.forEach((page, index) => {
        const { width, height } = page.getSize();
        const num = startNumber + index;
        const label = format === "current-total" ? `${num} / ${startNumber + pages.length - 1}` : `${num}`;
        const textWidth = font.widthOfTextAtSize(label, fontSize);

        let x = margin;
        let y = margin;
        if (position.endsWith("center")) x = width / 2 - textWidth / 2;
        if (position.endsWith("right")) x = width - margin - textWidth;
        if (position.startsWith("top")) y = height - margin;

        page.drawText(label, { x, y, size: fontSize, font, color: rgb(0.2, 0.2, 0.2) });
      });

      const outBytes = await doc.save();
      const blob = new Blob([outBytes as unknown as BlobPart], { type: "application/pdf" });
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResultUrl(url);
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
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files?.[0];
            if (f) handleFile(f);
          }}
          className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-muted-foreground/30 p-8 text-center hover:bg-muted/50"
        >
          <UploadCloud className="h-10 w-10 text-muted-foreground" />
          <p className="font-medium">{d.uploadLabel}</p>
          <p className="text-sm text-muted-foreground">{d.uploadHint}</p>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <p className="text-sm text-muted-foreground">
                {file.name} — {d.pageCountLabel}: {pageCount ?? "?"}
              </p>

              <div>
                <label className="mb-1 block text-sm font-medium">{d.positionLabel}</label>
                <div className="grid w-32 grid-cols-3 gap-1">
                  {POSITIONS.map((p) => (
                    <button
                      key={p}
                      onClick={() => setPosition(p)}
                      className={`h-9 w-9 rounded-md border ${position === p ? "bg-indigo-600" : "bg-white hover:bg-muted"}`}
                      aria-label={p}
                    >
                      <span className={`mx-auto block h-2 w-2 rounded-full ${position === p ? "bg-white" : "bg-muted-foreground/50"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">{d.formatLabel}</label>
                <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className="w-full rounded-md border px-3 py-2 text-sm">
                  <option value="number">{d.formatNumberOnly}</option>
                  <option value="current-total">{d.formatCurrentTotal}</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">{d.startNumberLabel}</label>
                <input
                  type="number"
                  min={0}
                  value={startNumber}
                  onChange={(e) => setStartNumber(Number(e.target.value))}
                  className="w-32 rounded-md border px-3 py-2 text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleProcess}
                  disabled={isProcessing}
                  className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isProcessing ? d.processing : d.process}
                </button>
                <button onClick={() => fileInputRef.current?.click()} className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                  {d.changeFile}
                </button>
              </div>
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download={`numbered-${file.name}`}
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
