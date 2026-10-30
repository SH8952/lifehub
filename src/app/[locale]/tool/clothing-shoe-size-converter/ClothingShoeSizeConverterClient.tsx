"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Tab = "shoesMen" | "shoesWomen" | "clothing";

const SHOES_MEN: [number, number, number, number][] = [
  [250, 7, 40, 6],
  [255, 7.5, 40.5, 6.5],
  [260, 8, 41, 7],
  [265, 8.5, 42, 7.5],
  [270, 9, 42.5, 8],
  [275, 9.5, 43, 8.5],
  [280, 10, 44, 9],
  [285, 10.5, 44.5, 9.5],
  [290, 11, 45, 10],
];

const SHOES_WOMEN: [number, number, number, number][] = [
  [220, 5, 35, 2.5],
  [225, 5.5, 35.5, 3],
  [230, 6, 36, 3.5],
  [235, 6.5, 37, 4],
  [240, 7, 37.5, 4.5],
  [245, 7.5, 38, 5],
  [250, 8, 38.5, 5.5],
  [255, 8.5, 39, 6],
  [260, 9, 40, 6.5],
];

const CLOTHING: [number, string, number, number][] = [
  [85, "XS", 2, 34],
  [90, "S", 4, 36],
  [95, "S/M", 6, 38],
  [100, "M", 8, 40],
  [105, "L", 10, 42],
  [110, "L/XL", 12, 44],
  [115, "XL", 14, 46],
  [120, "XXL", 16, 48],
];

export default function ClothingShoeSizeConverterClient({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const d = data[locale];

  const [tab, setTab] = useState<Tab>("shoesMen");

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-amber-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-2">
        {([
          ["shoesMen", d.tabShoesMen],
          ["shoesWomen", d.tabShoesWomen],
          ["clothing", d.tabClothing],
        ] as [Tab, string][]).map(([val, label]) => (
          <button
            key={val}
            onClick={() => setTab(val)}
            className={`flex-1 rounded-md border px-3 py-2 text-sm font-medium ${tab === val ? "bg-amber-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  {tab === "shoesMen" && (
                    <>
                      <th className="py-2">{d.colKr}</th>
                      <th className="py-2">{d.colUs}</th>
                      <th className="py-2">{d.colEu}</th>
                      <th className="py-2">{d.colUk}</th>
                    </>
                  )}
                  {tab === "shoesWomen" && (
                    <>
                      <th className="py-2">{d.colKr}</th>
                      <th className="py-2">{d.colUs}</th>
                      <th className="py-2">{d.colEu}</th>
                      <th className="py-2">{d.colUk}</th>
                    </>
                  )}
                  {tab === "clothing" && (
                    <>
                      <th className="py-2">{d.colClothingKr}</th>
                      <th className="py-2">{d.colClothingIntl}</th>
                      <th className="py-2">{d.colClothingUs}</th>
                      <th className="py-2">{d.colClothingEu}</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {tab === "shoesMen" &&
                  SHOES_MEN.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      {row.map((val, j) => (
                        <td key={j} className="py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                {tab === "shoesWomen" &&
                  SHOES_WOMEN.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      {row.map((val, j) => (
                        <td key={j} className="py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                {tab === "clothing" &&
                  CLOTHING.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      {row.map((val, j) => (
                        <td key={j} className="py-2">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.howTitle}</h2>
        <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
          {d.howSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">
                  {i + 1}. {faq.q}
                </p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-2 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
