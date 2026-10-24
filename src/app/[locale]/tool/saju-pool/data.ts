export type Locale = "ko" | "en" | "ja" | "es";

export const stems: Record<Locale, string[]> = {
  ko: ["갑(甲)", "을(乙)", "병(丙)", "정(丁)", "무(戊)", "기(己)", "경(庚)", "신(辛)", "임(壬)", "계(癸)"],
  en: ["Jia (甲)", "Yi (乙)", "Bing (丙)", "Ding (丁)", "Wu (戊)", "Ji (己)", "Geng (庚)", "Xin (辛)", "Ren (壬)", "Gui (癸)"],
  ja: ["甲(こう)", "乙(おつ)", "丙(へい)", "丁(てい)", "戊(ぼ)", "己(き)", "庚(こう)", "辛(しん)", "壬(じん)", "癸(き)"],
  es: ["Jia (甲)", "Yi (乙)", "Bing (丙)", "Ding (丁)", "Wu (戊)", "Ji (己)", "Geng (庚)", "Xin (辛)", "Ren (壬)", "Gui (癸)"],
};

export const branches: Record<Locale, string[]> = {
  ko: ["자(子)", "축(丑)", "인(寅)", "묘(卯)", "진(辰)", "사(巳)", "오(午)", "미(未)", "신(申)", "유(酉)", "술(戌)", "해(亥)"],
  en: ["Rat (子)", "Ox (丑)", "Tiger (寅)", "Rabbit (卯)", "Dragon (辰)", "Snake (巳)", "Horse (午)", "Goat (未)", "Monkey (申)", "Rooster (酉)", "Dog (戌)", "Pig (亥)"],
  ja: ["子(ね)", "丑(うし)", "寅(とら)", "卯(う)", "辰(たつ)", "巳(み)", "午(うま)", "未(ひつじ)", "申(さる)", "酉(とり)", "戌(いぬ)", "亥(い)"],
  es: ["Rata (子)", "Buey (丑)", "Tigre (寅)", "Conejo (卯)", "Dragón (辰)", "Serpiente (巳)", "Caballo (午)", "Cabra (未)", "Mono (申)", "Gallo (酉)", "Perro (戌)", "Cerdo (亥)"],
};

export const elements: Record<Locale, string> = {
  ko: "오행",
  en: "Elements",
  ja: "五行",
  es: "Elementos",
};

// element display name (without hanja) for descriptions
export const elementNames: Record<Locale, string> = {
  ko: "오행",
  en: "Elements",
  ja: "五行",
  es: "Elementos",
};

// Five elements display names (index 0=목/木, 1=화/火, 2=토/土, 3=금/金, 4=수/水)
export const elementNamesFull: Record<Locale, string[]> = {
  ko: ["목(木)", "화(火)", "토(土)", "금(金)", "수(水)"],
  en: ["Wood (木)", "Fire (火)", "Earth (土)", "Metal (金)", "Water (水)"],
  ja: ["木(もく)", "火(か)", "土(つち)", "金(きん)", "水(みず)"],
  es: ["Madera (木)", "Fuego (火)", "Tierra (土)", "Metal (金)", "Agua (水)"],
};

// Element colors for visual display
export const elementColors: Record<number, { bg: string; text: string; icon: string }> = {
  0: { bg: "bg-emerald-50", text: "text-emerald-700", icon: "🌳" }, // 목(木) - green
  1: { bg: "bg-red-50", text: "text-red-700", icon: "🔥" }, // 화(火) - red
  2: { bg: "bg-amber-50", text: "text-amber-700", icon: "🏔️" }, // 토(土) - brown/amber
  3: { bg: "bg-slate-100", text: "text-slate-700", icon: "⚔️" }, // 금(金) - gray/white
  4: { bg: "bg-blue-50", text: "text-blue-700", icon: "🌊" }, // 수(水) - blue
};

