"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shuffle, Download } from "lucide-react";
import { data, type Locale } from "./data";

type Tab = "trait" | "mindset";

interface Theme {
  name: string;
  bg1: string;
  bg2: string;
  text: string;
  accent: string;
}

const THEMES: Theme[] = [
  { name: "Pink", bg1: "#fbcfe8", bg2: "#f472b6", text: "#831843", accent: "#ffffff" },
  { name: "Sky", bg1: "#bae6fd", bg2: "#38bdf8", text: "#0c4a6e", accent: "#ffffff" },
  { name: "Mint", bg1: "#bbf7d0", bg2: "#4ade80", text: "#14532d", accent: "#ffffff" },
  { name: "Sunset", bg1: "#fed7aa", bg2: "#fb923c", text: "#7c2d12", accent: "#ffffff" },
  { name: "Grape", bg1: "#ddd6fe", bg2: "#a78bfa", text: "#4c1d95", accent: "#ffffff" },
  { name: "Night", bg1: "#334155", bg2: "#0f172a", text: "#f1f5f9", accent: "#38bdf8" },
];

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  const lines: string[] = [];
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);

  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => {
    ctx.fillText(l, x, startY + i * lineHeight);
  });
}

export default function TraitMindsetCardMakerClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("trait");
  const [traitIndex, setTraitIndex] = useState(0);
  const [mindsetIndex, setMindsetIndex] = useState(0);
  const [name, setName] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const theme = THEMES[themeIndex];
  const selectedTrait = d.traits[traitIndex];
  const selectedMindset = d.mindsets[mindsetIndex];

  const randomPick = () => {
    if (tab === "trait") {
      setTraitIndex(Math.floor(Math.random() * d.traits.length));
    } else {
      setMindsetIndex(Math.floor(Math.random() * d.mindsets.length));
    }
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 1080;
    canvas.width = size;
    canvas.height = size;

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, theme.bg1);
    gradient.addColorStop(1, theme.bg2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.beginPath();
    ctx.arc(size * 0.85, size * 0.12, 160, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(size * 0.1, size * 0.9, 120, 0, Math.PI * 2);
    ctx.fill();

    ctx.textAlign = "center";
    ctx.fillStyle = theme.text;

    if (tab === "trait") {
      ctx.font = "160px sans-serif";
      ctx.fillText(selectedTrait.emoji, size / 2, size * 0.38);

      ctx.font = "bold 72px sans-serif";
      wrapText(ctx, selectedTrait.text, size / 2, size * 0.58, size * 0.8, 84);

      if (name.trim()) {
        ctx.font = "44px sans-serif";
        ctx.fillText(name.trim(), size / 2, size * 0.72);
      }
    } else {
      ctx.font = "100px sans-serif";
      ctx.fillText("✨", size / 2, size * 0.32);

      ctx.font = "bold 56px sans-serif";
      wrapText(ctx, selectedMindset, size / 2, size * 0.54, size * 0.78, 68);

      if (name.trim()) {
        ctx.font = "40px sans-serif";
        ctx.fillText(name.trim(), size / 2, size * 0.76);
      }
    }

    ctx.font = "32px sans-serif";
    ctx.fillStyle = theme.accent;
    ctx.globalAlpha = 0.85;
    ctx.fillText(d.title, size / 2, size * 0.94);
    ctx.globalAlpha = 1;
  };

  const downloadImage = () => {
    draw();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `card-${tab}-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  const previewGradient = `linear-gradient(135deg, ${theme.bg1}, ${theme.bg2})`;

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

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-rose-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setTab("trait")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "trait" ? "bg-rose-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabTrait}
        </button>
        <button
          onClick={() => setTab("mindset")}
          className={`flex-1 rounded-md border px-4 py-2 text-sm font-medium ${tab === "mindset" ? "bg-rose-600 text-white" : "bg-white hover:bg-muted"}`}
        >
          {d.tabMindset}
        </button>
      </div>

      <Card>
        <CardContent className="space-y-6 p-6">
          <div
            className="mx-auto flex aspect-square w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center shadow-inner"
            style={{ background: previewGradient, color: theme.text }}
          >
            {tab === "trait" ? (
              <>
                <span className="text-6xl">{selectedTrait.emoji}</span>
                <p className="mt-4 text-xl font-bold">{selectedTrait.text}</p>
              </>
            ) : (
              <>
                <span className="text-5xl">✨</span>
                <p className="mt-4 text-base font-bold leading-relaxed">{selectedMindset}</p>
              </>
            )}
            {name.trim() && <p className="mt-4 text-sm font-medium">{name.trim()}</p>}
            <p className="mt-6 text-xs opacity-70" style={{ color: theme.accent }}>
              {d.title}
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">{d.cardListLabel}</p>
            <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto">
              {tab === "trait"
                ? d.traits.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setTraitIndex(i)}
                      className={`rounded-full border px-3 py-1 text-xs ${i === traitIndex ? "bg-rose-600 text-white" : "bg-white hover:bg-muted"}`}
                    >
                      {t.emoji} {t.text}
                    </button>
                  ))
                : d.mindsets.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => setMindsetIndex(i)}
                      className={`rounded-full border px-3 py-1 text-xs ${i === mindsetIndex ? "bg-rose-600 text-white" : "bg-white hover:bg-muted"}`}
                    >
                      {m.length > 16 ? `${m.slice(0, 16)}...` : m}
                    </button>
                  ))}
            </div>
          </div>

          <button
            onClick={randomPick}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            <Shuffle className="h-4 w-4" />
            {d.randomBtn}
          </button>

          <div>
            <label className="mb-2 block text-sm font-medium">{d.nameLabel}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 20))}
              placeholder={d.namePlaceholder}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">{d.colorLabel}</p>
            <div className="flex gap-2">
              {THEMES.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setThemeIndex(i)}
                  aria-label={t.name}
                  className={`h-9 w-9 rounded-full border-2 ${i === themeIndex ? "border-rose-600" : "border-transparent"}`}
                  style={{ background: `linear-gradient(135deg, ${t.bg1}, ${t.bg2})` }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={downloadImage}
            className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-6 py-3 text-sm font-medium text-white hover:bg-rose-700"
          >
            <Download className="h-4 w-4" />
            {d.downloadBtn}
          </button>

          <canvas ref={canvasRef} className="hidden" />
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
