export type Locale = "ko" | "en" | "ja" | "es";

// Five elements display names (0=목/木, 1=화/火, 2=토/土, 3=금/金, 4=수/水)
export const elementNamesFull: Record<Locale, string[]> = {
  ko: ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"],
  en: ["Wood (木)", "Fire (火)", "Earth (土)", "Metal (金)", "Water (水)"],
  ja: ["木(もく)", "火(か)", "土(つち)", "金(きん)", "水(みず)"],
  es: ["Madera (木)", "Fuego (火)", "Tierra (土)", "Metal (金)", "Agua (水)"],
};

// Element visual colors/icons
export const elementColors: Record<number, { bg: string; text: string; icon: string }> = {
  0: { bg: "bg-emerald-50", text: "text-emerald-700", icon: "\ud83c\udf33" },
  1: { bg: "bg-red-50", text: "text-red-700", icon: "\ud83d\udd25" },
  2: { bg: "bg-amber-50", text: "text-amber-700", icon: "\ud83c\udfd4\ufe0f" },
  3: { bg: "bg-slate-100", text: "text-slate-700", icon: "\u2694\ufe0f" },
  4: { bg: "bg-blue-50", text: "text-blue-700", icon: "\ud83c\udf0a" },
};

// Fortune text pools by element index (0~4), per category
export const generalFortune: Record<Locale, string[]> = {
  ko: ["성장과 확장의 기운이 가득한 한 해입니다. 새로운 시도를 주저하지 마세요.", "열정과 활력이 넘치는 한 해입니다. 적극적으로 나서면 좋은 결과가 따릅니다.", "안정과 신뢰를 쌓는 한 해입니다. 꾸준함이 가장 큰 자산이 됩니다.", "원칙과 결단력이 빛나는 한 해입니다. 명확한 목표 설정이 중요합니다.", "지혜와 유연함이 돋보이는 한 해입니다. 변화에 유연하게 대응하세요."],
  en: ["A year full of growth and expansion. Don't hesitate to try new things.", "A year brimming with passion and energy. Taking initiative brings good results.", "A year of building stability and trust. Consistency is your greatest asset.", "A year where principle and determination shine. Setting clear goals matters.", "A year highlighting wisdom and flexibility. Adapt smoothly to change."],
  ja: ["成長と拡張の気運に満ちた一年です。新しい試みを躊躇しないでください。", "情熱と活力が溢れる一年です。積極的に動けば良い結果が伴います。", "安定と信頼を築く一年です。着実さが最大の資産になります。", "原則と決断力が輝く一年です。明確な目標設定が重要です。", "知恵と柔軟さが際立つ一年です。変化に柔軟に対応してください。"],
  es: ["Un año lleno de crecimiento y expansión. No dudes en intentar cosas nuevas.", "Un año rebosante de pasión y energía. Tomar la iniciativa trae buenos resultados.", "Un año de construir estabilidad y confianza. La constancia es tu mayor activo.", "Un año donde brillan el principio y la determinación. Fijar metas claras importa.", "Un año que resalta la sabiduría y la flexibilidad. Adáptate con fluidez al cambio."],
};

export const wealthFortune: Record<Locale, string[]> = {
  ko: ["투자와 확장에 좋은 기운이지만 무리한 지출은 주의하세요.", "수입이 늘어날 기회가 많으나 충동적인 소비를 조심하세요.", "꾸준한 저축이 빛을 발하는 시기입니다. 큰 변동 없이 안정적입니다.", "계획적인 재무 관리가 결실을 맺습니다. 원칙을 지키면 재물이 모입니다.", "예상치 못한 수입이 생길 수 있으나 흐름이 일정하지 않을 수 있습니다."],
  en: ["Good energy for investment and expansion, but watch out for overspending.", "Many opportunities for increased income, but be careful with impulsive spending.", "Steady savings pay off now. Finances stay stable without major swings.", "Planned financial management bears fruit. Sticking to principles grows wealth.", "Unexpected income may arrive, though cash flow may be irregular."],
  ja: ["投資や拡張に良い気運ですが、無理な支出には注意してください。", "収入が増える機会が多いですが、衝動的な消費には気をつけてください。", "着実な貯蓄が光る時期です。大きな変動なく安定しています。", "計画的な財務管理が結実します。原則を守れば財が集まります。", "予想外の収入が生じることがありますが、流れが一定でないこともあります。"],
  es: ["Buena energía para inversión y expansión, pero cuidado con gastar de más.", "Muchas oportunidades de más ingresos, pero cuidado con gastos impulsivos.", "El ahorro constante da frutos ahora. Las finanzas se mantienen estables.", "La gestión financiera planificada da resultados. Seguir principios hace crecer la riqueza.", "Puede llegar ingresos inesperados, aunque el flujo de caja sea irregular."],
};

