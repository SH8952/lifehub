import { SITE_URL, pageAlternates } from "@/lib/seo";
import TimerStopwatch from "./TimerStopwatchClient";
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
    alternates: pageAlternates(locale, "/tool/timer-stopwatch"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/timer-stopwatch`,
    },
  };
}

export default async function TimerStopwatchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TimerStopwatch initialLocale={locale as Locale} />;
}
