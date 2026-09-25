import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { categories } from "../../page";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface ToolInfo {
  id: string;
  name: string;
  nameEn: string;
  nameJa: string;
  nameEs: string;
  description: string;
  descriptionEn: string;
  descriptionJa: string;
  descriptionEs: string;
}

const categoryToolsMap: Record<string, ToolInfo[]> = {
  "life-health": [
    {
      id: "age-calculator",
      name: "만 나이 계산기",
      nameEn: "Age Calculator",
      nameJa: "満年齢計算機",
      nameEs: "Calculadora de Edad",
      description: "생년월일 → 만 나이/띠/다음 생일까지 계산",
      descriptionEn: "Birthdate → age in years/months/days, zodiac, next birthday",
      descriptionJa: "生年月日から満年齢・干支・次回誕生日まで計算",
      descriptionEs: "Fecha de nacimiento → edad en años/meses/días, zodiaco, próximo cumpleaños",
    },
    {
      id: "bmi",
      name: "BMI(비만도) 계산기",
      nameEn: "BMI Calculator",
      nameJa: "BMI（肥満度）計算機",
      nameEs: "Calculadora de IMC",
      description: "키는 150~250cm, 몸무게는 30~300kg까지 계산 가능",
      descriptionEn: "Supports 150-250cm height and 30-300kg weight",
      descriptionJa: "身長150〜250cm、体重30〜300kgに対応",
      descriptionEs: "Soporta altura de 150-250cm y peso de 30-300kg",
    },
    {
      id: "bmr-calculator",
      name: "기초대사량(BMR) 계산기",
      nameEn: "BMR Calculator",
      nameJa: "基礎代謝量（BMR）計算機",
      nameEs: "Calculadora de TMB",
      description: "성별/나이/키/몸무게 기반 기초대사량 계산",
      descriptionEn: "Calculate BMR based on gender, age, height, weight",
      descriptionJa: "性別・年齢・身長・体重に基づく基礎代謝量を計算",
      descriptionEs: "Calcular el TMB según género, edad, altura y peso",
    },
    {
      id: "tdee",
      name: "활동 대사량(TDEE) 계산기",
      nameEn: "TDEE Calculator",
      nameJa: "活動代謝量（TDEE）計算機",
      nameEs: "Calculadora de TDEE",
      description: "BMR + 활동 지수, 하루 필요 칼로리 계산",
      descriptionEn: "BMR + activity factor to calculate daily calories",
      descriptionJa: "BMRに活動係数を乗して一日の所需カロリーを計算",
      descriptionEs: "TMB + factor de actividad para calcular calorias diarias",
    },
    {
      id: "ovulation",
      name: "배란일 계산기",
      nameEn: "Ovulation Calculator",
      nameJa: "排卵日計算機",
      nameEs: "Calculadora de Ovulacion",
      description: "생리 주기 기반으로 배란일 예측",
      descriptionEn: "Predicts ovulation date from menstrual cycle",
      descriptionJa: "生理周期に基づいて排卵日を予測",
      descriptionEs: "Predice la fecha de ovulacion a partir del ciclo menstrual",
    },
    {
      id: "fasting-timer",
      name: "간헐적 단식 타이머 (16:8)",
      nameEn: "Intermittent Fasting Timer (16:8)",
      nameJa: "間欠的断食タイマー（16:8）",
      nameEs: "Temporizador de ayuno intermitente (16:8)",
      description: "16:8 간헐적 단식 시간 계산/타이머",
      descriptionEn: "16:8 intermittent fasting countdown timer",
      descriptionJa: "16:8間欠的断食のカウントダウンタイマー",
      descriptionEs: "Temporizador de cuenta regresiva para ayuno 16:8",
    },
    {
      id: "adhd-checklist",
      name: "ADHD 자가검사",
      nameEn: "ADHD Self-Check",
      nameJa: "ADHDセルフチェック",
      nameEs: "Autoevaluacion de ADHD",
      description: "ADHD 증상 체크리스트 (의학적 진단 아님)",
      descriptionEn: "ADHD symptom checklist (not a medical diagnosis)",
      descriptionJa: "ADHD症状チェックリスト（医師の診断ではありません）",
      descriptionEs: "Lista de verificacion de sintomas de ADHD (no es un diagnostico medico)",
    },
    {
      id: "diabetes-check",
      name: "당뇨 자가진단 체크리스트",
      nameEn: "Diabetes Self-Check",
      nameJa: "糖尿病セルフチェック",
      nameEs: "Autoevaluacion de Diabetes",
      description: "당뇨 증상이 있는지 체크 (의학적 진단 아님)",
      descriptionEn: "Check diabetes risk factors (not a medical diagnosis)",
      descriptionJa: "糖尿病のリスク因子をチェック（医師の診断ではありません）",
      descriptionEs: "Evaluar factores de riesgo de diabetes (no es un diagnostico medico)",
    },
    {
      id: "construction-cost",
      name: "건축 공사비 계산기",
      nameEn: "Construction Cost Estimator",
      nameJa: "建築工事費計算機",
      nameEs: "Estimador de Costos de Construcción",
      description: "건물 종류/면적/평당 공사비 → 총 공사비 추정",
      descriptionEn: "Building type/area/cost per pyeong → total construction cost",
      descriptionJa: "建物種類・面積・坪あたり工事費→総工事費を推定",
      descriptionEs: "Tipo de edificio/área/costo por pyeong → estimación de costo total",
    },
    {
      id: "far-calculator",
      name: "용적률/건폐율 계산기",
      nameEn: "FAR / Lot Coverage Calculator",
      nameJa: "容積率/建蔽率計算機",
      nameEs: "Calculadora de FAR/Cobertura de Lote",
      description: "대지면적/건축면적/연면적 → 용적률·건폐율 계산",
      descriptionEn: "Lot area/building area/floor area → FAR & lot coverage",
      descriptionJa: "敷地面積・建築面積・延床面積→容積率・建蔽率を計算",
      descriptionEs: "Área del terreno/construcción/total → FAR y cobertura",
    },
    {
      id: "lunch-roulette",
      name: "점심 메뉴 룰렛",
      nameEn: "Lunch Menu Roulette",
      nameJa: "ランチメニュールーレット",
      nameEs: "Ruleta de Menú de Almuerzo",
      description: "카테고리별 랜덤 점심 메뉴 추천",
      descriptionEn: "Random lunch menu recommendation by category",
      descriptionJa: "カテゴリ別ランダムランチメニュー推奨",
      descriptionEs: "Recomendación aleatoria de menú por categoría",
    },
    {
      id: "nightmeal-roulette",
      name: "야식 메뉴 룰렛",
      nameEn: "Late Night Food Roulette",
      nameJa: "夜食メニュールーレット",
      nameEs: "Ruleta de Comida de Medianoche",
      description: "카테고리별 랜덤 야식 메뉴 추천",
      descriptionEn: "Random late-night food menu recommendation",
      descriptionJa: "カテゴリ別ランダム夜食メニュー推奨",
      descriptionEs: "Recomendación aleatoria de comida de medianoche",
    },
    {
      id: "study-method",
      name: "학습 방법 진단",
      nameEn: "Study Method Assessment",
      nameJa: "学習方法診断",
      nameEs: "Evaluación del Método de Estudio",
      description: "학습 스타일 진단 + 추천 공부법",
      descriptionEn: "Learning style assessment + recommended study methods",
      descriptionJa: "学習スタイル診断＋推奨勉強法",
      descriptionEs: "Evaluación de estilo de aprendizaje + métodos recomendados",
    },
    {
      id: "abc-juice",
      name: "ABC 주스 레시피",
      nameEn: "ABC Juice Recipes",
      nameJa: "ABCジュースレシピ",
      nameEs: "Recetas de Zumo ABC",
      description: "ABC 과일 주스 다이어트 레시피 5종",
      descriptionEn: "5 ABC fruit juice diet recipes",
      descriptionJa: "ABCフルーツジュースダイエットレシピ5種",
      descriptionEs: "5 recetas de dieta de zumo ABC",
    },
    {
      id: "mosquito-sound",
      name: "모기 퇴치 소리",
      nameEn: "Mosquito Repellent Sound",
      nameJa: "蚊除け音",
      nameEs: "Sonido Repelente de Mosquitos",
      description: "Web Audio API로 모기 기피 주파수 생성",
      descriptionEn: "Generate mosquito repellent frequencies with Web Audio API",
      descriptionJa: "Web Audio APIで蚊忌避周波数を生成",
      descriptionEs: "Generar frecuencias repelentes de mosquitos con Web Audio API",
    },
    {
      id: "rat-sound",
      name: "쥐 퇴치 소리",
      nameEn: "Rat Repellent Sound",
      nameJa: "鼠退治の音",
      nameEs: "Sonido para Repeler Ratones",
      description: "쥐가 싫어하는 주파수 생성 (Web Audio API)",
      descriptionEn: "Web Audio API rat-repellent frequency generator",
      descriptionJa: "Web Audio APIで鼠が嫌う周波数を生成",
      descriptionEs: "Generador de frecuencia para repeler ratones (Web Audio API)",
    },
    {
      id: "pet-entry-regulation",
      name: "반려동물 입국 규정",
      nameEn: "Pet Entry Regulations",
      nameJa: "ペット輸入規制",
      nameEs: "Regulaciones de Entrada de Mascotas",
      description: "국가별 반려동물 입국 규정 (격리·백신·건강증명서)",
      descriptionEn: "Country-by-country pet entry regulations (quarantine, vaccines, health certificate)",
      descriptionJa: "国別ペット輸入規制（検疫・ワクチン・健康証明書）",
      descriptionEs: "Regulaciones de entrada de mascotas por país (cuarentena, vacunas, certificado de salud)",
    },
    {
      id: "visa-comparison",
      name: "전세계 비자 비교",
      nameEn: "Worldwide Visa Comparison",
      nameJa: "世界のビザ比較",
      nameEs: "Comparación de Visas Mundial",
      description: "한국 여권 기준 국가별 비자 정보 (무비자·도착비자·전자비자·비자필수)",
      descriptionEn: "Visa info by country for Korean passport holders (visa-free, VOA, eVisa, visa-required)",
      descriptionJa: "韓国パスポート基準各国のビザ情報（無ビザ・到着時ビザ・電子ビザ・ビザ必要）",
      descriptionEs: "Información de visas por país para titulares de pasaporte coreano (sin visa, visa al llegar, eVisa, visa requerida)",
    },
    {
      id: "supplement-recommender",
      name: "영양제 추천 서비스",
      nameEn: "Supplement Recommender",
      nameJa: "サプリメント推奨サービス",
      nameEs: "Recomendador de Suplementos",
      description: "건강 고민과 생활습관 기반 맞춤형 영양제 추천",
      descriptionEn: "Personalized supplement recommendations based on health concerns and lifestyle",
      descriptionJa: "健康上の悩みと生活習慣に基づいたサプリメント推奨",
      descriptionEs: "Recomendaciones personalizadas de suplementos según problemas de salud y estilo de vida",
    },
    {
      id: "city-living-cost",
      name: "도시별 한달살기 비용 비교",
      nameEn: "Monthly Cost by City Comparison",
      nameJa: "都市別1ヶ月生活コスト比較",
      nameEs: "Comparación de Costos Mensuales por Ciudad",
      description: "주요 도시 17곳 월별 생활비 카테고리별 비교",
      descriptionEn: "Monthly living costs for 17 cities by category",
      descriptionJa: "主要都市17か所の月額生活費をカテゴリ別に比較",
      descriptionEs: "Costos de vida mensuales de 17 ciudades por categoría",
    },
    {
      id: "word-practice",
      name: "단어 연습장",
      nameEn: "Vocabulary Practice",
      nameJa: "単語練習帳",
      nameEs: "Practica de Vocabulario",
      description: "CEFR 기준 단계별 단어장 + 퀴즈",
      descriptionEn: "CEFR-based flashcards and vocabulary quizzes",
      descriptionJa: "CEFR基準のフラッシュカードと単語クイズ",
      descriptionEs: "Flashcards y quizzes de vocabulario basados en CEFR",
    },
    {
      id: "monthly-cost",
      name: "도시별 한달살기 비용",
      nameEn: "Monthly Cost by City",
      nameJa: "都市別ホームステイコスト",
      nameEs: "Costo Mensual por Ciudad",
      description: "세계 주요 도시 월별 생활비 비교 (USD 기준)",
      descriptionEn: "Monthly living costs for global cities (USD)",
      descriptionJa: "世界の主要都市の月額生活費比較 (USD基準)",
      descriptionEs: "Costos de vida mensuales de ciudades globales (USD)",
    },
  ],
  "finance": [
    {
      id: "fixed-deposit-interest",
      name: "만기 예금 이자 계산기",
      nameEn: "Fixed Deposit Interest Calculator",
      nameJa: "満期預金利息計算機",
      nameEs: "Calculadora de Intereses de Depósito Fijo",
      description: "원금·금리·기간 → 만기 이자·세후 수익 계산",
      descriptionEn: "Principal/rate/term → maturity interest & after-tax returns",
      descriptionJa: "元金・金利・期間→満期利息・税後収益を計算",
      descriptionEs: "Capital/tasa/plazo → intereses de vencimiento y rendimiento después de impuestos",
    },
  ],
};

export function generateStaticParams() {
  return Object.keys(categoryToolsMap).map((id) => ({ id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const category = categories.find((c: typeof categories[number]) => c.id === id);
  if (!category) notFound();

  const t = await getTranslations("Category");

  const nameKey = ({
    ko: "name",
    en: "nameEn",
    ja: "nameJa",
    es: "nameEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"];

  const descKey = ({
    ko: "description",
    en: "descriptionEn",
    ja: "descriptionJa",
    es: "descriptionEs",
  } as const)[locale as "en" | "ko" | "ja" | "es"];

  const tools = categoryToolsMap[id] || [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {t("categories")}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {category[nameKey]}
            </h1>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <a key={tool.id} href={`/${locale}/tool/${tool.id}`} className="block group">
            <Card className="h-full border-2 border-transparent hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg font-semibold group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {tool[nameKey]}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tool[descKey]}
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

      <div className="mt-8">
        <a href={`/${locale}`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
          &larr; {t("back")}
        </a>
      </div>
    </div>
  );
}
