export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  progressLabel: string;
  resetBtn: string;
  items: string[];
  allCheckedMsg: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "신용점수 올리기 체크리스트",
    subtitle: "신용점수에 영향을 주는 주요 항목을 체크하며 개선이 필요한 부분을 점검하세요.",
    progressLabel: "체크 완료",
    resetBtn: "초기화",
    items: [
      "신용카드·대출 대금을 연체 없이 기한 내 납부하고 있다",
      "신용카드 이용률(한도 대비 사용액)을 30% 이하로 유지하고 있다",
      "불필요한 카드 발급·대출 신청(조회)을 자제하고 있다",
      "통신비·공공요금 등 비금융 납부정보를 신용평가사에 제출했다",
      "오래된 신용카드를 유지해 신용거래 기간을 길게 유지하고 있다",
      "현금서비스·카드론 등 고금리 단기대출 이용을 줄이고 있다",
      "제2금융권보다는 제1금융권(은행) 이용을 우선하고 있다",
      "본인의 신용점수를 정기적으로 확인하고 있다",
      "채무조정·회생 등 신용 관련 이력이 없거나 성실히 상환 중이다",
      "소액이라도 여러 금융사에 분산된 대출을 하나로 정리(대환)하는 것을 고려했다",
    ],
    allCheckedMsg: "🎉 모든 항목을 체크했습니다! 꾸준히 유지하는 것이 중요합니다.",
    howTitle: "사용 방법",
    howSteps: [
      "아래 체크리스트에서 이미 실천하고 있는 항목을 체크합니다.",
      "체크되지 않은 항목을 확인해 개선이 필요한 부분을 파악합니다.",
      "진행률을 참고해 신용관리 습관을 점검하세요.",
    ],
    faq: [
      { q: "신용점수는 얼마나 자주 확인해도 괜찮나요?", a: "본인이 직접 조회하는 경우(비금융 목적의 '본인 조회')는 신용점수에 영향을 주지 않으므로, 네이버페이·토스·카카오페이 등에서 수시로 확인해도 무방합니다." },
      { q: "신용점수가 떨어지는 가장 큰 원인은 무엇인가요?", a: "연체(특히 5만원 이상 90일 이상 장기연체)가 가장 큰 영향을 미치며, 과도한 신용카드 이용률과 제2금융권 대출 이용 빈도도 주요 요인입니다." },
    ],
    disclaimer: "⚠️ 본 체크리스트는 신용점수에 영향을 주는 일반적인 요인을 참고용으로 안내하는 것으로, 실제 신용점수 산정 방식은 금융기관·신용평가사별로 다릅니다. 구체적인 신용 관리는 금융기관이나 전문가와 상담하세요.",
    footer: "브라우저에서 100% 처리됩니다. 체크 상태는 저장되지 않으며 서버로 전송되는 데이터가 없습니다.",
  },
  en: {
    title: "Credit Score Improvement Checklist",
    subtitle: "Check off the key factors affecting your credit score to see what needs improvement.",
    progressLabel: "Checked",
    resetBtn: "Reset",
    items: [
      "I pay credit card and loan bills on time without delinquency.",
      "I keep credit card utilization (balance vs. limit) under 30%.",
      "I avoid unnecessary new card/loan applications (inquiries).",
      "I've submitted non-financial payment records (phone, utility bills) to credit bureaus.",
      "I keep old credit cards open to maintain a longer credit history.",
      "I'm reducing use of high-interest short-term loans (cash advances, card loans).",
      "I prioritize first-tier banks over second-tier lenders.",
      "I check my credit score regularly.",
      "I have no debt restructuring/rehabilitation history, or am repaying faithfully.",
      "I've considered consolidating multiple small loans from different lenders into one.",
    ],
    allCheckedMsg: "🎉 You've checked everything! Consistency is key to maintaining a good score.",
    howTitle: "How to Use",
    howSteps: [
      "Check off the items you're already practicing.",
      "Review unchecked items to identify areas for improvement.",
      "Use the progress bar to track your credit habit review.",
    ],
    faq: [
      { q: "How often can I check my credit score safely?", a: "Self-inquiries (for personal, non-financial purposes) don't affect your score, so checking via apps as often as you like is fine." },
      { q: "What's the biggest cause of a credit score drop?", a: "Delinquency (especially 90+ days overdue on 50,000+ KRW) has the largest impact, along with high card utilization and frequent second-tier lender use." },
    ],
    disclaimer: "⚠️ This checklist provides general reference guidance on factors that typically affect credit scores. Actual scoring methods vary by financial institution and credit bureau. For specific credit management, consult your financial institution or a professional.",
    footer: "100% processed in your browser. Checked state is not saved and no data is sent to a server.",
  },
  ja: {
    title: "信用スコア向上チェックリスト",
    subtitle: "信用スコアに影響を与える主要項目をチェックして改善が必要な部分を点検しましょう。",
    progressLabel: "チェック完了",
    resetBtn: "リセット",
    items: [
      "クレジットカード・ローンの返済を延滞なく期限内に行っている",
      "クレジットカード利用率（限度額に対する使用額）を30%以下に維持している",
      "不要なカード発行・ローン申請（照会）を控えている",
      "通信費・公共料金などの非金融納付情報を信用評価会社に提出した",
      "古いクレジットカードを維持して信用取引期間を長く保っている",
      "キャッシングサービス・カードローンなど高金利短期融資の利用を減らしている",
      "第2金融圏より第1金融圏（銀行）の利用を優先している",
      "自分の信用スコアを定期的に確認している",
      "債務調整・再生などの信用関連履歴がない、または誠実に返済中である",
      "少額でも複数の金融会社に分散した融資を一つに整理（借り換え）することを検討した",
    ],
    allCheckedMsg: "🎉 すべての項目をチェックしました！継続的に維持することが重要です。",
    howTitle: "使用方法",
    howSteps: [
      "以下のチェックリストですでに実践している項目をチェックします。",
      "チェックされていない項目を確認して改善が必要な部分を把握します。",
      "進行率を参考に信用管理習慣を点検しましょう。",
    ],
    faq: [
      { q: "信用スコアはどのくらい頻繁に確認しても大丈夫ですか？", a: "本人による照会（非金融目的の「本人照会」）は信用スコアに影響しないため、アプリで随時確認しても問題ありません。" },
      { q: "信用スコアが下がる最大の原因は何ですか？", a: "延滞（特に5万ウォン以上90日以上の長期延滞）が最も大きな影響を与え、過度なカード利用率や第2金融圏融資の利用頻度も主要因です。" },
    ],
    disclaimer: "⚠️ このチェックリストは信用スコアに影響を与える一般的な要因を参考用に案内するものであり、実際のスコア算定方法は金融機関・信用評価機関によって異なります。具体的な信用管理については金融機関や専門家にご相談ください。",
    footer: "ブラウザで100%処理されます。チェック状態は保存されず、サーバーに送信されるデータはありません。",
  },
  es: {
    title: "Lista de Verificación para Mejorar el Puntaje de Crédito",
    subtitle: "Marca los factores clave que afectan tu puntaje de crédito para ver qué necesita mejorar.",
    progressLabel: "Verificado",
    resetBtn: "Reiniciar",
    items: [
      "Pago las facturas de tarjetas de crédito y préstamos a tiempo sin morosidad.",
      "Mantengo la utilización de crédito por debajo del 30%.",
      "Evito solicitudes innecesarias de nuevas tarjetas/préstamos.",
      "He enviado registros de pago no financieros a las agencias de crédito.",
      "Mantengo tarjetas antiguas abiertas para un historial de crédito más largo.",
      "Estoy reduciendo el uso de préstamos a corto plazo de alto interés.",
      "Priorizo bancos de primer nivel sobre prestamistas de segundo nivel.",
      "Reviso mi puntaje de crédito regularmente.",
      "No tengo historial de reestructuración de deuda, o estoy pagando fielmente.",
      "He considerado consolidar varios préstamos pequeños en uno solo.",
    ],
    allCheckedMsg: "🎉 ¡Has marcado todo! La consistencia es clave para mantener un buen puntaje.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Marca los elementos que ya practicas.",
      "Revisa los elementos sin marcar para identificar áreas de mejora.",
      "Usa la barra de progreso para revisar tus hábitos de crédito.",
    ],
    faq: [
      { q: "¿Con qué frecuencia puedo revisar mi puntaje de forma segura?", a: "Las consultas propias (para fines personales) no afectan el puntaje, así que revisarlo con apps regularmente está bien." },
      { q: "¿Cuál es la mayor causa de una caída del puntaje?", a: "La morosidad (especialmente 90+ días de retraso) tiene el mayor impacto, junto con la alta utilización de crédito." },
    ],
    disclaimer: "⚠️ Esta lista ofrece orientación general de referencia sobre factores que suelen afectar el puntaje de crédito. Los métodos reales de calificación varían según la institución financiera. Para una gestión específica de tu crédito, consulta a tu institución financiera o a un profesional.",
    footer: "Procesado 100% en tu navegador. El estado no se guarda y no se envían datos a un servidor.",
  },
};
