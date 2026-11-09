import { SITE_URL, pageAlternates } from "@/lib/seo";
import QuitSmokingSavings from "./QuitSmokingSavingsClient";
import { data, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = d.title;
  return {
    title,
    description: d.subtitle,
    alternates: pageAlternates(locale, "/tool/quit-smoking-savings"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/quit-smoking-savings`,
    },
  };
}

export default async function QuitSmokingSavingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <QuitSmokingSavings initialLocale={locale as Locale} />;
}
