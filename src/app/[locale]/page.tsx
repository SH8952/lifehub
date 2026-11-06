import { getTranslations, setRequestLocale } from "next-intl/server";
import { webApplicationJsonLd } from "@/lib/seo";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ToolSearch, { type SearchableTool } from "@/components/ToolSearch";
import {
  HeartPulse,
  Image as ImageIcon,
  FileText,
  Wallet,
  PartyPopper,
  Code2,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  categoryToolsMap,
  allTools,
  totalToolsCount,
  nameKeyMap,
  descKeyMap,
} from "@/lib/tools-data";

// 최종 확정 랜딩페이지 디자인 (Claude Cowork, 2026-09-21 초안 → 2026-09-29 벤토 그리드 개편)
// page-sample1/2/3.tsx 및 /sample2 라우트는 시안 비교용 아카이브입니다.
// 더 이상 사용되지 않으며 수정 대상이 아닙니다 — AGENTS.md 참고.
//
// 2026-09-29 개편 메모:
// - 목적: 자매 사이트들과 비슷해 보이는 "그라디언트 히어로 + 카드 그리드" 톤을 벗어나
//   시각적으로 차별화하고, 방문자가 카테고리를 거치지 않고도 여러 도구를 바로 눌러보도록
//   유도(체류시간/기능 발견 증가)하기 위해 3단(벤토) 그리드 구조를 도입.
// - "오늘의 추천 도구"는 날짜 기반으로 결정되므로 재방문 시 다른 도구가 노출됨
//   (아래 revalidate 설정으로 1시간마다 재계산).
export const revalidate = 3600;

export const categories = [
  {
    id: "life-health",
    name: "생활·건강",
    nameEn: "Life & Health",
    nameJa: "生活・健康",
    nameEs: "Vida y Salud",
    description: "BMI, 건강 체크, 일상 지표",
    descriptionEn: "BMI, health checks, and everyday life metrics",
    descriptionJa: "BMI、健康チェック、日常指標",
    descriptionEs: "IMC, controles de salud e indicadores diarios",
    icon: "💚",
  },
  {
    id: "image-media",
    name: "이미지·미디어",
    nameEn: "Image & Media",
    nameJa: "画像・メディア",
    nameEs: "Imagen y Multimedia",
    description: "압축·포맷·변환 도구",
    descriptionEn: "Compression, format, and conversion tools",
    descriptionJa: "圧縮・フォーマット・変換ツール",
    descriptionEs: "Herramientas de compresión, formato y conversión",
    icon: "🖼️",
  },
  {
    id: "document-pdf",
    name: "문서·PDF",
    nameEn: "Documents & PDF",
    nameJa: "ドキュメント・PDF",
    nameEs: "Documentos y PDF",
    description: "PDF 변환·병합·분할",
    descriptionEn: "PDF conversion, merging, and splitting",
    descriptionJa: "PDF変換・結合・分割",
    descriptionEs: "Conversión, combinación y división de PDF",
    icon: "📄",
  },
  {
    id: "finance",
    name: "재무·투자",
    nameEn: "Finance & Investment",
    nameJa: "財務・投資",
    nameEs: "Finanzas e Inversión",
    description: "금리·대출·은퇴 계산기",
    descriptionEn: "Interest rate, loan, and retirement calculators",
    descriptionJa: "金利・ローン・退職計算機",
    descriptionEs: "Calculadoras de tasas de interés, préstamos y jubilación",
    icon: "💰",
  },
  {
    id: "fun-entertainment",
    name: "Fun·엔터테인먼트",
    nameEn: "Fun & Entertainment",
    nameJa: "エンタメ",
    nameEs: "Diversión y Entretenimiento",
    description: "룰렛, 밈 생성기, 심리테스트 등",
    descriptionEn: "Roulette, meme generators, personality tests, and more",
    descriptionJa: "ルーレット、ミーム生成、心理テストなど",
    descriptionEs: "Ruletas, generadores de memes, tests de personalidad y más",
    icon: "🎉",
  },
  {
    id: "dev-it",
    name: "개발·IT",
    nameEn: "Dev & IT",
    nameJa: "開発・IT",
    nameEs: "Desarrollo y TI",
    description: "인코더·디코더·유틸리티",
    descriptionEn: "Encoders, decoders, and utilities",
    descriptionJa: "エンコーダー・デコーダー・ユーティリティ",
    descriptionEs: "Codificadores, decodificadores y utilidades",
    icon: "⚙️",
  },
  {
    id: "utility",
    name: "공통 유틸리티",
    nameEn: "General Utilities",
    nameJa: "共通ユーティリティ",
    nameEs: "Utilidades Generales",
    description: "색상·단위·형식 변환",
    descriptionEn: "Color, unit, and format conversion",
    descriptionJa: "色・単位・フォーマット変換",
    descriptionEs: "Conversión de color, unidad y formato",
    icon: "🔧",
  },
] as const;

