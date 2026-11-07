"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { data, type Locale } from "./data";

const ANIMALS: Record<Locale, string>[] = [
  { ko: "쥐", en: "Rat", ja: "ねずみ", es: "Rata" },
  { ko: "소", en: "Ox", ja: "うし", es: "Buey" },
  { ko: "호랑이", en: "Tiger", ja: "とら", es: "Tigre" },
  { ko: "토끼", en: "Rabbit", ja: "うさぎ", es: "Conejo" },
  { ko: "용", en: "Dragon", ja: "たつ", es: "Dragón" },
  { ko: "뱀", en: "Snake", ja: "へび", es: "Serpiente" },
  { ko: "말", en: "Horse", ja: "うま", es: "Caballo" },
  { ko: "양", en: "Goat", ja: "ひつじ", es: "Cabra" },
  { ko: "원숭이", en: "Monkey", ja: "さる", es: "Mono" },
  { ko: "닭", en: "Rooster", ja: "とり", es: "Gallo" },
  { ko: "개", en: "Dog", ja: "いぬ", es: "Perro" },
  { ko: "돼지", en: "Pig", ja: "いのしし", es: "Cerdo" },
];
const FORTUNES: Record<Locale, string[]> = {
  ko: ["오늘은 평소의 저력을 발휘할 수 있는 날입니다.", "작은 변화를 받아들이면 좋은 흐름이 이어질 것입니다.", "주변 사람의 조언에 귀 기울이면 도움이 됩니다.", "꾸준히 해온 일에서 좋은 결실이 보일 수 있습니다.", "새로운 기회를 알아보는 안목이 필요한 날입니다.", "여유를 가지고 하루를 보내는 것이 좋습니다.", "가까운 사람과의 대화에서 힌트를 얻을 수 있습니다.", "자신감을 가지고 행동하면 좋은 결과가 따를 것입니다."],
  en: ["Today is a day to show your usual resilience.", "Embracing a small change will keep the good flow going.", "Listening to advice from those around you will help.", "Steady work may finally show good results today.", "A day that calls for recognizing new opportunities.", "It's good to move through today with some ease.", "A conversation with someone close could give you a helpful hint.", "Acting with confidence will bring good results."],
  ja: ["今日はいつもの実力を発揮できる日です。", "小さな変化を受け入れると良い流れが続くでしょう。", "周りの人の助言に耳を傾けると助けになります。", "積み重ねてきたことで良い結果が見えるかもしれません。", "新しい機会を見極める目が必要な日です。", "余裕を持って一日を過ごすのが良いでしょう。", "親しい人との会話でヒントを得られるかもしれません。", "自信を持って行動すると良い結果がついてくるでしょう。"],
  es: ["Hoy es un día para mostrar tu resiliencia habitual.", "Aceptar un pequeño cambio mantendrá el buen flujo.", "Escuchar los consejos de quienes te rodean ayudará.", "El trabajo constante podría mostrar buenos resultados hoy.", "Un día que pide reconocer nuevas oportunidades.", "Es bueno pasar el día con calma.", "Una conversación con alguien cercano podría darte una pista útil.", "Actuar con confianza traerá buenos resultados."],
};

export default function ChineseZodiacFortune({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [year, setYear] = useState(1995);
  const [result, setResult] = useState<{ animal: string; fortune: string } | null>(null);

  const check = () => {
    // 1900 is Rat, so (year - 1900) mod 12 maps to ANIMALS index
    let idx = ((year - 1900) % 12 + 12) % 12;
    const animal = ANIMALS[idx][locale];
    const today = new Date().toISOString().slice(0, 10);
    let hash = 0;
    const seed = String(year) + today;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    }
    const fortuneList = FORTUNES[locale];
    const fortune = fortuneList[hash % fortuneList.length];
    setResult({ animal, fortune });
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

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.yearLabel}</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              min={1900}
              max={2100}
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Sparkles className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {result && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5 text-center">
              <p className="text-sm text-indigo-600">{d.animalLabel}</p>
              <p className="text-3xl font-bold text-indigo-800">{result.animal}</p>
              <p className="text-sm text-indigo-600">{d.fortuneLabel}</p>
              <p className="text-base text-indigo-900">{result.fortune}</p>
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
