export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  draw: string;
  flipHint: string;
  todaysCard: string;
  generalLabel: string;
  loveLabel: string;
  moneyLabel: string;
  whyTarot: string;
  tarotExplanation: string;
  disclaimer: string;
  footer: string;
  faq: FAQ[];
}

export const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "오늘의 타로 카드",
    subtitle: "오늘 하루를 위한 메이저 아르카나 카드를 뽑아보세요",
    draw: "카드 뒤집기",
    flipHint: "카드를 클릭해서 뒤집어 보세요",
    todaysCard: "오늘의 카드",
    generalLabel: "총운",
    loveLabel: "연애운",
    moneyLabel: "재물운",
    whyTarot: "오늘의 타로 카드란?",
    tarotExplanation:
      "이 도구는 오늘 날짜를 기준으로 메이저 아르카나 22장 중 하나를 결정론적으로 선택합니다. 같은 날에는 같은 카드가 나오고, 날짜가 바뀌면 새로운 카드로 바뀝니다. 가볍게 하루를 시작하는 재미로 즐겨보세요.",
    disclaimer:
      "이 콘텐츠는 오락용이며 실제 타로 리딩이나 전문적인 점술과는 다릅니다. 카드 이미지는 실제 타로 카드 이미지가 아닌 자체 제작한 아이콘입니다. 중요한 결정은 이 결과에 의존하지 마세요.",
    footer: "LifeHub 도구 모음",
    faq: [
      {
        q: "매일 같은 카드가 나오나요?",
        a: "같은 날짜 안에서는 같은 카드가 나오지만, 날짜가 바뀌면 다른 카드가 나옵니다. 날짜를 기준으로 결정론적으로 카드를 선택하기 때문입니다.",
      },
      {
        q: "실제 타로 카드 이미지를 사용하나요?",
        a: "아니요, 저작권 문제를 피하기 위해 실제 타로 카드 이미지 대신 간단한 이모지와 자체 제작 디자인으로 카드를 표현합니다.",
      },
      {
        q: "이 결과를 진지하게 받아들여도 되나요?",
        a: "아니요, 이 콘텐츠는 재미를 위한 오락용이며 실제 점술이나 심리 분석과는 무관합니다. 중요한 결정의 근거로 사용하지 마세요.",
      },
    ],
  },
  en: {
    title: "Today's Tarot Card",
    subtitle: "Draw a Major Arcana card for today",
    draw: "Flip the card",
    flipHint: "Click the card to flip it",
    todaysCard: "Today's card",
    generalLabel: "General",
    loveLabel: "Love",
    moneyLabel: "Money",
    whyTarot: "What is Today's Tarot Card?",
    tarotExplanation:
      "This tool deterministically picks one of the 22 Major Arcana cards based on today's date. The same card appears all day, and a new card appears once the date changes. Enjoy it as a light, fun way to start your day.",
    disclaimer:
      "This content is for entertainment only and differs from a real tarot reading or professional divination. The card images are original icons, not real tarot card artwork. Please don't rely on this for important decisions.",
    footer: "LifeHub Tools",
    faq: [
      {
        q: "Do I get the same card every day?",
        a: "You'll see the same card throughout a given day, but a new card appears once the date changes, since the card is chosen deterministically based on the date.",
      },
      {
        q: "Does this use real tarot card images?",
        a: "No, to avoid copyright issues, cards are represented with simple emoji and original designs instead of real tarot card artwork.",
      },
      {
        q: "Should I take this result seriously?",
        a: "No, this content is purely for entertainment and is unrelated to real divination or psychological analysis. Please don't use it as a basis for important decisions.",
      },
    ],
  },
  ja: {
    title: "今日のタロットカード",
    subtitle: "今日のための大アルカナカードを引いてみましょう",
    draw: "カードをめくる",
    flipHint: "カードをクリックしてめくってみましょう",
    todaysCard: "今日のカード",
    generalLabel: "総合運",
    loveLabel: "恋愛運",
    moneyLabel: "金運",
    whyTarot: "今日のタロットカードとは?",
    tarotExplanation:
      "このツールは今日の日付を基準に大アルカナ22枚のうち1枚を決定論的に選びます。同じ日には同じカードが出て、日付が変わると新しいカードに変わります。気軽に一日を始める楽しみとしてお使いください。",
    disclaimer:
      "このコンテンツは娯楽目的であり、実際のタロットリーディングや専門的な占いとは異なります。カードの画像は実際のタロットカードの画像ではなく、自作のアイコンです。重要な決定の根拠にしないでください。",
    footer: "LifeHub ツール集",
    faq: [
      {
        q: "毎日同じカードが出ますか?",
        a: "同じ日付の間は同じカードが出ますが、日付が変わると別のカードになります。日付を基準に決定論的にカードを選んでいるためです。",
      },
      {
        q: "実際のタロットカードの画像を使っていますか?",
        a: "いいえ、著作権の問題を避けるため、実際のタロットカード画像の代わりに簡単な絵文字と自作デザインでカードを表現しています。",
      },
      {
        q: "この結果を真剣に受け止めてもいいですか?",
        a: "いいえ、このコンテンツは娯楽目的であり、実際の占いや心理分析とは関係ありません。重要な決定の根拠として使用しないでください。",
      },
    ],
  },
  es: {
    title: "Tarot de Hoy",
    subtitle: "Saca una carta de los Arcanos Mayores para hoy",
    draw: "Girar la carta",
    flipHint: "Haz clic en la carta para girarla",
    todaysCard: "Carta de hoy",
    generalLabel: "General",
    loveLabel: "Amor",
    moneyLabel: "Dinero",
    whyTarot: "¿Qué es el Tarot de Hoy?",
    tarotExplanation:
      "Esta herramienta elige de forma determinista una de las 22 cartas de los Arcanos Mayores según la fecha de hoy. La misma carta aparece durante todo el día, y una nueva carta aparece cuando cambia la fecha. Disfrútalo como una forma ligera y divertida de empezar el día.",
    disclaimer:
      "Este contenido es solo para entretenimiento y es diferente de una lectura de tarot real o una adivinación profesional. Las imágenes de las cartas son iconos originales, no ilustraciones reales de tarot. No te bases en esto para decisiones importantes.",
    footer: "Herramientas LifeHub",
    faq: [
      {
        q: "¿Obtengo la misma carta todos los días?",
        a: "Verás la misma carta durante un día determinado, pero aparecerá una nueva carta cuando cambie la fecha, ya que la carta se elige de forma determinista según la fecha.",
      },
      {
        q: "¿Se usan imágenes reales de cartas de tarot?",
        a: "No, para evitar problemas de derechos de autor, las cartas se representan con emojis sencillos y diseños originales en lugar de ilustraciones reales de tarot.",
      },
      {
        q: "¿Debo tomarme este resultado en serio?",
        a: "No, este contenido es puramente de entretenimiento y no está relacionado con la adivinación real ni el análisis psicológico. No lo uses como base para decisiones importantes.",
      },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}

export interface TarotCard {
  emoji: string;
  name: Record<Locale, string>;
  general: Record<Locale, string>;
  love: Record<Locale, string>;
  money: Record<Locale, string>;
}

export const cards: TarotCard[] = [
  {
    emoji: "🃏",
    name: { ko: "바보", en: "The Fool", ja: "愚者", es: "El Loco" },
    general: {
      ko: "새로운 시작과 순수한 가능성의 기운이 가득한 날입니다. 두려움 없이 첫걸음을 내딛어 보세요.",
      en: "A day full of new beginnings and pure possibility. Take that first step without fear.",
      ja: "新しい始まりと純粋な可能性に満ちた日です。恐れずに最初の一歩を踏み出してみましょう。",
      es: "Un día lleno de nuevos comienzos y pura posibilidad. Da ese primer paso sin miedo.",
    },
    love: {
      ko: "예상치 못한 만남이나 설레는 전개가 있을 수 있어요.",
      en: "An unexpected encounter or exciting development may come your way.",
      ja: "予想外の出会いやワクワクする展開があるかもしれません。",
      es: "Puede llegar un encuentro inesperado o un desarrollo emocionante.",
    },
    money: {
      ko: "즉흥적인 지출은 피하고, 작은 모험은 괜찮은 하루입니다.",
      en: "Avoid impulsive spending, though a small adventure is fine today.",
      ja: "衝動的な支出は避けつつ、小さな冒険はして良い一日です。",
      es: "Evita gastos impulsivos, aunque una pequeña aventura está bien hoy.",
    },
  },
  {
    emoji: "🧙",
    name: { ko: "마법사", en: "The Magician", ja: "魔術師", es: "El Mago" },
    general: {
      ko: "의지와 능력을 발휘해 원하는 것을 현실로 만들 수 있는 날입니다.",
      en: "A day when you can turn your will and skill into reality.",
      ja: "意志と能力を発揮して望むことを現実にできる日です。",
      es: "Un día en que puedes convertir tu voluntad y habilidad en realidad.",
    },
    love: {
      ko: "적극적으로 다가가면 좋은 반응을 얻을 수 있어요.",
      en: "Being proactive in love may bring a good response.",
      ja: "積極的に行動すれば良い反応が得られそうです。",
      es: "Ser proactivo en el amor puede traer una buena respuesta.",
    },
    money: {
      ko: "아이디어를 실행하면 성과로 이어질 가능성이 높습니다.",
      en: "Putting your ideas into action is likely to pay off.",
      ja: "アイデアを実行に移すと成果につながる可能性が高いです。",
      es: "Poner tus ideas en acción probablemente dará buenos resultados.",
    },
  },
  {
    emoji: "🔮",
    name: { ko: "여사제", en: "The High Priestess", ja: "女教皇", es: "La Papisa" },
    general: {
      ko: "직감을 믿고 조용히 내면의 목소리에 귀 기울이면 답을 찾을 수 있어요.",
      en: "Trust your intuition and listen quietly to your inner voice for answers.",
      ja: "直感を信じて静かに内なる声に耳を傾けると答えが見つかりそうです。",
      es: "Confía en tu intuición y escucha tu voz interior para encontrar respuestas.",
    },
    love: {
      ko: "말보다는 느낌으로 상대의 마음을 알아차리게 될 것 같아요.",
      en: "You may sense your partner's feelings more through intuition than words.",
      ja: "言葉よりも感覚で相手の気持ちに気づけそうです。",
      es: "Puedes percibir los sentimientos de tu pareja más por intuición que por palabras.",
    },
    money: {
      ko: "서두르지 말고 신중하게 상황을 지켜보는 편이 좋습니다.",
      en: "It's wise to watch the situation carefully rather than rush.",
      ja: "焦らず慎重に状況を見守る方が良いでしょう。",
      es: "Es mejor observar la situación con cuidado en lugar de apresurarte.",
    },
  },
  {
    emoji: "👑",
    name: { ko: "여제", en: "The Empress", ja: "女帝", es: "La Emperatriz" },
    general: {
      ko: "풍요롭고 여유로운 기운이 함께하는 날, 주변을 돌보는 마음이 좋은 결과를 가져옵니다.",
      en: "A day of abundance and ease — caring for those around you brings good results.",
      ja: "豊かでゆとりのある気運の日、周りを気遣う気持ちが良い結果をもたらします。",
      es: "Un día de abundancia y calma: cuidar a quienes te rodean trae buenos resultados.",
    },
    love: {
      ko: "따뜻하고 애정이 넘치는 분위기가 기대됩니다.",
      en: "Expect a warm, affectionate atmosphere.",
      ja: "温かく愛情あふれる雰囲気が期待できます。",
      es: "Se espera un ambiente cálido y afectuoso.",
    },
    money: {
      ko: "안정적인 흐름 속에서 소소한 즐거움에 돈을 써도 괜찮아요.",
      en: "Things feel stable, so spending a little on small pleasures is fine.",
      ja: "安定した流れの中で、ちょっとした楽しみにお金を使っても大丈夫です。",
      es: "Las cosas se sienten estables, así que gastar un poco en placeres pequeños está bien.",
    },
  },
  {
    emoji: "🏛️",
    name: { ko: "황제", en: "The Emperor", ja: "皇帝", es: "El Emperador" },
    general: {
      ko: "질서와 책임감을 바탕으로 계획한 일을 밀고 나가면 좋은 성과가 따릅니다.",
      en: "Pushing forward with order and responsibility brings good results today.",
      ja: "秩序と責任感を持って計画を進めると良い成果が得られます。",
      es: "Avanzar con orden y responsabilidad trae buenos resultados hoy.",
    },
    love: {
      ko: "현실적이고 안정적인 관계를 원하는 마음이 커지는 날이에요.",
      en: "You may feel a stronger desire for a stable, realistic relationship.",
      ja: "現実的で安定した関係を求める気持ちが強まる日です。",
      es: "Puedes sentir un mayor deseo de una relación estable y realista.",
    },
    money: {
      ko: "장기적인 계획과 규율 있는 소비가 도움이 됩니다.",
      en: "Long-term planning and disciplined spending will help you today.",
      ja: "長期的な計画と規律あるお金の使い方が助けになります。",
      es: "La planificación a largo plazo y el gasto disciplinado te ayudarán hoy.",
    },
  },
  {
    emoji: "📜",
    name: { ko: "교황", en: "The Hierophant", ja: "教皇", es: "El Sumo Sacerdote" },
    general: {
      ko: "전통적인 방식이나 믿을 수 있는 조언을 따르는 것이 도움이 되는 날입니다.",
      en: "Following tradition or trusted advice will help you today.",
      ja: "伝統的な方法や信頼できる助言に従うことが助けになる日です。",
      es: "Seguir la tradición o un consejo de confianza te ayudará hoy.",
    },
    love: {
      ko: "안정적이고 책임감 있는 관계로 발전할 가능성이 보입니다.",
      en: "There's potential for the relationship to grow into something stable and committed.",
      ja: "安定して責任感のある関係へ発展する可能性が見えます。",
      es: "Hay potencial para que la relación se vuelva estable y comprometida.",
    },
    money: {
      ko: "검증된 방법을 따르는 편이 안전한 선택이에요.",
      en: "Sticking to tried-and-tested methods is the safer choice.",
      ja: "実証済みの方法に従う方が安全な選択です。",
      es: "Apegarte a métodos probados es la opción más segura.",
    },
  },
  {
    emoji: "💞",
    name: { ko: "연인", en: "The Lovers", ja: "恋人", es: "Los Enamorados" },
    general: {
      ko: "마음이 통하는 사람과 좋은 시너지를 낼 수 있는 날입니다.",
      en: "A day when you can build great synergy with someone you connect with.",
      ja: "心が通じ合う人と良いシナジーを生み出せる日です。",
      es: "Un día en que puedes crear gran sinergia con alguien con quien conectas.",
    },
    love: {
      ko: "깊은 유대감과 설렘을 동시에 느낄 수 있는 좋은 기운이에요.",
      en: "A great energy for feeling deep connection and excitement at once.",
      ja: "深い結びつきとワクワク感を同時に感じられる良い運気です。",
      es: "Una gran energía para sentir conexión profunda y emoción a la vez.",
    },
    money: {
      ko: "함께하는 사람과의 협력이 재정적으로도 좋은 결과를 가져올 수 있어요.",
      en: "Collaborating with someone close could bring good financial results.",
      ja: "一緒に動く人との協力が金銭的にも良い結果をもたらすかもしれません。",
      es: "Colaborar con alguien cercano podría traer buenos resultados financieros.",
    },
  },
  {
    emoji: "🏇",
    name: { ko: "전차", en: "The Chariot", ja: "戦車", es: "El Carro" },
    general: {
      ko: "강한 의지로 목표를 향해 밀고 나가면 승리를 거둘 수 있는 날입니다.",
      en: "Pushing toward your goal with strong will can bring victory today.",
      ja: "強い意志で目標に向かえば勝利をつかめる日です。",
      es: "Avanzar hacia tu meta con fuerte voluntad puede traer una victoria hoy.",
    },
    love: {
      ko: "적극적으로 마음을 표현하면 관계에 좋은 진전이 있을 거예요.",
      en: "Expressing your feelings boldly may bring good progress in love.",
      ja: "積極的に気持ちを表現すれば関係に良い進展がありそうです。",
      es: "Expresar tus sentimientos con valentía puede traer buen progreso en el amor.",
    },
    money: {
      ko: "추진하던 일이 속도를 내며 성과로 이어질 수 있어요.",
      en: "A project you've been pushing forward may gain momentum and pay off.",
      ja: "進めていたことが勢いを増し、成果につながるかもしれません。",
      es: "Un proyecto que has impulsado podría ganar impulso y dar frutos.",
    },
  },
  {
    emoji: "🦁",
    name: { ko: "힘", en: "Strength", ja: "力", es: "La Fuerza" },
    general: {
      ko: "부드럽지만 단단한 마음으로 어려움을 이겨낼 수 있는 힘이 생기는 날입니다.",
      en: "A day when gentle but firm inner strength helps you overcome challenges.",
      ja: "柔らかくも揺るがない心で困難を乗り越える力が生まれる日です。",
      es: "Un día en que una fuerza interior suave pero firme te ayuda a superar retos.",
    },
    love: {
      ko: "인내와 다정함으로 관계의 갈등을 부드럽게 풀어갈 수 있어요.",
      en: "Patience and warmth can help smooth over any conflict in your relationship.",
      ja: "忍耐と優しさで関係の葛藤を柔らかく解決できそうです。",
      es: "La paciencia y la calidez pueden suavizar cualquier conflicto en tu relación.",
    },
    money: {
      ko: "급하게 몰아붙이기보다 꾸준함이 더 나은 결과를 만듭니다.",
      en: "Steady persistence works better than rushing today.",
      ja: "急いで押し進めるより、地道さがより良い結果を生みます。",
      es: "La constancia funciona mejor que la prisa hoy.",
    },
  },
  {
    emoji: "🏮",
    name: { ko: "은둔자", en: "The Hermit", ja: "隠者", es: "El Eremita" },
    general: {
      ko: "혼자만의 시간을 가지며 내면을 돌아보는 것이 필요한 날입니다.",
      en: "A day when you need some solitude to reflect inward.",
      ja: "一人の時間を持ち、内面を振り返ることが必要な日です。",
      es: "Un día en que necesitas soledad para reflexionar hacia adentro.",
    },
    love: {
      ko: "잠시 거리를 두고 생각을 정리하는 것도 관계에 도움이 돼요.",
      en: "Taking a little distance to gather your thoughts can also help the relationship.",
      ja: "少し距離を置いて考えを整理することも関係に役立ちます。",
      es: "Tomar un poco de distancia para ordenar tus pensamientos también puede ayudar a la relación.",
    },
    money: {
      ko: "큰 결정은 잠시 미루고 지금 가진 것을 점검해보세요.",
      en: "Hold off on big decisions and review what you already have.",
      ja: "大きな決断は少し先送りにして、今持っているものを見直してみましょう。",
      es: "Posterga las grandes decisiones y revisa lo que ya tienes.",
    },
  },
  {
    emoji: "🎡",
    name: { ko: "운명의 수레바퀴", en: "Wheel of Fortune", ja: "運命の輪", es: "La Rueda de la Fortuna" },
    general: {
      ko: "상황이 예상치 못한 방향으로 전환될 수 있는, 변화의 기운이 강한 날입니다.",
      en: "A day with strong energy for change — things may turn in an unexpected direction.",
      ja: "状況が予想外の方向へ転じる可能性がある、変化の気運が強い日です。",
      es: "Un día de energía intensa para el cambio: las cosas pueden tomar un giro inesperado.",
    },
    love: {
      ko: "관계의 흐름이 바뀌는 전환점이 될 수 있어요.",
      en: "This could be a turning point in the flow of your relationship.",
      ja: "関係の流れが変わる転換点になるかもしれません。",
      es: "Esto podría ser un punto de inflexión en el flujo de tu relación.",
    },
    money: {
      ko: "예상치 못한 지출이나 수입이 생길 가능성이 있습니다.",
      en: "There's a chance of unexpected expenses or income.",
      ja: "予想外の出費や収入が生じる可能性があります。",
      es: "Hay posibilidad de gastos o ingresos inesperados.",
    },
  },
  {
    emoji: "⚖️",
    name: { ko: "정의", en: "Justice", ja: "正義", es: "La Justicia" },
    general: {
      ko: "공정하고 합리적인 판단이 중요한 날입니다. 원인과 결과가 분명하게 드러날 거예요.",
      en: "A day when fair, rational judgment matters — cause and effect become clear.",
      ja: "公正で合理的な判断が重要な日です。原因と結果が明確になります。",
      es: "Un día en que importa el juicio justo y racional: la causa y el efecto se vuelven claros.",
    },
    love: {
      ko: "솔직한 대화를 통해 관계의 균형을 찾을 수 있습니다.",
      en: "Honest conversation can help restore balance in the relationship.",
      ja: "率直な対話を通じて関係のバランスを取ることができます。",
      es: "Una conversación honesta puede ayudar a restaurar el equilibrio en la relación.",
    },
    money: {
      ko: "계약이나 금전 문제는 세부사항을 꼼꼼히 확인하세요.",
      en: "Double-check the details on any contract or money matter.",
      ja: "契約やお金の問題は細部までしっかり確認しましょう。",
      es: "Revisa bien los detalles de cualquier contrato o asunto de dinero.",
    },
  },
  {
    emoji: "🙃",
    name: { ko: "매달린 사람", en: "The Hanged Man", ja: "吊された男", es: "El Colgado" },
    general: {
      ko: "관점을 바꿔보면 그동안 보이지 않던 답이 보이는 날입니다.",
      en: "A day when shifting your perspective reveals answers you couldn't see before.",
      ja: "視点を変えてみると、今まで見えなかった答えが見える日です。",
      es: "Un día en que cambiar de perspectiva revela respuestas que antes no veías.",
    },
    love: {
      ko: "지금은 서두르지 말고 잠시 멈춰서 상황을 바라보세요.",
      en: "Pause for now instead of rushing, and simply observe the situation.",
      ja: "今は急がず、少し立ち止まって状況を見てみましょう。",
      es: "Haz una pausa en lugar de apresurarte, y simplemente observa la situación.",
    },
    money: {
      ko: "무리하게 움직이기보다 잠시 기다리는 것이 나은 선택입니다.",
      en: "Waiting a little is a better choice than forcing a move.",
      ja: "無理に動くより、少し待つ方が良い選択です。",
      es: "Esperar un poco es mejor opción que forzar un movimiento.",
    },
  },
  {
    emoji: "🦋",
    name: { ko: "죽음", en: "Death", ja: "死神", es: "La Muerte" },
    general: {
      ko: "하나의 국면이 끝나고 새로운 시작을 준비하게 되는 변화의 날입니다.",
      en: "A day of transformation — one chapter ends as you prepare for a new beginning.",
      ja: "ひとつの局面が終わり、新しい始まりを準備する変化の日です。",
      es: "Un día de transformación: termina un capítulo mientras te preparas para un nuevo comienzo.",
    },
    love: {
      ko: "관계가 새로운 단계로 전환될 수 있어요. 변화를 두려워하지 마세요.",
      en: "Your relationship may shift into a new phase — don't fear the change.",
      ja: "関係が新しい段階へ転換するかもしれません。変化を怖がらないでください。",
      es: "Tu relación puede entrar en una nueva etapa; no temas al cambio.",
    },
    money: {
      ko: "지금까지의 방식을 정리하고 새로운 계획을 세워볼 때입니다.",
      en: "It's time to wrap up old habits and set a new plan in motion.",
      ja: "これまでの方法を整理し、新しい計画を立てる時です。",
      es: "Es momento de cerrar viejos hábitos y poner en marcha un nuevo plan.",
    },
  },
  {
    emoji: "⚗️",
    name: { ko: "절제", en: "Temperance", ja: "節制", es: "La Templanza" },
    general: {
      ko: "균형과 조화를 이루려는 노력이 좋은 결과로 이어지는 날입니다.",
      en: "Efforts to find balance and harmony lead to good results today.",
      ja: "バランスと調和を保とうとする努力が良い結果につながる日です。",
      es: "Los esfuerzos por encontrar equilibrio y armonía traen buenos resultados hoy.",
    },
    love: {
      ko: "서로 다른 성향도 적절히 맞춰가면 안정적인 관계를 만들 수 있어요.",
      en: "Even differing personalities can build a stable relationship with the right balance.",
      ja: "異なる性格同士でも、うまく調整すれば安定した関係を作れます。",
      es: "Incluso personalidades distintas pueden construir una relación estable con el equilibrio adecuado.",
    },
    money: {
      ko: "수입과 지출의 균형을 맞추는 데 신경 쓰면 좋은 하루입니다.",
      en: "A good day to focus on balancing your income and spending.",
      ja: "収入と支出のバランスを取ることに気を配ると良い一日です。",
      es: "Un buen día para enfocarte en equilibrar tus ingresos y gastos.",
    },
  },
  {
    emoji: "😈",
    name: { ko: "악마", en: "The Devil", ja: "悪魔", es: "El Diablo" },
    general: {
      ko: "유혹이나 습관에 얽매이기 쉬운 날이니 스스로를 잘 돌아보세요.",
      en: "A day when it's easy to get caught up in temptation or habit — check in with yourself.",
      ja: "誘惑や習慣に縛られやすい日なので、自分自身をよく見つめてみましょう。",
      es: "Un día en que es fácil dejarse atrapar por la tentación o el hábito: revísate a ti mismo.",
    },
    love: {
      ko: "집착이나 의존적인 감정은 관계에 부담이 될 수 있어요.",
      en: "Clinginess or dependence may put a strain on the relationship.",
      ja: "執着や依存的な感情が関係の負担になることがあります。",
      es: "El apego o la dependencia pueden ser una carga para la relación.",
    },
    money: {
      ko: "과소비나 즉흥적인 투자 유혹을 조심하세요.",
      en: "Watch out for the temptation to overspend or make impulsive investments.",
      ja: "過剰な消費や衝動的な投資の誘惑に気をつけましょう。",
      es: "Cuidado con la tentación de gastar de más o invertir impulsivamente.",
    },
  },
  {
    emoji: "🗼",
    name: { ko: "탑", en: "The Tower", ja: "塔", es: "La Torre" },
    general: {
      ko: "갑작스러운 변화나 충격적인 소식이 있을 수 있지만, 그 뒤에는 더 단단한 기반이 생깁니다.",
      en: "A sudden change or shocking news may occur, but it leads to a stronger foundation afterward.",
      ja: "突然の変化や衝撃的な知らせがあるかもしれませんが、その後にはより強固な基盤ができます。",
      es: "Puede haber un cambio repentino o una noticia impactante, pero después surge una base más sólida.",
    },
    love: {
      ko: "관계에서 솔직한 진실이 드러나며 오히려 정리가 될 수 있어요.",
      en: "A hidden truth in the relationship may surface, which could actually bring clarity.",
      ja: "関係の中で隠れていた真実が明らかになり、むしろ整理されることがあります。",
      es: "Una verdad oculta en la relación puede salir a la luz, lo que podría traer claridad.",
    },
    money: {
      ko: "예상치 못한 지출이나 손실에 대비하는 것이 좋습니다.",
      en: "It's wise to prepare for an unexpected expense or loss.",
      ja: "予期しない出費や損失に備える方が良いでしょう。",
      es: "Es prudente prepararse para un gasto o pérdida inesperada.",
    },
  },
  {
    emoji: "⭐",
    name: { ko: "별", en: "The Star", ja: "星", es: "La Estrella" },
    general: {
      ko: "희망과 영감이 가득한 날, 긍정적인 에너지가 앞으로의 길을 밝혀줍니다.",
      en: "A day full of hope and inspiration — positive energy lights the way forward.",
      ja: "希望とインスピレーションに満ちた日、ポジティブなエネルギーが前途を照らします。",
      es: "Un día lleno de esperanza e inspiración: la energía positiva ilumina el camino.",
    },
    love: {
      ko: "진심이 통하고 서로에게 힘이 되는 관계로 나아갈 수 있어요.",
      en: "You can move toward a relationship where sincerity connects and supports each other.",
      ja: "本音が通じ合い、互いの力になる関係へ進めそうです。",
      es: "Puedes avanzar hacia una relación donde la sinceridad conecta y se apoyan mutuamente.",
    },
    money: {
      ko: "장기적인 목표를 향한 꾸준한 노력이 좋은 결실로 이어질 거예요.",
      en: "Steady effort toward a long-term goal will pay off well.",
      ja: "長期的な目標への地道な努力が良い結果につながります。",
      es: "El esfuerzo constante hacia una meta a largo plazo dará buenos frutos.",
    },
  },
  {
    emoji: "🌙",
    name: { ko: "달", en: "The Moon", ja: "月", es: "La Luna" },
    general: {
      ko: "불확실하고 혼란스러운 감정이 들 수 있지만, 직감을 믿고 천천히 나아가세요.",
      en: "You may feel uncertain or confused, but trust your intuition and move slowly.",
      ja: "不確かで混乱した気持ちになるかもしれませんが、直感を信じてゆっくり進みましょう。",
      es: "Puedes sentirte incierto o confundido, pero confía en tu intuición y avanza despacio.",
    },
    love: {
      ko: "오해가 생기기 쉬운 날이니 솔직한 대화로 풀어가는 것이 중요해요.",
      en: "Misunderstandings can arise easily today, so honest conversation matters.",
      ja: "誤解が生じやすい日なので、率直な対話で解決することが大切です。",
      es: "Los malentendidos pueden surgir fácilmente hoy, así que la conversación honesta es clave.",
    },
    money: {
      ko: "불확실한 정보에 기반한 결정은 신중하게 다시 확인하세요.",
      en: "Double-check any decision based on uncertain information.",
      ja: "不確かな情報に基づく決定は慎重に再確認しましょう。",
      es: "Revisa de nuevo cualquier decisión basada en información incierta.",
    },
  },
  {
    emoji: "☀️",
    name: { ko: "태양", en: "The Sun", ja: "太陽", es: "El Sol" },
    general: {
      ko: "밝고 긍정적인 기운이 가득한 날, 하는 일마다 순조롭게 풀릴 가능성이 높아요.",
      en: "A bright, positive day — whatever you do is likely to go smoothly.",
      ja: "明るくポジティブな気運に満ちた日、何事も順調に進む可能性が高いです。",
      es: "Un día brillante y positivo: lo que hagas probablemente saldrá bien.",
    },
    love: {
      ko: "즐겁고 활기찬 분위기 속에서 관계가 더욱 따뜻해질 거예요.",
      en: "The relationship will feel warmer amid a fun, lively mood.",
      ja: "楽しく活気ある雰囲気の中で関係がより温かくなります。",
      es: "La relación se sentirá más cálida en un ambiente divertido y animado.",
    },
    money: {
      ko: "노력한 만큼 좋은 결과가 돌아오는 좋은 흐름입니다.",
      en: "A great flow where your efforts bring back good results.",
      ja: "努力した分だけ良い結果が返ってくる良い流れです。",
      es: "Un gran momento en que tus esfuerzos traen buenos resultados.",
    },
  },
  {
    emoji: "📯",
    name: { ko: "심판", en: "Judgement", ja: "審判", es: "El Juicio" },
    general: {
      ko: "지난 일을 돌아보고 새로운 결심을 하게 되는 각성의 날입니다.",
      en: "A day of awakening where you reflect on the past and make a new resolution.",
      ja: "過去を振り返り、新しい決意をする覚醒の日です。",
      es: "Un día de despertar en el que reflexionas sobre el pasado y tomas una nueva resolución.",
    },
    love: {
      ko: "과거의 오해를 풀고 관계를 다시 시작할 좋은 기회가 될 수 있어요.",
      en: "A good chance to clear up past misunderstandings and start the relationship fresh.",
      ja: "過去の誤解を解き、関係を新しく始める良い機会になりそうです。",
      es: "Una buena oportunidad para aclarar malentendidos pasados y comenzar de nuevo la relación.",
    },
    money: {
      ko: "지금까지의 재정 습관을 되돌아보고 새롭게 정리해보세요.",
      en: "Look back on your financial habits so far and reorganize them.",
      ja: "これまでのお金の使い方を見直し、新しく整理してみましょう。",
      es: "Revisa tus hábitos financieros hasta ahora y reorganízalos.",
    },
  },
  {
    emoji: "🌍",
    name: { ko: "세계", en: "The World", ja: "世界", es: "El Mundo" },
    general: {
      ko: "하나의 여정이 완성되고 성취감을 느낄 수 있는 좋은 날입니다.",
      en: "A great day of completion — a journey comes full circle and you feel accomplished.",
      ja: "ひとつの旅が完成し、達成感を感じられる良い日です。",
      es: "Un gran día de culminación: un viaje se completa y te sientes realizado.",
    },
    love: {
      ko: "관계가 만족스러운 단계에 이르며 충만함을 느낄 수 있어요.",
      en: "The relationship reaches a satisfying stage, filled with fulfillment.",
      ja: "関係が満足できる段階に達し、充実感を感じられます。",
      es: "La relación llega a una etapa satisfactoria, llena de plenitud.",
    },
    money: {
      ko: "꾸준히 쌓아온 노력이 결실을 맺는 완성의 기운입니다.",
      en: "The energy of completion — steady effort finally bears fruit.",
      ja: "地道に積み重ねた努力が結実する完成の気運です。",
      es: "La energía de la culminación: el esfuerzo constante finalmente da frutos.",
    },
  },
];
