"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function TextStats({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");

  const stats = useMemo(() => {
    const chars = input.length;
    const charsNoSpace = input.replace(/\s/g, "").length;
    const trimmed = input.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const lines = input === "" ? 0 : input.split("\n").length;
    const sentenceMatches = input.match(/[^.!?]+[.!?]+/g);
    const sentences = sentenceMatches ? sentenceMatches.length : trimmed ? 1 : 0;
    const bytes = new TextEncoder().encode(input).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    return { chars, charsNoSpace, words, lines, sentences, bytes, readingTime: words === 0 ? 0 : readingTime };
  }, [input]);

  const handleClear = () => setInput("");

  const statRows: { label: string; value: string }[] = [
    { label: d.statsCharsLabel, value: stats.chars.toLocaleString() },
    { label: d.statsCharsNoSpaceLabel, value: stats.charsNoSpace.toLocaleString() },
    { label: d.statsWordsLabel, value: stats.words.toLocaleString() },
    { label: d.statsLinesLabel, value: stats.lines.toLocaleString() },
    { label: d.statsSentencesLabel, value: stats.sentences.toLocaleString() },
    { label: d.statsBytesLabel, value: stats.bytes.toLocaleString() },
    { label: d.statsReadingTimeLabel, value: `${stats.readingTime} ${d.readingTimeUnit}` },
  ];

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

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
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
          <CardContent className="space-y-3 p-4">
            {statRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <span className="text-lg font-semibold tabular-nums">{row.value}</span>
              </div>
            ))}
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
