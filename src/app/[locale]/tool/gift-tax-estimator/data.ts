export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  amountLabel: string;
  relationLabel: string;
  relationSpouse: string;
  relationChildAdult: string;
  relationChildMinor: string;
  relationParent: string;
  relationOther: string;
  relationStranger: string;
  calculateBtn: string;
  resultLabel: string;
  deductionLabel: string;
  taxableLabel: string;
  taxLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "증여세 간이 계산기",
    subtitle: "증여금액과 관계를 입력해 증여공제를 반영한 예상 증여세를 간단히 계산합니다.",
    amountLabel: "증여 금액",
    relationLabel: "증여자와의 관계",
    relationSpouse: "배우자",
    relationChildAdult: "자녀 (성인)",
    relationChildMinor: "자녀 (미성년자)",
    relationParent: "직계존속 (부모 등)",
    relationOther: "기타 친족",
    relationStranger: "그 외 (제3자)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    deductionLabel: "증여공제액",
    taxableLabel: "과세표준",
    taxLabel: "예상 증여세",
    disclaimer: "본 계산은 10년간 동일인 증여 누적 등 세부 규정을 반영하지 않은 단순 참고용 추정치입니다. 실제 증여세는 과거 증여 이력, 신고기한 내 자진신고 공제 등 다양한 요소에 따라 달라지므로, 정확한 세액은 세무사와 상담하시기 바랍니다.",
    howTitle: "사용 방법",
    howSteps: [
      "증여받을 금액을 입력합니다.",
      "증여자와의 관계를 선택합니다 (공제액이 자동 반영됩니다).",
      "'계산하기'를 눌러 과세표준과 예상 증여세를 확인하세요.",
      "증여세는 증여일이 속하는 달의 말일부터 3개월 이내에 신고·납부해야 하며, 기한 내 자진신고 시 세액공제 혜택이 있습니다.",
    ],
    faq: [
      { q: "증여공제는 몇 년마다 적용되나요?", a: "증여공제는 동일인으로부터 10년 이내에 받은 증여 금액을 합산하여 공제 한도를 적용합니다. 즉, 10년 동안 같은 사람에게 받은 공제 한도는 한 번만 적용됩니다." },
      { q: "배우자 증여공제는 얼마인가요?", a: "배우자로부터 증여받는 경우 10년간 6억원까지 공제되어 그 이하 금액은 증여세가 발생하지 않습니다." },
      { q: "증여세와 상속세는 어떻게 다른가요?", a: "증여세는 살아있는 사람이 재산을 무상으로 넘겨줄 때 부과되고, 상속세는 사망으로 인해 재산이 이전될 때 부과됩니다. 세율 구조는 유사하지만 공제 한도와 적용 방식이 다릅니다." },
      { q: "기한 내 자진신고하면 세금이 줄어드나요?", a: "네. 신고기한(3개월) 내에 자진신고·납부하면 산출세액의 일정 비율을 공제받을 수 있습니다. 기한을 넘기면 이 공제를 받지 못하고 오히려 가산세가 부과됩니다." },
      { q: "증여세를 신고하지 않으면 어떻게 되나요?", a: "무신고 시 과세당국이 추후 세무조사 등을 통해 적발할 수 있으며, 이 경우 무신고가산세(최대 40%)와 납부지연가산세가 추가로 부과되어 부담이 훨씬 커집니다." },
      { q: "부동산이나 주식처럼 현금이 아닌 자산을 증여받으면 어떻게 계산하나요?", a: "현금이 아닌 자산은 증여일 기준 시가(부동산은 감정평가액 또는 공시가격, 상장주식은 증여일 전후 2개월 평균 종가 등)로 평가해 증여재산가액을 산정합니다. 이 계산기는 이미 평가된 금액을 입력하는 방식이므로, 비현금 자산은 먼저 해당 평가 방법으로 금액을 환산한 뒤 입력하셔야 합니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Gift Tax Simple Estimator",
    subtitle: "Enter the gift amount and relationship to estimate gift tax after applicable deductions.",
    amountLabel: "Gift Amount",
    relationLabel: "Relationship to Donor",
    relationSpouse: "Spouse",
    relationChildAdult: "Child (Adult)",
    relationChildMinor: "Child (Minor)",
    relationParent: "Lineal Ascendant (Parent, etc.)",
    relationOther: "Other Relative",
    relationStranger: "Non-Relative (Third Party)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    deductionLabel: "Deduction",
    taxableLabel: "Taxable Amount",
    taxLabel: "Estimated Gift Tax",
    disclaimer: "This is a simplified estimate that does not account for 10-year cumulative gift rules or other details. Actual gift tax depends on prior gift history and other factors — consult a tax professional for an exact figure.",
    howTitle: "How to Use",
    howSteps: [
      "Enter the gift amount.",
      "Select your relationship to the donor (deduction applied automatically).",
      "Click 'Calculate' to see the taxable amount and estimated tax.",
      "Gift tax must be reported and paid within 3 months from the end of the month in which the gift occurred; filing on time qualifies you for a self-reporting tax credit.",
    ],
    faq: [
      { q: "How often does the gift deduction apply?", a: "The deduction applies to the cumulative total of gifts received from the same person within a 10-year period — the limit is used only once per 10 years." },
      { q: "How much is the spousal gift deduction?", a: "Gifts from a spouse are deductible up to 600 million KRW over 10 years, so amounts below that incur no gift tax." },
      { q: "What's the difference between gift tax and inheritance tax?", a: "Gift tax applies when a living person transfers property without compensation, while inheritance tax applies when property passes on due to death. The rate structure is similar, but deduction limits and application differ." },
      { q: "Does filing on time reduce the tax owed?", a: "Yes. Filing and paying within the 3-month deadline qualifies you for a percentage discount off the calculated tax. Missing the deadline forfeits this discount and triggers penalty surcharges instead." },
      { q: "What happens if I don't report a gift?", a: "Unreported gifts can be discovered later through a tax audit. In that case, a failure-to-file penalty (up to 40%) and late-payment penalty are added on top of the original tax, making the total burden much higher." },
      { q: "How is non-cash property like real estate or stock valued for gift tax?", a: "Non-cash assets are valued at fair market value as of the gift date — real estate typically uses an appraisal or the officially assessed value, while listed stock uses the average closing price over the 2 months before and after the gift date. This calculator expects you to enter the already-converted value, so non-cash assets need to be valued separately before entering the amount." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "贈与税簡易計算機",
    subtitle: "贈与金額と関係を入力して贈与控除を反映した予想贈与税を簡単に計算します。",
    amountLabel: "贈与金額",
    relationLabel: "贈与者との関係",
    relationSpouse: "配偶者",
    relationChildAdult: "子（成人）",
    relationChildMinor: "子（未成年）",
    relationParent: "直系尊属（親など）",
    relationOther: "その他親族",
    relationStranger: "その他（第三者）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    deductionLabel: "贈与控除額",
    taxableLabel: "課税標準",
    taxLabel: "予想贈与税",
    disclaimer: "この計算は10年間の同一人贈与累積など詳細規定を反映していない単純な参考推定値です。実際の贈与税は過去の贈与履歴など様々な要素によって異なるため、正確な税額は税務士にご相談ください。",
    howTitle: "使用方法",
    howSteps: [
      "贈与される金額を入力します。",
      "贈与者との関係を選択します（控除額が自動反映されます）。",
      "「計算する」を押して課税標準と予想贈与税を確認しましょう。",
      "贈与税は贈与日が属する月の末日から3か月以内に申告・納付する必要があり、期限内に自主申告すると税額控除の恩恵があります。",
    ],
    faq: [
      { q: "贈与控除は何年ごとに適用されますか？", a: "贈与控除は同一人から10年以内に受けた贈与金額を合算して控除限度を適用します。" },
      { q: "配偶者贈与控除はいくらですか？", a: "配偶者からの贈与は10年間6億ウォンまで控除されます。" },
      { q: "贈与税と相続税はどう違いますか？", a: "贈与税は生存している人が財産を無償で譲渡する際に課され、相続税は死亡により財産が移転する際に課されます。税率構造は似ていますが、控除限度や適用方式が異なります。" },
      { q: "期限内に自主申告すると税金は減りますか？", a: "はい。申告期限（3か月）内に自主申告・納付すると算出税額の一定割合が控除されます。期限を過ぎるとこの控除は受けられず、逆に加算税が課されます。" },
      { q: "贈与税を申告しないとどうなりますか？", a: "無申告の場合、後日税務調査などで発覚する可能性があり、その際は無申告加算税（最大40%）と納付遅延加算税が追加で課され、負担がはるかに大きくなります。" },
      { q: "不動産や株式など現金以外の資産を贈与された場合、どう計算しますか？", a: "現金以外の資産は贈与日基準の時価（不動産は鑑定評価額または公示価格、上場株式は贈与日前後2か月間の平均終値など）で評価して贈与財産価額を算定します。このツールはすでに評価された金額を入力する方式のため、現金以外の資産は先に該当評価方法で金額を換算してから入力してください。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Estimador Simple de Impuesto de Donación",
    subtitle: "Introduce el monto de la donación y la relación para estimar el impuesto tras deducciones.",
    amountLabel: "Monto de la Donación",
    relationLabel: "Relación con el Donante",
    relationSpouse: "Cónyuge",
    relationChildAdult: "Hijo/a (Adulto)",
    relationChildMinor: "Hijo/a (Menor)",
    relationParent: "Ascendiente Directo (Padre, etc.)",
    relationOther: "Otro Pariente",
    relationStranger: "No Pariente (Tercero)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    deductionLabel: "Deducción",
    taxableLabel: "Monto Imponible",
    taxLabel: "Impuesto de Donación Estimado",
    disclaimer: "Esta es una estimación simplificada que no considera reglas acumulativas de 10 años. Consulta a un profesional fiscal para una cifra exacta.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce el monto de la donación.",
      "Selecciona tu relación con el donante.",
      "Haz clic en 'Calcular' para ver el monto imponible y el impuesto estimado.",
      "El impuesto de donación debe declararse y pagarse dentro de los 3 meses siguientes al fin del mes en que se hizo la donación; declarar a tiempo otorga un crédito fiscal por autodeclaración.",
    ],
    faq: [
      { q: "¿Con qué frecuencia se aplica la deducción?", a: "La deducción se aplica al total acumulado de donaciones de la misma persona en un período de 10 años." },
      { q: "¿Cuánto es la deducción de cónyuge?", a: "Las donaciones de un cónyuge son deducibles hasta 600 millones de KRW en 10 años." },
      { q: "¿Cuál es la diferencia entre el impuesto de donación y el de herencia?", a: "El impuesto de donación aplica cuando una persona viva transfiere bienes sin compensación, mientras que el de herencia aplica cuando los bienes pasan por fallecimiento. La estructura de tasas es similar, pero los límites de deducción y su aplicación difieren." },
      { q: "¿Declarar a tiempo reduce el impuesto adeudado?", a: "Sí. Declarar y pagar dentro del plazo de 3 meses otorga un descuento porcentual sobre el impuesto calculado. Si se pierde el plazo, se pierde ese descuento y se aplican recargos en su lugar." },
      { q: "¿Qué pasa si no declaro una donación?", a: "Las donaciones no declaradas pueden descubrirse más tarde mediante una auditoría fiscal. En ese caso, se añade una multa por no declarar (hasta 40%) y un recargo por pago tardío, lo que aumenta considerablemente la carga total." },
      { q: "¿Cómo se valora un bien no monetario, como un inmueble o acciones, para el impuesto de donación?", a: "Los activos no monetarios se valoran a precio de mercado en la fecha de la donación — los bienes inmuebles suelen usar una tasación o el valor catastral oficial, mientras que las acciones cotizadas usan el precio de cierre promedio de los 2 meses anteriores y posteriores a la donación. Esta calculadora espera que introduzcas el valor ya convertido, así que los activos no monetarios deben valorarse por separado antes de introducir el monto." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
