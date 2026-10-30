export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface IngredientOption {
  key: string;
  label: string;
}

export interface UnitOption {
  key: string;
  label: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  ingredientLabel: string;
  amountLabel: string;
  fromUnitLabel: string;
  toUnitLabel: string;
  resultLabel: string;
  ingredients: IngredientOption[];
  units: UnitOption[];
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "요리 계량 단위 변환기",
    subtitle: "재료별 밀도를 반영해 컵·큰술·작은술·ml·g 사이를 정확하게 변환하세요.",
    ingredientLabel: "재료",
    amountLabel: "변환할 양",
    fromUnitLabel: "현재 단위",
    toUnitLabel: "변환할 단위",
    resultLabel: "변환 결과",
    ingredients: [
      { key: "water", label: "물" },
      { key: "sugar", label: "백설탕" },
      { key: "flour", label: "밀가루" },
      { key: "butter", label: "버터" },
      { key: "salt", label: "소금" },
      { key: "oil", label: "식용유" },
      { key: "milk", label: "우유" },
    ],
    units: [
      { key: "cup", label: "컵 (240ml)" },
      { key: "tbsp", label: "큰술 (15ml)" },
      { key: "tsp", label: "작은술 (5ml)" },
      { key: "ml", label: "ml" },
      { key: "g", label: "g" },
    ],
    howTitle: "사용 방법",
    howSteps: [
      "변환하고 싶은 재료를 선택합니다.",
      "변환할 양과 현재 단위를 입력합니다.",
      "변환하고 싶은 단위를 선택합니다.",
      "재료의 밀도를 반영한 정확한 변환 결과를 확인합니다.",
    ],
    faq: [
      { q: "왜 재료마다 g과 ml의 비율이 다른가요?", a: "재료마다 밀도(비중)가 다르기 때문입니다. 예를 들어 물 1ml는 약 1g이지만, 밀가루는 더 가벼워서 1ml가 약 0.5g 정도입니다. 이 계산기는 재료별 평균 밀도를 반영해 변환합니다." },
      { q: "계량스푼이 없을 때는 어떻게 하나요?", a: "일반적으로 큰술(tbsp)은 15ml, 작은술(tsp)은 5ml, 종이컵 1컵은 약 200ml, 계량컵 1컵은 약 240ml로 간주합니다. 이 계산기는 계량컵(240ml) 기준으로 계산합니다." },
    ],
    disclaimer: "이 계산기는 일반적인 평균 밀도를 기준으로 한 참고용 값이며, 제품이나 다지는 방식(꽉 눌러 담기 등)에 따라 실제 값과 차이가 있을 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Cooking Measurement Converter",
    subtitle: "Accurately convert between cups, tablespoons, teaspoons, ml, and grams using ingredient-specific density.",
    ingredientLabel: "Ingredient",
    amountLabel: "Amount to Convert",
    fromUnitLabel: "From Unit",
    toUnitLabel: "To Unit",
    resultLabel: "Conversion Result",
    ingredients: [
      { key: "water", label: "Water" },
      { key: "sugar", label: "White Sugar" },
      { key: "flour", label: "Flour" },
      { key: "butter", label: "Butter" },
      { key: "salt", label: "Salt" },
      { key: "oil", label: "Cooking Oil" },
      { key: "milk", label: "Milk" },
    ],
    units: [
      { key: "cup", label: "Cup (240ml)" },
      { key: "tbsp", label: "Tablespoon (15ml)" },
      { key: "tsp", label: "Teaspoon (5ml)" },
      { key: "ml", label: "ml" },
      { key: "g", label: "g" },
    ],
    howTitle: "How to Use",
    howSteps: [
      "Select the ingredient you want to convert.",
      "Enter the amount and its current unit.",
      "Select the unit you want to convert to.",
      "Check the conversion result, adjusted for the ingredient's density.",
    ],
    faq: [
      { q: "Why is the g-to-ml ratio different for each ingredient?", a: "Because each ingredient has a different density. For example, 1ml of water is about 1g, but flour is lighter, so 1ml is only about 0.5g. This calculator uses average densities per ingredient." },
      { q: "What if I don't have measuring spoons?", a: "Typically, 1 tablespoon = 15ml, 1 teaspoon = 5ml, and 1 standard measuring cup = 240ml. This calculator uses the 240ml measuring cup standard." },
    ],
    disclaimer: "This calculator uses average density values as a reference; actual values may vary by product or packing method (e.g. tightly packed vs. loose).",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "料理の計量単位変換機",
    subtitle: "材料ごとの密度を反映してカップ・大さじ・小さじ・ml・gを正確に変換します。",
    ingredientLabel: "材料",
    amountLabel: "変換する量",
    fromUnitLabel: "現在の単位",
    toUnitLabel: "変換する単位",
    resultLabel: "変換結果",
    ingredients: [
      { key: "water", label: "水" },
      { key: "sugar", label: "上白糖" },
      { key: "flour", label: "小麦粉" },
      { key: "butter", label: "バター" },
      { key: "salt", label: "塩" },
      { key: "oil", label: "食用油" },
      { key: "milk", label: "牛乳" },
    ],
    units: [
      { key: "cup", label: "カップ (240ml)" },
      { key: "tbsp", label: "大さじ (15ml)" },
      { key: "tsp", label: "小さじ (5ml)" },
      { key: "ml", label: "ml" },
      { key: "g", label: "g" },
    ],
    howTitle: "使用方法",
    howSteps: [
      "変換したい材料を選びます。",
      "変換する量と現在の単位を入力します。",
      "変換したい単位を選びます。",
      "材料の密度を反映した正確な変換結果を確認します。",
    ],
    faq: [
      { q: "材料ごとにgとmlの比率が違うのはなぜですか？", a: "材料ごとに密度（比重）が異なるためです。例えば水1mlは約1gですが、小麦粉はより軽いため1mlが約0.5g程度です。この計算機は材料ごとの平均密度を反映して変換します。" },
      { q: "計量スプーンがない時はどうすればいいですか？", a: "一般的に大さじは15ml、小さじは5ml、計量カップ1杯は約240mlとされます。この計算機は計量カップ（240ml）基準で計算します。" },
    ],
    disclaimer: "この計算機は一般的な平均密度を基準にした参考値であり、製品や詰め方（きっちり詰めるなど）によって実際の値と異なる場合があります。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Convertidor de Medidas de Cocina",
    subtitle: "Convierte con precisión entre tazas, cucharadas, cucharaditas, ml y gramos usando la densidad específica del ingrediente.",
    ingredientLabel: "Ingrediente",
    amountLabel: "Cantidad a Convertir",
    fromUnitLabel: "Unidad de Origen",
    toUnitLabel: "Unidad de Destino",
    resultLabel: "Resultado de Conversión",
    ingredients: [
      { key: "water", label: "Agua" },
      { key: "sugar", label: "Azúcar Blanca" },
      { key: "flour", label: "Harina" },
      { key: "butter", label: "Mantequilla" },
      { key: "salt", label: "Sal" },
      { key: "oil", label: "Aceite de Cocina" },
      { key: "milk", label: "Leche" },
    ],
    units: [
      { key: "cup", label: "Taza (240ml)" },
      { key: "tbsp", label: "Cucharada (15ml)" },
      { key: "tsp", label: "Cucharadita (5ml)" },
      { key: "ml", label: "ml" },
      { key: "g", label: "g" },
    ],
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona el ingrediente que quieres convertir.",
      "Ingresa la cantidad y su unidad actual.",
      "Selecciona la unidad a la que quieres convertir.",
      "Revisa el resultado de conversión, ajustado según la densidad del ingrediente.",
    ],
    faq: [
      { q: "¿Por qué la proporción de g a ml es diferente para cada ingrediente?", a: "Porque cada ingrediente tiene una densidad diferente. Por ejemplo, 1ml de agua es aproximadamente 1g, pero la harina es más ligera, por lo que 1ml es solo aproximadamente 0.5g. Esta calculadora usa densidades promedio por ingrediente." },
      { q: "¿Qué pasa si no tengo cucharas medidoras?", a: "Generalmente, 1 cucharada = 15ml, 1 cucharadita = 5ml, y 1 taza medidora estándar = 240ml. Esta calculadora usa el estándar de taza medidora de 240ml." },
    ],
    disclaimer: "Esta calculadora usa valores de densidad promedio como referencia; los valores reales pueden variar según el producto o método de empaque.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
