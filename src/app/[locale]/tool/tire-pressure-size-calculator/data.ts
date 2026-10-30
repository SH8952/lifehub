export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface VehicleTypeOption {
  key: string;
  label: string;
  psiMin: number;
  psiMax: number;
}

export interface I18nData {
  title: string;
  subtitle: string;
  tabPressure: string;
  tabSize: string;
  vehicleTypeLabel: string;
  recommendedPressureLabel: string;
  unitPsi: string;
  unitKpa: string;
  unitBar: string;
  widthLabel: string;
  aspectRatioLabel: string;
  rimLabel: string;
  outerDiameterLabel: string;
  sidewallHeightLabel: string;
  exampleNote: string;
  vehicleTypes: VehicleTypeOption[];
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, I18nData> = {
  ko: {
    title: "타이어 공기압·사이즈 계산기",
    subtitle: "차량 유형별 권장 공기압을 확인하고, 타이어 사이즈 표기를 해석해보세요.",
    tabPressure: "공기압 추천",
    tabSize: "사이즈 해석",
    vehicleTypeLabel: "차량 유형",
    recommendedPressureLabel: "권장 공기압",
    unitPsi: "psi",
    unitKpa: "kPa",
    unitBar: "bar",
    widthLabel: "타이어 폭 (mm)",
    aspectRatioLabel: "편평비 (%)",
    rimLabel: "휠 림 직경 (인치)",
    outerDiameterLabel: "타이어 외경",
    sidewallHeightLabel: "타이어 옆면 높이",
    exampleNote: "예: '205/55R16'의 경우 폭 205mm, 편평비 55%, 림 16인치를 입력하세요.",
    vehicleTypes: [
      { key: "light", label: "경차", psiMin: 30, psiMax: 33 },
      { key: "compact", label: "준중형차", psiMin: 32, psiMax: 35 },
      { key: "midsize", label: "중형차", psiMin: 33, psiMax: 36 },
      { key: "suv", label: "SUV/RV", psiMin: 35, psiMax: 38 },
      { key: "import", label: "수입차(세단)", psiMin: 32, psiMax: 36 },
    ],
    howTitle: "사용 방법",
    howSteps: [
      "'공기압 추천' 또는 '사이즈 해석' 탭을 선택합니다.",
      "공기압 추천의 경우 차량 유형을 선택해 권장 범위를 확인합니다.",
      "사이즈 해석의 경우 타이어에 표기된 폭/편평비/림 직경을 입력합니다.",
      "계산된 타이어 외경과 옆면 높이를 확인합니다.",
    ],
    faq: [
      { q: "정확한 공기압은 어디서 확인해야 하나요?", a: "이 표는 일반적인 차량 유형별 평균 권장치입니다. 가장 정확한 값은 운전석 문 안쪽이나 차량 매뉴얼에 적힌 제조사 권장 공기압을 확인하는 것입니다." },
      { q: "타이어 외경을 계산하는 공식은 무엇인가요?", a: "타이어 외경(mm) = 림 직경(인치) × 25.4 + 2 × (폭(mm) × 편평비(%) ÷ 100) 공식을 사용합니다." },
    ],
    disclaimer: "공기압 추천값은 일반적인 참고용 범위이며, 정확한 공기압은 차량 제조사의 권장값을 따르세요.",
    footer: "브라우저에서 100% 처리됩니다. 입력하신 정보는 서버로 전송되지 않습니다.",
  },
  en: {
    title: "Tire Pressure & Size Calculator",
    subtitle: "Check recommended tire pressure by vehicle type, and decode tire size markings.",
    tabPressure: "Pressure Guide",
    tabSize: "Size Decoder",
    vehicleTypeLabel: "Vehicle Type",
    recommendedPressureLabel: "Recommended Pressure",
    unitPsi: "psi",
    unitKpa: "kPa",
    unitBar: "bar",
    widthLabel: "Tire Width (mm)",
    aspectRatioLabel: "Aspect Ratio (%)",
    rimLabel: "Rim Diameter (inches)",
    outerDiameterLabel: "Tire Outer Diameter",
    sidewallHeightLabel: "Sidewall Height",
    exampleNote: "e.g. For '205/55R16', enter width 205mm, aspect ratio 55%, rim 16 inches.",
    vehicleTypes: [
      { key: "light", label: "Compact/Kei car", psiMin: 30, psiMax: 33 },
      { key: "compact", label: "Compact sedan", psiMin: 32, psiMax: 35 },
      { key: "midsize", label: "Midsize sedan", psiMin: 33, psiMax: 36 },
      { key: "suv", label: "SUV/RV", psiMin: 35, psiMax: 38 },
      { key: "import", label: "Imported sedan", psiMin: 32, psiMax: 36 },
    ],
    howTitle: "How to Use",
    howSteps: [
      "Choose the 'Pressure Guide' or 'Size Decoder' tab.",
      "For pressure, select your vehicle type to see the recommended range.",
      "For size, enter the width/aspect ratio/rim diameter printed on your tire.",
      "Check the calculated outer diameter and sidewall height.",
    ],
    faq: [
      { q: "Where should I check the exact pressure for my car?", a: "This table shows general average recommendations by vehicle type. For the most accurate value, check the manufacturer's recommended pressure sticker inside the driver's door or in the vehicle manual." },
      { q: "What formula calculates tire outer diameter?", a: "Outer diameter (mm) = rim diameter (inches) × 25.4 + 2 × (width (mm) × aspect ratio (%) ÷ 100)." },
    ],
    disclaimer: "Recommended pressure values are general reference ranges; follow your vehicle manufacturer's specific recommendation for accuracy.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "タイヤ空気圧・サイズ計算機",
    subtitle: "車種別の推奨空気圧を確認し、タイヤサイズの表記を解読できます。",
    tabPressure: "空気圧ガイド",
    tabSize: "サイズ解読",
    vehicleTypeLabel: "車種タイプ",
    recommendedPressureLabel: "推奨空気圧",
    unitPsi: "psi",
    unitKpa: "kPa",
    unitBar: "bar",
    widthLabel: "タイヤ幅 (mm)",
    aspectRatioLabel: "扁平率 (%)",
    rimLabel: "ホイールリム直径 (インチ)",
    outerDiameterLabel: "タイヤ外径",
    sidewallHeightLabel: "タイヤ側面の高さ",
    exampleNote: "例: 「205/55R16」の場合、幅205mm、扁平率55%、リム16インチを入力してください。",
    vehicleTypes: [
      { key: "light", label: "軽自動車", psiMin: 30, psiMax: 33 },
      { key: "compact", label: "コンパクトセダン", psiMin: 32, psiMax: 35 },
      { key: "midsize", label: "ミドルセダン", psiMin: 33, psiMax: 36 },
      { key: "suv", label: "SUV/RV", psiMin: 35, psiMax: 38 },
      { key: "import", label: "輸入車（セダン）", psiMin: 32, psiMax: 36 },
    ],
    howTitle: "使用方法",
    howSteps: [
      "「空気圧ガイド」または「サイズ解読」タブを選びます。",
      "空気圧の場合、車種タイプを選んで推奨範囲を確認します。",
      "サイズの場合、タイヤに表記された幅/扁平率/リム直径を入力します。",
      "計算されたタイヤ外径と側面高さを確認します。",
    ],
    faq: [
      { q: "正確な空気圧はどこで確認すればいいですか？", a: "この表は車種タイプ別の一般的な平均推奨値です。最も正確な値は運転席ドア内側や車両マニュアルに記載されたメーカー推奨空気圧を確認してください。" },
      { q: "タイヤ外径を計算する公式は何ですか？", a: "タイヤ外径(mm) = リム直径(インチ) × 25.4 + 2 × (幅(mm) × 扁平率(%) ÷ 100) の公式を使用します。" },
    ],
    disclaimer: "推奨空気圧値は一般的な参考範囲であり、正確な空気圧は車両メーカーの推奨値に従ってください。",
    footer: "ブラウザで100%処理されます。入力情報はサーバーに送信されません。",
  },
  es: {
    title: "Calculadora de Presión y Tamaño de Llantas",
    subtitle: "Consulta la presión recomendada por tipo de vehículo y decodifica las marcas de tamaño de llanta.",
    tabPressure: "Guía de Presión",
    tabSize: "Decodificador de Tamaño",
    vehicleTypeLabel: "Tipo de Vehículo",
    recommendedPressureLabel: "Presión Recomendada",
    unitPsi: "psi",
    unitKpa: "kPa",
    unitBar: "bar",
    widthLabel: "Ancho de Llanta (mm)",
    aspectRatioLabel: "Relación de Aspecto (%)",
    rimLabel: "Diámetro de Rin (pulgadas)",
    outerDiameterLabel: "Diámetro Exterior de la Llanta",
    sidewallHeightLabel: "Altura del Flanco",
    exampleNote: "ej. Para '205/55R16', ingresa ancho 205mm, relación de aspecto 55%, rin 16 pulgadas.",
    vehicleTypes: [
      { key: "light", label: "Auto compacto/kei", psiMin: 30, psiMax: 33 },
      { key: "compact", label: "Sedán compacto", psiMin: 32, psiMax: 35 },
      { key: "midsize", label: "Sedán mediano", psiMin: 33, psiMax: 36 },
      { key: "suv", label: "SUV/RV", psiMin: 35, psiMax: 38 },
      { key: "import", label: "Sedán importado", psiMin: 32, psiMax: 36 },
    ],
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña 'Guía de Presión' o 'Decodificador de Tamaño'.",
      "Para presión, selecciona tu tipo de vehículo para ver el rango recomendado.",
      "Para tamaño, ingresa el ancho/relación de aspecto/diámetro de rin impreso en tu llanta.",
      "Revisa el diámetro exterior y altura del flanco calculados.",
    ],
    faq: [
      { q: "¿Dónde debo verificar la presión exacta para mi auto?", a: "Esta tabla muestra recomendaciones promedio generales por tipo de vehículo. Para el valor más preciso, verifica la etiqueta de presión recomendada del fabricante dentro de la puerta del conductor o en el manual del vehículo." },
      { q: "¿Qué fórmula calcula el diámetro exterior de la llanta?", a: "Diámetro exterior (mm) = diámetro de rin (pulgadas) × 25.4 + 2 × (ancho (mm) × relación de aspecto (%) ÷ 100)." },
    ],
    disclaimer: "Los valores de presión recomendados son rangos de referencia generales; sigue la recomendación específica del fabricante de tu vehículo para mayor precisión.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
