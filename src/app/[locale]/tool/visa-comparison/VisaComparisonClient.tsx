"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { i18nData, type Locale, type CountryVisa, type Data } from "./data";

type VisaCategory = "all" | "visa-free" | "visa-on-arrival" | "evisa" | "visa-required";







const labelFromCategory = (d: Data, c: CountryVisa): string => {
  switch (c.category) {
    case "visa-free":
      return `${d.visaFree} ${typeof c.visaFreeDays === "number" ? `(${c.visaFreeDays}일)` : ""}`;
    case "visa-on-arrival":
      return d.visaOnArrival;
    case "evisa":
      return d.eVisa;
    case "visa-required":
      return d.visaRequired;
  }
};

export default function VisaComparison({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<VisaCategory>("all");

  const d = i18nData[locale];

  const categories: VisaCategory[] = ["all", "visa-free", "visa-on-arrival", "evisa", "visa-required"];

  const filtered = d.countries.filter((c) => {
    const q = search.toLowerCase();
    const matchCountry =
      c.country.toLowerCase().includes(q) ||
      c.countryEn.toLowerCase().includes(q);
    const matchFilter = activeFilter === "all" || c.category === activeFilter;
    return matchCountry && matchFilter;
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: "Worldwide visa comparison for Korean passport",
            applicationCategory: "TravelApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      {/* Intro */}
      <div className="mt-4 text-base leading-relaxed text-muted-foreground whitespace-pre-line">{d.intro}</div>

      {/* Filter */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder={d.filterPlaceholder}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-md border px-3 py-1.5 text-sm ${
              activeFilter === cat
                ? "bg-indigo-600 text-white"
                : "hover:bg-muted"
            }`}
          >
            {cat === "all"
              ? d.showAll
              : cat === "visa-free"
              ? d.visaFree
              : cat === "visa-on-arrival"
              ? d.visaOnArrival
              : cat === "evisa"
              ? d.eVisa
              : d.visaRequired}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-2 py-8 text-center text-muted-foreground">
            {d.filterNone}
          </p>
        ) : (
          filtered.map((c) => {
            const catColor =
              c.category === "visa-free"
                  ? "text-green-600"
                  : c.category === "visa-on-arrival"
                  ? "text-blue-600"
                  : c.category === "evisa"
                  ? "text-purple-600"
                  : "text-red-600";
            const catBg =
              c.category === "visa-free"
                  ? "bg-green-50 border-green-200"
                  : c.category === "visa-on-arrival"
                  ? "bg-blue-50 border-blue-200"
                  : c.category === "evisa"
                  ? "bg-purple-50 border-purple-200"
                  : "bg-red-50 border-red-200";
            return (
              <Card key={c.countryEn} className={`border ${catBg} shadow-sm`}>
                <CardContent className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-semibold">{c.country}</h3>
                    <span className={`text-xs font-medium ${catColor}`}>
                      {labelFromCategory(d, c)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.countryEn}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Why section */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.why}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.whyExplanation}</p>
      </section>

      {/* Tips */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <div className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-3">
                <p className="text-base">
                  <span className="mr-2 text-indigo-600">•</span>
                  {tip}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
