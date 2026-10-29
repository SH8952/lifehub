export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  distance: string;
  roundTrip: string;
  tabFuelUsed: string;
  tabEconomy: string;
  fuelUsed: string;
  economyValue: string;
  economyUnit: string;
  unitKmL: string;
  unitLPer100km: string;
  unitMpg: string;
  fuelPrice: string;
  passengers: string;
  calculate: string;
  result: string;
  economyLabel: string;
  totalCost: string;
  perPerson: string;
  whyFuel: string;
  fuelExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "연비·주유비 계산기",
    subtitle: "주행거리와 연료정보로 연비와 주유비를 계산합니다",
    inputs: "정보 입력",
    distance: "주행거리 (km)",
    roundTrip: "왕복 (거리 × 2)",
    tabFuelUsed: "연료사용량 입력",
    tabEconomy: "연비 직접입력",
    fuelUsed: "연료사용량 (L)",
    economyValue: "연비 값",
    economyUnit: "연비 표기법",
    unitKmL: "km/L",
    unitLPer100km: "L/100km",
    unitMpg: "mpg",
    fuelPrice: "연료 단가 (원/L)",
    passengers: "탑승 인원 (더치페이, 선택)",
    calculate: "계산하기",
    result: "계산 결과",
    economyLabel: "연비",
    totalCost: "총 주유비",
    perPerson: "1인당 비용",
    whyFuel: "연비와 주유비는 어떻게 계산하나요?",
    fuelExplanation: "연료사용량을 직접 입력하면 연비(km/L) = 주행거리 ÷ 연료사용량으로 계산합니다.\n\n연비를 직접 입력하는 경우, 표기법에 따라 환산합니다: L/100km → km/L = 100 ÷ 값, mpg → km/L ≈ 값 ÷ 2.352.\n\n주유비 = 연료사용량 × 연료 단가이며, 탑승 인원을 입력하면 더치페이 금액(1인당 비용)도 계산해 드립니다. 왕복 체크 시 입력한 거리를 2배로 계산합니다.",
    disclaimer: "본 계산 결과는 참고용이며, 실제 연비는 운전 습관, 도로 상황, 차량 상태에 따라 달라질 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "연비 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "mpg를 km/L로 어떻게 환산하나요?", a: "mpg(갤런당 마일) 값을 2.352로 나누면 근사치로 km/L 값을 얻을 수 있습니다. 갤런과 마일의 종류(미국/영국)에 따라 약간의 차이가 있을 수 있습니다." },
      { q: "왕복 체크는 어떤 역할을 하나요?", a: "왕복 체크를 하면 입력한 주행거리를 2배로 계산하여 총 연료사용량과 주유비를 산출합니다." },
      { q: "탑승 인원을 입력하면 무엇이 달라지나요?", a: "총 주유비를 탑승 인원수로 나누어 1인당 부담해야 하는 비용을 함께 보여줍니다." },
    ],
  },
  en: {
    title: "Fuel Cost Calculator",
    subtitle: "Calculate fuel economy and fuel cost from trip details",
    inputs: "Enter Information",
    distance: "Distance (km)",
    roundTrip: "Round trip (distance × 2)",
    tabFuelUsed: "Enter fuel used",
    tabEconomy: "Enter fuel economy",
    fuelUsed: "Fuel Used (L)",
    economyValue: "Fuel Economy Value",
    economyUnit: "Fuel Economy Unit",
    unitKmL: "km/L",
    unitLPer100km: "L/100km",
    unitMpg: "mpg",
    fuelPrice: "Fuel Price (per L)",
    passengers: "Passengers (for splitting cost, optional)",
    calculate: "Calculate",
    result: "Result",
    economyLabel: "Fuel Economy",
    totalCost: "Total Fuel Cost",
    perPerson: "Cost Per Person",
    whyFuel: "How are fuel economy and fuel cost calculated?",
    fuelExplanation: "If you enter fuel used directly, fuel economy (km/L) = distance ÷ fuel used.\n\nIf you enter fuel economy directly, it's converted based on the unit: L/100km → km/L = 100 ÷ value, mpg → km/L ≈ value ÷ 2.352.\n\nFuel cost = fuel used × fuel price. If you enter the number of passengers, the per-person cost (for splitting) is also calculated. Checking round trip doubles the entered distance.",
    disclaimer: "This result is for reference only — actual fuel economy varies by driving habits, road conditions, and vehicle condition.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Fuel cost calculation is processed in your browser.",
    faq: [
      { q: "How do I convert mpg to km/L?", a: "Divide the mpg (miles per gallon) value by 2.352 to get an approximate km/L value. There may be slight differences depending on gallon/mile type (US/UK)." },
      { q: "What does the round trip checkbox do?", a: "Checking round trip doubles the entered distance when calculating total fuel used and fuel cost." },
      { q: "What changes if I enter the number of passengers?", a: "The total fuel cost is divided by the number of passengers to also show the cost each person should pay." },
    ],
  },
  ja: {
    title: "燃費・ガソリン代計算機",
    subtitle: "走行距離と燃料情報から燃費とガソリン代を計算します",
    inputs: "情報入力",
    distance: "走行距離（km）",
    roundTrip: "往復（距離×2）",
    tabFuelUsed: "燃料使用量を入力",
    tabEconomy: "燃費を直接入力",
    fuelUsed: "燃料使用量（L）",
    economyValue: "燃費の値",
    economyUnit: "燃費表記法",
    unitKmL: "km/L",
    unitLPer100km: "L/100km",
    unitMpg: "mpg",
    fuelPrice: "燃料単価（1Lあたり）",
    passengers: "搭乗人数（割り勘用、任意）",
    calculate: "計算する",
    result: "計算結果",
    economyLabel: "燃費",
    totalCost: "合計ガソリン代",
    perPerson: "1人当たりの費用",
    whyFuel: "燃費とガソリン代はどのように計算しますか？",
    fuelExplanation: "燃料使用量を直接入力すると、燃費（km/L）＝走行距離÷燃料使用量で計算します。\n\n燃費を直接入力する場合は、表記法に応じて換算します：L/100km → km/L = 100 ÷ 値、mpg → km/L ≈ 値 ÷ 2.352。\n\nガソリン代＝燃料使用量×燃料単価で、搭乗人数を入力すると割り勘金額（1人当たりの費用）も計算します。往復にチェックすると入力距離を2倍にして計算します。",
    disclaimer: "この計算結果は参考用です。実際の燃費は運転習慣、道路状況、車両状態によって異なります。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "燃費計算はブラウザで処理されます。",
    faq: [
      { q: "mpgをkm/Lにどう換算しますか？", a: "mpg（ガロンあたりマイル）の値を2.352で割ると、おおよそのkm/L値が得られます。ガロン・マイルの種類（米国/英国）により若干差があります。" },
      { q: "往復チェックは何をしますか？", a: "往復にチェックすると、入力した走行距離を2倍にして合計燃料使用量とガソリン代を算出します。" },
      { q: "搭乗人数を入力すると何が変わりますか？", a: "合計ガソリン代を搭乗人数で割り、1人当たりの負担額も一緒に表示します。" },
    ],
  },
  es: {
    title: "Calculadora de Costo de Combustible",
    subtitle: "Calcula el rendimiento de combustible y el costo a partir de los detalles del viaje",
    inputs: "Ingresa la información",
    distance: "Distancia (km)",
    roundTrip: "Ida y vuelta (distancia × 2)",
    tabFuelUsed: "Ingresar combustible usado",
    tabEconomy: "Ingresar rendimiento",
    fuelUsed: "Combustible Usado (L)",
    economyValue: "Valor de Rendimiento",
    economyUnit: "Unidad de Rendimiento",
    unitKmL: "km/L",
    unitLPer100km: "L/100km",
    unitMpg: "mpg",
    fuelPrice: "Precio del Combustible (por L)",
    passengers: "Pasajeros (para dividir el costo, opcional)",
    calculate: "Calcular",
    result: "Resultado",
    economyLabel: "Rendimiento de Combustible",
    totalCost: "Costo Total de Combustible",
    perPerson: "Costo Por Persona",
    whyFuel: "¿Cómo se calculan el rendimiento y el costo de combustible?",
    fuelExplanation: "Si ingresas el combustible usado directamente, el rendimiento (km/L) = distancia ÷ combustible usado.\n\nSi ingresas el rendimiento directamente, se convierte según la unidad: L/100km → km/L = 100 ÷ valor, mpg → km/L ≈ valor ÷ 2.352.\n\nCosto de combustible = combustible usado × precio del combustible. Si ingresas el número de pasajeros, también se calcula el costo por persona (para dividir). Marcar ida y vuelta duplica la distancia ingresada.",
    disclaimer: "Este resultado es solo de referencia — el rendimiento real varía según los hábitos de conducción, las condiciones del camino y el estado del vehículo.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo del costo de combustible se procesa en tu navegador.",
    faq: [
      { q: "¿Cómo convierto mpg a km/L?", a: "Divide el valor de mpg (millas por galón) entre 2.352 para obtener un valor aproximado de km/L. Puede haber pequeñas diferencias según el tipo de galón/milla (EE.UU./Reino Unido)." },
      { q: "¿Qué hace la casilla de ida y vuelta?", a: "Marcar ida y vuelta duplica la distancia ingresada al calcular el combustible total usado y el costo." },
      { q: "¿Qué cambia si ingreso el número de pasajeros?", a: "El costo total de combustible se divide entre el número de pasajeros para mostrar también cuánto debe pagar cada persona." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
