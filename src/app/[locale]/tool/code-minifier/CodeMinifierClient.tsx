"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

type CodeType = "html" | "css" | "js";

function minifyCss(css: string) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

function minifyJs(js: string) {
  let out = js.replace(/\/\*[\s\S]*?\*\//g, "");
  out = out.replace(/(^|[^:])\/\/.*$/gm, "$1");
  out = out
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join(" ");
  out = out.replace(/[ \t]+/g, " ");
  return out.trim();
}

function minifyHtml(html: string) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/>\s+</g, "><")
    .replace(/\s+/g, " ")
    .trim();
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(2)} KB`;
}

export default function CodeMinifier({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [codeType, setCodeType] = useState<CodeType>("html");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const runMinify = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    const fn = codeType === "html" ? minifyHtml : codeType === "css" ? minifyCss : minifyJs;
    setOutput(fn(input));
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const originalBytes = new Blob([input]).size;
  const outputBytes = new Blob([output]).size;
  const reductionPct = originalBytes > 0 && output ? Math.max(0, Math.round((1 - outputBytes / originalBytes) * 100)) : 0;

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

      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm font-medium">{d.typeLabel}</label>
        <select
          value={codeType}
          onChange={(e) => setCodeType(e.target.value as CodeType)}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select>
        <button onClick={runMinify} className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
          {d.minifyBtn}
        </button>
        <button onClick={handleClear} className="rounded-md border px-4 py-1.5 text-sm font-medium hover:bg-muted">
          {d.clearBtn}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">
              {d.inputLabel} {input && <span className="font-normal">({d.originalSize}: {formatBytes(originalBytes)})</span>}
            </p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              className="h-80 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-muted-foreground">
                {d.outputLabel}{" "}
                {output && (
                  <span className="font-normal">
                    ({d.minifiedSize}: {formatBytes(outputBytes)}
                    {reductionPct > 0 && (
                      <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        -{reductionPct}% {d.reduction}
                      </span>
                    )}
                    )
                  </span>
                )}
              </p>
              {output && (
                <button onClick={handleCopy} className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted">
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? d.copiedMsg : d.copyBtn}
                </button>
              )}
            </div>
            <textarea
              readOnly
              value={output}
              placeholder={d.emptyMsg}
              spellCheck={false}
              className="h-80 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
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
