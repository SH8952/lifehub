import { SITE_URL, pageAlternates } from "@/lib/seo";
import CurrencyExchangeFeeCompare from "./CurrencyExchangeFeeCompareClient";
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
    alternates: pageAlternates(locale, "/tool/currency-exchange-fee-compare"),
    openGraph: {
      title,
      description: d.subtitle,
      url: `${SITE_URL}/${locale}/tool/currency-exchange-fee-compare`,
    },
  };
}

export default async function CurrencyExchangeFeeComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CurrencyExchangeFeeCompare initialLocale={locale as Locale} />;
}
