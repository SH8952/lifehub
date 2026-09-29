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
  ko: { title: "LifeHub 소개", description: "LifeHub가 어떤 서비스인지 소개합니다" },
  en: { title: "About LifeHub", description: "Learn about what LifeHub is and why we built it" },
  ja: { title: "LifeHubについて", description: "LifeHubがどのようなサービスかをご紹介します" },
  es: { title: "Acerca de LifeHub", description: "Descubre qué es LifeHub y por qué lo creamos" },
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
      languages: languageAlternates("/about"),
    },
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/about`,
    },
  };
}

const content: Record<Locale, PageContent> = {
  ko: {
    title: "LifeHub 소개",
    subtitle: "일상에 필요한 도구를 한곳에",
    sections: [
      {
        heading: "LifeHub란",
        body: "LifeHub는 일상 생활에서 자주 필요한 계산기와 유틸리티 도구를 한곳에 모아둔 무료 서비스입니다. 건강·재무·여행·생활 전반에 걸친 다양한 도구를 회원가입 없이 바로 이용하실 수 있습니다.",
      },
      {
        heading: "왜 LifeHub인가요",
        body: "많은 계산기 서비스가 광고나 회원가입, 복잡한 절차로 이용을 불편하게 만듭니다. LifeHub는 필요한 도구를 검색하거나 카테고리에서 찾아 바로 사용할 수 있도록 만들어졌으며, 대부분의 계산은 서버 전송 없이 브라우저에서 직접 처리되어 더 빠르고 프라이버시 친화적입니다.",
      },
      {
        heading: "다양한 언어 지원",
        body: "한국어, 영어, 일본어, 스페인어 4개 언어로 서비스를 제공하고 있으며, 전 세계 사용자가 자신의 언어로 편리하게 이용할 수 있도록 계속 확장해 나가고 있습니다.",
      },
      {
        heading: "운영자 안내",
        body: "LifeHub는 개인 개발자가 독립적으로 기획·개발·운영하고 있는 서비스입니다. 새로운 도구 제안이나 개선 의견은 언제든 환영합니다.",
      },
      {
        heading: "문의하기",
        body: "궁금한 점이나 제안하고 싶은 아이디어가 있으시면 아래 이메일로 편하게 연락해 주세요.\n\nskysmoga@gmail.com",
      },
    ],
  },
  en: {
    title: "About LifeHub",
    subtitle: "Everyday tools, all in one place",
    sections: [
      {
        heading: "What is LifeHub",
        body: "LifeHub is a free service that brings together the calculators and utility tools people need in everyday life. From health and finance to travel and daily living, a wide range of tools is available instantly, with no sign-up required.",
      },
      {
        heading: "Why LifeHub",
        body: "Many calculator sites are cluttered with intrusive requirements like mandatory sign-ups or complicated steps. LifeHub is built so you can search for or browse to the tool you need and use it right away — and because most calculations run directly in your browser rather than on a server, it's both faster and more privacy-friendly.",
      },
      {
        heading: "Multiple Languages",
        body: "LifeHub is available in Korean, English, Japanese, and Spanish, and we continue to expand so that users around the world can use it comfortably in their own language.",
      },
      {
        heading: "About the Operator",
        body: "LifeHub is planned, built, and operated independently by an individual developer. Suggestions for new tools or improvements are always welcome.",
      },
      {
        heading: "Get in Touch",
        body: "If you have a question or an idea you'd like to share, feel free to reach out at:\n\nskysmoga@gmail.com",
      },
    ],
  },
  ja: {
    title: "LifeHubについて",
    subtitle: "日常に必要なツールを一箇所に",
    sections: [
      {
        heading: "LifeHubとは",
        body: "LifeHubは、日常生活でよく必要とされる計算機やユーティリティツールを一箇所にまとめた無料サービスです。健康・財務・旅行・生活全般にわたる多彩なツールを、会員登録なしですぐにご利用いただけます。",
      },
      {
        heading: "LifeHubが選ばれる理由",
        body: "多くの計算機サービスは、広告や会員登録、複雑な手順によって利用しづらくなっています。LifeHubは、必要なツールを検索またはカテゴリから見つけてすぐに使えるように作られており、ほとんどの計算はサーバーに送信せずブラウザ内で直接処理されるため、より高速でプライバシーに配慮された設計になっています。",
      },
      {
        heading: "多言語対応",
        body: "韓国語・英語・日本語・スペイン語の4言語でサービスを提供しており、世界中のユーザーが自分の言語で快適に利用できるよう、今後も拡張を続けていきます。",
      },
      {
        heading: "運営者について",
        body: "LifeHubは、個人開発者が独立して企画・開発・運営しているサービスです。新しいツールの提案や改善のご意見はいつでも歓迎いたします。",
      },
      {
        heading: "お問い合わせ",
        body: "ご不明な点やご提案がございましたら、お気軽に下記メールアドレスまでご連絡ください。\n\nskysmoga@gmail.com",
      },
    ],
  },
  es: {
    title: "Acerca de LifeHub",
    subtitle: "Las herramientas del día a día, todas en un solo lugar",
    sections: [
      {
        heading: "Qué es LifeHub",
        body: "LifeHub es un servicio gratuito que reúne las calculadoras y herramientas de utilidad que la gente necesita en su vida diaria. Desde salud y finanzas hasta viajes y vida cotidiana, una amplia variedad de herramientas está disponible al instante, sin necesidad de registrarse.",
      },
      {
        heading: "Por qué LifeHub",
        body: "Muchos sitios de calculadoras están saturados de requisitos molestos, como registros obligatorios o pasos complicados. LifeHub está diseñado para que puedas buscar o explorar la herramienta que necesitas y usarla de inmediato; y como la mayoría de los cálculos se ejecutan directamente en tu navegador en lugar de en un servidor, es más rápido y respeta más tu privacidad.",
      },
      {
        heading: "Varios idiomas",
        body: "LifeHub está disponible en coreano, inglés, japonés y español, y seguimos ampliándolo para que usuarios de todo el mundo puedan utilizarlo cómodamente en su propio idioma.",
      },
      {
        heading: "Sobre el operador",
        body: "LifeHub es planificado, desarrollado y operado de forma independiente por un desarrollador individual. Las sugerencias de nuevas herramientas o mejoras siempre son bienvenidas.",
      },
      {
        heading: "Ponte en contacto",
        body: "Si tienes una pregunta o una idea que quieras compartir, no dudes en escribir a:\n\nskysmoga@gmail.com",
      },
    ],
  },
};

export default async function AboutPage({
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
