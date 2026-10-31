"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";
import { data, type Locale } from "./data";

const AFFIRMATIONS: Record<Locale, string[]> = {
  ko: ["나는 오늘 주어진 시간에 최선을 다할 것이다.", "나는 작은 실수에도 나 자신을 너그럽게 대할 것이다.", "나는 오늘 하루도 한 걸음씩 나아갈 것이다.", "나는 비교하지 않고 나만의 속도로 갈 것이다.", "나는 어려운 순간에도 숨을 고르고 다시 시작할 것이다.", "나는 오늘 배운 것을 내일의 자산으로 만들 것이다.", "나는 스스로를 믿고 용기 있게 도전할 것이다.", "나는 지금의 노력이 헛되지 않음을 알고 있다.", "나는 오늘 나에게 친절한 말을 건넬 것이다.", "나는 완벽하지 않아도 꾸준히 해나갈 것이다.", "나는 작은 성취에도 충분히 기뻐할 것이다.", "나는 오늘도 나답게 하루를 보낼 것이다.", "나는 힘든 날도 결국 지나간다는 것을 믿는다.", "나는 주변의 소중한 사람들에게 감사를 표현할 것이다.", "나는 오늘 하나의 좋은 습관을 지킬 것이다.", "나는 실패를 두려워하지 않고 계속 시도할 것이다.", "나는 나의 속도를 존중하며 나아갈 것이다.", "나는 오늘도 건강한 몸과 마음을 챙길 것이다.", "나는 긍정적인 시선으로 오늘을 바라볼 것이다.", "나는 지금 이 순간에 충실할 것이다."],
  en: ["Today I will do my best with the time I have.", "I will be gentle with myself even over small mistakes.", "I will take one more step forward today.", "I will move at my own pace, without comparing myself to others.", "Even in hard moments, I will take a breath and start again.", "I will turn what I learn today into tomorrow's asset.", "I will trust myself and take on challenges with courage.", "I know that the effort I'm making now is not wasted.", "I will speak kindly to myself today.", "I will keep going steadily, even without being perfect.", "I will fully celebrate even small achievements.", "I will spend today being true to myself.", "I believe that even hard days eventually pass.", "I will express gratitude to the people who matter to me.", "I will keep one good habit today.", "I will keep trying without fearing failure.", "I will move forward respecting my own pace.", "I will take care of my body and mind today too.", "I will look at today with a positive view.", "I will stay present in this very moment."],
  ja: ["私は今日与えられた時間に最善を尽くす。", "私は小さな失敗にも自分自身を大らかに扱う。", "私は今日も一歩ずつ前進する。", "私は比較せず自分だけのペースで進む。", "私は困難な瞬間にも息を整えて再び始める。", "私は今日学んだことを明日の資産にする。", "私は自分を信じて勇気を持って挑戦する。", "私は今の努力が無駄にならないことを知っている。", "私は今日自分に優しい言葉をかける。", "私は完璧でなくても地道に続けていく。", "私は小さな成果にも十分に喜ぶ。", "私は今日も自分らしく一日を過ごす。", "私はつらい日もやがて過ぎ去ることを信じる。", "私は周りの大切な人々に感謝を表す。", "私は今日一つの良い習慣を守る。", "私は失敗を恐れず続けて挑戦する。", "私は自分のペースを尊重して進む。", "私は今日も健康な体と心を整える。", "私はポジティブな視点で今日を見る。", "私はこの瞬間に充実する。"],
  es: ["Hoy haré lo mejor con el tiempo que tengo.", "Seré indulgente conmigo mismo incluso con pequeños errores.", "Daré un paso más hacia adelante hoy.", "Avanzaré a mi propio ritmo, sin compararme con otros.", "Incluso en momentos difíciles, respiraré y empezaré de nuevo.", "Convertiré lo que aprenda hoy en el activo de mañana.", "Confiaré en mí mismo y enfrentaré los retos con valentía.", "Sé que el esfuerzo que hago ahora no es en vano.", "Me hablaré con amabilidad hoy.", "Seguiré adelante con constancia, aunque no sea perfecto.", "Celebraré plenamente incluso los pequeños logros.", "Pasaré el día siendo fiel a mí mismo.", "Creo que incluso los días difíciles eventualmente pasan.", "Expresaré gratitud a las personas que me importan.", "Mantendré un buen hábito hoy.", "Seguiré intentando sin temer al fracaso.", "Avanzaré respetando mi propio ritmo.", "Cuidaré mi cuerpo y mente hoy también.", "Veré el día de hoy con una mirada positiva.", "Permaneceré presente en este momento."],
};

export default function DailyAffirmationGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [affirmation, setAffirmation] = useState<string | null>(null);

  const generate = () => {
    const list = AFFIRMATIONS[locale];
    const idx = Math.floor(Math.random() * list.length);
    setAffirmation(list[idx]);
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
          <button onClick={generate} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Flame className="h-4 w-4" />
            {d.generateBtn}
          </button>

          {affirmation && (
            <div className="rounded-lg bg-indigo-50 p-6 text-center">
              <p className="mb-1 text-sm text-indigo-600">{d.affirmationLabel}</p>
              <p className="text-lg font-medium text-indigo-900">{affirmation}</p>
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
