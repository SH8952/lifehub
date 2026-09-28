import { getTranslations, setRequestLocale } from "next-intl/server";
import { webApplicationJsonLd } from "@/lib/seo";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

// 최종 확정 랜딩페이지 디자인 (Claude Cowork, 2026-09-21)
// page-sample1/2/3.tsx 및 /sample2 라우트는 시안 비교용 아카이브입니다.
// 더 이상 사용되지 않으며 수정 대상이 아닙니다 — AGENTS.md 참고.
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  const nameKey = (
    { ko: "name", en: "nameEn", ja: "nameJa", es: "nameEs" } as const
  )[locale as "en" | "ko" | "ja" | "es"];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationJsonLd(locale)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
              {t("heroBadge")}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
            <p className="max-w-2xl text-lg text-white/80">{t("subtitle")}</p>
            <div className="pt-2">
              <a
                href="#categories"
                className={buttonVariants({ size: "lg", variant: "secondary" })}
              >
                {t("ctaPrimary")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-12 scroll-mt-16"
      >
        <p className="mb-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {t("categories")}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/${locale}/category/${cat.id}`}
              className="group block"
            >
              <Card className="h-full border-2 border-transparent hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                      {cat[nameKey]}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-xl text-muted-foreground group-hover:text-indigo-600 transition-colors">
                    →
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          {t("trustNote")}
        </p>
      </section>
    </div>
  );
}
