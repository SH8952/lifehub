"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

export default function CreditScoreChecklist({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [checked, setChecked] = useState<boolean[]>(() => new Array(d.items.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const reset = () => setChecked(new Array(d.items.length).fill(false));

  const checkedCount = checked.filter(Boolean).length;
  const progress = Math.round((checkedCount / d.items.length) * 100);

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
            applicationCategory: "FinanceApplication",
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
              setChecked(new Array(data[l].items.length).fill(false));
            }}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              {d.progressLabel}: {checkedCount} / {d.items.length} ({progress}%)
            </p>
            <button onClick={reset} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
              {d.resetBtn}
            </button>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-indigo-600 transition-all" style={{ width: `${progress}%` }} />
          </div>

          <div className="space-y-2">
            {d.items.map((item, i) => (
              <label key={i} className="flex cursor-pointer items-start gap-2 rounded-md border p-3 text-sm hover:bg-muted/30">
                <input type="checkbox" checked={checked[i] ?? false} onChange={() => toggle(i)} className="mt-0.5" />
                <span className={checked[i] ? "text-muted-foreground line-through" : ""}>{item}</span>
              </label>
            ))}
          </div>

          {checkedCount === d.items.length && <p className="rounded-md bg-green-50 p-3 text-sm font-medium text-green-700">{d.allCheckedMsg}</p>}
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
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
