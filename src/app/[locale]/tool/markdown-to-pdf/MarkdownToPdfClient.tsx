"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { marked } from "marked";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import { exportElementToPdf, basicSanitizeHtml, type PdfPageFormat } from "@/lib/pdfExport";
import { data, type Locale } from "./data";

export default function MarkdownToPdf({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [markdown, setMarkdown] = useState(d.placeholderText);
  const [pageFormat, setPageFormat] = useState<PdfPageFormat>("a4");
  const [isGenerating, setIsGenerating] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  const html = basicSanitizeHtml(marked.parse(markdown, { async: false }) as string);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setIsGenerating(true);
    try {
      await exportElementToPdf(previewRef.current, "document.pdf", { pageFormat, marginMm: 15 });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.editLabel}</p>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="h-96 w-full rounded-md border p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.previewLabel}</p>
            <div
              ref={previewRef}
              className="prose prose-sm h-96 max-w-none overflow-auto rounded-md border bg-white p-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="flex flex-wrap items-center gap-4 p-5">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.formatLabel}</label>
            <div className="flex gap-2">
              {(["a4", "letter"] as PdfPageFormat[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setPageFormat(f)}
                  className={`rounded-md border px-4 py-2 text-sm uppercase ${pageFormat === f ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {isGenerating ? d.generatingLabel : d.downloadButton}
          </button>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