// 2026-10-30: 카테고리별 시각 아이콘을 이모지 대신 lucide 라인 아이콘으로 통일
// (플랫폼마다 다르게 보이는 이모지 대신, 배지 원형 + 아이콘으로 일관된 톤 유지)
const categoryIconComponentById: Record<string, LucideIcon> = {
  "life-health": HeartPulse,
  "image-media": ImageIcon,
  "document-pdf": FileText,
  finance: Wallet,
  "fun-entertainment": PartyPopper,
  "dev-it": Code2,
  utility: Wrench,
};

// 메인 화면 "인기 도구" 하이라이트(벤토 중앙 그리드)에 노출할 도구 id (직접 큐레이션, 카테고리 균형 고려)
const popularToolIds = [
  "bmi",
  "age-calculator",
  "tdee",
  "monthly-cost",
  "fixed-deposit-interest",
  "2nd-loan",
  "saju-pool",
  "tojung-fortune",
] as const;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const localeKey = (locale as "en" | "ko" | "ja" | "es") in nameKeyMap
    ? (locale as "en" | "ko" | "ja" | "es")
    : "ko";
  const nameKey = nameKeyMap[localeKey];
  const descKey = descKeyMap[localeKey];

  const categoryCount = categories.length;
  const languageCount = 4;

  const categoryIconById = new Map<string, string>(
    categories.map((c) => [c.id, c.icon])
  );
  const categoryNameById = new Map<string, string>(
    categories.map((c) => [c.id, c[nameKey]])
  );

  const searchableTools: SearchableTool[] = allTools.map((tool) => ({
    id: tool.id,
    label: tool[nameKey],
    categoryLabel: categoryNameById.get(tool.categoryId) ?? "",
    icon: categoryIconById.get(tool.categoryId) ?? "🔧",
  }));

  const popularTools = popularToolIds
    .map((id) => allTools.find((tool) => tool.id === id))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));

  // "오늘의 추천 도구" — 날짜(UTC 기준 연중 일수) 기반으로 결정되어 매일 바뀜.
  // revalidate = 3600 이므로 실제로는 최대 1시간 지연으로 갱신됩니다.
  const now = new Date();
  const startOfYearUtc = Date.UTC(now.getUTCFullYear(), 0, 0);
  const todayUtc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );
  const dayOfYear = Math.floor((todayUtc - startOfYearUtc) / 86400000);
  const featuredTool = allTools[dayOfYear % allTools.length];

  // 카테고리별 도구 수 (우측 위젯 + 좌측 스포트라이트에 사용, 실제 데이터 기반)
  const categoryStats = categories.map((c) => ({
    ...c,
    count: (categoryToolsMap[c.id] ?? []).length,
  }));
  const maxCategoryCount = Math.max(...categoryStats.map((c) => c.count), 1);
  const toolsUnit = t("toolsUnit");

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationJsonLd(locale)),
        }}
      />

      {/* Hero — 차분하고 전문적인 톤(2026-10-30: 진한 그라디언트·펄스 배지 제거, 로즈 시그니처 컬러로 통일) */}
      <section className="border-b bg-rose-50/40 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t("heroBadge")}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {t("title")}
            </h1>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              {t("subtitle")}
            </p>

            <ToolSearch
              locale={locale}
              tools={searchableTools}
              placeholder={t("searchPlaceholder")}
              noResultsText={t("searchNoResults")}
            />

            <a
              href="#categories"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("ctaPrimary")} →
            </a>
          </div>
        </div>
      </section>

      {/* 오늘의 추천 — 가로 전체 배너 (2026-10-30: 좁은 좌측 컬럼 카드 → 전체 너비로 변경, 레이아웃 정돈) */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:pt-12">
        <a href={`/${locale}/tool/${featuredTool.id}`} className="group block">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="flex items-center gap-4 p-5 sm:p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                {(() => {
                  const FeaturedIcon =
                    categoryIconComponentById[featuredTool.categoryId] ?? Wrench;
                  return <FeaturedIcon className="h-6 w-6" />;
                })()}
              </span>
              <div className="min-w-0 flex-1">
                <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium">
                  ✨ {t("todaysPickBadge")}
                </span>
                <p className="mt-1 truncate font-semibold">{featuredTool[nameKey]}</p>
                <p className="mt-0.5 text-sm text-white/80 line-clamp-1">
                  {featuredTool[descKey]}
                </p>
              </div>
              <span className="hidden shrink-0 text-sm font-medium underline-offset-2 group-hover:underline sm:inline">
                {t("todaysPickCta")} →
              </span>
            </CardContent>
          </Card>
        </a>
      </section>

      {/* 인기 도구 — 전체 너비 균일 그리드 (2026-10-30: 비대칭 3단 벤토 구성 제거, 레이아웃 정돈) */}
      <section id="hub" className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("hubQuickTitle")}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {popularTools.map((tool) => {
            const PopularIcon =
              categoryIconComponentById[tool.categoryId] ?? Wrench;
            return (
              <a
                key={tool.id}
                href={`/${locale}/tool/${tool.id}`}
                className="group block"
              >
                <Card className="h-full text-center">
                  <CardContent className="flex flex-col items-center gap-2 p-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <PopularIcon className="h-4 w-4" />
                    </span>
                    <p className="line-clamp-2 text-xs font-semibold leading-tight transition-colors group-hover:text-primary">
                      {tool[nameKey]}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </section>

      {/* Categories — 전체 카테고리 둘러보기(도구 미리보기 포함, 기존 기능 유지) */}
      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-12 scroll-mt-16"
      >
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {t("categories")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("statsToolsLabel")} {totalToolsCount}{toolsUnit} · {t("statsLanguagesLabel")} {languageCount} · {t("statsCategoriesLabel")} {categoryCount}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryStats.map((cat) => {
            const previewNames = (categoryToolsMap[cat.id] ?? [])
              .slice(0, 3)
              .map((tool) => tool[nameKey]);
            return (
              <a
                key={cat.id}
                href={`/${locale}/category/${cat.id}`}
                className="group block"
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {(() => {
                        const CatIcon = categoryIconComponentById[cat.id] ?? Wrench;
                        return <CatIcon className="h-5 w-5" />;
                      })()}
                    </span>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {cat[nameKey]}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cat[descKey]}
                      </p>
                      <p className="text-xs text-muted-foreground/80 mt-2 line-clamp-1">
                        {previewNames.join(" · ")}
                      </p>
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{
                            width: `${Math.max(
                              (cat.count / maxCategoryCount) * 100,
                              6
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xl text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </span>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          {t("trustNote")}
        </p>
      </section>

      {/* About — 홈페이지 콘텐츠 깊이 보강용 짧은 소개 섹션 (2026-11-06, adpass.app 콘텐츠 품질 대응) */}
      <section className="border-t bg-muted/20 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("aboutTitle")}
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-base font-semibold">{t("aboutHeading1")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("aboutBody1")}
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold">{t("aboutHeading2")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("aboutBody2")}
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold">{t("aboutHeading3")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("aboutBody3")}
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold">{t("aboutHeading4")}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("aboutBody4")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
