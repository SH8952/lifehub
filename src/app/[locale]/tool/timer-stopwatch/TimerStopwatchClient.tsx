"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Flag } from "lucide-react";
import { data, type Locale } from "./data";

function formatTime(ms: number, showMs = false) {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const cs = Math.floor((ms % 1000) / 10);
  const pad = (n: number) => String(n).padStart(2, "0");
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}${showMs ? "." + pad(cs) : ""}`;
  return `${pad(m)}:${pad(s)}${showMs ? "." + pad(cs) : ""}`;
}

export default function TimerStopwatch({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [tab, setTab] = useState<"timer" | "stopwatch">("timer");

  // Timer state
  const [inputMin, setInputMin] = useState(5);
  const [inputSec, setInputSec] = useState(0);
  const [timerRemaining, setTimerRemaining] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const timerEndRef = useRef(0);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stopwatch state
  const [swElapsed, setSwElapsed] = useState(0);
  const [swRunning, setSwRunning] = useState(false);
  const swStartRef = useRef(0);
  const swBaseRef = useRef(0);
  const swIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [laps, setLaps] = useState<number[]>([]);

  const startTimer = useCallback(() => {
    const totalMs = (inputMin * 60 + inputSec) * 1000;
    if (totalMs <= 0) return;
    timerEndRef.current = Date.now() + (timerRemaining > 0 ? timerRemaining : totalMs);
    setTimerRemaining(timerRemaining > 0 ? timerRemaining : totalMs);
    setTimerDone(false);
    setTimerRunning(true);
  }, [inputMin, inputSec, timerRemaining]);

  useEffect(() => {
    if (!timerRunning) return;
    timerIntervalRef.current = setInterval(() => {
      const rem = timerEndRef.current - Date.now();
      if (rem <= 0) {
        setTimerRemaining(0);
        setTimerRunning(false);
        setTimerDone(true);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      } else {
        setTimerRemaining(rem);
      }
    }, 100);
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [timerRunning]);

  const pauseTimer = () => setTimerRunning(false);
  const resetTimer = () => {
    setTimerRunning(false);
    setTimerRemaining(0);
    setTimerDone(false);
  };

  const startStopwatch = () => {
    swStartRef.current = Date.now();
    setSwRunning(true);
  };
  useEffect(() => {
    if (!swRunning) return;
    swIntervalRef.current = setInterval(() => {
      setSwElapsed(swBaseRef.current + (Date.now() - swStartRef.current));
    }, 30);
    return () => {
      if (swIntervalRef.current) clearInterval(swIntervalRef.current);
    };
  }, [swRunning]);
  const pauseStopwatch = () => {
    swBaseRef.current = swElapsed;
    setSwRunning(false);
  };
  const resetStopwatch = () => {
    setSwRunning(false);
    setSwElapsed(0);
    swBaseRef.current = 0;
    setLaps([]);
  };
  const recordLap = () => setLaps((prev) => [swElapsed, ...prev]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setTab("timer")}
          className={`rounded-md px-4 py-2 text-sm font-medium ${tab === "timer" ? "bg-indigo-600 text-white" : "bg-muted"}`}
        >
          {d.tabTimer}
        </button>
        <button
          onClick={() => setTab("stopwatch")}
          className={`rounded-md px-4 py-2 text-sm font-medium ${tab === "stopwatch" ? "bg-indigo-600 text-white" : "bg-muted"}`}
        >
          {d.tabStopwatch}
        </button>
      </div>

      {tab === "timer" ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-8">
            {!timerRunning && timerRemaining === 0 && !timerDone ? (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    min={0}
                    max={99}
                    value={inputMin}
                    onChange={(e) => setInputMin(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-20 rounded-md border px-3 py-2 text-center text-2xl"
                  />
                  <span className="mt-1 text-xs text-muted-foreground">{d.minutes}</span>
                </div>
                <span className="text-2xl">:</span>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    min={0}
                    max={59}
                    value={inputSec}
                    onChange={(e) => setInputSec(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
                    className="w-20 rounded-md border px-3 py-2 text-center text-2xl"
                  />
                  <span className="mt-1 text-xs text-muted-foreground">{d.seconds}</span>
                </div>
              </div>
            ) : (
              <p className={`font-mono text-6xl font-bold ${timerDone ? "text-red-600" : ""}`}>
                {formatTime(timerRemaining)}
              </p>
            )}

            {timerDone && <p className="text-lg font-semibold text-red-600">{d.timeUp}</p>}

            <div className="flex gap-3">
              {!timerRunning ? (
                <button
                  onClick={startTimer}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Play className="h-4 w-4" />
                  {d.start}
                </button>
              ) : (
                <button
                  onClick={pauseTimer}
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-2 text-sm font-medium text-white hover:bg-amber-600"
                >
                  <Pause className="h-4 w-4" />
                  {d.pause}
                </button>
              )}
              <button
                onClick={resetTimer}
                className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
              >
                <RotateCcw className="h-4 w-4" />
                {d.reset}
              </button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <p className="font-mono text-6xl font-bold">{formatTime(swElapsed, true)}</p>
            <div className="flex gap-3">
              {!swRunning ? (
                <button
                  onClick={startStopwatch}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Play className="h-4 w-4" />
                  {d.start}
                </button>
              ) : (
                <button
                  onClick={pauseStopwatch}
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-2 text-sm font-medium text-white hover:bg-amber-600"
                >
                  <Pause className="h-4 w-4" />
                  {d.pause}
                </button>
              )}
              {swRunning && (
                <button
                  onClick={recordLap}
                  className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Flag className="h-4 w-4" />
                  {d.lap}
                </button>
              )}
              <button
                onClick={resetStopwatch}
                className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
              >
                <RotateCcw className="h-4 w-4" />
                {d.reset}
              </button>
            </div>

            {laps.length > 0 && (
              <div className="w-full">
                <p className="mb-2 text-sm font-semibold">{d.lapsTitle}</p>
                <div className="max-h-56 space-y-1 overflow-y-auto">
                  {laps.map((lap, i) => (
                    <div key={i} className="flex justify-between rounded-md bg-muted px-3 py-1.5 text-sm font-mono">
                      <span>#{laps.length - i}</span>
                      <span>{formatTime(lap, true)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

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
