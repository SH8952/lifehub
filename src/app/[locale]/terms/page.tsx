import { setRequestLocale } from "next-intl/server";
import { SITE_URL, pageAlternates } from "@/lib/seo";
import { BackLink } from "@/components/back-link";

type Locale = "ko" | "en" | "ja" | "es";

interface Section {
  heading: string;
  body: string;
}

interface PageContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

const pageMeta: Record<Locale, { title: string; description: string }> = {
  ko: { title: "이용약관", description: "LifeHub 서비스 이용에 관한 약관을 안내합니다" },
  en: { title: "Terms of Service", description: "The terms that govern your use of LifeHub" },
  ja: { title: "利用規約", description: "LifeHubサービスのご利用に関する規約をご案内します" },
  es: { title: "Términos de Servicio", description: "Los términos que rigen el uso de LifeHub" },
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
    alternates: pageAlternates(locale, "/terms"),
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/terms`,
    },
  };
}

const content: Record<Locale, PageContent> = {
  ko: {
    title: "이용약관",
    subtitle: "LifeHub 서비스 이용에 관한 약관을 안내합니다",
    lastUpdated: "최종 수정일: 2026년 9월 29일",
    sections: [
      {
        heading: "약관의 동의",
        body: "LifeHub(이하 '서비스')에 접속하거나 이용함으로써 사용자는 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않으실 경우 서비스 이용을 중단해 주세요.",
      },
      {
        heading: "서비스 설명",
        body: "LifeHub는 건강, 재무, 여행, 생활 전반에 걸친 무료 계산기 및 유틸리티 도구 모음을 제공합니다. 모든 도구는 정보 제공 및 참고 목적으로 제공됩니다.",
      },
      {
        heading: "전문적인 조언이 아님",
        body: "BMI·기초대사량 계산기와 같은 건강 관련 도구, 대출·이자 계산기와 같은 재무 관련 도구, 비자 비교와 같은 출입국 관련 도구를 포함한 모든 결과는 의학적·재무적·법률적 전문가의 조언을 대체하지 않습니다.\n\n중요한 건강, 재무, 법률 관련 결정을 내리시기 전에는 반드시 관련 분야의 전문가와 상담하시기 바랍니다.",
      },
      {
        heading: "보증의 부인",
        body: "서비스는 '있는 그대로(as is)' 제공되며, 정확성, 완전성, 특정 목적에의 적합성에 대해 어떠한 보증도 하지 않습니다. 도구의 계산 결과로 인해 발생하는 손해에 대해 LifeHub는 책임을 지지 않습니다.",
      },
      {
        heading: "책임의 제한",
        body: "법률이 허용하는 최대한의 범위 내에서, LifeHub 운영자는 서비스 이용 또는 이용 불능으로 인해 발생하는 직접적·간접적 손해에 대해 책임을 지지 않습니다.",
      },
      {
        heading: "이용자의 의무",
        body: "서비스를 불법적인 목적으로 사용하거나, 서비스 운영을 방해하는 자동화된 접근(과도한 크롤링 등)을 시도하지 않아야 합니다.",
      },
      {
        heading: "지식재산권",
        body: "LifeHub의 디자인, 로고, 텍스트, 코드 등 서비스를 구성하는 요소에 대한 지식재산권은 운영자에게 있습니다. 사용자는 개인적·비상업적 용도로 서비스를 이용할 수 있으며, 사전 서면 동의 없이 서비스의 구성요소를 복제·배포·상업적으로 이용할 수 없습니다.",
      },
      {
        heading: "서비스 이용 중단",
        body: "운영자는 본 약관을 위반하거나 서비스 운영에 지장을 주는 이용자에 대해 사전 통지 없이 서비스 이용을 제한하거나 중단할 수 있습니다. 또한 운영자는 언제든지 서비스 전체 또는 일부를 중단할 수 있으며, 이 경우 가능한 범위 내에서 사전에 공지하도록 노력합니다.",
      },
      {
        heading: "서비스 및 약관의 변경",
        body: "운영자는 서비스 내용이나 본 약관을 사전 고지 없이 변경할 수 있습니다. 변경 사항은 이 페이지에 게시된 시점부터 효력을 가집니다.",
      },
      {
        heading: "준거법",
        body: "본 약관은 대한민국 법률에 따라 해석됩니다.",
      },
      {
        heading: "문의",
        body: "이용약관 관련 문의사항은 아래 이메일로 연락해 주세요.\n\nskysmoga@gmail.com",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    subtitle: "The terms that govern your use of LifeHub",
    lastUpdated: "Last updated: September 29, 2026",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: 'By accessing or using LifeHub (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the Service.',
      },
      {
        heading: "Description of Service",
        body: "LifeHub provides a free collection of calculators and utility tools covering health, finance, travel, and everyday life. All tools are provided for informational and reference purposes only.",
      },
      {
        heading: "Not Professional Advice",
        body: "Results from any tool on this site — including health-related tools such as BMI or BMR calculators, finance-related tools such as loan or interest calculators, and travel-related tools such as visa comparisons — do not constitute medical, financial, or legal advice.\n\nPlease consult a qualified professional before making important health, financial, or legal decisions.",
      },
      {
        heading: "Disclaimer of Warranties",
        body: 'The Service is provided "as is" without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose. LifeHub is not liable for any damages resulting from the use of its calculation results.',
      },
      {
        heading: "Limitation of Liability",
        body: "To the fullest extent permitted by law, the operator of LifeHub shall not be liable for any direct or indirect damages arising from the use of, or inability to use, the Service.",
      },
      {
        heading: "User Obligations",
        body: "You agree not to use the Service for unlawful purposes or to attempt automated access (such as excessive scraping) that interferes with the operation of the Service.",
      },
      {
        heading: "Intellectual Property",
        body: "The design, logo, text, and code that make up LifeHub are the intellectual property of the operator. You may use the Service for personal, non-commercial purposes; copying, redistributing, or commercially exploiting its components without prior written consent is not permitted.",
      },
      {
        heading: "Suspension of Access",
        body: "The operator may restrict or suspend access, without prior notice, for users who violate these Terms or interfere with the operation of the Service. The operator may also discontinue all or part of the Service at any time, and will make reasonable efforts to provide advance notice where practical.",
      },
      {
        heading: "Changes to the Service and Terms",
        body: "The operator may modify the Service or these Terms at any time without prior notice. Changes take effect once posted on this page.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by the laws of the Republic of Korea.",
      },
      {
        heading: "Contact",
        body: "If you have questions about these Terms of Service, please contact us at:\n\nskysmoga@gmail.com",
      },
    ],
  },
  ja: {
    title: "利用規約",
    subtitle: "LifeHubサービスのご利用に関する規約をご案内します",
    lastUpdated: "最終更新日: 2026年9月29日",
    sections: [
      {
        heading: "規約への同意",
        body: "LifeHub(以下「本サービス」)にアクセスまたは利用することにより、ユーザーは本利用規約に同意したものとみなされます。同意いただけない場合は、本サービスのご利用をお控えください。",
      },
      {
        heading: "サービスの説明",
        body: "LifeHubは、健康・財務・旅行・日常生活に関する無料の計算機およびユーティリティツール集を提供しています。すべてのツールは情報提供および参考目的で提供されるものです。",
      },
      {
        heading: "専門的な助言ではありません",
        body: "BMIや基礎代謝量計算機などの健康関連ツール、ローンや金利計算機などの財務関連ツール、ビザ比較などの渡航関連ツールを含む、本サイトのすべての結果は、医学的・財務的・法律的な専門家の助言に代わるものではありません。\n\n重要な健康、財務、法律に関する意思決定を行う前には、必ず該当分野の専門家にご相談ください。",
      },
      {
        heading: "保証の否認",
        body: "本サービスは「現状のまま(as is)」提供され、正確性、完全性、特定目的への適合性について、いかなる保証も行いません。ツールの計算結果に起因する損害について、LifeHubは責任を負いません。",
      },
      {
        heading: "責任の制限",
        body: "法律で認められる最大限の範囲で、LifeHubの運営者は、本サービスの利用または利用不能により生じた直接的・間接的な損害について責任を負いません。",
      },
      {
        heading: "利用者の義務",
        body: "本サービスを違法な目的で使用したり、過度なクローリングなど本サービスの運営を妨げる自動化されたアクセスを試みたりしないものとします。",
      },
      {
        heading: "知的財産権",
        body: "LifeHubのデザイン、ロゴ、テキスト、コードなどサービスを構成する要素に関する知的財産権は運営者に帰属します。ユーザーは個人的・非商業的な目的でサービスを利用できますが、事前の書面による同意なしにサービスの構成要素を複製・配布・商業的に利用することはできません。",
      },
      {
        heading: "サービス利用の停止",
        body: "運営者は、本規約に違反したり、サービス運営に支障を与えたりする利用者に対し、事前の通知なくサービスの利用を制限または停止することができます。また、運営者はいつでもサービスの全部または一部を中止することができ、その場合は可能な範囲で事前に告知するよう努めます。",
      },
      {
        heading: "サービスおよび規約の変更",
        body: "運営者は、事前の通知なくサービス内容や本規約を変更することができます。変更は本ページに掲載された時点から効力を持ちます。",
      },
      {
        heading: "準拠法",
        body: "本規約は大韓民国の法律に準拠して解釈されます。",
      },
      {
        heading: "お問い合わせ",
        body: "利用規約に関するお問い合わせは、下記メールアドレスまでご連絡ください。\n\nskysmoga@gmail.com",
      },
    ],
  },
  es: {
    title: "Términos de Servicio",
    subtitle: "Los términos que rigen el uso de LifeHub",
    lastUpdated: "Última actualización: 29 de septiembre de 2026",
    sections: [
      {
        heading: "Aceptación de los términos",
        body: 'Al acceder o utilizar LifeHub (el "Servicio"), aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo, por favor deja de utilizar el Servicio.',
      },
      {
        heading: "Descripción del servicio",
        body: "LifeHub ofrece una colección gratuita de calculadoras y herramientas de utilidad relacionadas con la salud, las finanzas, los viajes y la vida cotidiana. Todas las herramientas se proporcionan con fines informativos y de referencia.",
      },
      {
        heading: "No constituye asesoramiento profesional",
        body: "Los resultados de cualquier herramienta de este sitio —incluidas las relacionadas con la salud, como las calculadoras de IMC o TMB, las financieras, como las de préstamos o intereses, y las de viajes, como la comparación de visados— no constituyen asesoramiento médico, financiero ni legal.\n\nConsulta a un profesional cualificado antes de tomar decisiones importantes relacionadas con tu salud, tus finanzas o asuntos legales.",
      },
      {
        heading: "Exclusión de garantías",
        body: 'El Servicio se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas, incluidas las de exactitud, integridad o idoneidad para un fin determinado. LifeHub no se hace responsable de los daños derivados del uso de los resultados de sus cálculos.',
      },
      {
        heading: "Limitación de responsabilidad",
        body: "En la máxima medida permitida por la ley, el operador de LifeHub no será responsable de ningún daño directo o indirecto derivado del uso o la imposibilidad de uso del Servicio.",
      },
      {
        heading: "Obligaciones del usuario",
        body: "Aceptas no utilizar el Servicio con fines ilegales ni intentar accesos automatizados (como el rastreo excesivo) que interfieran con el funcionamiento del Servicio.",
      },
      {
        heading: "Propiedad Intelectual",
        body: "El diseño, el logotipo, el texto y el código que componen LifeHub son propiedad intelectual del operador. Puedes usar el Servicio con fines personales y no comerciales; copiar, redistribuir o explotar comercialmente sus componentes sin consentimiento previo por escrito no está permitido.",
      },
      {
        heading: "Suspensión del Acceso",
        body: "El operador puede restringir o suspender el acceso, sin previo aviso, a los usuarios que incumplan estos Términos o interfieran con el funcionamiento del Servicio. El operador también puede discontinuar todo o parte del Servicio en cualquier momento, y hará esfuerzos razonables por avisar con antelación cuando sea posible.",
      },
      {
        heading: "Cambios en el servicio y los términos",
        body: "El operador puede modificar el Servicio o estos Términos en cualquier momento sin previo aviso. Los cambios entrarán en vigor en el momento en que se publiquen en esta página.",
      },
      {
        heading: "Ley aplicable",
        body: "Estos Términos se rigen por las leyes de la República de Corea.",
      },
      {
        heading: "Contacto",
        body: "Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:\n\nskysmoga@gmail.com",
      },
    ],
  },
};

export default async function TermsPage({
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
      <BackLink to="home" className="mb-4" />
      <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-muted-foreground">{c.subtitle}</p>
      <p className="mt-1 text-xs text-muted-foreground">{c.lastUpdated}</p>
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
