import { SITE_URL, languageAlternates } from "@/lib/seo";
import TextStats from "./TextStatsClient";
import { data, type Locale } from "./data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as Locale;
  const d = data[lang] ?? data.ko;
  const title = `${d.title} | LifeHub`;
  return {
    title,
    description: d.subtitle,
    alternates: {
      languages: languageAlternates("/tool/text-stats"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/text-stats`,
    },
  };
}

export default async function TextStatsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TextStats initialLocale={locale as Locale} />;
}
