import { SITE_URL, pageAlternates } from "@/lib/seo";
import InstallmentVsLumpsum from "./InstallmentVsLumpsumClient";
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
    alternates: pageAlternates(locale, "/tool/installment-vs-lumpsum"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/installment-vs-lumpsum`,
    },
  };
}

export default async function InstallmentVsLumpsumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <InstallmentVsLumpsum initialLocale={locale as Locale} />;
}
