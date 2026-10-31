"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { marked } from "marked";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function MarkdownPreview({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [markdown, setMarkdown] = useState(d.placeholder);
  const html = marked.parse(markdown, { async: false }) as string;

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
          <button
            key={l}
            onClick={() => {
              setLocale(l);
              setMarkdown(data[l].placeholder);
            }}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="h-96 w-full resize-none rounded-md border p-3 font-mono text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.previewLabel}</label>
              <div
                className="prose prose-sm h-96 max-w-none overflow-y-auto rounded-md border bg-white p-3"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
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