// Day master element descriptions (general, non-predictive)
function dayMasterDesc(locale: Locale, elementIdx: number): string {
  const descs: Record<Locale, string[]> = {
    ko: [
      "일간이 목(木)이시군요. 성장과 확장을 중시하는 성향이 있습니다. 창의력이 풍부하고 발전지를 향해 나아가는 에너지가 강합니다.",
      "일간이 화(火)이시군요. 열정과 표현력을 갖춘 성향입니다. 주변에 밝은 에너전을 전파하고 적극적으로 소통하는 모습이 인상적입니다.",
      "일간이 토(土)이시군요. 안정과 신뢰를 중시하는 성향이 있습니다. 꼼꼼하고 성실하며 주변을 단단히 받치는 힘이 있습니다.",
      "일간이 금(金)이시군요. 원칙과 절제를 중시하는 성향이 있습니다. 명확한 기준을 가지고 체계적으로 일을 처리하는 능력이 뛰어납니다.",
      "일간이 수(水)이시군요. 지혜와 유연함을 갖춘 성향입니다. 상황에 맞춰 유연하게 대응하며 깊은 통찰력으로 문제를 해결합니다.",
    ],
    en: [
      "Your Day Master is Wood (木). You value growth and expansion. You have rich creativity and strong energy moving toward development.",
      "Your Day Master is Fire (火). You have passion and expressiveness. You spread bright energy to those around you and communicate proactively.",
      "Your Day Master is Earth (土). You value stability and trust. You are meticulous and sincere, with a strong foundation that supports those around you.",
      "Your Day Master is Metal (金). You value principles and discipline. You have clear standards and the ability to handle matters systematically.",
      "Your Day Master is Water (水). You have wisdom and flexibility. You adapt to situations and solve problems with deep insight.",
    ],
    ja: [
      "일간이 목(木)이시군요. 성장과 확장을 중시하는 성향이 있습니다. 창의력이 풍부하고 발전지를 향해 나아가는 에너지가 강합니다.",
      "일간이 화(火)이시군요. 열정과 표현력을 갖춘 성향입니다. 주변에 밝은 에너지를 전파하고 적극적으로 소통하는 모습이 인상적입니다.",
      "일간이 토(土)이시군요. 안정과 신뢰를 중시하는 성향이 있습니다. 꼼꼼하고 성실하며 주변을 단단히 받치는 힘이 있습니다.",
      "일간이 금(金)이시군요. 원칙과 절제를 중시하는 성향이 있습니다. 명확한 기준을 가지고 체계적으로 일을 처리하는 능력이 뛰어납니다.",
      "일간이 수(水)이시군요. 지혜와 유연함을 갖춘 성향입니다. 상황에 맞춰 유연하게 대응하며 깊은 통찰력으로 문제를 해결합니다.",
    ],
    es: [
      "Tu Dominante del Día es Madera (木). Valoras el crecimiento y la expansión. Tienes rica creatividad y fuerte energía hacia el desarrollo.",
      "Tu Dominante del Día es Fuego (火). Tienes pasión y expresividad. Difundes energía positiva a tu alrededor y te comunicas de forma proactiva.",
      "Tu Dominante del Día es Tierra (土). Valoras la estabilidad y la confianza. Eres meticuloso y sincero, con una base sólida que apoya a quienes te rodean.",
      "Tu Dominante del Día es Metal (金). Valoras los principios y la disciplina. Tienes estándares claros y la capacidad de manejar asuntos sistemáticamente.",
      "Tu Dominante del Día es Agua (水). Tienes sabiduría y flexibilidad. Te adaptas a las situaciones y resuelves problemas con profunda perspicacia.",
    ],
  };
  return descs[locale][elementIdx];
}

interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  hourOptional: string;
  hourUnknown: string;
  calculate: string;
  result: string;
  dayMaster: string;
  fourPillars: string;
  fiveElements: string;
  whySaju: string;
  sajuExplanation: string;
  limitations: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
  noHour: string;
  gender: string;
  male: string;
  female: string;
  anyGender: string;
  processingMsg: string;
}

