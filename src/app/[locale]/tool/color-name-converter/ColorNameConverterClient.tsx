"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { data, type Locale } from "./data";

const NAMED_COLORS: [string, string][] = [
  ["AliceBlue", "#F0F8FF"],
  ["AntiqueWhite", "#FAEBD7"],
  ["Aqua", "#00FFFF"],
  ["Aquamarine", "#7FFFD4"],
  ["Azure", "#F0FFFF"],
  ["Beige", "#F5F5DC"],
  ["Bisque", "#FFE4C4"],
  ["Black", "#000000"],
  ["BlanchedAlmond", "#FFEBCD"],
  ["Blue", "#0000FF"],
  ["BlueViolet", "#8A2BE2"],
  ["Brown", "#A52A2A"],
  ["BurlyWood", "#DEB887"],
  ["CadetBlue", "#5F9EA0"],
  ["Chartreuse", "#7FFF00"],
  ["Chocolate", "#D2691E"],
  ["Coral", "#FF7F50"],
  ["CornflowerBlue", "#6495ED"],
  ["Cornsilk", "#FFF8DC"],
  ["Crimson", "#DC143C"],
  ["Cyan", "#00FFFF"],
  ["DarkBlue", "#00008B"],
  ["DarkCyan", "#008B8B"],
  ["DarkGoldenRod", "#B8860B"],
  ["DarkGray", "#A9A9A9"],
  ["DarkGreen", "#006400"],
  ["DarkKhaki", "#BDB76B"],
  ["DarkMagenta", "#8B008B"],
  ["DarkOliveGreen", "#556B2F"],
  ["DarkOrange", "#FF8C00"],
  ["DarkOrchid", "#9932CC"],
  ["DarkRed", "#8B0000"],
  ["DarkSalmon", "#E9967A"],
  ["DarkSeaGreen", "#8FBC8F"],
  ["DarkSlateBlue", "#483D8B"],
  ["DarkSlateGray", "#2F4F4F"],
  ["DarkTurquoise", "#00CED1"],
  ["DarkViolet", "#9400D3"],
  ["DeepPink", "#FF1493"],
  ["DeepSkyBlue", "#00BFFF"],
  ["DimGray", "#696969"],
  ["DodgerBlue", "#1E90FF"],
  ["FireBrick", "#B22222"],
  ["FloralWhite", "#FFFAF0"],
  ["ForestGreen", "#228B22"],
  ["Fuchsia", "#FF00FF"],
  ["Gainsboro", "#DCDCDC"],
  ["GhostWhite", "#F8F8FF"],
  ["Gold", "#FFD700"],
  ["GoldenRod", "#DAA520"],
  ["Gray", "#808080"],
  ["Green", "#008000"],
  ["GreenYellow", "#ADFF2F"],
  ["HoneyDew", "#F0FFF0"],
  ["HotPink", "#FF69B4"],
  ["IndianRed", "#CD5C5C"],
  ["Indigo", "#4B0082"],
  ["Ivory", "#FFFFF0"],
  ["Khaki", "#F0E68C"],
  ["Lavender", "#E6E6FA"],
  ["LavenderBlush", "#FFF0F5"],
  ["LawnGreen", "#7CFC00"],
  ["LemonChiffon", "#FFFACD"],
  ["LightBlue", "#ADD8E6"],
  ["LightCoral", "#F08080"],
  ["LightCyan", "#E0FFFF"],
  ["LightGoldenRodYellow", "#FAFAD2"],
  ["LightGray", "#D3D3D3"],
  ["LightGreen", "#90EE90"],
  ["LightPink", "#FFB6C1"],
  ["LightSalmon", "#FFA07A"],
  ["LightSeaGreen", "#20B2AA"],
  ["LightSkyBlue", "#87CEFA"],
  ["LightSlateGray", "#778899"],
  ["LightSteelBlue", "#B0C4DE"],
  ["LightYellow", "#FFFFE0"],
  ["Lime", "#00FF00"],
  ["LimeGreen", "#32CD32"],
  ["Linen", "#FAF0E6"],
  ["Magenta", "#FF00FF"],
  ["Maroon", "#800000"],
  ["MediumAquaMarine", "#66CDAA"],
  ["MediumBlue", "#0000CD"],
  ["MediumOrchid", "#BA55D3"],
  ["MediumPurple", "#9370DB"],
  ["MediumSeaGreen", "#3CB371"],
  ["MediumSlateBlue", "#7B68EE"],
  ["MediumSpringGreen", "#00FA9A"],
  ["MediumTurquoise", "#48D1CC"],
  ["MediumVioletRed", "#C71585"],
  ["MidnightBlue", "#191970"],
  ["MintCream", "#F5FFFA"],
  ["MistyRose", "#FFE4E1"],
  ["Moccasin", "#FFE4B5"],
  ["NavajoWhite", "#FFDEAD"],
  ["Navy", "#000080"],
  ["OldLace", "#FDF5E6"],
  ["Olive", "#808000"],
  ["OliveDrab", "#6B8E23"],
  ["Orange", "#FFA500"],
  ["OrangeRed", "#FF4500"],
  ["Orchid", "#DA70D6"],
  ["PaleGoldenRod", "#EEE8AA"],
  ["PaleGreen", "#98FB98"],
  ["PaleTurquoise", "#AFEEEE"],
  ["PaleVioletRed", "#DB7093"],
  ["PapayaWhip", "#FFEFD5"],
  ["PeachPuff", "#FFDAB9"],
  ["Peru", "#CD853F"],
  ["Pink", "#FFC0CB"],
  ["Plum", "#DDA0DD"],
  ["PowderBlue", "#B0E0E6"],
  ["Purple", "#800080"],
  ["Red", "#FF0000"],
  ["RosyBrown", "#BC8F8F"],
  ["RoyalBlue", "#4169E1"],
  ["SaddleBrown", "#8B4513"],
  ["Salmon", "#FA8072"],
  ["SandyBrown", "#F4A460"],
  ["SeaGreen", "#2E8B57"],
  ["SeaShell", "#FFF5EE"],
  ["Sienna", "#A0522D"],
  ["Silver", "#C0C0C0"],
  ["SkyBlue", "#87CEEB"],
  ["SlateBlue", "#6A5ACD"],
  ["SlateGray", "#708090"],
  ["Snow", "#FFFAFA"],
  ["SpringGreen", "#00FF7F"],
  ["SteelBlue", "#4682B4"],
  ["Tan", "#D2B48C"],
  ["Teal", "#008080"],
  ["Thistle", "#D8BFD8"],
  ["Tomato", "#FF6347"],
  ["Turquoise", "#40E0D0"],
  ["Violet", "#EE82EE"],
  ["Wheat", "#F5DEB3"],
  ["White", "#FFFFFF"],
  ["WhiteSmoke", "#F5F5F5"],
  ["Yellow", "#FFFF00"],
  ["YellowGreen", "#9ACD32"],
];

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function closestColorName(hex: string): string | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  let best = NAMED_COLORS[0];
  let bestDist = Infinity;
  for (const [name, h] of NAMED_COLORS) {
    const crgb = hexToRgb(h);
    if (!crgb) continue;
    const dist = (rgb[0] - crgb[0]) ** 2 + (rgb[1] - crgb[1]) ** 2 + (rgb[2] - crgb[2]) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      best = [name, h];
    }
  }
  return best[0];
}

