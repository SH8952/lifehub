"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { data, type Locale } from "./data";

interface GenreInfo {
  name: string;
  reason: string;
}

const GENRES: Record<Locale, GenreInfo>[] = [
  { ko: { name: "몰입감 있는 장편 소설", reason: "긴 호흡으로 이야기에 푹 빠지고 싶은 날입니다." }, en: { name: "Immersive Long Novel", reason: "A day to lose yourself in a long, absorbing story." }, ja: { name: "没入感のある長編小説", reason: "長い呼吸で物語にすっかり浸りたい日です。" }, es: { name: "Novela Larga e Inmersiva", reason: "Un día para perderte en una historia larga y absorbente." } },
  { ko: { name: "짧은 단편집", reason: "자투리 시간에 가볍게 읽고 싶은 날입니다." }, en: { name: "Short Story Collection", reason: "A day for light reading in spare moments." }, ja: { name: "短編集", reason: "ちょっとした時間に気軽に読みたい日です。" }, es: { name: "Colección de Cuentos", reason: "Un día para lectura ligera en momentos libres." } },
  { ko: { name: "자기계발서", reason: "동기부여와 에너지가 필요한 날입니다." }, en: { name: "Self-Improvement Book", reason: "A day you need motivation and energy." }, ja: { name: "自己啓発書", reason: "モチベーションとエネルギーが必要な日です。" }, es: { name: "Libro de Autoayuda", reason: "Un día en que necesitas motivación y energía." } },
  { ko: { name: "추리·범죄 소설", reason: "머리를 굴리며 추리하고 싶은 기분입니다." }, en: { name: "Mystery / Crime Novel", reason: "A mood for racking your brain over a puzzle." }, ja: { name: "推理・犯罪小説", reason: "頭を使って推理したい気分です。" }, es: { name: "Novela de Misterio / Crimen", reason: "Un ánimo para romperte la cabeza con un acertijo." } },
  { ko: { name: "잔잔한 에세이", reason: "마음을 편안하게 가라앉히고 싶은 날에 어울립니다." }, en: { name: "Gentle Essay Collection", reason: "Fits a day you want to settle your mind calmly." }, ja: { name: "静かなエッセイ", reason: "心を落ち着かせたい日に合います。" }, es: { name: "Colección de Ensayos Tranquilos", reason: "Encaja en un día para calmar tu mente." } },
  { ko: { name: "판타지 모험 소설", reason: "현실을 잠시 벗어나 상상의 세계로 떠나고 싶습니다." }, en: { name: "Fantasy Adventure Novel", reason: "A wish to briefly escape reality into an imaginary world." }, ja: { name: "ファンタジー冒険小説", reason: "現実を少し離れて想像の世界に旅立ちたい気分です。" }, es: { name: "Novela de Aventura Fantástica", reason: "Un deseo de escapar brevemente hacia un mundo imaginario." } },
  { ko: { name: "로맨스 소설", reason: "따뜻하고 설레는 이야기가 그리운 날입니다." }, en: { name: "Romance Novel", reason: "A day craving a warm, heart-fluttering story." }, ja: { name: "ロマンス小説", reason: "温かくときめく物語が恋しい日です。" }, es: { name: "Novela Romántica", reason: "Un día que anhela una historia cálida y conmovedora." } },
  { ko: { name: "역사·인문 교양서", reason: "깊이 있는 지식과 통찰이 궁금한 날입니다." }, en: { name: "History / Humanities Nonfiction", reason: "A day curious about deep knowledge and insight." }, ja: { name: "歴史・人文教養書", reason: "深い知識と洞察が気になる日です。" }, es: { name: "Libro de Historia / Humanidades", reason: "Un día con curiosidad por conocimiento profundo." } },
  { ko: { name: "SF 소설", reason: "미래와 상상력을 자극하는 이야기가 당기는 날입니다." }, en: { name: "Science Fiction Novel", reason: "A day drawn to stories that spark imagination about the future." }, ja: { name: "SF小説", reason: "未来と想像力を刺激する物語に惹かれる日です。" }, es: { name: "Novela de Ciencia Ficción", reason: "Un día atraído por historias sobre el futuro." } },
  { ko: { name: "시집", reason: "짧고 깊은 울림이 있는 글이 필요한 날입니다." }, en: { name: "Poetry Collection", reason: "A day needing short but deeply resonant words." }, ja: { name: "詩集", reason: "短く深い響きのある文章が必要な日です。" }, es: { name: "Colección de Poesía", reason: "Un día que necesita palabras cortas pero profundas." } },
  { ko: { name: "경제·재테크 도서", reason: "돈과 미래를 계획하고 싶은 마음이 드는 날입니다." }, en: { name: "Finance / Investing Book", reason: "A day feeling inclined to plan your money and future." }, ja: { name: "経済・資産形成本", reason: "お金と将来を計画したい気持ちになる日です。" }, es: { name: "Libro de Finanzas / Inversión", reason: "Un día con ganas de planificar tu dinero y futuro." } },
  { ko: { name: "공포·오컬트 소설", reason: "오싹한 긴장감을 느끼고 싶은 밤입니다." }, en: { name: "Horror / Occult Novel", reason: "A night craving a spine-tingling thrill." }, ja: { name: "ホラー・オカルト小説", reason: "ぞっとする緊張感を感じたい夜です。" }, es: { name: "Novela de Horror / Oculto", reason: "Una noche que anhela un escalofrío emocionante." } },
  { ko: { name: "그래픽노블·만화", reason: "글보다는 그림으로 이야기를 즐기고 싶습니다." }, en: { name: "Graphic Novel / Comics", reason: "A wish to enjoy a story through art rather than text." }, ja: { name: "グラフィックノベル・漫画", reason: "文章よりも絵で物語を楽しみたい気分です。" }, es: { name: "Novela Gráfica / Cómics", reason: "Un deseo de disfrutar una historia a través del arte." } },
  { ko: { name: "여행 에세이", reason: "어딘가로 떠나고 싶은 마음이 드는 날입니다." }, en: { name: "Travel Essay", reason: "A day you feel like going somewhere far away." }, ja: { name: "旅行エッセイ", reason: "どこかへ出かけたい気持ちになる日です。" }, es: { name: "Ensayo de Viaje", reason: "Un día en que sientes ganas de ir a algún lugar lejano." } },
  { ko: { name: "고전 문학", reason: "시간이 지나도 변하지 않는 울림을 느끼고 싶습니다." }, en: { name: "Classic Literature", reason: "A wish to feel a resonance that never fades with time." }, ja: { name: "古典文学", reason: "時が経っても変わらない響きを感じたいです。" }, es: { name: "Literatura Clásica", reason: "Un deseo de sentir una resonancia que no se desvanece con el tiempo." } },
];

export default function BookRecommendationRoulette({ initialLocale }: { initialLocale: Locale }) {
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
            <BookOpen className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
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
