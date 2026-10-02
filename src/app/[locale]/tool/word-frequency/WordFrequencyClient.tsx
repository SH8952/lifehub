"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function WordFrequency({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [minLength, setMinLength] = useState(1);

  const { rows, totalWords, uniqueWords } = useMemo(() => {
    const matches = input.match(/[\p{L}\p{N}]+/gu) || [];
    const words = matches
      .map((w) => (caseSensitive ? w : w.toLowerCase()))
      .filter((w) => w.length >= minLength);
    const counts = new Map<string, number>();
    for (const w of words) {
      counts.set(w, (counts.get(w) || 0) + 1);
    }
    const total = words.length;
    const sorted = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([word, count]) => ({
        word,
        count,
        percent: total > 0 ? ((count / total) * 100).toFixed(1) : "0.0",
      }));
    return { rows: sorted, totalWords: total, uniqueWords: counts.size };
  }, [input, caseSensitive, minLength]);

  const handleClear = () => setInput("");

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          {d.caseSensitiveLabel}
        </label>
        <label className="flex items-center gap-2 text-sm">
          {d.minLengthLabel}
          <input
            type="number"
            min={1}
            max={20}
            value={minLength}
            onChange={(e) => setMinLength(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
            className="w-16 rounded-md border px-2 py-1 text-sm"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-muted-foreground">{d.inputLabel}</p>
              <button onClick={handleClear} className="rounded-md border px-2 py-1 text-xs hover:bg-muted">
                {d.clearBtn}
              </button>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={d.inputPlaceholder}
              spellCheck={false}
              className="h-96 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {d.totalWordsLabel}: {totalWords.toLocaleString()} · {d.uniqueWordsLabel}: {uniqueWords.toLocaleString()}
              </span>
              <span>{d.topLabel}</span>
            </div>
            {rows.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted-foreground">{d.emptyMsg}</p>
            ) : (
              <div className="h-96 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-background">
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="py-1 pr-2">{d.resultWordHeader}</th>
                      <th className="py-1 pr-2 text-right">{d.resultCountHeader}</th>
                      <th className="py-1 text-right">{d.resultPercentHeader}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={row.word} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                        <td className="py-1 pr-2 font-mono">{row.word}</td>
                        <td className="py-1 pr-2 text-right tabular-nums">{row.count}</td>
                        <td className="py-1 text-right tabular-nums">{row.percent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
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
