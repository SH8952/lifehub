"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const BASE_REGEX: Record<number, RegExp> = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^[0-9]+$/,
  16: /^[0-9a-fA-F]+$/,
};

export default function BaseConverter({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("255");
  const [inputBase, setInputBase] = useState(10);
  const [copied, setCopied] = useState<string | null>(null);

  const valid = input.length > 0 && BASE_REGEX[inputBase].test(input);
  const decimalValue = valid ? parseInt(input, inputBase) : NaN;

  const results = valid
    ? {
        2: decimalValue.toString(2),
        8: decimalValue.toString(8),
        10: decimalValue.toString(10),
        16: decimalValue.toString(16).toUpperCase(),
      }
    : null;

  const copyValue = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const rows: { key: string; label: string; base: number }[] = [
    { key: "binary", label: d.binaryLabel, base: 2 },
    { key: "octal", label: d.octalLabel, base: 8 },
    { key: "decimal", label: d.decimalLabel, base: 10 },
    { key: "hex", label: d.hexLabel, base: 16 },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-md border px-2 py-1.5 text-sm font-mono" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.inputBaseLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={inputBase} onChange={(e) => setInputBase(Number(e.target.value))}>
                <option value={2}>{d.binaryLabel}</option>
                <option value={8}>{d.octalLabel}</option>
                <option value={10}>{d.decimalLabel}</option>
                <option value={16}>{d.hexLabel}</option>
              </select>
            </div>
          </div>

          {!valid ? (
            <p className="text-sm text-red-600">{d.errorInvalid}</p>
          ) : (
            <div className="space-y-2">
              {rows.map((row) => (
                <div key={row.key} className="flex items-center justify-between rounded-md bg-muted/30 p-3">
                  <div>
                    <p className="text-xs text-muted-foreground">{row.label}</p>
                    <p className="font-mono font-medium">{results![row.base as 2 | 8 | 10 | 16]}</p>
                  </div>
                  <button onClick={() => copyValue(row.key, results![row.base as 2 | 8 | 10 | 16])} className="rounded-md border px-2 py-0.5 text-xs hover:bg-white">
                    {copied === row.key ? d.copied : d.copyBtn}
                  </button>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
