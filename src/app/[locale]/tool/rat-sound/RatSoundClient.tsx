"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






export default function RatSound({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentFreq, setCurrentFreq] = useState(20);
  const audioRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const d = i18nData[locale];

  function togglePlay() {
    if (!audioRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioRef.current = new AudioCtx();
    }
    const ctx = audioRef.current;

    if (isPlaying) {
      if (gainRef.current) {
        gainRef.current.gain.setTargetAtTime(0.00001, ctx!.currentTime, 0.05);
      }
      setTimeout(() => {
        if (oscRef.current) {
          oscRef.current.stop();
          oscRef.current.disconnect();
          oscRef.current = null;
        }
        setIsPlaying(false);
      }, 200);
    } else {
      gainRef.current = ctx!.createGain();
      gainRef.current.gain.value = volume / 100;
      gainRef.current.connect(ctx!.destination);

      oscRef.current = ctx!.createOscillator();
      oscRef.current.type = "sine";
      oscRef.current.frequency.value = currentFreq * 1000;
      oscRef.current.connect(gainRef.current);
      oscRef.current.start();

      setIsPlaying(true);
    }
  }

  function handleFreqChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value);
    setCurrentFreq(val);
    if (oscRef.current && audioRef.current && isPlaying) {
      oscRef.current.frequency.setValueAtTime(val * 1000, audioRef.current.currentTime);
    }
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (gainRef.current && audioRef.current && isPlaying) {
      gainRef.current.gain.value = val / 100;
    }
  }

  function applyPreset(freqKhz: number) {
    setCurrentFreq(freqKhz);
    if (oscRef.current && audioRef.current && isPlaying) {
      oscRef.current.frequency.setValueAtTime(freqKhz * 1000, audioRef.current.currentTime);
    }
  }

  useEffect(() => {
    return () => {
      if (oscRef.current) { try { oscRef.current.stop(); } catch {} }
      if (audioRef.current) { try { audioRef.current.close(); } catch {} }
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>
      {d.intro.split("\n\n").map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "Generate rat repellent ultrasonic frequencies with Web Audio API",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <div className="mt-8 space-y-6">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">프리셋:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {d.presets.map((p, i) => (
                  <button key={i} type="button" onClick={() => applyPreset(p.baseFreq)}
                    className={`rounded-md border px-3 py-1 text-sm ${currentFreq === p.baseFreq ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "hover:bg-muted"}`}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{d.frequency}</label>
              <input type="range" min="3" max="25" value={currentFreq} onChange={handleFreqChange}
                className="w-full" />
              <p className="text-center text-2xl font-bold text-indigo-600">{currentFreq}kHz</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{d.volume}: {volume}%</label>
              <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange}
                className="w-full" />
            </div>

            <button type="button" onClick={togglePlay}
              className={`w-full rounded-md px-4 py-3 text-lg font-medium text-white ${isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"}`}>
              {isPlaying ? d.stop : d.play}
            </button>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
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
