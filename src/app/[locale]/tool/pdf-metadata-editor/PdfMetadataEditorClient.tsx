"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Download, Loader2 } from "lucide-react";
import { data, type Locale } from "./data";

export default function PdfMetadataEditor({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [keywords, setKeywords] = useState("");
  const [creator, setCreator] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf") return;
    setFile(f);
    setResultUrl("");
    const bytes = await f.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    setTitle(doc.getTitle() ?? "");
    setAuthor(doc.getAuthor() ?? "");
    setSubject(doc.getSubject() ?? "");
    setKeywords((doc.getKeywords() ?? "").toString());
    setCreator(doc.getCreator() ?? "");
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const applyChanges = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      doc.setTitle(title);
      doc.setAuthor(author);
      doc.setSubject(subject);
      doc.setKeywords(
        keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean)
      );
      doc.setCreator(creator);
      doc.setModificationDate(new Date());

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
        id="pdf-metadata-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      {!file ? (
        <div
          onClick={() => document.getElementById("pdf-metadata-input")?.click()}
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
              <p className="text-sm text-muted-foreground">{file.name}</p>

              <div>
                <label className="mb-1 block text-sm font-medium">{d.titleLabel}</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.authorLabel}</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.subjectLabel}</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.keywordsLabel}</label>
                <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.creatorLabel}</label>
                <input type="text" value={creator} onChange={(e) => setCreator(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={applyChanges}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {isProcessing ? d.processing : d.generateButton}
                </button>
                <button
                  onClick={() => document.getElementById("pdf-metadata-input")?.click()}
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
              download="metadata-updated.pdf"
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
