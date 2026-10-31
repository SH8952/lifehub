"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Mode = "number" | "string";

export default function RandomNumberGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<Mode>("number");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(5);
  const [unique, setUnique] = useState(true);
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError("");
    if (mode === "number") {
      if (min >= max) {
        setError(d.errorRange);
        return;
      }
      const rangeSize = max - min + 1;
      if (unique && count > rangeSize) {
        setError(d.errorUniqueRange);
        return;
      }
      if (unique) {
        const pool = Array.from({ length: rangeSize }, (_, i) => min + i);
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        setResults(pool.slice(0, count).map(String));
      } else {
        setResults(Array.from({ length: count }, () => String(Math.floor(Math.random() * rangeSize) + min)));
      }
    } else {
      let chars = "";
      if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
      if (useDigits) chars += "0123456789";
      if (useSymbols) chars += "!@#$%^&*()-_=+";
      if (!chars) {
        setError(d.errorNoCharset);
        return;
      }
      const out: string[] = [];
      for (let i = 0; i < count; i++) {
        let s = "";
        for (let j = 0; j < length; j++) {
          s += chars[Math.floor(Math.random() * chars.length)];
        }
        out.push(s);
      }
      setResults(out);
    }
  };

  const copyAll = () => {
    navigator.clipboard.writeText(results.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
            applicationCategory: "UtilityApplication",
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
        <CardContent className="space-y-5 p-6">
          <div className="flex gap-2">
            <button onClick={() => setMode("number")} className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium ${mode === "number" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
              {d.modeNumber}
            </button>
            <button onClick={() => setMode("string")} className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium ${mode === "string" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
              {d.modeString}
            </button>
          </div>

          {mode === "number" ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-medium">{d.minLabel}</label>
                <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.maxLabel}</label>
                <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{d.countLabel}</label>
                <input type="number" min={1} max={1000} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>
              <label className="col-span-2 flex items-center gap-2 text-sm sm:col-span-3">
                <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} />
                {d.uniqueLabel}
              </label>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium">{d.lengthLabel}</label>
                  <input type="number" min={1} max={256} value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">{d.countLabel}</label>
                  <input type="number" min={1} max={1000} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full rounded-md border px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">{d.charsetLabel}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
                    {d.charsetUpper}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} />
                    {d.charsetLower}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={useDigits} onChange={(e) => setUseDigits(e.target.checked)} />
                    {d.charsetDigits}
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
                    {d.charsetSymbols}
                  </label>
                </div>
              </div>
            </div>
          )}

          <button onClick={generate} className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            {d.generateBtn}
          </button>

          {error && <p className="text-sm text-red-600">{error}</p>}

          {results.length > 0 && (
            <div>
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-medium">{d.resultLabel}</p>
                <button onClick={copyAll} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
              <div className="flex flex-wrap gap-2 rounded-md bg-muted/30 p-3">
                {results.map((r, i) => (
                  <span key={i} className="rounded-md border bg-white px-2 py-1 font-mono text-sm">
                    {r}
                  </span>
                ))}
              </div>
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
