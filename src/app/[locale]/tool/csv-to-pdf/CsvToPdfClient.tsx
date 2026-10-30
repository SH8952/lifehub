"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud, Loader2, FileDown } from "lucide-react";
import { exportElementToPdf, type PdfPageFormat } from "@/lib/pdfExport";
import { data, type Locale } from "./data";

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim().length > 0));
}

export default function CsvToPdf({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [csvText, setCsvText] = useState("");
  const [tableTitle, setTableTitle] = useState("");
  const [pageFormat, setPageFormat] = useState<PdfPageFormat>("a4");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const rows = csvText.trim() ? parseCsv(csvText) : [];
  const header = rows[0] ?? [];
  const body = rows.slice(1);

  const handleFile = async (f: File) => {
    const text = await f.text();
    setCsvText(text);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const generatePdf = async () => {
    if (!previewRef.current || rows.length === 0) return;
    setIsProcessing(true);
    try {
      await exportElementToPdf(previewRef.current, "table.pdf", { pageFormat, marginMm: 12 });
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        id="csv-to-pdf-input"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />

      <div className="space-y-6">
        <div
          onClick={() => document.getElementById("csv-to-pdf-input")?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`flex min-h-[140px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 text-center transition-colors ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-muted-foreground/30 hover:bg-muted/50"}`}
        >
          <UploadCloud className="h-8 w-8 text-muted-foreground" />
          <p className="font-medium">{d.uploadLabel}</p>
          <p className="text-sm text-muted-foreground">{d.uploadHint}</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">{d.pasteLabel}</label>
          <textarea
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
            placeholder={d.pastePlaceholder}
            className="h-40 w-full resize-y rounded-md border p-3 font-mono text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">{d.titleFieldLabel}</label>
          <input
            type="text"
            value={tableTitle}
            onChange={(e) => setTableTitle(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

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

        <Card>
          <CardContent className="p-5">
            <label className="mb-2 block text-sm font-medium">{d.previewLabel}</label>
            <div ref={previewRef} className="overflow-x-auto bg-white p-4">
              {rows.length === 0 ? (
                <p className="text-sm text-muted-foreground">{d.noDataYet}</p>
              ) : (
                <>
                  {tableTitle && <h3 className="mb-3 text-lg font-bold">{tableTitle}</h3>}
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        {header.map((cell, i) => (
                          <th key={i} className="border bg-muted px-3 py-2 text-left font-semibold">
                            {cell}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {body.map((r, ri) => (
                        <tr key={ri}>
                          {r.map((cell, ci) => (
                            <td key={ci} className="border px-3 py-2">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <button
          onClick={generatePdf}
          disabled={isProcessing || rows.length === 0}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileDown className="h-4 w-4" />}
          {isProcessing ? d.processing : d.generateButton}
        </button>
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
