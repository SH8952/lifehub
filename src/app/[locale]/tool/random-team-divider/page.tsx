import { SITE_URL, pageAlternates } from "@/lib/seo";
import RandomTeamDivider from "./RandomTeamDividerClient";
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
    alternates: pageAlternates(locale, "/tool/random-team-divider"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/random-team-divider`,
    },
  };
}

export default async function RandomTeamDividerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RandomTeamDivider initialLocale={locale as Locale} />;
}
