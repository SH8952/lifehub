import { SITE_URL, pageAlternates } from "@/lib/seo";
import PomodoroTimer from "./PomodoroTimerClient";
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
    alternates: pageAlternates(locale, "/tool/pomodoro-timer"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/pomodoro-timer`,
    },
  };
}

export default async function PomodoroTimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PomodoroTimer initialLocale={locale as Locale} />;
}
