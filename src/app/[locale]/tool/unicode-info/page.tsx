import { SITE_URL, languageAlternates } from "@/lib/seo";
import UnicodeInfo from "./UnicodeInfoClient";
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
      languages: languageAlternates("/tool/unicode-info"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/unicode-info`,
    },
  };
}

export default async function UnicodeInfoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <UnicodeInfo initialLocale={locale as Locale} />;
}
