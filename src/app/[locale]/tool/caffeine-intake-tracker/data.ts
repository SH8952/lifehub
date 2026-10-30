export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  drinkLabel: string;
  addBtn: string;
  resetBtn: string;
  listLabel: string;
  totalLabel: string;
  mgUnit: string;
  limitLabel: string;
  overLimitMsg: string;
  emptyMsg: string;
  removeLabel: string;
  drinkDripCoffee: string;
  drinkAmericano: string;
  drinkEspresso: string;
  drinkEnergyDrink: string;
  drinkBlackTea: string;
  drinkGreenTea: string;
  drinkCola: string;
  drinkChocolate: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "카페인 섭취량 트래커",
    subtitle: "오늘 마신 음료를 추가해 누적 카페인 섭취량을 추적하고 권장 한도와 비교합니다.",
    drinkLabel: "음료 선택",
    addBtn: "추가하기",
    resetBtn: "초기화",
    listLabel: "오늘의 섭취 목록",
    totalLabel: "총 카페인 섭취량",
    mgUnit: "mg",
    limitLabel: "일반 성인 권장 한도: 400mg",
    overLimitMsg: "⚠️ 권장 섭취 한도(400mg)를 초과했습니다.",
    emptyMsg: "아직 추가된 음료가 없습니다.",
    removeLabel: "삭제",
    drinkDripCoffee: "드립 커피 (240ml)",
    drinkAmericano: "아메리카노 (355ml)",
    drinkEspresso: "에스프레소 (1샷)",
    drinkEnergyDrink: "에너지 드링크 (250ml)",
    drinkBlackTea: "홍차 (240ml)",
    drinkGreenTea: "녹차 (240ml)",
    drinkCola: "콜라 (355ml)",
    drinkChocolate: "다크초콜릿 (1조각)",
    howTitle: "사용 방법",
    howSteps: [
      "오늘 마신 음료를 목록에서 선택합니다.",
      "'추가하기'를 눌러 섭취 목록에 더합니다.",
      "총 카페인 섭취량이 권장 한도(400mg)를 넘지 않는지 확인하세요.",
    ],
    faq: [
      { q: "하루 카페인 권장 섭취량은 얼마인가요?", a: "건강한 성인 기준으로 하루 400mg 이하가 일반적으로 권장됩니다. 임산부나 민감한 사람은 더 낮은 한도가 권장될 수 있습니다." },
      { q: "카페인 함량은 제품마다 다른가요?", a: "네, 이 트래커의 값은 평균적인 추정치입니다. 실제 제품의 카페인 함량은 브랜드와 조리법에 따라 다를 수 있으니 제품 라벨을 참고하세요." },
    ],
    disclaimer: "⚠️ 본 트래커는 일반적인 카페인 함량 기준에 따른 참고용 추정치이며, 실제 섭취량은 제품별로 다를 수 있습니다. 카페인 민감 체질, 임신·수유 중이거나 건강 상의 문제가 있다면 반드시 의사와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Caffeine Intake Tracker",
    subtitle: "Add the drinks you've had today to track your cumulative caffeine intake and compare it against the recommended limit.",
    drinkLabel: "Select Drink",
    addBtn: "Add",
    resetBtn: "Reset",
    listLabel: "Today's Intake List",
    totalLabel: "Total Caffeine Intake",
    mgUnit: "mg",
    limitLabel: "General adult recommended limit: 400mg",
    overLimitMsg: "⚠️ You've exceeded the recommended limit (400mg).",
    emptyMsg: "No drinks added yet.",
    removeLabel: "Remove",
    drinkDripCoffee: "Drip Coffee (240ml)",
    drinkAmericano: "Americano (355ml)",
    drinkEspresso: "Espresso (1 shot)",
    drinkEnergyDrink: "Energy Drink (250ml)",
    drinkBlackTea: "Black Tea (240ml)",
    drinkGreenTea: "Green Tea (240ml)",
    drinkCola: "Cola (355ml)",
    drinkChocolate: "Dark Chocolate (1 piece)",
    howTitle: "How to Use",
    howSteps: [
      "Select a drink you had today from the list.",
      "Click 'Add' to add it to your intake list.",
      "Check that your total caffeine intake stays within the recommended limit (400mg).",
    ],
    faq: [
      { q: "What's the recommended daily caffeine limit?", a: "For healthy adults, up to 400mg per day is generally considered safe. Pregnant women and sensitive individuals may need a lower limit." },
      { q: "Does caffeine content vary by product?", a: "Yes, the values here are average estimates. Actual caffeine content varies by brand and preparation — check product labels for exact amounts." },
    ],
    disclaimer: "⚠️ This tracker provides reference estimates based on typical caffeine content, and actual amounts may vary by product. If you are caffeine-sensitive, pregnant, nursing, or have a health condition, please consult a doctor.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "カフェイン摂取量トラッカー",
    subtitle: "今日飲んだ飲み物を追加して累積カフェイン摂取量を追跡し、推奨限度と比較します。",
    drinkLabel: "飲み物選択",
    addBtn: "追加する",
    resetBtn: "リセット",
    listLabel: "本日の摂取リスト",
    totalLabel: "総カフェイン摂取量",
    mgUnit: "mg",
    limitLabel: "一般成人推奨限度：400mg",
    overLimitMsg: "⚠️ 推奨摂取限度（400mg）を超えました。",
    emptyMsg: "まだ追加された飲み物がありません。",
    removeLabel: "削除",
    drinkDripCoffee: "ドリップコーヒー (240ml)",
    drinkAmericano: "アメリカーノ (355ml)",
    drinkEspresso: "エスプレッソ（1ショット）",
    drinkEnergyDrink: "エナジードリンク (250ml)",
    drinkBlackTea: "紅茶 (240ml)",
    drinkGreenTea: "緑茶 (240ml)",
    drinkCola: "コーラ (355ml)",
    drinkChocolate: "ダークチョコレート（1片）",
    howTitle: "使用方法",
    howSteps: [
      "今日飲んだ飲み物をリストから選択します。",
      "「追加する」を押して摂取リストに追加します。",
      "総カフェイン摂取量が推奨限度（400mg）を超えていないか確認しましょう。",
    ],
    faq: [
      { q: "1日のカフェイン推奨摂取量はどれくらいですか？", a: "健康な成人の場合、1日400mg以下が一般的に安全とされています。妊婦や敏感な人はより低い限度が推奨される場合があります。" },
      { q: "カフェイン含有量は製品によって異なりますか？", a: "はい、このトラッカーの値は平均的な推定値です。実際のカフェイン含有量はブランドや調理法によって異なるため、製品ラベルを参考にしてください。" },
    ],
    disclaimer: "⚠️ このトラッカーは一般的なカフェイン含有量に基づく参考用の推定値であり、実際の摂取量は製品によって異なる場合があります。カフェインに敏感な方、妊娠・授乳中の方、健康上の問題がある方は必ず医師にご相談ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Rastreador de Consumo de Cafeína",
    subtitle: "Agrega las bebidas que tomaste hoy para rastrear tu consumo acumulado de cafeína y compararlo con el límite recomendado.",
    drinkLabel: "Seleccionar Bebida",
    addBtn: "Agregar",
    resetBtn: "Reiniciar",
    listLabel: "Lista de Consumo de Hoy",
    totalLabel: "Consumo Total de Cafeína",
    mgUnit: "mg",
    limitLabel: "Límite recomendado para adultos: 400mg",
    overLimitMsg: "⚠️ Has superado el límite recomendado (400mg).",
    emptyMsg: "Aún no has agregado bebidas.",
    removeLabel: "Eliminar",
    drinkDripCoffee: "Café de Filtro (240ml)",
    drinkAmericano: "Americano (355ml)",
    drinkEspresso: "Espresso (1 shot)",
    drinkEnergyDrink: "Bebida Energética (250ml)",
    drinkBlackTea: "Té Negro (240ml)",
    drinkGreenTea: "Té Verde (240ml)",
    drinkCola: "Cola (355ml)",
    drinkChocolate: "Chocolate Negro (1 pieza)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona una bebida que tomaste hoy de la lista.",
      "Haz clic en 'Agregar' para añadirla a tu lista.",
      "Verifica que tu consumo total se mantenga dentro del límite recomendado (400mg).",
    ],
    faq: [
      { q: "¿Cuál es el límite diario recomendado de cafeína?", a: "Para adultos sanos, hasta 400mg por día se considera generalmente seguro. Las mujeres embarazadas pueden necesitar un límite más bajo." },
      { q: "¿El contenido de cafeína varía según el producto?", a: "Sí, los valores aquí son estimaciones promedio. El contenido real varía según la marca y preparación." },
    ],
    disclaimer: "⚠️ Este rastreador ofrece estimaciones de referencia basadas en contenidos típicos de cafeína; las cantidades reales pueden variar según el producto. Si eres sensible a la cafeína, estás embarazada, en lactancia o tienes alguna condición de salud, consulta a un médico.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
