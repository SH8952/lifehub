"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function WhitespaceRemover({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [trimLines, setTrimLines] = useState(true);
  const [collapseSpaces, setCollapseSpaces] = useState(true);
  const [removeEmptyLines, setRemoveEmptyLines] = useState(false);
  const [collapseEmptyLines, setCollapseEmptyLines] = useState(true);
  const [tabsToSpaces, setTabsToSpaces] = useState(false);
  const [removeAllBreaks, setRemoveAllBreaks] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    let text = input;
    if (tabsToSpaces) text = text.replace(/\t/g, "  ");
    if (collapseSpaces) text = text.replace(/[ \t]+/g, " ".repeat(tabsToSpaces ? 1 : 1)).replace(/ {2,}/g, " ");
    let lines = text.split("\n");
    if (trimLines) lines = lines.map((l) => l.trim());
    if (removeEmptyLines) lines = lines.filter((l) => l.trim() !== "");
    text = lines.join("\n");
    if (collapseEmptyLines && !removeEmptyLines) {
      text = text.replace(/\n{3,}/g, "\n\n");
    }
    if (removeAllBreaks) {
      text = text
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l !== "")
        .join(" ");
    }
    return text;
  }, [input, trimLines, collapseSpaces, removeEmptyLines, collapseEmptyLines, tabsToSpaces, removeAllBreaks]);

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const statsText = d.statsLabel.replace("{origLen}", String(input.length)).replace("{newLen}", String(result.length));

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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={trimLines} onChange={(e) => setTrimLines(e.target.checked)} />
              {d.trimLines}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={collapseSpaces} onChange={(e) => setCollapseSpaces(e.target.checked)} />
              {d.collapseSpaces}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={tabsToSpaces} onChange={(e) => setTabsToSpaces(e.target.checked)} />
              {d.tabsToSpaces}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={removeEmptyLines} onChange={(e) => setRemoveEmptyLines(e.target.checked)} />
              {d.removeEmptyLines}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={collapseEmptyLines} onChange={(e) => setCollapseEmptyLines(e.target.checked)} disabled={removeEmptyLines} />
              {d.collapseEmptyLines}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={removeAllBreaks} onChange={(e) => setRemoveAllBreaks(e.target.checked)} />
              {d.removeAllBreaks}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={d.placeholder}
                rows={14}
                className="w-full rounded-md border px-3 py-2 font-mono text-sm"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="block text-sm font-medium">{d.outputLabel}</label>
                <button onClick={copyResult} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
              <textarea readOnly value={result} rows={14} className="w-full rounded-md border bg-muted/30 px-3 py-2 font-mono text-sm" />
            </div>
          </div>

          {input.length > 0 && <p className="text-sm text-indigo-600">{statsText}</p>}
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
