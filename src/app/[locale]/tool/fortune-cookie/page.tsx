import { getTranslations, setRequestLocale } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SITE_URL, pageAlternates } from "@/lib/seo";
import ToolBreadcrumbJsonLd from "@/components/ToolBreadcrumbJsonLd";

type Locale = "ko" | "en" | "ja" | "es";

const pageMeta: Record<Locale, { title: string; description: string }> = {
  ko: { title: "포춘 쿠키 오늘 운세", description: "포춘 쿠키를 열어 오늘의 행운 메시지를 받아보세요" },
  en: { title: "Fortune Cookie Daily", description: "Open a fortune cookie to receive today's lucky message" },
  ja: { title: "フォーチュンクッキー 今日の運勢", description: "フォーチュンクッキーを開けて今日のラッキーメッセージを受け取りましょう" },
  es: { title: "Galleta de la Fortuna Diaria", description: "Abre una galleta de la fortuna para recibir el mensaje afortunado de hoy" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const m = pageMeta[lang] ?? pageMeta.ko;
  const title = m.title;
  return {
    title,
    description: m.description,
    alternates: pageAlternates(locale, "/tool/fortune-cookie"),
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/tool/fortune-cookie`,
    },
  };
}

interface FAQ {
  q: string;
  a: string;
}

const fortunes: Record<Locale, string[]> = {
  ko: [
    "오늘은 뜻밖의 좋은 일이 찾아올 운입니다.",
    "새로운 만남이 인생의 전환점이 될 수 있습니다.",
    "인내심이 결실로 가는 지름길입니다.",
    "용기 내어 내딛는 한 걸음이 행운을 부릅니다.",
    "주변의 작은 행복에 감사하는 하루가 되세요.",
    "도전과 성장의 날입니다. 두려워하지 마세요.",
    "옛 친구에게서 좋은 소식이 올 수 있습니다.",
    "재정적인 기회가 찾아올 수 있습니다. 준비하세요.",
    "건강과 활력이 넘치는 하루입니다.",
    "직감을 믿고 결정하세요. 좋은 선택이 될 것입니다.",
    "인내의 끝에는 기적이 기다리고 있습니다.",
    "오늘의 작은 성취가 큰 변화의 시작입니다.",
    "주변 사람들에게 따뜻한 말을 건네보세요. 행운이 돌아옵니다.",
    "새로운 취미가 예상치 못한 기회를 만들 수 있습니다.",
    "혼자만의 시간이 충만한 영감을 줄 것입니다.",
    "오늘은 관계를 깊게 하는 데 적합한 날입니다.",
    "작은 위험이 큰 보상을 가져올 수 있습니다.",
    "바라는 일이 이루어지도록 마지막까지 노력하세요.",
    "행운은 준비된 사람에게 찾아옵니다.",
    "오늘의 운세는 당신의 마음이 만드는 것입니다.",
  ],
  en: [
    "An unexpected good surprise awaits you today.",
    "A new meeting could become a turning point in your life.",
    "Patience is the shortest path to success.",
    "Take a brave step — it will bring good luck.",
    "Be grateful for the small happiness around you today.",
    "Today is a day of challenge and growth. Do not be afraid.",
    "Good news from an old friend or memory may come.",
    "A financial opportunity may come your way. Be prepared.",
    "A day full of health and vitality awaits you.",
    "Trust your intuition — it will lead you to a good choice.",
    "At the end of perseverance, a miracle awaits.",
    "Today's small achievement is the start of a big change.",
    "Speak warmly to those around you — luck will come back.",
    "A new hobby could create an unexpected opportunity.",
    "Time alone will give you rich inspiration.",
    "Today is a good day to deepen your relationships.",
    "A small risk may bring a big reward.",
    "Keep working toward your wish until the very end.",
    "Luck comes to those who are prepared.",
    "Today's fortune is made by your own heart.",
  ],
  ja: [
    "今日は予想外の嬉しいことが訪れる運気です。",
    "新しい出会いが人生の転機になるかもしれません。",
    "忍耐が実りへの近道です。",
    "勇気の一歩が幸運を呼びます。",
    "今日の小さな幸いに感謝しましょう。",
    "挑戦と成長の日です。恐れないでください。",
    "古い友人や思い出から良い知らせが来るかもしれません。",
    "金銭的な機会が訪れるかもしれません。準備しておきましょう。",
    "健康と活力に満ちた一日です。",
    "直感を信じてください。良い選択になります。",
    "忍耐の先に奇跡が待っています。",
    "今日の小さな達成が大きな変化の始まりです。",
    "周りの人に優しい言葉をかけてください。幸運が戻ってきます。",
    "新しい趣味が予想外の機会を作るかもしれません。",
    "一人の時間が豊かなインスピレーションを与えてくれるでしょう。",
    "今日は関係を深めるのに適した日です。",
    "小さなリスクが大きな報酬をもたらすかもしれません。",
    "願い事が叶うまで最後まで努力しましょう。",
    "幸運は準備した人に訪れます。",
    "今日の運勢はあなた自身の心が作るものです。",
  ],
  es: [
    "Hoy te espera una sorpresa buena inesperada.",
    "Un nuevo encuentro podría ser un punto de inflexión en tu vida.",
    "La paciencia es el camino más corto al éxito.",
    "Da un paso valiente — traerá buena suerte.",
    "Agradece la pequeña felicidad a tu alrededor hoy.",
    "Hoy es un día de desafío y crecimiento. No tengas miedo.",
    "Puede que llegue buena noticia de un viejo amigo o recuerdo.",
    "Puede llegar una oportunidad financiera. Prepárate.",
    "Un día lleno de salud y vitalidad te espera.",
    "Confía en tu intuición — te llevará a una buena elección.",
    "Al final de la perseverancia, un milagro te espera.",
    "El pequeño logro de hoy es el inicio de un gran cambio.",
    "Di palabras cálidas a quienes te rodean — la suerte volverá.",
    "Un nuevo pasatiempo podría crear una oportunidad inesperada.",
    "El tiempo a solas te dará rica inspiración.",
    "Hoy es un buen día para profundizar tus relaciones.",
    "Un pequeño riesgo puede traer una gran recompensa.",
    "Sigue trabajando hacia tu deseo hasta el final.",
    "La suerte llega a quienes están preparados.",
    "La fortuna de hoy la hace tu propio corazón.",
  ],
};

const getRandomFortune = (locale: Locale): string => {
  const today = new Date();
  const dayNum = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const fortuneList = fortunes[locale];
  const index = dayNum % fortuneList.length;
  return fortuneList[index];
};

export default async function FortuneCookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Tools");
  const lang = locale as Locale;

  const ko = {
    title: "포춘 쿠키 오늘 운세",
    subtitle: "포춘 쿠키를 열어 오늘의 행운 메시지를 받아보세요",
    openCookie: "포춘 쿠키 열기",
    fortune: "오늘의 운세 메시지",
    whyFortuneCookie: "왜 포춘 쿠키 운세인가요?",
    fortuneCookieExplanation:
      "포춘 쿠키는 중국 음식점에서 디저트로 나오는 작은 쿠키 안에 행운의 메시지를 넣은 것입니다.\n\n매일 새로운 운세 메시지를 통해 하루를 시작해보세요. 재미와 영감을 주는 짧은 행운의 문구입니다.\n\n이 도구는 매일 랜덤한 운세 메시지를 제공하며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "포춘 쿠키 운세는 재미와 영감을 위한 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 포춘 쿠키 운세는 재미와 영감을 위한 참고용이며, 의학적·금융적 조언이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "매일 다른 운세가 나오나요?",
        a: "네, 매일 새로운 운세 메시지가 제공됩니다. 매번 다른 행운의 문구를 받아보세요.",
      },
      {
        q: "포춘 쿠키 운세가 정확하다고 믿어야 하나요?",
        a: "포춘 쿠키 운세는 재미와 영감을 위한 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 하루를 응원하는 마음으로 즐기세요.",
      },
      {
        q: "어떤 언어로 제공되나요?",
        a: "한국어, 영어, 일본어, 스페인어 4개 언어로 제공됩니다. 원하는 언어로 오늘의 운세를 확인하세요.",
      },
    ],
  };

  const en = {
    title: "Fortune Cookie Daily",
    subtitle: "Open a fortune cookie to receive today's lucky message",
    openCookie: "Open Fortune Cookie",
    fortune: "Today's Fortune Message",
    whyFortuneCookie: "Why fortune cookie fortune?",
    fortuneCookieExplanation:
      "Fortune cookies are small cookies served as dessert in Chinese restaurants, with a lucky message inside.\n\nStart your day with a new fortune message each day. It's a short lucky phrase for fun and inspiration.\n\nThis tool provides a daily random fortune message. It is not a scientifically proven diagnosis.",
    limitations: "Fortune cookie fortune is for fun and inspiration. It is not a scientifically proven diagnosis.",
    disclaimer: "This fortune cookie fortune is for fun and inspiration purposes only. It is not a medical, financial, or professional diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "Do I get a different fortune each day?",
        a: "Yes, a new fortune message is provided daily. Receive a different lucky phrase each time.",
      },
      {
        q: "Should I take fortune cookie fortune seriously?",
        a: "Fortune cookie fortune is for fun and inspiration. It is not scientifically proven. Enjoy it as a way to cheer on your day.",
      },
      {
        q: "What languages are available?",
        a: "Available in Korean, English, Japanese, and Spanish. Check today's fortune in your preferred language.",
      },
    ],
  };

  const ja = {
    title: "フォーチュンクッキー 今日の運勢",
    subtitle: "フォーチュンクッキーを開けて今日のラッキーメッセージを受け取りましょう",
    openCookie: "フォーチュンクッキーを開ける",
    fortune: "今日の運勢メッセージ",
    whyFortuneCookie: "なぜフォーチュンクッキーの運勢なのか？",
    fortuneCookieExplanation:
      "フォーチュンクッキーは中国料理店のデザートとして提供される小さなクッキーで、中にラッキーメッセージが入っています。\n\n毎日新しい運勢メッセージで一日を始めましょう。楽しみとインスピレーションのための短いラッキーフレーズです。\n\nこのツールは毎日ランダムな運勢メッセージを提供します。科学的に証明された診断ではありません。",
    limitations: "フォーチュンクッキーの運勢は楽しみとインスピレーションのための参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "このフォーチュンクッキーの運勢は楽しみとインスピレーションのための参考用であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "毎日違う運勢が出ますか？",
        a: "はい、毎日新しい運勢メッセージが提供されます。毎回違うラッキーフレーズを受け取りましょう。",
      },
      {
        q: "フォーチュンクッキーの運勢を本物として信じるべきですか？",
        a: "フォーチュンクッキーの運勢は楽しみとインスピレーションのための参考ツールです。科学的に証明された診断ではありません。楽しみとして一日を応援する気持ちで楽しんでください。",
      },
      {
        q: "どの言語で提供されますか？",
        a: "韓国語、英語、日本語、スペイン語の4言語で提供されます。お好みの言語で今日の運勢を確認しましょう。",
      },
    ],
  };

  const es = {
    title: "Galleta de la Fortuna Diaria",
    subtitle: "Abre una galleta de la fortuna para recibir el mensaje afortunado de hoy",
    openCookie: "Abrir Galleta de la Fortuna",
    fortune: "Mensaje de Fortuna de Hoy",
    whyFortuneCookie: "¿Por qué fortuna de galleta?",
    fortuneCookieExplanation:
      "Las galletas de la fortuna son pequeñas galletas servidas como postre en restaurantes chinos, con un mensaje afortunado dentro.\n\nComienza tu día con un nuevo mensaje de fortuna cada día. Es una breve frase afortunada para diversión e inspiración.\n\nEsta herramienta proporciona un mensaje de fortuna aleatorio diario. No es un diagnóstico científicamente comprobado.",
    limitations: "La fortuna de galleta es para diversión e inspiración. No es un diagnóstico científicamente comprobado.",
    disclaimer: "Esta fortuna de galleta es solo para diversión e inspiración. No es un diagnóstico médico, financiero o profesional.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    faq: [
      {
        q: "¿Recibo una fortuna diferente cada día?",
        a: "Sí, se proporciona un nuevo mensaje de fortuna diariamente. Recibe una diferente frase afortunada cada vez.",
      },
      {
        q: "¿Debo tomarme la fortuna de galleta en serio?",
        a: "La fortuna de galleta es para diversión e inspiración. No está científicamente comprobado. DisfrútalO como una forma de animar tu día.",
      },
      {
        q: "¿En qué idiomas está disponible?",
        a: "Disponible en coreano, inglés, japonés y español. Verifica la fortuna de hoy en tu idioma preferido.",
      },
    ],
  };

  const d = { ko, en, ja, es }[lang] ?? ko;
  const todayFortune = getRandomFortune(lang);

  return (
    <>
      <ToolBreadcrumbJsonLd locale={locale} toolId="fortune-cookie" />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="mt-8 flex justify-center">
        <a
          href="#fortune-message"
          className={buttonVariants({ size: "lg" })}
        >
          {d.openCookie}
        </a>
      </div>

      <div id="fortune-message" className="mt-12 flex justify-center">
        <Card className="w-full max-w-md border-2 border-amber-200 bg-amber-50 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="mb-4 text-6xl">🥠</div>
            <h2 className="mb-4 text-xl font-semibold">{d.fortune}</h2>
            <p className="text-lg leading-relaxed text-amber-800">
              {todayFortune}
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyFortuneCookie}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.fortuneCookieExplanation}</p>
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

    </div>
    </>
  );
}
