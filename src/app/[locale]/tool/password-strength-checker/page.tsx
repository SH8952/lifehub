import { SITE_URL, pageAlternates } from "@/lib/seo";
import PasswordStrengthChecker from "./PasswordStrengthCheckerClient";
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
    alternates: pageAlternates(locale, "/tool/password-strength-checker"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/password-strength-checker`,
    },
  };
}

export default async function PasswordStrengthCheckerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PasswordStrengthChecker initialLocale={locale as Locale} />;
}
