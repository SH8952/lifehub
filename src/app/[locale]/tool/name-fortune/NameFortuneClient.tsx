"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { data, type Locale } from "./data";

const FORTUNES: Record<Locale, string[]> = {
  ko: ["오늘은 평소보다 집중력이 좋아지는 날입니다. 미뤄둔 일을 처리해보세요.", "작은 행운이 따르는 하루입니다. 주변 사람에게 먼저 인사를 건네보세요.", "조금 신중하게 결정을 내려야 하는 날입니다. 서두르지 마세요.", "오랜만에 만나는 사람에게서 좋은 소식을 들을 수 있습니다.", "금전적으로 작은 이득이 생길 수 있는 날입니다.", "평소 하지 않던 일을 시도해보면 의외의 즐거움을 발견할 거예요.", "휴식이 필요한 날입니다. 무리하지 말고 천천히 가세요.", "대화 중 좋은 아이디어가 떠오를 수 있는 날입니다.", "가까운 사람과의 관계가 더 깊어지는 하루가 될 것입니다.", "작은 실수에 너그러워지는 연습이 필요한 날입니다."],
  en: ["Today your focus is sharper than usual — a good day to tackle that postponed task.", "A small stroke of luck follows you today. Try greeting someone first.", "A day to make decisions carefully. Don't rush.", "You may hear good news from someone you haven't seen in a while.", "A day when a small financial gain might come your way.", "Trying something new today could bring unexpected joy.", "A day that calls for rest. Take it slow and don't push too hard.", "A good idea may come to you during a conversation today.", "Your bond with someone close will grow deeper today.", "A day to practice being gentle with small mistakes."],
  ja: ["今日はいつもより集中力が高まる日です。後回しにしていたことに取り組んでみましょう。", "小さな幸運が訪れる一日です。周りの人に先に挨拶をしてみましょう。", "慎重に決断すべき日です。焦らないでください。", "久しぶりに会う人から良い知らせを聞けるかもしれません。", "金銭的に小さな利益がある日です。", "普段しないことを試してみると意外な楽しさを発見できるでしょう。", "休息が必要な日です。無理せずゆっくり過ごしましょう。", "会話の中で良いアイデアが浮かぶかもしれません。", "親しい人との関係がより深まる一日になるでしょう。", "小さな失敗に寛容になる練習が必要な日です。"],
  es: ["Hoy tu concentración es mejor de lo habitual: buen día para esa tarea que has postergado.", "Una pequeña suerte te acompaña hoy. Intenta saludar primero a alguien.", "Un día para tomar decisiones con cuidado. No te apresures.", "Puede que recibas buenas noticias de alguien a quien no veías hace tiempo.", "Un día en que podría llegarte una pequeña ganancia económica.", "Probar algo nuevo hoy podría traerte una alegría inesperada.", "Un día que pide descanso. Ve despacio y no te exijas demasiado.", "Una buena idea puede surgir hoy en una conversación.", "Tu vínculo con alguien cercano se profundizará hoy.", "Un día para practicar ser indulgente con los pequeños errores."],
};

const COLORS: [string, Record<Locale, string>][] = [
  ["#EF4444", { ko: "빨강", en: "Red", ja: "赤", es: "Rojo" }],
  ["#F97316", { ko: "주황", en: "Orange", ja: "オレンジ", es: "Naranja" }],
  ["#EAB308", { ko: "노랑", en: "Yellow", ja: "黄色", es: "Amarillo" }],
  ["#22C55E", { ko: "초록", en: "Green", ja: "緑", es: "Verde" }],
  ["#06B6D4", { ko: "청록", en: "Teal", ja: "青緑", es: "Verde Azulado" }],
  ["#3B82F6", { ko: "파랑", en: "Blue", ja: "青", es: "Azul" }],
  ["#8B5CF6", { ko: "보라", en: "Purple", ja: "紫", es: "Morado" }],
  ["#EC4899", { ko: "분홍", en: "Pink", ja: "ピンク", es: "Rosa" }],
];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

export default function NameFortune({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [name, setName] = useState("");
  const [result, setResult] = useState<{ stroke: number; fortune: string; color: [string, Record<Locale, string>] } | null>(null);

  const check = () => {
    if (!name.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    const hash = hashString(name.trim() + today);
    const stroke = (hash % 49) + 1;
    const fortuneList = FORTUNES[locale];
    const fortune = fortuneList[hash % fortuneList.length];
    const color = COLORS[hash % COLORS.length];
    setResult({ stroke, fortune, color });
  };

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
            applicationCategory: "EntertainmentApplication",
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
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.nameLabel}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={d.placeholder}
              className="w-full rounded-md border px-3 py-2 text-sm"
              onKeyDown={(e) => e.key === "Enter" && check()}
            />
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Sparkles className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {result && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-600">{d.strokeLabel}</span>
                <span className="text-xl font-bold text-indigo-800">{result.stroke}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-600">{d.luckyColorLabel}</span>
                <span className="flex items-center gap-2 font-semibold text-indigo-800">
                  <span className="h-4 w-4 rounded-full border" style={{ backgroundColor: result.color[0] }} />
                  {result.color[1][locale]}
                </span>
              </div>
              <div>
                <p className="mb-1 text-sm text-indigo-600">{d.fortuneLabel}</p>
                <p className="text-base font-medium text-indigo-900">{result.fortune}</p>
              </div>
            </div>
          )}
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
