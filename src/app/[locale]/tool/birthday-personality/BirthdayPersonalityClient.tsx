"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { data, type Locale } from "./data";

interface TypeInfo {
  name: string;
  trait: string;
}

const TYPES: Record<Locale, TypeInfo>[] = [
  { ko: { name: "탐험가형", trait: "새로운 것에 대한 호기심이 많고 모험을 즐깁니다." }, en: { name: "The Explorer", trait: "Curious about new things and enjoys adventure." }, ja: { name: "探検家タイプ", trait: "新しいことへの好奇心が強く冒険を楽しみます。" }, es: { name: "El Explorador", trait: "Curioso por las novedades y disfruta la aventura." } },
  { ko: { name: "조율가형", trait: "주변 사람들 사이의 균형을 잘 맞추는 평화주의자입니다." }, en: { name: "The Harmonizer", trait: "A peacemaker who balances relationships well." }, ja: { name: "調律者タイプ", trait: "周囲の人々の間でバランスをうまく取る平和主義者です。" }, es: { name: "El Armonizador", trait: "Un pacificador que equilibra bien las relaciones." } },
  { ko: { name: "계획가형", trait: "미리 준비하고 체계적으로 일을 처리하는 것을 좋아합니다." }, en: { name: "The Planner", trait: "Loves preparing ahead and handling things systematically." }, ja: { name: "計画者タイプ", trait: "前もって準備し体系的に物事を処理するのが好きです。" }, es: { name: "El Planificador", trait: "Le encanta prepararse con antelación y organizar sistemáticamente." } },
  { ko: { name: "감성가형", trait: "감정이 풍부하고 예술적 감각이 뛰어납니다." }, en: { name: "The Emotive", trait: "Rich in emotion with a strong artistic sense." }, ja: { name: "感性タイプ", trait: "感情が豊かで芸術的な感覚に優れています。" }, es: { name: "El Emotivo", trait: "Rico en emociones y con un fuerte sentido artístico." } },
  { ko: { name: "리더형", trait: "책임감이 강하고 그룹을 이끄는 데 능숙합니다." }, en: { name: "The Leader", trait: "Strong sense of responsibility, skilled at leading groups." }, ja: { name: "リーダータイプ", trait: "責任感が強くグループを導くのが得意です。" }, es: { name: "El Líder", trait: "Fuerte sentido de la responsabilidad, hábil liderando grupos." } },
  { ko: { name: "분석가형", trait: "논리적으로 사고하며 문제를 체계적으로 해결합니다." }, en: { name: "The Analyst", trait: "Thinks logically and solves problems systematically." }, ja: { name: "分析家タイプ", trait: "論理的に考え問題を体系的に解決します。" }, es: { name: "El Analista", trait: "Piensa lógicamente y resuelve problemas sistemáticamente." } },
  { ko: { name: "낙천가형", trait: "긍정적인 에너지로 주변을 밝게 만듭니다." }, en: { name: "The Optimist", trait: "Brightens the room with positive energy." }, ja: { name: "楽天家タイプ", trait: "ポジティブなエネルギーで周りを明るくします。" }, es: { name: "El Optimista", trait: "Ilumina el ambiente con energía positiva." } },
  { ko: { name: "수호자형", trait: "가까운 사람들을 세심하게 챙기는 든든한 존재입니다." }, en: { name: "The Guardian", trait: "A reliable presence who carefully looks after loved ones." }, ja: { name: "守護者タイプ", trait: "親しい人を細やかに気遣う頼れる存在です。" }, es: { name: "El Guardián", trait: "Una presencia confiable que cuida con esmero a sus allegados." } },
  { ko: { name: "자유인형", trait: "규칙에 얽매이지 않고 자유롭게 사고하는 것을 선호합니다." }, en: { name: "The Free Spirit", trait: "Prefers thinking freely, unbound by strict rules." }, ja: { name: "自由人タイプ", trait: "ルールに縛られず自由に考えることを好みます。" }, es: { name: "El Espíritu Libre", trait: "Prefiere pensar libremente, sin ataduras a reglas estrictas." } },
  { ko: { name: "완벽주의자형", trait: "세부사항까지 꼼꼼히 신경 쓰는 성향입니다." }, en: { name: "The Perfectionist", trait: "Pays meticulous attention to every detail." }, ja: { name: "完璧主義者タイプ", trait: "細部まで丁寧に気を配る傾向があります。" }, es: { name: "El Perfeccionista", trait: "Presta atención meticulosa a cada detalle." } },
  { ko: { name: "중재자형", trait: "갈등 상황에서 중립을 지키며 해결책을 찾습니다." }, en: { name: "The Mediator", trait: "Stays neutral in conflicts and finds solutions." }, ja: { name: "調停者タイプ", trait: "対立状況で中立を保ち解決策を見つけます。" }, es: { name: "El Mediador", trait: "Permanece neutral en conflictos y encuentra soluciones." } },
  { ko: { name: "몽상가형", trait: "상상력이 풍부하고 독창적인 아이디어를 잘 떠올립니다." }, en: { name: "The Dreamer", trait: "Highly imaginative, great at coming up with original ideas." }, ja: { name: "夢想家タイプ", trait: "想像力が豊かで独創的なアイデアをよく思いつきます。" }, es: { name: "El Soñador", trait: "Muy imaginativo, excelente para ideas originales." } },
];

export default function BirthdayPersonality({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [birth, setBirth] = useState("");
  const [result, setResult] = useState<TypeInfo | null>(null);

  const check = () => {
    if (!birth) return;
    const [, month, day] = birth.split("-").map(Number);
    const idx = (month * 31 + day) % TYPES.length;
    setResult(TYPES[idx][locale]);
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
            <label className="mb-1 block text-sm font-medium">{d.birthLabel}</label>
            <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm" />
          </div>

          <button onClick={check} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <Sparkles className="h-4 w-4" />
            {d.checkBtn}
          </button>

          {result && (
            <div className="space-y-3 rounded-lg bg-indigo-50 p-5 text-center">
              <p className="text-sm text-indigo-600">{d.typeLabel}</p>
              <p className="text-2xl font-bold text-indigo-800">{result.name}</p>
              <p className="text-sm text-indigo-600">{d.traitsLabel}</p>
              <p className="text-base text-indigo-900">{result.trait}</p>
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
