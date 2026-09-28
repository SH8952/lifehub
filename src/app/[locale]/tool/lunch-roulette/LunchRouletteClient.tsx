"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { i18nData, type Locale } from "./data";






const lunchMenus: Record<string, string[]> = {
  Korean: ["김치찌개", "된장찌개", "비빔밥", "제육볶음", "한우구이", "육개장", "순두부찌개", "부대찌개", "국수", "냉면", "칼국수", "만두", "전골"],
  Chinese: ["짜장면", "짬뽕", "탕수육", "유린기", "마라탕", "마라샹궈", "볶음밥", "군만두", "깐풍기", "양장피", "낙지볶음"],
  Japanese: ["라멘", "우동", "돈카츠", "초밥", "돈부리", "소바", "규동", "야키니쿠", "카레라이스", "덴푸라"],
  Western: ["파스타", "피자", "버거", "샐러드", "스테이크", "치킨", "샌드위치", "리조또", "그라탕", "오믈렛"],
  Vietnamese: ["쌀국수(포)", "반미", "분짜", "반세오", "월남쌈", "분보후에"],
  Thai: ["팟타이", "똠얌꿍", "그린커리", "쏨땀", "카오팟", "마사만커리"],
  Mexican: ["타코", "부리또", "엔칠라다", "나초", "케사디아", "파히타"],
  Indonesian: ["나시고렝", "미고렝", "사테", "가도가도", "른당", "바쏘"],
  Dessert: ["케이크", "머핀", "브라우니", "마카롱", "쿠키", "타르트"],
  Drink: ["주스", "스무디", "라떼", "아메리카노", "녹차", "얼그레이"],
  FastFood: ["맥도날드", "KFC", "피자헛", "도미노피자", "버거킹", "스타벅스", "맘스터치", "노브랜드버거"],
  Chicken: ["후라이드치킨", "양념치킨", "간장치킨", "반반치킨", "파닭", "순살치킨"],
};

export default function LunchRoulette({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [spinning, setSpinning] = useState(false);

  const d = i18nData[locale];

  const categories = ["all", ...Object.keys(lunchMenus)];

  function getMenus() {
    if (selectedCategory === "all" || !selectedCategory) {
      return Object.values(lunchMenus).flat();
    }
    return lunchMenus[selectedCategory] || Object.values(lunchMenus).flat();
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
            description: "Random lunch menu recommender with category selection",
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
                          : locale === "es"
                          ? "Todos"
                          : "All"
                        : Object.keys(lunchMenus).find((k) => k.toLowerCase() === cat) || cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-4xl font-bold text-indigo-700 min-h-[3rem] flex items-center justify-center">
                  {selectedMenu || (spinning ? (locale === "ko" ? "돌리는 중..." : "Spinning...") : "---")}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selectedMenu ? (locale === "ko" ? d.result : locale === "ja" ? d.result : locale === "es" ? d.result : "Today's menu:") : ""}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={pickMenu}
                  disabled={spinning}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                  size="lg"
                >
                  {d.generate}
                </Button>
              </div>
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
