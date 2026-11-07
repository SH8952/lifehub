"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const ROMAN_TABLE: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

function toRoman(num: number): string {
  let result = "";
  let n = num;
  for (const [value, symbol] of ROMAN_TABLE) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
}

function fromRoman(str: string): number | null {
  const s = str.toUpperCase().trim();
  if (!s) return null;
  if (!/^[MDCLXVI]+$/.test(s)) return null;
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const val = map[s[i]];
    if (val < prev) total -= val;
    else total += val;
    prev = val;
  }
  // validate round-trip
  if (total < 1 || total > 3999 || toRoman(total) !== s) return null;
  return total;
}

export default function RomanNumeralConverter({ initialLocale }: { initialLocale: Locale }) {
  const locale: Locale = initialLocale;
  const t = useTranslations("Tools");
  const d = data[locale];

  const [arabicInput, setArabicInput] = useState("2026");
  const [romanInput, setRomanInput] = useState("");
  const [lastEdited, setLastEdited] = useState<"arabic" | "roman">("arabic");

  const arabicNum = parseInt(arabicInput, 10);
  const arabicValid = !isNaN(arabicNum) && arabicNum >= 1 && arabicNum <= 3999;
  const romanFromArabic = arabicValid ? toRoman(arabicNum) : "";

  const romanParsed = fromRoman(romanInput);

  const displayRoman = lastEdited === "arabic" ? romanFromArabic : romanInput;
  const displayArabic = lastEdited === "roman" ? (romanParsed !== null ? String(romanParsed) : "") : arabicInput;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="h-6" aria-hidden="true" />

      <Card>
        <CardContent className="space-y-5 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">{d.arabicLabel}</label>
            <input
              type="text"
              value={displayArabic}
              onChange={(e) => {
                setArabicInput(e.target.value);
                setLastEdited("arabic");
              }}
              className="w-full rounded-md border px-3 py-3 text-2xl font-mono"
            />
            {lastEdited === "arabic" && arabicInput && !arabicValid && (
              <p className="mt-1 text-sm text-red-600">{d.outOfRange}</p>
            )}
          </div>

          <div className="text-center text-muted-foreground">⇅</div>

          <div>
            <label className="mb-1 block text-sm font-medium">{d.romanLabel}</label>
            <input
              type="text"
              value={displayRoman}
              onChange={(e) => {
                setRomanInput(e.target.value);
                setLastEdited("roman");
              }}
              className="w-full rounded-md border px-3 py-3 text-2xl font-mono uppercase"
            />
            {lastEdited === "roman" && romanInput && romanParsed === null && (
              <p className="mt-1 text-sm text-red-600">{d.invalidRoman}</p>
            )}
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
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
