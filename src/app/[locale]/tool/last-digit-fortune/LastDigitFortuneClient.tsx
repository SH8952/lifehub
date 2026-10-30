"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { data, type Locale } from "./data";

const FORTUNES: Record<Locale, string[]> = {
  ko: ["새로운 시작에 좋은 숫자입니다. 미뤄둔 일을 시작해보세요.", "인간관계에서 좋은 소식이 들려올 숫자입니다.", "재정적으로 신중함이 필요한 날의 숫자입니다.", "창의적인 아이디어가 떠오르기 좋은 숫자입니다.", "변화와 도전에 유리한 숫자입니다.", "안정과 균형을 상징하는 숫자입니다.", "직감을 믿어도 좋은 숫자입니다.", "성취와 결실을 암시하는 숫자입니다.", "휴식과 재충전이 필요한 숫자입니다.", "마무리와 정리에 좋은 숫자입니다."],
  en: ["A good number for new beginnings — start that postponed task.", "A number that brings good news in relationships.", "A number for a day that calls for financial caution.", "A number good for creative ideas to emerge.", "A number favorable for change and challenge.", "A number symbolizing stability and balance.", "A number where you can trust your intuition.", "A number hinting at achievement and results.", "A number calling for rest and recharging.", "A number good for wrapping things up."],
  ja: ["新しい始まりに良い数字です。後回しにしていたことを始めてみましょう。", "人間関係で良い知らせが聞ける数字です。", "金銭的に慎重さが必要な日の数字です。", "創造的なアイデアが浮かびやすい数字です。", "変化と挑戦に有利な数字です。", "安定とバランスを象徴する数字です。", "直感を信じてもいい数字です。", "成果と結実を暗示する数字です。", "休息と再充電が必要な数字です。", "仕上げと整理に良い数字です。"],
  es: ["Un buen número para nuevos comienzos: empieza esa tarea postergada.", "Un número que trae buenas noticias en las relaciones.", "Un número para un día que pide cautela financiera.", "Un número bueno para que surjan ideas creativas.", "Un número favorable para el cambio y el desafío.", "Un número que simboliza estabilidad y equilibrio.", "Un número en que puedes confiar en tu intuición.", "Un número que insinúa logro y resultados.", "Un número que pide descanso y recarga.", "Un número bueno para cerrar asuntos."],
};

export default function LastDigitFortune({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [digit, setDigit] = useState(7);
  const [fortune, setFortune] = useState<string | null>(null);

  const check = () => {
    const today = new Date().toISOString().slice(0, 10);
    let hash = 0;
    const seed = String(digit) + today;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    const list = FORTUNES[locale];
    setFortune(list[hash % list.length]);
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
            <label className="mb-2 block text-sm font-medium">{d.numberLabel}</label>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }, (_, i) => i).map((n) => (
                <button
                  key={n}
                  onClick={() => setDigit(n)}
                  className={`rounded-md border py-2 text-sm font-bold ${digit === n ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Sparkles className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {fortune && (
            <div className="rounded-lg bg-indigo-50 p-6 text-center">
              <p className="mb-1 text-sm text-indigo-600">{d.fortuneLabel}</p>
              <p className="text-lg font-medium text-indigo-900">{fortune}</p>
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
