export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  depositLabel: string;
  housingTypeLabel: string;
  typeApartment: string;
  typeOther: string;
  periodLabel: string;
  calculateBtn: string;
  resultLabel: string;
  premiumLabel: string;
  monthlyAvgLabel: string;
  disclaimer: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "전세 보증보험료 계산기",
    subtitle: "보증금, 주택 유형, 보증 기간을 입력해 전세보증금 반환보증 보험료를 추정합니다.",
    depositLabel: "전세 보증금",
    housingTypeLabel: "주택 유형",
    typeApartment: "아파트",
    typeOther: "그 외 주택 (오피스텔·빌라 등)",
    periodLabel: "보증 기간 (개월)",
    calculateBtn: "계산하기",
    resultLabel: "계산 결과",
    premiumLabel: "예상 보험료",
    monthlyAvgLabel: "월평균 환산액",
    disclaimer: "본 계산은 HUG 등 보증기관의 일반적인 요율 구조를 참고한 단순 추정치이며, 실제 보험료는 보증기관(HUG/HF/SGI)과 임차인 조건(부분보증, 할인 혜택 등)에 따라 달라질 수 있습니다. 정확한 금액은 해당 보증기관에 문의하세요.",
    howTitle: "사용 방법",
    howSteps: [
      "전세 보증금과 주택 유형(아파트/기타)을 선택합니다.",
      "보증 기간(개월)을 입력합니다.",
      "'계산하기'를 눌러 예상 보험료와 월평균 환산액을 확인하세요.",
      "전세 계약 체결 후 통상 보험 가입 가능 기한(계약 기간의 1/2 경과 전 등)이 있으므로, 계약 직후 가급적 빨리 가입 여부를 확인하는 것이 좋습니다.",
    ],
    faq: [
      { q: "전세보증금 반환보증 보험이 왜 필요한가요?", a: "임대인이 전세 계약 종료 시 보증금을 반환하지 못하는 경우, 보증기관이 대신 보증금을 지급해주는 제도로, 전세 사고를 예방하는 안전장치입니다." },
      { q: "아파트와 기타 주택의 보험료율이 다른 이유는?", a: "통계적으로 아파트의 전세 사고 위험이 오피스텔·빌라 등 비아파트보다 낮게 평가되어 보험료율이 더 낮게 책정되는 경우가 많습니다." },
      { q: "보험료는 세입자와 임대인 중 누가 부담하나요?", a: "원칙적으로 가입자(통상 세입자)가 부담하지만, 임대인이 일부 또는 전액을 부담하기로 계약서에 명시하는 경우도 있습니다. 계약 전 특약사항으로 명확히 합의해 두는 것이 좋습니다." },
      { q: "임대인이 보증금을 돌려주지 않으면 어떻게 되나요?", a: "계약 종료 후 일정 기간(통상 1~2개월) 내 보증금을 받지 못하면 보증기관에 이행청구를 신청할 수 있으며, 심사 후 보증기관이 먼저 보증금을 지급합니다. 이후 보증기관이 임대인에게 구상권을 행사합니다." },
      { q: "HUG, HF, SGI는 각각 어떤 차이가 있나요?", a: "셋 다 전세보증금 반환보증을 취급하는 기관이지만, HUG(주택도시보증공사)는 공공기관으로 보증 대상 범위가 넓고, HF(한국주택금융공사)는 특정 대출 상품과 연계된 경우가 많으며, SGI(서울보증보험)는 민간 보험사로 일부 상품에서 보증금 한도나 요율 체계가 다릅니다. 본인의 전세 조건에 맞는 기관을 비교해보는 것이 좋습니다." },
      { q: "보증보험 가입 후 중도에 해지할 수 있나요?", a: "네, 임차인이 원할 경우 중도 해지가 가능하며, 이 경우 남은 기간에 대한 보험료는 일반적으로 환급됩니다. 환급 비율과 절차는 보증기관별로 다르니 확인이 필요합니다." },
    ],
    footer: "브라우저에서 100% 처리됩니다. 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Lease Deposit Insurance Premium Calculator",
    subtitle: "Enter your deposit, housing type, and guarantee period to estimate the lease deposit return guarantee insurance premium.",
    depositLabel: "Lease Deposit",
    housingTypeLabel: "Housing Type",
    typeApartment: "Apartment",
    typeOther: "Other Housing (Officetel, Villa, etc.)",
    periodLabel: "Guarantee Period (Months)",
    calculateBtn: "Calculate",
    resultLabel: "Result",
    premiumLabel: "Estimated Premium",
    monthlyAvgLabel: "Monthly Average Equivalent",
    disclaimer: "This is a simplified estimate based on typical guarantee agency rate structures. Actual premiums vary by agency (HUG/HF/SGI) and tenant conditions. Confirm the exact amount with the relevant agency.",
    howTitle: "How to Use",
    howSteps: [
      "Select your deposit amount and housing type.",
      "Enter the guarantee period in months.",
      "Click 'Calculate' to see the estimated premium and monthly average.",
      "Most guarantee agencies require enrollment within a set window after signing the lease (often before half the lease term has passed), so check your eligibility as soon as possible after signing.",
    ],
    faq: [
      { q: "Why is lease deposit return guarantee insurance needed?", a: "If the landlord fails to return the deposit at the end of the lease, the guarantee agency pays it instead — a safety net against lease deposit fraud." },
      { q: "Why do apartments have a different premium rate?", a: "Apartments are statistically assessed as lower risk for lease deposit incidents compared to officetels or villas, resulting in lower rates." },
      { q: "Who pays the premium - the tenant or the landlord?", a: "The person who enrolls (usually the tenant) pays by default, though some lease contracts specify that the landlord covers part or all of it. It's best to agree on this explicitly as a special clause before signing." },
      { q: "What happens if the landlord doesn't return the deposit?", a: "If the deposit isn't returned within a set period (typically 1-2 months) after the lease ends, you can file a claim with the guarantee agency. After review, the agency pays you first and then seeks reimbursement from the landlord directly." },
      { q: "What's the difference between HUG, HF, and SGI?", a: "All three offer lease deposit return guarantee insurance, but HUG (a public housing agency) covers a broad range of cases, HF is often tied to specific loan products, and SGI (a private insurer) may have different deposit limits or rate structures for certain products. It's worth comparing which one fits your specific lease terms." },
      { q: "Can I cancel the insurance before the term ends?", a: "Yes, tenants can generally cancel early, and the premium for the remaining period is typically refunded. The refund rate and process vary by guarantee agency, so check with them directly." },
    ],
    footer: "100% processed in your browser. No data is sent to a server.",
  },
  ja: {
    title: "賃貸保証保険料計算機",
    subtitle: "保証金、住宅タイプ、保証期間を入力して賃貸保証金返還保証保険料を推定します。",
    depositLabel: "賃貸保証金",
    housingTypeLabel: "住宅タイプ",
    typeApartment: "アパート",
    typeOther: "その他住宅（オフィステル・ヴィラなど）",
    periodLabel: "保証期間（か月）",
    calculateBtn: "計算する",
    resultLabel: "計算結果",
    premiumLabel: "予想保険料",
    monthlyAvgLabel: "月平均換算額",
    disclaimer: "この計算はHUGなどの保証機関の一般的な料率構造を参考にした単純推定値であり、実際の保険料は保証機関や賃借人の条件によって異なる場合があります。正確な金額は該当保証機関にお問い合わせください。",
    howTitle: "使用方法",
    howSteps: [
      "賃貸保証金と住宅タイプ（アパート/その他）を選択します。",
      "保証期間（か月）を入力します。",
      "「計算する」を押して予想保険料と月平均換算額を確認しましょう。",
      "賃貸契約締結後、通常は加入可能期限（契約期間の1/2経過前など）があるため、契約直後にできるだけ早く加入可否を確認することをお勧めします。",
    ],
    faq: [
      { q: "賃貸保証金返還保証保険はなぜ必要ですか？", a: "賃貸人が契約終了時に保証金を返還できない場合、保証機関が代わりに保証金を支払う制度で、賃貸事故を防ぐ安全装置です。" },
      { q: "アパートとその他住宅の保険料率が違う理由は？", a: "統計的にアパートの賃貸事故リスクがオフィステル・ヴィラなどより低く評価され、保険料率が低く設定される場合が多いです。" },
      { q: "保険料は賃借人と賃貸人のどちらが負担しますか？", a: "原則として加入者（通常は賃借人）が負担しますが、賃貸人が一部または全額を負担すると契約書に明記する場合もあります。契約前に特約事項として明確に合意しておくことをお勧めします。" },
      { q: "賃貸人が保証金を返還しない場合はどうなりますか？", a: "契約終了後、一定期間（通常1〜2か月）以内に保証金を受け取れない場合、保証機関に履行請求を申請できます。審査後、保証機関が先に保証金を支払い、その後賃貸人に求償します。" },
      { q: "HUG、HF、SGIはそれぞれどう違いますか？", a: "3機関とも賃貸保証金返還保証を取り扱いますが、HUG（公共機関）は対象範囲が広く、HFは特定の融資商品と連携する場合が多く、SGI（民間保険会社）は一部商品で保証金限度や料率体系が異なります。ご自身の条件に合う機関を比較することをお勧めします。" },
      { q: "保証保険加入後、途中で解約できますか？", a: "はい、賃借人が希望すれば中途解約が可能で、その場合残り期間の保険料は一般的に返金されます。返金率と手続きは保証機関によって異なるため確認が必要です。" },
    ],
    footer: "ブラウザで100%処理されます。サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Calculadora de Prima de Seguro de Depósito de Alquiler",
    subtitle: "Introduce tu depósito, tipo de vivienda y período de garantía para estimar la prima del seguro.",
    depositLabel: "Depósito de Alquiler",
    housingTypeLabel: "Tipo de Vivienda",
    typeApartment: "Apartamento",
    typeOther: "Otra Vivienda (Officetel, Villa, etc.)",
    periodLabel: "Período de Garantía (Meses)",
    calculateBtn: "Calcular",
    resultLabel: "Resultado",
    premiumLabel: "Prima Estimada",
    monthlyAvgLabel: "Promedio Mensual Equivalente",
    disclaimer: "Esta es una estimación simplificada basada en estructuras de tarifas típicas. Las primas reales varían según la agencia y las condiciones. Confirma el monto exacto con la agencia correspondiente.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Selecciona tu depósito y tipo de vivienda.",
      "Introduce el período de garantía en meses.",
      "Haz clic en 'Calcular' para ver la prima estimada.",
      "La mayoría de las agencias de garantía exigen inscribirse dentro de un plazo tras firmar el contrato (a menudo antes de que transcurra la mitad del período), así que verifica tu elegibilidad lo antes posible.",
    ],
    faq: [
      { q: "¿Por qué se necesita el seguro de garantía de devolución de depósito?", a: "Si el arrendador no devuelve el depósito al finalizar el contrato, la agencia de garantía lo paga en su lugar." },
      { q: "¿Por qué los apartamentos tienen una tasa diferente?", a: "Los apartamentos se evalúan estadísticamente con menor riesgo que los officetels o villas, resultando en tasas más bajas." },
      { q: "¿Quién paga la prima, el inquilino o el propietario?", a: "Por defecto la paga quien se inscribe (normalmente el inquilino), aunque algunos contratos especifican que el propietario cubre parte o la totalidad. Es mejor acordarlo explícitamente como cláusula especial antes de firmar." },
      { q: "¿Qué pasa si el propietario no devuelve el depósito?", a: "Si el depósito no se devuelve dentro de un plazo establecido (normalmente 1-2 meses) tras finalizar el contrato, puedes presentar una reclamación ante la agencia de garantía, que te paga primero y luego reclama al propietario." },
      { q: "¿Cuál es la diferencia entre HUG, HF y SGI?", a: "Las tres ofrecen seguro de garantía de devolución de depósito, pero HUG (agencia pública) cubre una gama amplia de casos, HF suele vincularse a productos de préstamo específicos, y SGI (aseguradora privada) puede tener límites o tarifas distintas en ciertos productos. Vale la pena comparar cuál se ajusta a tu contrato." },
      { q: "¿Puedo cancelar el seguro antes de que termine el plazo?", a: "Sí, los inquilinos generalmente pueden cancelar anticipadamente, y la prima del período restante suele reembolsarse. La tasa de reembolso y el proceso varían según la agencia, así que conviene confirmarlo directamente." },
    ],
    footer: "Procesado 100% en tu navegador. No se envían datos a un servidor.",
  },
};
