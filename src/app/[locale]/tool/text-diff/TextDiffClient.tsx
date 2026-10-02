"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type DiffRow = { type: "same" | "add" | "remove"; line: string };

const MAX_LINES = 3000;

function computeDiff(aLines: string[], bLines: string[]): DiffRow[] {
  const n = aLines.length;
  const m = bLines.length;
  if (n > MAX_LINES || m > MAX_LINES) {
    return [];
  }
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = aLines[i] === bLines[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const result: DiffRow[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (aLines[i] === bLines[j]) {
      result.push({ type: "same", line: aLines[i] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      result.push({ type: "remove", line: aLines[i] });
      i++;
    } else {
      result.push({ type: "add", line: bLines[j] });
      j++;
    }
  }
  while (i < n) {
    result.push({ type: "remove", line: aLines[i] });
    i++;
  }
  while (j < m) {
    result.push({ type: "add", line: bLines[j] });
    j++;
  }
  return result;
}

export default function TextDiff({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const rows = useMemo(() => {
    if (!textA && !textB) return [];
    return computeDiff(textA.split("\n"), textB.split("\n"));
  }, [textA, textB]);

  const hasChanges = rows.some((r) => r.type !== "same");

  const handleClear = () => {
    setTextA("");
    setTextB("");
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-3 flex justify-end">
        <button onClick={handleClear} className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted">
          {d.clearBtn}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.inputALabel}</p>
            <textarea
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              placeholder={d.placeholderA}
              spellCheck={false}
              className="h-64 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.inputBLabel}</p>
            <textarea
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              placeholder={d.placeholderB}
              spellCheck={false}
              className="h-64 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-muted-foreground">{d.resultLabel}</p>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-green-200" /> {d.addedLabel}
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded-sm bg-red-200" /> {d.removedLabel}
              </span>
            </div>
          </div>
          {!textA && !textB ? (
            <p className="py-12 text-center text-sm text-muted-foreground">{d.emptyMsg}</p>
          ) : !hasChanges ? (
            <p className="py-12 text-center text-sm text-muted-foreground">{d.noChangesMsg}</p>
          ) : (
            <div className="max-h-[32rem] overflow-y-auto rounded-md border font-mono text-sm">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap px-3 py-0.5 ${
                    row.type === "add" ? "bg-green-100" : row.type === "remove" ? "bg-red-100" : ""
                  }`}
                >
                  <span className="mr-2 select-none text-muted-foreground">{row.type === "add" ? "+" : row.type === "remove" ? "-" : " "}</span>
                  {row.line || " "}
                </div>
              ))}
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
