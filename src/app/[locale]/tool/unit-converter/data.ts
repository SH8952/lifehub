export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  categoryLabel: string;
  categoryLength: string;
  categoryWeight: string;
  categoryTemperature: string;
  categoryArea: string;
  categoryVolume: string;
  categorySpeed: string;
  fromLabel: string;
  toLabel: string;
  resultLabel: string;
  swapBtn: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "단위 변환기",
    subtitle: "길이, 무게, 온도, 넓이, 부피, 속도 단위를 실시간으로 변환하세요 (브라우저에서 100% 처리)",
    categoryLabel: "변환 종류",
    categoryLength: "길이",
    categoryWeight: "무게",
    categoryTemperature: "온도",
    categoryArea: "넓이",
    categoryVolume: "부피",
    categorySpeed: "속도",
    fromLabel: "변환할 값",
    toLabel: "변환 결과",
    resultLabel: "결과",
    swapBtn: "단위 바꾸기",
    howTitle: "사용 방법",
    howSteps: [
      "위에서 변환 종류(길이, 무게, 온도 등)를 선택합니다.",
      "변환할 값과 원래 단위, 변환할 단위를 선택합니다.",
      "결과가 실시간으로 자동 계산되어 표시됩니다.",
      "단위 바꾸기 버튼으로 두 단위를 즉시 서로 바꿀 수 있습니다.",
    ],
    faq: [
      {
        q: "입력한 값이 서버로 전송되나요?",
        a: "아니요. 모든 변환 계산은 사용자의 브라우저 안에서만 처리되며, 어떤 데이터도 서버로 전송되지 않습니다.",
      },
      {
        q: "온도 변환도 같은 방식으로 계산되나요?",
        a: "온도는 단순 배율 계산이 아니라 섭씨·화씨·켈빈 간의 전용 변환 공식을 사용해 정확하게 계산됩니다.",
      },
      {
        q: "야드파운드법(인치, 피트, 파운드 등)도 지원하나요?",
        a: "네. 미터법(m, kg, L 등)과 야드파운드법(in, ft, lb, gal 등)을 모두 지원하며 두 체계를 자유롭게 상호 변환할 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 변환 계수는 일반적으로 통용되는 표준값을 사용하며, 매우 정밀한 과학·공학 계산에는 별도 검증이 필요할 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Unit Converter",
    subtitle: "Convert length, weight, temperature, area, volume, and speed units in real time (100% processed in your browser)",
    categoryLabel: "Conversion Type",
    categoryLength: "Length",
    categoryWeight: "Weight",
    categoryTemperature: "Temperature",
    categoryArea: "Area",
    categoryVolume: "Volume",
    categorySpeed: "Speed",
    fromLabel: "Value to Convert",
    toLabel: "Converted Value",
    resultLabel: "Result",
    swapBtn: "Swap Units",
    howTitle: "How to Use",
    howSteps: [
      "Choose a conversion type above (length, weight, temperature, etc.).",
      "Enter the value and select the units to convert from and to.",
      "The result is calculated automatically in real time.",
      "Use the swap button to instantly flip the two units.",
    ],
    faq: [
      {
        q: "Is my input sent to a server?",
        a: "No. All conversion calculations happen entirely inside your browser. Nothing is ever uploaded.",
      },
      {
        q: "Is temperature converted the same way as other units?",
        a: "No. Temperature isn't a simple multiplication — it uses dedicated formulas between Celsius, Fahrenheit, and Kelvin for accurate results.",
      },
      {
        q: "Does it support imperial units (inches, feet, pounds, etc.)?",
        a: "Yes. Both metric (m, kg, L) and imperial (in, ft, lb, gal) units are supported, and you can freely convert between the two systems.",
      },
    ],
    disclaimer: "Conversion factors use commonly accepted standard values; highly precise scientific or engineering calculations may require separate verification.",
    footer: "100% processed in your browser. No data is sent to any server.",
  },
  ja: {
    title: "単位変換ツール",
    subtitle: "長さ、重さ、温度、面積、体積、速度の単位をリアルタイムで変換できます（ブラウザで100%処理）",
    categoryLabel: "変換の種類",
    categoryLength: "長さ",
    categoryWeight: "重さ",
    categoryTemperature: "温度",
    categoryArea: "面積",
    categoryVolume: "体積",
    categorySpeed: "速度",
    fromLabel: "変換する値",
    toLabel: "変換結果",
    resultLabel: "結果",
    swapBtn: "単位を入れ替え",
    howTitle: "使い方",
    howSteps: [
      "上で変換の種類（長さ、重さ、温度など）を選択します。",
      "変換したい値と、元の単位・変換後の単位を選択します。",
      "結果がリアルタイムで自動的に計算され表示されます。",
      "「単位を入れ替え」ボタンで2つの単位を即座に入れ替えられます。",
    ],
    faq: [
      {
        q: "入力した値はサーバーに送信されますか？",
        a: "いいえ。すべての変換計算はブラウザ内だけで処理され、データはサーバーに送信されません。",
      },
      {
        q: "温度の変換も他の単位と同じ方法で計算されますか？",
        a: "いいえ。温度は単純な倍率計算ではなく、摂氏・華氏・ケルビン間の専用の変換式を使って正確に計算されます。",
      },
      {
        q: "ヤードポンド法（インチ、フィート、ポンドなど）にも対応していますか？",
        a: "はい。メートル法（m、kg、Lなど）とヤードポンド法（in、ft、lb、galなど）の両方に対応しており、2つの単位系を自由に相互変換できます。",
      },
    ],
    disclaimer: "変換係数は一般に通用する標準値を使用しており、非常に精密な科学・工学計算には別途検証が必要な場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Convertidor de Unidades",
    subtitle: "Convierte unidades de longitud, peso, temperatura, area, volumen y velocidad en tiempo real (100% procesado en tu navegador)",
    categoryLabel: "Tipo de Conversion",
    categoryLength: "Longitud",
    categoryWeight: "Peso",
    categoryTemperature: "Temperatura",
    categoryArea: "Area",
    categoryVolume: "Volumen",
    categorySpeed: "Velocidad",
    fromLabel: "Valor a Convertir",
    toLabel: "Valor Convertido",
    resultLabel: "Resultado",
    swapBtn: "Intercambiar Unidades",
    howTitle: "Como Usar",
    howSteps: [
      "Elige un tipo de conversion arriba (longitud, peso, temperatura, etc.).",
      "Ingresa el valor y selecciona las unidades de origen y destino.",
      "El resultado se calcula automaticamente en tiempo real.",
      "Usa el boton de intercambio para invertir las dos unidades al instante.",
    ],
    faq: [
      {
        q: "Se envia mi valor a un servidor?",
        a: "No. Todos los calculos de conversion ocurren completamente dentro de tu navegador. Nada se sube jamas.",
      },
      {
        q: "La temperatura se convierte de la misma forma que otras unidades?",
        a: "No. La temperatura no es una simple multiplicacion: usa formulas especificas entre Celsius, Fahrenheit y Kelvin para obtener resultados precisos.",
      },
      {
        q: "Soporta unidades imperiales (pulgadas, pies, libras, etc.)?",
        a: "Si. Se admiten tanto unidades metricas (m, kg, L) como imperiales (in, ft, lb, gal), y puedes convertir libremente entre ambos sistemas.",
      },
    ],
    disclaimer: "Los factores de conversion usan valores estandar de uso comun; los calculos cientificos o de ingenieria muy precisos pueden requerir verificacion por separado.",
    footer: "Procesado 100% en tu navegador. No se envian datos a ningun servidor.",
  },
};
