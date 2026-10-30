"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { data, type Locale } from "./data";

interface HistoryEntry {
  guess: string;
  strikes: number;
  balls: number;
}

function generateSecret(digits: number): string {
  const nums = Array.from({ length: 10 }, (_, i) => i);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let picked = nums.slice(0, digits);
  if (picked[0] === 0) {
    const nonZeroIdx = picked.findIndex((n) => n !== 0);
    [picked[0], picked[nonZeroIdx]] = [picked[nonZeroIdx], picked[0]];
  }
  return picked.join("");
}

function evaluate(secret: string, guess: string): { strikes: number; balls: number } {
  let strikes = 0;
  let balls = 0;
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      strikes++;
    } else if (secret.includes(guess[i])) {
      balls++;
    }
  }
  return { strikes, balls };
}

export default function NumberBaseballGame({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [digits, setDigits] = useState(3);
  const [secret, setSecret] = useState<string | null>(null);
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [error, setError] = useState("");
  const [won, setWon] = useState(false);

  const startGame = () => {
    setSecret(generateSecret(digits));
    setHistory([]);
    setGuess("");
    setError("");
    setWon(false);
  };

  const submitGuess = () => {
    if (!secret) return;
    if (guess.length !== digits || !/^\d+$/.test(guess) || new Set(guess.split("")).size !== digits) {
      setError(d.errorInvalid);
      return;
    }
    setError("");
    const { strikes, balls } = evaluate(secret, guess);
    setHistory((h) => [{ guess, strikes, balls }, ...h]);
    if (strikes === digits) {
      setWon(true);
    }
    setGuess("");
  };

  const winMsg = d.winMessage.replace("{count}", String(history.length));

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
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.digitsLabel}</label>
            <div className="flex gap-2">
              <button onClick={() => setDigits(3)} className={`flex-1 rounded-md border px-3 py-2 text-sm ${digits === 3 ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                3
              </button>
              <button onClick={() => setDigits(4)} className={`flex-1 rounded-md border px-3 py-2 text-sm ${digits === 4 ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                4
              </button>
            </div>
          </div>

          <button onClick={startGame} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Target className="h-4 w-4" />
            {d.startBtn}
          </button>

          {secret && !won && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value.replace(/\D/g, "").slice(0, digits))}
                  placeholder={d.guessPlaceholder}
                  className="flex-1 rounded-md border px-3 py-2 font-mono text-sm"
                  onKeyDown={(e) => e.key === "Enter" && submitGuess()}
                />
                <button onClick={submitGuess} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  {d.guessBtn}
                </button>
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <p className="text-sm text-muted-foreground">{d.attemptsLabel.replace("{count}", String(history.length))}</p>
            </div>
          )}

          {won && (
            <div className="rounded-lg bg-indigo-50 p-5 text-center">
              <p className="text-base font-medium text-indigo-800">{winMsg}</p>
            </div>
          )}

          {history.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium">{d.historyLabel}</p>
              <ul className="space-y-1">
                {history.map((h, i) => (
                  <li key={i} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                    <span className="font-mono">{h.guess}</span>
                    <span className="text-muted-foreground">
                      {h.strikes} {d.strikeLabel} / {h.balls} {d.ballLabel}
                    </span>
                  </li>
                ))}
              </ul>
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
