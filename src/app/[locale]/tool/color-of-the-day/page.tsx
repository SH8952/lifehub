import { SITE_URL, pageAlternates } from "@/lib/seo";
import ColorOfTheDay from "./ColorOfTheDayClient";
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
    alternates: pageAlternates(locale, "/tool/color-of-the-day"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/color-of-the-day`,
    },
  };
}

export default async function ColorOfTheDayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ColorOfTheDay initialLocale={locale as Locale} />;
}
