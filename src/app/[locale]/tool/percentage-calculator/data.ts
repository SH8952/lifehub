export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  mode1Title: string;
  mode2Title: string;
  mode3Title: string;
  mode4Title: string;
  valueA: string;
  valueB: string;
  percentN: string;
  resultLabel: string;
  increase: string;
  decrease: string;
  noChange: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "퍼센트(%) 계산기",
    subtitle: "비율, 증감률, 전체값 역산 등 다양한 퍼센트 계산을 한 곳에서 할 수 있습니다.",
    mode1Title: "A는 B의 몇 %?",
    mode2Title: "B의 N%는 얼마?",
    mode3Title: "A에서 B로 증감률은?",
    mode4Title: "전체값 역산 (N%가 A일 때 전체는?)",
    valueA: "값 A",
    valueB: "값 B",
    percentN: "퍼센트 N (%)",
    resultLabel: "결과",
    increase: "증가",
    decrease: "감소",
    noChange: "변화 없음",
    howTitle: "사용 방법",
    howSteps: [
      "원하는 계산 유형(비율, 특정 퍼센트 값, 증감률, 전체값 역산) 탭을 선택합니다.",
      "해당하는 값들을 입력하면 결과가 즉시 계산되어 표시됩니다.",
      "증감률 계산의 경우 증가/감소 여부도 함께 표시됩니다.",
    ],
    faq: [
      { q: "증감률은 어떻게 계산되나요?", a: "(B - A) / A × 100 공식을 사용합니다. 예를 들어 A=100, B=120이면 20% 증가입니다." },
      { q: "전체값 역산은 언제 사용하나요?", a: "예를 들어 \"할인된 금액 5,000원이 전체 금액의 20%였다\"처럼 부분값과 퍼센트를 알 때 원래 전체 금액을 구하고 싶을 때 사용합니다." },
    ],
    disclaimer: "이 계산기는 참고용이며 정확한 금융·세무 계산에는 전문가와 상담하세요.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Percentage Calculator",
    subtitle: "Calculate ratios, percentage changes, and reverse totals — all in one place.",
    mode1Title: "A is what % of B?",
    mode2Title: "What is N% of B?",
    mode3Title: "% change from A to B",
    mode4Title: "Reverse Total (if N% is A, what's the total?)",
    valueA: "Value A",
    valueB: "Value B",
    percentN: "Percent N (%)",
    resultLabel: "Result",
    increase: "increase",
    decrease: "decrease",
    noChange: "no change",
    howTitle: "How to Use",
    howSteps: [
      "Choose the calculation type tab you need (ratio, specific percent, % change, or reverse total).",
      "Enter the relevant values and the result is calculated instantly.",
      "For % change, whether it's an increase or decrease is shown too.",
    ],
    faq: [
      { q: "How is percentage change calculated?", a: "Using the formula (B - A) / A × 100. For example, A=100 and B=120 gives a 20% increase." },
      { q: "When would I use the reverse total calculation?", a: "Use it when you know a part and its percentage of the whole — e.g. \"a $50 discount was 20% of the total\" — and want to find the original total." },
    ],
    disclaimer: "This calculator is for reference only; consult a professional for precise financial or tax calculations.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "パーセント(%)計算機",
    subtitle: "比率、増減率、全体値の逆算など様々なパーセント計算を一箇所で行えます。",
    mode1Title: "AはBの何%？",
    mode2Title: "BのN%はいくつ？",
    mode3Title: "AからBへの増減率は？",
    mode4Title: "全体値の逆算（N%がAのとき全体は？）",
    valueA: "値A",
    valueB: "値B",
    percentN: "パーセントN (%)",
    resultLabel: "結果",
    increase: "増加",
    decrease: "減少",
    noChange: "変化なし",
    howTitle: "使用方法",
    howSteps: [
      "必要な計算タイプ（比率、特定パーセント値、増減率、全体値逆算）のタブを選択します。",
      "該当する値を入力すると結果が即座に計算されて表示されます。",
      "増減率計算の場合、増加/減少も一緒に表示されます。",
    ],
    faq: [
      { q: "増減率はどのように計算されますか？", a: "(B - A) / A × 100 の公式を使用します。例えばA=100、B=120の場合、20%増加です。" },
      { q: "全体値逆算はいつ使いますか？", a: "例えば「割引額5,000円が全体金額の20%だった」のように、部分値とパーセントが分かっているときに元の全体金額を求めたい場合に使用します。" },
    ],
    disclaimer: "この計算機は参考用であり、正確な金融・税務計算には専門家にご相談ください。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Calculadora de Porcentajes",
    subtitle: "Calcula ratios, cambios porcentuales y totales inversos, todo en un solo lugar.",
    mode1Title: "¿A es qué % de B?",
    mode2Title: "¿Cuánto es N% de B?",
    mode3Title: "% de cambio de A a B",
    mode4Title: "Total Inverso (si N% es A, ¿cuál es el total?)",
    valueA: "Valor A",
    valueB: "Valor B",
    percentN: "Porcentaje N (%)",
    resultLabel: "Resultado",
    increase: "aumento",
    decrease: "disminución",
    noChange: "sin cambio",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige la pestaña del tipo de cálculo que necesitas (ratio, porcentaje específico, cambio % o total inverso).",
      "Introduce los valores relevantes y el resultado se calcula al instante.",
      "Para el cambio %, también se muestra si es un aumento o disminución.",
    ],
    faq: [
      { q: "¿Cómo se calcula el cambio porcentual?", a: "Usando la fórmula (B - A) / A × 100. Por ejemplo, A=100 y B=120 da un aumento del 20%." },
      { q: "¿Cuándo usaría el cálculo de total inverso?", a: "Úsalo cuando conoces una parte y su porcentaje del total, por ejemplo \"un descuento de $50 fue el 20% del total\", y quieres encontrar el total original." },
    ],
    disclaimer: "Esta calculadora es solo de referencia; consulta a un profesional para cálculos financieros o fiscales precisos.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
