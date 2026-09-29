"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { data, type Locale } from "./data";

type Mode = "encode" | "decode";
type Scope = "component" | "full";

export default function UrlEncoder({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<Mode>("encode");
  const [scope, setScope] = useState<Scope>("component");
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: false };
    try {
      let result: string;
      if (mode === "encode") {
        result = scope === "component" ? encodeURIComponent(input) : encodeURI(input);
      } else {
        result = scope === "component" ? decodeURIComponent(input) : decodeURI(input);
      }
      return { output: result, error: false };
    } catch {
      return { output: "", error: true };
    }
  }, [input, mode, scope]);

  const handleClear = () => setInput("");

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setMode("encode")}
          className={`rounded-md border px-4 py-1.5 text-sm font-medium ${mode === "encode" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
        >
          {d.encodeMode}
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`rounded-md border px-4 py-1.5 text-sm font-medium ${mode === "decode" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
        >
          {d.decodeMode}
        </button>
        <button onClick={handleClear} className="rounded-md border px-4 py-1.5 text-sm font-medium hover:bg-muted">
          {d.clearBtn}
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="radio" name="scope" checked={scope === "component"} onChange={() => setScope("component")} />
          {d.modeComponent}
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="scope" checked={scope === "full"} onChange={() => setScope("full")} />
          {d.modeFull}
        </label>
      </div>

      <Card className="mt-4">
        <CardContent className="p-4">
          <p className="mb-2 text-sm font-semibold text-muted-foreground">{d.inputLabel}</p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            className="h-40 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card className="mt-4">
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
          {error && <p className="mb-2 text-sm font-medium text-red-600">{d.invalidMsg}</p>}
          <textarea
            readOnly
            value={error ? "" : output}
            placeholder={d.emptyMsg}
            spellCheck={false}
            className="h-40 w-full resize-none rounded-md border bg-muted/30 p-3 font-mono text-sm"
          />
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
