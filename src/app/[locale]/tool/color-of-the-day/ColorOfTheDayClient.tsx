"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";
import { data, type Locale } from "./data";

interface ColorFortune {
  hex: string;
  ko: { name: string; meaning: string; advice: string };
  en: { name: string; meaning: string; advice: string };
  ja: { name: string; meaning: string; advice: string };
  es: { name: string; meaning: string; advice: string };
}

const COLOR_FORTUNES: ColorFortune[] = [
  { hex: "#EF4444", ko: { name: "빨강", meaning: "열정과 에너지를 상징합니다.", advice: "적극적으로 나서보면 좋은 결과가 있을 것입니다." }, en: { name: "Red", meaning: "Symbolizes passion and energy.", advice: "Taking the initiative today could lead to good results." }, ja: { name: "赤", meaning: "情熱とエネルギーを象徴します。", advice: "積極的に動いてみると良い結果が得られるでしょう。" }, es: { name: "Rojo", meaning: "Simboliza pasión y energía.", advice: "Tomar la iniciativa hoy podría traer buenos resultados." } },
  { hex: "#F97316", ko: { name: "주황", meaning: "활기와 사교성을 상징합니다.", advice: "새로운 사람과의 만남이 즐거울 것입니다." }, en: { name: "Orange", meaning: "Symbolizes vitality and sociability.", advice: "Meeting new people today will be enjoyable." }, ja: { name: "オレンジ", meaning: "活気と社交性を象徴します。", advice: "新しい人との出会いが楽しいものになるでしょう。" }, es: { name: "Naranja", meaning: "Simboliza vitalidad y sociabilidad.", advice: "Conocer gente nueva hoy será agradable." } },
  { hex: "#EAB308", ko: { name: "노랑", meaning: "밝은 긍정과 창의성을 상징합니다.", advice: "아이디어를 적어두면 나중에 큰 도움이 될 것입니다." }, en: { name: "Yellow", meaning: "Symbolizes bright positivity and creativity.", advice: "Jot down your ideas — they'll help you later." }, ja: { name: "黄色", meaning: "明るい前向きさと創造性を象徴します。", advice: "アイデアを書き留めておくと後で大きな助けになるでしょう。" }, es: { name: "Amarillo", meaning: "Simboliza positividad brillante y creatividad.", advice: "Anota tus ideas; te ayudarán más adelante." } },
  { hex: "#22C55E", ko: { name: "초록", meaning: "안정과 성장을 상징합니다.", advice: "차분히 계획을 세우면 좋은 흐름을 탈 수 있습니다." }, en: { name: "Green", meaning: "Symbolizes stability and growth.", advice: "Planning calmly today will put you on a good track." }, ja: { name: "緑", meaning: "安定と成長を象徴します。", advice: "落ち着いて計画を立てると良い流れに乗れるでしょう。" }, es: { name: "Verde", meaning: "Simboliza estabilidad y crecimiento.", advice: "Planificar con calma hoy te pondrá en buen camino." } },
  { hex: "#06B6D4", ko: { name: "청록", meaning: "평온함과 명료함을 상징합니다.", advice: "복잡한 생각을 정리할 좋은 타이밍입니다." }, en: { name: "Teal", meaning: "Symbolizes calm and clarity.", advice: "A good time to sort out tangled thoughts." }, ja: { name: "青緑", meaning: "穏やかさと明瞭さを象徴します。", advice: "複雑な考えを整理する良いタイミングです。" }, es: { name: "Verde Azulado", meaning: "Simboliza calma y claridad.", advice: "Un buen momento para ordenar pensamientos complicados." } },
  { hex: "#3B82F6", ko: { name: "파랑", meaning: "신뢰와 집중력을 상징합니다.", advice: "맡은 일에 집중하면 인정받을 수 있습니다." }, en: { name: "Blue", meaning: "Symbolizes trust and focus.", advice: "Focusing on your task today could earn recognition." }, ja: { name: "青", meaning: "信頼と集中力を象徴します。", advice: "任された仕事に集中すると評価されるでしょう。" }, es: { name: "Azul", meaning: "Simboliza confianza y concentración.", advice: "Concentrarte en tu tarea hoy podría ganarte reconocimiento." } },
  { hex: "#8B5CF6", ko: { name: "보라", meaning: "직관과 영감을 상징합니다.", advice: "평소와 다른 관점으로 보면 답이 보일 것입니다." }, en: { name: "Purple", meaning: "Symbolizes intuition and inspiration.", advice: "A fresh perspective today will reveal the answer." }, ja: { name: "紫", meaning: "直観とインスピレーションを象徴します。", advice: "いつもと違う視点で見ると答えが見えてくるでしょう。" }, es: { name: "Morado", meaning: "Simboliza intuición e inspiración.", advice: "Una perspectiva nueva hoy revelará la respuesta." } },
  { hex: "#EC4899", ko: { name: "분홍", meaning: "따뜻함과 배려를 상징합니다.", advice: "주변 사람에게 작은 친절을 베풀어보세요." }, en: { name: "Pink", meaning: "Symbolizes warmth and care.", advice: "Try offering a small kindness to someone nearby." }, ja: { name: "ピンク", meaning: "温かさと思いやりを象徴します。", advice: "周りの人に小さな親切をしてみましょう。" }, es: { name: "Rosa", meaning: "Simboliza calidez y cuidado.", advice: "Intenta ofrecer una pequeña amabilidad a alguien cercano." } },
  { hex: "#64748B", ko: { name: "회색", meaning: "균형과 신중함을 상징합니다.", advice: "오늘은 서두르지 말고 차근차근 진행하세요." }, en: { name: "Gray", meaning: "Symbolizes balance and prudence.", advice: "Take things step by step today without rushing." }, ja: { name: "グレー", meaning: "バランスと慎重さを象徴します。", advice: "今日は焦らず一歩一歩進めましょう。" }, es: { name: "Gris", meaning: "Simboliza equilibrio y prudencia.", advice: "Hoy ve paso a paso sin apresurarte." } },
  { hex: "#78350F", ko: { name: "갈색", meaning: "안정감과 끈기를 상징합니다.", advice: "꾸준히 해온 일이 결실을 맺을 수 있습니다." }, en: { name: "Brown", meaning: "Symbolizes stability and persistence.", advice: "Work you've kept at steadily may finally bear fruit." }, ja: { name: "茶色", meaning: "安定感と粘り強さを象徴します。", advice: "地道に続けてきたことが結実するかもしれません。" }, es: { name: "Marrón", meaning: "Simboliza estabilidad y persistencia.", advice: "El trabajo constante que has hecho podría dar fruto." } },
];

