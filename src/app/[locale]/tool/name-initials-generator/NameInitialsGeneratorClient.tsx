"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { data, type Locale } from "./data";

const COLORS = ["#4f46e5", "#0891b2", "#059669", "#d97706", "#dc2626", "#7c3aed", "#db2777", "#475569"];

function getInitials(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function NameInitialsGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [name, setName] = useState("홍길동");
  const [color, setColor] = useState(COLORS[0]);
  const [shape, setShape] = useState<"circle" | "square">("circle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initials = getInitials(name);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = color;
    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, size, size);
    }

    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${size * 0.38}px system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(initials, size / 2, size / 2 + size * 0.02);
  }, [initials, color, shape]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `initials-${initials}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
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
            applicationCategory: "UtilityApplication",
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
        <CardContent className="flex flex-col items-center gap-6 p-6">
          <canvas ref={canvasRef} className="h-40 w-40 rounded-lg" style={{ borderRadius: shape === "circle" ? "9999px" : "12px" }} />

          <div className="w-full space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.nameLabel}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={d.placeholder} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">{d.colorLabel}</label>
              <div className="flex flex-wrap gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-8 w-8 rounded-full ${color === c ? "ring-2 ring-offset-2 ring-indigo-600" : ""}`}
                    style={{ backgroundColor: c }}
                    aria-label={c}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">{d.shapeLabel}</label>
              <div className="flex gap-2">
                <button onClick={() => setShape("circle")} className={`rounded-md border px-4 py-1.5 text-sm ${shape === "circle" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                  {d.circle}
                </button>
                <button onClick={() => setShape("square")} className={`rounded-md border px-4 py-1.5 text-sm ${shape === "square" ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                  {d.square}
                </button>
              </div>
            </div>

            <button onClick={downloadImage} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <Download className="h-4 w-4" />
              {d.download}
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
