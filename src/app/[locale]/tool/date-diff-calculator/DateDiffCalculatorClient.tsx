"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

function toYMD(dt: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
}

function diffYMD(start: Date, end: Date) {
  let y = end.getFullYear() - start.getFullYear();
  let m = end.getMonth() - start.getMonth();
  let dd = end.getDate() - start.getDate();
  if (dd < 0) {
    m -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    dd += prevMonth.getDate();
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { y, m, dd };
}

export default function DateDiffCalculator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [startDate, setStartDate] = useState(() => toYMD(new Date()));
  const [endDate, setEndDate] = useState(() => {
    const dt = new Date();
    dt.setMonth(dt.getMonth() + 1);
    return toYMD(dt);
  });

  const result = useMemo(() => {
    const s = new Date(startDate + "T00:00:00");
    const e = new Date(endDate + "T00:00:00");
    const totalDays = Math.round((e.getTime() - s.getTime()) / 86400000);
    const [earlier, later] = s <= e ? [s, e] : [e, s];
    const ymd = diffYMD(earlier, later);
    return { totalDays, ...ymd };
  }, [startDate, endDate]);

  const isFuture = result.totalDays > 0;
  const isPast = result.totalDays < 0;

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

      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">{d.startDateLabel}</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">{d.endDateLabel}</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
            </div>
          </div>

          <div className="rounded-lg bg-indigo-50 p-6 text-center">
            <p className="text-sm font-medium text-indigo-600">{d.resultLabel}</p>
            <p className="mt-2 text-4xl font-bold text-indigo-800">
              {Math.abs(result.totalDays).toLocaleString()} {d.daysUnit}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {result.y}{locale === "ko" ? "년 " : "y "}
              {result.m}{locale === "ko" ? "개월 " : "m "}
              {result.dd}{locale === "ko" ? "일" : "d"}
            </p>
            {isFuture && <p className="mt-2 text-sm font-semibold text-indigo-700">D-{result.totalDays} ({Math.abs(result.totalDays)} {d.dDayBefore})</p>}
            {isPast && <p className="mt-2 text-sm font-semibold text-indigo-700">D+{Math.abs(result.totalDays)} ({Math.abs(result.totalDays)} {d.dDayAfter})</p>}
            {result.totalDays === 0 && <p className="mt-2 text-sm font-semibold text-indigo-700">D-Day ({d.today})</p>}
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
