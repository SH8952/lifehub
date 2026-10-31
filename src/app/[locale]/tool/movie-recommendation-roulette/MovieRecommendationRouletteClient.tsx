"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clapperboard } from "lucide-react";
import { data, type Locale } from "./data";

interface GenreInfo {
  name: string;
  reason: string;
}

const GENRES: Record<Locale, GenreInfo>[] = [
  { ko: { name: "잔잔한 드라마", reason: "오늘은 마음을 차분하게 가라앉히고 싶은 날에 어울립니다." }, en: { name: "Quiet Drama", reason: "Fits a day when you want to settle your mind calmly." }, ja: { name: "静かなドラマ", reason: "今日は心を落ち着かせたい日にぴったりです。" }, es: { name: "Drama Tranquilo", reason: "Encaja en un día en que quieres calmar tu mente." } },
  { ko: { name: "신나는 액션", reason: "스트레스를 날려버릴 화려한 액션이 필요한 날입니다." }, en: { name: "Thrilling Action", reason: "A day that calls for dazzling action to blow off stress." }, ja: { name: "ワクワクするアクション", reason: "ストレスを吹き飛ばす華やかなアクションが必要な日です。" }, es: { name: "Acción Emocionante", reason: "Un día que pide acción deslumbrante para liberar estrés." } },
  { ko: { name: "가벼운 코미디", reason: "웃음이 필요한 하루에 딱 맞는 선택입니다." }, en: { name: "Light Comedy", reason: "The perfect pick for a day that needs some laughter." }, ja: { name: "軽いコメディ", reason: "笑いが必要な一日にぴったりの選択です。" }, es: { name: "Comedia Ligera", reason: "La elección perfecta para un día que necesita risas." } },
  { ko: { name: "미스터리 스릴러", reason: "긴장감 있는 전개로 몰입하고 싶은 밤에 추천합니다." }, en: { name: "Mystery Thriller", reason: "Recommended for a night when you want to get absorbed in tense twists." }, ja: { name: "ミステリースリラー", reason: "緊張感のある展開に引き込まれたい夜におすすめです。" }, es: { name: "Thriller de Misterio", reason: "Recomendado para una noche en que quieras giros tensos." } },
  { ko: { name: "따뜻한 로맨스", reason: "마음을 설레게 하는 이야기가 그리운 날입니다." }, en: { name: "Warm Romance", reason: "A day when you're craving a heart-fluttering story." }, ja: { name: "温かいロマンス", reason: "心がときめく物語が恋しい日です。" }, es: { name: "Romance Cálido", reason: "Un día en que anhelas una historia que acelere el corazón." } },
  { ko: { name: "몽환적인 판타지", reason: "현실에서 벗어나 다른 세계로 떠나고 싶은 기분입니다." }, en: { name: "Dreamy Fantasy", reason: "A mood for escaping reality into another world." }, ja: { name: "幻想的なファンタジー", reason: "現実から離れて別世界に旅立ちたい気分です。" }, es: { name: "Fantasía Onírica", reason: "Un ánimo para escapar de la realidad hacia otro mundo." } },
  { ko: { name: "오싹한 공포", reason: "긴장감 넘치는 밤을 보내고 싶다면 이 장르가 좋습니다." }, en: { name: "Eerie Horror", reason: "Great if you want a spine-tingling night." }, ja: { name: "ぞっとするホラー", reason: "緊張感あふれる夜を過ごしたいならこのジャンルが良いです。" }, es: { name: "Horror Espeluznante", reason: "Ideal si quieres una noche que te haga erizar la piel." } },
  { ko: { name: "감동적인 휴먼 드라마", reason: "눈물과 함께 마음이 따뜻해지는 이야기가 필요합니다." }, en: { name: "Moving Human Drama", reason: "A story that warms the heart along with a good cry." }, ja: { name: "感動的なヒューマンドラマ", reason: "涙と共に心が温まる物語が必要です。" }, es: { name: "Drama Humano Conmovedor", reason: "Una historia que calienta el corazón junto con un buen llanto." } },
  { ko: { name: "통쾌한 범죄물", reason: "똑똑한 두뇌싸움을 지켜보고 싶은 기분입니다." }, en: { name: "Gripping Crime Story", reason: "A mood for watching a clever battle of wits." }, ja: { name: "爽快な犯罪物", reason: "賢い頭脳戦を見たい気分です。" }, es: { name: "Historia Criminal Apasionante", reason: "Un ánimo para ver una astuta batalla de ingenio." } },
  { ko: { name: "SF 우주 모험", reason: "넓은 상상력을 자극하는 이야기가 당기는 날입니다." }, en: { name: "Sci-Fi Space Adventure", reason: "A day drawn to stories that spark the imagination." }, ja: { name: "SF宇宙冒険", reason: "広い想像力を刺激する物語に惹かれる日です。" }, es: { name: "Aventura Espacial de Ciencia Ficción", reason: "Un día atraído por historias que estimulan la imaginación." } },
  { ko: { name: "뮤지컬·음악 영화", reason: "음악과 함께 기분을 전환하고 싶은 날입니다." }, en: { name: "Musical / Music Film", reason: "A day to shift your mood with music." }, ja: { name: "ミュージカル・音楽映画", reason: "音楽と共に気分を変えたい日です。" }, es: { name: "Musical / Película Musical", reason: "Un día para cambiar tu ánimo con música." } },
  { ko: { name: "다큐멘터리", reason: "새로운 지식과 영감을 얻고 싶은 날에 추천합니다." }, en: { name: "Documentary", reason: "Recommended for a day when you want new knowledge and inspiration." }, ja: { name: "ドキュメンタリー", reason: "新しい知識とインスピレーションを得たい日におすすめです。" }, es: { name: "Documental", reason: "Recomendado para un día en que quieras nuevo conocimiento e inspiración." } },
  { ko: { name: "성장 이야기", reason: "희망과 용기를 얻고 싶은 날에 잘 맞습니다." }, en: { name: "Coming-of-Age Story", reason: "Fits a day when you want hope and courage." }, ja: { name: "成長物語", reason: "希望と勇気を得たい日にぴったりです。" }, es: { name: "Historia de Crecimiento", reason: "Encaja en un día en que quieras esperanza y valor." } },
  { ko: { name: "애니메이션", reason: "동심으로 돌아가 편안하게 즐기고 싶은 날입니다." }, en: { name: "Animation", reason: "A day to return to childlike wonder and relax." }, ja: { name: "アニメーション", reason: "童心に戻って気楽に楽しみたい日です。" }, es: { name: "Animación", reason: "Un día para volver a la maravilla infantil y relajarte." } },
  { ko: { name: "독립·예술 영화", reason: "색다른 시선의 이야기가 궁금한 날에 어울립니다." }, en: { name: "Indie / Art Film", reason: "Fits a day you're curious about a fresh perspective." }, ja: { name: "インディー・アート映画", reason: "一風変わった視点の物語が気になる日に合います。" }, es: { name: "Película Indie / de Arte", reason: "Encaja en un día con curiosidad por una perspectiva fresca." } },
];

export default function MovieRecommendationRoulette({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [result, setResult] = useState<GenreInfo | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * GENRES.length);
      setResult(GENRES[idx][locale]);
      setSpinning(false);
    }, 400);
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
          <button
            onClick={spin}
            disabled={spinning}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            <Clapperboard className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
            {d.spinBtn}
          </button>

          {result && !spinning && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-6 text-center">
              <p className="text-sm text-indigo-600">{d.genreLabel}</p>
              <p className="text-2xl font-bold text-indigo-800">{result.name}</p>
              <p className="text-sm text-indigo-600">{d.reasonLabel}</p>
              <p className="text-base text-indigo-900">{result.reason}</p>
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
