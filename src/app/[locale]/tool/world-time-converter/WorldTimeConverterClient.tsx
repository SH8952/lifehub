"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { data, type Locale } from "./data";

const CITIES = [
  { name: "서울 (Seoul)", tz: "Asia/Seoul" },
  { name: "도쿄 (Tokyo)", tz: "Asia/Tokyo" },
  { name: "베이징 (Beijing)", tz: "Asia/Shanghai" },
  { name: "방콕 (Bangkok)", tz: "Asia/Bangkok" },
  { name: "뉴델리 (New Delhi)", tz: "Asia/Kolkata" },
  { name: "두바이 (Dubai)", tz: "Asia/Dubai" },
  { name: "모스크바 (Moscow)", tz: "Europe/Moscow" },
  { name: "런던 (London)", tz: "Europe/London" },
  { name: "파리 (Paris)", tz: "Europe/Paris" },
  { name: "베를린 (Berlin)", tz: "Europe/Berlin" },
  { name: "뉴욕 (New York)", tz: "America/New_York" },
  { name: "시카고 (Chicago)", tz: "America/Chicago" },
  { name: "로스앤젤레스 (Los Angeles)", tz: "America/Los_Angeles" },
  { name: "상파울루 (Sao Paulo)", tz: "America/Sao_Paulo" },
  { name: "시드니 (Sydney)", tz: "Australia/Sydney" },
  { name: "오클랜드 (Auckland)", tz: "Pacific/Auckland" },
];

function toLocalInputValue(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function WorldTimeConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [baseCityTz, setBaseCityTz] = useState("Asia/Seoul");
  const [inputValue, setInputValue] = useState(() => toLocalInputValue(new Date()));

  // interpret the naive input datetime as being in baseCityTz
  const utcMs = useMemo(() => {
    const [datePart, timePart] = inputValue.split("T");
    if (!datePart || !timePart) return 0;
    const [y, m, day] = datePart.split("-").map(Number);
    const [h, min] = timePart.split(":").map(Number);

    // Find the UTC timestamp whose representation in baseCityTz matches the naive input
    const guess = Date.UTC(y, m - 1, day, h, min);
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: baseCityTz,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hour12: false,
    });
    const parts = fmt.formatToParts(new Date(guess));
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
    const asUTCofGuess = Date.UTC(
      Number(get("year")), Number(get("month")) - 1, Number(get("day")),
      Number(get("hour")) % 24, Number(get("minute"))
    );
    const offset = asUTCofGuess - guess;
    return guess - offset;
  }, [inputValue, baseCityTz]);

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
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium">{d.baseCityLabel}</label>
              <select value={baseCityTz} onChange={(e) => setBaseCityTz(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm">
                {CITIES.map((c) => (
                  <option key={c.tz} value={c.tz}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium">{d.baseTimeLabel}</label>
              <input
                type="datetime-local"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-end sm:col-span-1">
              <button
                onClick={() => setInputValue(toLocalInputValue(new Date()))}
                className="w-full rounded-md border px-3 py-2 text-sm hover:bg-muted"
              >
                {d.nowButton}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold">{d.cityTimeLabel}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {CITIES.map((c) => {
            const dateObj = new Date(utcMs);
            const dateStr = new Intl.DateTimeFormat("en-CA", { timeZone: c.tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(dateObj);
            const timeStr = new Intl.DateTimeFormat("en-GB", { timeZone: c.tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(dateObj);
            const isBase = c.tz === baseCityTz;
            return (
              <div key={c.tz} className={`flex items-center justify-between rounded-lg border p-3 ${isBase ? "border-indigo-300 bg-indigo-50" : ""}`}>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg font-bold">{timeStr}</p>
                  <p className="text-xs text-muted-foreground">{dateStr}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