export default function ColorNameConverter({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const d = data[locale];

  const [hex, setHex] = useState("#4F46E5");
  const [copied, setCopied] = useState(false);

  const closest = useMemo(() => closestColorName(hex), [hex]);
  const rgb = hexToRgb(hex);

  const copyHex = (h: string) => {
    navigator.clipboard.writeText(h);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
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
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-primary text-primary-foreground" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={rgb ? hex : "#4F46E5"}
              onChange={(e) => setHex(e.target.value)}
              className="h-14 w-14 cursor-pointer rounded-md border"
            />
            <div className="flex-1">
              <label className="mb-1 block text-sm font-medium">{d.hexLabel}</label>
              <input
                type="text"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                onClick={() => copyHex(hex)}
                className="w-full cursor-pointer rounded-md border px-3 py-2 font-mono text-sm"
              />
            </div>
          </div>
          {copied && <p className="text-xs text-indigo-600">{d.copied}</p>}

          {closest && (
            <div className="rounded-lg bg-indigo-50 p-4 text-center">
              <p className="text-sm text-indigo-600">{d.closestName}</p>
              <p className="mt-1 text-2xl font-bold text-indigo-800">{closest}</p>
            </div>
          )}

          <div>
            <p className="mb-2 text-sm font-medium">{d.nameListLabel}</p>
            <div className="grid max-h-80 grid-cols-4 gap-2 overflow-y-auto sm:grid-cols-6">
              {NAMED_COLORS.map(([name, h]) => (
                <button
                  key={name}
                  onClick={() => setHex(h)}
                  className="flex flex-col items-center gap-1 rounded-md border p-1.5 hover:bg-muted"
                  title={name}
                >
                  <span className="h-6 w-full rounded" style={{ backgroundColor: h }} />
                  <span className="w-full truncate text-center text-[10px]">{name}</span>
                </button>
              ))}
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
