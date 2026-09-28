import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

const pageMeta: Record<Locale, { title: string; description: string }> = {
  ko: { title: "오늘의 운세", description: "오늘의 별자리 운세를 확인하세요" },
  en: { title: "Daily Horoscope", description: "Check your daily zodiac fortune" },
  ja: { title: "今日の運勢", description: "今日の星座運勢を確認しましょう" },
  es: { title: "Horóscopo Diario", description: "Verifica tu fortuna zodiacal del día" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const m = pageMeta[lang] ?? pageMeta.ko;
  const title = `${m.title} | LifeHub`;
  return {
    title,
    description: m.description,
    alternates: {
      languages: languageAlternates("/tool/daily-fortune"),
    },
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/tool/daily-fortune`,
    },
  };
}

interface FAQ {
  q: string;
  a: string;
}

interface Zodiac {
  sign: string;
  emoji: string;
  fortune: string;
  luckyColor: string;
  luckyItem: string;
  caution: string;
}

const zodiacData: Zodiac[] = [
  { sign: "양자리", emoji: "♈", fortune: "오늘은 새로운 도전에 적합한 날입니다. 직감을 믿고 한 걸음 내딛어 보세요.", luckyColor: "빨강", luckyItem: "손거울", caution: "무리한 계획은 피하세요." },
  { sign: "황소자리", emoji: "♉", fortune: "안정과 축적의 날입니다. 오래된 계획을 점검하며 에너지를 모으세요.", luckyColor: "초록", luckyItem: "자연석", caution: "고집스러운 태도는 유연하게." },
  { sign: "쌍둥이자리", emoji: "♊", fortune: "대인관계가 활발해지는 날입니다. 대화에서 좋은 기회가 찾아올 수 있습니다.", luckyColor: "노랑", luckyItem: "펜", caution: "산만해지지 않도록 집중하세요." },
  { sign: "게자리", emoji: "♋", fortune: "감정이 치열해지는 날입니다. 가족이나 가까운 사람과의 시간이 행복을 줍니다.", luckyColor: "백색", luckyItem: "가족사진", caution: "감정 기복에 주의하세요." },
  { sign: "사자자리", emoji: "♌", fortune: "창조력과 리더십이 강한 날입니다. 당신의 열정이 주변을 밝힐 것입니다.", luckyColor: "금색", luckyItem: "쥬얼리", caution: "자존심보다 겸손을 선택하세요." },
  { sign: "처녀자리", emoji: "♍", fortune: "세부 사항이 빛을 발하는 날입니다. 꼼꼼함이 좋은 결과를 만듭니다.", luckyColor: "회색", luckyItem: "노트", caution: "완벽주의에 빠지지 마세요." },
  { sign: "천칭자리", emoji: "♎", fortune: "조화와 균형이 중요한 날입니다. 선택에서 타협점이 열쇠입니다.", luckyColor: "분홍", luckyItem: "화분", caution: "결정을 미루지 마세요." },
  { sign: "전갈자리", emoji: "♏", fortune: "통찰력이 날카로워지는 날입니다. 숨겨진 것을 발견하는 행운이 있습니다.", luckyColor: "검정", luckyItem: "크리스탈", caution: "의심보다 신뢰를 먼저 보세요." },
  { sign: "궁수자리", emoji: "♐", fortune: "자유와 확장이 가득한 날입니다. 새로운 지식이나 경험이 즐거움을 줍니다.", luckyColor: "남색", luckyItem: "책", caution: "약속은 지키되 부담은 줄이세요." },
  { sign: "염소자리", emoji: "♑", fortune: "인내와 노력이 결실로 가는 날입니다. 작은 성취도 큰 보람입니다.", luckyColor: "갈색", luckyItem: "시계", caution: "무리한 업무는 휴식으로." },
  { sign: "물병자리", emoji: "♒", fortune: "독창성과 혁신이 돋보이는 날입니다. 남다른 아이디어가 빛을 발합니다.", luckyColor: "하늘색", luckyItem: "테크기기", caution: "고독이 고립으로 흐르지 않게." },
  { sign: "물고기자리", emoji: "♓", fortune: "직감과 감수성이 풍부한 날입니다. 예술이나 명상에서 영감을 얻으세요.", luckyColor: "보라", luckyItem: "향초", caution: "현실과 환상의 경계를 지키세요." },
];

const getTodayZodiacIndex = (): number => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  // Simple hash-based deterministic zodiac per day
  const hash = (year * 372 + month * 31 + day) % 12;
  return hash;
};

export default async function DailyFortunePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;

  const ko = {
    title: "오늘의 운세",
    subtitle: "오늘의 별자리 운세를 확인하세요",
    selectZodiac: "별자리 선택",
    all: "전체",
    showFortune: "오늘의 운세 보기",
    result: "오늘의 운세",
    luckyColor: "행운의 색상",
    luckyItem: "행운의 물품",
    caution: "주의사항",
    whyFortune: "왜 오늘의 운세를 보나요?",
    fortuneExplanation:
      "오늘의 운세는 별자리별 일일 에너지 흐름을 참고로 안내합니다.\n\n각 별자리의 오늘의 기운, 행운의 색상과 물품, 주의할 점을 짧게 정리했습니다.\n\n이 도구는 재미와 자기 성찰을 위한 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "오늘의 운세는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 오늘의 운세는 재미와 자기 성찰을 위한 참고용이며, 의학적·금융적·의학적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "운세 계산은 브라우저에서 처리됩니다.",
    faq: [
      {
        q: "오늘의 운세가 정확하다고 믿어야 하나요?",
        a: "오늘의 운세는 재미와 자기 성찰의 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 하루를 응원하는 마음으로 즐기세요.",
      },
      {
        q: "전체 운세란 무엇인가요?",
        a: "전체 운세는 12개 별자리의 오늘 운세를 한 번에 보여줍니다. 원하는 별자리를 선택하면 해당 별자리의 운세만 볼 수 있습니다.",
      },
      {
        q: "운세가 부정적으로 나오면 어떻게 하나요?",
        a: "운세는 참고일 뿐입니다. 부정적인 메시지도 주의할 점으로 받아들이고, 긍정적인 하루를 만들어 가세요.",
      },
    ],
  };

  const en = {
    title: "Daily Horoscope",
    subtitle: "Check your daily zodiac fortune",
    selectZodiac: "Select Zodiac",
    all: "All",
    showFortune: "Show Today's Fortune",
    result: "Today's Fortune",
    luckyColor: "Lucky Color",
    luckyItem: "Lucky Item",
    caution: "Precautions",
    whyFortune: "Why check daily horoscope?",
    fortuneExplanation:
      "Daily horoscope provides reference energy insights for each zodiac sign.\n\nWe summarize today's vibe, lucky color and item, and points of attention for each sign.\n\nThis tool is for fun and self-reflection. It is not a scientifically proven diagnosis.",
    limitations: "Daily horoscope is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This daily horoscope is for fun and self-reflection purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Fortune calculation is processed in your browser.",
    faq: [
      {
        q: "Should I take daily horoscope seriously?",
        a: "Daily horoscope is a reference tool for fun and self-reflection. It is not scientifically proven. Enjoy it as a way to cheer on your day.",
      },
      {
        q: "What does 'All' mean?",
        a: "'All' shows today's fortune for all 12 zodiac signs at once. You can also select a specific sign to see only that sign's fortune.",
      },
      {
        q: "What if the fortune is negative?",
        a: "Horoscopes are just references. View negative messages as points of attention, and create a positive day.",
      },
    ],
  };

  const ja = {
    title: "今日の運勢",
    subtitle: "今日の星座運勢を確認しましょう",
    selectZodiac: "星座を選択",
    all: "全体",
    showFortune: "今日の運勢を見る",
    result: "今日の運勢",
    luckyColor: "行運の色",
    luckyItem: "行運のアイテム",
    caution: "注意事項",
    whyFortune: "なぜ今日の運勢を見るのか？",
    fortuneExplanation:
      "今日の運勢は、星座ごとの一日のエネルギーの流れを参考にご案内します。\n\n各星座の今日の気、行運の色とアイテム、注意点を短くまとめました。\n\nこのツールは楽しみと自己省察のための参考用であり、科学的に証明された診断ではありません。",
    limitations: "今日の運勢は参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "この今日の運勢は楽しみと自己省察のための参考用であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "運勢の計算はブラウザで処理されます。",
    faq: [
      {
        q: "今日の運勢を本物として信じるべきですか？",
        a: "今日の運勢は楽しみと自己省察のための参考ツールです。科学的に証明された診断ではありません。一日を応援する気持ちで楽しんでください。",
      },
      {
        q: "「全体」とは何ですか？",
        a: "「全体」は12星座の今日の運勢を一度に見せます。特定の星座を選択して、その星座の運勢だけを見ることもできます。",
      },
      {
        q: "運勢がネガティブにでたらどうすれば？",
        a: "運勢は参考です。ネガティブなメッセージは注意点として受け取り、ポジティブな一日を作りましょう。",
      },
    ],
  };

  const es = {
    title: "Horóscopo Diario",
    subtitle: "Verifica tu fortuna zodiacal del día",
    selectZodiac: "Selecciona Signo",
    all: "Todos",
    showFortune: "Ver Fortuna de Hoy",
    result: "Fortuna de Hoy",
    luckyColor: "Color de la suerte",
    luckyItem: "Objeto de la suerte",
    caution: "Precauciones",
    whyFortune: "¿Por qué verificar el horóscopo diario?",
    fortuneExplanation:
      "El horóscopo diario proporciona insights energéticos de referencia para cada signo zodiacal.\n\nResumimos el ambiente de hoy, color y objeto de la suerte, y puntos de atención para cada signo.\n\nEsta herramienta es para diversión y autorreflexión. No es un diagnóstico científicamente comprobado.",
    limitations: "El horóscopo diario es solo para referencia, no es un diagnóstico científicamente comprobado.",
    disclaimer: "Este horóscopo diario es solo para diversión y autorreflexión. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de la fortuna se procesa en tu navegador.",
    faq: [
      {
        q: "¿Debo tomarme el horóscopo diario en serio?",
        a: "El horóscopo diario es una herramienta de referencia para diversión y autorreflexión. No está científicamente comprobado. DisfrútalO como una forma de animar tu día.",
      },
      {
        q: "¿Qué significa 'Todos'?",
        a: "'Todos' muestra la fortuna de hoy de los 12 signos zodiacales a la vez. También puedes seleccionar un signo específico para ver solo la fortuna de ese signo.",
      },
      {
        q: "¿Qué pasa si la fortuna es negativa?",
        a: "Los horóscopos son solo referencias. Ve los mensajes negativos como puntos de atención y crea un día positivo.",
      },
    ],
  };

  const d = { ko, en, ja, es }[lang] ?? ko;

  const todayIndex = getTodayZodiacIndex();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
            applicationCategory: "Application",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {d.processingMsg}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
        {zodiacData.map((z, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 rounded-lg border p-3 text-center"
          >
            <span className="text-2xl">{z.emoji}</span>
            <span className="text-xs font-medium">{z.sign}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            const el = document.getElementById("fortune-result");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className={buttonVariants({ size: "lg" })}
        >
          {d.showFortune}
        </button>
      </div>

      <div id="fortune-result" className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.result}</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{zodiacData[todayIndex].emoji}</span>
              <div className="flex-1">
                <p className="text-lg font-semibold">{zodiacData[todayIndex].sign}</p>
                <p className="mt-1 text-base leading-relaxed">{zodiacData[todayIndex].fortune}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-muted-foreground">{d.luckyColor}</p>
                <p className="font-semibold">{zodiacData[todayIndex].luckyColor}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{d.luckyItem}</p>
                <p className="font-semibold">{zodiacData[todayIndex].luckyItem}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{d.caution}</p>
                <p className="font-semibold text-amber-600">{zodiacData[todayIndex].caution}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyFortune}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.fortuneExplanation}</p>
        <p className="mt-4 text-sm text-muted-foreground">{d.limitations}</p>
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

      <div className="mt-8">
        <a href={`/${locale}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          &larr; {t("back")}
        </a>
      </div>
    </div>
  );
}
