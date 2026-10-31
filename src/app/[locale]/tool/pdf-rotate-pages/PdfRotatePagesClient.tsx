"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

function parsePageRange(input: string, totalPages: number): number[] {
  const indices = new Set<number>();
  const parts = input.split(",").map((p) => p.trim()).filter(Boolean);
  for (const part of parts) {
    const rangeMatch = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (rangeMatch) {
      const start = Math.max(1, parseInt(rangeMatch[1], 10));
      const end = Math.min(totalPages, parseInt(rangeMatch[2], 10));
      for (let i = start; i <= end; i++) indices.add(i);
    } else if (/^\d+$/.test(part)) {
      const n = parseInt(part, 10);
      if (n >= 1 && n <= totalPages) indices.add(n);
    }
  }
  return Array.from(indices).sort((a, b) => a - b).map((n) => n - 1);
}

export default function PdfRotatePages({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [angle, setAngle] = useState(90);
  const [target, setTarget] = useState<"all" | "range">("all");
  const [rangeInput, setRangeInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setResultUrl("");
    const bytes = await f.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    setPageCount(doc.getPageCount());
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const applyRotation = async () => {
    if (!file || !pageCount) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const targetIndices =
        target === "all" ? Array.from({ length: pageCount }, (_, i) => i) : parsePageRange(rangeInput, pageCount);
      for (const idx of targetIndices) {
        const page = doc.getPage(idx);
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angle) % 360));
      }
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        id="pdf-rotate-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-rotate-input")?.click()}
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
              <p className="text-sm text-muted-foreground">
                {file.name} — {d.pageCountLabel}: {pageCount}
              </p>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.angleLabel}</label>
                <div className="flex gap-2">
                  {[90, 180, 270].map((a) => (
                    <button
                      key={a}
                      onClick={() => setAngle(a)}
                      className={`rounded-md border px-4 py-2 text-sm ${angle === a ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                    >
                      {a}°
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.targetLabel}</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTarget("all")}
                    className={`rounded-md border px-4 py-2 text-sm ${target === "all" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                  >
                    {d.targetAll}
                  </button>
                  <button
                    onClick={() => setTarget("range")}
                    className={`rounded-md border px-4 py-2 text-sm ${target === "range" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                  >
                    {d.targetRange}
                  </button>
                </div>
              </div>
              {target === "range" && (
                <input
                  type="text"
                  value={rangeInput}
                  onChange={(e) => setRangeInput(e.target.value)}
                  placeholder={d.rangePlaceholder}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={applyRotation}
                  disabled={isProcessing || (target === "range" && !rangeInput.trim())}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isProcessing ? d.processing : d.generateButton}
                </button>
                <button
                  onClick={() => document.getElementById("pdf-rotate-input")?.click()}
                  className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
                >
                  {d.changeFile}
                </button>
              </div>
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download="rotated.pdf"
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