export const loveFortune: Record<Locale, string[]> = {
  ko: ["새로운 인연이 싹트기 좋은 시기입니다. 먼저 다가가는 용기가 필요합니다.", "감정 표현이 풍부해지는 시기로, 관계에 활력이 생깁니다.", "깊고 안정적인 관계가 돋보이는 시기입니다. 신뢰가 쌓입니다.", "분명한 기준으로 관계를 정리하기 좋은 시기입니다.", "유연하고 배려심 있는 태도가 관계를 더욱 깊게 만듭니다."],
  en: ["A good time for new connections to blossom. Have the courage to reach out first.", "A time of richer emotional expression, bringing vitality to relationships.", "A time when deep, stable relationships stand out. Trust builds steadily.", "A good time to clarify relationships with clear standards.", "A flexible, caring attitude deepens your relationships even further."],
  ja: ["新しい縁が芽生えやすい時期です。まず歩み寄る勇気が必要です。", "感情表現が豊かになる時期で、関係に活力が生まれます。", "深く安定した関係が際立つ時期です。信頼が積み重なります。", "明確な基準で関係を整理するのに良い時期です。", "柔軟で思いやりのある態度が関係をさらに深めます。"],
  es: ["Buen momento para que florezcan nuevas conexiones. Ten el valor de dar el primer paso.", "Un momento de mayor expresión emocional que da vitalidad a las relaciones.", "Un momento donde destacan relaciones profundas y estables. La confianza crece.", "Buen momento para aclarar relaciones con criterios claros.", "Una actitud flexible y atenta profundiza aún más tus relaciones."],
};

export const healthFortune: Record<Locale, string[]> = {
  ko: ["활동량을 늘리기 좋은 시기이나 무리한 운동은 부상에 주의하세요.", "활력이 넘치지만 과로나 스트레스 관리에 유의하세요.", "소화기 건강에 신경 쓰고 규칙적인 식습관을 유지하세요.", "호흡기 건강을 챙기고 환절기 관리에 유의하세요.", "수면과 휴식이 중요한 시기입니다. 충분한 휴식을 취하세요."],
  en: ["A good time to be more active, but watch for injury from overexertion.", "Energy runs high — be mindful of overwork and stress management.", "Pay attention to digestive health and keep regular eating habits.", "Take care of respiratory health, especially during seasonal changes.", "Sleep and rest matter most now. Make sure to rest sufficiently."],
  ja: ["活動量を増やすのに良い時期ですが、無理な運動はけがに注意してください。", "活力に溢れますが、過労やストレス管理に気をつけてください。", "消化器の健康に気を配り、規則的な食習慣を保ってください。", "呼吸器の健康に気をつけ、季節の変わり目の管理に注意してください。", "睡眠と休息が重要な時期です。十分な休息を取ってください。"],
  es: ["Buen momento para ser más activo, pero cuidado con lesiones por esfuerzo excesivo.", "La energía está alta — presta atención al exceso de trabajo y al estrés.", "Cuida tu salud digestiva y mantén hábitos alimenticios regulares.", "Cuida tu salud respiratoria, especialmente en los cambios de estación.", "El sueño y el descanso son lo más importante ahora. Descansa lo suficiente."],
};

