"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import { exportElementToPdf, type PdfPageFormat } from "@/lib/pdfExport";
import { data, type Locale } from "./data";

const PAGE_WIDTH_MM: Record<PdfPageFormat, number> = { a4: 210, letter: 215.9 };
const MARGIN_MM = 15;
const MM_TO_PX = 96 / 25.4;

export default function TextToPdf({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [docTitle, setDocTitle] = useState("");
  const [content, setContent] = useState("");
  const [pageFormat, setPageFormat] = useState<PdfPageFormat>("a4");
  const [fontSize, setFontSize] = useState(14);
  const [isGenerating, setIsGenerating] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  const usableWidthPx = Math.round((PAGE_WIDTH_MM[pageFormat] - MARGIN_MM * 2) * MM_TO_PX);

  const handleDownload = async () => {
    if (!previewRef.current || !content.trim()) return;
    setIsGenerating(true);
    try {
      await exportElementToPdf(previewRef.current, `${docTitle || "document"}.pdf`, {
        pageFormat,
        marginMm: MARGIN_MM,
      });
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

      <Card>
        <CardContent className="flex flex-col gap-4 p-5">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.titleFieldLabel}</label>
            <input
              type="text"
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
              placeholder={d.titleFieldPlaceholder}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.contentLabel}</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={d.contentPlaceholder}
              rows={10}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.pageFormatLabel}</label>
              <select
                value={pageFormat}
                onChange={(e) => setPageFormat(e.target.value as PdfPageFormat)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="a4">A4</option>
                <option value="letter">Letter</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                {d.fontSizeLabel}: {fontSize}pt
              </label>
              <input type="range" min={10} max={24} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-full" />
            </div>
          </div>

          <button
            onClick={handleDownload}
            disabled={!content.trim() || isGenerating}
            className="flex w-fit items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {isGenerating ? d.generating : d.download}
          </button>
        </CardContent>
      </Card>

      {/* 실제 PDF로 캡처될 화면 밖 미리보기 영역 (html2canvas가 브라우저 폰트로 직접 렌더링) */}
      <div style={{ position: "fixed", top: 0, left: -99999, zIndex: -1 }}>
        <div
          ref={previewRef}
          style={{
            width: `${usableWidthPx}px`,
            padding: "8px",
            backgroundColor: "#ffffff",
            color: "#111111",
            fontFamily: "'Noto Sans KR', 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          {docTitle && (
            <h2 style={{ fontSize: `${fontSize * 1.6}px`, fontWeight: 700, marginBottom: "16px" }}>{docTitle}</h2>
          )}
          <div style={{ fontSize: `${fontSize}px`, lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {content}
          </div>
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
