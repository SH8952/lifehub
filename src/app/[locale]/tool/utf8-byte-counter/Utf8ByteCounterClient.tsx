"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function Utf8ByteCounter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const charCount = text.length;
    const codePointCount = Array.from(text).length;
    const utf8Bytes = new TextEncoder().encode(text).length;
    let eucKrEstimate = 0;
    for (const ch of text) {
      const code = ch.codePointAt(0) ?? 0;
      eucKrEstimate += code > 0x7f ? 2 : 1;
    }
    return { charCount, codePointCount, utf8Bytes, eucKrEstimate };
  }, [text]);

  const STAT_ITEMS = [
    { label: d.charCount, value: stats.charCount },
    { label: d.codePointCount, value: stats.codePointCount },
    { label: d.byteCount, value: stats.utf8Bytes },
    { label: d.byteCountEucKr, value: stats.eucKrEstimate },
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
          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {STAT_ITEMS.map((item, i) => (
              <div key={i} className="rounded-lg bg-muted p-3 text-center">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-2xl font-bold">{item.value.toLocaleString()}</p>
              </div>
            ))}
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
