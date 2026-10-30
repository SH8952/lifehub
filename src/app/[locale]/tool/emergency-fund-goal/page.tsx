import { SITE_URL, languageAlternates } from "@/lib/seo";
import EmergencyFundGoal from "./EmergencyFundGoalClient";
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
      languages: languageAlternates("/tool/emergency-fund-goal"),
    },
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/emergency-fund-goal`,
    },
  };
}

export default async function EmergencyFundGoalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <EmergencyFundGoal initialLocale={locale as Locale} />;
}
