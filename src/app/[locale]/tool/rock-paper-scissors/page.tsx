import { SITE_URL, pageAlternates } from "@/lib/seo";
import RockPaperScissors from "./RockPaperScissorsClient";
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
    alternates: pageAlternates(locale, "/tool/rock-paper-scissors"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/rock-paper-scissors`,
    },
  };
}

export default async function RockPaperScissorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RockPaperScissors initialLocale={locale as Locale} />;
}
