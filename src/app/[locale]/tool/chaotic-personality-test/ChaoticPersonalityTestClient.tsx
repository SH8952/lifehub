"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  CalendarCheck,
  Home,
  Handshake,
  CloudDrizzle,
  MapPin,
  Crown,
  PartyPopper,
  RotateCcw,
} from "lucide-react";
import { data, type Locale, type TypeKey } from "./data";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  CalendarCheck,
  Home,
  Handshake,
  CloudDrizzle,
  MapPin,
  Crown,
  PartyPopper,
};

const TYPE_ORDER: TypeKey[] = [
  "selfLove",
  "planner",
  "homebody",
  "respect",
  "moodBreaker",
  "hotspotHunter",
  "bravado",
  "socialCosplay",
];

export default function ChaoticPersonalityTestClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];
  const total = d.questions.length;

  const [mode, setMode] = useState<"intro" | "playing" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [tally, setTally] = useState<Record<TypeKey, number>>(() =>
    TYPE_ORDER.reduce((acc, k) => ({ ...acc, [k]: 0 }), {} as Record<TypeKey, number>)
  );

  const startTest = () => {
    setTally(TYPE_ORDER.reduce((acc, k) => ({ ...acc, [k]: 0 }), {} as Record<TypeKey, number>));
    setIndex(0);
    setMode("playing");
  };

  const pick = (typeKey: TypeKey) => {
    const next = { ...tally, [typeKey]: tally[typeKey] + 1 };
    setTally(next);
    if (index + 1 >= total) {
      setMode("result");
    } else {
      setIndex(index + 1);
    }
  };

  const resultKey: TypeKey = useMemo(() => {
    let best: TypeKey = TYPE_ORDER[0];
    let bestScore = -1;
    for (const k of TYPE_ORDER) {
      if (tally[k] > bestScore) {
        bestScore = tally[k];
        best = k;
      }
    }
    return best;
  }, [tally]);

  const restart = () => {
    setMode("intro");
    setIndex(0);
  };

  const progressPct = mode === "playing" ? ((index + 1) / total) * 100 : 0;
  const current = d.questions[index];
  const resultType = d.types[resultKey];
  const ResultIcon = ICONS[resultType.icon] ?? Sparkles;

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
            applicationCategory: "LifestyleApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => {
              setLocale(l);
              restart();
            }}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-6 p-6">
          {mode === "intro" && (
            <div className="space-y-4 text-center">
              <button
                onClick={startTest}
                className="rounded-md bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:bg-violet-700"
              >
                {d.startBtn}
              </button>
            </div>
          )}

          {mode === "playing" && current && (
            <div className="space-y-5">
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>
                    {d.questionProgress} {index + 1} / {total}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-violet-600 transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <p className="text-base font-semibold">{current.question}</p>

              <div className="grid gap-3">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => pick(opt.typeKey)}
                    className="rounded-lg border-2 border-violet-200 bg-violet-50 p-4 text-left text-sm font-medium transition hover:border-violet-500 hover:bg-violet-100"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {mode === "result" && (
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground">{d.resultTitle}</p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                  <ResultIcon className="h-8 w-8 text-violet-600" />
                </div>
                <p className="text-2xl font-bold text-violet-700">{resultType.name}</p>
                <p className="text-sm font-medium text-muted-foreground">{resultType.tagline}</p>
              </div>
              <p className="mx-auto max-w-md text-sm text-muted-foreground">{resultType.description}</p>
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-6 py-3 text-sm font-medium text-white hover:bg-violet-700"
              >
                <RotateCcw className="h-4 w-4" />
                {d.restartBtn}
              </button>
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
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
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

      <p className="mt-8 text-xs text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
