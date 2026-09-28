"use client";

import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";

export type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  title: string;
  subtitle: string;
  nightmeal: string;
  generate: string;
  result: string;
  again: string;
  categories: string;
  limitations: string;
  whyRoulette: string;
  explanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "야식 메뉴 룰렛",
    subtitle: "밤에 뭐 먹지? 야식 메뉴를 랜덤으로 추천합니다.",
    nightmeal: "야식",
    generate: "야식 뽑기",
    result: "오늘 야식 메뉴는",
    again: "다시 뽑기",
    categories: "카테고리",
    limitations: "선정된 메뉴는 참고용이며, 실제 영업 여부와 메뉴는 다를 수 있습니다.",
    whyRoulette: "왜 야식 메뉴 룰렛이 필요한가요?",
    explanation:
      "밤에 뭐 먹지? 야식은 언제나 고민입니다.\n\n야식의 세계는 상상이상 넓습니다! 치킨부터 떡볶이, 볶음밥, 짜장면까지 20개 이상의 야식 메뉴가 준비되어 있습니다.\n\n배고플 때 누군가가 대신 선택해주면 얼마나 좋을까요? 야식 룰렛이 그 역할을 합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "야식은 몇 시부터인가요?", a: "저녁 식사(보통 6시)가 끝난 후부터 야식으로 봅니다. 보통 9시 이후를 야식의 시간으로 생각합니다." },
      { q: "새벽 식사도 추천되나요?", a: "네, 야식 메뉴는 새벽까지 이어지는深夜 식사의 선택지입니다." },
      { q: "건강한 야식 옵션이 있을까요?", a: "낮은 칼로리의 가볍게 즐길 수 있는 메뉴들을 많이 준비했습니다." },
    ],
  },
  en: {
    title: "Late Night Food Roulette",
    subtitle: "What to eat late at night? Get random late-night food recommendations.",
    nightmeal: "Night meal",
    generate: "Pick Menu",
    result: "Tonight's late-night meal is",
    again: "Pick Again",
    categories: "Categories",
    limitations: "Selected menus are for reference only. Actual availability and menus may vary.",
    whyRoulette: "Why do you need a late night food roulette?",
    explanation:
      "What to eat late at night? Late-night meals are always a dilemma.\n\nThe world of late-night food is wide! Over 20 late-night food options including chicken, tteokbokki, fried rice, and jjajangmen are ready.\n\nHow great would it be if someone else chose for you when you're hungry? The late-night food roulette plays that role.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "What time counts as late night food?", a: "We consider meals after regular dinner (usually 6pm). Usually 9pm onwards is considered late night dining." },
      { q: "Does it include breakfast options?", a: "Yes, late night food includes options that extend into the early morning." },
      { q: "Are there healthy late night food options?", a: "Yes, we have many lightly enjoyable options with lower calories." },
    ],
  },
  ja: {
    title: "夜食メニュールーレット",
    subtitle: "夜に何を食べていいか分からない？夜食をランダムに推します。",
    nightmeal: "夜食",
    generate: "夜食を選ぶ",
    result: "今日の夜食のメニューは",
    again: "もう一度",
    categories: "カテゴリ",
    limitations: "選択されたメニューは参考用です。実際の営業状況やメニューと異なる場合があります。",
    whyRoulette: "なぜ夜食メニュールーレットが必要ですか？",
    explanation:
      "夜に何を食べていいか？夜食はいつも悩みの種です。\n\n夜食の世界は意外にも広い！チキンから唐揚げ、チャーハン、ジャージャー麺まで20以上の夜食メニューが準備されています。\n\nお腹が空いたとき、誰かが選んでくれたらどれほど楽しいでしょう？夜食ルーレットがその役割を果たします。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "夜食は何時からですか？", a: "通常夕食(6時)の後に夜食として見なします。通常9時以降を夜食の時間と見なします。" },
      { q: "朝の食事の選択肢もおすすめされますか？", a: "はい、夜食メニューは深夜まで続く深夜食の選択です。" },
      { q: "健康的な夜食選択肢はありますか？", a: "はい、カロリーが低く軽く楽しめるメニューを多数準備しています。" },
    ],
  },
  es: {
    title: "Ruleta de Comida de Medianuevacho",
    subtitle: "¿Qué comer de noche? Recomendamos menús aleatorios de comida de noche.",
    nightmeal: "Comida de noche",
    generate: "Elegir Menú",
    result: "La comida de esta noche es",
    again: "Elegir de Nuevo",
    categories: "Categorías",
    limitations: "Los menús seleccionados son solo de referencia. La disponibilidad y menús reales pueden variar.",
    whyRoulette: "¿Por qué necesitas una ruleta de comida de medianoche?",
    explanation:
      "¿Qué comer de noche? La comida de medianoche siempre es un dilema.\n\n¡El mundo de la comida de noche es sorprendentemente amplio! Más de 20 opciones incluyen pollo, tteokbokki, arroz frito y jjajangmen.\n\n¿Qué grande sería si alguien más eligiera para ti cuando tienes hambre? La ruleta de comida de noche cumple ese papel.",
    footer: "Procesado 100% en tu navegador. No hay datos enviados al servidor.",
    faq: [
      { q: "¿A qué hora se considera comida de medianoche?", a: "Consideramos comidas después de la cena regular (usualmente 6pm). Generalmente 9pm en adelante se considera cena de noche." },
      { q: "¿Incluye opciones de desayuno?", a: "Sí, las opciones de comida de noche incluyen opciones que se extienden en la madrugada." },
      { q: "¿Hay opciones de comida de noche saludables?", a: "Sí, tenemos muchas opciones ligeras con menos calorías." },
    ],
  },
};

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
