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
  moveTypeLabel: string;
  moveTypeFull: string;
  moveTypeSemi: string;
  moveTypeBasic: string;
  distanceLabel: string;
  distanceSame: string;
  distanceFar: string;
  ladderLabel: string;
  ladderYes: string;
  ladderNo: string;
  resultTitle: string;
  resultRangeUnit: string;
  resultNote: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "이사 비용 계산기",
    subtitle: "평수, 이사 방식, 거리, 사다리차 필요 여부로 예상 이사 비용 범위를 확인하세요.",
    areaLabel: "이사할 집 평수",
    areaPlaceholder: "예: 20",
    moveTypeLabel: "이사 방식",
    moveTypeFull: "포장이사 (전체 포장·운반·정리)",
    moveTypeSemi: "반포장이사 (포장 일부만)",
    moveTypeBasic: "일반이사 (직접 포장)",
    distanceLabel: "이동 거리",
    distanceSame: "동일 지역 (약 50km 이내)",
    distanceFar: "타지역 (약 50km 이상)",
    ladderLabel: "사다리차 필요 여부",
    ladderYes: "필요함 (고층·엘리베이터 없음 등)",
    ladderNo: "필요 없음",
    resultTitle: "예상 이사 비용",
    resultRangeUnit: "만원",
    resultNote: "실제 비용은 업체, 지역, 성수기 여부(3·9월), 짐의 양에 따라 크게 달라질 수 있습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "이사할 집의 평수를 입력합니다.",
      "포장이사/반포장이사/일반이사 중 원하는 방식을 선택합니다.",
      "이동 거리와 사다리차 필요 여부를 선택합니다.",
      "예상 비용 범위를 확인하고, 실제 견적은 여러 업체에서 비교해보세요.",
    ],
    faq: [
      { q: "이 계산기의 금액이 실제 견적과 다를 수 있나요?", a: "네. 이 계산기는 일반적인 시세를 바탕으로 한 참고용 추정치이며, 실제 비용은 업체·지역·시기·짐의 양에 따라 달라질 수 있습니다. 정확한 비용은 여러 업체의 실제 견적을 비교하는 것을 권장합니다." },
      { q: "성수기(3월, 9월)에는 비용이 더 비싼가요?", a: "일반적으로 이사철(3월, 9월)과 주말, 월말에는 수요가 몰려 비용이 더 높아지는 경향이 있습니다. 가능하다면 평일이나 비성수기를 활용하면 비용을 줄일 수 있습니다." },
    ],
    disclaimer: "이 계산기는 일반적인 시세를 바탕으로 한 참고용 추정치이며, 실제 이사 비용과 차이가 있을 수 있습니다.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Moving Cost Estimator",
    subtitle: "Get an estimated moving cost range based on home size, moving type, distance, and ladder truck needs.",
    areaLabel: "Home size (pyeong, ~3.3m²)",
    areaPlaceholder: "e.g. 20",
    moveTypeLabel: "Moving Type",
    moveTypeFull: "Full-service (pack, move, unpack everything)",
    moveTypeSemi: "Semi-packed (partial packing only)",
    moveTypeBasic: "Basic (you pack yourself)",
    distanceLabel: "Distance",
    distanceSame: "Same area (within ~50km)",
    distanceFar: "Different area (over ~50km)",
    ladderLabel: "Ladder Truck Needed?",
    ladderYes: "Yes (high floor, no elevator, etc.)",
    ladderNo: "No",
    resultTitle: "Estimated Moving Cost",
    resultRangeUnit: "10K KRW",
    resultNote: "Actual cost varies significantly by company, region, peak season (March/September), and amount of belongings.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the size of the home you're moving into.",
      "Choose full-service, semi-packed, or basic moving type.",
      "Select the distance and whether a ladder truck is needed.",
      "Check the estimated cost range, and compare quotes from multiple companies for accuracy.",
    ],
    faq: [
      { q: "Could the actual quote differ from this estimate?", a: "Yes. This calculator gives a reference estimate based on typical market rates. Actual cost varies by company, region, timing, and amount of belongings — comparing quotes from several companies is recommended." },
      { q: "Is moving more expensive during peak season?", a: "Generally, peak moving seasons (March, September), weekends, and end-of-month dates see higher demand and higher prices. Moving on a weekday or off-peak time can reduce cost." },
    ],
    disclaimer: "This calculator provides a reference estimate based on general market rates and may differ from actual moving costs.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "引越し費用計算機",
    subtitle: "広さ・引越し方式・距離・はしご車の必要性から予想引越し費用の範囲を確認できます。",
    areaLabel: "引越し先の広さ（坪、約3.3m²）",
    areaPlaceholder: "例: 20",
    moveTypeLabel: "引越し方式",
    moveTypeFull: "フルパッキング引越し（全て荷造り・運搬・整理）",
    moveTypeSemi: "セミパッキング引越し（一部のみ荷造り）",
    moveTypeBasic: "一般引越し（自分で荷造り）",
    distanceLabel: "移動距離",
    distanceSame: "同一地域（約50km以内）",
    distanceFar: "他地域（約50km以上）",
    ladderLabel: "はしご車の必要性",
    ladderYes: "必要（高層・エレベーターなしなど）",
    ladderNo: "不要",
    resultTitle: "予想引越し費用",
    resultRangeUnit: "万円相当",
    resultNote: "実際の費用は業者・地域・ピーク時期（3月・9月）・荷物量によって大きく変わる可能性があります。",
    howTitle: "使用方法",
    howSteps: [
      "引越し先の広さを入力します。",
      "フルパッキング／セミパッキング／一般引越しの中から選びます。",
      "移動距離とはしご車の必要性を選びます。",
      "予想費用範囲を確認し、実際の見積もりは複数の業者で比較してください。",
    ],
    faq: [
      { q: "この計算機の金額は実際の見積もりと異なる場合がありますか？", a: "はい。この計算機は一般的な相場を基にした参考用の推定値であり、実際の費用は業者・地域・時期・荷物量によって変わる可能性があります。正確な費用は複数の業者の見積もりを比較することをお勧めします。" },
      { q: "ピーク時期（3月、9月）は費用が高くなりますか？", a: "一般的に引越しシーズン（3月、9月）や週末、月末は需要が集中し費用が高くなる傾向があります。可能であれば平日やオフピーク時期を利用すると費用を抑えられます。" },
    ],
    disclaimer: "この計算機は一般的な相場を基にした参考用の推定値であり、実際の引越し費用と異なる場合があります。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Estimador de Costo de Mudanza",
    subtitle: "Obtén un rango estimado de costo de mudanza según el tamaño del hogar, tipo de mudanza, distancia y necesidad de camión con escalera.",
    areaLabel: "Tamaño del hogar (pyeong, ~3.3m²)",
    areaPlaceholder: "ej. 20",
    moveTypeLabel: "Tipo de Mudanza",
    moveTypeFull: "Servicio completo (empacar, mover, desempacar todo)",
    moveTypeSemi: "Semi-empacado (solo empaque parcial)",
    moveTypeBasic: "Básico (tú empacas)",
    distanceLabel: "Distancia",
    distanceSame: "Misma área (dentro de ~50km)",
    distanceFar: "Área diferente (más de ~50km)",
    ladderLabel: "¿Se necesita camión con escalera?",
    ladderYes: "Sí (piso alto, sin elevador, etc.)",
    ladderNo: "No",
    resultTitle: "Costo de Mudanza Estimado",
    resultRangeUnit: "10K KRW",
    resultNote: "El costo real varía significativamente según la empresa, región, temporada alta (marzo/septiembre) y cantidad de pertenencias.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Ingresa el tamaño del hogar al que te mudas.",
      "Elige servicio completo, semi-empacado o básico.",
      "Selecciona la distancia y si se necesita camión con escalera.",
      "Revisa el rango de costo estimado y compara cotizaciones de varias empresas para mayor precisión.",
    ],
    faq: [
      { q: "¿La cotización real podría diferir de esta estimación?", a: "Sí. Esta calculadora da una estimación de referencia basada en tarifas típicas del mercado. El costo real varía por empresa, región, momento y cantidad de pertenencias — se recomienda comparar cotizaciones de varias empresas." },
      { q: "¿Es más caro mudarse en temporada alta?", a: "Generalmente, las temporadas altas de mudanza (marzo, septiembre), fines de semana y fin de mes tienen mayor demanda y precios más altos. Mudarse en día de semana o fuera de temporada puede reducir el costo." },
    ],
    disclaimer: "Esta calculadora proporciona una estimación de referencia basada en tarifas generales del mercado y puede diferir de los costos reales de mudanza.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
