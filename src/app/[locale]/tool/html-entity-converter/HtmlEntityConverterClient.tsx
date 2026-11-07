"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function encodeEntities(input: string): string {
  let out = input;
  out = out.split("&").join("&amp;");
  out = out.split("<").join("&lt;");
  out = out.split(">").join("&gt;");
  out = out.split('"').join("&quot;");
  out = out.split("'").join("&#39;");
  return out;
}

function decodeEntities(input: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = input;
  return textarea.value;
}

export default function HtmlEntityConverter({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState(d.placeholderEncode);
  const [copied, setCopied] = useState(false);

  const output = mode === "encode" ? encodeEntities(input) : decodeEntities(input);

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const switchMode = (m: "encode" | "decode") => {
    setMode(m);
    setInput(m === "encode" ? d.placeholderEncode : d.placeholderDecode);
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
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex gap-2">
            <button
              onClick={() => switchMode("encode")}
              className={`rounded-md border px-3 py-1.5 text-sm ${mode === "encode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
            >
              {d.modeEncode}
            </button>
            <button
              onClick={() => switchMode("decode")}
              className={`rounded-md border px-3 py-1.5 text-sm ${mode === "decode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
            >
              {d.modeDecode}
            </button>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} className="h-32 w-full resize-none rounded-md border p-3 font-mono text-sm" />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.outputLabel}</p>
              <button onClick={copyOutput} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                {copied ? d.copied : d.copyBtn}
              </button>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-md bg-muted/30 p-3 font-mono text-sm">{output}</pre>
          </div>
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
