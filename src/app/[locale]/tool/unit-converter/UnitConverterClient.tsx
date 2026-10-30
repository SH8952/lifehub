"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

type Category = "length" | "weight" | "temperature" | "area" | "volume" | "speed";

const LENGTH_FACTORS: Record<string, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

const WEIGHT_FACTORS: Record<string, number> = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  t: 1000,
  oz: 0.0283495,
  lb: 0.453592,
};

const AREA_FACTORS: Record<string, number> = {
  "m2": 1,
  "km2": 1000000,
  ha: 10000,
  "ft2": 0.092903,
  ac: 4046.86,
};

const VOLUME_FACTORS: Record<string, number> = {
  mL: 0.001,
  L: 1,
  "m3": 1000,
  galUS: 3.78541,
  qtUS: 0.946353,
  cupUS: 0.236588,
};

const SPEED_FACTORS: Record<string, number> = {
  "m/s": 1,
  "km/h": 0.277778,
  mph: 0.44704,
  knot: 0.514444,
};

const FACTOR_MAP: Record<Exclude<Category, "temperature">, Record<string, number>> = {
  length: LENGTH_FACTORS,
  weight: WEIGHT_FACTORS,
  area: AREA_FACTORS,
  volume: VOLUME_FACTORS,
  speed: SPEED_FACTORS,
};

const UNIT_ORDER: Record<Category, string[]> = {
  length: ["mm", "cm", "m", "km", "in", "ft", "yd", "mi"],
  weight: ["mg", "g", "kg", "t", "oz", "lb"],
  temperature: ["C", "F", "K"],
  area: ["m2", "km2", "ha", "ft2", "ac"],
  volume: ["mL", "L", "m3", "galUS", "qtUS", "cupUS"],
  speed: ["m/s", "km/h", "mph", "knot"],
};

const TEMP_LABELS: Record<string, string> = { C: "°C", F: "°F", K: "K" };

function toCelsius(value: number, unit: string): number {
  if (unit === "C") return value;
  if (unit === "F") return ((value - 32) * 5) / 9;
  return value - 273.15;
}

function fromCelsius(value: number, unit: string): number {
  if (unit === "C") return value;
  if (unit === "F") return (value * 9) / 5 + 32;
  return value + 273.15;
}

function convert(category: Category, value: number, from: string, to: string): number {
  if (category === "temperature") {
    return fromCelsius(toCelsius(value, from), to);
  }
  const factors = FACTOR_MAP[category];
  const base = value * factors[from];
  return base / factors[to];
}

function formatResult(n: number): string {
  if (!isFinite(n)) return "-";
  const rounded = Math.round(n * 1e6) / 1e6;
  return rounded.toLocaleString(undefined, { maximumFractionDigits: 6 });
}

export default function UnitConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [category, setCategory] = useState<Category>("length");
  const units = UNIT_ORDER[category];
  const [fromUnit, setFromUnit] = useState(units[0]);
  const [toUnit, setToUnit] = useState(units[1]);
  const [value, setValue] = useState("1");

  useEffect(() => {
    const u = UNIT_ORDER[category];
    // eslint-disable-next-line react-hooks/set-state-in-effect -- 카테고리 변경 시 단위 초기화, 의도된 derived-state 패턴
    setFromUnit(u[0]);
    setToUnit(u[1]);
  }, [category]);

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (isNaN(num)) return "-";
    return formatResult(convert(category, num, fromUnit, toUnit));
  }, [category, value, fromUnit, toUnit]);

  const unitLabel = (u: string) => (category === "temperature" ? TEMP_LABELS[u] : u);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const categoryOptions: { value: Category; label: string }[] = [
    { value: "length", label: d.categoryLength },
    { value: "weight", label: d.categoryWeight },
    { value: "temperature", label: d.categoryTemperature },
    { value: "area", label: d.categoryArea },
    { value: "volume", label: d.categoryVolume },
    { value: "speed", label: d.categorySpeed },
  ];

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
            description: d.subtitle,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <label className="text-sm font-medium">{d.categoryLabel}</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          {categoryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <Card>
        <CardContent className="grid gap-4 p-4 md:grid-cols-[1fr_auto_1fr]">
          <div>
            <p className="mb-1 text-sm font-semibold text-muted-foreground">{d.fromLabel}</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-lg"
              />
              <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="rounded-md border px-2 py-2 text-sm">
                {units.map((u) => (
                  <option key={u} value={u}>
                    {unitLabel(u)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-end justify-center pb-2">
            <button onClick={handleSwap} className="rounded-md border px-3 py-2 text-sm hover:bg-muted" aria-label={d.swapBtn} title={d.swapBtn}>
              ⇄
            </button>
          </div>

          <div>
            <p className="mb-1 text-sm font-semibold text-muted-foreground">{d.toLabel}</p>
            <div className="flex gap-2">
              <input readOnly value={result} className="w-full rounded-md border bg-muted/30 px-3 py-2 text-lg font-semibold" />
              <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="rounded-md border px-2 py-2 text-sm">
                {units.map((u) => (
                  <option key={u} value={u}>
                    {unitLabel(u)}
                  </option>
                ))}
              </select>
            </div>
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
