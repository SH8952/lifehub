export type Locale = "ko" | "en" | "ja" | "es";

// Five elements display names (0=목/木, 1=화/火, 2=토/土, 3=금/金, 4=수/水)
export const elementNamesFull: Record<Locale, string[]> = {
  ko: ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"],
  en: ["Wood (木)", "Fire (火)", "Earth (土)", "Metal (金)", "Water (水)"],
  ja: ["木(もく)", "火(か)", "土(つち)", "金(きん)", "水(みず)"],
  es: ["Madera (木)", "Fuego (火)", "Tierra (土)", "Metal (金)", "Agua (水)"],
};

export const elementColors: Record<number, { bg: string; text: string; icon: string }> = {
  0: { bg: "bg-emerald-50", text: "text-emerald-700", icon: "\ud83c\udf33" },
  1: { bg: "bg-red-50", text: "text-red-700", icon: "\ud83d\udd25" },
  2: { bg: "bg-amber-50", text: "text-amber-700", icon: "\ud83c\udfd4\ufe0f" },
  3: { bg: "bg-slate-100", text: "text-slate-700", icon: "\u2694\ufe0f" },
  4: { bg: "bg-blue-50", text: "text-blue-700", icon: "\ud83c\udf0a" },
};

// tier: 0=상생(generating, best), 1=동일오행(same element), 2=상극(overcoming, challenging)
export const tierNames: Record<Locale, string[]> = {
  ko: ["최고의 궁합", "편안한 궁합", "도전적인 궁합"],
  en: ["Best Match", "Comfortable Match", "Challenging Match"],
  ja: ["最高の相性", "心地よい相性", "挑戦的な相性"],
  es: ["Mejor Compatibilidad", "Compatibilidad Cómoda", "Compatibilidad Desafiante"],
};

export const tierRates: number[] = [90, 75, 55];

export const strengthsTemplates: Record<Locale, string[]> = {
  ko: ["{a}의 기운이 {b}를 북돋아 주는 관계입니다. 서로를 성장시키는 좋은 궁합입니다.", "같은 오행({a})을 가져 성향과 가치관이 비슷해 편안함을 느끼는 관계입니다.", "서로 다른 기운이 긴장감을 만들어 자극과 성장의 계기가 되는 관계입니다."],
  en: ["{a}'s energy nurtures {b}, creating a relationship where you both help each other grow.", "Sharing the same element ({a}) means similar tendencies and values, bringing comfort to the relationship.", "Your differing energies create tension that can become a source of stimulation and growth."],
  ja: ["{a}の気運が{b}を育てる関係です。互いを成長させる良い相性です。", "同じ五行（{a}）を持つため、傾向や価値観が似ていて心地よさを感じる関係です。", "異なる気運が緊張感を生み、刺激と成長のきっかけになる関係です。"],
  es: ["La energía de {a} nutre a {b}, creando una relación donde ambos se ayudan a crecer.", "Compartir el mismo elemento ({a}) significa tendencias y valores similares, aportando comodidad a la relación.", "Sus energías diferentes crean tensión que puede convertirse en una fuente de estímulo y crecimiento."],
};

export const challengesTemplates: Record<Locale, string[]> = {
  ko: ["한쪽이 너무 의존적이 되지 않도록 균형을 맞추는 노력이 필요합니다.", "비슷한 성향 때문에 같은 실수를 반복하거나 자극이 부족할 수 있습니다.", "가치관 차이로 갈등이 생기기 쉬우니 서로의 다름을 인정하는 것이 중요합니다."],
  en: ["Effort is needed to keep balance so one side doesn't become overly dependent.", "Similar tendencies may lead to repeating the same mistakes or lacking stimulation.", "Differing values can easily lead to conflict, so recognizing each other's differences matters."],
  ja: ["一方が過度に依存しないよう、バランスを取る努力が必要です。", "似た傾向のため、同じ失敗を繰り返したり刺激が不足することがあります。", "価値観の違いから衝突が起きやすいので、互いの違いを認めることが重要です。"],
  es: ["Se necesita esfuerzo para mantener el equilibrio y que un lado no se vuelva demasiado dependiente.", "Las tendencias similares pueden llevar a repetir los mismos errores o carecer de estímulo.", "Los valores diferentes pueden generar conflicto fácilmente, por lo que reconocer las diferencias importa."],
};

