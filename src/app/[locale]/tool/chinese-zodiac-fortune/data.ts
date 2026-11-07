export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  yearLabel: string;
  checkBtn: string;
  animalLabel: string;
  fortuneLabel: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "띠 운세 (간지)",
    subtitle: "태어난 연도를 입력하면 나의 띠와 오늘의 운세를 재미로 알려드립니다.",
    yearLabel: "태어난 연도",
    checkBtn: "띠 운세 확인하기",
    animalLabel: "나의 띠",
    fortuneLabel: "오늘의 운세",
    howTitle: "사용 방법",
    howSteps: [
      "태어난 연도를 입력합니다.",
      "\"띠 운세 확인하기\" 버튼을 누릅니다.",
      "12가지 띠 중 하나와 오늘 날짜를 반영한 운세 메시지가 표시됩니다.",
      "결과에 표시된 띠 동물이 내 실제 띠와 맞는지 궁금하다면, 양력 1~2월생은 음력 설 기준에 따라 실제 띠와 다를 수 있다는 점을 참고하세요.",
    ],
    faq: [
      { q: "띠는 어떻게 계산되나요?", a: "태어난 연도를 12로 나눈 나머지를 기준으로 쥐, 소, 호랑이 등 12가지 동물 중 하나를 결정합니다." },
      { q: "이 운세는 정식 명리학에 기반한 것인가요?", a: "아니요, 재미를 위한 콘텐츠로 간단한 연도 계산만 사용하며 정식 명리학적 근거는 없습니다." },
      { q: "12가지 띠 동물은 어떤 순서인가요?", a: "쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지 순으로 12년마다 한 바퀴를 돕니다." },
      { q: "1~2월에 태어났는데 결과가 이상합니다. 왜 그런가요?", a: "실제 띠는 음력 설날을 기준으로 바뀌기 때문에, 양력 1~2월생은 이 도구의 단순 연도 계산 결과와 실제 띠가 다를 수 있습니다." },
      { q: "같은 띠인 친구와 함께 봐도 되나요?", a: "네, 같은 띠라도 오늘 날짜를 반영한 운세 메시지가 매번 새로 계산되므로 함께 보면서 비교해보는 재미가 있습니다." },
    ],
    disclaimer: "이 콘텐츠는 재미를 위한 것으로 정식 명리학적 근거가 없습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Chinese Zodiac Fortune",
    subtitle: "Enter your birth year to see your Chinese zodiac animal and today's fortune, for fun.",
    yearLabel: "Birth Year",
    checkBtn: "Check My Fortune",
    animalLabel: "Your Zodiac Animal",
    fortuneLabel: "Today's Fortune",
    howTitle: "How to Use",
    howSteps: [
      "Enter your birth year.",
      "Click \"Check My Fortune.\"",
      "One of 12 zodiac animals appears along with a fortune message reflecting today's date.",
      "If you were born in January or February, your actual zodiac animal (based on the lunar calendar) may differ slightly from the simple year-based result shown here.",
    ],
    faq: [
      { q: "How is the zodiac animal calculated?", a: "It's determined from the remainder of your birth year divided by 12, mapping to one of 12 animals like Rat, Ox, Tiger, and so on." },
      { q: "Is this based on formal astrology?", a: "No, it's entertainment content using a simple year calculation, without a formal astrological basis." },
      { q: "What's the order of the 12 zodiac animals?", a: "Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig — the cycle repeats every 12 years." },
      { q: "I was born in January or February and the result seems off — why?", a: "The real zodiac year changes at the Lunar New Year, so if you were born in January or February, your actual zodiac animal may differ from this tool's simple calendar-year calculation." },
      { q: "Can I check this together with a friend born in the same zodiac year?", a: "Yes — even with the same animal, the fortune message is freshly calculated with today's date each time, so comparing results together is part of the fun." },
    ],
    disclaimer: "This content is for entertainment purposes only and has no formal astrological basis.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "干支運勢",
    subtitle: "生まれた年を入力すると自分の干支と今日の運勢を楽しくお届けします。",
    yearLabel: "生まれた年",
    checkBtn: "干支運勢を確認する",
    animalLabel: "あなたの干支",
    fortuneLabel: "今日の運勢",
    howTitle: "使用方法",
    howSteps: [
      "生まれた年を入力します。",
      "「干支運勢を確認する」ボタンを押します。",
      "12種類の干支の1つと今日の日付を反映した運勢メッセージが表示されます。",
      "1〜2月生まれの方は、旧暦基準の実際の干支がこの簡易計算結果と異なる場合があるのでご参考ください。",
    ],
    faq: [
      { q: "干支はどのように計算されますか？", a: "生まれた年を12で割った余りを基準に、ねずみ、うし、とらなど12種類の動物のうち1つが決まります。" },
      { q: "この運勢は正式な命理学に基づいていますか？", a: "いいえ、娯楽目的のコンテンツで簡単な年数計算のみを使用し、正式な命理学的根拠はありません。" },
      { q: "12種類の干支の順番はどうなっていますか？", a: "ねずみ、うし、とら、うさぎ、たつ、へび、うま、ひつじ、さる、とり、いぬ、いのししの順で12年周期で巡ります。" },
      { q: "1〜2月生まれなのに結果が変に感じます。なぜですか？", a: "実際の干支は旧暦の正月を基準に切り替わるため、新暦の1〜2月生まれの方はこのツールの単純な年計算結果と実際の干支が異なる場合があります。" },
      { q: "同じ干支の友達と一緒に見てもいいですか？", a: "はい、同じ干支でも今日の日付を反映した運勢メッセージが毎回新しく計算されるので、一緒に見て比較する楽しみがあります。" },
    ],
    disclaimer: "このコンテンツは娯楽目的であり、正式な命理学的根拠はありません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Fortuna del Zodiaco Chino",
    subtitle: "Introduce tu año de nacimiento para ver tu animal del zodiaco chino y la fortuna de hoy, por diversión.",
    yearLabel: "Año de Nacimiento",
    checkBtn: "Ver mi Fortuna",
    animalLabel: "Tu Animal del Zodiaco",
    fortuneLabel: "Fortuna de Hoy",
    howTitle: "Cómo Usar",
    howSteps: [
      "Introduce tu año de nacimiento.",
      "Haz clic en \"Ver mi Fortuna.\"",
      "Aparece uno de 12 animales del zodiaco junto con un mensaje de fortuna que refleja la fecha de hoy.",
      "Si naciste en enero o febrero, tu animal real del zodiaco (según el calendario lunar) puede diferir ligeramente del resultado simple basado en el año que se muestra aquí.",
    ],
    faq: [
      { q: "¿Cómo se calcula el animal del zodiaco?", a: "Se determina por el resto de dividir tu año de nacimiento entre 12, que corresponde a uno de 12 animales como Rata, Buey, Tigre, etc." },
      { q: "¿Esto se basa en astrología formal?", a: "No, es contenido de entretenimiento que usa un simple cálculo de año, sin base astrológica formal." },
      { q: "¿Cuál es el orden de los 12 animales del zodiaco?", a: "Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro y Cerdo; el ciclo se repite cada 12 años." },
      { q: "Nací en enero o febrero y el resultado parece incorrecto, ¿por qué?", a: "El año zodiacal real cambia con el Año Nuevo Lunar, así que si naciste en enero o febrero, tu animal real puede diferir del simple cálculo por año calendario de esta herramienta." },
      { q: "¿Puedo comprobarlo junto a un amigo nacido en el mismo año zodiacal?", a: "Sí — incluso con el mismo animal, el mensaje de fortuna se calcula de nuevo cada vez con la fecha de hoy, así que compararlo juntos es parte de la diversión." },
    ],
    disclaimer: "Este contenido es solo para entretenimiento y no tiene base astrológica formal.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
