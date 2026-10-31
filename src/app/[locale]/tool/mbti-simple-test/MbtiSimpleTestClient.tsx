"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, RotateCcw } from "lucide-react";
import { data, type Locale } from "./data";

interface Question {
  q: Record<Locale, string>;
  a: { letter: string; text: Record<Locale, string> };
  b: { letter: string; text: Record<Locale, string> };
}

const QUESTIONS: Question[] = [
  {
    q: { ko: "주말에 쉴 때 당신은?", en: "On a day off, you tend to:", ja: "休みの日のあなたは？", es: "En tu día libre, tiendes a:" },
    a: { letter: "E", text: { ko: "친구들과 모임에 간다", en: "Go out and meet friends", ja: "友達と集まりに行く", es: "Salir y ver a amigos" } },
    b: { letter: "I", text: { ko: "집에서 혼자 시간을 보낸다", en: "Spend quiet time alone at home", ja: "家で一人の時間を過ごす", es: "Pasar tiempo tranquilo solo en casa" } },
  },
  {
    q: { ko: "새로운 모임에 가면?", en: "At a new gathering, you:", ja: "新しい集まりに行くと？", es: "En una reunión nueva, tú:" },
    a: { letter: "E", text: { ko: "먼저 다가가서 대화를 시작한다", en: "Approach others and start talking first", ja: "まず自分から話しかける", es: "Te acercas primero e inicias la conversación" } },
    b: { letter: "I", text: { ko: "분위기를 먼저 살피며 기다린다", en: "Observe the mood first and wait", ja: "まず雰囲気を見ながら待つ", es: "Observas el ambiente primero y esperas" } },
  },
  {
    q: { ko: "문제를 해결할 때 당신은?", en: "When solving a problem, you:", ja: "問題を解決するとき、あなたは？", es: "Al resolver un problema, tú:" },
    a: { letter: "S", text: { ko: "현실적이고 구체적인 방법을 찾는다", en: "Look for a practical, concrete method", ja: "現実的で具体的な方法を探す", es: "Buscas un método práctico y concreto" } },
    b: { letter: "N", text: { ko: "다양한 가능성과 아이디어를 떠올린다", en: "Think of various possibilities and ideas", ja: "様々な可能性やアイデアを思いつく", es: "Piensas en varias posibilidades e ideas" } },
  },
  {
    q: { ko: "이야기할 때 당신은?", en: "When telling a story, you tend to:", ja: "話をするとき、あなたは？", es: "Al contar algo, tiendes a:" },
    a: { letter: "S", text: { ko: "실제 경험과 사실을 중심으로 말한다", en: "Focus on real experiences and facts", ja: "実際の経験や事実を中心に話す", es: "Centrarte en experiencias y hechos reales" } },
    b: { letter: "N", text: { ko: "비유와 상상을 섞어서 말한다", en: "Mix in metaphors and imagination", ja: "比喩や想像を交えて話す", es: "Mezclar metáforas e imaginación" } },
  },
  {
    q: { ko: "결정을 내릴 때 당신은?", en: "When making a decision, you:", ja: "決定を下すとき、あなたは？", es: "Al tomar una decisión, tú:" },
    a: { letter: "T", text: { ko: "논리와 기준을 우선한다", en: "Prioritize logic and criteria", ja: "論理や基準を優先する", es: "Priorizas la lógica y los criterios" } },
    b: { letter: "F", text: { ko: "사람들의 감정과 관계를 먼저 고려한다", en: "Consider people's feelings and relationships first", ja: "人々の感情や関係をまず考慮する", es: "Consideras primero los sentimientos y relaciones" } },
  },
  {
    q: { ko: "친구가 고민을 털어놓으면?", en: "When a friend shares a problem, you:", ja: "友達が悩みを話してきたら？", es: "Cuando un amigo comparte un problema, tú:" },
    a: { letter: "T", text: { ko: "해결책을 제시해준다", en: "Offer a solution", ja: "解決策を提示する", es: "Ofreces una solución" } },
    b: { letter: "F", text: { ko: "먼저 공감하고 들어준다", en: "Listen and empathize first", ja: "まず共感して話を聞く", es: "Escuchas y empatizas primero" } },
  },
  {
    q: { ko: "여행을 갈 때 당신은?", en: "When traveling, you:", ja: "旅行に行くとき、あなたは？", es: "Al viajar, tú:" },
    a: { letter: "J", text: { ko: "미리 세세하게 계획을 짠다", en: "Plan the details in advance", ja: "事前に詳細な計画を立てる", es: "Planeas los detalles con antelación" } },
    b: { letter: "P", text: { ko: "즉흥적으로 상황에 맞춰 움직인다", en: "Go with the flow spontaneously", ja: "即興で状況に合わせて動く", es: "Te dejas llevar espontáneamente" } },
  },
  {
    q: { ko: "마감이 있는 일은?", en: "With a deadline, you:", ja: "締め切りがある仕事は？", es: "Con una fecha límite, tú:" },
    a: { letter: "J", text: { ko: "미리 끝내두는 걸 선호한다", en: "Prefer to finish it well ahead of time", ja: "早めに終わらせておくのを好む", es: "Prefieres terminarlo con mucha antelación" } },
    b: { letter: "P", text: { ko: "마감 직전에 몰입해서 끝낸다", en: "Focus intensely right before the deadline", ja: "締め切り直前に集中して終わらせる", es: "Te concentras intensamente justo antes del plazo" } },
  },
];

