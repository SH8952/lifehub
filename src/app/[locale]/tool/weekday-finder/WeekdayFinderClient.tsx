"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const WEEKDAY_NAMES: Record<Locale, string[]> = {
  ko: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  ja: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
  es: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
};

function toYMD(dt: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

function getISOWeek(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const diff = d.getTime() - firstThursday.getTime();
  return 1 + Math.round(diff / (7 * 86400000));
}

function getDayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date.getTime() - start.getTime()) / 86400000) + 1;
}

export default function WeekdayFinder({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [dateStr, setDateStr] = useState(() => toYMD(new Date()));

  const result = useMemo(() => {
    const dt = new Date(dateStr + "T00:00:00");
    const weekday = dt.getDay();
    return {
      weekdayName: WEEKDAY_NAMES[locale][weekday],
      isWeekend: weekday === 0 || weekday === 6,
      weekNumber: getISOWeek(dt),
      dayOfYear: getDayOfYear(dt),
    };
  }, [dateStr, locale]);

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
        <CardContent className="space-y-6 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.dateLabel}</label>
            <input type="date" value={dateStr} onChange={(e) => setDateStr(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>

          <div className="rounded-lg bg-indigo-50 p-6 text-center">
            <p className="text-sm font-medium text-indigo-600">{d.resultLabel}</p>
            <p className="mt-2 text-4xl font-bold text-indigo-800">{result.weekdayName}</p>
            <p className={`mt-2 text-sm font-semibold ${result.isWeekend ? "text-red-600" : "text-green-700"}`}>
              {result.isWeekend ? d.isWeekend : d.isWeekday}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">{d.weekNumberLabel}</p>
              <p className="text-xl font-bold">{result.weekNumber}</p>
            </div>
            <div className="rounded-lg bg-muted p-3 text-center">
              <p className="text-xs text-muted-foreground">{d.dayOfYearLabel}</p>
              <p className="text-xl font-bold">{result.dayOfYear}</p>
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
