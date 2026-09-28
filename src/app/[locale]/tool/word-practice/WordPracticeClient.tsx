"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check, X, HelpCircle, RotateCcw } from "lucide-react";
import { data, type Locale, type WordItem, type i18nData } from "./data";

type Difficulty = "all" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
type ViewMode = "learn" | "quiz";







function WordCard({ word, locale, d }: { word: WordItem; locale: Locale; d: i18nData }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const getWord = (field: "Korean" | "English" | "Japanese" | "Spanish") => word[field];

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">{word.difficulty}</span>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">{word.category}</span>
      </div>
      <div className="min-h-[200px] rounded-lg bg-muted/50 p-6 text-center">
        <p className="mb-2 text-3xl font-bold">
          {locale === "ko" ? word.Korean : locale === "en" ? word.English : locale === "ja" ? word.Japanese : word.Spanish}
        </p>
        {showAnswer && (
          <div className="mt-4 text-left">
            <p className="mb-2 text-sm text-muted-foreground">
              {locale === "ko" ? `🇰🇷 ${word.Korean} | 🇯🇵 ${word.Japanese}` : locale === "en" ? `🇺🇸 ${word.English} | 🇯🇵 ${word.Japanese}` : locale === "ja" ? `🇯🇵 ${word.Japanese} | 🇺🇸 ${word.English}` : `🇪🇸 ${word.Spanish} | 🇺🇸 ${word.English}`}
            </p>
            <p className="text-sm text-muted-foreground italic">
              "{locale === "ko" ? word.exampleKo : word.exampleEn}"
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center gap-1 rounded-md border px-4 py-2 text-sm hover:bg-muted"
        >
          <HelpCircle className="h-4 w-4" />
          {showAnswer ? d.back : d.showAnswer}
        </button>
      </div>
    </div>
  );
}

function Quiz({ word, locale, d }: { word: WordItem; locale: Locale; d: i18nData }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getWord = (field: "Korean" | "English" | "Japanese" | "Spanish") => word[field];

  const correctTranslation = locale === "ko" ? word.Korean : locale === "en" ? word.English : locale === "ja" ? word.Japanese : word.Spanish;

  const generateOptions = () => {
    const allWords = data.en.words.filter((w) => w.Korean !== word.Korean);
    const wrongAnswers = allWords.slice(0, 3).map((w) => (locale === "ko" ? w.Korean : locale === "en" ? w.English : locale === "ja" ? w.Japanese : w.Spanish));
    const options = [...new Set([...wrongAnswers, correctTranslation])];
    while (options.length < 4) {
      const extra = data.en.words[options.length];
      options.push(locale === "ko" ? extra.Korean : locale === "en" ? extra.English : locale === "ja" ? extra.Japanese : extra.Spanish);
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const options = generateOptions();
  const isCorrect = selected === correctTranslation;

  return (
    <Card className="border shadow-md">
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <p className="text-base text-muted-foreground">What does this word mean?</p>
          <p className="mt-2 text-3xl font-bold">{word.English}</p>
          <p className="mt-1 text-sm text-muted-foreground">({word.Korean})</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                if (!showResult) setSelected(opt);
              }}
              disabled={showResult}
              className={`flex items-center justify-center gap-2 rounded-md border p-4 text-base transition-colors ${(
                showResult && opt === correctTranslation
                  ? "bg-green-100 border-green-500 text-green-700"
                  : showResult && selected === opt && !isCorrect
                    ? "bg-red-100 border-red-500 text-red-700"
                    : selected === opt
                      ? "bg-indigo-100 border-indigo-500"
                      : "bg-white hover:bg-muted"
              )}`}
            >
              {showResult && opt === correctTranslation && <Check className="h-5 w-5" />}
              {showResult && selected === opt && !isCorrect && <X className="h-5 w-5" />}
              {opt}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          {!showResult ? (
            <button
              onClick={() => setShowResult(true)}
              disabled={!selected}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Check Answer
            </button>
          ) : (
            <div className="space-y-2">
              <p className={`text-lg font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? "Correct!" : "Incorrect"}
              </p>
              <p className="text-sm text-muted-foreground">Correct answer: {correctTranslation}</p>
              <button
                onClick={() => {
                  setSelected(null);
                  setShowResult(false);
                }}
                className="mt-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                Try Another
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function WordPractice({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("learn");
  const [currentIndex, setCurrentIndex] = useState(0);

  const d = data[locale];
  const words = difficulty === "all" ? d.words : d.words.filter((w) => w.difficulty === difficulty);
  const currentWord = currentIndex < words.length ? words[currentIndex] : words[0];

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
            applicationCategory: "EducationalApplication",
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

      <div className="mt-4 flex flex-wrap gap-2">
        {(["learn", "quiz"] as ViewMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`rounded-md border px-4 py-2 text-sm font-medium ${viewMode === mode ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
          >
            {mode === "learn" ? "Learn" : "Quiz"}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["all", "A1", "A2", "B1", "B2", "C1", "C2"] as Difficulty[]).map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`rounded-md border px-3 py-1 text-xs ${difficulty === level ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
          >
            {level === "all" ? "All" : level}
          </button>
        ))}
      </div>

      {viewMode === "learn" && (
        <div className="mt-8">
          <Card className="border shadow-md">
            <CardContent className="pt-6">
              <WordCard word={currentWord} locale={locale} d={d} />
            </CardContent>
          </Card>
          <div className="mt-4 flex justify-between">
            <button
              className="flex items-center gap-1 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            <button
              className="flex items-center gap-1 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
              onClick={() => setCurrentIndex(Math.min(words.length - 1, currentIndex + 1))}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {viewMode === "quiz" && <div className="mt-8"><Quiz word={currentWord} locale={locale} d={d} /></div>}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyLearn}</h2>
        <p className="whitespace-pre-line leading-relaxed text-muted-foreground">{d.whyExplanation}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <ul className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1 text-indigo-600">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

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
