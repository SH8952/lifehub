"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  title: string;
  subtitle: string;
  lunch: string;
  generate: string;
  result: string;
  again: string;
  categories: string;
  selectCategory: string;
  allMenu: string;
  limitations: string;
  whyRoulette: string;
  explanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "점심 메뉴 룰렛",
    subtitle: "무엇을 먹을지 고민일 때! 룰렛을 돌려 메뉴를 정해보세요.",
    lunch: "점심",
    generate: "메뉴 뽑기",
    result: "今天 점심 메뉴는",
    again: "다시 뽑기",
    categories: "카테고리",
    selectCategory: "전체 메뉴",
    allMenu: "전체",
    limitations: "선정된 메뉴는 참고용이며, 실제 영업 여부와 메뉴는 다를 수 있습니다.",
    whyRoulette: "왜 점심 메뉴 룰렛이 필요한가요?",
    explanation:
      "매일 똑같은 점심만 먹지 않았나요? 점심 메뉴 룰렛이 고민을 해결해드립니다.\n\n10개 이상의 카테고리에서 랜덤으로 메뉴를 추천해드리니, 새로운 조합을 발견할 수 있습니다.\n\n친구들과 함께 '오늘 점심 뭐 먹지?' 고민을 공유하고 함께 룰렛을 돌려보세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "다른 카테고리도 추가될 수 있나요?", a: "네, 인기 카테고리를 수시로 업데이트하고 있습니다. 댓글로 원하는 카테고리를 알려주세요!" },
      { q: "룰렛은 몇 번이나 돌릴 수 있나요?", a: "무제한으로 돌릴 수 있습니다. 마음에 드는 메뉴가 나올 때까지 도전해보세요." },
      { q: "회식을 위한 메뉴 추천도 가능한가요?", a: "기본 메뉴 외에 '회식' category를 추가로 준비 중입니다." },
    ],
  },
  en: {
    title: "Lunch Menu Roulette",
    subtitle: "Can't decide what to eat for lunch? Let the roulette decide for you!",
    lunch: "Lunch",
    generate: "Pick Menu",
    result: "Today's lunch menu is",
    again: "Pick Again",
    categories: "Categories",
    selectCategory: "All Menus",
    allMenu: "All",
    limitations: "Selected menus are for reference only. Actual availability and menus may vary.",
    whyRoulette: "Why do you need a lunch menu roulette?",
    explanation:
      "Tired of eating the same lunch every day? The lunch menu roulette solves your dilemma.\n\nWe recommend random menus from 10+ categories, so you can discover new combinations.\n\nShare the 'what should we eat for lunch?' dilemma with friends and spin the roulette together.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "Can more categories be added?", a: "Yes, we regularly update popular categories. Let us know what category you'd like to see!" },
      { q: "How many times can I spin the roulette?", a: "Unlimited spins! Keep trying until you find a menu you like." },
      { q: "Can this recommend menus for group dining?", a: "We're preparing a 'group dining' category in addition to basic menus." },
    ],
  },
  ja: {
    title: "ランチメニュールーレット",
    subtitle: "何を食べていいか分からないとき、ルーレットでメニューを決めてみましょう！",
    lunch: "ランチ",
    generate: "メニューを選ぶ",
    result: "今日のランチメニューは",
    again: "もう一度",
    categories: "カテゴリ",
    selectCategory: "全メニュー",
    allMenu: "全て",
    limitations: "選択されたメニューは参考用です。実際の営業状況やメニューと異なる場合があります。",
    whyRoulette: "なぜランチメニュールーレットが必要ですか？",
    explanation:
      "毎日同じランチばかり食べていませんか？ランチメニュールーレットが悩みの解決をお手伝いします。\n\n10以上のカテゴリからランダムにメニューをお勧めします。新しい発見ができるかもしれません。\n\n友達と「今日のランチ何をしよう？」の悩みを共有し、一緒にルーレットを回してみましょう。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "別のカテゴリも追加されますか？", a: "はい、人気カテゴリを更新しています。ご希望のカテゴリがあればお知らせください！" },
      { q: "ルーレットは何回でも回せますか？", a: "はい、無制限に回せます。気に入るメニューが出るまでチャレンジしてください。" },
      { q: "会食のメニュー推薦もできますか？", a: "基本メニューに加えて「会食」カテゴリを準備中です。" },
    ],
  },
  es: {
    title: "Ruleta de Menú de Almuerzo",
    subtitle: "¿No sabes qué almorzar? ¡Deja que la ruleta decida por ti!",
    lunch: "Almuerzo",
    generate: "Elegir Menú",
    result: "El menú de hoy es",
    again: "Elegir de Nuevo",
    categories: "Categorías",
    selectCategory: "Todos los Menús",
    allMenu: "Todos",
    limitations: "Los menús seleccionados son solo de referencia. La disponibilidad y menús reales pueden variar.",
    whyRoulette: "¿Por qué necesitas una ruleta de menú de almuerzo?",
    explanation:
      "¿Cansado de comer lo mismo todos los días? ¡La ruleta de menú de almuerzo resuelve tu dilema!\n\nRecomendamos menús aleatorios de 10+ categorías para que descubras nuevas combinaciones.\n\nComparte la duda de '¿qué almorzamos?' con amigos y gira la ruleta juntos.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Se añadirán más categorías?", a: "¡Sí! Actualizamos categorías populares regularmente. ¡Dinos qué categoría te gustaría ver!" },
      { q: "¿Cuántas veces puedo girar la ruleta?", a: "¡Ilimitado! Sigue intentando hasta encontrar un menú que te guste." },
      { q: "¿Puede recomendar menús para comidas grupales?", a: "Estamos preparando una categoría de 'comidas grupales' además de los menús básicos." },
    ],
  },
};

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
