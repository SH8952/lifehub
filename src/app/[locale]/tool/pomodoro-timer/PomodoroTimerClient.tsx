"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { data, type Locale } from "./data";

type Phase = "focus" | "break" | "longBreak";

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function PomodoroTimer({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [focusMin, setFocusMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const [longBreakMin, setLongBreakMin] = useState(15);

  const [phase, setPhase] = useState<Phase>("focus");
  const [remaining, setRemaining] = useState(focusMin * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const endRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const phaseDuration = (p: Phase) =>
    p === "focus" ? focusMin * 60 : p === "break" ? breakMin * 60 : longBreakMin * 60;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 설정(분) 변경 시 표시 시간 동기화, 의도된 derived-state 패턴
    if (!running) setRemaining(phaseDuration(phase));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusMin, breakMin, longBreakMin]);

  const start = () => {
    endRef.current = Date.now() + remaining * 1000;
    setRunning(true);
  };
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setPhase("focus");
    setRemaining(focusMin * 60);
    setSessions(0);
  };

  const advancePhase = (fromAuto: boolean) => {
    setRunning(false);
    if (phase === "focus") {
      const newSessions = fromAuto ? sessions + 1 : sessions;
      if (fromAuto) setSessions(newSessions);
      const next: Phase = newSessions % 4 === 0 ? "longBreak" : "break";
      setPhase(next);
      setRemaining(phaseDuration(next));
    } else {
      setPhase("focus");
      setRemaining(phaseDuration("focus"));
    }
  };

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      const rem = Math.round((endRef.current - Date.now()) / 1000);
      if (rem <= 0) {
        setRemaining(0);
        advancePhase(true);
      } else {
        setRemaining(rem);
      }
    }, 250);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const phaseLabel = phase === "focus" ? d.focusLabel : phase === "break" ? d.breakLabel : d.longBreakLabel;
  const phaseColor = phase === "focus" ? "text-indigo-600" : "text-green-600";

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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="flex flex-col items-center gap-6 p-8">
          <p className={`text-lg font-semibold ${phaseColor}`}>{phaseLabel}</p>
          <p className="font-mono text-7xl font-bold">{formatTime(remaining)}</p>
          <p className="text-sm text-muted-foreground">
            {d.sessionsLabel}: <span className="font-semibold">{sessions}</span> 🍅
          </p>

          <div className="flex gap-3">
            {!running ? (
              <button onClick={start} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                <Play className="h-4 w-4" />
                {d.start}
              </button>
            ) : (
              <button onClick={pause} className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-2 text-sm font-medium text-white hover:bg-amber-600">
                <Pause className="h-4 w-4" />
                {d.pause}
              </button>
            )}
            <button onClick={() => advancePhase(false)} className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted">
              <SkipForward className="h-4 w-4" />
              {d.skip}
            </button>
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted">
              <RotateCcw className="h-4 w-4" />
              {d.reset}
            </button>
          </div>

          <div className="w-full rounded-lg bg-muted p-4">
            <p className="mb-3 text-sm font-semibold">{d.customSettings}</p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">{d.focusLabel}</label>
                <input type="number" min={1} max={120} value={focusMin} onChange={(e) => setFocusMin(Math.max(1, parseInt(e.target.value) || 1))} className="w-full rounded-md border px-2 py-1.5 text-center text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">{d.breakLabel}</label>
                <input type="number" min={1} max={60} value={breakMin} onChange={(e) => setBreakMin(Math.max(1, parseInt(e.target.value) || 1))} className="w-full rounded-md border px-2 py-1.5 text-center text-sm" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">{d.longBreakLabel}</label>
                <input type="number" min={1} max={60} value={longBreakMin} onChange={(e) => setLongBreakMin(Math.max(1, parseInt(e.target.value) || 1))} className="w-full rounded-md border px-2 py-1.5 text-center text-sm" />
              </div>
            </div>
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
