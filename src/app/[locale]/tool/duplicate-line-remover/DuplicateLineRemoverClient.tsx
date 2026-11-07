"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function DuplicateLineRemover({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimWs, setTrimWs] = useState(true);
  const [sortResult, setSortResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const { result, total, unique } = useMemo(() => {
    const lines = input.split("\n");
    const seen = new Set<string>();
    const out: string[] = [];
    for (const raw of lines) {
      let line = raw;
      if (trimWs) line = line.trim();
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(line);
      }
    }
    const finalLines = sortResult ? [...out].sort((a, b) => a.localeCompare(b)) : out;
    return { result: finalLines.join("\n"), total: lines.length, unique: finalLines.length };
  }, [input, caseSensitive, trimWs, sortResult]);

  const dup = total - unique;

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const statsText = d.statsLabel
    .replace("{total}", String(total))
    .replace("{unique}", String(unique))
    .replace("{dup}", String(dup));

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
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
              {d.caseSensitive}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={trimWs} onChange={(e) => setTrimWs(e.target.checked)} />
              {d.trimWhitespace}
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={sortResult} onChange={(e) => setSortResult(e.target.checked)} />
              {d.sortResult}
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

          {total > 0 && <p className="text-sm text-indigo-600">{statsText}</p>}
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
