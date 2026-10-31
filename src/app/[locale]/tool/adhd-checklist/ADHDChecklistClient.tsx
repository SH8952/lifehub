"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






type ScoreResult = { score: number; level: { min: number; max: number; label: string; desc: string; color: string } } | null;

export default function ADHDChecklist({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [answers, setAnswers] = useState<number[]>(new Array(18).fill(-1));
  const [result, setResult] = useState<ScoreResult>(null);

  const d = i18nData[locale];

  function handleCalculate() {
    const missing = answers.findIndex((a) => a === -1);
    if (missing !== -1) {
      alert(locale === "ko" ? "모든 문항에 답변하세요." : locale === "ja" ? "全ての項目に回答してください。" : "Please answer all questions.");
      return;
    }

    const score = answers.reduce((sum, a) => sum + a, 0);
    const level = d.levels.find((l) => score >= l.min && score <= l.max) || d.levels[d.levels.length - 1];
    setResult({ score, level });
  }

  function setAnswer(index: number, score: number) {
    const newAnswers = [...answers];
    newAnswers[index] = score;
    setAnswers(newAnswers);
  }

  function getScoreColor(score: number): string {
    if (score <= 12) return "text-green-600";
    if (score <= 24) return "text-yellow-600";
    return "text-red-600";
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <p className="mt-4 text-base text-muted-foreground">{d.intro}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "ADHD self-assessment checklist with scoring",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      {/* Language selector */}
      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => { setLocale(l); setResult(null); setAnswers(new Array(18).fill(-1)); }}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="mt-8 space-y-4">
        {d.questions.map((q, i) => (
          <Card key={i} className="border shadow-sm">
            <CardContent className="p-4">
              <p className="mb-3 font-medium">
                <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                {q.q}
              </p>
              <div className="flex flex-wrap gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt.score}
                    type="button"
                    onClick={() => setAnswer(i, opt.score)}
                    className={`rounded-md border px-3 py-2 text-sm ${
                      answers[i] === opt.score
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                        : answers[i] === -1
                          ? "hover:bg-muted"
                          : "opacity-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calculate button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-md bg-indigo-600 px-4 py-3 text-lg font-medium text-white hover:bg-indigo-700"
        >
          {d.calculate}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">{d.result}</h2>
          <Card className={`border-2 border-${result.level.color}-500 shadow-md`}>
            <CardContent className="space-y-4 p-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">총점</p>
                <p className={`text-5xl font-bold ${getScoreColor(result.score)}`}>{result.score} / 54</p>
              </div>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${result.level.color}-600`}>{result.level.label}</p>
                <p className="mt-2 text-base leading-relaxed">{result.level.desc}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Why section */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
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