function dateHash(dateStr: string): number {
  let h = 0;
  for (let i = 0; i < dateStr.length; i++) {
    h = (h * 31 + dateStr.charCodeAt(i)) >>> 0;
  }
  return h;
}

export default function ColorOfTheDay({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [result, setResult] = useState<ColorFortune | null>(null);
  const todayStr = new Date().toISOString().slice(0, 10);

  const check = () => {
    const hash = dateHash(todayStr);
    setResult(COLOR_FORTUNES[hash % COLOR_FORTUNES.length]);
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
          <p className="text-sm text-muted-foreground">
            {d.dateLabel}: {todayStr}
          </p>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Palette className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {result && (
            <div className="space-y-4 rounded-lg bg-indigo-50 p-6">
              <div className="flex items-center justify-center gap-3">
                <span className="h-12 w-12 rounded-full border-2 border-white shadow" style={{ backgroundColor: result.hex }} />
                <div>
                  <p className="text-sm text-indigo-600">{d.colorNameLabel}</p>
                  <p className="text-2xl font-bold text-indigo-800">{result[locale].name}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-indigo-600">{d.meaningLabel}</p>
                <p className="text-base text-indigo-900">{result[locale].meaning}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">{d.adviceLabel}</p>
                <p className="text-base text-indigo-900">{result[locale].advice}</p>
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
