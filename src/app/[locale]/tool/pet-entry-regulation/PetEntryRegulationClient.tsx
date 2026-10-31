"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { i18nData, type Locale, type CountryEntry } from "./data";








type SortDir = "asc" | "desc" | null;

export default function PetEntryRegulation({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [search, setSearch] = useState("");
  const [sortDir, setSortDir] = useState<SortDir>(null);

  const d = i18nData[locale];

  const filtered = d.countries
    .filter((c) => {
      const q = search.toLowerCase();
      return (
        c.country.toLowerCase().includes(q) ||
        c.countryEn.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortDir === null) return 0;
      if (sortDir === "asc") return a.days - b.days;
      return b.days - a.days;
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
            description: "Pet entry regulations by country",
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

      {/* Language selector */}
      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Intro */}
      <div className="mt-4 text-base leading-relaxed text-muted-foreground whitespace-pre-line">{d.intro}</div>

      {/* Search + sort */}
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
        <button
          onClick={() => setSortDir((prev) => (prev === null ? "asc" : prev === "asc" ? "desc" : null))}
          className="whitespace-nowrap rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          {sortDir === null
            ? "정렬: —"
            : sortDir === "asc"
            ? "격리 ↑"
            : "격리 ↓"}
        </button>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="py-3 pl-4 text-left font-semibold">{d.countryName}</th>
              <th className="py-3 px-4 text-left font-semibold">{d.quarantine}</th>
              <th className="py-3 px-4 text-left font-semibold">{d.vaccination}</th>
              <th className="py-3 px-4 text-left font-semibold">{d.healthCert}</th>
              <th className="py-3 pr-4 text-left font-semibold">{d.note}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-muted-foreground"
                >
                  {d.filterNone}
                </td>
              </tr>
            ) : (
              filtered.map((c, i) => (
                <tr
                  key={c.countryEn}
                  className={`border-b ${i % 2 === 0 ? "bg-white" : "bg-muted/30"} hover:bg-muted/60`}
                >
                  <td className="py-3 pl-4 font-medium">{c.country}</td>
                  <td className="py-3 px-4">{c.quarantine}</td>
                  <td className="py-3 px-4">{c.vaccination}</td>
                  <td className="py-3 px-4">{c.healthCert}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{c.note}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
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
