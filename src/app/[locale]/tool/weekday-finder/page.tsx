import { SITE_URL, pageAlternates } from "@/lib/seo";
import WeekdayFinder from "./WeekdayFinderClient";
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
    alternates: pageAlternates(locale, "/tool/weekday-finder"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/weekday-finder`,
    },
  };
}

export default async function WeekdayFinderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <WeekdayFinder initialLocale={locale as Locale} />;
}
