"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shuffle } from "lucide-react";
import { data, type Locale } from "./data";

interface QAPair {
  a: string;
  b: string;
}

const QUESTIONS: Record<Locale, QAPair>[] = [
  { ko: { a: "평생 여름만 있는 곳에서 살기", b: "평생 겨울만 있는 곳에서 살기" }, en: { a: "Live somewhere with endless summer", b: "Live somewhere with endless winter" }, ja: { a: "一生夏だけの場所で暮らす", b: "一生冬だけの場所で暮らす" }, es: { a: "Vivir en un lugar con verano eterno", b: "Vivir en un lugar con invierno eterno" } },
  { ko: { a: "미래를 볼 수 있는 능력", b: "과거를 다시 경험할 수 있는 능력" }, en: { a: "The ability to see the future", b: "The ability to relive the past" }, ja: { a: "未来が見える能力", b: "過去を再び体験できる能力" }, es: { a: "La capacidad de ver el futuro", b: "La capacidad de revivir el pasado" } },
  { ko: { a: "돈은 많지만 시간이 없는 삶", b: "시간은 많지만 돈이 없는 삶" }, en: { a: "A life with lots of money but no time", b: "A life with lots of time but no money" }, ja: { a: "お金はあるが時間がない人生", b: "時間はあるがお金がない人生" }, es: { a: "Una vida con mucho dinero pero sin tiempo", b: "Una vida con mucho tiempo pero sin dinero" } },
  { ko: { a: "매일 같은 음식만 먹기", b: "매일 새로운 음식에 도전하기" }, en: { a: "Eat the same food every day", b: "Try a new food every day" }, ja: { a: "毎日同じ食べ物だけ食べる", b: "毎日新しい食べ物に挑戦する" }, es: { a: "Comer lo mismo todos los días", b: "Probar algo nuevo todos los días" } },
  { ko: { a: "남들의 생각을 읽을 수 있는 능력", b: "내 생각을 숨길 수 없는 대신 하늘을 날 수 있는 능력" }, en: { a: "The power to read others' minds", b: "The power to fly, but unable to hide your own thoughts" }, ja: { a: "他人の考えを読める能力", b: "自分の考えを隠せない代わりに空を飛べる能力" }, es: { a: "El poder de leer la mente de otros", b: "El poder de volar, pero sin poder ocultar tus pensamientos" } },
  { ko: { a: "도시에서 평생 살기", b: "자연 속에서 평생 살기" }, en: { a: "Live in the city forever", b: "Live in nature forever" }, ja: { a: "都市で一生暮らす", b: "自然の中で一生暮らす" }, es: { a: "Vivir en la ciudad para siempre", b: "Vivir en la naturaleza para siempre" } },
  { ko: { a: "좋아하는 일을 적게 벌며 하기", b: "싫어하는 일을 많이 벌며 하기" }, en: { a: "Do what you love for less pay", b: "Do what you dislike for more pay" }, ja: { a: "好きなことを少なく稼いでやる", b: "嫌いなことを多く稼いでやる" }, es: { a: "Hacer lo que amas por menos dinero", b: "Hacer lo que no te gusta por más dinero" } },
  { ko: { a: "한 가지 음식만 평생 먹기", b: "하루에 한 끼만 평생 먹기" }, en: { a: "Eat only one kind of food forever", b: "Eat only one meal a day forever" }, ja: { a: "一生一種類の食べ物だけ食べる", b: "一生一日一食だけ食べる" }, es: { a: "Comer solo un tipo de comida para siempre", b: "Comer solo una comida al día para siempre" } },
  { ko: { a: "조용한 시골 마을에서 살기", b: "복잡한 대도시에서 살기" }, en: { a: "Live in a quiet rural village", b: "Live in a busy big city" }, ja: { a: "静かな田舎の村で暮らす", b: "複雑な大都市で暮らす" }, es: { a: "Vivir en un pueblo rural tranquilo", b: "Vivir en una gran ciudad ajetreada" } },
  { ko: { a: "매일 아침 일찍 일어나기", b: "매일 밤늦게까지 깨어 있기" }, en: { a: "Wake up early every morning", b: "Stay up late every night" }, ja: { a: "毎朝早く起きる", b: "毎晩遅くまで起きている" }, es: { a: "Levantarte temprano cada mañana", b: "Quedarte despierto hasta tarde cada noche" } },
  { ko: { a: "평생 한 가지 색만 보고 살기", b: "평생 소리 없는 세상에서 살기" }, en: { a: "See only one color for the rest of your life", b: "Live in a world with no sound for the rest of your life" }, ja: { a: "一生一つの色だけ見て生きる", b: "一生音のない世界で生きる" }, es: { a: "Ver solo un color por el resto de tu vida", b: "Vivir en un mundo sin sonido por el resto de tu vida" } },
  { ko: { a: "완벽한 기억력 갖기", b: "완벽한 집중력 갖기" }, en: { a: "Have a perfect memory", b: "Have perfect focus" }, ja: { a: "完璧な記憶力を持つ", b: "完璧な集中力を持つ" }, es: { a: "Tener una memoria perfecta", b: "Tener una concentración perfecta" } },
  { ko: { a: "1년 동안 해외에서 혼자 살기", b: "1년 동안 집에서 한 발짝도 안 나가기" }, en: { a: "Live alone abroad for a year", b: "Never leave home for a year" }, ja: { a: "1年間海外で一人暮らしする", b: "1年間家から一歩も出ない" }, es: { a: "Vivir solo en el extranjero por un año", b: "No salir de casa por un año" } },
  { ko: { a: "항상 정직하지만 때로 상처 주는 말을 하기", b: "항상 친절하지만 가끔 거짓말을 하기" }, en: { a: "Always be honest, even if sometimes hurtful", b: "Always be kind, even if sometimes dishonest" }, ja: { a: "常に正直だが時に傷つく言葉を言う", b: "常に親切だがときどき嘘をつく" }, es: { a: "Ser siempre honesto, aunque a veces duela", b: "Ser siempre amable, aunque a veces mientas" } },
  { ko: { a: "좋아하는 일을 혼자 하기", b: "그냥 그런 일을 좋은 동료들과 함께 하기" }, en: { a: "Do what you love alone", b: "Do an okay job with great coworkers" }, ja: { a: "好きなことを一人でやる", b: "普通の仕事を良い同僚とやる" }, es: { a: "Hacer lo que amas solo", b: "Hacer un trabajo normal con buenos compañeros" } },
  { ko: { a: "매일 똑같은 하루가 반복되기", b: "매일 완전히 예측 불가능한 하루를 보내기" }, en: { a: "Relive the exact same day every day", b: "Have a completely unpredictable day every day" }, ja: { a: "毎日同じ一日が繰り返される", b: "毎日完全に予測不可能な一日を過ごす" }, es: { a: "Revivir exactamente el mismo día cada día", b: "Tener un día completamente impredecible cada día" } },
  { ko: { a: "10년치 일을 한 번에 몰아서 하기", b: "평생 조금씩 나눠서 일하기" }, en: { a: "Do 10 years of work all at once", b: "Spread the work out gradually over a lifetime" }, ja: { a: "10年分の仕事を一気にやる", b: "一生少しずつ分けて働く" }, es: { a: "Hacer 10 años de trabajo de una vez", b: "Repartir el trabajo gradualmente durante toda la vida" } },
  { ko: { a: "모두가 나를 좋아하지만 진짜 친구는 없기", b: "몇 명만 나를 알지만 깊은 우정을 나누기" }, en: { a: "Be liked by everyone but have no real friends", b: "Be known by only a few but share deep friendship" }, ja: { a: "みんなに好かれるが本当の友達はいない", b: "少数の人だけ知っているが深い友情を分かち合う" }, es: { a: "Ser querido por todos pero sin amigos reales", b: "Ser conocido por pocos pero con una amistad profunda" } },
  { ko: { a: "원하는 것을 다 가질 수 있지만 아무도 모르게", b: "적게 가지지만 모두에게 인정받으며" }, en: { a: "Have everything you want, but secretly", b: "Have little, but be recognized by everyone" }, ja: { a: "欲しいものを全部持てるが誰にも知られない", b: "少なく持つがみんなに認められる" }, es: { a: "Tener todo lo que quieras, pero en secreto", b: "Tener poco, pero ser reconocido por todos" } },
  { ko: { a: "매일 새로운 사람을 만나기", b: "평생 같은 사람들과만 깊게 지내기" }, en: { a: "Meet a new person every day", b: "Spend your whole life deeply with the same people" }, ja: { a: "毎日新しい人に会う", b: "一生同じ人たちと深く過ごす" }, es: { a: "Conocer a una persona nueva cada día", b: "Pasar toda la vida profundamente con las mismas personas" } },
];

