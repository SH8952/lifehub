"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  regionFilter: string;
  all: string;
  asia: string;
  northAmerica: string;
  europe: string;
  oceania: string;
  city: string;
  country: string;
  rent: string;
  food: string;
  transport: string;
  entertainment: string;
  utilities: string;
  total: string;
  note: string;
  dataNote: string;
}

function formatKRW(n: number): string {
  return n.toLocaleString("ko-KR");
}

interface CityRow {
  city: string;
  region: string;
  rent: number;
  food: number;
  transport: number;
  entertainment: number;
  utilities: number;
}

const regionLabels: Record<Locale, Record<string, string>> = {
  ko: { all: "전체", asia: "아시아", northAmerica: "북미", europe: "유럽", oceania: "오세아니아" },
  en: { all: "All", asia: "Asia", northAmerica: "North America", europe: "Europe", oceania: "Oceania" },
  ja: { all: "すべて", asia: "アジア", northAmerica: "北米", europe: "欧州", oceania: "オセアニア" },
  es: { all: "Todas", asia: "Asia", northAmerica: "América del Norte", europe: "Europa", oceania: "Oceanía" },
};

export default function CityLivingCost({
  d,
  countryNames,
  lang,
}: {
  d: Data;
  countryNames: Record<string, string>;
  lang: Locale;
}) {
  const [region, setRegion] = useState("all");
  const [sortBy, setSortBy] = useState<"total" | "rent" | "food" | "transport">("total");

  const regions = useMemo(() => [
    { key: "all", label: regionLabels[lang].all },
    { key: "asia", label: regionLabels[lang].asia },
    { key: "northAmerica", label: regionLabels[lang].northAmerica },
    { key: "europe", label: regionLabels[lang].europe },
    { key: "oceania", label: regionLabels[lang].oceania },
  ], [lang]);

  const filteredCities = useMemo(() => {
    const filtered = region === "all"
      ? cityData
      : cityData.filter((c) => c.region === region);

    return [...filtered].sort((a, b) => {
      if (sortBy === "total") {
        const totalA = a.rent + a.food + a.transport + a.entertainment + a.utilities;
        const totalB = b.rent + b.food + b.transport + b.entertainment + b.utilities;
        return totalA - totalB;
      }
      return a[sortBy] - b[sortBy];
    });
  }, [region, sortBy]);

  const totalCost = (city: CityRow) =>
    city.rent + city.food + city.transport + city.entertainment + city.utilities;

  const sortLabels: Record<string, string> = {
    total: d.total,
    rent: d.rent,
    food: d.food,
    transport: d.transport,
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Region filter */}
      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm font-medium">{d.regionFilter}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setRegion(r.key)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                region === r.key
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sort controls */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">{d.total} 기준:</span>
        {(Object.keys(sortLabels) as Array<keyof typeof sortLabels>).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setSortBy(key as "total" | "rent" | "food" | "transport")}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              sortBy === key
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {sortLabels[key]}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium">{d.city}</th>
              <th className="px-4 py-3 text-left font-medium">{d.country}</th>
              <th className="px-4 py-3 text-right font-medium">{d.rent}</th>
              <th className="px-4 py-3 text-right font-medium">{d.food}</th>
              <th className="px-4 py-3 text-right font-medium">{d.transport}</th>
              <th className="px-4 py-3 text-right font-medium">{d.entertainment}</th>
              <th className="px-4 py-3 text-right font-medium">{d.utilities}</th>
              <th className="px-4 py-3 text-right font-medium">{d.total}</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.map((city) => (
              <tr
                key={city.city}
                className="border-t hover:bg-muted/50"
              >
                <td className="px-4 py-3 font-medium">{city.city}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {countryNames[city.city] || city.city}
                </td>
                <td className="px-4 py-3 text-right text-muted-foreground">{formatKRW(city.rent)}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{formatKRW(city.food)}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{formatKRW(city.transport)}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{formatKRW(city.entertainment)}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{formatKRW(city.utilities)}</td>
                <td className="px-4 py-3 text-right font-semibold text-indigo-600">{formatKRW(totalCost(city))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">{d.note}</p>
      <p className="text-xs text-muted-foreground">{d.dataNote}</p>
    </div>
  );
}

// City data with native city names (Korean for East Asian cities, English for others).
const cityData: CityRow[] = [
  // Asia
  { city: "서울", region: "asia", rent: 1500000, food: 600000, transport: 130000, entertainment: 500000, utilities: 150000 },
  { city: "東京", region: "asia", rent: 1800000, food: 700000, transport: 90000, entertainment: 600000, utilities: 150000 },
  { city: "大阪", region: "asia", rent: 1200000, food: 650000, transport: 85000, entertainment: 500000, utilities: 130000 },
  { city: "台北", region: "asia", rent: 800000, food: 400000, transport: 40000, entertainment: 300000, utilities: 100000 },
  { city: "กรุงเทพฯ", region: "asia", rent: 700000, food: 350000, transport: 50000, entertainment: 400000, utilities: 120000 },
  { city: "Singapore", region: "asia", rent: 2500000, food: 800000, transport: 80000, entertainment: 700000, utilities: 150000 },
  { city: "호치민시", region: "asia", rent: 500000, food: 300000, transport: 30000, entertainment: 250000, utilities: 80000 },
  // North America
  { city: "필라델피아", region: "northAmerica", rent: 2000000, food: 900000, transport: 100000, entertainment: 600000, utilities: 200000 },
  { city: "뉴욕", region: "northAmerica", rent: 3500000, food: 1200000, transport: 130000, entertainment: 900000, utilities: 250000 },
  { city: "로스앤젤레스", region: "northAmerica", rent: 3000000, food: 1100000, transport: 120000, entertainment: 800000, utilities: 230000 },
  // Europe
  { city: "런던", region: "europe", rent: 2800000, food: 1000000, transport: 180000, entertainment: 700000, utilities: 180000 },
  { city: "파리", region: "europe", rent: 2500000, food: 1100000, transport: 75000, entertainment: 800000, utilities: 200000 },
  { city: "베를린", region: "europe", rent: 1500000, food: 800000, transport: 100000, entertainment: 500000, utilities: 150000 },
  { city: "마드리드", region: "europe", rent: 1200000, food: 700000, transport: 60000, entertainment: 500000, utilities: 130000 },
  { city: "바르셀로나", region: "europe", rent: 1300000, food: 700000, transport: 60000, entertainment: 550000, utilities: 130000 },
  // Oceania
  { city: "멜버른", region: "oceania", rent: 2000000, food: 900000, transport: 120000, entertainment: 600000, utilities: 150000 },
  { city: "시드니", region: "oceania", rent: 2300000, food: 950000, transport: 130000, entertainment: 650000, utilities: 160000 },
];
