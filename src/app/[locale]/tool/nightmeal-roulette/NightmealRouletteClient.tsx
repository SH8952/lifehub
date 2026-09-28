"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { i18nData, type Locale } from "./data";






const nightMenus: Record<string, string[]> = {
  Chicken: ["통닭", "양념치킨", "후라이드", "간장치킨", "파닭", "반반치킨"],
  Tteokbokki: ["떡볶이", "어묵떡볶이", "치즈떡볶이", "마라떡볶이", "로제떡볶이"],
  FriedRice: ["볶음밥", "김치볶음밥", "자장볶음밥", "짬뽕볶음밥", "새우볶음밥"],
  Noodles: ["짜장면", "짬뽕", "쟁반짜장", "냉면", "칼국수", "국수"],
  Ramen: ["라면", "신라면", "너구리", "삼양라면", "뚜껑라면", "김치라면"],
  Pizza: ["피자", "치즈피자", "페페로니", "야채피자", "하와이안피자"],
  BBQ: ["삼겹살", "오겹살", "소고기", "돼지고기", "불고기", "갈비"],
  Dumpling: ["만두", "군만두", "순대", "순대볶음", "찐만두"],
  Korean: ["전골", "부대찌개", "김치찌개", "된장찌개", "순두부찌개", "육개장"],
  International: ["마라탕", "마라샹궈", "팟타이", "쏨땀", "라멘", "우동"],
  Snacks: ["핫도그", "순대", "튀김", "군고구마", "호두과자", "팝콘"],
};

export default function NightmealRoulette({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [spinning, setSpinning] = useState(false);

  const d = i18nData[locale];

  const categories = ["all", ...Object.keys(nightMenus)];

  function getMenus() {
    if (selectedCategory === "all" || !selectedCategory) {
      return Object.values(nightMenus).flat();
    }
    return nightMenus[selectedCategory] || Object.values(nightMenus).flat();
  }

  const pickMenu = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    const menus = getMenus();
    let count = 0;
    const max = 10;
    const interval = setInterval(() => {
      setSelectedMenu(menus[Math.floor(Math.random() * menus.length)]);
      count++;
      if (count >= max) {
        clearInterval(interval);
        setSpinning(false);
        const final = menus[Math.floor(Math.random() * menus.length)];
        setSelectedMenu(final);
      }
    }, 60);
  }, [spinning, selectedCategory]);

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
            description: "Random late-night food menu recommender with category selection",
            applicationCategory: "UtilityApplication",
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
            className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Card className="border shadow-md">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-lg bg-muted p-4 space-y-4">
              <div>
                <p className="text-sm font-medium">{d.categories}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-md border px-3 py-1 text-sm ${selectedCategory === cat ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
                    >
                      {cat === "all"
                        ? locale === "ko"
                          ? "전체"
                          : locale === "ja"
                          ? "全て"
                          : locale === "en"
                          ? "All"
                          : "Todos"
                        : Object.keys(nightMenus).find((k) => k.toLowerCase() === cat) || cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-4xl font-bold text-indigo-700 min-h-[3rem] flex items-center justify-center">
                  {selectedMenu || (spinning ? (locale === "ko" ? "돌리는 중..." : "Spinning...") : "---")}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{selectedMenu ? d.result : ""}</p>
              </div>

              <button
                type="button"
                onClick={pickMenu}
                disabled={spinning}
                className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                {d.generate}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyRoulette}</h2>
        <p className="whitespace-pre-line leading-relaxed">{d.explanation}</p>
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

      <p className="mt-8 text-sm text-muted-foreground">{d.footer}</p>
      <p className="mt-4 text-xs text-muted-foreground">{d.limitations}</p>
    </div>
  );
}
