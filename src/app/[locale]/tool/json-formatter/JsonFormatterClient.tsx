"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

type Indent = "2" | "4" | "tab";

export default function JsonFormatter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState<Indent>("2");
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const indentValue = indent === "tab" ? "\t" : indent === "4" ? 4 : 2;

  const runFormat = (mode: "pretty" | "minify") => {
    if (!input.trim()) {
      setStatus("idle");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const result = mode === "pretty" ? JSON.stringify(parsed, null, indentValue) : JSON.stringify(parsed);
      setOutput(result);
      setStatus("valid");
      setErrorMsg("");
    } catch (e) {
      setStatus("invalid");
      setOutput("");
      setErrorMsg(e instanceof Error ? e.message : String(e));
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setStatus("idle");
    setErrorMsg("");
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
        <label className="text-sm font-medium">{d.indentLabel}</label>
        <select
          value={indent}
          onChange={(e) => setIndent(e.target.value as Indent)}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          <option value="2">{d.indent2}</option>
          <option value="4">{d.indent4}</option>
          <option value="tab">{d.indentTab}</option>
        </select>
        <button onClick={() => runFormat("pretty")} className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">
          {d.formatBtn}
        </button>
        <button onClick={() => runFormat("minify")} className="rounded-md border px-4 py-1.5 text-sm font-medium hover:bg-muted">
          {d.minifyBtn}
        </button>
        <button onClick={handleClear} className="rounded-md border px-4 py-1.5 text-sm font-medium hover:bg-muted">
          {d.clearBtn}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.inputLabel}</p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={d.inputPlaceholder}
              spellCheck={false}
              className="h-80 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-muted-foreground">{d.outputLabel}</p>
              {output && (
                <button onClick={handleCopy} className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted">
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? d.copiedMsg : d.copyBtn}
                </button>
              )}
            </div>
            {status === "valid" && <p className="mb-2 text-sm font-medium text-green-600">{d.validMsg}</p>}
            {status === "invalid" && <p className="mb-2 text-sm font-medium text-red-600">{d.invalidMsg}: {errorMsg}</p>}
            <textarea
              readOnly
              value={status === "idle" ? "" : output}
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
