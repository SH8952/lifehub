"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import { data, type Locale } from "./data";

interface ThemeInfo {
  name: string;
  reason: string;
}

const THEMES: Record<Locale, ThemeInfo>[] = [
  { ko: { name: "한적한 바닷가 마을", reason: "파도 소리를 들으며 느긋하게 쉬고 싶은 기분입니다." }, en: { name: "Quiet Seaside Village", reason: "A mood for relaxing slowly to the sound of waves." }, ja: { name: "静かな海辺の村", reason: "波の音を聞きながらゆっくり休みたい気分です。" }, es: { name: "Pueblo Costero Tranquilo", reason: "Un ánimo para relajarte lentamente con el sonido de las olas." } },
  { ko: { name: "활기찬 대도시 탐방", reason: "새로운 자극과 활력이 필요한 날입니다." }, en: { name: "Vibrant Big City Exploration", reason: "A day needing new stimulation and energy." }, ja: { name: "活気ある大都市探訪", reason: "新しい刺激と活力が必要な日です。" }, es: { name: "Exploración de una Gran Ciudad Vibrante", reason: "Un día que necesita nueva energía y estímulo." } },
  { ko: { name: "눈 덮인 산속 마을", reason: "고요하고 깨끗한 공기 속에서 재충전하고 싶습니다." }, en: { name: "Snow-Covered Mountain Village", reason: "A wish to recharge in quiet, clean air." }, ja: { name: "雪に覆われた山里", reason: "静かで澄んだ空気の中で再充電したいです。" }, es: { name: "Pueblo de Montaña Nevado", reason: "Un deseo de recargar energías en aire tranquilo y limpio." } },
  { ko: { name: "전통이 살아있는 고즈넉한 마을", reason: "느린 시간 속에서 역사를 느끼고 싶은 날입니다." }, en: { name: "Historic Village with Living Tradition", reason: "A day to feel history unfold in slow time." }, ja: { name: "伝統が息づく静かな村", reason: "ゆったりした時間の中で歴史を感じたい日です。" }, es: { name: "Pueblo Histórico con Tradición Viva", reason: "Un día para sentir la historia en un tiempo lento." } },
  { ko: { name: "이국적인 열대 섬", reason: "뜨거운 햇살과 색다른 풍경이 그리운 날입니다." }, en: { name: "Exotic Tropical Island", reason: "A day craving hot sun and a different scenery." }, ja: { name: "異国情緒ある熱帯の島", reason: "強い日差しと違った風景が恋しい日です。" }, es: { name: "Isla Tropical Exótica", reason: "Un día que anhela sol fuerte y un paisaje distinto." } },
  { ko: { name: "미식 여행 (맛집 탐방)", reason: "맛있는 음식으로 힐링하고 싶은 기분입니다." }, en: { name: "Food & Culinary Journey", reason: "A mood for healing through delicious food." }, ja: { name: "グルメ旅行（食べ歩き）", reason: "美味しい食べ物で癒されたい気分です。" }, es: { name: "Viaje Gastronómico", reason: "Un ánimo para sanar a través de comida deliciosa." } },
  { ko: { name: "드넓은 자연 속 캠핑", reason: "도심을 벗어나 자연과 가까워지고 싶습니다." }, en: { name: "Camping in Wide Open Nature", reason: "A wish to leave the city and get close to nature." }, ja: { name: "広大な自然の中のキャンプ", reason: "都心を離れて自然に近づきたいです。" }, es: { name: "Camping en la Naturaleza Abierta", reason: "Un deseo de dejar la ciudad y acercarte a la naturaleza." } },
  { ko: { name: "예술과 건축이 가득한 도시", reason: "아름다운 풍경과 영감을 찾고 싶은 날입니다." }, en: { name: "City Full of Art and Architecture", reason: "A day seeking beautiful scenery and inspiration." }, ja: { name: "芸術と建築が溢れる都市", reason: "美しい風景とインスピレーションを探したい日です。" }, es: { name: "Ciudad Llena de Arte y Arquitectura", reason: "Un día buscando paisajes hermosos e inspiración." } },
  { ko: { name: "온천과 휴식이 있는 여행", reason: "몸과 마음을 완전히 쉬게 하고 싶은 날입니다." }, en: { name: "Hot Springs & Relaxation Retreat", reason: "A day to let your body and mind fully rest." }, ja: { name: "温泉と休息の旅", reason: "心と体を完全に休ませたい日です。" }, es: { name: "Retiro de Aguas Termales y Relajación", reason: "Un día para dejar que cuerpo y mente descansen por completo." } },
  { ko: { name: "오로라나 별이 가득한 하늘 여행", reason: "경이로운 자연 현상을 직접 보고 싶습니다." }, en: { name: "Aurora or Star-Filled Sky Journey", reason: "A wish to witness an awe-inspiring natural phenomenon." }, ja: { name: "オーロラや星空の旅", reason: "驚異的な自然現象を直接見たいです。" }, es: { name: "Viaje de Auroras o Cielos Estrellados", reason: "Un deseo de ver un fenómeno natural asombroso." } },
  { ko: { name: "배낭여행 (자유로운 일정)", reason: "정해진 틀 없이 자유롭게 떠나고 싶은 날입니다." }, en: { name: "Backpacking (Free & Flexible Itinerary)", reason: "A day to travel freely without a fixed plan." }, ja: { name: "バックパック旅行（自由な日程）", reason: "決まった枠なく自由に出かけたい日です。" }, es: { name: "Mochilero (Itinerario Libre y Flexible)", reason: "Un día para viajar libremente sin un plan fijo." } },
  { ko: { name: "가족과 함께하는 테마파크 여행", reason: "순수한 즐거움과 웃음이 필요한 날입니다." }, en: { name: "Theme Park Trip with Family", reason: "A day needing pure fun and laughter." }, ja: { name: "家族と一緒のテーマパーク旅行", reason: "純粋な楽しさと笑いが必要な日です。" }, es: { name: "Viaje a un Parque Temático en Familia", reason: "Un día que necesita diversión pura y risas." } },
  { ko: { name: "섬과 섬을 잇는 크루즈 여행", reason: "물 위에서 느긋하게 풍경을 즐기고 싶습니다." }, en: { name: "Island-Hopping Cruise", reason: "A wish to leisurely enjoy scenery over water." }, ja: { name: "島々を巡るクルーズ旅行", reason: "水上でゆったり風景を楽しみたいです。" }, es: { name: "Crucero entre Islas", reason: "Un deseo de disfrutar el paisaje con calma sobre el agua." } },
  { ko: { name: "사진 찍기 좋은 포토 스팟 탐방", reason: "인상적인 순간을 기록으로 남기고 싶은 날입니다." }, en: { name: "Photo-Worthy Scenic Spots", reason: "A day to capture memorable moments." }, ja: { name: "写真が映えるフォトスポット巡り", reason: "印象的な瞬間を記録に残したい日です。" }, es: { name: "Lugares Fotogénicos", reason: "Un día para capturar momentos memorables." } },
  { ko: { name: "조용한 도서관·북카페 투어", reason: "책과 함께 느린 하루를 보내고 싶습니다." }, en: { name: "Quiet Library & Book Cafe Tour", reason: "A wish to spend a slow day with books." }, ja: { name: "静かな図書館・ブックカフェ巡り", reason: "本と一緒にゆっくりした一日を過ごしたいです。" }, es: { name: "Tour de Biblioteca y Cafés Literarios Tranquilos", reason: "Un deseo de pasar un día lento con libros." } },
];

export default function TravelDestinationRoulette({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [result, setResult] = useState<ThemeInfo | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * THEMES.length);
      setResult(THEMES[idx][locale]);
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
            <Plane className={`h-4 w-4 ${spinning ? "animate-spin" : ""}`} />
            {d.spinBtn}
          </button>

          {result && !spinning && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-6 text-center">
              <p className="text-sm text-indigo-600">{d.themeLabel}</p>
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
