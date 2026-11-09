import { SITE_URL, pageAlternates } from "@/lib/seo";
import BookRecommendationRoulette from "./BookRecommendationRouletteClient";
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
    alternates: pageAlternates(locale, "/tool/book-recommendation-roulette"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/book-recommendation-roulette`,
    },
  };
}

export default async function BookRecommendationRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BookRecommendationRoulette initialLocale={locale as Locale} />;
}