// Year-modifier adjectives (12, keyed by (year+month+day)%12) and sentence template
export const yearModifiers: Record<Locale, string[]> = {
  ko: ["활기찬", "안정적인", "도전적인", "차분한", "풍요로운", "변화무쌍한", "성취감 있는", "여유로운", "열정적인", "신중한", "희망찬", "꾸준한"],
  en: ["lively", "stable", "challenging", "calm", "abundant", "ever-changing", "fulfilling", "relaxed", "passionate", "prudent", "hopeful", "steady"],
  ja: ["活気ある", "安定した", "挑戦的な", "落ち着いた", "豊かな", "変化に富んだ", "達成感のある", "ゆとりある", "情熱的な", "慎重な", "希望に満ちた", "着実な"],
  es: ["animado", "estable", "desafiante", "tranquilo", "abundante", "cambiante", "gratificante", "relajado", "apasionado", "prudente", "esperanzador", "constante"],
};

export const yearModifierSentence: Record<Locale, string> = {
  ko: "특히 {mod} 기운이 강하게 작용하는 해입니다.",
  en: "This year, a particularly {mod} energy will be at work.",
  ja: "特に{mod}気運が強く働く年です。",
  es: "Este año, una energía particularmente {mod} estará en acción.",
};

export const luckyColors: Record<Locale, string[]> = {
  ko: ["초록색", "빨간색", "황토색", "흰색", "파란색"],
  en: ["Green", "Red", "Ochre", "White", "Blue"],
  ja: ["緑色", "赤色", "黄土色", "白色", "青色"],
  es: ["Verde", "Rojo", "Ocre", "Blanco", "Azul"],
};

export const luckyItems: Record<Locale, string[]> = {
  ko: ["화분이나 식물", "향초", "도자기 소품", "은색 액세서리", "유리잔"],
  en: ["A potted plant", "A scented candle", "A ceramic item", "A silver accessory", "A glass item"],
  ja: ["観葉植物", "アロマキャンドル", "陶器の小物", "シルバーアクセサリー", "ガラス製品"],
  es: ["Una planta en maceta", "Una vela aromática", "Un objeto de cerámica", "Un accesorio plateado", "Un objeto de vidrio"],
};

