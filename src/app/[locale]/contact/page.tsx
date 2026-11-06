import { setRequestLocale } from "next-intl/server";
import { SITE_URL, languageAlternates } from "@/lib/seo";

type Locale = "ko" | "en" | "ja" | "es";

interface Section {
  heading: string;
  body: string;
}

interface PageContent {
  title: string;
  subtitle: string;
  sections: Section[];
}

const pageMeta: Record<Locale, { title: string; description: string }> = {
  ko: { title: "문의하기", description: "LifeHub에 궁금한 점이나 제안을 남겨주세요" },
  en: { title: "Contact", description: "Get in touch with the LifeHub team" },
  ja: { title: "お問い合わせ", description: "LifeHubへのご質問・ご提案はこちらから" },
  es: { title: "Contacto", description: "Ponte en contacto con el equipo de LifeHub" },
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
      languages: languageAlternates("/contact"),
    },
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/contact`,
    },
  };
}

const content: Record<Locale, PageContent> = {
  ko: {
    title: "문의하기",
    subtitle: "궁금한 점이나 제안, 오류 제보는 언제든 환영합니다",
    sections: [
      {
        heading: "이메일 문의",
        body: "아래 이메일 주소로 연락해 주시면 확인 후 답변드리겠습니다.\n\nskysmoga@gmail.com",
      },
      {
        heading: "이럴 때 연락해 주세요",
        body: "새로운 도구 아이디어 제안, 특정 도구에서 발견한 오류나 오작동 제보, 번역 오류 신고, 광고 관련 문의, 기타 서비스 관련 문의 등 어떤 내용이든 환영합니다.",
      },
      {
        heading: "답변 안내",
        body: "보내주신 문의는 순차적으로 확인하며, 영업일 기준 며칠 내 답변드리도록 노력하겠습니다.",
      },
      {
        heading: "문의 시 포함하면 좋은 정보",
        body: "오류를 제보해 주실 때는 어떤 도구에서(도구 이름 또는 URL), 어떤 입력값을 넣었을 때, 어떤 결과나 문제가 발생했는지를 함께 알려주시면 원인 파악과 수정이 훨씬 빨라집니다. 사용 중인 브라우저나 기기 정보를 함께 알려주시면 더욱 도움이 됩니다.",
      },
      {
        heading: "보내주신 내용은 어떻게 쓰이나요",
        body: "문의 메일로 보내주신 내용은 답변과 서비스 개선 목적으로만 사용되며, 제3자에게 제공되지 않습니다. 더 자세한 내용은 개인정보처리방침 페이지를 참고해 주세요.",
      },
      {
        heading: "어떤 언어로 문의하셔도 괜찮아요",
        body: "LifeHub는 한국어, 영어, 일본어, 스페인어 4개 언어로 서비스되고 있으며, 문의 또한 이 중 어떤 언어로 보내주셔도 괜찮습니다. 편하신 언어로 자유롭게 작성해 주세요.",
      },
      {
        heading: "버그 제보 후 어떻게 처리되나요",
        body: "제보해 주신 오류는 재현 가능 여부와 영향 범위를 먼저 확인한 뒤 우선순위를 정해 수정합니다. LifeHub는 웹 서비스라 앱스토어 심사 없이 수정 사항을 바로 배포할 수 있어, 확인된 문제는 비교적 빠르게 반영되는 편입니다. 다만 개별 건마다 수정 완료 시점을 모두 안내드리지는 못하는 점 양해 부탁드립니다.",
      },
      {
        heading: "자주 묻는 질문을 먼저 확인해보세요",
        body: "같은 질문이 여러 번 들어오는 경우를 줄이기 위해, 대부분의 도구 페이지 하단에는 자주 묻는 질문(FAQ) 섹션을 함께 제공하고 있습니다. 문의하시기 전에 해당 도구 페이지의 FAQ를 먼저 살펴보시면 더 빠르게 답을 찾으실 수 있습니다.",
      },
      {
        heading: "광고·제휴 관련 문의",
        body: "광고 게재, 제휴, 협업 제안 등 비즈니스 관련 문의도 동일한 이메일로 받고 있습니다. 제안 내용을 간단히 정리해 보내주시면 검토 후 답변드리겠습니다. 다만 개인 개발자가 운영하는 서비스 특성상 모든 제안에 참여할 수 없는 점은 양해 부탁드립니다.",
      },
    ],
  },
  en: {
    title: "Contact",
    subtitle: "Questions, suggestions, and bug reports are always welcome",
    sections: [
      {
        heading: "Email",
        body: "Please reach out to the email address below, and we'll get back to you after reviewing your message.\n\nskysmoga@gmail.com",
      },
      {
        heading: "When to Reach Out",
        body: "Feel free to contact us about new tool ideas, bugs or malfunctions you've noticed in a specific tool, translation errors, advertising inquiries, or anything else related to the service.",
      },
      {
        heading: "Response Time",
        body: "We review messages in the order they're received and aim to respond within a few business days.",
      },
      {
        heading: "What to Include in Your Message",
        body: "When reporting a bug, it helps a lot to mention which tool (name or URL), what input you entered, and what result or error you saw. Letting us know your browser or device also speeds up diagnosis.",
      },
      {
        heading: "How We Handle Your Message",
        body: "Anything you send us is used only to respond to you and improve the service, and is never shared with third parties. See our Privacy Policy page for more details.",
      },
      {
        heading: "Write to Us in Any Supported Language",
        body: "LifeHub is available in Korean, English, Japanese, and Spanish, and you're welcome to write your message in whichever of these languages is most comfortable for you.",
      },
      {
        heading: "What Happens After You Report a Bug",
        body: "When you report an issue, we first check whether it's reproducible and how broadly it affects users, then prioritize a fix accordingly. Because LifeHub is a web app, fixes can be deployed immediately without app store review, so confirmed issues are often resolved fairly quickly. That said, we may not always be able to send an individual follow-up for every report.",
      },
      {
        heading: "Check Common Questions First",
        body: "To reduce repeat questions, most tool pages include a FAQ section at the bottom covering common questions about that specific tool. Checking the FAQ on the relevant tool page before reaching out often gets you an answer faster.",
      },
      {
        heading: "Advertising & Partnership Inquiries",
        body: "Business inquiries — advertising, partnerships, collaboration proposals — are also welcome at the same email address. A brief summary of your proposal helps us review and respond faster. Please note that, as a service run by an individual developer, we're not able to take on every proposal we receive.",
      },
    ],
  },
  ja: {
    title: "お問い合わせ",
    subtitle: "ご質問・ご提案・不具合のご報告はいつでも歓迎です",
    sections: [
      {
        heading: "メールでのお問い合わせ",
        body: "下記のメールアドレスまでご連絡いただければ、確認後ご返信いたします。\n\nskysmoga@gmail.com",
      },
      {
        heading: "こんな時にご連絡ください",
        body: "新しいツールのご提案、特定のツールで見つかった不具合や誤作動のご報告、翻訳ミスのご指摘、広告に関するお問い合わせなど、どのような内容でも歓迎いたします。",
      },
      {
        heading: "返信について",
        body: "お問い合わせは順次確認しており、営業日ベースで数日以内のご返信を心がけております。",
      },
      {
        heading: "お問い合わせ時にあると助かる情報",
        body: "不具合をご報告いただく際は、どのツールで（ツール名またはURL）、どのような入力値を入れたときに、どのような結果やエラーが出たかを併せてお知らせいただけると、原因の特定と修正がより迅速になります。ご使用のブラウザや端末情報もあわせてお知らせいただけると助かります。",
      },
      {
        heading: "お送りいただいた内容の取り扱いについて",
        body: "お問い合わせメールでお送りいただいた内容は、ご返信とサービス改善の目的にのみ使用し、第三者に提供することはありません。詳細はプライバシーポリシーページをご覧ください。",
      },
      {
        heading: "どの言語でもお気軽にお問い合わせください",
        body: "LifeHubは韓国語・英語・日本語・スペイン語の4言語でサービスを提供しており、お問い合わせもこのいずれの言語でいただいても構いません。お使いになりやすい言語で自由にご記入ください。",
      },
      {
        heading: "不具合報告後の対応の流れ",
        body: "ご報告いただいた不具合は、再現性と影響範囲を確認した上で優先順位を付けて修正しています。LifeHubはWebサービスのため、アプリストアの審査を経ずに修正をすぐに反映できるので、確認された問題は比較的早く反映される傾向にあります。ただし、すべてのご報告に個別の返信や修正完了のご連絡を差し上げられるわけではない点、ご了承ください。",
      },
      {
        heading: "どの言語でもお気軽にお問い合わせください",
        body: "LifeHubは韓国語・英語・日本語・スペイン語の4言語でサービスを提供しており、お問い合わせもこのいずれの言語でいただいても構いません。お使いになりやすい言語で自由にご記入ください。",
      },
      {
        heading: "広告・提携に関するお問い合わせ",
        body: "広告掲載、提携、コラボレーションのご提案などビジネス関連のお問い合わせも同じメールアドレスで受け付けております。ご提案内容を簡潔にまとめてお送りいただけますと、検討の上ご返信いたします。個人開発者が運営するサービスという特性上、すべてのご提案にお応えできるわけではない点はご了承ください。",
      },
    ],
  },
  es: {
    title: "Contacto",
    subtitle: "Preguntas, sugerencias e informes de errores siempre son bienvenidos",
    sections: [
      {
        heading: "Correo electrónico",
        body: "Escríbenos a la siguiente dirección de correo electrónico y te responderemos después de revisar tu mensaje.\n\nskysmoga@gmail.com",
      },
      {
        heading: "Cuándo contactarnos",
        body: "No dudes en escribirnos sobre ideas para nuevas herramientas, errores o fallos que hayas detectado en alguna herramienta, errores de traducción, consultas publicitarias, o cualquier otro tema relacionado con el servicio.",
      },
      {
        heading: "Tiempo de respuesta",
        body: "Revisamos los mensajes en el orden en que se reciben e intentamos responder en un plazo de pocos días hábiles.",
      },
      {
        heading: "Qué incluir en tu mensaje",
        body: "Al reportar un error, ayuda mucho mencionar qué herramienta (nombre o URL), qué valores introdujiste y qué resultado o error viste. Indicarnos tu navegador o dispositivo también acelera el diagnóstico.",
      },
      {
        heading: "Cómo tratamos tu mensaje",
        body: "Todo lo que nos envíes se usa únicamente para responderte y mejorar el servicio, y nunca se comparte con terceros. Consulta nuestra página de Política de Privacidad para más detalles.",
      },
      {
        heading: "Escríbenos en Cualquier Idioma Disponible",
        body: "LifeHub está disponible en coreano, inglés, japonés y español, y puedes escribirnos tu mensaje en el idioma que te resulte más cómodo entre estos.",
      },
      {
        heading: "Qué Sucede Después de Reportar un Error",
        body: "Cuando reportas un problema, primero comprobamos si es reproducible y su alcance, y luego lo priorizamos para solucionarlo. Como LifeHub es una aplicación web, las correcciones pueden desplegarse de inmediato sin revisión de tienda de aplicaciones, por lo que los problemas confirmados suelen resolverse con bastante rapidez. Aun así, no siempre podemos enviar una respuesta individual para cada reporte.",
      },
      {
        heading: "Consulta Primero las Preguntas Frecuentes",
        body: "Para reducir las preguntas repetidas, la mayoría de las páginas de herramientas incluyen una sección de preguntas frecuentes (FAQ) al final sobre esa herramienta específica. Consultar las FAQ de la página correspondiente antes de escribirnos suele darte una respuesta más rápido.",
      },
      {
        heading: "Consultas Publicitarias y de Colaboración",
        body: "También recibimos consultas comerciales —publicidad, colaboraciones, propuestas de asociación— en la misma dirección de correo. Un breve resumen de tu propuesta nos ayuda a revisarla y responder más rápido. Ten en cuenta que, al ser un servicio gestionado por un desarrollador individual, no podemos aceptar todas las propuestas que recibimos.",
      },
    ],
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as Locale;
  const c = content[lang] ?? content.ko;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-muted-foreground">{c.subtitle}</p>
      <div className="mt-8 space-y-8">
        {c.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
