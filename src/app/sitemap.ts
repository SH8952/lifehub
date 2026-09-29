import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

const CATEGORY_IDS = ["life-health", "finance", "fun-entertainment", "image-media", "document-pdf"];

const STATIC_PAGES = ["about", "contact", "privacy", "terms"];

const TOOL_IDS = [
  "age-calculator",
  "bmi",
  "bmr-calculator",
  "tdee",
  "ovulation",
  "fasting-timer",
  "adhd-checklist",
  "diabetes-check",
  "construction-cost",
  "far-calculator",
  "lunch-roulette",
  "nightmeal-roulette",
  "study-method",
  "abc-juice",
  "mosquito-sound",
  "rat-sound",
  "pet-entry-regulation",
  "visa-comparison",
  "supplement-recommender",
  "word-practice",
  "monthly-cost",
  "fixed-deposit-interest",
  "2nd-loan",
  "saju-pool",
  "daily-fortune",
  "tojung-fortune",
  "zodiac-finder",
  "compatibility",
  "fortune-cookie",
  "image-compressor",
  "image-resizer",
  "image-rotate-filter",
  "image-format-converter",
  "image-watermark",
  "text-to-pdf",
  "html-to-pdf",
  "pdf-page-numbers",
  "pdf-merge-split",
  "pdf-to-image",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
    });

    for (const categoryId of CATEGORY_IDS) {
      entries.push({
        url: `${SITE_URL}/${locale}/category/${categoryId}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const page of STATIC_PAGES) {
      entries.push({
        url: `${SITE_URL}/${locale}/${page}`,
        changeFrequency: "monthly",
        priority: 0.3,
      });
    }

    for (const toolId of TOOL_IDS) {
      entries.push({
        url: `${SITE_URL}/${locale}/tool/${toolId}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