export const cautionTexts: Record<Locale, string[]> = {
  ko: ["과도한 확장이나 무리한 계획은 피하세요.", "감정적인 결정보다 차분한 판단이 필요합니다.", "지나친 고집은 관계에 걸림돌이 될 수 있습니다.", "지나치게 엄격한 기준은 스트레스를 유발할 수 있습니다.", "우유부단함이 기회를 놓치게 할 수 있습니다."],
  en: ["Avoid overexpansion or overly ambitious plans.", "Calm judgment is needed more than emotional decisions.", "Excessive stubbornness could become an obstacle in relationships.", "Overly strict standards may cause unnecessary stress.", "Indecisiveness may cause you to miss opportunities."],
  ja: ["過度な拡張や無理な計画は避けてください。", "感情的な決定より落ち着いた判断が必要です。", "過度な固執は関係の障害になることがあります。", "厳しすぎる基準はストレスを引き起こすことがあります。", "決断力の欠如が機会を逃す原因になることがあります。"],
  es: ["Evita la sobreexpansión o planes demasiado ambiciosos.", "Se necesita un juicio calmado más que decisiones emocionales.", "La terquedad excesiva puede convertirse en un obstáculo en las relaciones.", "Normas demasiado estrictas pueden causar estrés innecesario.", "La indecisión puede hacer que pierdas oportunidades."],
};
export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  year: string;
  month: string;
  day: string;
  calculate: string;
  result: string;
  generalLabel: string;
  wealthLabel: string;
  loveLabel: string;
  healthLabel: string;
  luckyColor: string;
  luckyItem: string;
  caution: string;
  whyTojung: string;
  tojungExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "2026 토정비결 신년운세",
    subtitle: "생년월일로 풀어보는 2026년 새해 운세",
    inputs: "생년월일 입력",
    year: "출생 연도",
    month: "출생월",
    day: "출생일",
    calculate: "2026 운세 풀이",
    result: "2026년 토정비결 운세",
    generalLabel: "총운",
    wealthLabel: "재물운",
    loveLabel: "애정운",
    healthLabel: "건강운",
    luckyColor: "행운의 색상",
    luckyItem: "행운의 물품",
    caution: "주의사항",
    whyTojung: "토정비결이 무엇인가요?",
    tojungExplanation: "토정비결은 조선 시대 학자 이지함(李之菡)이 지었다 전해지는 역술서로, 생년월일로 운명을 풀이하는 전통 민간 신앙의 한 분야입니다.\n\n이 도구는 생년월일로 계산한 일주(日柱)의 오행과, 생년월일 합을 이용한 '올해의 기운 지수'를 조합해 간이 운세를 생성합니다. 정통 토정비결 64괘 원문을 그대로 재현한 것이 아니라, 재미를 위한 간이 버전입니다.\n\n참고용 콘텐츠로만 활용해 주세요.",
    limitations: "본 콘텐츠는 전통 토정비결 원문이 아닌, 생년월일 기반의 간이 재미용 콘텐츠입니다. 참고용으로만 활용하세요.",
    disclaimer: "이 토정비결 풀이는 전통 명리학 개념을 참고한 간이 버전이며, 의학적·금융적 조언이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "토정비결 운세 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "토정비결이 정확하다고 믿어야 하나요?", a: "토정비결은 재미와 자기 성찰의 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 한 해의 시작을 응원하는 마음으로 즐기세요." },
      { q: "음력과 양력 중 무엇을 사용하나요?", a: "이 도구는 양력 생년월일을 기준으로 간이 계산합니다. 정통 토정비결은 음력을 사용하므로 결과가 다를 수 있습니다." },
      { q: "결과가 매번 같나요?", a: "같은 생년월일이면 항상 같은 결과가 나오는 결정론적 방식입니다. 날짜가 바뀌는 것이 아니라 생년월일 자체로 고정된 운세입니다." },
    ],
  },
  en: {
    title: "2026 Tojung Fortune",
    subtitle: "Discover your 2026 New Year fortune by birth date",
    inputs: "Birth Information",
    year: "Birth Year",
    month: "Birth Month",
    day: "Birth Day",
    calculate: "2026 Fortune",
    result: "2026 Tojung Fortune",
    generalLabel: "General",
    wealthLabel: "Wealth",
    loveLabel: "Love",
    healthLabel: "Health",
    luckyColor: "Lucky Color",
    luckyItem: "Lucky Item",
    caution: "Caution",
    whyTojung: "What is Tojung Bigyul?",
    tojungExplanation: "Tojung Bigyul (토정비결) is a traditional Korean fortune-telling text attributed to the Joseon-era scholar Yi Ji-ham. It reads fortune from one's birth date as part of traditional folk belief.\n\nThis tool generates a simplified fortune by combining the Five Element of your Day Pillar (calculated from your birth date) with a \"yearly energy index\" derived from the sum of your birth date. It is not a reproduction of the original 64-chapter Tojung Bigyul text, but a simplified version made for entertainment.\n\nPlease use it for reference and entertainment only.",
    limitations: "This content is a simplified, entertainment-only version based on your birth date, not the original Tojung Bigyul text. For reference only.",
    disclaimer: "This Tojung Bigyul reading is a simplified version referencing traditional Korean astrology concepts, and is not a medical or financial diagnosis. For reference purposes only.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Tojung fortune calculation is processed in your browser.",
    faq: [
      { q: "Should I take Tojung Bigyul seriously?", a: "Tojung Bigyul is a reference tool for fun and self-reflection. It is not scientifically proven. Enjoy it as a way to cheer on the new year." },
      { q: "Does it use the lunar or solar calendar?", a: "This tool calculates a simplified fortune using your solar (Gregorian) birth date. The original Tojung Bigyul uses the lunar calendar, so results may differ." },
      { q: "Does the result change each time?", a: "No, it is deterministic — the same birth date always produces the same result. The fortune is fixed by your birth date, not by the current date." },
    ],
  },
  ja: {
    title: "2026年 トジョンビギョル新年運勢",
    subtitle: "生年月日で占う2026年の新年運勢",
    inputs: "生情報入力",
    year: "出生年",
    month: "出生月",
    day: "出生日",
    calculate: "2026年 運勢を占う",
    result: "2026年 トジョンビギョル運勢",
    generalLabel: "総運",
    wealthLabel: "財運",
    loveLabel: "恋愛運",
    healthLabel: "健康運",
    luckyColor: "行運のカラー",
    luckyItem: "行運のアイテム",
    caution: "注意事項",
    whyTojung: "トジョンビギョルとは何ですか？",
    tojungExplanation: "トジョンビギョルは、朝鮮時代の学者イ・ジハムが著したと伝わる占い書で、生年月日から運命を占う伝統的な民間信仰の一分野です。\n\nこのツールは、生年月日から計算した日柱の五行と、生年月日の合計から導き出した「今年の気運指数」を組み合わせて簡易運勢を生成します。正統なトジョンビギョル64卦の原文を再現したものではなく、楽しみのための簡易版です。\n\n参考・エンターテインメント目的でのみご利用ください。",
    limitations: "本コンテンツは伝統的なトジョンビギョルの原文ではなく、生年月日に基づく簡易エンターテインメントコンテンツです。参考用としてのみご活用ください。",
    disclaimer: "このトジョンビギョル占いは伝統命理学の概念を参考にした簡易版であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "トジョンビギョル運勢の計算はブラウザで処理されます。",
    faq: [
      { q: "トジョンビギョルは信じるべきですか？", a: "トジョンビギョルは楽しみと自己省察のための参考用ツールです。科学的に立証された診断ではなく、一年の始まりを応援する気持ちで楽しんでください。" },
      { q: "旧暦と新暦のどちらを使いますか？", a: "このツールは新暦（グレゴリオ暦）の生年月日を基準に簡易計算します。正統なトジョンビギョルは旧暦を使用するため、結果が異なる場合があります。" },
      { q: "結果は毎回同じですか？", a: "はい、同じ生年月日であれば常に同じ結果が出る決定論的な方式です。日付が変わるのではなく、生年月日自体で固定された運勢です。" },
    ],
  },
  es: {
    title: "Predicción Tojung 2026",
    subtitle: "Descubre tu fortuna del año nuevo 2026 por fecha de nacimiento",
    inputs: "Información de nacimiento",
    year: "Año de nacimiento",
    month: "Mes de nacimiento",
    day: "Día de nacimiento",
    calculate: "Fortuna 2026",
    result: "Fortuna Tojung 2026",
    generalLabel: "General",
    wealthLabel: "Riqueza",
    loveLabel: "Amor",
    healthLabel: "Salud",
    luckyColor: "Color de la suerte",
    luckyItem: "Objeto de la suerte",
    caution: "Precaución",
    whyTojung: "¿Qué es Tojung Bigyul?",
    tojungExplanation: "Tojung Bigyul (토정비결) es un texto tradicional coreano de adivinación atribuido al erudito de la era Joseon Yi Ji-ham. Interpreta el destino a partir de la fecha de nacimiento como parte de la creencia popular tradicional.\n\nEsta herramienta genera una fortuna simplificada combinando el Elemento del Pilar del Día (calculado a partir de tu fecha de nacimiento) con un \"índice de energía anual\" derivado de la suma de tu fecha de nacimiento. No reproduce el texto original de 64 capítulos de Tojung Bigyul, sino que es una versión simplificada hecha para entretenimiento.\n\nÚsalo solo como referencia y entretenimiento.",
    limitations: "Este contenido es una versión simplificada y de entretenimiento basada en tu fecha de nacimiento, no el texto original de Tojung Bigyul. Solo para referencia.",
    disclaimer: "Esta lectura de Tojung Bigyul es una versión simplificada que referencia conceptos tradicionales de astrología coreana, y no es un diagnóstico médico o financiero. Solo para fines de referencia.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de la fortuna Tojung se procesa en tu navegador.",
    faq: [
      { q: "¿Debo tomarme Tojung Bigyul en serio?", a: "Tojung Bigyul es una herramienta de referencia para diversión y autorreflexión. No está científicamente comprobado. Disfrútalo como una forma de animar el nuevo año." },
      { q: "¿Usa el calendario lunar o solar?", a: "Esta herramienta calcula una fortuna simplificada usando tu fecha de nacimiento solar (gregoriana). El Tojung Bigyul original usa el calendario lunar, por lo que los resultados pueden diferir." },
      { q: "¿El resultado cambia cada vez?", a: "No, es determinista: la misma fecha de nacimiento siempre produce el mismo resultado. La fortuna está fijada por tu fecha de nacimiento, no por la fecha actual." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
