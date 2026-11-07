"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument, PageSizes } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

type SizeOption = "match" | "a4" | "letter";

export default function PdfBlankPageInsert({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [afterPage, setAfterPage] = useState(0);
  const [blankCount, setBlankCount] = useState(1);
  const [sizeOption, setSizeOption] = useState<SizeOption>("match");
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
    setAfterPage(doc.getPageCount());
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const applyInsert = async () => {
    if (!file || pageCount === null) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const insertIdx = Math.min(Math.max(0, afterPage), doc.getPageCount());

      let size: [number, number] = PageSizes.A4;
      if (sizeOption === "letter") size = PageSizes.Letter;
      if (sizeOption === "match" && doc.getPageCount() > 0) {
        const ref = doc.getPage(Math.max(0, insertIdx - 1 >= 0 ? insertIdx - 1 : 0));
        const { width, height } = ref.getSize();
        size = [width, height];
      }

      for (let i = 0; i < blankCount; i++) {
        doc.insertPage(insertIdx + i, size);
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

      <div className="h-6" aria-hidden="true" />

      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        id="pdf-blank-insert-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-blank-insert-input")?.click()}
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
                <label className="mb-1 block text-sm font-medium">{d.positionLabel}</label>
                <input
                  type="number"
                  min={0}
                  max={pageCount ?? undefined}
                  value={afterPage}
                  onChange={(e) => setAfterPage(Math.min(Math.max(0, Number(e.target.value) || 0), pageCount ?? 0))}
                  className="w-32 rounded-md border px-3 py-2 text-sm"
                />
                <p className="mt-1 text-xs text-muted-foreground">{d.positionHint}</p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.countLabel}</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={blankCount}
                  onChange={(e) => setBlankCount(Math.min(Math.max(1, Number(e.target.value) || 1), 20))}
                  className="w-32 rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.sizeLabel}</label>
                <div className="flex gap-2">
                  {([
                    ["match", d.sizeMatch],
                    ["a4", "A4"],
                    ["letter", "Letter"],
                  ] as [SizeOption, string][]).map(([s, label]) => (
                    <button
                      key={s}
                      onClick={() => setSizeOption(s)}
                      className={`rounded-md border px-4 py-2 text-sm ${sizeOption === s ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={applyInsert}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isProcessing ? d.processing : d.generateButton}
                </button>
                <button
                  onClick={() => document.getElementById("pdf-blank-insert-input")?.click()}
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
              download="blank-inserted.pdf"
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
