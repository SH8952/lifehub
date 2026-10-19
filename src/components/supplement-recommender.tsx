"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Locale = "ko" | "en" | "ja" | "es";

interface Data {
  age: string;
  ages: Record<string, string>;
  gender: string;
  male: string;
  female: string;
  healthConcern: string;
  concerns: Record<string, string>;
  lifestyle: string;
  lifestyles: Record<string, string>;
  diet: string;
  diets: Record<string, string>;
  recommend: string;
  results: string;
  disclaimer: string;
  footer: string;
  noneSelected: string;
  noResultsLabel: string;
  dosage: string;
  note: string;
  matchScoreLabel: string;
  intakeTimingLabel: string;
  foodSourcesLabel: string;
  warningsLabel: string;
}

interface Supplement {
  id: string;
  name: string;
  nameEn: string;
  nameJa: string;
  nameEs: string;
  description: string;
  descriptionEn: string;
  descriptionJa: string;
  descriptionEs: string;
  recommendedAmount: string;
  recommendedAmountEn: string;
  recommendedAmountJa: string;
  recommendedAmountEs: string;
  bestTime: string;
  bestTimeEn: string;
  bestTimeJa: string;
  bestTimeEs: string;
  warnings: string;
  warningsEn: string;
  warningsJa: string;
  warningsEs: string;
  foodSources: string;
  foodSourcesEn: string;
  foodSourcesJa: string;
  foodSourcesEs: string;
  matchConcerns: string[];
  matchLifestyles: string[];
  matchAge: string[];
}

