"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

interface PdfInfo {
  fileName: string;
  fileSize: number;
  pageCount: number;
  firstPageWidthPt: number;
  firstPageHeightPt: number;
  title: string;
  author: string;
  producer: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function ptToMm(pt: number): number {
  return Math.round(pt * 0.3527 * 10) / 10;
}

export default function PdfPageCount({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [info, setInfo] = useState<PdfInfo | null>(null);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    const bytes = await f.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    const firstPage = doc.getPageCount() > 0 ? doc.getPage(0) : null;
    const size = firstPage ? firstPage.getSize() : { width: 0, height: 0 };
    setInfo({
      fileName: f.name,
      fileSize: f.size,
      pageCount: doc.getPageCount(),
      firstPageWidthPt: size.width,
      firstPageHeightPt: size.height,
      title: doc.getTitle() ?? "",
      author: doc.getAuthor() ?? "",
      producer: doc.getProducer() ?? "",
    });
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const copyInfo = async () => {
    if (!info) return;
    const text = [
      `${d.fileNameLabel}: ${info.fileName}`,
      `${d.fileSizeLabel}: ${formatBytes(info.fileSize)}`,
      `${d.pageCountLabel}: ${info.pageCount}`,
      `${d.avgSizeLabel}: ${formatBytes(Math.round(info.fileSize / Math.max(1, info.pageCount)))}`,
      `${d.firstPageSizeLabel}: ${Math.round(info.firstPageWidthPt)} x ${Math.round(info.firstPageHeightPt)} pt (${ptToMm(info.firstPageWidthPt)} x ${ptToMm(info.firstPageHeightPt)} mm)`,
      `${d.titleLabel}: ${info.title || d.notSet}`,
      `${d.authorLabel}: ${info.author || d.notSet}`,
      `${d.producerLabel}: ${info.producer || d.notSet}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
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
        id="pdf-page-count-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!info ? (
        <div
          onClick={() => document.getElementById("pdf-page-count-input")?.click()}
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
            <CardContent className="flex flex-col gap-3 p-5 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{info.fileName}</p>
                <button
                  onClick={() => document.getElementById("pdf-page-count-input")?.click()}
                  className="rounded-md border px-3 py-1 text-xs hover:bg-muted"
                >
                  {d.changeFile}
                </button>
              </div>
              <dl className="grid grid-cols-2 gap-2">
                <dt className="text-muted-foreground">{d.fileSizeLabel}</dt>
                <dd>{formatBytes(info.fileSize)}</dd>
                <dt className="text-muted-foreground">{d.pageCountLabel}</dt>
                <dd>{info.pageCount}</dd>
                <dt className="text-muted-foreground">{d.avgSizeLabel}</dt>
                <dd>{formatBytes(Math.round(info.fileSize / Math.max(1, info.pageCount)))}</dd>
                <dt className="text-muted-foreground">{d.firstPageSizeLabel}</dt>
                <dd>
                  {Math.round(info.firstPageWidthPt)} x {Math.round(info.firstPageHeightPt)} pt (
                  {ptToMm(info.firstPageWidthPt)} x {ptToMm(info.firstPageHeightPt)} mm)
                </dd>
                <dt className="text-muted-foreground">{d.titleLabel}</dt>
                <dd>{info.title || d.notSet}</dd>
                <dt className="text-muted-foreground">{d.authorLabel}</dt>
                <dd>{info.author || d.notSet}</dd>
                <dt className="text-muted-foreground">{d.producerLabel}</dt>
                <dd>{info.producer || d.notSet}</dd>
              </dl>
              <button
                onClick={copyInfo}
                className="inline-flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? d.copied : d.copyButton}
              </button>
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
