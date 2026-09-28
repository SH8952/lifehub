export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  inputs: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  calculate: string;
  result: string;
  fullAge: string;
  years: string;
  months: string;
  days: string;
  zodiacYear: string;
  chineseZodiac: string;
  nextBirthday: string;
  daysUntilNext: string;
  limitations: string;
  whyAge: string;
  ageExplanation: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    inputs: "생년월일 입력",
    birthYear: "출생 연도",
    birthMonth: "출생 월",
    birthDay: "출생 일",
    calculate: "계산하기",
    result: "계산 결과",
    fullAge: "만 나이",
    years: "년",
    months: "개월",
    days: "일",
    zodiacYear: "띠",
    chineseZodiac: "띠 이름",
    nextBirthday: "다음 생일",
    daysUntilNext: "D-하루 남음",
    limitations: "만 나이는 참고용이며, 실제 공식 나이는 관할 관청 규정에 따라 다를 수 있습니다.",
    whyAge: "왜 만 나이 계산기가 필요한가요?",
    ageExplanation:
      "만 나이는 최근까지도 양력 생월일만 가지고 계산하는 것이 일반적이었습니다.\n\n하지만 최근에는 만年齢 계산이 공식적인 문서(병역, 복지, 교육 등)에서 점점 더 중요해지고 있습니다. 생년월일 만 나이는 정확한 시간 차이(년/월/일)를 알려줘 일상에서도 유용하게 사용할 수 있습니다. 또한 띠(세서지) 계산은 전통적인 문화적 관심사에서도 유용합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      {
        q: "만 나이와 세는 나이의 차이가 무엇인가요?",
        a: "만 나이는 태어난 그날을 기준 1세로 계산합니다. 세는 나이는 출생 시 1세로 시작하고, 음력 명절에 추가로 세는 방식입니다. 공식 문서와 법적으로는 만 나이를 사용합니다.",
      },
      {
        q: "띠는 어떻게 계산하나요?",
        a: "띠는 음력 설(정월 초하루) 기준입니다. 양력 생일이 음력 설 이전이라면 이년(이전 해)의 띠가 됩니다.",
      },
      {
        q: "다음 생일까지 남은 기간을 알려주나요?",
        a: "네, 오늘 날짜로부터 다음 생일까지 남은 일수를 계산해 줍니다.",
      },
    ],
  },
  en: {
    inputs: "Enter birth date",
    birthYear: "Birth year",
    birthMonth: "Birth month",
    birthDay: "Birth day",
    calculate: "Calculate",
    result: "Result",
    fullAge: "Age",
    years: "years",
    months: "months",
    days: "days",
    zodiacYear: "Zodiac animal",
    chineseZodiac: "Zodiac",
    nextBirthday: "Next birthday",
    daysUntilNext: "days remaining",
    limitations: "The age calculation is for reference. It may differ from the official age based on local regulations.",
    whyAge: "Why do you need an age calculator?",
    ageExplanation:
      "The exact age calculator shows precisely how much time has passed since you were born.\n\nIt is essential for official documents (military service, social welfare, education, etc.) and everyday use. The calculator also shows how many days are left until your next birthday, which is useful for planning.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      {
        q: "What is the difference between chronological age and Asian age?",
        a: "Chronological age counts exactly from your birth date. Asian age starts at 1 and increases on New Year's Day. Official documents and laws use chronological age.",
      },
      {
        q: "How is the zodiac animal calculated?",
        a: "The zodiac animal is based on the Lunar New Year (Seollal). If your birth date is before Seollal, you belong to the zodiac of the previous year.",
      },
      {
        q: "Does it tell me how many days until my next birthday?",
        a: "Yes, it calculates the number of days from today until your next birthday.",
      },
    ],
  },
  ja: {
    inputs: "生年月日を入力",
    birthYear: "出生年",
    birthMonth: "出生月",
    birthDay: "出生日",
    calculate: "計算",
    result: "結果",
    fullAge: "満年齢",
    years: "歳",
    months: "ヶ月",
    days: "日",
    zodiacYear: "干支",
    chineseZodiac: "干支の名前",
    nextBirthday: "次回のお誕生日",
    daysUntilNext: "日後に迫っています",
    limitations: "年齢計算は参考用です。実際の年齢は管轄の規定により異なる場合があります。",
    whyAge: "なぜ満年齢計算機が必要ですか？",
    ageExplanation:
      "満年齢計算機は、生まれてから現在まで正確にどのくらいの時間が経ったかを表示します。\n\n公式文書（兵役、福祉、教育など）でも重要で、日常生活でも生年月日から正確な年・月・日を知ることができます。干支計算は伝統的な文化的関心にも役立ちます。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    faq: [
      {
        q: "満年齢と数え年齢の違いは何ですか？",
        a: "満年齢は生まれたその日を基準にゼロから計算します。数え年齢は出生時に1歳から始まります。公式文書では満年齢を使用します。",
      },
      {
        q: "干支はどうやって計算しますか？",
        a: "干支は旧正月を基準にします。旧正月より前に生まれる場合、前の年の干支になります。",
      },
      {
        q: "次回のお誕生日までの残り日数も教えてもらえますか？",
        a: "はい、今日から次回のお誕生日までの日数を表示します。",
      },
    ],
  },
  es: {
    inputs: "Ingrese fecha de nacimiento",
    birthYear: "Año de nacimiento",
    birthMonth: "Mes de nacimiento",
    birthDay: "Día de nacimiento",
    calculate: "Calcular",
    result: "Resultado",
    fullAge: "Edad",
    years: "años",
    months: "meses",
    days: "días",
    zodiacYear: "Animal del zodiaco",
    chineseZodiac: "Signo zodiacal",
    nextBirthday: "Próximo cumpleaños",
    daysUntilNext: "días restantes",
    limitations: "El cálculo de edad es solo de referencia. La edad oficial puede variar según las regulaciones locales.",
    whyAge: "¿Por qué necesitas una calculadora de edad?",
    ageExplanation:
      "La calculadora de edad exacta muestra exactamente cuánto tiempo ha pasado desde que naciste.\n\nEs esencial para documentos oficiales (servicio militar, servicios sociales, educación, etc.) y uso diario. El calculadora también muestra cuántos días quedan hasta tu próximo cumpleaños, útil para organizar.",
    footer: "100% procesado en el navegador. No hay datos enviados al servidor.",
    faq: [
      {
        q: "¿Cuál es la diferencia entre edad cronológica y edad asiática?",
        a: "La edad cronológica cuenta exactamente desde tu fecha de nacimiento. La edad asiática comienza a los 1 y aumenta en Año Nuevo. Documentos oficiales y leyes usan edad cronológica.",
      },
      {
        q: "¿Cómo se calcula el animal del zodiaco?",
        a: "El animal del zodiaco se basa en el Año Nuevo Lunar. Si tu fecha de nacimiento es antes del Año Nuevo Lunar, perteneces al zodiaco del año anterior.",
      },
      {
        q: "¿Me indica cuántos días faltan para mi próximo cumpleaños?",
        a: "Sí, calcula cuántos días han pasado desde hoy hasta tu próximo cumpleaños.",
      },
    ],
  },
};
