import { SITE_URL, pageAlternates } from "@/lib/seo";
import MovieRecommendationRoulette from "./MovieRecommendationRouletteClient";
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
    alternates: pageAlternates(locale, "/tool/movie-recommendation-roulette"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/movie-recommendation-roulette`,
    },
  };
}

export default async function MovieRecommendationRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MovieRecommendationRoulette initialLocale={locale as Locale} />;
}
