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
  ko: { title: "개인정보처리방침", description: "LifeHub가 어떤 정보를 다루는지 안내합니다" },
  en: { title: "Privacy Policy", description: "How LifeHub handles information" },
  ja: { title: "プライバシーポリシー", description: "LifeHubがどのような情報を扱うかについてご案内します" },
  es: { title: "Política de Privacidad", description: "Cómo maneja LifeHub la información" },
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
    alternates: pageAlternates(locale, "/privacy"),
    openGraph: {
      title,
      description: m.description,
      url: `${SITE_URL}/${locale}/privacy`,
    },
  };
}

const content: Record<Locale, PageContent> = {
  ko: {
    title: "개인정보처리방침",
    subtitle: "LifeHub가 어떤 정보를 다루는지 안내합니다",
    lastUpdated: "최종 수정일: 2026년 11월 12일",
    sections: [
      {
        heading: "기본 원칙",
        body: "LifeHub는 회원가입이나 로그인 없이 이용할 수 있는 서비스입니다.\n\n제공하는 대부분의 계산기·변환 도구는 입력하신 정보를 서버로 전송하지 않고 사용자의 브라우저 안에서만 계산이 이루어집니다. 즉 나이, 키와 몸무게, 재무 정보 등 도구에 입력하는 값은 LifeHub 서버에 저장되거나 전송되지 않습니다.",
      },
      {
        heading: "얼굴 사진을 사용하는 도구",
        body: "일부 도구(예: 나의 관상 보기)는 사용자가 직접 올리거나 카메라로 촬영한 얼굴 사진을 분석합니다. 이 사진은 사용자 기기의 브라우저 안에서만 처리되며 LifeHub 서버나 외부 서버로 전송·저장되지 않습니다. 카메라는 사용자가 허용한 경우에만 사용되고, 분석이 끝나거나 결과 화면을 닫으면 사진은 사라집니다.",
      },
      {
        heading: "자동으로 수집되는 정보",
        body: "서비스 운영과 보안, 이용 통계 분석을 위해 접속 IP 주소, 브라우저 종류, 방문 페이지, 접속 일시와 같은 일반적인 웹 로그 정보가 자동으로 수집될 수 있습니다.\n\n이 정보는 특정 개인을 식별하는 목적으로 사용되지 않으며, 통계적 분석 및 서비스 개선 목적으로만 활용됩니다.",
      },
      {
        heading: "쿠키 및 광고",
        body: "LifeHub는 Google AdSense를 통해 광고를 게재할 수 있습니다. Google과 광고 파트너사는 쿠키(및 이와 유사한 기술)를 사용해 이전 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다.\n\nGoogle의 광고 쿠키 사용에 대해 자세히 알아보거나 맞춤형 광고를 원하지 않으실 경우, Google 광고 설정(adssettings.google.com) 또는 www.aboutads.info/choices 에서 옵트아웃하실 수 있습니다.",
      },
      {
        heading: "제3자 서비스",
        body: "웹사이트 이용 통계 분석을 위해 Google Analytics와 같은 제3자 분석 도구를 사용할 수 있습니다. 이러한 도구 역시 쿠키를 사용해 익명화된 이용 통계를 수집합니다.",
      },
      {
        heading: "아동의 개인정보",
        body: "LifeHub는 만 14세 미만 아동을 대상으로 하지 않으며, 이들로부터 고의로 개인정보를 수집하지 않습니다.",
      },
      {
        heading: "데이터 보관 기간",
        body: "브라우저에서 처리되는 계산 데이터는 애초에 서버로 전송되지 않으므로 보관 대상이 아닙니다. 자동으로 수집되는 접속 로그 등 일부 데이터는 서비스 운영 및 보안 목적상 합리적인 기간 동안만 보관한 후 삭제됩니다.",
      },
      {
        heading: "귀하의 선택권",
        body: "브라우저 설정에서 쿠키를 차단하거나 삭제할 수 있으며, 이 경우에도 LifeHub의 핵심 계산 기능은 대부분 정상적으로 이용하실 수 있습니다. 다만 쿠키를 차단하면 광고가 맞춤형이 아닌 일반 광고로 표시될 수 있습니다.",
      },
      {
        heading: "개인정보처리방침의 변경",
        body: "본 방침은 서비스 내용 변경이나 관련 법령 개정에 따라 수정될 수 있으며, 변경 시 이 페이지를 통해 공지합니다.",
      },
      {
        heading: "문의",
        body: "개인정보 관련 문의사항은 아래 이메일로 연락해 주세요.\n\nskysmoga@gmail.com",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "How LifeHub handles information",
    lastUpdated: "Last updated: November 12, 2026",
    sections: [
      {
        heading: "Basic Principles",
        body: 'LifeHub can be used without creating an account or signing in.\n\nMost of the calculators and conversion tools we provide perform their calculations entirely within your browser — the values you enter (such as age, height and weight, or financial figures) are never sent to or stored on our servers.',
      },
      {
        heading: "Tools That Use Face Photos",
        body: "Some tools (for example, Face Reading) analyze a face photo that you upload or take with your camera. The photo is processed only inside your browser on your own device and is never sent to or stored on LifeHub servers or any external server. The camera is used only if you allow it, and the photo is discarded when you close the result or start over.",
      },
      {
        heading: "Information Collected Automatically",
        body: "For service operation, security, and usage analysis, we may automatically collect standard web log information such as IP address, browser type, pages visited, and access times.\n\nThis information is not used to identify individuals and is used only for statistical analysis and service improvement.",
      },
      {
        heading: "Cookies and Advertising",
        body: "LifeHub may display advertisements served through Google AdSense. Google and its advertising partners may use cookies (and similar technologies) to serve ads based on a user's prior visits to this and other websites.\n\nYou can learn more about how Google uses advertising cookies, or opt out of personalized advertising, at Google Ads Settings (adssettings.google.com) or www.aboutads.info/choices.",
      },
      {
        heading: "Third-Party Services",
        body: "We may use third-party analytics tools, such as Google Analytics, to understand how the site is used. These tools also use cookies to collect anonymized usage statistics.",
      },
      {
        heading: "Children's Privacy",
        body: "LifeHub is not directed at children under the age of 14, and we do not knowingly collect personal information from children.",
      },
      {
        heading: "Data Retention",
        body: "Calculation data processed in your browser is never sent to our servers in the first place, so there is nothing to retain. Automatically collected data such as access logs is kept only for a reasonable period needed for service operation and security, then deleted.",
      },
      {
        heading: "Your Choices",
        body: "You can block or delete cookies in your browser settings at any time, and doing so won't affect your ability to use LifeHub's core calculation tools. Blocking cookies may simply mean you see non-personalized ads instead of personalized ones.",
      },
      {
        heading: "Changes to This Policy",
        body: "This policy may be updated to reflect changes to our service or applicable law. Any changes will be posted on this page.",
      },
      {
        heading: "Contact",
        body: "If you have questions about this privacy policy, please contact us at:\n\nskysmoga@gmail.com",
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    subtitle: "LifeHubがどのような情報を扱うかについてご案内します",
    lastUpdated: "最終更新日: 2026年11月12日",
    sections: [
      {
        heading: "基本方針",
        body: "LifeHubは会員登録やログインなしでご利用いただけるサービスです。\n\n提供している大部分の計算機・変換ツールは、入力された情報をサーバーに送信せず、お使いのブラウザ内でのみ計算が行われます。つまり、年齢、身長・体重、財務情報などツールに入力する値は、LifeHubのサーバーに保存・送信されることはありません。",
      },
      {
        heading: "顔写真を使用するツール",
        body: "一部のツール（例：私の観相を見る）では、ご自身でアップロードした、またはカメラで撮影した顔写真を分析します。この写真はお使いの端末のブラウザ内だけで処理され、LifeHubのサーバーや外部サーバーへ送信・保存されることはありません。カメラはご本人が許可した場合にのみ使用され、結果画面を閉じるかやり直すと写真は破棄されます。",
      },
      {
        heading: "自動的に収集される情報",
        body: "サービスの運営、セキュリティ、利用統計の分析のため、接続IPアドレス、ブラウザの種類、閲覧ページ、アクセス日時といった一般的なWebログ情報が自動的に収集される場合があります。\n\nこの情報は特定の個人を識別する目的では使用されず、統計的分析およびサービス改善の目的にのみ利用されます。",
      },
      {
        heading: "クッキーと広告",
        body: "LifeHubはGoogle AdSenseを通じて広告を掲載する場合があります。Googleおよび広告パートナーは、クッキー(および類似の技術)を使用して、過去の訪問履歴に基づいたパーソナライズ広告を配信することがあります。\n\nGoogleの広告クッキーの利用について詳しく知りたい場合、またはパーソナライズ広告を希望されない場合は、Google広告設定(adssettings.google.com)またはwww.aboutads.info/choicesからオプトアウトいただけます。",
      },
      {
        heading: "第三者サービス",
        body: "サイトの利用状況を把握するため、Google Analyticsなどの第三者分析ツールを使用する場合があります。これらのツールもクッキーを使用して匿名化された利用統計を収集します。",
      },
      {
        heading: "児童のプライバシー",
        body: "LifeHubは14歳未満のお子様を対象としておらず、意図的に児童の個人情報を収集することはありません。",
      },
      {
        heading: "データの保管期間",
        body: "ブラウザで処理される計算データはそもそもサーバーに送信されないため、保管対象にはなりません。自動的に収集されるアクセスログなどの一部データは、サービス運営およびセキュリティの目的上、合理的な期間のみ保管された後削除されます。",
      },
      {
        heading: "ご利用者様の選択肢",
        body: "ブラウザの設定でクッキーをブロックまたは削除することができ、その場合でもLifeHubの主要な計算機能はほとんど問題なくご利用いただけます。ただし、クッキーをブロックすると、パーソナライズされた広告ではなく一般的な広告が表示される場合があります。",
      },
      {
        heading: "本方針の変更",
        body: "本方針はサービス内容の変更や関連法令の改正に伴い変更される場合があります。変更があった場合は本ページにてお知らせします。",
      },
      {
        heading: "お問い合わせ",
        body: "プライバシーポリシーに関するお問い合わせは、下記メールアドレスまでご連絡ください。\n\nskysmoga@gmail.com",
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "Cómo maneja LifeHub la información",
    lastUpdated: "Última actualización: 12 de noviembre de 2026",
    sections: [
      {
        heading: "Principios básicos",
        body: "LifeHub se puede utilizar sin necesidad de crear una cuenta ni iniciar sesión.\n\nLa mayoría de las calculadoras y herramientas de conversión que ofrecemos realizan sus cálculos completamente dentro de tu navegador: los valores que introduces (como edad, altura y peso, o datos financieros) nunca se envían ni se almacenan en nuestros servidores.",
      },
      {
        heading: "Herramientas que usan fotos del rostro",
        body: "Algunas herramientas (por ejemplo, Lectura de rostro) analizan una foto de tu cara que subes o haces con la cámara. La foto se procesa únicamente dentro de tu navegador, en tu propio dispositivo, y nunca se envía ni se almacena en los servidores de LifeHub ni en ningún servidor externo. La cámara solo se usa si lo permites, y la foto se descarta al cerrar el resultado o empezar de nuevo.",
      },
      {
        heading: "Información recopilada automáticamente",
        body: "Para el funcionamiento del servicio, la seguridad y el análisis de uso, podemos recopilar automáticamente información estándar de registro web, como la dirección IP, el tipo de navegador, las páginas visitadas y la fecha y hora de acceso.\n\nEsta información no se utiliza para identificar a personas concretas y solo se emplea con fines estadísticos y de mejora del servicio.",
      },
      {
        heading: "Cookies y publicidad",
        body: "LifeHub puede mostrar anuncios a través de Google AdSense. Google y sus socios publicitarios pueden utilizar cookies (y tecnologías similares) para mostrar anuncios basados en tus visitas anteriores a este y otros sitios web.\n\nPuedes obtener más información sobre el uso de cookies publicitarias de Google, o desactivar la publicidad personalizada, en la Configuración de anuncios de Google (adssettings.google.com) o en www.aboutads.info/choices.",
      },
      {
        heading: "Servicios de terceros",
        body: "Podemos utilizar herramientas de análisis de terceros, como Google Analytics, para entender cómo se usa el sitio. Estas herramientas también utilizan cookies para recopilar estadísticas de uso anonimizadas.",
      },
      {
        heading: "Privacidad de menores",
        body: "LifeHub no está dirigido a menores de 14 años y no recopilamos intencionadamente información personal de menores.",
      },
      {
        heading: "Retención de Datos",
        body: "Los datos de cálculo procesados en tu navegador nunca se envían a nuestros servidores, así que no hay nada que retener. Los datos recopilados automáticamente, como los registros de acceso, se conservan solo durante un período razonable necesario para el funcionamiento del servicio y la seguridad, y luego se eliminan.",
      },
      {
        heading: "Tus Opciones",
        body: "Puedes bloquear o eliminar las cookies en la configuración de tu navegador en cualquier momento, y esto no afectará tu capacidad de usar las herramientas de cálculo principales de LifeHub. Bloquear las cookies simplemente puede significar que veas anuncios no personalizados en lugar de personalizados.",
      },
      {
        heading: "Cambios en esta política",
        body: "Esta política puede actualizarse para reflejar cambios en nuestro servicio o en la legislación aplicable. Cualquier cambio se publicará en esta página.",
      },
      {
        heading: "Contacto",
        body: "Si tienes preguntas sobre esta política de privacidad, contáctanos en:\n\nskysmoga@gmail.com",
      },
    ],
  },
};

export default async function PrivacyPage({
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
