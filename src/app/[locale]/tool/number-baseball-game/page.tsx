import { SITE_URL, languageAlternates } from "@/lib/seo";
import NumberBaseballGame from "./NumberBaseballGameClient";
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
      languages: languageAlternates("/tool/number-baseball-game"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/number-baseball-game`,
    },
  };
}

export default async function NumberBaseballGamePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NumberBaseballGame initialLocale={locale as Locale} />;
}
