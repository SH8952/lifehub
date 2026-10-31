"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function slugify(input: string, separator: string, lowercase: boolean): string {
  let s = input.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  s = s.replace(/[^a-zA-Z0-9\s-_]/g, "");
  s = s.trim().replace(/[\s_-]+/g, separator);
  if (lowercase) s = s.toLowerCase();
  const escaped = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  s = s.replace(new RegExp(`^${escaped}+|${escaped}+$`, "g"), "");
  return s;
}

export default function SlugGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [input, setInput] = useState(d.placeholder);
  const [separator, setSeparator] = useState("-");
  const [lowercase, setLowercase] = useState(true);
  const [copied, setCopied] = useState(false);

  const slug = slugify(input, separator, lowercase);

  const copySlug = () => {
    navigator.clipboard.writeText(slug);
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
          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.separatorLabel}</label>
              <select className="w-full rounded-md border px-2 py-1.5 text-sm" value={separator} onChange={(e) => setSeparator(e.target.value)}>
                <option value="-">- (hyphen)</option>
                <option value="_">_ (underscore)</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
                {d.lowercaseLabel}
              </label>
            </div>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.resultLabel}</p>
              <button onClick={copySlug} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                {copied ? d.copied : d.copyBtn}
              </button>
            </div>
            <pre className="overflow-x-auto rounded-md bg-muted/30 p-3 font-mono text-sm">{slug}</pre>
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
