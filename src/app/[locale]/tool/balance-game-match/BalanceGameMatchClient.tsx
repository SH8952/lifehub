"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, Link2 } from "lucide-react";
import { data, type Locale } from "./data";

type Choice = "a" | "b";

function encodeAnswers(answers: Choice[]): string {
  const str = answers.join("");
  try {
    return encodeURIComponent(btoa(str));
  } catch {
    return "";
  }
}

function decodeAnswers(encoded: string): Choice[] | null {
  try {
    const str = atob(decodeURIComponent(encoded));
    const result = str.split("").filter((c) => c === "a" || c === "b") as Choice[];
    return result.length > 0 ? result : null;
  } catch {
    return null;
  }
}

export default function BalanceGameMatchClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];
  const totalQuestions = d.questions.length;

  const [friendAnswers, setFriendAnswers] = useState<Choice[] | null>(null);
  const [checkedUrl, setCheckedUrl] = useState(false);

  const [mode, setMode] = useState<"intro" | "playing" | "result" | "match-result">("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Choice[]>([]);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const sync = params.get("sync");
    if (sync) {
      const decoded = decodeAnswers(sync);
      if (decoded && decoded.length === totalQuestions) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- URL 쿼리(외부 소스) 동기화, 마운트 시 1회만 실행되는 정당한 패턴
        setFriendAnswers(decoded);
      }
    }
    setCheckedUrl(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isCompareMode = checkedUrl && friendAnswers !== null;

  const startGame = () => {
    setAnswers([]);
    setIndex(0);
    setMode("playing");
  };

  const pick = (choice: Choice) => {
    const next = [...answers, choice];
    setAnswers(next);
    if (index + 1 >= totalQuestions) {
      if (isCompareMode && friendAnswers) {
        setMode("match-result");
      } else {
        const encoded = encodeAnswers(next);
        const base =
          typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : "";
        setShareUrl(`${base}?sync=${encoded}`);
        setMode("result");
      }
    } else {
      setIndex(index + 1);
    }
  };

  const matchPercent = useMemo(() => {
    if (!friendAnswers || answers.length !== totalQuestions) return 0;
    let same = 0;
    for (let i = 0; i < totalQuestions; i++) {
      if (answers[i] === friendAnswers[i]) same++;
    }
    return Math.round((same / totalQuestions) * 100);
  }, [answers, friendAnswers, totalQuestions]);

  const matchMessage =
    matchPercent >= 80 ? d.matchHigh : matchPercent >= 50 ? d.matchMid : d.matchLow;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const restart = () => {
    setMode("intro");
    setAnswers([]);
    setIndex(0);
    setCopied(false);
  };

  const createNew = () => {
    if (typeof window !== "undefined") {
      window.location.href = window.location.pathname;
    }
  };

  const progressPct = mode === "playing" ? ((index + 1) / totalQuestions) * 100 : 0;
  const current = d.questions[index];

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
              {isCompareMode ? (
                <>
                  <p className="text-lg font-semibold">{d.compareModeTitle}</p>
                  <p className="text-sm text-muted-foreground">{d.compareModeDesc}</p>
                  <button
                    onClick={startGame}
                    className="rounded-md bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700"
                  >
                    {d.startCompareBtn}
                  </button>
                </>
              ) : (
                <button
                  onClick={startGame}
                  className="rounded-md bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700"
                >
                  {d.startBtn}
                </button>
              )}
            </div>
          )}

          {mode === "playing" && current && (
            <div className="space-y-5">
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>
                    {d.progressLabel} {index + 1} / {totalQuestions}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-pink-600 transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <button
                  onClick={() => pick("a")}
                  className="rounded-lg border-2 border-pink-200 bg-pink-50 p-5 text-left text-sm font-medium transition hover:border-pink-500 hover:bg-pink-100"
                >
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-xs text-white">
                    {d.optionALabel}
                  </span>
                  {current.a}
                </button>
                <button
                  onClick={() => pick("b")}
                  className="rounded-lg border-2 border-sky-200 bg-sky-50 p-5 text-left text-sm font-medium transition hover:border-sky-500 hover:bg-sky-100"
                >
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs text-white">
                    {d.optionBLabel}
                  </span>
                  {current.b}
                </button>
              </div>
            </div>
          )}

          {mode === "result" && (
            <div className="space-y-4 text-center">
              <p className="text-lg font-semibold">{d.resultTitle}</p>
              <p className="text-sm text-muted-foreground">{d.resultDesc}</p>
              <div className="flex items-center gap-2 rounded-md border bg-muted/30 p-3">
                <Link2 className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span className="flex-1 truncate text-left text-xs">{shareUrl}</span>
              </div>
              <button
                onClick={copyLink}
                className="inline-flex items-center gap-2 rounded-md bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? d.shareCopiedMsg : d.shareBtn}
              </button>
              <div>
                <button onClick={restart} className="text-xs text-muted-foreground hover:underline">
                  {d.restartBtn}
                </button>
              </div>
            </div>
          )}

          {mode === "match-result" && (
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground">{d.matchResultTitle}</p>
              <p className="font-mono text-5xl font-bold text-pink-600">
                {matchPercent}
                {d.matchPercentUnit}
              </p>
              <p className="text-sm">{matchMessage}</p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={restart}
                  className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  {d.restartBtn}
                </button>
                <button
                  onClick={createNew}
                  className="rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
                >
                  {d.newShareBtn}
                </button>
              </div>
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
