"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { data, type Locale } from "./data";

const QUOTES: Record<Locale, string[]> = {
  ko: ["오늘 걸은 작은 걸음도 결국 길이 됩니다.", "완벽하지 않아도 시작하는 것이 가장 큰 용기입니다.", "지금의 노력은 언젠가 반드시 흔적을 남깁니다.", "쉬어가는 것도 앞으로 나아가는 방법 중 하나입니다.", "비교보다는 어제의 나와 경쟁하세요.", "작은 성취를 쌓다 보면 큰 변화가 됩니다.", "실패는 끝이 아니라 다음 시도를 위한 데이터입니다.", "오늘 하루도 최선을 다한 당신에게 박수를 보냅니다.", "불안함은 준비하고 있다는 증거이기도 합니다.", "느리더라도 멈추지 않는 것이 중요합니다.", "당신의 속도로 가도 충분합니다.", "오늘의 선택이 내일의 자신감이 됩니다.", "힘든 날도 결국 지나갑니다.", "스스로를 믹격하기보다 격려해주세요.", "작은 친절이 하루를 바꿀 수 있습니다.", "포기하지 않는 것 자체가 이미 성공입니다.", "지금 이 순간에 집중하는 것도 능력입니다.", "모든 전문가도 한때는 초보자였습니다.", "당신의 이야기는 아직 끝나지 않았습니다.", "오늘 배운 것은 결코 사라지지 않습니다."],
  en: ["Even the small steps you take today become a path.", "Starting without being perfect is the greatest courage.", "The effort you put in now will leave a mark someday.", "Resting is also a way of moving forward.", "Compete with who you were yesterday, not with others.", "Small wins add up to big change over time.", "Failure isn't the end — it's data for your next attempt.", "A round of applause for doing your best today.", "Anxiety can also be a sign that you're preparing.", "What matters is not stopping, even if you go slowly.", "Going at your own pace is more than enough.", "Today's choices become tomorrow's confidence.", "Even hard days eventually pass.", "Encourage yourself instead of attacking yourself.", "A small kindness can change the whole day.", "Simply not giving up is already a success.", "Focusing on this very moment is also a skill.", "Every expert was once a beginner.", "Your story isn't over yet.", "What you learn today never truly disappears."],
  ja: ["今日歩いた小さな一歩も結局は道になります。", "完璧でなくても始めることが最大の勇気です。", "今の努力はいつか必ず跡を残します。", "休むこともまた前に進む方法の一つです。", "比較するより昨日の自分と競争しましょう。", "小さな達成を積み重ねると大きな変化になります。", "失敗は終わりではなく次の挑戦のためのデータです。", "今日一日も最善を尽くしたあなたに拍手を送ります。", "不安は準備している証でもあります。", "遅くても止まらないことが大切です。", "あなたのペースで進むだけで十分です。", "今日の選択が明日の自信になります。", "つらい日もやがて過ぎ去ります。", "自分を攻撃するより励ましてあげましょう。", "小さな親切が一日を変えることがあります。", "諦めないこと自体がすでに成功です。", "今この瞬間に集中することも能力です。", "どんな専門家も昔は初心者でした。", "あなたの物語はまだ終わっていません。", "今日学んだことは決して消えません。"],
  es: ["Incluso los pequeños pasos de hoy se vuelven un camino.", "Empezar sin ser perfecto es el mayor acto de valentía.", "El esfuerzo de ahora dejará huella algún día.", "Descansar también es una forma de avanzar.", "Compite con quien eras ayer, no con los demás.", "Las pequeñas victorias se acumulan en grandes cambios.", "El fracaso no es el final, es información para el próximo intento.", "Un aplauso por haber dado lo mejor de ti hoy.", "La ansiedad también puede ser señal de que te estás preparando.", "Lo importante es no detenerte, aunque vayas lento.", "Ir a tu propio ritmo ya es suficiente.", "Las decisiones de hoy se vuelven la confianza de mañana.", "Incluso los días difíciles eventualmente pasan.", "Anímate a ti mismo en vez de atacarte.", "Un pequeño gesto amable puede cambiar todo el día.", "Simplemente no rendirte ya es un éxito.", "Concentrarte en este momento también es una habilidad.", "Todo experto alguna vez fue principiante.", "Tu historia aún no ha terminado.", "Lo que aprendes hoy nunca realmente desaparece."],
};

export default function DailyQuoteGenerator({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [quote, setQuote] = useState<string | null>(null);

  const generate = () => {
    const list = QUOTES[locale];
    const idx = Math.floor(Math.random() * list.length);
    setQuote(list[idx]);
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
          <button onClick={generate} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Quote className="h-4 w-4" />
            {d.generateBtn}
          </button>

          {quote && (
            <div className="rounded-lg bg-indigo-50 p-6 text-center">
              <p className="mb-1 text-sm text-indigo-600">{d.quoteLabel}</p>
              <p className="text-lg font-medium text-indigo-900">&ldquo;{quote}&rdquo;</p>
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