export const adviceTemplates: Record<Locale, string[]> = {
  ko: ["서로의 장점을 인정하고 격려하는 태도를 유지하면 관계가 더욱 단단해집니다.", "서로 다른 활동이나 관점을 적극적으로 시도해보면 관계에 활력이 더해집니다.", "상대의 방식을 바꾸려 하기보다 다름을 존중하는 대화 방식을 연습해보세요."],
  en: ["Keep acknowledging and encouraging each other's strengths to make the relationship even stronger.", "Actively trying different activities or perspectives together adds vitality to the relationship.", "Instead of trying to change the other's way, practice conversations that respect your differences."],
  ja: ["互いの長所を認め励まし合う姿勢を保てば、関係はさらに強くなります。", "異なる活動や視点を積極的に試してみると、関係に活力が加わります。", "相手の方式を変えようとするより、違いを尊重する対話の仕方を練習してみましょう。"],
  es: ["Seguir reconociendo y alentando las fortalezas mutuas hace que la relación sea aún más fuerte.", "Probar activamente diferentes actividades o perspectivas juntos añade vitalidad a la relación.", "En lugar de intentar cambiar la forma del otro, practica conversaciones que respeten sus diferencias."],
};
export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  person1: string;
  person2: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  calculate: string;
  result: string;
  compatibility: string;
  compatibilityRate: string;
  strengths: string;
  challenges: string;
  advice: string;
  whyCompatibility: string;
  compatibilityExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "궁합 풀이",
    subtitle: "이름과 생년월일로 보는 두 사람의 궁합",
    person1: "첫 번째 사람",
    person2: "두 번째 사람",
    name: "이름",
    birthYear: "출생년도",
    birthMonth: "출생월",
    birthDay: "출생일",
    calculate: "궁합 풀이",
    result: "궁합 결과",
    compatibility: "궁합",
    compatibilityRate: "궁합 비율",
    strengths: "강점",
    challenges: "주의사항",
    advice: "조언",
    whyCompatibility: "왜 궁합을 보나요?",
    compatibilityExplanation: "궁합은 두 사람의 생년월일(간지)과 이름의 오행(五行) 관계를 분석하여 상호작용의 조화를 보는 전통입니다.\n\n오행(목·화·토·금·수)의 상생(相生)과 상극(相剋) 관계로 두 사람의 성향, 강점, 주의할 점을 참고로 살펴봅니다.\n\n이 도구는 각자의 일주(日柱) 오행을 율리우스일 기반으로 계산해 비교하는 간이 버전이며, 과학적으로 입증된 진단이 아닙니다.",
    limitations: "궁합 풀이는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
    disclaimer: "이 궁합 풀이는 전통 명리학 개념을 참고한 간이 버전이며, 의학적·금융적 진단이 아닙니다. 참고용 목적으로만 사용하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "궁합 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "궁합이 중요하다고 믿어야 하나요?", a: "궁합은 두 사람의 관계를 돌아보는 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 관계의 시작을 응원하는 마음으로 즐기세요." },
      { q: "어떤 기준으로 궁합을 보나요?", a: "전통적으로 생년월일의 간지(干支)와 오행(五行) 관계를 봅니다. 오행의 상생(相生)이 좋다고 여겨집니다." },
      { q: "궁합이 낮게 나오면 어떻게 하나요?", a: "궁합은 한 가지 관점일 뿐입니다. 낮은 궁합도 서로 노력하고 이해하면 좋은 관계가 될 수 있습니다." },
    ],
  },
  en: {
    title: "Compatibility Reading",
    subtitle: "Check compatibility between two people by name and birth date",
    person1: "Person 1",
    person2: "Person 2",
    name: "Name",
    birthYear: "Birth Year",
    birthMonth: "Birth Month",
    birthDay: "Birth Day",
    calculate: "Check Compatibility",
    result: "Compatibility Result",
    compatibility: "Compatibility",
    compatibilityRate: "Compatibility Rate",
    strengths: "Strengths",
    challenges: "Challenges",
    advice: "Advice",
    whyCompatibility: "Why check compatibility?",
    compatibilityExplanation: "Compatibility reading analyzes the Five Elements (Wood, Fire, Earth, Metal, Water) relationship between two people based on their birth dates.\n\nThe traditional approach looks at mutual generation (相生) and mutual restriction (相剋) patterns to understand personality dynamics, strengths, and areas of attention.\n\nThis tool is a simplified version that calculates each person's Day Pillar element using the Julian Day Number method and compares them. It is not a scientifically proven diagnosis.",
    limitations: "Compatibility reading is for reference only and is not a scientifically proven diagnosis.",
    disclaimer: "This compatibility reading is a simplified version referencing traditional Korean astrology concepts, and is not a medical or financial diagnosis. For reference purposes only.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Compatibility calculation is processed in your browser.",
    faq: [
      { q: "Should I take compatibility seriously?", a: "Compatibility is a reference tool for reflecting on relationships. It is not scientifically proven. Enjoy it as a way to cheer on your relationships." },
      { q: "What criteria are used for compatibility?", a: "Traditionally, the stem-branch (干支) and Five Elements (五行) relationship of birth dates is examined. Mutual generation (相生) is considered favorable." },
      { q: "What if the compatibility score is low?", a: "Compatibility is just one perspective. Even with a lower score, relationships can be wonderful with effort and understanding." },
    ],
  },
  ja: {
    title: "相性占い",
    subtitle: "名前と生年月日から二人の相性をチェック",
    person1: "最初の人物",
    person2: "2番目の人物",
    name: "名前",
    birthYear: "出生年",
    birthMonth: "出生月",
    birthDay: "出生日",
    calculate: "相性をチェック",
    result: "相性結果",
    compatibility: "相性",
    compatibilityRate: "相性率",
    strengths: "強み",
    challenges: "注意点",
    advice: "アドバイス",
    whyCompatibility: "なぜ相性を見るのか？",
    compatibilityExplanation: "相性は、二人の生年月日（干支）の五行の関係を分析し、相互の調和を見る伝統です。\n\n五行（木・火・土・金・水）の相生と相剋の関係で、二人の性格、強み、注意点を参考に調べます。\n\nこのツールは、各自の日柱の五行を儒略日（ユリウス日）方式で計算して比較する簡易版であり、科学的に証明された診断ではありません。",
    limitations: "相性占いは参考用であり、科学的に証明された診断ではありません。",
    disclaimer: "この相性占いは伝統的な命理学の概念を参考にした簡易版であり、医学的・金融的な診断ではありません。参考目的でのみご利用ください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "相性の計算はブラウザで処理されます。",
    faq: [
      { q: "相性を本物として信じるべきですか？", a: "相性は二人の関係を振り返る参考用ツールです。科学的に証明された診断ではありません。関係を応援する気持ちで楽しんでください。" },
      { q: "どのような基準で相性を見るのですか？", a: "伝統的に生年月日の干支と五行の関係を見ます。相生が良いとされています。" },
      { q: "相性が低く出たらどうすれば？", a: "相性は一つの視点です。低い相性でも互いに努力し理解すれば良い関係になれます。" },
    ],
  },
  es: {
    title: "Lectura de Compatibilidad",
    subtitle: "Verifica compatibilidad entre dos personas por nombre y fecha de nacimiento",
    person1: "Persona 1",
    person2: "Persona 2",
    name: "Nombre",
    birthYear: "Año de nacimiento",
    birthMonth: "Mes de nacimiento",
    birthDay: "Día de nacimiento",
    calculate: "Verificar Compatibilidad",
    result: "Resultado de Compatibilidad",
    compatibility: "Compatibilidad",
    compatibilityRate: "Tasa de Compatibilidad",
    strengths: "Fortalezas",
    challenges: "Desafíos",
    advice: "Consejo",
    whyCompatibility: "¿Por qué verificar compatibilidad?",
    compatibilityExplanation: "La lectura de compatibilidad analiza la relación de los Cinco Elementos (Madera, Fuego, Tierra, Metal, Agua) entre dos personas basada en sus fechas de nacimiento.\n\nEl enfoque tradicional observa los patrones de generación mutua (相生) y restricción mutua (相剋) para entender dinámicas de personalidad, fortalezas y áreas de atención.\n\nEsta herramienta es una versión simplificada que calcula el elemento del Pilar del Día de cada persona usando el método del Número de Día Juliano y los compara. No es un diagnóstico científicamente comprobado.",
    limitations: "La lectura de compatibilidad es solo para referencia, no es un diagnóstico científicamente comprobado.",
    disclaimer: "Esta lectura de compatibilidad es una versión simplificada que referencia conceptos tradicionales de astrología coreana, y no es un diagnóstico médico o financiero. Solo para fines de referencia.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de compatibilidad se procesa en tu navegador.",
    faq: [
      { q: "¿Debo tomar la compatibilidad en serio?", a: "La compatibilidad es una herramienta de referencia para reflexionar sobre las relaciones. No está científicamente comprobado. Disfrútalo como una forma de animar tus relaciones." },
      { q: "¿Qué criterios se usan para la compatibilidad?", a: "Tradicionalmente, se examina la relación de tronco-rama (干支) y Cinco Elementos (五行) de las fechas de nacimiento. La generación mutua (相生) se considera favorable." },
      { q: "¿Qué pasa si la puntuación de compatibilidad es baja?", a: "La compatibilidad es solo una perspectiva. Incluso con una puntuación más baja, las relaciones pueden ser maravillosas con esfuerzo y comprensión." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
