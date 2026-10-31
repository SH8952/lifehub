"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

function splitWords(input: string): string[] {
  if (!input) return [];
  const spaced = input
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ")
    .trim();
  return spaced.split(/\s+/).filter(Boolean);
}

export default function CaseConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const results = useMemo(() => {
    const words = splitWords(input);
    const lowerWords = words.map((w) => w.toLowerCase());

    const upper = input.toUpperCase();
    const lower = input.toLowerCase();
    const title = lowerWords.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    const sentence = input.length > 0 ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() : "";
    const camel = lowerWords
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join("");
    const pascal = lowerWords.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    const snake = lowerWords.join("_");
    const kebab = lowerWords.join("-");

    return [
      { key: "upper", label: d.modeUpper, value: upper },
      { key: "lower", label: d.modeLower, value: lower },
      { key: "title", label: d.modeTitle, value: title },
      { key: "sentence", label: d.modeSentence, value: sentence },
      { key: "camel", label: d.modeCamel, value: camel },
      { key: "pascal", label: d.modePascal, value: pascal },
      { key: "snake", label: d.modeSnake, value: snake },
      { key: "kebab", label: d.modeKebab, value: kebab },
    ];
  }, [input, d]);

  const handleClear = () => setInput("");

  const handleCopy = async (key: string, value: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1500);
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
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
            className="h-28 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
          />
        </CardContent>
      </Card>

      {!input ? (
        <p className="py-12 text-center text-sm text-muted-foreground">{d.emptyMsg}</p>
      ) : (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {results.map((r) => (
            <Card key={r.key}>
              <CardContent className="p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{r.label}</span>
                  <button onClick={() => handleCopy(r.key, r.value)} className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted">
                    {copiedKey === r.key ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copiedKey === r.key ? d.copiedMsg : d.copyBtn}
                  </button>
                </div>
                <p className="break-all rounded-md bg-muted/30 p-2 font-mono text-sm">{r.value || " "}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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
