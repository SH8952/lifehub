import { SITE_URL, languageAlternates } from "@/lib/seo";
import BalanceGameMatch from "./BalanceGameMatchClient";
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
      languages: languageAlternates("/tool/balance-game-match"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/balance-game-match`,
    },
  };
}

export default async function BalanceGameMatchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BalanceGameMatch initialLocale={locale as Locale} />;
}
