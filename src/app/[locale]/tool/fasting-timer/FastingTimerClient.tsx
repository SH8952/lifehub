"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






interface FastState {
  startTime: number;
  fastingHours: number;
}

function formatTime(ms: number): string {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function FastingTimer({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [fastState, setFastState] = useState<FastState | null>(() => {
    try {
      const saved = localStorage.getItem("fasting-timer-state");
      if (saved) {
        const parsed = JSON.parse(saved) as FastState;
        // Restore only if the fasting period hasn't expired
        const fastingEnd = parsed.startTime + parsed.fastingHours * 3600000;
        const eatingEnd = fastingEnd + (24 - parsed.fastingHours) * 3600000;
        if (Date.now() < eatingEnd) return parsed;
      }
    } catch {
      // Ignore corrupted data
    }
    return null;
  });
  const [elapsed, setElapsed] = useState(0);
  const [phase, setPhase] = useState<"fasting" | "eating">("fasting");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const d = i18nData[locale];

  useEffect(() => {
    if (!fastState) return;
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const fastingEnd = fastState.startTime + fastState.fastingHours * 3600000;
      const eatingEnd = fastingEnd + (24 - fastState.fastingHours) * 3600000;
      setElapsed(Math.max(0, Math.floor((now - fastState.startTime) / 1000)));
      if (now < fastingEnd) setPhase("fasting");
      else if (now < eatingEnd) setPhase("eating");
      else setPhase("fasting");
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [fastState]);

  useEffect(() => {
    try {
      if (fastState) {
        localStorage.setItem("fasting-timer-state", JSON.stringify(fastState));
      } else {
        localStorage.removeItem("fasting-timer-state");
      }
    } catch {
      // Ignore quota errors
    }
  }, [fastState]);

  function handleStart(now = new Date()) {
    setFastState({ startTime: now.getTime(), fastingHours: fastState?.fastingHours || 16 });
  }

  function handlePreset(hours: number) {
    const now = new Date();
    setFastState({ startTime: now.getTime(), fastingHours: hours });
  }

  const fastingEnd = fastState ? fastState.startTime + fastState.fastingHours * 3600000 : 0;
  const eatingEnd = fastState ? fastingEnd + (24 - fastState.fastingHours) * 3600000 : 0;
  const now = fastState ? fastState.startTime + elapsed * 1000 : 0;
  const remainingFasting = Math.max(0, fastingEnd - now);
  const remainingEating = Math.max(0, eatingEnd - now);

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
            description: "Track intermittent fasting with automatic eating and fasting windows",
            applicationCategory: "HealthApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      {fastState ? (
        <Card className="border shadow-md mt-8">
          <CardContent className="space-y-6 p-8">
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{d.currentPhase}</h3>
              <div className={`mt-2 text-7xl font-bold text-indigo-600`}>{String(Math.floor(elapsed / 3600)).padStart(2, "0")}:{String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0")}:{String(elapsed % 60).padStart(2, "0")}</div>
              <div className={`mt-2 text-lg font-semibold ${phase === "fasting" ? "text-indigo-600" : "text-green-600"}`}>{phase === "fasting" ? d.fasting : d.eating}</div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="text-center rounded-lg bg-indigo-50 p-4">
                <p className="text-sm font-medium text-indigo-600">{d.fastingLabel}</p>
                <p className="text-3xl font-bold text-indigo-700 mt-1">{formatTime(remainingFasting)}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.remainingFasting}</p>
              </div>
              <div className="text-center rounded-lg bg-green-50 p-4">
                <p className="text-sm font-medium text-green-600">{d.eatingLabel}</p>
                <p className="text-3xl font-bold text-green-700 mt-1">{formatTime(remainingEating)}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.remainingEating}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">{d.presets}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[16,18,20,23].map((h) => (
                  <button key={h} type="button" onClick={() => handlePreset(h)}
                    className={`rounded-md border px-3 py-1 text-sm ${fastState.fastingHours === h ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                    {h}:{24 - h === 10 ? "10" : String(24 - h).padStart(1, "0")}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={() => handleStart()}
                className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">{d.startFasting}</button>
              <button type="button" onClick={() => setFastState(null)}
                className="flex-1 rounded-md border px-4 py-2 hover:bg-muted">{d.reset}</button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border shadow-md mt-8">
          <CardContent className="space-y-6 p-6">
            <p className="text-sm text-muted-foreground">{d.presets}</p>
            <div className="flex flex-wrap gap-2">
              {[
                { h: 16, label: d.preset168 },
                { h: 18, label: d.preset186 },
                { h: 20, label: d.preset204 },
                { h: 23, label: d.preset231 },
              ].map((p) => (
                <button key={p.h} type="button" onClick={() => handlePreset(p.h)}
                  className="rounded-md border px-4 py-2 text-sm hover:bg-muted">{p.label}</button>
              ))}
            </div>
            <button type="button" onClick={() => handlePreset(16)}
              className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">{d.startFasting}</button>
          </CardContent>
        </Card>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyFasting}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.limitations}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
