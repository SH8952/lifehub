"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import { exportElementToPdf, basicSanitizeHtml, type PdfPageFormat } from "@/lib/pdfExport";
import { data, type Locale } from "./data";

const DEFAULT_HTML = `<h1>제목을 입력하세요</h1>\n<p>여기에 본문 내용을 작성합니다.</p>\n<ul>\n  <li>목록 항목 1</li>\n  <li>목록 항목 2</li>\n</ul>`;

export default function HtmlToPdf({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [html, setHtml] = useState(DEFAULT_HTML);
  const [pageFormat, setPageFormat] = useState<PdfPageFormat>("a4");
  const [isGenerating, setIsGenerating] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);
  const safeHtml = basicSanitizeHtml(html);

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

      <p className="mb-4 text-xs text-amber-600">{d.trustWarning}</p>

      <Card>
        <CardContent className="flex flex-col gap-4 p-5">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.htmlLabel}</label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder={d.htmlPlaceholder}
              rows={10}
              className="w-full rounded-md border px-3 py-2 font-mono text-xs"
              spellCheck={false}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.pageFormatLabel}</label>
            <select
              value={pageFormat}
              onChange={(e) => setPageFormat(e.target.value as PdfPageFormat)}
              className="w-fit rounded-md border px-3 py-2 text-sm"
            >
              <option value="a4">A4</option>
              <option value="letter">Letter</option>
            </select>
          </div>

          <button
            onClick={handleDownload}
            disabled={isGenerating}
            className="flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {isGenerating ? d.generating : d.download}
          </button>
        </CardContent>
      </Card>

      <div className="mt-6">
        <p className="mb-2 text-sm font-medium">{d.previewLabel}</p>
        <div className="overflow-auto rounded-lg border bg-white p-2">
          <div
            ref={previewRef}
            style={{ width: "680px", padding: "16px", backgroundColor: "#ffffff", color: "#111111" }}
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
        </div>
      </div>

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
