"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument, PDFDict, PDFName, PDFHexString, PDFNumber, type PDFRef } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2, Plus, Trash2 } from "lucide-react";
import { data, type Locale } from "./data";

interface Bookmark {
  title: string;
  page: number;
}

export default function PdfBookmarkAdder({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([{ title: "", page: 1 }]);
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

  const updateBookmark = (idx: number, field: keyof Bookmark, value: string) => {
    setBookmarks((prev) =>
      prev.map((b, i) => (i === idx ? { ...b, [field]: field === "page" ? Number(value) || 1 : value } : b))
    );
  };

  const addBookmark = () => setBookmarks((prev) => [...prev, { title: "", page: 1 }]);
  const removeBookmark = (idx: number) => setBookmarks((prev) => prev.filter((_, i) => i !== idx));

  const applyBookmarks = async () => {
    if (!file || !pageCount) return;
    const validBookmarks = bookmarks.filter((b) => b.title.trim());
    if (validBookmarks.length === 0) return;

    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pages = doc.getPages();
      const context = doc.context;

      const outlineDict = context.obj({ Type: "Outlines" });
      const outlineRef = context.register(outlineDict);

      const itemRefs: PDFRef[] = validBookmarks.map(() => context.register(context.obj({})));

      validBookmarks.forEach((bm, i) => {
        const pageIdx = Math.min(Math.max(1, bm.page), pageCount) - 1;
        const page = pages[pageIdx];
        const dict = context.lookup(itemRefs[i], PDFDict);
        dict.set(PDFName.of("Title"), PDFHexString.fromText(bm.title));
        dict.set(PDFName.of("Parent"), outlineRef);
        dict.set(PDFName.of("Dest"), context.obj([page.ref, PDFName.of("Fit")]));
        if (i > 0) dict.set(PDFName.of("Prev"), itemRefs[i - 1]);
        if (i < itemRefs.length - 1) dict.set(PDFName.of("Next"), itemRefs[i + 1]);
      });

      outlineDict.set(PDFName.of("First"), itemRefs[0]);
      outlineDict.set(PDFName.of("Last"), itemRefs[itemRefs.length - 1]);
      outlineDict.set(PDFName.of("Count"), PDFNumber.of(itemRefs.length));
      doc.catalog.set(PDFName.of("Outlines"), outlineRef);

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
        id="pdf-bookmark-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-bookmark-input")?.click()}
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

              <label className="text-sm font-medium">{d.bookmarksLabel}</label>
              <div className="flex flex-col gap-2">
                {bookmarks.map((bm, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2">
                    <input
                      value={bm.title}
                      onChange={(e) => updateBookmark(idx, "title", e.target.value)}
                      placeholder={d.titlePlaceholder}
                      className="col-span-8 rounded-md border px-2 py-1 text-sm"
                    />
                    <input
                      type="number"
                      min={1}
                      max={pageCount ?? undefined}
                      value={bm.page}
                      onChange={(e) => updateBookmark(idx, "page", e.target.value)}
                      placeholder={d.pageLabel}
                      className="col-span-3 rounded-md border px-2 py-1 text-sm"
                    />
                    <button onClick={() => removeBookmark(idx)} className="col-span-1 flex items-center justify-center rounded-md border hover:bg-muted">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={addBookmark} className="inline-flex w-fit items-center gap-1 rounded-md border px-3 py-1 text-sm hover:bg-muted">
                <Plus className="h-3 w-3" />
                {d.addBookmark}
              </button>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={applyBookmarks}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isProcessing ? d.processing : d.generateButton}
                </button>
                <button
                  onClick={() => document.getElementById("pdf-bookmark-input")?.click()}
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
              download="bookmarked.pdf"
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
