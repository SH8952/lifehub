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
