import { SITE_URL, pageAlternates } from "@/lib/seo";
import RoleAssignmentRoulette from "./RoleAssignmentRouletteClient";
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
    alternates: pageAlternates(locale, "/tool/role-assignment-roulette"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/role-assignment-roulette`,
    },
  };
}

export default async function RoleAssignmentRoulettePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RoleAssignmentRoulette initialLocale={locale as Locale} />;
}
