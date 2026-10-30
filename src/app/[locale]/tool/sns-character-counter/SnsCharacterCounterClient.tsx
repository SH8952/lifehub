"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const PLATFORMS = [
  { name: "X (Twitter)", limit: 280 },
  { name: "Instagram Caption", limit: 2200 },
  { name: "Facebook Post", limit: 63206 },
  { name: "Threads", limit: 500 },
  { name: "YouTube Description", limit: 5000 },
  { name: "카카오톡 상태메시지", limit: 60 },
  { name: "LinkedIn Post", limit: 3000 },
  { name: "TikTok Caption", limit: 2200 },
];

export default function SnsCharacterCounter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [text, setText] = useState("");
  const total = text.length;

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
            applicationCategory: "UtilityApplication",
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

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={d.placeholder}
              rows={6}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <p className="mt-1 text-sm text-muted-foreground">
              {d.totalChars}: <span className="font-semibold">{total.toLocaleString()}</span>
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {PLATFORMS.map((p) => {
              const over = total > p.limit;
              const remaining = p.limit - total;
              const pct = Math.min(100, Math.round((total / p.limit) * 100));
              return (
                <div key={p.name} className={`rounded-lg border p-3 ${over ? "border-red-300 bg-red-50" : "border-muted"}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{p.name}</span>
                    <span className={over ? "font-semibold text-red-600" : "text-muted-foreground"}>
                      {total.toLocaleString()} / {p.limit.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full ${over ? "bg-red-500" : "bg-indigo-500"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className={`mt-1 text-xs ${over ? "text-red-600" : "text-muted-foreground"}`}>
                    {over
                      ? `${Math.abs(remaining).toLocaleString()} ${d.overLimit}`
                      : `${remaining.toLocaleString()} ${d.remaining}`}
                  </p>
                </div>
              );
            })}
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
