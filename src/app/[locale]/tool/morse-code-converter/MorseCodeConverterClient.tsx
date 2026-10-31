"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const MORSE_MAP: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};
const REVERSE_MORSE: Record<string, string> = Object.fromEntries(Object.entries(MORSE_MAP).map(([k, v]) => [v, k]));

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((ch) => MORSE_MAP[ch] ?? "")
        .filter(Boolean)
        .join(" ")
    )
    .join(" / ");
}

function morseToText(morse: string): string {
  return morse
    .trim()
    .split("/")
    .map((word) =>
      word
        .trim()
        .split(/\s+/)
        .map((code) => REVERSE_MORSE[code] ?? "")
        .join("")
    )
    .join(" ");
}

export default function MorseCodeConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState(d.placeholderEncode);
  const [copied, setCopied] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const output = mode === "encode" ? textToMorse(input) : morseToText(input);

  const switchMode = (m: "encode" | "decode") => {
    setMode(m);
    setInput(m === "encode" ? d.placeholderEncode : d.placeholderDecode);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const playSound = () => {
    const morse = mode === "encode" ? output : input;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    const unit = 0.08;
    let t = ctx.currentTime;
    for (const ch of morse) {
      if (ch === ".") {
        const osc = ctx.createOscillator();
        osc.frequency.value = 600;
        osc.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + unit);
        t += unit * 2;
      } else if (ch === "-") {
        const osc = ctx.createOscillator();
        osc.frequency.value = 600;
        osc.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + unit * 3);
        t += unit * 4;
      } else if (ch === " ") {
        t += unit * 2;
      } else if (ch === "/") {
        t += unit * 4;
      }
    }
  };

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
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex gap-2">
            <button onClick={() => switchMode("encode")} className={`rounded-md border px-3 py-1.5 text-sm ${mode === "encode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
              {d.modeEncode}
            </button>
            <button onClick={() => switchMode("decode")} className={`rounded-md border px-3 py-1.5 text-sm ${mode === "decode" ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
              {d.modeDecode}
            </button>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.inputLabel}</label>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} className="h-24 w-full resize-none rounded-md border p-3 font-mono text-sm" />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-sm font-medium">{d.outputLabel}</p>
              <div className="flex gap-2">
                <button onClick={playSound} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {d.playBtn}
                </button>
                <button onClick={copyOutput} className="rounded-md border px-2 py-0.5 text-xs hover:bg-muted">
                  {copied ? d.copied : d.copyBtn}
                </button>
              </div>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-md bg-muted/30 p-3 font-mono text-sm">{output}</pre>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