export function i18n(locale: Locale): I18nData {
  const data: Record<Locale, I18nData> = {
    ko: {
      title: "정통 사주풀이",
      subtitle: "생년월일과 출생 시각으로 사주팔자(四柱八字)를 계산합니다",
      inputs: "생정보 입력",
      year: "년도 (예: 1990)",
      month: "월 (1–12)",
      day: "일 (1–31)",
      hour: "출생 시각 (24시간제, 예: 14)",
      hourOptional: "출생 시각을 모르시면 '시간 모름'에 체크하세요.",
      hourUnknown: "시간 모름",
      calculate: "사주 풀이",
      result: "사주팔자 결과",
      dayMaster: "일주 (Day Master)",
      fourPillars: "사주팔자 (四柱八字)",
      fiveElements: "오행(五行) 비율",
      whySaju: "왜 사주풀이가 필요한가요?",
      sajuExplanation:
        "사주팔자는 태어난 연·월·일·시(生年月上時)를 간지(干支) 여덟 글자로 표현한 것입니다. 일주(日柱)의 천간(天干) 오행을 본인이며, 오행(목·화·토·금·수)의 균형으로 성향과 강약을 봅니다.\n\n이 도구는 양력 기준 근사 공식을 사용해 간지를 계산합니다. 정통 만세력(萬年曆)과는 다를 수 있으니 참고용으로만 활용하세요.",
      limitations: "사주풀이는 참고용이며, 과학적으로 입증된 진단이 아닙니다.",
      disclaimer:
        "⚠️ 본 계산은 양력 기준 근사 공식을 사용한 간이 버전으로, 정밀한 절기·음력 환산을 반영한 정통 만세력과 다를 수 있습니다. 참고용으로만 활용하세요.",
      footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
      faq: [
        {
          q: "사주풀이가 정확하다고 믿어야 하나요?",
          a: "사주는 한 가지 관점에서 자신을 돌아보는 참고용 도구입니다. 과학적으로 입증된 진단이 아니며, 재미와 자기 성찰의 도구로 즐기세요.",
        },
        {
          q: "출생 시각을 모르면 어떻게 하나요?",
          a: "시(時)를 모르면 사주의 3주(연·월·일)만 볼 수 있습니다. '시간 모름' 체크박스를 선택하면 연·월·일주만 계산됩니다.",
        },
        {
          q: "간지(干支)는 어떻게 계산하나요?",
          a: "이 도구는 양력 날짜를 근사 공식으로 간지 번호로 변환합니다. 정밀한 절기 계산(입춘, 경칩 등)은 반영하지 않으므로 참고용으로만 활용하세요.",
        },
      ],
      noHour: "시주",
      gender: "성별",
      male: "남성",
      female: "여성",
      anyGender: "선택 사항",
      processingMsg: "사주팔자 계산은 브라우저에서 처리됩니다.",
    },
    en: {
      title: "Traditional Saju (Four Pillars)",
      subtitle: "Calculate your Four Pillars from birth year, month, day, and hour",
      inputs: "Birth Information",
      year: "Year (e.g., 1990)",
      month: "Month (1–12)",
      day: "Day (1–31)",
      hour: "Birth Hour (24-hour, e.g., 14)",
      hourOptional: "Unsure of birth time? Check 'Unknown'.",
      hourUnknown: "Unknown",
      calculate: "Calculate Saju",
      result: "Four Pillars Result",
      dayMaster: "Day Master (日主)",
      fourPillars: "Four Pillars (四柱八字)",
      fiveElements: "Five Elements Ratio",
      whySaju: "Why explore Saju?",
      sajuExplanation:
        "Saju (사주) expresses your birth year, month, day, and hour as eight Chinese character strokes (干支). The Day Master (日主) represents you, and the balance of Five Elements (Wood, Fire, Earth, Metal, Water) reveals personality traits and tendencies.\n\nThis tool uses an approximation formula based on the Gregorian calendar. It may differ from a traditional almanac (萬年曆) — use for reference only.",
      limitations: "Saju is for reference only and is not a scientifically proven diagnosis.",
      disclaimer:
        "⚠️ This calculation uses an approximation formula based on the Gregorian calendar and may differ from traditional almanacs (萬年曆) that use precise solar terms and lunar calendar conversions. Use for reference only.",
      footer: "100% processed in browser. No data is sent to the server.",
      faq: [
        {
          q: "Should I take Saju seriously?",
          a: "Saju is a reference tool for self-reflection. It is not scientifically proven. Enjoy it as a fun way to explore your personality.",
        },
        {
          q: "What if I don't know my birth hour?",
          a: "Without the hour pillar, you can only see the Three Pillars (year, month, day). Check the 'Unknown' box and the hour pillar will be marked as unknown.",
        },
        {
          q: "How are the stems and branches calculated?",
          a: "This tool converts Gregorian dates to stem-branch numbers using approximation formulas. It does not account for precise solar terms (Lichun, Jingzhe, etc.), so use for reference only.",
        },
      ],
      noHour: "Hour Pillar",
      gender: "Gender",
      male: "Male",
      female: "Female",
      anyGender: "Optional",
      processingMsg: "Saju calculation is processed in your browser.",
    },
    ja: {
      title: "正統サジュー（四柱推命）",
      subtitle: "生年月日時で四柱八字を計算します",
      inputs: "生情報入力",
      year: "年（例：1990）",
      month: "月（1–12）",
      day: "日（1–31）",
      hour: "出生時刻（24時間制、例：14）",
      hourOptional: "出生時刻がわからない場合は「不明」にチェックしてください。",
      hourUnknown: "不明",
      calculate: "サジューを解く",
      result: "四柱八字の結果",
      dayMaster: "日主（Day Master）",
      fourPillars: "四柱八字（四柱八字）",
      fiveElements: "五行（木火土金水）比率",
      whySaju: "なぜサジューを学ぶのか？",
      sajuExplanation:
        "サジュー（四柱推命）は、生まれた年・月・日・時を干支（かんし）の8文字で表したものです。日主（日柱の天干）が自分自身を表し、五行（木・火・土・金・水）のバランスで性格や傾向を見ます。\n\nこのツールは西暦基準の近似公式で干支を計算します。正統な萬年暦とは異なる場合がありますので、参考用としてご利用ください。",
      limitations: "サジューは参考用であり、科学的に証明された診断ではありません。",
      disclaimer:
        "⚠️ 本計算は西暦基準の近似公式を使用した簡易バージョンで、精密な節気・陰暦変換を反映した正統な萬年暦と異なる場合があります。参考用としてのみご利用ください。",
      footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
      faq: [
        {
          q: "サジューを本物として信じるべきですか？",
          a: "サジューは自己省察のための参考ツールです。科学的に証明された診断ではありません。楽しみとして性格を探るツールとして楽しんでください。",
        },
        {
          q: "出生時刻がわからない場合はどうすれば？",
          a: "時柱がわからないと、三柱（年・月・日）しか見えません。「不明」チェックボックスを選択すると、年・月・日柱のみが計算されます。",
        },
        {
          q: "干支はどのように計算されますか？",
          a: "このツールは西暦の日付を近似公式で干支の番号に変換します。精密な節気（立春、驚蟄など）は反映しないため、参考用としてご利用ください。",
        },
      ],
      noHour: "時柱",
      gender: "性別",
      male: "男性",
      female: "女性",
      anyGender: "オプション",
      processingMsg: "四柱推命の計算はブラウザで処理されます。",
    },
    es: {
      title: "Saju Tradicional (Cuatro Pilares)",
      subtitle: "Calcula tus Cuatro Pilares a partir del año, mes, día y hora de nacimiento",
      inputs: "Información de nacimiento",
      year: "Año (ej., 1990)",
      month: "Mes (1–12)",
      day: "Día (1–31)",
      hour: "Hora de nacimiento (24h, ej., 14)",
      hourOptional: "¿No sabes la hora de nacimiento? Marca 'Desconocido'.",
      hourUnknown: "Desconocido",
      calculate: "Calcular Saju",
      result: "Resultado de los Cuatro Pilares",
      dayMaster: "Dominante del Día (日主)",
      fourPillars: "Cuatro Pilares (四柱八字)",
      fiveElements: "Proporción de los Cinco Elementos",
      whySaju: "¿Por qué explorar el Saju?",
      sajuExplanation:
        "El Saju (사주) expresa tu año, mes, día y hora de nacimiento como ocho caracteres de los troncos y ramas (干支). El Dominante del Día (日主) te representa a ti, y el equilibrio de los Cinco Elementos (Madera, Fuego, Tierra, Metal, Agua) revela rasgos de personalidad y tendencias.\n\nEsta herramienta usa una fórmula de aproximación basada en el calendario gregoriano. Puede diferir de un almanaque tradicional (萬年曆) — úsalo solo como referencia.",
      limitations: "El Saju es solo para referencia, no es un diagnóstico científicamente probado.",
      disclaimer:
        "⚠️ Este cálculo usa una fórmula de aproximación basada en el calendario gregoriano y puede diferir de los almanaques tradicionales (萬年曆) que usan términos solares y conversiones del calendario lunar precisas. Úsalo solo como referencia.",
      footer: "100% procesado en tu navegador. No se envían datos al servidor.",
      faq: [
        {
          q: "¿Debo tomarme el Saju en serio?",
          a: "El Saju es una herramienta de referencia para la reflexión personal. No está científicamente comprobado. Disfrútalo como una forma divertida de explorar tu personalidad.",
        },
        {
          q: "¿Qué pasa si no sé mi hora de nacimiento?",
          a: "Sin la hora, solo puedes ver los Tres Pilares (año, mes, día). Marca la casilla 'Desconocido' y solo se calcularán los pilares de año, mes y día.",
        },
        {
          q: "¿Cómo se calculan los troncos y ramas?",
          a: "Esta herramienta convierte fechas del calendario gregoriano a números de troncos y ramas usando fórmulas de aproximación. No tiene en cuenta los términos solares precisos (Lichun, Jingzhe, etc.), así que úsalo solo como referencia.",
        },
      ],
      noHour: "Pilar de la Hora",
      gender: "Género",
      male: "Hombre",
      female: "Mujer",
      anyGender: "Opcional",
      processingMsg: "El cálculo de Saju se procesa en tu navegador.",
    },
  };
  return data[locale];
}
