export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  modeByRate: string;
  modeByTarget: string;
  currentSalaryLabel: string;
  raiseRateLabel: string;
  targetSalaryLabel: string;
  calculateBtn: string;
  resultLabel: string;
  newSalaryLabel: string;
  increaseAmountLabel: string;
  monthlyIncreaseLabel: string;
  impliedRateLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "연봉 인상률 계산기",
    subtitle: "현재 연봉과 인상률(또는 목표 연봉)을 입력해 인상 후 연봉과 월급 변화를 계산합니다.",
    modeByRate: "인상률로 계산",
    modeByTarget: "목표 연봉으로 계산",
    currentSalaryLabel: "현재 연봉",
    raiseRateLabel: "인상률 (%)",
    targetSalaryLabel: "목표 연봉",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    newSalaryLabel: "인상 후 연봉",
    increaseAmountLabel: "연간 인상액",
    monthlyIncreaseLabel: "월급 인상액 (단순 12분할)",
    impliedRateLabel: "환산 인상률",
    howTitle: "사용 방법",
    howSteps: [
      "계산 방식(인상률 또는 목표 연봉)을 선택합니다.",
      "현재 연봉과 인상률(또는 목표 연봉)을 입력합니다.",
      "'계산하기'를 눌러 인상 후 연봉과 월급 변화를 확인하세요.",
    ],
    faq: [
      { q: "연봉 인상률과 체감 월급 인상액이 다르게 느껴지는 이유는?", a: "연봉 인상분에서 국민연금·건강보험·소득세 등 공제가 추가로 늘어나기 때문에, 실제 통장에 들어오는 월급 인상액은 단순 12분할 금액보다 적게 느껴질 수 있습니다. 이 계산기는 세전 기준입니다." },
      { q: "평균 연봉 인상률은 보통 어느 정도인가요?", a: "일반적으로 물가상승률을 고려한 통상임금 인상률은 연 3~5% 수준이 많이 언급되지만, 업종·기업·개인 성과에 따라 큰 차이가 있습니다." },
    ],
    disclaimer: "⚠️ 본 계산 결과는 입력하신 수치를 기반으로 한 단순 참고용 추정치이며, 실제 급여는 세금, 4대 보험, 회사 규정 등에 따라 달라질 수 있습니다. 정확한 금액은 회사 인사팀이나 세무 전문가와 확인하세요.",
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Salary Raise Calculator",
    subtitle: "Enter your current salary and raise rate (or target salary) to calculate your new salary and monthly pay change.",
    modeByRate: "Calculate by Rate",
    modeByTarget: "Calculate by Target Salary",
    currentSalaryLabel: "Current Salary",
    raiseRateLabel: "Raise Rate (%)",
    targetSalaryLabel: "Target Salary",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    newSalaryLabel: "New Salary",
    increaseAmountLabel: "Annual Increase Amount",
    monthlyIncreaseLabel: "Monthly Increase (÷12)",
    impliedRateLabel: "Implied Raise Rate",
    howTitle: "How to Use",
    howSteps: [
      "Choose the calculation mode (rate or target salary).",
      "Enter your current salary and the raise rate (or target salary).",
      "Click 'Calculate' to see your new salary and monthly pay change.",
    ],
    faq: [
      { q: "Why does the felt monthly increase differ from the raise rate?", a: "Since deductions (pension, health insurance, income tax) scale up with the raise, the actual take-home monthly increase feels smaller than a simple 12-way split. This calculator is pre-tax." },
      { q: "What's a typical average salary raise rate?", a: "A commonly cited range considering inflation is 3-5% annually, though it varies widely by industry, company, and individual performance." },
    ],
    disclaimer: "⚠️ This result is a simple reference estimate based on your inputs. Actual pay can vary depending on taxes, insurance deductions, and company policy. Check the exact amount with your company's HR team or a tax professional.",
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "年俸引き上げ率計算機",
    subtitle: "現在の年俸と引き上げ率（または目標年俸）を入力して引き上げ後の年俸と月給の変化を計算します。",
    modeByRate: "引き上げ率で計算",
    modeByTarget: "目標年俸で計算",
    currentSalaryLabel: "現在の年俸",
    raiseRateLabel: "引き上げ率（%）",
    targetSalaryLabel: "目標年俸",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    newSalaryLabel: "引き上げ後の年俸",
    increaseAmountLabel: "年間引き上げ額",
    monthlyIncreaseLabel: "月給引き上げ額（単純12分割）",
    impliedRateLabel: "換算引き上げ率",
    howTitle: "使用方法",
    howSteps: [
      "計算方式（引き上げ率または目標年俸）を選択します。",
      "現在の年俸と引き上げ率（または目標年俸）を入力します。",
      "「計算する」を押して引き上げ後の年俸と月給の変化を確認しましょう。",
    ],
    faq: [
      { q: "年俸引き上げ率と体感月給引き上げ額が違うのはなぜ？", a: "年俸引き上げ分から国民年金・健康保険・所得税などの控除が追加で増えるため、実際の月給引き上げ額は単純12分割額より少なく感じられる場合があります。このツールは税引前基準です。" },
      { q: "平均的な年俸引き上げ率はどの程度ですか？", a: "一般的に物価上昇率を考慮した通常賃金引き上げ率は年3〜5%程度が多く言及されますが、業種・企業・個人成果によって大きな差があります。" },
    ],
    disclaimer: "⚠️ この結果は入力値に基づく単純な参考用の推定値であり、実際の給与は税金、社会保険、会社規定などによって異なる場合があります。正確な金額は会社の人事部や税務専門家にご確認ください。",
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Aumento Salarial",
    subtitle: "Introduce tu salario actual y tasa de aumento (o salario objetivo) para calcular tu nuevo salario.",
    modeByRate: "Calcular por Tasa",
    modeByTarget: "Calcular por Salario Objetivo",
    currentSalaryLabel: "Salario Actual",
    raiseRateLabel: "Tasa de Aumento (%)",
    targetSalaryLabel: "Salario Objetivo",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    newSalaryLabel: "Nuevo Salario",
    increaseAmountLabel: "Monto de Aumento Anual",
    monthlyIncreaseLabel: "Aumento Mensual (÷12)",
    impliedRateLabel: "Tasa de Aumento Implícita",
    howTitle: "Cómo Usar",
    howSteps: [
      "Elige el modo de cálculo (tasa o salario objetivo).",
      "Introduce tu salario actual y la tasa de aumento.",
      "Haz clic en 'Calcular' para ver tu nuevo salario.",
    ],
    faq: [
      { q: "¿Por qué el aumento mensual percibido difiere de la tasa?", a: "Como las deducciones aumentan con el aumento, el incremento neto mensual se siente menor que una simple división por 12. Esta calculadora es antes de impuestos." },
      { q: "¿Cuál es una tasa de aumento salarial promedio típica?", a: "Un rango comúnmente citado considerando la inflación es 3-5% anual, aunque varía ampliamente según la industria y el desempeño." },
    ],
    disclaimer: "⚠️ Este resultado es una estimación de referencia simple basada en tus datos. El salario real puede variar según impuestos, deducciones de seguros y políticas de la empresa. Verifica el monto exacto con el departamento de RR.HH. o un asesor fiscal.",
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
