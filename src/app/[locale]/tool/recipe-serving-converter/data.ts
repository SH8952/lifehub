export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  originalServingsLabel: string;
  targetServingsLabel: string;
  ingredientNameLabel: string;
  ingredientAmountLabel: string;
  ingredientUnitLabel: string;
  addRowBtn: string;
  removeRowBtn: string;
  namePlaceholder: string;
  unitPlaceholder: string;
  resultTitle: string;
  scaleFactorLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "레시피 인분 조절 계산기",
    subtitle: "원래 인분수와 목표 인분수를 입력하면 재료량을 자동으로 환산해드립니다.",
    originalServingsLabel: "원래 인분수",
    targetServingsLabel: "목표 인분수",
    ingredientNameLabel: "재료명",
    ingredientAmountLabel: "양",
    ingredientUnitLabel: "단위",
    addRowBtn: "재료 추가",
    removeRowBtn: "삭제",
    namePlaceholder: "예: 간장",
    unitPlaceholder: "예: 큰술, g, 개",
    resultTitle: "환산된 재료량",
    scaleFactorLabel: "배율",
    howTitle: "사용 방법",
    howSteps: [
      "레시피의 원래 인분수를 입력합니다.",
      "만들고 싶은 목표 인분수를 입력합니다.",
      "재료명·양·단위를 한 줄씩 입력합니다 (필요시 '재료 추가'로 줄을 늘립니다).",
      "자동으로 환산된 재료량을 확인합니다.",
    ],
    faq: [
      { q: "소금이나 향신료도 똑같이 배율대로 늘려야 하나요?", a: "일반적으로 가능하지만, 소금·향신료·매운맛 재료 등은 배율대로 늘리면 맛이 과해질 수 있어 조금 적게 넣고 간을 보며 조절하는 것을 권장합니다." },
      { q: "인분수를 줄이면 조리 시간도 줄어드나요?", a: "재료량은 배율대로 줄지만, 조리 시간(굽기·끓이기 등)은 재료량에 비례하지 않는 경우가 많습니다. 조리 시간은 상태를 확인하며 조절하세요." },
    ],
    disclaimer: "이 계산기는 재료량을 단순 비율로 환산한 참고용 값이며, 조미료나 향신료는 입맛에 따라 조절하는 것을 권장합니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Recipe Serving Size Converter",
    subtitle: "Enter the original and target number of servings to automatically scale ingredient amounts.",
    originalServingsLabel: "Original Servings",
    targetServingsLabel: "Target Servings",
    ingredientNameLabel: "Ingredient",
    ingredientAmountLabel: "Amount",
    ingredientUnitLabel: "Unit",
    addRowBtn: "Add Ingredient",
    removeRowBtn: "Remove",
    namePlaceholder: "e.g. Soy sauce",
    unitPlaceholder: "e.g. tbsp, g, pcs",
    resultTitle: "Scaled Ingredient Amounts",
    scaleFactorLabel: "Scale Factor",
    howTitle: "How to Use",
    howSteps: [
      "Enter the recipe's original number of servings.",
      "Enter the target number of servings you want to make.",
      "Enter each ingredient's name, amount, and unit on its own row (click 'Add Ingredient' for more rows).",
      "Check the automatically scaled ingredient amounts.",
    ],
    faq: [
      { q: "Should salt and spices be scaled the same way?", a: "Generally you can, but salt, spices, and spicy ingredients can become overpowering if scaled exactly. It's recommended to add a bit less and adjust to taste." },
      { q: "Does cooking time also scale down with fewer servings?", a: "Ingredient amounts scale proportionally, but cooking time (baking, boiling, etc.) often doesn't scale linearly with quantity. Check doneness rather than relying on a fixed scaled time." },
    ],
    disclaimer: "This calculator scales ingredient amounts by simple ratio as a reference; season to taste for salt and spices.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "レシピ人数調整計算機",
    subtitle: "元の人数と目標人数を入力すると、材料の量を自動で換算します。",
    originalServingsLabel: "元の人数",
    targetServingsLabel: "目標人数",
    ingredientNameLabel: "材料名",
    ingredientAmountLabel: "量",
    ingredientUnitLabel: "単位",
    addRowBtn: "材料を追加",
    removeRowBtn: "削除",
    namePlaceholder: "例: 醤油",
    unitPlaceholder: "例: 大さじ、g、個",
    resultTitle: "換算された材料量",
    scaleFactorLabel: "倍率",
    howTitle: "使用方法",
    howSteps: [
      "レシピの元の人数を入力します。",
      "作りたい目標人数を入力します。",
      "材料名・量・単位を一行ずつ入力します（必要なら「材料を追加」で行を増やします）。",
      "自動で換算された材料量を確認します。",
    ],
    faq: [
      { q: "塩や香辛料も同じ倍率で増やすべきですか？", a: "一般的には可能ですが、塩・香辛料・辛い材料などは倍率通りに増やすと味が強くなりすぎる場合があるため、少し控えて味を見ながら調整することをお勧めします。" },
      { q: "人数を減らすと調理時間も短くなりますか？", a: "材料量は倍率通り減りますが、調理時間（焼く・煮るなど）は材料量に比例しない場合が多いです。調理時間は状態を確認しながら調整してください。" },
    ],
    disclaimer: "この計算機は材料量を単純な比率で換算した参考値であり、調味料や香辛料は好みに応じて調整することをお勧めします。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Convertidor de Porciones de Recetas",
    subtitle: "Ingresa las porciones originales y objetivo para escalar automáticamente las cantidades de ingredientes.",
    originalServingsLabel: "Porciones Originales",
    targetServingsLabel: "Porciones Objetivo",
    ingredientNameLabel: "Ingrediente",
    ingredientAmountLabel: "Cantidad",
    ingredientUnitLabel: "Unidad",
    addRowBtn: "Agregar Ingrediente",
    removeRowBtn: "Eliminar",
    namePlaceholder: "ej. Salsa de soja",
    unitPlaceholder: "ej. cda, g, uds",
    resultTitle: "Cantidades de Ingredientes Escaladas",
    scaleFactorLabel: "Factor de Escala",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ingresa el número original de porciones de la receta.",
      "Ingresa el número objetivo de porciones que quieres hacer.",
      "Ingresa el nombre, cantidad y unidad de cada ingrediente en su propia fila (haz clic en 'Agregar Ingrediente' para más filas).",
      "Revisa las cantidades de ingredientes escaladas automáticamente.",
    ],
    faq: [
      { q: "¿Debo escalar la sal y especias de la misma manera?", a: "Generalmente puedes, pero la sal, especias e ingredientes picantes pueden volverse abrumadores si se escalan exactamente. Se recomienda agregar un poco menos y ajustar al gusto." },
      { q: "¿El tiempo de cocción también se reduce con menos porciones?", a: "Las cantidades de ingredientes escalan proporcionalmente, pero el tiempo de cocción a menudo no escala linealmente con la cantidad. Verifica la cocción en lugar de confiar en un tiempo escalado fijo." },
    ],
    disclaimer: "Esta calculadora escala las cantidades de ingredientes por proporción simple como referencia; ajusta sal y especias al gusto.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
