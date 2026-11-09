import { SITE_URL, pageAlternates } from "@/lib/seo";
import TruthGameQuestions from "./TruthGameQuestionsClient";
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
    alternates: pageAlternates(locale, "/tool/truth-game-questions"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/truth-game-questions`,
    },
  };
}

export default async function TruthGameQuestionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TruthGameQuestions initialLocale={locale as Locale} />;
}
