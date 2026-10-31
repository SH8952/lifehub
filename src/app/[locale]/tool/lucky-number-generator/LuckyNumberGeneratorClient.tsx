"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dices } from "lucide-react";
import { data, type Locale } from "./data";

const MESSAGES: Record<Locale, string[]> = {
  ko: ["오늘은 새로운 시작에 좋은 기운이 감도는 날입니다.", "작은 변화가 큰 즐거움으로 이어질 수 있습니다.", "주변 사람과의 협력이 좋은 결과를 가져올 것입니다.", "평소보다 직감을 믿어보는 것이 좋은 하루입니다.", "꾸준함이 빛을 발하는 시기가 다가오고 있습니다.", "뜻밖의 기회가 찾아올 수 있는 날입니다.", "차분한 마음가짐이 행운을 끌어올 것입니다.", "오랜 고민에 대한 답이 떠오를 수 있습니다.", "긍정적인 태도가 주변에 좋은 영향을 줄 것입니다.", "작은 성취에도 충분히 기뻐해도 좋은 날입니다."],
  en: ["Today carries good energy for new beginnings.", "A small change could lead to great joy.", "Cooperating with those around you brings good results.", "Trust your intuition more than usual today.", "A period where your consistency will finally pay off is approaching.", "An unexpected opportunity may come your way today.", "A calm mindset will attract good fortune.", "An answer to a long-standing worry may come to you.", "A positive attitude will have a good influence on those around you.", "It's okay to celebrate even small achievements today."],
  ja: ["今日は新しい始まりに良い気運が流れる日です。", "小さな変化が大きな喜びにつながるかもしれません。", "周りの人との協力が良い結果をもたらすでしょう。", "いつもより直感を信じてみるのが良い一日です。", "積み重ねてきたことが光る時期が近づいています。", "思いがけない機会が訪れる日かもしれません。", "落ち着いた心構えが幸運を引き寄せるでしょう。", "長年の悩みの答えが浮かぶかもしれません。", "ポジティブな態度が周りに良い影響を与えるでしょう。", "小さな成果にも十分に喜んでいい日です。"],
  es: ["Hoy hay buena energía para nuevos comienzos.", "Un pequeño cambio podría traer gran alegría.", "Cooperar con quienes te rodean trae buenos resultados.", "Confía más en tu intuición hoy de lo habitual.", "Se acerca un período en que tu constancia por fin dará frutos.", "Una oportunidad inesperada podría llegar hoy.", "Una mente tranquila atraerá buena fortuna.", "Puede que llegue una respuesta a una preocupación antigua.", "Una actitud positiva influirá bien en quienes te rodean.", "Hoy está bien celebrar incluso los pequeños logros."],
};

export default function LuckyNumberGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [maxRange, setMaxRange] = useState(45);
  const [numbers, setNumbers] = useState<number[] | null>(null);
  const [message, setMessage] = useState("");

  const generate = () => {
    const pool = Array.from({ length: maxRange }, (_, i) => i + 1);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const picked = pool.slice(0, 6).sort((a, b) => a - b);
    const sum = picked.reduce((s, n) => s + n, 0);
    const msgList = MESSAGES[locale];
    setNumbers(picked);
    setMessage(msgList[sum % msgList.length]);
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.rangeLabel}</label>
            <div className="flex gap-2">
              <button onClick={() => setMaxRange(45)} className={`flex-1 rounded-md border px-3 py-2 text-sm ${maxRange === 45 ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                1-45
              </button>
              <button onClick={() => setMaxRange(99)} className={`flex-1 rounded-md border px-3 py-2 text-sm ${maxRange === 99 ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                1-99
              </button>
            </div>
          </div>

          <button onClick={generate} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Dices className="h-4 w-4" />
            {d.generateBtn}
          </button>

          {numbers && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5">
              <p className="text-sm text-indigo-600">{d.numbersLabel}</p>
              <div className="flex flex-wrap gap-2">
                {numbers.map((n) => (
                  <span key={n} className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-sm text-indigo-600">{d.messageLabel}</p>
              <p className="text-base text-indigo-900">{message}</p>
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
