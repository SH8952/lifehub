"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Timer } from "lucide-react";
import { data, type Locale, type QuizQuestion } from "./data";

type ShuffledOption = { text: string; isCorrect: boolean };
type ShuffledQuestion = { term: string; question: string; options: ShuffledOption[] };

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRound(pool: QuizQuestion[]): ShuffledQuestion[] {
  const picked = shuffle(pool).slice(0, 10);
  return picked.map((q) => {
    const opts: ShuffledOption[] = q.options.map((text, i) => ({ text, isCorrect: i === q.correctIndex }));
    return { term: q.term, question: q.question, options: shuffle(opts) };
  });
}

const TIME_LIMIT = 10;

export default function TrendSlangQuizClient({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const d = data[locale];

  const [mode, setMode] = useState<"intro" | "playing" | "result">("intro");
  const [round, setRound] = useState<ShuffledQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const advanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (advanceRef.current) clearTimeout(advanceRef.current);
  };

  useEffect(() => clearTimers, []);

  const startQuiz = () => {
    setRound(buildRound(d.questions));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setMode("playing");
  };

  const advance = () => {
    clearTimers();
    setSelected(null);
    if (index + 1 >= round.length) {
      setMode("result");
    } else {
      setIndex((i) => i + 1);
    }
  };

  const current = round[index];

  useEffect(() => {
    if (mode !== "playing" || !current) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 문제 전환 시 타이머 초기화, setInterval 구독과 함께 쓰이는 정당한 effect
    setTimeLeft(TIME_LIMIT);
    setSelected(null);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearTimers();
          setSelected(-1);
          advanceRef.current = setTimeout(() => advance(), 900);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, mode]);

  const pickOption = (i: number) => {
    if (selected !== null) return;
    clearTimers();
    setSelected(i);
    if (current.options[i].isCorrect) setScore((s) => s + 1);
    advanceRef.current = setTimeout(() => advance(), 900);
  };

  const level =
    score >= 9 ? { title: d.level3, desc: d.level3Desc } :
    score >= 6 ? { title: d.level2, desc: d.level2Desc } :
    score >= 3 ? { title: d.level1, desc: d.level1Desc } :
    { title: d.level0, desc: d.level0Desc };

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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-6 p-6">
          {mode === "intro" && (
            <div className="text-center">
              <button
                onClick={startQuiz}
                className="rounded-md bg-amber-600 px-6 py-3 text-sm font-medium text-white hover:bg-amber-700"
              >
                {d.startBtn}
              </button>
            </div>
          )}

          {mode === "playing" && current && (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {d.questionProgress} {index + 1} / {round.length}
                </span>
                <span className={`flex items-center gap-1 font-mono ${timeLeft <= 3 ? "text-red-600" : ""}`}>
                  <Timer className="h-3.5 w-3.5" />
                  {d.timeLeftLabel} {timeLeft}
                  {d.secondsUnit}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-amber-600 transition-all"
                  style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
                />
              </div>

              <p className="text-lg font-semibold">{current.question}</p>

              <div className="grid gap-2">
                {current.options.map((opt, i) => {
                  const showState = selected !== null;
                  const isPicked = selected === i;
                  const bg = !showState
                    ? "bg-white hover:bg-muted"
                    : opt.isCorrect
                      ? "bg-emerald-100 border-emerald-500"
                      : isPicked
                        ? "bg-red-100 border-red-500"
                        : "bg-white opacity-60";
                  return (
                    <button
                      key={i}
                      onClick={() => pickOption(i)}
                      disabled={showState}
                      className={`rounded-md border p-3 text-left text-sm transition ${bg}`}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <p className="text-sm font-medium">
                  {selected === -1
                    ? d.timeUpMsg
                    : current.options[selected]?.isCorrect
                      ? d.correctMsg
                      : `${d.wrongMsg} "${current.options.find((o) => o.isCorrect)?.text}"`}
                </p>
              )}
            </div>
          )}

          {mode === "result" && (
            <div className="space-y-3 text-center">
              <p className="text-lg font-semibold">{d.resultTitle}</p>
              <p className="font-mono text-4xl font-bold text-amber-600">
                {score} / {round.length}
              </p>
              <p className="text-sm text-muted-foreground">{d.scoreLabel}</p>
              <div className="rounded-md bg-amber-50 p-4">
                <p className="text-lg font-semibold text-amber-700">{level.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{level.desc}</p>
              </div>
              <button
                onClick={startQuiz}
                className="rounded-md bg-amber-600 px-6 py-3 text-sm font-medium text-white hover:bg-amber-700"
              >
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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
