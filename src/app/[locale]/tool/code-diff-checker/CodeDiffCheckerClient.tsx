"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type DiffLine = { type: "equal" | "added" | "removed"; text: string };

function computeDiff(a: string[], b: string[]): DiffLine[] {
  const n = a.length;
  const m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const result: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      result.push({ type: "equal", text: a[i] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: "removed", text: a[i] });
      i++;
    } else {
      result.push({ type: "added", text: b[j] });
      j++;
    }
  }
  while (i < n) {
    result.push({ type: "removed", text: a[i] });
    i++;
  }
  while (j < m) {
    result.push({ type: "added", text: b[j] });
    j++;
  }
  return result;
}

export default function CodeDiffChecker({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [original, setOriginal] = useState("function add(a, b) {\n  return a + b;\n}");
  const [modified, setModified] = useState("function add(a, b) {\n  return a + b + 1;\n}");
  const [diff, setDiff] = useState<DiffLine[] | null>(null);

  const compare = () => {
    setDiff(computeDiff(original.split("\n"), modified.split("\n")));
  };

  const lineClass = (type: DiffLine["type"]) => {
    if (type === "added") return "bg-green-50 text-green-800";
    if (type === "removed") return "bg-red-50 text-red-800";
    return "text-muted-foreground";
  };
  const prefix = (type: DiffLine["type"]) => (type === "added" ? "+ " : type === "removed" ? "- " : "  ");

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
            applicationCategory: "DeveloperApplication",
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

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.originalLabel}</label>
              <textarea value={original} onChange={(e) => setOriginal(e.target.value)} className="h-48 w-full resize-none rounded-md border p-3 font-mono text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.modifiedLabel}</label>
              <textarea value={modified} onChange={(e) => setModified(e.target.value)} className="h-48 w-full resize-none rounded-md border p-3 font-mono text-sm" />
            </div>
          </div>

          <button onClick={compare} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.compareBtn}
          </button>

          {diff && (
            <div>
              <div className="mb-2 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded bg-green-100" /> {d.legendAdded}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded bg-red-100" /> {d.legendRemoved}
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded bg-muted" /> {d.legendUnchanged}
                </span>
              </div>
              <p className="mb-1 text-sm font-medium">{d.resultLabel}</p>
              <pre className="max-h-96 overflow-auto rounded-md border p-3 font-mono text-sm">
                {diff.map((line, i) => (
                  <div key={i} className={lineClass(line.type)}>
                    {prefix(line.type)}
                    {line.text}
                  </div>
                ))}
              </pre>
            </div>
          )}
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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
