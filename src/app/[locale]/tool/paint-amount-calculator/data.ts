export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  areaLabel: string;
  areaPlaceholder: string;
  areaUnitLabel: string;
  unitSqm: string;
  unitPyeong: string;
  coatsLabel: string;
  paintTypeLabel: string;
  paintWater: string;
  paintOil: string;
  resultLabel: string;
  resultUnit: string;
  canNote: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "페인트 필요량 계산기",
    subtitle: "벽면 면적과 도장 횟수, 페인트 종류로 필요한 페인트 양(리터)을 계산하세요.",
    areaLabel: "도장할 면적",
    areaPlaceholder: "예: 30",
    areaUnitLabel: "면적 단위",
    unitSqm: "㎡ (제곱미터)",
    unitPyeong: "평",
    coatsLabel: "도장 횟수",
    paintTypeLabel: "페인트 종류",
    paintWater: "수성 페인트 (1L당 약 10㎡)",
    paintOil: "유성 페인트 (1L당 약 8㎡)",
    resultLabel: "필요 페인트량",
    resultUnit: "L",
    canNote: "일반적으로 페인트 통은 1L, 4L, 18L 단위로 판매됩니다. 여유분을 위해 넉넉히 구매하는 것을 추천합니다.",
    howTitle: "사용 방법",
    howSteps: [
      "도장할 벽면 면적을 입력합니다.",
      "면적 단위(㎡ 또는 평)를 선택합니다.",
      "도장 횟수와 페인트 종류(수성/유성)를 선택합니다.",
      "필요한 페인트량(리터)을 확인합니다.",
    ],
    faq: [
      { q: "도장을 2번 해야 하는 이유는 무엇인가요?", a: "일반적으로 밑색이 비치지 않고 균일한 색상을 내기 위해 2회 도장을 권장합니다. 색상 변경이 크거나 벽면 상태가 좋지 않을 경우 3회 이상 필요할 수도 있습니다." },
      { q: "수성 페인트와 유성 페인트 중 어떤 걸 선택해야 하나요?", a: "수성 페인트는 냄새가 적고 건조가 빨라 실내용으로 많이 쓰이며, 유성 페인트는 내구성이 강해 외부나 철제 표면에 주로 사용됩니다. 용도에 맞게 선택하세요." },
    ],
    disclaimer: "이 계산기는 제품별 도포 효율에 따라 실제 필요량과 차이가 있을 수 있는 참고용 추정치입니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Paint Amount Calculator",
    subtitle: "Calculate how much paint (liters) you need based on wall area, number of coats, and paint type.",
    areaLabel: "Area to Paint",
    areaPlaceholder: "e.g. 30",
    areaUnitLabel: "Area Unit",
    unitSqm: "m² (square meters)",
    unitPyeong: "Pyeong (~3.3m²)",
    coatsLabel: "Number of Coats",
    paintTypeLabel: "Paint Type",
    paintWater: "Water-based paint (~10m² per liter)",
    paintOil: "Oil-based paint (~8m² per liter)",
    resultLabel: "Paint Needed",
    resultUnit: "L",
    canNote: "Paint is usually sold in 1L, 4L, or 18L cans. It's recommended to buy a bit extra for touch-ups.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the wall area you plan to paint.",
      "Select the area unit (m² or pyeong).",
      "Choose the number of coats and paint type (water-based/oil-based).",
      "Check the amount of paint needed (in liters).",
    ],
    faq: [
      { q: "Why do I need 2 coats of paint?", a: "Two coats are generally recommended for even color and full coverage without the base color showing through. Bigger color changes or rough walls may need 3+ coats." },
      { q: "Should I choose water-based or oil-based paint?", a: "Water-based paint has less odor and dries faster, making it popular for interiors. Oil-based paint is more durable and often used for exteriors or metal surfaces. Choose based on your use case." },
    ],
    disclaimer: "This calculator provides a reference estimate; actual amount needed may vary by product coverage efficiency.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "ペンキ必要量計算機",
    subtitle: "塗装する面積・塗装回数・ペンキの種類から必要なペンキ量（リットル）を計算します。",
    areaLabel: "塗装する面積",
    areaPlaceholder: "例: 30",
    areaUnitLabel: "面積単位",
    unitSqm: "㎡（平方メートル）",
    unitPyeong: "坪（約3.3㎡）",
    coatsLabel: "塗装回数",
    paintTypeLabel: "ペンキの種類",
    paintWater: "水性ペンキ（1Lあたり約10㎡）",
    paintOil: "油性ペンキ（1Lあたり約8㎡）",
    resultLabel: "必要ペンキ量",
    resultUnit: "L",
    canNote: "ペンキは通常1L、4L、18L単位で販売されています。補修用に少し多めに購入することをお勧めします。",
    howTitle: "使用方法",
    howSteps: [
      "塗装する壁面積を入力します。",
      "面積単位（㎡または坪）を選びます。",
      "塗装回数とペンキの種類（水性／油性）を選びます。",
      "必要なペンキ量（リットル）を確認します。",
    ],
    faq: [
      { q: "なぜ2回塗装する必要がありますか？", a: "一般的に下地色が透けないよう均一な色を出すため2回塗装が推奨されます。色の変化が大きい場合や壁の状態が良くない場合は3回以上必要になることもあります。" },
      { q: "水性ペンキと油性ペンキ、どちらを選ぶべきですか？", a: "水性ペンキは匂いが少なく乾燥が速いため室内用に多く使われ、油性ペンキは耐久性が強いため外部や鉄製表面に主に使われます。用途に合わせて選んでください。" },
    ],
    disclaimer: "この計算機は製品ごとの塗布効率により実際の必要量と異なる場合がある参考用の推定値です。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Cantidad de Pintura",
    subtitle: "Calcula cuánta pintura (litros) necesitas según el área de la pared, número de capas y tipo de pintura.",
    areaLabel: "Área a Pintar",
    areaPlaceholder: "ej. 30",
    areaUnitLabel: "Unidad de Área",
    unitSqm: "m² (metros cuadrados)",
    unitPyeong: "Pyeong (~3.3m²)",
    coatsLabel: "Número de Capas",
    paintTypeLabel: "Tipo de Pintura",
    paintWater: "Pintura a base de agua (~10m² por litro)",
    paintOil: "Pintura a base de aceite (~8m² por litro)",
    resultLabel: "Pintura Necesaria",
    resultUnit: "L",
    canNote: "La pintura generalmente se vende en latas de 1L, 4L o 18L. Se recomienda comprar un poco extra para retoques.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ingresa el área de pared que planeas pintar.",
      "Selecciona la unidad de área (m² o pyeong).",
      "Elige el número de capas y tipo de pintura (base agua/base aceite).",
      "Revisa la cantidad de pintura necesaria (en litros).",
    ],
    faq: [
      { q: "¿Por qué necesito 2 capas de pintura?", a: "Generalmente se recomiendan 2 capas para un color uniforme y cobertura completa sin que se vea el color base. Cambios de color más grandes o paredes rugosas pueden necesitar 3+ capas." },
      { q: "¿Debo elegir pintura a base de agua o aceite?", a: "La pintura a base de agua tiene menos olor y seca más rápido, siendo popular para interiores. La pintura a base de aceite es más duradera y se usa a menudo para exteriores o superficies metálicas. Elige según tu uso." },
    ],
    disclaimer: "Esta calculadora proporciona una estimación de referencia; la cantidad real necesaria puede variar según la eficiencia de cobertura del producto.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
