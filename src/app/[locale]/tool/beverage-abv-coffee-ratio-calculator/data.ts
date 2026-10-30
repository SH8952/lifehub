export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface RatioPreset {
  key: string;
  label: string;
  ratio: number;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabAbv: string;
  tabCoffee: string;
  originalAbvLabel: string;
  originalVolumeLabel: string;
  targetAbvLabel: string;
  waterToAddLabel: string;
  finalVolumeLabel: string;
  abvInvalidMsg: string;
  coffeeAmountLabel: string;
  ratioLabel: string;
  waterAmountLabel: string;
  ratioPresets: RatioPreset[];
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "술 도수 희석 · 커피 물 비율 계산기",
    subtitle: "술을 원하는 도수로 희석하거나, 원두 양에 맞는 커피 추출 물량을 계산하세요.",
    tabAbv: "술 도수 희석 계산기",
    tabCoffee: "커피 물 비율 계산기",
    originalAbvLabel: "원래 도수 (%)",
    originalVolumeLabel: "원래 부피 (ml)",
    targetAbvLabel: "목표 도수 (%)",
    waterToAddLabel: "추가할 물의 양",
    finalVolumeLabel: "희석 후 총 부피",
    abvInvalidMsg: "목표 도수가 원래 도수보다 높거나 같으면 물로 희석할 수 없습니다. 목표 도수를 더 낮게 입력해주세요.",
    coffeeAmountLabel: "원두량 (g)",
    ratioLabel: "추출 비율 (원두:물)",
    waterAmountLabel: "필요한 물량",
    ratioPresets: [
      { key: "handdrip", label: "핸드드립 (1:15)", ratio: 15 },
      { key: "handdrip2", label: "진한 핸드드립 (1:12)", ratio: 12 },
      { key: "frenchpress", label: "프렌치프레스 (1:15)", ratio: 15 },
      { key: "espresso", label: "에스프레소 (1:2)", ratio: 2 },
      { key: "coldbrew", label: "콜드브루 (1:8)", ratio: 8 },
    ],
    howTitle: "사용 방법",
    howSteps: [
      "'술 도수 희석' 또는 '커피 물 비율' 탭을 선택합니다.",
      "술 희석의 경우 원래 도수·부피와 목표 도수를 입력합니다.",
      "커피의 경우 원두량과 원하는 추출 비율을 선택합니다.",
      "계산된 물의 양을 확인합니다.",
    ],
    faq: [
      { q: "술 희석 계산이 모든 술에 똑같이 적용되나요?", a: "이 계산은 단순 부피 기준 희석 공식이며, 실제로는 알코올과 물을 섞을 때 약간의 부피 변화(수축)가 있을 수 있어 소량의 오차가 있을 수 있습니다. 일반적인 가정용 희석에는 충분히 유용합니다." },
      { q: "커피 비율은 반드시 지켜야 하나요?", a: "제시된 비율은 일반적으로 추천되는 기준이며, 개인의 입맛에 따라 더 진하게(비율 숫자를 낮게) 또는 더 연하게(비율 숫자를 높게) 조절할 수 있습니다." },
    ],
    disclaimer: "이 계산기는 일반적인 공식과 기준 비율을 적용한 참고용 값입니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Drink Dilution & Coffee Ratio Calculator",
    subtitle: "Dilute a drink to your target ABV, or calculate the right water amount for your coffee grounds.",
    tabAbv: "Drink Dilution Calculator",
    tabCoffee: "Coffee Ratio Calculator",
    originalAbvLabel: "Original ABV (%)",
    originalVolumeLabel: "Original Volume (ml)",
    targetAbvLabel: "Target ABV (%)",
    waterToAddLabel: "Water to Add",
    finalVolumeLabel: "Final Total Volume",
    abvInvalidMsg: "If the target ABV is equal to or higher than the original, it can't be diluted with water. Please enter a lower target ABV.",
    coffeeAmountLabel: "Coffee Grounds (g)",
    ratioLabel: "Brew Ratio (coffee:water)",
    waterAmountLabel: "Water Needed",
    ratioPresets: [
      { key: "handdrip", label: "Pour-over (1:15)", ratio: 15 },
      { key: "handdrip2", label: "Strong pour-over (1:12)", ratio: 12 },
      { key: "frenchpress", label: "French press (1:15)", ratio: 15 },
      { key: "espresso", label: "Espresso (1:2)", ratio: 2 },
      { key: "coldbrew", label: "Cold brew (1:8)", ratio: 8 },
    ],
    howTitle: "How to Use",
    howSteps: [
      "Choose the 'Drink Dilution' or 'Coffee Ratio' tab.",
      "For drink dilution, enter the original ABV, volume, and target ABV.",
      "For coffee, enter the amount of grounds and select your preferred brew ratio.",
      "Check the calculated amount of water.",
    ],
    faq: [
      { q: "Does the dilution formula apply equally to all drinks?", a: "This uses a simple volume-based dilution formula. In reality, mixing alcohol and water causes a small volume change (contraction), so there may be a slight margin of error. It's accurate enough for typical home dilution." },
      { q: "Do I have to follow the coffee ratio exactly?", a: "The listed ratios are general recommendations. You can adjust to taste — a lower ratio number for stronger coffee, or a higher number for weaker coffee." },
    ],
    disclaimer: "This calculator applies general formulas and standard ratios as a reference.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "お酒の度数希釈・コーヒー水比率計算機",
    subtitle: "お酒を目標の度数に希釈したり、豆の量に合ったコーヒー抽出の水量を計算します。",
    tabAbv: "お酒の度数希釈計算機",
    tabCoffee: "コーヒー水比率計算機",
    originalAbvLabel: "元の度数 (%)",
    originalVolumeLabel: "元の量 (ml)",
    targetAbvLabel: "目標の度数 (%)",
    waterToAddLabel: "追加する水の量",
    finalVolumeLabel: "希釈後の総量",
    abvInvalidMsg: "目標度数が元の度数より高いか同じ場合は水で希釈できません。より低い目標度数を入力してください。",
    coffeeAmountLabel: "豆の量 (g)",
    ratioLabel: "抽出比率 (豆:水)",
    waterAmountLabel: "必要な水量",
    ratioPresets: [
      { key: "handdrip", label: "ハンドドリップ (1:15)", ratio: 15 },
      { key: "handdrip2", label: "濃いハンドドリップ (1:12)", ratio: 12 },
      { key: "frenchpress", label: "フレンチプレス (1:15)", ratio: 15 },
      { key: "espresso", label: "エスプレッソ (1:2)", ratio: 2 },
      { key: "coldbrew", label: "コールドブリュー (1:8)", ratio: 8 },
    ],
    howTitle: "使用方法",
    howSteps: [
      "「お酒の度数希釈」または「コーヒー水比率」タブを選びます。",
      "お酒の希釈の場合、元の度数・量と目標度数を入力します。",
      "コーヒーの場合、豆の量と希望の抽出比率を選びます。",
      "計算された水の量を確認します。",
    ],
    faq: [
      { q: "希釈計算はすべてのお酒に同じように適用されますか？", a: "この計算は単純な体積基準の希釈公式であり、実際にはアルコールと水を混ぜる際に少し体積変化（収縮）が起こる場合があり、わずかな誤差が生じることがあります。一般的な家庭用希釈には十分有用です。" },
      { q: "コーヒーの比率は必ず守らなければなりませんか？", a: "提示された比率は一般的に推奨される基準であり、好みに応じてより濃く（比率の数字を低く）またはより薄く（比率の数字を高く）調整できます。" },
    ],
    disclaimer: "この計算機は一般的な公式と基準比率を適用した参考値です。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Dilución de Bebidas y Ratio de Café",
    subtitle: "Diluye una bebida a tu ABV objetivo, o calcula la cantidad correcta de agua para tu café molido.",
    tabAbv: "Calculadora de Dilución",
    tabCoffee: "Calculadora de Ratio de Café",
    originalAbvLabel: "ABV Original (%)",
    originalVolumeLabel: "Volumen Original (ml)",
    targetAbvLabel: "ABV Objetivo (%)",
    waterToAddLabel: "Agua a Agregar",
    finalVolumeLabel: "Volumen Total Final",
    abvInvalidMsg: "Si el ABV objetivo es igual o mayor que el original, no se puede diluir con agua. Ingresa un ABV objetivo más bajo.",
    coffeeAmountLabel: "Café Molido (g)",
    ratioLabel: "Ratio de Preparación (café:agua)",
    waterAmountLabel: "Agua Necesaria",
    ratioPresets: [
      { key: "handdrip", label: "Goteo manual (1:15)", ratio: 15 },
      { key: "handdrip2", label: "Goteo manual fuerte (1:12)", ratio: 12 },
      { key: "frenchpress", label: "Prensa francesa (1:15)", ratio: 15 },
      { key: "espresso", label: "Espresso (1:2)", ratio: 2 },
      { key: "coldbrew", label: "Cold brew (1:8)", ratio: 8 },
    ],
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña 'Dilución' o 'Ratio de Café'.",
      "Para dilución, ingresa el ABV original, volumen y ABV objetivo.",
      "Para café, ingresa la cantidad de café molido y elige tu ratio de preparación preferido.",
      "Revisa la cantidad de agua calculada.",
    ],
    faq: [
      { q: "¿La fórmula de dilución aplica igual para todas las bebidas?", a: "Esto usa una fórmula de dilución simple basada en volumen. En realidad, mezclar alcohol y agua causa un pequeño cambio de volumen (contracción), por lo que puede haber un pequeño margen de error. Es suficientemente preciso para dilución casera típica." },
      { q: "¿Debo seguir el ratio de café exactamente?", a: "Los ratios listados son recomendaciones generales. Puedes ajustar al gusto — un número de ratio más bajo para café más fuerte, o más alto para café más suave." },
    ],
    disclaimer: "Esta calculadora aplica fórmulas generales y ratios estándar como referencia.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
