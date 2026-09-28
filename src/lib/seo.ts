import { routing } from "@/i18n/routing";

/**
 * The production site URL. Set NEXT_PUBLIC_SITE_URL once the real domain
 * is purchased and pointed at Vercel — everything below (canonical URLs,
 * hreflang alternates, Open Graph, JSON-LD) derives from this one value.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://alltools365.com";

const LOCALE_TO_OG: Record<(typeof routing.locales)[number], string> = {
  en: "en_US",
  ko: "ko_KR",
  es: "es_ES",
  ja: "ja_JP",
};

export function ogLocale(locale: string) {
  return LOCALE_TO_OG[locale as (typeof routing.locales)[number]] ?? "en_US";
}

/** hreflang alternates for every supported locale, plus x-default. */
export function languageAlternates(path = "") {
  const entries = routing.locales.map(
    (locale) => [locale, `${SITE_URL}/${locale}${path}`] as const,
  );
  return {
    ...Object.fromEntries(entries),
    "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
  };
}

/** BreadcrumbList JSON-LD for search-result breadcrumb trails. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webApplicationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LifeHub",
    url: `${SITE_URL}/${locale}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any (runs in the browser)",
    description:
      "A collection of free browser-based calculators and utility tools for everyday life — health, finance, travel, and more. No sign-up, no server upload, 100% client-side.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    inLanguage: locale,
  };
}
