"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const ARROWS = ["→","←","↑","↓","↔","↕","⇒","⇐","⇑","⇓","⇔","➜","➔","➤","↗","↘","↙","↖","⟶","⤴"];
const MATH = ["±","×","÷","≠","≈","≤","≥","∞","√","∑","∏","∫","∂","∆","π","°","‰","%","⁰","²","³","∝","∴","∵"];
const CURRENCY = ["₩","$","€","£","¥","¢","₹","₽","₫","฿","₺","₱","₴","₦"];
const BRACKETS = ["「","」","『","』","【","】","〈","〉","《","》","‘","’","“","”","‹","›","«","»","§","¶","…","•","·"];
const STARS = ["★","☆","✦","✧","✩","✪","✫","✬","✭","✮","✯","❀","❁","✿","❋","❂","◆","◇","●","○","■","□","▲","▼"];
const LINES = ["─","━","│","┃","┌","┐","└","┘","├","┤","┬","┴","┼","═","║","╔","╗","╚","╝","╬","▪","▫","░","▒","▓"];

export default function SpecialCharactersList({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [copiedChar, setCopiedChar] = useState<string | null>(null);

  const copyChar = (ch: string) => {
    navigator.clipboard.writeText(ch);
    setCopiedChar(ch);
    setTimeout(() => setCopiedChar(null), 1000);
  };

  const CATEGORIES = [
    { label: d.catArrows, chars: ARROWS },
    { label: d.catMath, chars: MATH },
    { label: d.catCurrency, chars: CURRENCY },
    { label: d.catBrackets, chars: BRACKETS },
    { label: d.catStars, chars: STARS },
    { label: d.catLines, chars: LINES },
  ];

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {CATEGORIES.map((cat) => (
          <Card key={cat.label}>
            <CardContent className="p-5">
              <p className="mb-3 text-sm font-semibold">{cat.label}</p>
              <div className="grid grid-cols-8 gap-2 sm:grid-cols-12">
                {cat.chars.map((ch, i) => (
                  <button
                    key={i}
                    onClick={() => copyChar(ch)}
                    className="relative flex aspect-square items-center justify-center rounded-md border text-lg hover:bg-muted"
                  >
                    {ch}
                    {copiedChar === ch && (
                      <span className="absolute -top-6 whitespace-nowrap rounded bg-indigo-600 px-2 py-0.5 text-xs text-white">
                        {d.copied}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
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
