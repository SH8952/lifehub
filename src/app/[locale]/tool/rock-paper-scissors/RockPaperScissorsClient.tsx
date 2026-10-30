"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Choice = "rock" | "paper" | "scissors";

const EMOJI: Record<Choice, string> = { rock: "\u270a", paper: "\u270b", scissors: "\u270c\ufe0f" };

function decideWinner(user: Choice, comp: Choice): "win" | "lose" | "draw" {
  if (user === comp) return "draw";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    return "win";
  }
  return "lose";
}

export default function RockPaperScissors({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [compChoice, setCompChoice] = useState<Choice | null>(null);
  const [outcome, setOutcome] = useState<"win" | "lose" | "draw" | null>(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const play = (choice: Choice) => {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    // eslint-disable-next-line react-hooks/purity -- 클릭 이벤트 핸들러 내부 호출이며 렌더링 중에는 실행되지 않음
    const comp = choices[Math.floor(Math.random() * 3)];
    const result = decideWinner(choice, comp);
    setUserChoice(choice);
    setCompChoice(comp);
    setOutcome(result);
    if (result === "win") setWins((w) => w + 1);
    else if (result === "lose") setLosses((l) => l + 1);
    else setDraws((dr) => dr + 1);
  };

  const reset = () => {
    setWins(0);
    setLosses(0);
    setDraws(0);
    setUserChoice(null);
    setCompChoice(null);
    setOutcome(null);
  };

  const choices: { key: Choice; label: string }[] = [
    { key: "rock", label: d.rock },
    { key: "paper", label: d.paper },
    { key: "scissors", label: d.scissors },
  ];

  const scoreText = d.scoreLabel.replace("{wins}", String(wins)).replace("{losses}", String(losses)).replace("{draws}", String(draws));

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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="grid grid-cols-3 gap-2">
            {choices.map((c) => (
              <button key={c.key} onClick={() => play(c.key)} className="flex flex-col items-center gap-1 rounded-md border px-3 py-4 text-sm hover:bg-muted">
                <span className="text-3xl">{EMOJI[c.key]}</span>
                {c.label}
              </button>
            ))}
          </div>

          {userChoice && compChoice && outcome && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5 text-center">
              <div className="flex items-center justify-center gap-6">
                <div>
                  <p className="text-xs text-indigo-600">{d.yourChoiceLabel}</p>
                  <p className="text-3xl">{EMOJI[userChoice]}</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-600">{d.computerChoiceLabel}</p>
                  <p className="text-3xl">{EMOJI[compChoice]}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-indigo-800">
                {outcome === "win" ? d.resultWin : outcome === "lose" ? d.resultLose : d.resultDraw}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">{scoreText}</p>
            <button onClick={reset} className="rounded-md border px-3 py-1.5 text-xs hover:bg-muted">
              {d.resetBtn}
            </button>
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
