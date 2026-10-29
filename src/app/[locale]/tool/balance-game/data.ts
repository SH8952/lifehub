export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  progressLabel: string;
  restart: string;
  completeTitle: string;
  completeSubtitle: string;
  whyBalance: string;
  balanceExplanation: string;
  disclaimer: string;
  footer: string;
  faq: FAQ[];
}

export const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "밸런스 게임",
    subtitle: "둘 중 하나, 당신의 선택은?",
    progressLabel: "진행도",
    restart: "다시 시작",
    completeTitle: "모든 질문을 다 풀었어요!",
    completeSubtitle: "친구에게도 공유하고 어떤 선택을 했는지 비교해보세요",
    whyBalance: "밸런스 게임이란?",
    balanceExplanation:
      "밸런스 게임은 두 가지 선택지 중 하나를 골라야 하는 가벼운 선택형 게임입니다. 정답은 없으며, 친구나 가족과 함께 서로 어떤 선택을 했는지 이야기하며 즐기는 용도로 만들어졌습니다. 매번 무작위 순서로 문항이 섞여 나오므로 다시 시작할 때마다 새로운 순서로 즐길 수 있습니다.",
    disclaimer:
      "이 게임은 순수하게 재미를 위한 콘텐츠이며, 심리 분석이나 성격 진단과는 관련이 없습니다. 결과를 심각하게 받아들이지 마세요.",
    footer: "LifeHub 도구 모음",
    faq: [
      {
        q: "정답이 있는 게임인가요?",
        a: "아니요, 밸런스 게임은 정답이 없는 가벼운 선택형 콘텐츠입니다. 둘 다 좋거나 둘 다 싫은 질문도 있을 수 있지만, 그중 더 나은 쪽을 골라보는 재미로 즐기시면 됩니다.",
      },
      {
        q: "문항은 몇 개인가요?",
        a: "총 35개 이상의 문항이 준비되어 있으며, 매번 무작위 순서로 섞여서 제시됩니다.",
      },
      {
        q: "선택 결과가 저장되나요?",
        a: "아니요, 선택 결과는 서버에 저장되지 않으며 현재 화면에서만 진행 상황을 표시합니다. 페이지를 새로고침하면 처음부터 다시 시작됩니다.",
      },
    ],
  },
  en: {
    title: "Balance Game",
    subtitle: "Pick one: which would you choose?",
    progressLabel: "Progress",
    restart: "Restart",
    completeTitle: "You've answered every question!",
    completeSubtitle: "Share it with friends and compare your choices",
    whyBalance: "What is a balance game?",
    balanceExplanation:
      "A balance game is a lighthearted game where you pick one of two options. There are no right or wrong answers — it's meant to be enjoyed with friends or family by comparing what everyone chose. The questions are shuffled into a new random order every time you play.",
    disclaimer:
      "This game is purely for entertainment and is not related to any psychological analysis or personality assessment. Please don't take the results too seriously.",
    footer: "LifeHub Tools",
    faq: [
      {
        q: "Is there a correct answer?",
        a: "No, a balance game has no right or wrong answer. Some questions may have two options you both like or both dislike — just pick whichever one you'd prefer for fun.",
      },
      {
        q: "How many questions are there?",
        a: "There are over 35 questions prepared, and they're shuffled into a new random order each time.",
      },
      {
        q: "Are my answers saved anywhere?",
        a: "No, your choices are not saved on any server — progress is only shown on the current screen. Refreshing the page will start over from the beginning.",
      },
    ],
  },
  ja: {
    title: "バランスゲーム",
    subtitle: "二択のうち、あなたの選択は?",
    progressLabel: "進行度",
    restart: "もう一度始める",
    completeTitle: "すべての質問に答えました!",
    completeSubtitle: "友達と共有して、どちらを選んだか比べてみましょう",
    whyBalance: "バランスゲームとは?",
    balanceExplanation:
      "バランスゲームは、2つの選択肢のうち1つを選ぶ軽い選択型ゲームです。正解はなく、友達や家族と一緒にどちらを選んだか話しながら楽しむためのものです。毎回ランダムな順序で質問が出題されるので、やり直すたびに新しい順番で楽しめます。",
    disclaimer:
      "このゲームは純粋に楽しむためのコンテンツであり、心理分析や性格診断とは関係ありません。結果を深刻に受け止めないでください。",
    footer: "LifeHub ツール集",
    faq: [
      {
        q: "正解がある質問ですか?",
        a: "いいえ、バランスゲームには正解のない軽い選択型コンテンツです。両方好き、または両方嫌いな質問もありますが、その中でより良い方を選ぶ楽しみとしてお楽しみください。",
      },
      {
        q: "質問は何問ありますか?",
        a: "合計35問以上が用意されており、毎回ランダムな順序で出題されます。",
      },
      {
        q: "選択結果は保存されますか?",
        a: "いいえ、選択結果はサーバーに保存されず、現在の画面にのみ進行状況が表示されます。ページを更新すると最初からやり直しになります。",
      },
    ],
  },
  es: {
    title: "Juego del Equilibrio",
    subtitle: "Elige uno: ¿cuál escogerías?",
    progressLabel: "Progreso",
    restart: "Reiniciar",
    completeTitle: "¡Has respondido todas las preguntas!",
    completeSubtitle: "Compártelo con amigos y compara qué elegiste",
    whyBalance: "¿Qué es un juego del equilibrio?",
    balanceExplanation:
      "Un juego del equilibrio es un juego ligero en el que eliges una de dos opciones. No hay respuestas correctas ni incorrectas: está pensado para disfrutarse con amigos o familia comparando lo que cada uno elige. Las preguntas se mezclan en un orden aleatorio nuevo cada vez que juegas.",
    disclaimer:
      "Este juego es puramente de entretenimiento y no está relacionado con ningún análisis psicológico o evaluación de personalidad. Por favor, no te tomes los resultados demasiado en serio.",
    footer: "Herramientas LifeHub",
    faq: [
      {
        q: "¿Hay una respuesta correcta?",
        a: "No, un juego del equilibrio no tiene respuestas correctas ni incorrectas. Algunas preguntas pueden tener dos opciones que te gusten o disgusten por igual; simplemente elige la que prefieras por diversión.",
      },
      {
        q: "¿Cuántas preguntas hay?",
        a: "Hay más de 35 preguntas preparadas, y se mezclan en un nuevo orden aleatorio cada vez.",
      },
      {
        q: "¿Se guardan mis respuestas en algún lugar?",
        a: "No, tus elecciones no se guardan en ningún servidor; el progreso solo se muestra en la pantalla actual. Si actualizas la página, empezarás de nuevo desde el principio.",
      },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}

export interface BalanceQuestion {
  a: Record<Locale, string>;
  b: Record<Locale, string>;
}

export const questions: BalanceQuestion[] = [
  {
    a: { ko: "평생 치킨만 먹기", en: "Eat only fried chicken forever", ja: "一生フライドチキンだけ食べる", es: "Comer solo pollo frito para siempre" },
    b: { ko: "평생 피자만 먹기", en: "Eat only pizza forever", ja: "一生ピザだけ食べる", es: "Comer solo pizza para siempre" },
  },
  {
    a: { ko: "평생 커피만 마시기", en: "Drink only coffee forever", ja: "一生コーヒーだけ飲む", es: "Beber solo café para siempre" },
    b: { ko: "평생 차만 마시기", en: "Drink only tea forever", ja: "一生お茶だけ飲む", es: "Beber solo té para siempre" },
  },
  {
    a: { ko: "평생 여름만 계속되는 곳에서 살기", en: "Live where it's always summer", ja: "一生夏だけが続く場所で暮らす", es: "Vivir donde siempre es verano" },
    b: { ko: "평생 겨울만 계속되는 곳에서 살기", en: "Live where it's always winter", ja: "一生冬だけが続く場所で暮らす", es: "Vivir donde siempre es invierno" },
  },
  {
    a: { ko: "바다로 여행 가기", en: "Travel to the beach", ja: "海へ旅行に行く", es: "Viajar a la playa" },
    b: { ko: "산으로 여행 가기", en: "Travel to the mountains", ja: "山へ旅行に行く", es: "Viajar a la montaña" },
  },
  {
    a: { ko: "돈은 많지만 시간이 없는 삶", en: "Lots of money but no free time", ja: "お金はあるが時間がない生活", es: "Mucho dinero pero sin tiempo libre" },
    b: { ko: "시간은 많지만 돈이 없는 삶", en: "Lots of free time but no money", ja: "時間はあるがお金がない生活", es: "Mucho tiempo libre pero sin dinero" },
  },
  {
    a: { ko: "남의 마음을 읽는 능력", en: "The ability to read minds", ja: "人の心を読む能力", es: "La capacidad de leer mentes" },
    b: { ko: "하늘을 나는 능력", en: "The ability to fly", ja: "空を飛ぶ能力", es: "La capacidad de volar" },
  },
  {
    a: { ko: "음악이 없는 세상에서 살기", en: "Live in a world without music", ja: "音楽のない世界で暮らす", es: "Vivir en un mundo sin música" },
    b: { ko: "영화가 없는 세상에서 살기", en: "Live in a world without movies", ja: "映画のない世界で暮らす", es: "Vivir en un mundo sin películas" },
  },
  {
    a: { ko: "1년 동안 인터넷 없이 살기", en: "Live without internet for a year", ja: "1年間インターネットなしで暮らす", es: "Vivir sin internet durante un año" },
    b: { ko: "1년 동안 커피 없이 살기", en: "Live without coffee for a year", ja: "1年間コーヒーなしで暮らす", es: "Vivir sin café durante un año" },
  },
  {
    a: { ko: "약속에 항상 10분 늦기", en: "Always be 10 minutes late to everything", ja: "約束に必ず10分遅れる", es: "Llegar siempre 10 minutos tarde" },
    b: { ko: "약속에 항상 1시간 일찍 도착하기", en: "Always arrive 1 hour early to everything", ja: "約束に必ず1時間早く着く", es: "Llegar siempre 1 hora antes" },
  },
  {
    a: { ko: "하루 동안 투명인간 되기", en: "Be invisible for a day", ja: "1日だけ透明人間になる", es: "Ser invisible por un día" },
    b: { ko: "하루 동안 어디든 순간이동하기", en: "Teleport anywhere for a day", ja: "1日だけどこへでも瞬間移動できる", es: "Teletransportarte a cualquier lugar por un día" },
  },
  {
    a: { ko: "내가 어떻게 죽을지 미리 아는 것", en: "Know in advance how you will die", ja: "自分がどう死ぬか事前に知る", es: "Saber de antemano cómo vas a morir" },
    b: { ko: "내가 언제 죽을지 미리 아는 것", en: "Know in advance when you will die", ja: "自分がいつ死ぬか事前に知る", es: "Saber de antemano cuándo vas a morir" },
  },
  {
    a: { ko: "과거의 한 시대에서 살아보기", en: "Live in a past era", ja: "過去のある時代に生きてみる", es: "Vivir en una época pasada" },
    b: { ko: "미래의 한 시대에서 살아보기", en: "Live in a future era", ja: "未来のある時代に生きてみる", es: "Vivir en una época futura" },
  },
  {
    a: { ko: "평생 대도시에서 살기", en: "Live in a big city forever", ja: "一生大都市で暮らす", es: "Vivir en una gran ciudad para siempre" },
    b: { ko: "평생 시골에서 살기", en: "Live in the countryside forever", ja: "一生田舎で暮らす", es: "Vivir en el campo para siempre" },
  },
  {
    a: { ko: "유명하지만 가난한 삶", en: "Be famous but poor", ja: "有名だが貧しい人生", es: "Ser famoso pero pobre" },
    b: { ko: "부유하지만 무명인 삶", en: "Be rich but unknown", ja: "裕福だが無名の人生", es: "Ser rico pero desconocido" },
  },
  {
    a: { ko: "세상의 모든 언어를 할 수 있는 능력", en: "Be able to speak every language in the world", ja: "世界中のすべての言語を話せる能力", es: "Poder hablar todos los idiomas del mundo" },
    b: { ko: "세상의 모든 악기를 다룰 수 있는 능력", en: "Be able to play every musical instrument", ja: "すべての楽器を演奏できる能力", es: "Poder tocar todos los instrumentos musicales" },
  },
  {
    a: { ko: "SNS가 없는 세상", en: "A world without social media", ja: "SNSのない世界", es: "Un mundo sin redes sociales" },
    b: { ko: "OTT(스트리밍 서비스)가 없는 세상", en: "A world without streaming services", ja: "動画配信サービスのない世界", es: "Un mundo sin servicios de streaming" },
  },
  {
    a: { ko: "평생 매운 음식만 먹기", en: "Eat only spicy food forever", ja: "一生辛い食べ物だけ食べる", es: "Comer solo comida picante para siempre" },
    b: { ko: "평생 단 음식만 먹기", en: "Eat only sweet food forever", ja: "一生甘い食べ物だけ食べる", es: "Comer solo comida dulce para siempre" },
  },
  {
    a: { ko: "완벽한 아침형 인간 되기", en: "Become a perfect morning person", ja: "完璧な朝型人間になる", es: "Convertirte en una persona totalmente matutina" },
    b: { ko: "완벽한 밤형 인간 되기", en: "Become a perfect night owl", ja: "完璧な夜型人間になる", es: "Convertirte en una persona totalmente nocturna" },
  },
  {
    a: { ko: "강아지 키우기", en: "Have a dog", ja: "犬を飼う", es: "Tener un perro" },
    b: { ko: "고양이 키우기", en: "Have a cat", ja: "猫を飼う", es: "Tener un gato" },
  },
  {
    a: { ko: "좋아하는 이야기를 책으로만 즐기기", en: "Only experience your favorite story as a book", ja: "好きな物語を本だけで楽しむ", es: "Disfrutar tu historia favorita solo en forma de libro" },
    b: { ko: "좋아하는 이야기를 영화로만 즐기기", en: "Only experience your favorite story as a movie", ja: "好きな物語を映画だけで楽しむ", es: "Disfrutar tu historia favorita solo en forma de película" },
  },
  {
    a: { ko: "캠핑 여행 가기", en: "Go on a camping trip", ja: "キャンプ旅行に行く", es: "Ir de viaje de camping" },
    b: { ko: "호텔 여행 가기", en: "Go on a hotel trip", ja: "ホテル旅行に行く", es: "Ir de viaje de hotel" },
  },
  {
    a: { ko: "매일 걸어서 통근하기", en: "Walk to work every day", ja: "毎日歩いて通勤する", es: "Caminar al trabajo todos los días" },
    b: { ko: "매일 차로 막히는 길 통근하기", en: "Drive through traffic to work every day", ja: "毎日渋滞した道を車で通勤する", es: "Conducir por tráfico al trabajo todos los días" },
  },
  {
    a: { ko: "평생 재택근무하기", en: "Work from home forever", ja: "一生在宅勤務をする", es: "Trabajar desde casa para siempre" },
    b: { ko: "평생 회사로 출근하기", en: "Commute to an office forever", ja: "一生会社に出勤する", es: "Ir a la oficina para siempre" },
  },
  {
    a: { ko: "전화만 가능하고 문자는 금지", en: "Only phone calls allowed, no texting", ja: "電話だけ可能でメッセージは禁止", es: "Solo se permiten llamadas, no mensajes" },
    b: { ko: "문자만 가능하고 전화는 금지", en: "Only texting allowed, no phone calls", ja: "メッセージだけ可能で電話は禁止", es: "Solo se permiten mensajes, no llamadas" },
  },
  {
    a: { ko: "에어컨 없이 여름 나기", en: "Get through summer without air conditioning", ja: "エアコンなしで夏を過ごす", es: "Pasar el verano sin aire acondicionado" },
    b: { ko: "난방 없이 겨울 나기", en: "Get through winter without heating", ja: "暖房なしで冬を過ごす", es: "Pasar el invierno sin calefacción" },
  },
  {
    a: { ko: "꿈의 직장이지만 가족과 멀리 떨어져 살기", en: "Your dream job but far from family", ja: "夢の仕事だが家族と遠く離れて暮らす", es: "Tu trabajo soñado pero lejos de la familia" },
    b: { ko: "평범한 직장이지만 가족 곁에서 살기", en: "An ordinary job but close to family", ja: "普通の仕事だが家族の近くで暮らす", es: "Un trabajo normal pero cerca de la familia" },
  },
  {
    a: { ko: "오래된 명작 다시 보기", en: "Rewatch an old classic", ja: "昔の名作を見返す", es: "Volver a ver un clásico antiguo" },
    b: { ko: "요즘 유행하는 콘텐츠 보기", en: "Watch the latest trending content", ja: "最近流行のコンテンツを見る", es: "Ver el contenido más popular del momento" },
  },
  {
    a: { ko: "파인애플 피자 좋아하기", en: "Love pineapple on pizza", ja: "パイナップルピザが好き", es: "Amar la piña en la pizza" },
    b: { ko: "파인애플 피자 싫어하기", en: "Hate pineapple on pizza", ja: "パイナップルピザが嫌い", es: "Odiar la piña en la pizza" },
  },
  {
    a: { ko: "평생 라면만 먹기", en: "Eat only instant noodles forever", ja: "一生インスタントラーメンだけ食べる", es: "Comer solo fideos instantáneos para siempre" },
    b: { ko: "평생 밥(쌀밥)만 먹기", en: "Eat only rice forever", ja: "一生ご飯だけ食べる", es: "Comer solo arroz para siempre" },
  },
  {
    a: { ko: "친구들과 노래방 가기", en: "Go to karaoke with friends", ja: "友達とカラオケに行く", es: "Ir al karaoke con amigos" },
    b: { ko: "친구들과 영화관 가기", en: "Go to the movies with friends", ja: "友達と映画館に行く", es: "Ir al cine con amigos" },
  },
  {
    a: { ko: "적은 돈으로 일찍 은퇴하기", en: "Retire early with modest savings", ja: "少ないお金で早く引退する", es: "Jubilarte pronto con pocos ahorros" },
    b: { ko: "많은 돈을 모을 때까지 오래 일하기", en: "Work for a long time to save a lot of money", ja: "お金をたくさん貯めるまで長く働く", es: "Trabajar mucho tiempo para ahorrar mucho dinero" },
  },
  {
    a: { ko: "눈 오는 날 좋아하기", en: "Prefer snowy days", ja: "雪の日が好き", es: "Preferir los días de nieve" },
    b: { ko: "비 오는 날 좋아하기", en: "Prefer rainy days", ja: "雨の日が好き", es: "Preferir los días de lluvia" },
  },
  {
    a: { ko: "1주일 동안 휴대폰 금지", en: "No phone for a week", ja: "1週間スマートフォン禁止", es: "Sin teléfono durante una semana" },
    b: { ko: "한 달 동안 영상 시청(TV·OTT) 금지", en: "No watching videos (TV/streaming) for a month", ja: "1ヶ月間動画視聴(TV・配信)禁止", es: "Sin ver videos (TV/streaming) durante un mes" },
  },
  {
    a: { ko: "빚 없는 작은 집에서 살기", en: "Live in a small debt-free house", ja: "借金のない小さな家に住む", es: "Vivir en una casa pequeña sin deudas" },
    b: { ko: "큰 대출이 있는 큰 집에서 살기", en: "Live in a big house with a large mortgage", ja: "大きなローンがある大きな家に住む", es: "Vivir en una casa grande con una gran hipoteca" },
  },
  {
    a: { ko: "완벽한 기억력 갖기", en: "Have a perfect memory", ja: "完璧な記憶力を持つ", es: "Tener una memoria perfecta" },
    b: { ko: "나쁜 기억 하나를 지울 수 있는 능력 갖기", en: "Have the ability to erase one bad memory", ja: "嫌な記憶を一つ消せる能力を持つ", es: "Tener la capacidad de borrar un mal recuerdo" },
  },
];
