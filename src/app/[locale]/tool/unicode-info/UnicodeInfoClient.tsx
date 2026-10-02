"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const MAX_CHARS = 200;

interface CharInfo {
  char: string;
  codepointHex: string;
  decimal: number;
  utf8Hex: string;
  utf16Hex: string;
  entity: string;
}

function analyzeChar(char: string): CharInfo {
  const cp = char.codePointAt(0) || 0;
  const codepointHex = "U+" + cp.toString(16).toUpperCase().padStart(4, "0");
  const utf8Bytes = Array.from(new TextEncoder().encode(char))
    .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
    .join(" ");
  const codeUnits: number[] = [];
  for (let i = 0; i < char.length; i++) {
    codeUnits.push(char.charCodeAt(i));
  }
  const utf16Hex = codeUnits.map((u) => "0x" + u.toString(16).toUpperCase().padStart(4, "0")).join(" ");
  const entity = `&#${cp};`;
  return { char, codepointHex, decimal: cp, utf8Hex: utf8Bytes, utf16Hex, entity };
}

export default function UnicodeInfo({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");

  const chars = useMemo(() => Array.from(input).slice(0, MAX_CHARS), [input]);
  const isTooLong = Array.from(input).length > MAX_CHARS;
  const rows = useMemo(() => chars.map(analyzeChar), [chars]);

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
            className="h-24 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
          />
          {isTooLong && <p className="mt-2 text-xs text-amber-600">{d.tooLongMsg}</p>}
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-4">
          {rows.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">{d.emptyMsg}</p>
          ) : (
            <div className="max-h-[32rem] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-background">
                  <tr className="border-b text-left text-muted-foreground">
                    <th className="py-1 pr-2">{d.tableCharHeader}</th>
                    <th className="py-1 pr-2">{d.tableCodepointHeader}</th>
                    <th className="py-1 pr-2">{d.tableDecimalHeader}</th>
                    <th className="py-1 pr-2">{d.tableUtf8Header}</th>
                    <th className="py-1 pr-2">{d.tableUtf16Header}</th>
                    <th className="py-1">{d.tableEntityHeader}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/20"}>
                      <td className="py-1 pr-2 text-lg">{row.char}</td>
                      <td className="py-1 pr-2 font-mono">{row.codepointHex}</td>
                      <td className="py-1 pr-2 font-mono tabular-nums">{row.decimal}</td>
                      <td className="py-1 pr-2 font-mono">{row.utf8Hex}</td>
                      <td className="py-1 pr-2 font-mono">{row.utf16Hex}</td>
                      <td className="py-1 font-mono">{row.entity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
