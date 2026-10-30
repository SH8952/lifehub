import { SITE_URL, languageAlternates } from "@/lib/seo";
import BirthdayPersonality from "./BirthdayPersonalityClient";
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
    alternates: {
      languages: languageAlternates("/tool/birthday-personality"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/birthday-personality`,
    },
  };
}

export default async function BirthdayPersonalityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BirthdayPersonality initialLocale={locale as Locale} />;
}
