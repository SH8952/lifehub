"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { data, type Locale } from "./data";

const QUESTIONS: Record<Locale, { light: string[]; deep: string[] }> = {
  ko: { light: ["가장 좋아하는 음식은 무엇인가요?", "최근에 본 영화 중 가장 재미있었던 것은?", "어릴 때 꿈꿨던 직업은 무엇이었나요?", "가장 좋아하는 계절은 언제인가요?", "스트레스를 풀기 위해 주로 무엇을 하나요?", "가장 기억에 남는 여행지는 어디인가요?", "좋아하는 색깔은 무엇인가요?", "지금까지 가장 재미있었던 취미는 무엇인가요?", "가장 좋아하는 음악 장르는 무엇인가요?", "주말에 가장 하고 싶은 일은 무엇인가요?", "가장 좋아하는 계절 간식은 무엇인가요?", "가장 최근에 산 물건 중 마음에 드는 것은?", "휴대폰에 가장 많이 사용하는 앱은 무엇인가요?", "가장 좋아하는 동물은 무엇인가요?", "요즘 가장 관심 있는 주제는 무엇인가요?"], deep: ["지금까지 가장 후회되는 선택은 무엇인가요?", "누군가에게 꼭 전하고 싶은 말이 있다면?", "최근에 가장 힘들었던 순간은 언제였나요?", "스스로에게 가장 자랑스러운 점은 무엇인가요?", "가장 큰 두려움은 무엇인가요?", "지금의 나에게 해주고 싶은 조언이 있다면?", "가장 소중하게 생각하는 가치는 무엇인가요?", "누군가에게 서운했던 순간이 있다면 언제였나요?", "10년 뒤 자신에게 바라는 모습은 무엇인가요?", "가장 고마웠던 사람은 누구인가요?", "요즘 가장 고민하고 있는 것은 무엇인가요?", "스스로를 바꾸고 싶은 점이 있다면?", "가장 행복했던 순간은 언제였나요?", "지금 가장 이루고 싶은 목표는 무엇인가요?", "누군가에게 사과하고 싶은 일이 있다면?"] },
  en: { light: ["What's your favorite food?", "What's the most fun movie you've watched recently?", "What job did you dream of as a kid?", "What's your favorite season?", "What do you usually do to relieve stress?", "What's the most memorable place you've traveled to?", "What's your favorite color?", "What's the most fun hobby you've had so far?", "What's your favorite music genre?", "What do you most want to do this weekend?", "What's your favorite seasonal snack?", "What's the best thing you've bought recently?", "What app do you use most on your phone?", "What's your favorite animal?", "What topic are you most interested in these days?"], deep: ["What's the choice you regret the most so far?", "Is there something you really want to tell someone?", "When was the hardest moment you've faced recently?", "What are you most proud of about yourself?", "What's your biggest fear?", "What advice would you give to your current self?", "What value matters most to you?", "Was there a moment you felt hurt by someone?", "What do you hope to be like in 10 years?", "Who is someone you've felt most grateful to?", "What's been on your mind the most lately?", "Is there something about yourself you'd like to change?", "When was the happiest moment of your life?", "What goal do you most want to achieve right now?", "Is there something you'd like to apologize to someone for?"] },
  ja: { light: ["一番好きな食べ物は何ですか？", "最近見た映画で一番面白かったものは？", "子供の頃に夢見ていた職業は何でしたか？", "一番好きな季節はいつですか？", "ストレス解消のために主に何をしますか？", "最も印象に残っている旅行先はどこですか？", "好きな色は何ですか？", "今まで一番楽しかった趣味は何ですか？", "好きな音楽のジャンルは何ですか？", "週末に一番したいことは何ですか？", "一番好きな季節のおやつは何ですか？", "最近買った物で気に入っているものは？", "携帯で最も使うアプリは何ですか？", "一番好きな動物は何ですか？", "最近最も興味のあるテーマは何ですか？"], deep: ["今まで一番後悔している選択は何ですか？", "誰かにぜひ伝えたい言葉がありますか？", "最近一番つらかった瞬間はいつでしたか？", "自分自身で一番誇らしいことは何ですか？", "最大の恐れは何ですか？", "今の自分にアドバイスをあげるなら？", "最も大切にしている価値観は何ですか？", "誰かに寂しさを感じた瞬間はありましたか？", "10年後の自分にどうなっていてほしいですか？", "一番感謝している人は誰ですか？", "最近一番悩んでいることは何ですか？", "自分で変えたいところがあるとすれば？", "一番幸せだった瞬間はいつでしたか？", "今一番達成したい目標は何ですか？", "誰かに謝りたいことがありますか？"] },
  es: { light: ["¿Cuál es tu comida favorita?", "¿Cuál es la película más divertida que has visto recientemente?", "¿Qué trabajo soñabas de niño?", "¿Cuál es tu estación favorita?", "¿Qué haces normalmente para aliviar el estrés?", "¿Cuál es el lugar más memorable al que has viajado?", "¿Cuál es tu color favorito?", "¿Cuál es el pasatiempo más divertido que has tenido?", "¿Cuál es tu género musical favorito?", "¿Qué es lo que más quieres hacer este fin de semana?", "¿Cuál es tu bocadillo de temporada favorito?", "¿Qué es lo mejor que has comprado recientemente?", "¿Qué app usas más en tu teléfono?", "¿Cuál es tu animal favorito?", "¿Qué tema te interesa más últimamente?"], deep: ["¿Cuál es la decisión que más lamentas hasta ahora?", "¿Hay algo que realmente quieras decirle a alguien?", "¿Cuál fue el momento más difícil que has enfrentado recientemente?", "¿De qué estás más orgulloso de ti mismo?", "¿Cuál es tu mayor miedo?", "¿Qué consejo le darías a tu yo actual?", "¿Qué valor es el más importante para ti?", "¿Hubo un momento en que te sentiste herido por alguien?", "¿Cómo esperas ser en 10 años?", "¿A quién le has estado más agradecido?", "¿Qué ha estado más en tu mente últimamente?", "¿Hay algo de ti mismo que te gustaría cambiar?", "¿Cuándo fue el momento más feliz de tu vida?", "¿Qué meta quieres lograr más en este momento?", "¿Hay algo por lo que te gustaría disculparte con alguien?"] },
};

type Level = "light" | "deep" | "all";

export default function TruthGameQuestions({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [level, setLevel] = useState<Level>("all");
  const [question, setQuestion] = useState<string | null>(null);

  const draw = () => {
    const pool = QUESTIONS[locale];
    const list = level === "light" ? pool.light : level === "deep" ? pool.deep : [...pool.light, ...pool.deep];
    const idx = Math.floor(Math.random() * list.length);
    setQuestion(list[idx]);
  };

  const levels: { key: Level; label: string }[] = [
    { key: "light", label: d.levelLight },
    { key: "deep", label: d.levelDeep },
    { key: "all", label: d.levelAll },
  ];

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
          <div>
            <p className="mb-2 text-sm font-medium">{d.categoryLabel}</p>
            <div className="flex gap-2">
              {levels.map((lv) => (
                <button key={lv.key} onClick={() => setLevel(lv.key)} className={`flex-1 rounded-md border px-3 py-2 text-sm ${level === lv.key ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}>
                  {lv.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={draw} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <HelpCircle className="h-4 w-4" />
            {d.drawBtn}
          </button>

          {question && (
            <div className="rounded-lg bg-indigo-50 p-6 text-center">
              <p className="mb-1 text-sm text-indigo-600">{d.questionLabel}</p>
              <p className="text-lg font-medium text-indigo-900">{question}</p>
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