export default function WouldYouRather({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [current, setCurrent] = useState<QAPair | null>(null);
  const [selected, setSelected] = useState<"a" | "b" | null>(null);

  const draw = () => {
    const idx = Math.floor(Math.random() * QUESTIONS.length);
    setCurrent(QUESTIONS[idx][locale]);
    setSelected(null);
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
          <button onClick={draw} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Shuffle className="h-4 w-4" />
            {d.drawBtn}
          </button>

          {current && (
            <div className="space-y-3">
              <button
                onClick={() => setSelected("a")}
                className={`w-full rounded-md border p-4 text-left text-sm ${selected === "a" ? "border-indigo-600 bg-indigo-50 font-semibold text-indigo-800" : "hover:bg-muted"}`}
              >
                <span className="mr-2 font-bold text-indigo-600">{d.optionALabel}.</span>
                {current.a}
              </button>
              <p className="text-center text-xs font-bold text-muted-foreground">{d.vsLabel}</p>
              <button
                onClick={() => setSelected("b")}
                className={`w-full rounded-md border p-4 text-left text-sm ${selected === "b" ? "border-indigo-600 bg-indigo-50 font-semibold text-indigo-800" : "hover:bg-muted"}`}
              >
                <span className="mr-2 font-bold text-indigo-600">{d.optionBLabel}.</span>
                {current.b}
              </button>

              {selected && (
                <p className="text-center text-sm text-indigo-600">
                  {d.selectedLabel}: {selected === "a" ? d.optionALabel : d.optionBLabel}
                </p>
              )}
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