const supplements: Supplement[] = [
  {
    id: "vitamin-d",
    name: "비타민 D",
    nameEn: "Vitamin D",
    nameJa: "ビタミンD",
    nameEs: "Vitamina D",
    description: "칼슘 흡수를 도와 뼈를 건강하게 유지하고, 면역 체계를 지원합니다.",
    descriptionEn: "Helps calcium absorption to keep bones healthy and supports the immune system.",
    descriptionJa: "カルシウムの吸収を助け、骨を健康に保ち、免疫システムをサポートします。",
    descriptionEs: "Ayuda a la absorción de calcio para mantener huesos sanos y apoya el sistema inmunológico.",
    recommendedAmount: "성인 600~2000 IU/일",
    recommendedAmountEn: "600-2000 IU/day for adults",
    recommendedAmountJa: "成人 600～2000 IU/日",
    recommendedAmountEs: "600-2000 IU/día para adultos",
    bestTime: "식사와 함께 (지용성)",
    bestTimeEn: "With a meal (fat-soluble)",
    bestTimeJa: "食事中に（脂溶性）",
    bestTimeEs: "Con una comida (liposoluble)",
    warnings: "과다 섭취 시 신장 손상 가능성",
    warningsEn: "Excessive intake may cause kidney damage",
    warningsJa: "過剰摂取により腎臓損傷の可能性があります",
    warningsEs: "El exceso puede dañar los riñones",
    foodSources: "버섯, 계란 노른자, 강화 우유",
    foodSourcesEn: "Mushrooms, egg yolks, fortified milk",
    foodSourcesJa: "茸、卵黄、強化牛乳",
    foodSourcesEs: "Champiñones, yemas de huevo, leche fortificada",
    matchConcerns: ["bone", "immunity", "stress"],
    matchLifestyles: ["indoor"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "vitamin-b12",
    name: "비타민 B12",
    nameEn: "Vitamin B12",
    nameJa: "ビタミンB12",
    nameEs: "Vitamina B12",
    description: "에너지 대사와 신경 기능에 필수적이며, 피로 완화에 도움을 줍니다.",
    descriptionEn: "Essential for energy metabolism and nerve function; helps reduce fatigue.",
    descriptionJa: "エネルギー代謝と神経機能に不可欠で、疲労緩和に役立ちます。",
    descriptionEs: "Esencial para el metabolismo energético y la función nerviosa; ayuda a reducir la fatiga.",
    recommendedAmount: "성인 2.4μg/일",
    recommendedAmountEn: "2.4μg/day for adults",
    recommendedAmountJa: "成人 2.4μg/日",
    recommendedAmountEs: "2.4μg/día para adultos",
    bestTime: "아침 공복 또는 식사 전",
    bestTimeEn: "Morning on empty stomach or before meals",
    bestTimeJa: "朝の空腹時または食前",
    bestTimeEs: "En ayunas por la mañana o antes de comer",
    warnings: "수용성 비타민이므로 과다 섭취 시 배출됨",
    warningsEn: "Water-soluble; excess is excreted",
    warningsJa: "水溶性ビタミンなので過剰摂取しても排泄される",
    warningsEs: "Hidro soluble; el exceso se excreta",
    foodSources: "고기, 생선, 달걀, 유제품",
    foodSourcesEn: "Meat, fish, eggs, dairy",
    foodSourcesJa: "肉、魚、卵、乳製品",
    foodSourcesEs: "Carne, pescado, huevos, lácteos",
    matchConcerns: ["fatigue", "brain"],
    matchLifestyles: ["veggie"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "omega-3",
    name: "오메가-3 (EPA/DHA)",
    nameEn: "Omega-3 (EPA/DHA)",
    nameJa: "オメガ3（EPA/DHA）",
    nameEs: "Omega-3 (EPA/DHA)",
    description: "심혈관 건강과 뇌 기능에 필수적인 불포화 지방산입니다. 항염 효과도 있습니다.",
    descriptionEn: "Essential unsaturated fatty acids for cardiovascular and brain health. Also has anti-inflammatory effects.",
    descriptionJa: "心臓血管の健康と脳機能に不可欠な不飽和脂肪酸です。抗炎症効果もあります。",
    descriptionEs: "Ácidos grasos esenciales para la salud cardiovascular y cerebral. También tiene efectos antiinflamatorios.",
    recommendedAmount: "EPA+DHA 합계 1000~2000mg/일",
    recommendedAmountEn: "1000-2000mg/day combined EPA+DHA",
    recommendedAmountJa: "EPA+DHA合計 1000～2000mg/日",
    recommendedAmountEs: "1000-2000mg/día combinado EPA+DHA",
    bestTime: "식사와 함께 (지용성)",
    bestTimeEn: "With a meal (fat-soluble)",
    bestTimeJa: "食事中に（脂溶性）",
    bestTimeEs: "Con una comida (liposoluble)",
    warnings: "혈액 희석제 복용 시 의사와 상담 필요",
    warningsEn: "Consult doctor if on blood thinners",
    warningsJa: "血液希釈薬服用中は医師に相談が必要",
    warningsEs: "Consultar al médico si toma anticoagulantes",
    foodSources: "연어, 고등어, 정어리 등 등푸른생선",
    foodSourcesEn: "Salmon, mackerel, sardines and other fatty fish",
    foodSourcesJa: "サーモン、マグロ、イワナなどの青魚",
    foodSourcesEs: "Salmón, caballa, sardinas y otros pescados azules",
    matchConcerns: ["cardio", "brain", "joint", "eye", "skin"],
    matchLifestyles: ["meat"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "magnesium",
    name: "마그네슘",
    nameEn: "Magnesium",
    nameJa: "マグネシウム",
    nameEs: "Magnesio",
    description: "근육 기능과 수면 개선에 도움이 되며, 300개 이상의 효소 반응에 관여합니다.",
    descriptionEn: "Helps with muscle function and sleep improvement; involved in over 300 enzyme reactions.",
    descriptionJa: "筋肉機能と睡眠改善に役立ち、300以上の酵素反応に関与しています。",
    descriptionEs: "Ayuda con la función muscular y la mejora del sueño; participa en más de 300 reacciones enzimáticas.",
    recommendedAmount: "성인 300~400mg/일",
    recommendedAmountEn: "300-400mg/day for adults",
    recommendedAmountJa: "成人 300～400mg/日",
    recommendedAmountEs: "300-400mg/día para adultos",
    bestTime: "취침 전 또는 식사와 함께",
    bestTimeEn: "Before bed or with meals",
    bestTimeJa: "就寝前または食事中",
    bestTimeEs: "Antes de dormir o con comidas",
    warnings: "과다 섭취 시 설사 가능 (신장 질환자 주의)",
    warningsEn: "Excess may cause diarrhea (kidney disease patients caution)",
    warningsJa: "過剰摂取で下痢の可能性（腎臓疾患患者は注意）",
    warningsEs: "El exceso puede causar diarrea (precaución en enfermedad renal)",
    foodSources: "견과류, 녹색 잎채소, 통곡물",
    foodSourcesEn: "Nuts, leafy greens, whole grains",
    foodSourcesJa: "ナッツ、緑葉野菜、全粒穀物",
    foodSourcesEs: "Frutos secos, verduras de hoja verde, granos integrales",
    matchConcerns: ["stress", "fatigue", "bone", "joint"],
    matchLifestyles: ["exercise", "alcohol"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "vitamin-c",
    name: "비타민 C",
    nameEn: "Vitamin C",
    nameJa: "ビタミンC",
    nameEs: "Vitamina C",
    description: "항산화 작용으로 세포를 보호하고, 콜라겐 합성과 면역 기능에 필수적입니다.",
    descriptionEn: "Protects cells through antioxidant action; essential for collagen synthesis and immune function.",
    descriptionJa: "抗酸化作用で細胞を保護し、コラーゲン合成と免疫機能に不可欠です。",
    descriptionEs: "Protege las células a través de la acción antioxidante; esencial para la síntesis de colágeno y la función inmune.",
    recommendedAmount: "성인 1000mg/일",
    recommendedAmountEn: "1000mg/day for adults",
    recommendedAmountJa: "成人 1000mg/日",
    recommendedAmountEs: "1000mg/día para adultos",
    bestTime: "식사 후 (공복 섭취 시 위 자극 가능)",
    bestTimeEn: "After meals (can irritate empty stomach)",
    bestTimeJa: "食後（空腹時に摂取すると胃を刺激する可能性）",
    bestTimeEs: "Después de las comidas (puede irritar el estómago vacío)",
    warnings: "수용성 비타민이므로 과다 섭취 시 배출됨",
    warningsEn: "Water-soluble; excess is excreted",
    warningsJa: "水溶性ビタミンなので過剰摂取しても排泄される",
    warningsEs: "Hidro soluble; el exceso se excreta",
    foodSources: "귤, 키위, 피망, 브로콜리",
    foodSourcesEn: "Oranges, kiwi, bell peppers, broccoli",
    foodSourcesJa: "オレンジ、キウイ、ピーマン、ブロッコリー",
    foodSourcesEs: "Naranjas, kiwi, pimientos, brócoli",
    matchConcerns: ["immunity", "skin", "eye"],
    matchLifestyles: ["eatout", "indoor"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "calcium",
    name: "칼슘",
    nameEn: "Calcium",
    nameJa: "カルシウム",
    nameEs: "Calcio",
    description: "뼈와 치아의 주요 성분이며, 근육 수축과 신경 전달에도 필수적입니다.",
    descriptionEn: "Main component of bones and teeth; also essential for muscle contraction and nerve transmission.",
    descriptionJa: "骨と歯の主要成分で、筋肉収縮と神経伝達にも不可欠です。",
    descriptionEs: "Componente principal de huesos y dientes; también esencial para la contracción muscular y la transmisión nerviosa.",
    recommendedAmount: "성인 600~1000mg/일",
    recommendedAmountEn: "600-1000mg/day for adults",
    recommendedAmountJa: "成人 600～1000mg/日",
    recommendedAmountEs: "600-1000mg/día para adultos",
    bestTime: "식사와 함께 (한 번에 500mg 이하가 좋음)",
    bestTimeEn: "With meals (under 500mg at once is better)",
    bestTimeJa: "食事中（一度に500mg以下が望ましい）",
    bestTimeEs: "Con comidas (menos de 500mg a la vez es mejor)",
    warnings: "비타민 D와 함께 섭취 시 흡수율 향상",
    warningsEn: "Absorption improves when taken with vitamin D",
    warningsJa: "ビタミンDと一緒に摂取すると吸収率が向上",
    warningsEs: "La absorción mejora al tomar con vitamina D",
    foodSources: "우유, 치즈, 요구르트, 멸치",
    foodSourcesEn: "Milk, cheese, yogurt, dried sardines",
    foodSourcesJa: "牛乳、チーズ、ヨーグルト、乾燥イワシ",
    foodSourcesEs: "Leche, queso, yogur, sardinas secas",
    matchConcerns: ["bone", "joint", "stress"],
    matchLifestyles: ["veggie"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "probiotics",
    name: "프로바이오틱스",
    nameEn: "Probiotics",
    nameJa: "プロバイオティクス",
    nameEs: "Probióticos",
    description: "장내 유익균을 보충하여 소화 건강과 면역력 향상에 도움을 줍니다.",
    descriptionEn: "Supplements beneficial gut bacteria to support digestive health and immunity.",
    descriptionJa: "腸内の有用菌を補充し、消化健康と免疫力の向上に役立ちます。",
    descriptionEs: "Suplementa las bacterias beneficiosas del intestino para apoyar la salud digestiva e inmunidad.",
    recommendedAmount: "100억~100억 CFU/일 (제품 기준)",
    recommendedAmountEn: "10-100 billion CFU/day (varies by product)",
    recommendedAmountJa: "100億～1000億CFU/日（製品による）",
    recommendedAmountEs: "10-100 mil millones de CFU/día (varía por producto)",
    bestTime: "식전 또는 식간 (공복에 가까울수록 좋음)",
    bestTimeEn: "Before or between meals (closer to empty stomach is better)",
    bestTimeJa: "食前または食間（空腹に近いほど良い）",
    bestTimeEs: "Antes o entre comidas (más cerca del estómago vacío es mejor)",
    warnings: "면역저하 환자나 중증 질환자는 의사와 상담 필요",
    warningsEn: "Immunocompromised or severely ill should consult doctor",
    warningsJa: "免疫低下患者や重症患者は医師に相談が必要",
    warningsEs: "Inmunodeprimidos o enfermos graves deben consultar al médico",
    foodSources: "요구르트, 김치, 된장, 김치국물",
    foodSourcesEn: "Yogurt, kimchi, doenjang, fermented foods",
    foodSourcesJa: "ヨーグルト、キムチ、ソンドン、発酵食品",
    foodSourcesEs: "Yogur, kimchi, doenjang, alimentos fermentados",
    matchConcerns: ["digest"],
    matchLifestyles: ["eatout", "alcohol"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "zinc",
    name: "아연",
    nameEn: "Zinc",
    nameJa: "亜鉛",
    nameEs: "Zinc",
    description: "면역 기능과 상처 치유, 세포 분열에 필수적인 미네랄입니다.",
    descriptionEn: "Essential mineral for immune function, wound healing, and cell division.",
    descriptionJa: "免疫機能と傷の治癒、細胞分裂に不可欠なミネラルです。",
    descriptionEs: "Mineral esencial para la función inmune, la cicatrización de heridas y la división celular.",
    recommendedAmount: "성인 남성 11mg/일, 여성 8mg/일",
    recommendedAmountEn: "11mg/day (men), 8mg/day (women) for adults",
    recommendedAmountJa: "成人男性 11mg/日、女性 8mg/日",
    recommendedAmountEs: "11mg/día (hombres), 8mg/día (mujeres) para adultos",
    bestTime: "식사와 함께 (공복 섭취 시 메스꺼움 가능)",
    bestTimeEn: "With meals (nausea on empty stomach)",
    bestTimeJa: "食事中（空腹時に摂取すると吐き気の可能性）",
    bestTimeEs: "Con comidas (náuseas en ayunas)",
    warnings: "장기 과다 섭취 시 구리 결핍 가능",
    warningsEn: "Long-term excess may cause copper deficiency",
    warningsJa: "長期過剰摂取で銅欠乏の可能性",
    warningsEs: "El exceso prolongado puede causar deficiencia de cobre",
    foodSources: "굴, 붉은고기, 견과류, 씨앗",
    foodSourcesEn: "Oysters, red meat, nuts, seeds",
    foodSourcesJa: "カキ、赤身肉、ナッツ、種子",
    foodSourcesEs: "Ostras, carne roja, frutos secos, semillas",
    matchConcerns: ["immunity", "skin", "fatigue"],
    matchLifestyles: ["eatout"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "iron",
    name: "철분",
    nameEn: "Iron",
    nameJa: "鉄分",
    nameEs: "Hierro",
    description: "혈액 생성과 산소 운반에 필수적이며, 철분 부족은 피로와 빈혈의 주요 원인입니다.",
    descriptionEn: "Essential for blood production and oxygen transport; iron deficiency is a leading cause of fatigue and anemia.",
    descriptionJa: "血液生成と酸素輸送に不可欠で、鉄分不足は疲労と貧血の主な原因です。",
    descriptionEs: "Esencial para la producción de sangre y el transporte de oxígeno; la deficiencia de hierro es una causa principal de fatiga y anemia.",
    recommendedAmount: "성인 남성 8mg/일, 여성 18mg/일",
    recommendedAmountEn: "8mg/day (men), 18mg/day (women) for adults",
    recommendedAmountJa: "成人男性 8mg/日、女性 18mg/日",
    recommendedAmountEs: "8mg/día (hombres), 18mg/día (mujeres) para adultos",
    bestTime: "식사와 함께 또는 비타민 C와 함께",
    bestTimeEn: "With meals or with vitamin C",
    bestTimeJa: "食事中またはビタミンCと一緒に",
    bestTimeEs: "Con comidas o con vitamina C",
    warnings: "과다 섭취 시 위장 장애 가능. 철분 과다증 환자나 혈색소증 환자는 주의",
    warningsEn: "Excess may cause GI issues. Caution for hemochromatosis patients",
    warningsJa: "過剰摂取で消化器障害の可能性。鉄過剰症患者は注意",
    warningsEs: "El exceso puede causar problemas GI. Precaución en hemocromatosis",
    foodSources: "적색육, 간, 시금치, 콩",
    foodSourcesEn: "Red meat, liver, spinach, beans",
    foodSourcesJa: "赤身肉、レバー、ホウレンソウ、豆",
    foodSourcesEs: "Carne roja, hígado, espinacas, frijoles",
    matchConcerns: ["fatigue", "immunity", "women"],
    matchLifestyles: ["veggie", "exercise"],
    matchAge: ["10", "20", "30", "40", "50"],
  },
  {
    id: "coq10",
    name: "코엔자임 Q10",
    nameEn: "Coenzyme Q10",
    nameJa: "コエンザイムQ10",
    nameEs: "Coenzima Q10",
    description: "세포 에너지 생산을 돕고, 강력한 항산화제로 심혈관 건강과 노화 방지에 도움을 줍니다.",
    descriptionEn: "Helps produce cellular energy and is a powerful antioxidant for cardiovascular health and anti-aging.",
    descriptionJa: "細胞エネルギー生産を助け、強力な抗酸化제로心臓血管の健康とアンチエイジングに役立ちます。",
    descriptionEs: "Ayuda a producir energía celular y es un potente antioxidante para la salud cardiovascular y el envejecimiento.",
    recommendedAmount: "성인 100~200mg/일",
    recommendedAmountEn: "100-200mg/day for adults",
    recommendedAmountJa: "成人 100～200mg/日",
    recommendedAmountEs: "100-200mg/día para adultos",
    bestTime: "식사와 함께 (지용성)",
    bestTimeEn: "With a meal (fat-soluble)",
    bestTimeJa: "食事中に（脂溶性）",
    bestTimeEs: "Con una comida (liposoluble)",
    warnings: "혈액 희석제 복용 시 의사와 상담 필요",
    warningsEn: "Consult doctor if on blood thinners",
    warningsJa: "血液希釈薬服用中は医師に相談が必要",
    warningsEs: "Consultar al médico si toma anticoagulantes",
    foodSources: "고기, 생선, 견과류, 시금치",
    foodSourcesEn: "Meat, fish, nuts, spinach",
    foodSourcesJa: "肉、魚、ナッツ、ホウレンソウ",
    foodSourcesEs: "Carne, pescado, frutos secos, espinacas",
    matchConcerns: ["cardio", "fatigue", "skin"],
    matchLifestyles: [],
    matchAge: ["40", "50", "60"],
  },
  {
    id: "folic-acid",
    name: "엽산 (Folate)",
    nameEn: "Folic Acid (Folate)",
    nameJa: "葉酸",
    nameEs: "Ácido fólico",
    description: "세포 분열과 DNA 합성에 필수적이며, 임산부와 태아 건강에 중요합니다.",
    descriptionEn: "Essential for cell division and DNA synthesis; important for pregnant women and fetal health.",
    descriptionJa: "細胞分裂とDNA合成に不可欠で、妊婦と胎児の健康に重要です。",
    descriptionEs: "Esencial para la división celular y la síntesis de ADN; importante para mujeres embarazadas y la salud fetal.",
    recommendedAmount: "성인 200μg/일, 임산부 400-600μg/일",
    recommendedAmountEn: "200μg/day adults, 400-600μg/day during pregnancy",
    recommendedAmountJa: "成人 200μg/日、妊婦 400～600μg/日",
    recommendedAmountEs: "200μg/día adultos, 400-600μg/día durante el embarazo",
    bestTime: "식사와 함께",
    bestTimeEn: "With meals",
    bestTimeJa: "食事中に",
    bestTimeEs: "Con comidas",
    warnings: "비타민 B12 결핍을 가릴 수 있으므로 함께 확인",
    warningsEn: "May mask B12 deficiency; check together",
    warningsJa: "B12欠乏を隠す可能性があるため一緒に確認",
    warningsEs: "Puede enmascarar deficiencia de B12; verificar junto",
    foodSources: "녹색 잎채소, 콩, 시트러스 과일",
    foodSourcesEn: "Leafy greens, beans, citrus fruits",
    foodSourcesJa: "緑葉野菜、豆、柑橘類フルーツ",
    foodSourcesEs: "Verduras de hoja verde, frijoles, frutas cítricas",
    matchConcerns: ["brain", "women", "fatigue"],
    matchLifestyles: ["veggie"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "glucosamine",
    name: "글루코사민 + 콘드로이틴",
    nameEn: "Glucosamine + Chondroitin",
    nameJa: "グルコサミン + コンドロイチン",
    nameEs: "Glucosamina + Condroitina",
    description: "연골을 구성하는 성분으로, 관절 건강과 퇴행성 관절염 증상 완화에 도움을 줍니다.",
    descriptionEn: "Components that make up cartilage; helps joint health and relieves degenerative arthritis symptoms.",
    descriptionJa: "軟骨を構成する成分で、関節健康と変形性関節炎の症状緩和に役立ちます。",
    descriptionEs: "Componentes que forman el cartílago; ayuda a la salud articular y alivia síntomas de artritis degenerativa.",
    recommendedAmount: "글루코사민 1500mg + 콘드로이틴 800~1200mg/일",
    recommendedAmountEn: "Glucosamine 1500mg + Chondroitin 800-1200mg/day",
    recommendedAmountJa: "グルコサミン 1500mg + コンドロイチン 800～1200mg/日",
    recommendedAmountEs: "Glucosamina 1500mg + Condroitina 800-1200mg/día",
    bestTime: "식사와 함께 (위 자극 최소화)",
    bestTimeEn: "With meals (minimize stomach irritation)",
    bestTimeJa: "食事中（胃刺激を最小化）",
    bestTimeEs: "Con comidas (minimizar irritación estomacal)",
    warnings: "갑각류 알레르기가 있으면 제품 확인 필요",
    warningsEn: "Check product if shellfish allergy",
    warningsJa: "甲殻類アレルギーの場合は製品確認が必要",
    warningsEs: "Verificar producto si hay alergia a mariscos",
    foodSources: "닭软骨, 어골, 갑각류 껍질",
    foodSourcesEn: "Chicken cartilage, fish bones, shellfish shells",
    foodSourcesJa: "鶏軟骨、魚骨、甲殻類の殻",
    foodSourcesEs: "Cartílago de pollo, huesos de pescado, cáscaras de mariscos",
    matchConcerns: ["joint", "bone"],
    matchLifestyles: ["exercise"],
    matchAge: ["40", "50", "60"],
  },
  {
    id: "lutein",
    name: "루테인",
    nameEn: "Lutein",
    nameJa: "ルテイン",
    nameEs: "Luteína",
    description: "눈의 황반부에서 빛을 차단하는 카로티노이드로, 눈 건강과 노화 방지에 필수적입니다.",
    descriptionEn: "A carotenoid that blocks light in the eye's macula; essential for eye health and anti-aging.",
    descriptionJa: "目の黄斑部で光を遮断するカロテノイドで、目の健康とアンチエイジングに不可欠です。",
    descriptionEs: "Un carotenoide que bloquea la luz en la mácula del ojo; esencial para la salud ocular y el envejecimiento.",
    recommendedAmount: "성인 10mg/일",
    recommendedAmountEn: "10mg/day for adults",
    recommendedAmountJa: "成人 10mg/日",
    recommendedAmountEs: "10mg/día para adultos",
    bestTime: "식사와 함께 (지용성)",
    bestTimeEn: "With a meal (fat-soluble)",
    bestTimeJa: "食事中に（脂溶性）",
    bestTimeEs: "Con una comida (liposoluble)",
    warnings: "과다 섭취 시 피부에 노란색 침착 가능",
    warningsEn: "Excess may cause yellow deposition in skin",
    warningsJa: "過剰摂取で皮膚に黄色沈着の可能性",
    warningsEs: "El exceso puede causar deposición amarilla en la piel",
    foodSources: "시금치, 케일, 고구마, 계란",
    foodSourcesEn: "Spinach, kale, sweet potato, eggs",
    foodSourcesJa: "ホウレンソウ、ケール、サツマイモ、卵",
    foodSourcesEs: "Espinacas, col rizada, camote, huevos",
    matchConcerns: ["eye"],
    matchLifestyles: ["indoor"],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
  {
    id: "collagen",
    name: "콜라겐",
    nameEn: "Collagen",
    nameJa: "コラーゲン",
    nameEs: "Colágeno",
    description: "피부 탄력과 관절 연골, 모발, 손톱의 주요 구성 성분입니다.",
    descriptionEn: "Main component of skin elasticity, joint cartilage, hair, and nails.",
    descriptionJa: "肌の弾力、関節軟骨、髪、爪の主要構成成分です。",
    descriptionEs: "Componente principal de la elasticidad de la piel, cartílago articular, cabello y uñas.",
    recommendedAmount: "성인 2500~5000mg/일",
    recommendedAmountEn: "2500-5000mg/day for adults",
    recommendedAmountJa: "成人 2500～5000mg/日",
    recommendedAmountEs: "2500-5000mg/día para adultos",
    bestTime: "공복에 (취침 전 또는 기상 시)",
    bestTimeEn: "On empty stomach (before bed or upon waking)",
    bestTimeJa: "空腹時（就寝前または起床時）",
    bestTimeEs: "En ayunas (antes de dormir o al despertar)",
    warnings: "어류/갑각류 유래 제품 알레르기 확인",
    warningsEn: "Check for fish/shellfish-derived product allergies",
    warningsJa: "魚類/甲殻類由来製品のアレルギーを確認",
    warningsEs: "Verificar alergias a productos de pescado/mariscos",
    foodSources: "닭발, 돼지껍데기, 생선 껍질, 뼈국물",
    foodSourcesEn: "Chicken feet, pork skin, fish skin, bone broth",
    foodSourcesJa: "鶏足、豚皮、魚の皮、骨スープ",
    foodSourcesEs: "Pies de pollo, piel de cerdo, piel de pescado, caldo de hueso",
    matchConcerns: ["skin", "joint"],
    matchLifestyles: [],
    matchAge: ["30", "40", "50", "60"],
  },
  {
    id: "zinc-copper",
    name: "구리",
    nameEn: "Copper",
    nameJa: "銅",
    nameEs: "Cobre",
    description: "철분 대사와 적혈구 생성에 필요하며, 아연과 균형 있게 섭취하는 것이 중요합니다.",
    descriptionEn: "Needed for iron metabolism and red blood cell production; important to balance with zinc.",
    descriptionJa: "鉄分代謝と赤血球生成に必要で、亜鉛とバランスよく摂取することが重要です。",
    descriptionEs: "Necesario para el metabolismo del hierro y la producción de glóbulos rojos; importante equilibrar con zinc.",
    recommendedAmount: "성인 0.9mg/일",
    recommendedAmountEn: "0.9mg/day for adults",
    recommendedAmountJa: "成人 0.9mg/日",
    recommendedAmountEs: "0.9mg/día para adultos",
    bestTime: "식사와 함께",
    bestTimeEn: "With meals",
    bestTimeJa: "食事中に",
    bestTimeEs: "Con comidas",
    warnings: "아연 과다 섭취 시 구리 결핍 가능. 아연 15mg당 구리 2mg 권장",
    warningsEn: "Zinc excess may cause copper deficiency. Recommend 2mg copper per 15mg zinc",
    warningsJa: "亜鉛過剰摂取で銅欠乏の可能性。亜鉛15mgに対し銅2mg推奨",
    warningsEs: "El exceso de zinc puede causar deficiencia de cobre. Recomendar 2mg cobre por cada 15mg zinc",
    foodSources: "굴, 견과류, 전곡류",
    foodSourcesEn: "Oysters, nuts, whole grains",
    foodSourcesJa: "カキ、ナッツ、全粒穀物",
    foodSourcesEs: "Ostras, frutos secos, granos integrales",
    matchConcerns: ["immunity", "fatigue", "bone"],
    matchLifestyles: [],
    matchAge: ["10", "20", "30", "40", "50", "60"],
  },
];

interface Result {
  supplement: Supplement;
  score: number;
}

export default function SupplementRecommender({
  d,
  lang,
}: {
  d: Data;
  lang: Locale;
}) {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [concerns, setConcerns] = useState<string[]>([]);
  const [lifestyles, setLifestyles] = useState<string[]>([]);
  const [diet, setDiet] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showNoneSelected, setShowNoneSelected] = useState(false);

  function toggleConcern(c: string) {
    setConcerns((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  }

  function toggleLifestyle(l: string) {
    setLifestyles((prev) =>
      prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l],
    );
  }

  function handleRecommend() {
    if (concerns.length === 0) {
      setShowNoneSelected(true);
      return;
    }

    const scored: Result[] = supplements.map((s) => {
      let score = 0;

      // Health concern match
      for (const c of concerns) {
        if (s.matchConcerns.includes(c)) score += 3;
      }

      // Lifestyle match
      for (const l of lifestyles) {
        if (s.matchLifestyles.includes(l)) score += 2;
      }

      // Age match
      if (age && s.matchAge.includes(age)) score += 1;

      // Diet-based boost
      if (diet === "veggie" && s.matchLifestyles.includes("veggie")) score += 1;
      if (diet === "highprotein" && s.matchConcerns.includes("fatigue")) score += 1;
      if (diet === "fasting" && s.id === "b-complex") score += 1;

      return { supplement: s, score };
    });

    const filtered = scored
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(filtered);
    setShowResults(true);
  }

  function getName(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.nameEn;
      case "ja":
        return s.nameJa;
      case "es":
        return s.nameEs;
      default:
        return s.name;
    }
  }

  function getDescription(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.descriptionEn;
      case "ja":
        return s.descriptionJa;
      case "es":
        return s.descriptionEs;
      default:
        return s.description;
    }
  }

  function getRecommendedAmount(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.recommendedAmountEn;
      case "ja":
        return s.recommendedAmountJa;
      case "es":
        return s.recommendedAmountEs;
      default:
        return s.recommendedAmount;
    }
  }

  function getBestTime(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.bestTimeEn;
      case "ja":
        return s.bestTimeJa;
      case "es":
        return s.bestTimeEs;
      default:
        return s.bestTime;
    }
  }

  function getWarnings(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.warningsEn;
      case "ja":
        return s.warningsJa;
      case "es":
        return s.warningsEs;
      default:
        return s.warnings;
    }
  }

  function getFoodSources(s: Supplement): string {
    switch (lang) {
      case "en":
        return s.foodSourcesEn;
      case "ja":
        return s.foodSourcesJa;
      case "es":
        return s.foodSourcesEs;
      default:
        return s.foodSources;
    }
  }

  const nameKey: Record<Locale, string> = {
    ko: "name",
    en: "nameEn",
    ja: "nameJa",
    es: "nameEs",
  };

  return (
    <div className="mt-8">
      <Card className="border shadow-md">
        <CardContent className="space-y-6 p-6">
          {/* Age */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.age}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.entries(d.ages).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAge(key)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    age === key
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.gender}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  gender === "male"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {d.male}
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  gender === "female"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {d.female}
              </button>
            </div>
          </div>

          {/* Health Concerns */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.healthConcern}</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {Object.entries(d.concerns).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleConcern(key)}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                    concerns.includes(key)
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.lifestyle}</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {Object.entries(d.lifestyles).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleLifestyle(key)}
                  className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                    lifestyles.includes(key)
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Diet */}
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm font-medium">{d.diet}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.entries(d.diets).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDiet(key)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    diet === key
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleRecommend}
            disabled={concerns.length === 0}
            className={`w-full rounded-md px-4 py-3 text-white font-medium transition-colors ${
              concerns.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {d.recommend}
          </button>
          {showNoneSelected && (
            <p className="mt-2 text-center text-sm text-red-600">
              {d.noneSelected}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {showResults && results.length > 0 && (
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">{d.results}</h2>
          {results.map((result, i) => {
            const s = result.supplement;
            return (
              <Card key={s.id} className="border shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {i + 1}. {getName(s)}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {getDescription(s)}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                      {d.matchScoreLabel} {result.score}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md bg-amber-50 p-3">
                      <p className="text-xs font-medium text-amber-800">
                        {d.dosage}
                      </p>
                      <p className="mt-1 text-sm text-amber-900">
                        {getRecommendedAmount(s)}
                      </p>
                    </div>
                    <div className="rounded-md bg-blue-50 p-3">
                      <p className="text-xs font-medium text-blue-800">
                        {d.intakeTimingLabel}
                      </p>
                      <p className="mt-1 text-sm text-blue-900">
                        {getBestTime(s)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-md bg-gray-50 p-3">
                    <p className="text-xs font-medium text-gray-600">
                      🍽️ {d.note}
                    </p>
                    <p className="mt-1 text-sm text-gray-700">
                      {d.foodSourcesLabel}: {getFoodSources(s)}
                    </p>
                  </div>

                  <div className="mt-3 rounded-md bg-red-50 p-3">
                    <p className="text-xs font-medium text-red-700">
                      {d.warningsLabel}
                    </p>
                    <p className="mt-1 text-sm text-red-800">
                      {getWarnings(s)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {showResults && results.length === 0 && (
        <Card className="mt-8 border shadow-sm">
          <CardContent className="py-6 text-center text-muted-foreground">
            {d.noResultsLabel}
          </CardContent>
        </Card>
      )}

      <p className="mt-6 text-sm text-muted-foreground">{d.disclaimer}</p>
    </div>
  );
}
