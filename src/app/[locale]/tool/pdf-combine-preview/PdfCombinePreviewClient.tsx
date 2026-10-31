"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2, ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import { data, type Locale } from "./data";

interface FileEntry {
  file: File;
  pageCount: number;
  thumbnailUrl: string;
}

export default function PdfCombinePreview({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [entries, setEntries] = useState<FileEntry[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const addFiles = async (files: FileList | File[]) => {
    const pdfFiles = Array.from(files).filter((f) => f.type === "application/pdf");
    if (pdfFiles.length === 0) return;

    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();

    const newEntries: FileEntry[] = [];
    for (const file of pdfFiles) {
      const bytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.5 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        await page.render({ canvas, canvasContext: ctx, viewport }).promise;
      }
      newEntries.push({
        file,
        pageCount: pdf.numPages,
        thumbnailUrl: ctx ? canvas.toDataURL("image/png") : "",
      });
    }
    setEntries((prev) => [...prev, ...newEntries]);
    setResultUrl("");
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    setEntries((prev) => {
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next;
    });
  };

  const moveDown = (idx: number) => {
    setEntries((prev) => {
      if (idx === prev.length - 1) return prev;
      const next = [...prev];
      [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
      return next;
    });
  };

  const removeFile = (idx: number) => setEntries((prev) => prev.filter((_, i) => i !== idx));

  const totalPages = entries.reduce((sum, e) => sum + e.pageCount, 0);

  const combine = async () => {
    if (entries.length < 2) return;
    setIsProcessing(true);
    try {
      const outDoc = await PDFDocument.create();
      for (const entry of entries) {
        const bytes = await entry.file.arrayBuffer();
        const srcDoc = await PDFDocument.load(bytes);
        const copiedPages = await outDoc.copyPages(srcDoc, srcDoc.getPageIndices());
        copiedPages.forEach((p) => outDoc.addPage(p));
      }
      const outBytes = await outDoc.save();
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
        multiple
        className="hidden"
        id="pdf-combine-input"
        onChange={(e) => {
          if (e.target.files?.length) addFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {entries.length === 0 ? (
        <div
          onClick={() => document.getElementById("pdf-combine-input")?.click()}
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
            <CardContent className="flex flex-col gap-3 p-5">
              <label className="text-sm font-medium">{d.fileListLabel}</label>
              {entries.map((entry, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-md border p-2">
                  {entry.thumbnailUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={entry.thumbnailUrl} alt="" className="h-16 w-auto rounded border object-contain" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{entry.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {entry.pageCount} {d.pagesLabel}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => moveUp(idx)} disabled={idx === 0} className="rounded-md border p-1 hover:bg-muted disabled:opacity-30">
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button onClick={() => moveDown(idx)} disabled={idx === entries.length - 1} className="rounded-md border p-1 hover:bg-muted disabled:opacity-30">
                      <ArrowDown className="h-4 w-4" />
                    </button>
                    <button onClick={() => removeFile(idx)} className="rounded-md border p-1 hover:bg-muted">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => document.getElementById("pdf-combine-input")?.click()}
                className="inline-flex w-fit items-center gap-1 rounded-md border px-3 py-1 text-sm hover:bg-muted"
              >
                {d.addMore}
              </button>
              <p className="text-sm text-muted-foreground">
                {d.totalPagesLabel}: {totalPages}
              </p>
              {entries.length < 2 && <p className="text-sm text-amber-600">{d.needTwoFiles}</p>}
              <button
                onClick={combine}
                disabled={isProcessing || entries.length < 2}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isProcessing ? d.processing : d.generateButton}
              </button>
            </CardContent>
          </Card>

          {resultUrl && (
            <a
              href={resultUrl}
              download="combined.pdf"
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
