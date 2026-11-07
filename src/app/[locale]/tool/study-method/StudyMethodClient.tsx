"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






type ScoreResult = {
  scores: Record<string, number>;
  dominant: string;
  scoresDetail: Record<string, number>;
} | null;

export default function StudyMethod({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [answers, setAnswers] = useState<number[]>(new Array(5).fill(-1));
  const [result, setResult] = useState<ScoreResult>(null);

  const d = i18nData[locale];

  function handleCalculate() {
    const missing = answers.findIndex((a) => a === -1);
    if (missing !== -1) {
      alert(locale === "ko" ? "모든 문항에 답변하세요." : locale === "ja" ? "全ての項目に回答してください。" : "Please answer all questions.");
      return;
    }

    const typeCounts: Record<string, number> = {};
    answers.forEach((a, i) => {
      // Find the type for this answer
      const question = d.questions[i];
      const option = question.options.find((o) => o.score === a);
      if (option) {
        typeCounts[option.type] = (typeCounts[option.type] || 0) + 1;
      }
    });

    // Find dominant type (the one with highest score)
    let dominant = "read";
    let maxScore = 0;
    Object.entries(typeCounts).forEach(([type, count]) => {
      if (count > maxScore) {
        maxScore = count;
        dominant = type;
      }
    });

    setResult({ scores: typeCounts, dominant, scoresDetail: typeCounts });
  }

  function setAnswer(index: number, score: number) {
    const newAnswers = [...answers];
    newAnswers[index] = score;
    setAnswers(newAnswers);
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
            description: "Study method personality assessment with personalized recommendations",
            applicationCategory: "EducationalApplication",
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

      <div className="h-6" aria-hidden="true" />

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
          {(() => {
            const typeData = d.types?.[result.dominant] || d.types.read;
            const color = typeData.color;
            return (
              <Card className={`border-2 border-${color}-500 shadow-md`}>
                <CardContent className="space-y-6 p-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">주요 학습 스타일</p>
                    <p className={`text-2xl font-bold text-${color}-600 mt-2`}>{typeData.name}</p>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed">{typeData.desc}</p>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold">추천 공부법:</p>
                    <ul className="space-y-2">
                      {typeData.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 text-indigo-600">•</span>
                          <span className="text-base">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })()}
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
