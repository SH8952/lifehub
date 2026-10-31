"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dice5 } from "lucide-react";
import { data, type Locale } from "./data";

const DICE_FACES = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

export default function DiceRoller({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [diceCount, setDiceCount] = useState(2);
  const [results, setResults] = useState<number[] | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      const rolled = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
      setResults(rolled);
      setRolling(false);
    }, 300);
  };

  const total = results ? results.reduce((s, n) => s + n, 0) : 0;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
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
            applicationCategory: "EntertainmentApplication",
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
            <label className="mb-2 block text-sm font-medium">{d.diceCountLabel}</label>
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  onClick={() => setDiceCount(n)}
                  className={`rounded-md border py-2 text-sm font-bold ${diceCount === n ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={roll}
            disabled={rolling}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            <Dice5 className={`h-4 w-4 ${rolling ? "animate-spin" : ""}`} />
            {d.rollBtn}
          </button>

          {results && !rolling && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5">
              <p className="text-sm text-indigo-600">{d.resultLabel}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {results.map((r, i) => (
                  <span key={i} className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-indigo-300 bg-white text-4xl">
                    {DICE_FACES[r - 1]}
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-indigo-600">
                {d.totalLabel}: <span className="text-xl font-bold text-indigo-800">{total}</span>
              </p>
            </div>
          )}
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
