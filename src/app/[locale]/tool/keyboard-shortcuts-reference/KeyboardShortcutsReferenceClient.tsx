"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type OS = "windows" | "mac";

interface Shortcut {
  action: string;
  win: string;
  mac: string;
}

const SHORTCUTS: Record<string, Shortcut[]> = {
  general: [
    { action: "복사 / Copy", win: "Ctrl + C", mac: "⌘ + C" },
    { action: "붙여넣기 / Paste", win: "Ctrl + V", mac: "⌘ + V" },
    { action: "잘라내기 / Cut", win: "Ctrl + X", mac: "⌘ + X" },
    { action: "실행 취소 / Undo", win: "Ctrl + Z", mac: "⌘ + Z" },
    { action: "다시 실행 / Redo", win: "Ctrl + Y", mac: "⌘ + Shift + Z" },
    { action: "저장 / Save", win: "Ctrl + S", mac: "⌘ + S" },
    { action: "전체 선택 / Select All", win: "Ctrl + A", mac: "⌘ + A" },
    { action: "찾기 / Find", win: "Ctrl + F", mac: "⌘ + F" },
    { action: "인쇄 / Print", win: "Ctrl + P", mac: "⌘ + P" },
  ],
  text: [
    { action: "굵게 / Bold", win: "Ctrl + B", mac: "⌘ + B" },
    { action: "기울임 / Italic", win: "Ctrl + I", mac: "⌘ + I" },
    { action: "밑줄 / Underline", win: "Ctrl + U", mac: "⌘ + U" },
    { action: "줄 끝으로 / End of Line", win: "End", mac: "⌘ + →" },
    { action: "줄 처음으로 / Start of Line", win: "Home", mac: "⌘ + ←" },
    { action: "단어 단위 이동 / Move by Word", win: "Ctrl + → / ←", mac: "⌥ + → / ←" },
  ],
  browser: [
    { action: "새 탭 / New Tab", win: "Ctrl + T", mac: "⌘ + T" },
    { action: "탭 닫기 / Close Tab", win: "Ctrl + W", mac: "⌘ + W" },
    { action: "닫은 탭 복구 / Reopen Closed Tab", win: "Ctrl + Shift + T", mac: "⌘ + Shift + T" },
    { action: "주소창 이동 / Focus Address Bar", win: "Ctrl + L", mac: "⌘ + L" },
    { action: "새로고침 / Refresh", win: "Ctrl + R / F5", mac: "⌘ + R" },
    { action: "시크릿 창 / Incognito Window", win: "Ctrl + Shift + N", mac: "⌘ + Shift + N" },
  ],
  window: [
    { action: "앱 전환 / Switch Apps", win: "Alt + Tab", mac: "⌘ + Tab" },
    { action: "창 최소화 / Minimize", win: "Win + ↓", mac: "⌘ + M" },
    { action: "창 닫기 / Close Window", win: "Alt + F4", mac: "⌘ + Q" },
    { action: "바탕화면 보기 / Show Desktop", win: "Win + D", mac: "⌘ + F3" },
    { action: "작업 보기 / Task View", win: "Win + Tab", mac: "⌃ + ↑" },
  ],
  capture: [
    { action: "전체 화면 캡처 / Full Screenshot", win: "Win + PrtScn", mac: "⌘ + Shift + 3" },
    { action: "영역 캡처 / Area Screenshot", win: "Win + Shift + S", mac: "⌘ + Shift + 4" },
    { action: "화면 녹화 / Screen Recording", win: "Win + Alt + R", mac: "⌘ + Shift + 5" },
  ],
};

export default function KeyboardShortcutsReference({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [os, setOs] = useState<OS>("windows");

  const CATEGORIES = [
    { key: "general", label: d.catGeneral },
    { key: "text", label: d.catText },
    { key: "browser", label: d.catBrowser },
    { key: "window", label: d.catWindow },
    { key: "capture", label: d.catCapture },
  ];

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

      <div className="mb-6 flex gap-2">
        <button onClick={() => setOs("windows")} className={`rounded-md px-4 py-2 text-sm font-medium ${os === "windows" ? "bg-indigo-600 text-white" : "bg-muted"}`}>
          {d.osWindows}
        </button>
        <button onClick={() => setOs("mac")} className={`rounded-md px-4 py-2 text-sm font-medium ${os === "mac" ? "bg-indigo-600 text-white" : "bg-muted"}`}>
          {d.osMac}
        </button>
      </div>

      <div className="space-y-6">
        {CATEGORIES.map((cat) => (
          <Card key={cat.key}>
            <CardContent className="p-5">
              <p className="mb-3 text-sm font-semibold">{cat.label}</p>
              <div className="space-y-1.5">
                {SHORTCUTS[cat.key].map((sc, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
                    <span>{sc.action}</span>
                    <kbd className="rounded border bg-white px-2 py-1 font-mono text-xs shadow-sm">
                      {os === "windows" ? sc.win : sc.mac}
                    </kbd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
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