const LETTER_DESC: Record<string, Record<Locale, string>> = {
  E: { ko: "외향적이고 사람들과의 교류에서 에너지를 얻는 편입니다.", en: "Outgoing — you draw energy from interacting with others.", ja: "外向的で人との交流からエネルギーを得る傾向があります。", es: "Extrovertido: obtienes energía al interactuar con otros." },
  I: { ko: "내향적이고 혼자만의 시간에서 에너지를 충전하는 편입니다.", en: "Introverted — you recharge through time alone.", ja: "内向的で一人の時間でエネルギーを充電する傾向があります。", es: "Introvertido: recargas energía con tiempo a solas." },
  S: { ko: "현실적이고 구체적인 정보를 중시하는 편입니다.", en: "Sensing — you value practical, concrete information.", ja: "現実的で具体的な情報を重視する傾向があります。", es: "Sensorial: valoras la información práctica y concreta." },
  N: { ko: "직관적이고 가능성과 아이디어를 중시하는 편입니다.", en: "Intuitive — you value possibilities and big-picture ideas.", ja: "直観的で可能性やアイデアを重視する傾向があります。", es: "Intuitivo: valoras las posibilidades y las ideas generales." },
  T: { ko: "논리와 기준을 바탕으로 판단하는 편입니다.", en: "Thinking — you judge based on logic and criteria.", ja: "論理や基準を基に判断する傾向があります。", es: "Pensador: juzgas con base en la lógica y los criterios." },
  F: { ko: "감정과 관계를 바탕으로 판단하는 편입니다.", en: "Feeling — you judge based on emotions and relationships.", ja: "感情や関係を基に判断する傾向があります。", es: "Sentimental: juzgas con base en emociones y relaciones." },
  J: { ko: "계획적이고 체계적으로 움직이는 편입니다.", en: "Judging — you move in a planned, organized way.", ja: "計画的で体系的に動く傾向があります。", es: "Juicioso: te mueves de forma planificada y organizada." },
  P: { ko: "융통성 있고 즉흥적으로 움직이는 편입니다.", en: "Perceiving — you move flexibly and spontaneously.", ja: "柔軟性があり即興的に動く傾向があります。", es: "Perceptivo: te mueves con flexibilidad y espontaneidad." },
};

export default function MbtiSimpleTest({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [tally, setTally] = useState<Record<string, number>>({});
  const [resultType, setResultType] = useState<string | null>(null);

  const start = () => {
    setStarted(true);
    setStep(0);
    setTally({});
    setResultType(null);
  };

  const answer = (letter: string) => {
    const newTally = { ...tally, [letter]: (tally[letter] ?? 0) + 1 };
    if (step + 1 >= QUESTIONS.length) {
      const type = [
        (newTally["E"] ?? 0) >= (newTally["I"] ?? 0) ? "E" : "I",
        (newTally["S"] ?? 0) >= (newTally["N"] ?? 0) ? "S" : "N",
        (newTally["T"] ?? 0) >= (newTally["F"] ?? 0) ? "T" : "F",
        (newTally["J"] ?? 0) >= (newTally["P"] ?? 0) ? "J" : "P",
      ].join("");
      setResultType(type);
    } else {
      setTally(newTally);
      setStep(step + 1);
    }
  };

  const progress = d.questionProgress.replace("{current}", String(step + 1)).replace("{total}", String(QUESTIONS.length));

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
          {!started && !resultType && (
            <button onClick={start} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <Sparkles className="h-4 w-4" />
              {d.startBtn}
            </button>
          )}

          {started && !resultType && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{progress}</p>
              <p className="text-lg font-semibold">{QUESTIONS[step].q[locale]}</p>
              <div className="space-y-2">
                <button onClick={() => answer(QUESTIONS[step].a.letter)} className="w-full rounded-md border px-4 py-3 text-left text-sm hover:bg-muted">
                  {QUESTIONS[step].a.text[locale]}
                </button>
                <button onClick={() => answer(QUESTIONS[step].b.letter)} className="w-full rounded-md border px-4 py-3 text-left text-sm hover:bg-muted">
                  {QUESTIONS[step].b.text[locale]}
                </button>
              </div>
            </div>
          )}

          {resultType && (
            <div className="space-y-4">
              <div className="rounded-lg bg-indigo-50 p-6 text-center">
                <p className="text-sm text-indigo-600">{d.resultTitle}</p>
                <p className="mt-1 text-4xl font-bold tracking-widest text-indigo-800">{resultType}</p>
              </div>
              <div className="space-y-2">
                {resultType.split("").map((letter, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-md border p-3 text-sm">
                    <span className="font-bold text-indigo-600">{letter}</span>
                    <span className="text-muted-foreground">{LETTER_DESC[letter][locale]}</span>
                  </div>
                ))}
              </div>
              <button onClick={start} className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
                <RotateCcw className="h-4 w-4" />
                {d.restartBtn}
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step2, i) => (
            <li key={i}>{step2}</li>
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
