"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2, ArrowUp, ArrowDown, X } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import { data, type Locale } from "./data";

type Mode = "merge" | "split";

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

export default function PdfMergeSplit({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<Mode>("merge");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const resultUrlRef = useRef<string>("");

  // 병합 모드
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  const mergeInputRef = useRef<HTMLInputElement>(null);

  // 분할 모드
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [rangeInput, setRangeInput] = useState("");
  const splitInputRef = useRef<HTMLInputElement>(null);

  const addMergeFiles = (files: FileList | null) => {
    if (!files) return;
    const pdfs = Array.from(files).filter((f) => f.type === "application/pdf");
    setMergeFiles((prev) => [...prev, ...pdfs]);
    setResultUrl("");
  };

  const moveFile = (index: number, dir: -1 | 1) => {
    setMergeFiles((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const removeFile = (index: number) => {
    setMergeFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (mergeFiles.length < 2) return;
    setIsProcessing(true);
    try {
      const outDoc = await PDFDocument.create();
      for (const file of mergeFiles) {
        const bytes = await file.arrayBuffer();
        const srcDoc = await PDFDocument.load(bytes);
        const pages = await outDoc.copyPages(srcDoc, srcDoc.getPageIndices());
        pages.forEach((p) => outDoc.addPage(p));
      }
      const outBytes = await outDoc.save();
      const blob = new Blob([outBytes as unknown as BlobPart], { type: "application/pdf" });
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResultUrl(url);
    } catch (err) {
      console.error(err);
      setResultUrl("");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSplitFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setSplitFile(f);
    setResultUrl("");
    try {
      const bytes = await f.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      setPageCount(doc.getPageCount());
    } catch {
      setPageCount(null);
    }
  };

  const handleSplit = async () => {
    if (!splitFile || !pageCount) return;
    setIsProcessing(true);
    try {
      const indices = parsePageRange(rangeInput, pageCount);
      if (indices.length === 0) return;
      const bytes = await splitFile.arrayBuffer();
      const srcDoc = await PDFDocument.load(bytes);
      const outDoc = await PDFDocument.create();
      const pages = await outDoc.copyPages(srcDoc, indices);
      pages.forEach((p) => outDoc.addPage(p));
      const outBytes = await outDoc.save();
      const blob = new Blob([outBytes as unknown as BlobPart], { type: "application/pdf" });
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResultUrl(url);
    } catch (err) {
      console.error(err);
      setResultUrl("");
    } finally {
      setIsProcessing(false);
    }
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setResultUrl("");
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

      <div className="mb-6">
        <label className="mb-1 block text-sm font-medium">{d.modeLabel}</label>
        <div className="flex gap-2">
          <button onClick={() => switchMode("merge")} className={`rounded-md border px-4 py-2 text-sm ${mode === "merge" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
            {d.modeMerge}
          </button>
          <button onClick={() => switchMode("split")} className={`rounded-md border px-4 py-2 text-sm ${mode === "split" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
            {d.modeSplit}
          </button>
        </div>
      </div>

      {mode === "merge" ? (
        <div className="space-y-6">
          <input
            ref={mergeInputRef}
            type="file"
            accept="application/pdf"
            multiple
            className="hidden"
            onChange={(e) => addMergeFiles(e.target.files)}
          />

          {mergeFiles.length === 0 ? (
            <div
              onClick={() => mergeInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                addMergeFiles(e.dataTransfer.files);
              }}
              className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-muted-foreground/30 p-8 text-center hover:bg-muted/50"
            >
              <UploadCloud className="h-10 w-10 text-muted-foreground" />
              <p className="font-medium">{d.mergeUploadLabel}</p>
              <p className="text-sm text-muted-foreground">{d.mergeUploadHint}</p>
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col gap-3 p-5">
                <p className="text-sm font-medium">{d.fileListLabel}</p>
                {mergeFiles.map((f, i) => (
                  <div key={`${f.name}-${i}`} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                    <span className="flex-1 truncate">{i + 1}. {f.name}</span>
                    <button onClick={() => moveFile(i, -1)} disabled={i === 0} className="rounded p-1 hover:bg-muted disabled:opacity-30">
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button onClick={() => moveFile(i, 1)} disabled={i === mergeFiles.length - 1} className="rounded p-1 hover:bg-muted disabled:opacity-30">
                      <ArrowDown className="h-4 w-4" />
                    </button>
                    <button onClick={() => removeFile(i)} className="rounded p-1 hover:bg-muted">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <div className="mt-2 flex flex-wrap gap-2">
                  <button onClick={() => mergeInputRef.current?.click()} className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                    {d.addMore}
                  </button>
                  <button
                    onClick={handleMerge}
                    disabled={mergeFiles.length < 2 || isProcessing}
                    className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isProcessing ? d.processing : d.mergeButton}
                  </button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <input
            ref={splitInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleSplitFile(f);
            }}
          />

          {!splitFile ? (
            <div
              onClick={() => splitInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files?.[0];
                if (f) handleSplitFile(f);
              }}
              className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-muted-foreground/30 p-8 text-center hover:bg-muted/50"
            >
              <UploadCloud className="h-10 w-10 text-muted-foreground" />
              <p className="font-medium">{d.splitUploadLabel}</p>
              <p className="text-sm text-muted-foreground">{d.splitUploadHint}</p>
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col gap-4 p-5">
                <p className="text-sm text-muted-foreground">
                  {splitFile.name} — {d.pageCountLabel}: {pageCount ?? "?"}
                </p>
                <div>
                  <label className="mb-1 block text-sm font-medium">{d.rangeLabel}</label>
                  <input
                    type="text"
                    value={rangeInput}
                    onChange={(e) => setRangeInput(e.target.value)}
                    placeholder={d.rangePlaceholder}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">{d.rangeHint}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSplit}
                    disabled={!rangeInput.trim() || isProcessing}
                    className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isProcessing ? d.processing : d.splitButton}
                  </button>
                  <button onClick={() => splitInputRef.current?.click()} className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
                    {d.changeFile}
                  </button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {resultUrl && (
        <a
          href={resultUrl}
          download={mode === "merge" ? "merged.pdf" : "extracted.pdf"}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          <Download className="h-4 w-4" />
          {d.download}
        </a>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {(mode === "merge" ? d.howStepsMerge : d.howStepsSplit).map((step, i) => (
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
