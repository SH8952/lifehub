export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  buildingType: string;
  residential: string;
  office: string;
  warehouse: string;
  renovation: string;
  area: string;
  areaUnit: string;
  areaHelp: string;
  presets: string;
  perPyeongCost: string;
  perPyeongCostHelp: string;
  calculate: string;
  totalCost: string;
  totalCostDesc: string;
  material: string;
  standard: string;
  premium: string;
  result: string;
  limitations: string;
  whyConstruction: string;
  explanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "건축 공사비 계산기",
    subtitle: "건물 종류와 면적, 평당 공사비를 입력하면 총 공사비를 추정합니다.",
    buildingType: "건물 종류",
    residential: "주거용",
    office: "사무용",
    warehouse: "창고용",
    renovation: "리모델링",
    area: "건축 면적",
    areaUnit: "㎡ (평)",
    areaHelp: "대지면적 또는 연면적을 입력합니다. 1평 ≈ 3.3058㎡",
    presets: "프리셋 (면적)",
    perPyeongCost: "평당 공사비",
    perPyeongCostHelp: "평당 평균 공사비 (만원). 일반 주택 약 300~600만원/평, 사무용 약 400~800만원/평",
    calculate: "계산하기",
    totalCost: "총 공사비",
    totalCostDesc: "추정 총 공사비 (자재/현장 조건에 따라 다를 수 있음)",
    material: "자재 수준",
    standard: "표준",
    premium: "고급",
    result: "계산 결과",
    limitations: "계산 결과는 참고용이며, 실제 공사비는 지역, 자재 가격, 현장 여건에 따라 크게 달라질 수 있습니다.",
    whyConstruction: "왜 건축 공사비 계산기가 필요한가요?",
    explanation:
      "건축 공사비는 건물 크기, 종류, 자재 수준, 지역 등에 따라 크게 달라집니다.\n\n대한민국에서 일반적인 건축 비용은 다음과 같습니다:\n\n• 일반 주택 (목조): 평당 300~500만원\n• 조적조 (벽돌·블록 구조): 평당 500~800만원\n• 철근콘크리트 (RC): 평당 600~1,000만원\n• 사무용 건물: 평당 400~800만원\n\n이 계산기는 대략적인 추정치를 위해 사용하며, 정확한 견적은 반드시 전문가와 상담하시기 바랍니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "공사비 추정치는 얼마나 정확한가요?",
        a: "이 계산기는 일반적인 평균을 기반으로 합니다. 실제 공사비는 자재 가격 변동, 현장 여건, 인건비, 설계 수준 등에 따라 ±30~50%까지 달라질 수 있습니다.",
      },
      {
        q: "리모델링 비용도 계산 가능한가요?",
        a: "네, 리모델링을 선택하면 일반적으로 신규 건축비의 약 50~70% 수준으로 추정합니다.",
      },
      {
        q: "평당 공사비에는 어떤 비용이 포함되나요?",
        a: "일반적으로 인건비, 자재비, 설계비, 감리비, 허가비 등이 포함됩니다. 토목비, 인테리어, 가구 등은 별도일 수 있습니다.",
      },
    ],
  },
  en: {
    title: "Construction Cost Estimator",
    subtitle: "Enter building type, area, and cost per pyeong to estimate total construction cost.",
    buildingType: "Building Type",
    residential: "Residential",
    office: "Office",
    warehouse: "Warehouse",
    renovation: "Renovation",
    area: "Building Area",
    areaUnit: "㎡ (pyeong)",
    areaHelp: "Enter lot or floor area. 1 pyeong ≈ 3.3058㎡",
    presets: "Presets (Area)",
    perPyeongCost: "Cost per pyeong",
    perPyeongCostHelp: "Average cost per pyeong (10,000 KRW). Residential ~3-6M KRW/pyeong, Office ~4-8M KRW/pyeong",
    calculate: "Calculate",
    totalCost: "Total Construction Cost",
    totalCostDesc: "Estimated total cost (may vary by materials/site conditions)",
    material: "Material Level",
    standard: "Standard",
    premium: "Premium",
    result: "Calculation Result",
    limitations: "This is an estimate. Actual costs may vary significantly based on location, material prices, and site conditions.",
    whyConstruction: "Why do you need a construction cost estimator?",
    explanation:
      "Construction costs vary widely based on building size, type, material level, and location.\n\nGeneral construction costs in South Korea:\n\n• Residential (wood frame): ~3-5M KRW per pyeong\n• Masonry (traditional apartment type): ~5-8M KRW per pyeong\n• Reinforced Concrete (RC): ~6-10M KRW per pyeong\n• Office buildings: ~4-8M KRW per pyeong\n\nThis calculator provides a rough estimate. For accurate quotes, consult professionals.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "How accurate is the construction cost estimate?",
        a: "This calculator uses general averages. Actual costs can vary ±30-50% based on material prices, site conditions, labor costs, and design complexity.",
      },
      {
        q: "Can I use this for renovation costs?",
        a: "Yes, selecting renovation estimates at approximately 50-70% of new construction cost.",
      },
      {
        q: "What costs are included in cost per pyeong?",
        a: "Generally includes labor, materials, design fees, supervision fees, and permit costs. Civil work, interior design, and furniture may be additional.",
      },
    ],
  },
  ja: {
    title: "建築工事費計算機",
    subtitle: "建物種類・面積・平米あたり工事費を入力すると、総工事費を算出します。",
    buildingType: "建物種類",
    residential: "住居用",
    office: "事務用",
    warehouse: "倉庫用",
    renovation: "リノベーション",
    area: "建築面積",
    areaUnit: "㎡（坪）",
    areaHelp: "敷地面積または延床面積を入力します。1坪 ≈ 3.3058㎡",
    presets: "プリセット（面積）",
    perPyeongCost: "坪あたり工事費",
    perPyeongCostHelp: "平米あたり平均工事費（万ウォン）。普通住宅約300〜600万ウォン/坪、事務用約400〜800万ウォン/坪",
    calculate: "計算",
    totalCost: "総工事費",
    totalCostDesc: "推定総工事費（資材・現場条件により異なる可能性があります）",
    material: "資材レベル",
    standard: "標準",
    premium: "高級",
    result: "計算結果",
    limitations: "計算結果は参考用です。実際の工事費は地域・資材価格・現場条件によって大きく異なる場合があります。",
    whyConstruction: "なぜ建築工事費計算機が必要ですか？",
    explanation:
      "建築工事費は建物サイズ・種類・資材レベル・地域によって大きく異なります。\n\n韓国の一般的な建築費用：\n\n• 普通住宅（木造）：坪あたり300〜500万ウォン\n• 組積造（既存アパート類型）：坪あたり500〜800万ウォン\n• 鉄筋コンクリート（RC）：坪あたり600〜1,000万ウォン\n• 事務用建物：坪あたり400〜800万ウォン\n\nこの計算機は概要を算出するために使用します。正確な見積もりには必ず専門家にご相談ください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "工事費の見積もりはどのくらい正確ですか？",
        a: "この計算機は一般的な平均に基づいています。実際の工事費は資材価格の変動、現場条件、人件費、設計水準により±30〜50%まで異なることがあります。",
      },
      {
        q: "リノベーション費用も計算できますか？",
        a: "はい、リノベーションを選択すると、通常は新規建築費の約50〜70%レベルで見積もります。",
      },
      {
        q: "坪あたり工事費にはどのような費用が含まれますか？",
        a: "一般的には人件費、資材費、設計費、監視費、許可費が含まれます。土木費、インテリア、家具は別途になる場合があります。",
      },
    ],
  },
  es: {
    title: "Estimador de Costos de Construcción",
    subtitle: "Ingresa tipo de edificio, área y costo por pyeong para estimar el costo total de construcción.",
    buildingType: "Tipo de Edificio",
    residential: "Residencial",
    office: "Oficina",
    warehouse: "Almacén",
    renovation: "Remodelación",
    area: "Área de Construcción",
    areaUnit: "m² (pyeong)",
    areaHelp: "Ingresa área del terreno o piso. 1 pyeong ≈ 3.3058m²",
    presets: "Preajustes (Área)",
    perPyeongCost: "Costo por pyeong",
    perPyeongCostHelp: "Costo promedio por pyeong (10,000 KRW). Residencial ~3-6M KRW/pyeong, Oficina ~4-8M KRW/pyeong",
    calculate: "Calcular",
    totalCost: "Costo Total de Construcción",
    totalCostDesc: "Costo total estimado (puede variar según materiales/condiciones del sitio)",
    material: "Nivel de Material",
    standard: "Estándar",
    premium: "Premium",
    result: "Resultado del Cálculo",
    limitations: "Esta es una estimación. Los costos reales pueden variar significativamente según ubicación, precios de materiales y condiciones del sitio.",
    whyConstruction: "¿Por qué necesitas un estimador de costos de construcción?",
    explanation:
      "Los costos de construcción varían ampliamente según tamaño, tipo, nivel de material y ubicación.\n\nCostos generales de construcción en Corea del Sur:\n\n• Residencial (estructura de madera): ~3-5M KRW por pyeong\n• Mampostería (tipo apartamento tradicional): ~5-8M KRW por pyeong\n• Hormigón reforzado (RC): ~6-10M KRW por pyeong\n• Edificios de oficinas: ~4-8M KRW por pyeong\n\nEsta calculadora proporciona una estimación aproximada. Para cotizaciones precisas, consulta con profesionales.",
    footer: "Procesado 100% en tu navegador. Sin datos enviados al servidor.",
    faq: [
      {
        q: "¿Qué tan preciso es el estimador de costos de construcción?",
        a: "Esta calculadora usa promedios generales. Los costos reales pueden variar ±30-50% según precios de materiales, condiciones del sitio, costos de mano de obra y complejidad del diseño.",
      },
      {
        q: "¿Puedo usarlo para costos de remodelación?",
        a: "Sí, seleccionando remodelación se estiman a aproximadamente 50-70% del costo de construcción nueva.",
      },
      {
        q: "¿Qué costos se incluyen en el costo por pyeong?",
        a: "Generalmente incluye mano de obra, materiales, honorarios de diseño, supervisión y permisos. Los trabajos civiles, interiores y muebles pueden ser adicionales.",
      },
    ],
  },
};
