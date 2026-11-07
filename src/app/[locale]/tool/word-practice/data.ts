export type Locale = "ko" | "en" | "ja" | "es";

export interface WordItem {
  Korean: string;
  English: string;
  Japanese: string;
  Spanish: string;
  difficulty: string;
  category: string;
  exampleKo: string;
  exampleEn: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  vocabulary: string;
  difficulty: string;
  allLevels: string;
  a1: string;
  a2: string;
  b1: string;
  b2: string;
  c1: string;
  c2: string;
  known: string;
  unknown: string;
  next: string;
  showAnswer: string;
  back: string;
  quizTitle: string;
  quizSubtitle: string;
  selectMeaning: string;
  quizResult: string;
  score: string;
  correct: string;
  incorrect: string;
  retry: string;
  whyLearn: string;
  whyExplanation: string;
  tips: string;
  tipsList: string[];
  faq: Array<{ q: string; a: string }>;
  disclaimer: string;
  footer: string;
  words: WordItem[];
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "단어 연습장",
    subtitle: "CEFR 기준 단계별 단어장 + 퀴즈로 매일 새로운 단어를 익혀보세요",
    vocabulary: "단어장",
    difficulty: "난이도",
    allLevels: "전체",
    a1: "A1 (초급)",
    a2: "A2 (초중급)",
    b1: "B1 (중급)",
    b2: "B2 (중상급)",
    c1: "C1 (상급)",
    c2: "C2 (마스터)",
    known: "알아요!",
    unknown: "모르겠음",
    next: "다음",
    showAnswer: "정답 확인",
    back: "돌아가기",
    quizTitle: "단어 퀴즈",
    quizSubtitle: "단어를 선택하세요",
    selectMeaning: "올바른 뜻을 선택하세요",
    quizResult: "테스트 결과",
    score: "점수",
    correct: "정답",
    incorrect: "오답",
    retry: "다시 도전",
    whyLearn: "매일 단어를 학습해야 하는 이유",
    whyExplanation:
      "매일 10~15개의 새 단어를 학습하면 1년 후 약 3,000~5,000개의 새로운 단어를 축적할 수 있습니다.\n\nCEFR(유럽 공통 참조 프레임워크) 기준 난이도를 분류하면, 현재 자신의 수준을 파악하고 다음 단계로 나아갈 수 있습니다.\n\n플래시카드 방식은 간격 반복(spaced repetition) 원칙에 따라 기억력을 효율적으로 강화합니다.",
    tips: "효과적인 학습 팁",
    tipsList: [
      "매일 같은 시간에 학습하세요 (습관화)",
      "모르겠음 버튼을 최대한 적게 누르세요 (자신의 실력을 정확히 판단하는 것이 중요)",
      "예문은 반드시 함께 암기하세요 (맥락 기억은 장기 기억에 도움)",
      "오답은 따로 정리하여 주기적으로 복습하세요",
      "퀴즈 모드는 복습용으로 활용하세요",
    ],
    faq: [
      {
        q: "언어별 단어장이 제공되나요?",
        a: "한국어, 영어, 일본어, 스페인어 4개 언어의 대응 단어를 함께 제공합니다. 원하는 언어로 학습하고 복습할 수 있습니다.",
      },
      {
        q: "난이도 분류는 어떻게 되나요?",
        a: "CEFR 기준 A1(초급)부터 C2(마스터)까지 6단계로 분류됩니다. 각 단어가 속한 난이도를 보고 자신의 수준에 맞춰 학습할 수 있습니다.",
      },
      {
        q: "퀴즈는 어떤 형태로 제공되나요?",
        a: "4지선다형 퀴즈로, 올바른 뜻을 선택하는 방식입니다. 테스트 후 점수와 정답/오답 수를 확인하고, 오답 위주로 복습할 수 있습니다.",
      },
    ],
    disclaimer: "⚠️ 이 단어장은 교육 참고용이며, 최신 표준/출판물에 따라 다를 수 있습니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    words: [
      { Korean: "시작하다", English: "to begin", Japanese: "始める", Spanish: "comenzar", difficulty: "A1", category: "동사", exampleKo: "새로운 프로젝트를 시작했습니다.", exampleEn: "She began a new project." },
      { Korean: "좋다", English: "good", Japanese: "良い", Spanish: "bueno", difficulty: "A1", category: "형용사", exampleKo: "날씨가 정말 좋습니다.", exampleEn: "The weather is really good." },
      { Korean: "사람", English: "person", Japanese: "人", Spanish: "persona", difficulty: "A1", category: "명사", exampleKo: "그 사람은 매우 친절합니다.", exampleEn: "That person is very kind." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "A1", category: "명사", exampleKo: "학교에 가는 길이에요.", exampleEn: "I am on my way to school." },
      { Korean: "먹다", English: "to eat", Japanese: "食べる", Spanish: "comer", difficulty: "A1", category: "동사", exampleKo: "아침을 먹었습니다.", exampleEn: "I ate breakfast." },
      { Korean: "물", English: "water", Japanese: "水", Spanish: "agua", difficulty: "A1", category: "명사", exampleKo: "물을 한 잔 주세요.", exampleEn: "Please give me a glass of water." },
      { Korean: "크다", English: "big", Japanese: "大きい", Spanish: "grande", difficulty: "A1", category: "형용사", exampleKo: "큰 공원이 있습니다.", exampleEn: "There is a big park." },
      { Korean: "가다", English: "to go", Japanese: "行く", Spanish: "ir", difficulty: "A1", category: "동사", exampleKo: "학교에 갑니다.", exampleEn: "I go to school." },
      { Korean: "친구", English: "friend", Japanese: "友達", Spanish: "amigo", difficulty: "A2", category: "명사", exampleKo: "친구를 만났습니다.", exampleEn: "I met my friend." },
      { Korean: "공부하다", English: "to study", Japanese: "勉強する", Spanish: "estudiar", difficulty: "A2", category: "동사", exampleKo: "매일 공부를 합니다.", exampleEn: "I study every day." },
      { Korean: "시간", English: "time", Japanese: "時間", Spanish: "tiempo", difficulty: "A2", category: "명사", exampleKo: "시간이 없습니다.", exampleEn: "I do not have time." },
      { Korean: "작다", English: "small", Japanese: "小さい", Spanish: "pequeno", difficulty: "A2", category: "형용사", exampleKo: "작은 집이 있습니다.", exampleEn: "There is a small house." },
      { Korean: "읽다", English: "to read", Japanese: "読む", Spanish: "leer", difficulty: "A2", category: "동사", exampleKo: "책을 읽습니다.", exampleEn: "I read a book." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "B1", category: "명사", exampleKo: "학교가 어디에 있나요?", exampleEn: "Where is the school?" },
      { Korean: "여행", English: "travel", Japanese: "旅行", Spanish: "viaje", difficulty: "B1", category: "명사", exampleKo: "여행을 계획 중입니다.", exampleEn: "I am planning a trip." },
      { Korean: "재미있다", English: "fun", Japanese: "面白い", Spanish: "divertido", difficulty: "B1", category: "형용사", exampleKo: "그 영화는 재미있었습니다.", exampleEn: "That movie was fun." },
      { Korean: "쓰다", English: "to write", Japanese: "書く", Spanish: "escribir", difficulty: "B1", category: "동사", exampleKo: "편지를 씁니다.", exampleEn: "I write a letter." },
      { Korean: "음식", English: "food", Japanese: "食べ物", Spanish: "comida", difficulty: "B2", category: "명사", exampleKo: "한국 음식을 좋아합니다.", exampleEn: "I like Korean food." },
      { Korean: "건강", English: "health", Japanese: "健康", Spanish: "salud", difficulty: "B2", category: "명사", exampleKo: "건강이 가장 중요합니다.", exampleEn: "Health is the most important." },
      { Korean: "경제", English: "economy", Japanese: "経済", Spanish: "economia", difficulty: "C1", category: "명사", exampleKo: "경제가 성장하고 있습니다.", exampleEn: "The economy is growing." },
    ],
  },
  en: {
    title: "Vocabulary Practice",
    subtitle: "Learn new words daily with CEFR-based flashcards and quizzes",
    vocabulary: "Vocabulary",
    difficulty: "Difficulty",
    allLevels: "All Levels",
    a1: "A1 (Beginner)",
    a2: "A2 (Elementary)",
    b1: "B1 (Intermediate)",
    b2: "B2 (Upper Intermediate)",
    c1: "C1 (Advanced)",
    c2: "C2 (Mastery)",
    known: "K",
    unknown: "Unknown",
    next: "Next",
    showAnswer: "Show Answer",
    back: "Back",
    quizTitle: "Vocabulary Quiz",
    quizSubtitle: "Select the correct meaning",
    selectMeaning: "Choose the correct translation",
    quizResult: "Quiz Results",
    score: "Score",
    correct: "Correct",
    incorrect: "Incorrect",
    retry: "Try Again",
    whyLearn: "Why learn new words daily?",
    whyExplanation:
      "Learning 10-15 new words daily can add 3,000-5,000 words to your vocabulary within one year.\n\nCEFR difficulty classification helps you identify your current level and progress systematically.\n\nFlashcard format follows the spaced repetition principle for efficient memory retention.",
    tips: "Tips for effective learning",
    tipsList: [
      "Study at the same time every day (build the habit)",
      "Use 'Do Not Know' sparingly - honest self-assessment is the key",
      "Memorize example sentences along with vocabulary (context aids long-term memory)",
      "Review incorrect answers periodically",
      "Use quiz mode for revision practice",
    ],
    faq: [
      {
        q: "Are vocabulary lists provided in multiple languages?",
        a: "Yes. Each word includes Korean, English, Japanese, and Spanish equivalents for reference and cross-language learning.",
      },
      {
        q: "How are difficulty levels determined?",
        a: "Words are classified by CEFR levels from A1 (beginner) to C2 (mastery). Filter by difficulty to study at your comfortable level.",
      },
      {
        q: "What type of quizzes are available?",
        a: "Multiple-choice quizzes (4 options) where you select the correct translation. After the quiz, check your score and review incorrect answers.",
      },
    ],
    disclaimer: "⚠️ This vocabulary list is for educational reference. Content may vary by latest standards or publications.",
    footer: "100% processed in browser. No data sent to the server.",
    words: [
      { Korean: "시작하다", English: "to begin", Japanese: "始める", Spanish: "comenzar", difficulty: "A1", category: "Verb", exampleKo: "새로운 프로젝트를 시작했습니다.", exampleEn: "She began a new project." },
      { Korean: "좋다", English: "good", Japanese: "良い", Spanish: "bueno", difficulty: "A1", category: "Adjective", exampleKo: "날씨가 정말 좋습니다.", exampleEn: "The weather is really good." },
      { Korean: "사람", English: "person", Japanese: "人", Spanish: "persona", difficulty: "A1", category: "Noun", exampleKo: "그 사람은 매우 친절합니다.", exampleEn: "That person is very kind." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "A1", category: "Noun", exampleKo: "학교에 가는 길이에요.", exampleEn: "I'm on my way to school." },
      { Korean: "먹다", English: "to eat", Japanese: "食べる", Spanish: "comer", difficulty: "A1", category: "Verb", exampleKo: "아침을 먹었습니다.", exampleEn: "I ate breakfast." },
      { Korean: "물", English: "water", Japanese: "水", Spanish: "agua", difficulty: "A1", category: "Noun", exampleKo: "물을 한 잔 주세요.", exampleEn: "Please give me a glass of water." },
      { Korean: "크다", English: "big", Japanese: "大きい", Spanish: "grande", difficulty: "A1", category: "Adjective", exampleKo: "큰 공원이 있습니다.", exampleEn: "There is a big park." },
      { Korean: "가다", English: "to go", Japanese: "行く", Spanish: "ir", difficulty: "A1", category: "Verb", exampleKo: "학교에 갑니다.", exampleEn: "I go to school." },
      { Korean: "친구", English: "friend", Japanese: "友達", Spanish: "amigo", difficulty: "A2", category: "Noun", exampleKo: "친구를 만났습니다.", exampleEn: "I met my friend." },
      { Korean: "공부하다", English: "to study", Japanese: "勉強する", Spanish: "estudiar", difficulty: "A2", category: "Verb", exampleKo: "매일 공부를 합니다.", exampleEn: "I study every day." },
      { Korean: "시간", English: "time", Japanese: "時間", Spanish: "tiempo", difficulty: "A2", category: "Noun", exampleKo: "시간이 없습니다.", exampleEn: "I do not have time." },
      { Korean: "작다", English: "small", Japanese: "小さい", Spanish: "pequeno", difficulty: "A2", category: "Adjective", exampleKo: "작은 집이 있습니다.", exampleEn: "There is a small house." },
      { Korean: "읽다", English: "to read", Japanese: "読む", Spanish: "leer", difficulty: "A2", category: "Verb", exampleKo: "책을 읽습니다.", exampleEn: "I read a book." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "B1", category: "Noun", exampleKo: "학교가 어디에 있나요?", exampleEn: "Where is the school?" },
      { Korean: "여행", English: "travel", Japanese: "旅行", Spanish: "viaje", difficulty: "B1", category: "Noun", exampleKo: "여행을 계획 중입니다.", exampleEn: "I am planning a trip." },
      { Korean: "재미있다", English: "fun", Japanese: "面白い", Spanish: "divertido", difficulty: "B1", category: "Adjective", exampleKo: "그 영화는 재미있었습니다.", exampleEn: "That movie was fun." },
      { Korean: "쓰다", English: "to write", Japanese: "書く", Spanish: "escribir", difficulty: "B1", category: "Verb", exampleKo: "편지를 씁니다.", exampleEn: "I write a letter." },
      { Korean: "음식", English: "food", Japanese: "食べ物", Spanish: "comida", difficulty: "B2", category: "Noun", exampleKo: "한국 음식을 좋아합니다.", exampleEn: "I like Korean food." },
      { Korean: "건강", English: "health", Japanese: "健康", Spanish: "salud", difficulty: "B2", category: "Noun", exampleKo: "건강이 가장 중요합니다.", exampleEn: "Health is the most important." },
      { Korean: "경제", English: "economy", Japanese: "経済", Spanish: "economia", difficulty: "C1", category: "Noun", exampleKo: "경제가 성장하고 있습니다.", exampleEn: "The economy is growing." },
    ],
  },
  ja: {
    title: "単語練習帳",
    subtitle: "CEFR基準のレベル別単語帳 + クイズで毎日新しい単語を学びましょう",
    vocabulary: "単語帳",
    difficulty: "難易度",
    allLevels: "すべて",
    a1: "A1 (初級)",
    a2: "A2 (初中級)",
    b1: "B1 (中級)",
    b2: "B2 (中上級)",
    c1: "C1 (上級)",
    c2: "C2 (マスター)",
    known: "知ってる",
    unknown: "知らない",
    next: "次へ",
    showAnswer: "答えを表示",
    back: "戻る",
    quizTitle: "単語クイズ",
    quizSubtitle: "答えを選択してください",
    selectMeaning: "正しい意味を選んでください",
    quizResult: "クイズ結果",
    score: "スコア",
    correct: "正解",
    incorrect: "不正解",
    retry: "再挑戦",
    whyLearn: "毎日単語を学習する理由",
    whyExplanation:
      "毎日10～15個の新しい単語を学習すると、1年後には約3,000～5,000個の単語を蓄積できます。\n\nCEFR基準の難易度分類で現在のレベルを把握し、次のステップに進めます。\n\nフラッシュカード方式は間隔反復の原理に基づき、記憶を効率的に強化します。",
    tips: "効果的な学習ヒント",
    tipsList: [
      "毎日同じ時間に学習してください (習慣化)",
      "「知らない」ボタンをできるだけ減らしてください (自分の実力を正確に判断することが重要)",
      "例文も一緒に暗記してください (文脈記憶は長期記憶に役立ちます)",
      "間違えた単語は別に整理して定期的に復習してください",
      "クイズモードは復習用に活用してください",
    ],
    faq: [
      {
        q: "言語別単語帳が提供されますか？",
        a: "韓国語、英語、日本語、スペイン語4つの言語の対照単語を一緒に提供します。希望する言語で学習し、復習することができます。",
      },
      {
        q: "難易度分類はどうなっていますか？",
        a: "CEFR基準でA1(初級)からC2(マスター)まで6段階で分類されます。各単語が属する難易度を見て、自分のレベルに合わせて学習できます。",
      },
      {
        q: "クイズはどのような形式ですか？",
        a: "4択式クイズで、正しい意味を選択する方式です。テスト後、スコアと正解/不正解数を確認し、不正解を主に復習できます。",
      },
    ],
    disclaimer: "⚠️ この単語帳は教育参考用であり、最新標準/出版物によって異なる場合があります。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    words: [
      { Korean: "시작하다", English: "to begin", Japanese: "始める", Spanish: "comenzar", difficulty: "A1", category: "動詞", exampleKo: "새로운 프로젝트를 시작했습니다.", exampleEn: "She began a new project." },
      { Korean: "좋다", English: "good", Japanese: "良い", Spanish: "bueno", difficulty: "A1", category: "形容詞", exampleKo: "날씨가 정말 좋습니다.", exampleEn: "The weather is really good." },
      { Korean: "사람", English: "person", Japanese: "人", Spanish: "persona", difficulty: "A1", category: "名詞", exampleKo: "그 사람은 매우 친절합니다.", exampleEn: "That person is very kind." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "A1", category: "名詞", exampleKo: "학교에 가는 길이에요.", exampleEn: "I'm on my way to school." },
      { Korean: "먹다", English: "to eat", Japanese: "食べる", Spanish: "comer", difficulty: "A1", category: "動詞", exampleKo: "아침을 먹었습니다.", exampleEn: "I ate breakfast." },
      { Korean: "물", English: "water", Japanese: "水", Spanish: "agua", difficulty: "A1", category: "名詞", exampleKo: "물을 한 잔 주세요.", exampleEn: "Please give me a glass of water." },
      { Korean: "크다", English: "big", Japanese: "大きい", Spanish: "grande", difficulty: "A1", category: "形容詞", exampleKo: "큰 공원이 있습니다.", exampleEn: "There is a big park." },
      { Korean: "가다", English: "to go", Japanese: "行く", Spanish: "ir", difficulty: "A1", category: "動詞", exampleKo: "학교에 갑니다.", exampleEn: "I go to school." },
      { Korean: "친구", English: "friend", Japanese: "友達", Spanish: "amigo", difficulty: "A2", category: "名詞", exampleKo: "친구를 만났습니다.", exampleEn: "I met my friend." },
      { Korean: "공부하다", English: "to study", Japanese: "勉強する", Spanish: "estudiar", difficulty: "A2", category: "動詞", exampleKo: "매일 공부를 합니다.", exampleEn: "I study every day." },
      { Korean: "시간", English: "time", Japanese: "時間", Spanish: "tiempo", difficulty: "A2", category: "名詞", exampleKo: "시간이 없습니다.", exampleEn: "I do not have time." },
      { Korean: "작다", English: "small", Japanese: "小さい", Spanish: "pequeno", difficulty: "A2", category: "形容詞", exampleKo: "작은 집이 있습니다.", exampleEn: "There is a small house." },
      { Korean: "읽다", English: "to read", Japanese: "読む", Spanish: "leer", difficulty: "A2", category: "動詞", exampleKo: "책을 읽습니다.", exampleEn: "I read a book." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "B1", category: "名詞", exampleKo: "학교가 어디에 있나요?", exampleEn: "Where is the school?" },
      { Korean: "여행", English: "travel", Japanese: "旅行", Spanish: "viaje", difficulty: "B1", category: "名詞", exampleKo: "여행을 계획 중입니다.", exampleEn: "I am planning a trip." },
      { Korean: "재미있다", English: "fun", Japanese: "面白い", Spanish: "divertido", difficulty: "B1", category: "형용사", exampleKo: "그 영화는 재미있었습니다.", exampleEn: "That movie was fun." },
      { Korean: "쓰다", English: "to write", Japanese: "書く", Spanish: "escribir", difficulty: "B1", category: "動詞", exampleKo: "편지를 씁니다.", exampleEn: "I write a letter." },
      { Korean: "음식", English: "food", Japanese: "食べ物", Spanish: "comida", difficulty: "B2", category: "名詞", exampleKo: "한국 음식을 좋아합니다.", exampleEn: "I like Korean food." },
      { Korean: "건강", English: "health", Japanese: "健康", Spanish: "salud", difficulty: "B2", category: "名詞", exampleKo: "건강이 가장 중요합니다.", exampleEn: "Health is the most important." },
      { Korean: "경제", English: "economy", Japanese: "経済", Spanish: "economia", difficulty: "C1", category: "名詞", exampleKo: "경제가 성장하고 있습니다.", exampleEn: "The economy is growing." },
    ],
  },
  es: {
    title: "Práctica de Vocabulario",
    subtitle: "Aprende nuevas palabras diarias con flashcards y quizzes basados en CEFR",
    vocabulary: "Vocabulario",
    difficulty: "Dificultad",
    allLevels: "Todos los niveles",
    a1: "A1 (Principiante)",
    a2: "A2 (Elemental)",
    b1: "B1 (Intermedio)",
    b2: "B2 (Intermedio Alto)",
    c1: "C1 (Avanzado)",
    c2: "C2 (Maestria)",
    known: "Lo se",
    unknown: "No se",
    next: "Siguiente",
    showAnswer: "Mostrar respuesta",
    back: "Volver",
    quizTitle: "Quiz de Vocabulario",
    quizSubtitle: "Selecciona el significado correcto",
    selectMeaning: "Elige la traducción correcta",
    quizResult: "Resultados del Quiz",
    score: "Puntuación",
    correct: "Correcta",
    incorrect: "Incorrecta",
    retry: "Intentar de nuevo",
    whyLearn: "Por que aprender palabras nuevas cada día?",
    whyExplanation:
      "Aprender 10-15 palabras nuevas diarias puede sumar 3,000-5,000 palabras a tu vocabulario en un año.\n\nLa clasificación de dificultad CEFR te ayuda a identificar tu nivel actual y progresar sistematicamente.\n\nEl formato de flashcards sigue el principio de repetición espaciada para una retención eficiente de la memoria.",
    tips: "Consejos para un aprendizaje efectivo",
    tipsList: [
      "Estudia a la misma hora cada día (forma el Habito)",
      " Usa No se con moderación - la autoevaluación honesta es la clave",
      "Memoriza las oraciones de ejemplo junto con el vocabulario (el contexto ayuda a la memoria a largo plazo)",
      "Revisa las respuestas incorrectas periodicamente",
      "Usa el modo quiz para práctica de repaso",
    ],
    faq: [
      {
        q: "Se proporcionan listas de vocabulario en multiples idiomas?",
        a: "Si. Cada palabra incluye equivalentes en coreano, ingles, japones y espanol para referencia y aprendizaje interlingual.",
      },
      {
        q: "Como se determinan los niveles de dificultad?",
        a: "Las palabras se clasifican por niveles CEFR desde A1 (principiante) hasta C2 (maestria). Filtra por dificultad para estudiar a tu nivel comodo.",
      },
      {
        q: "Que tipo de quizzes estan disponibles?",
        a: "Quizzes de opción multiple (4 opciones) donde seleccionas la traducción correcta. Después del quiz, revisa tu puntuación y repasa las respuestas incorrectas.",
      },
    ],
    disclaimer: "⚠️ Esta lista de vocabulario es para referencia educativa. El contenido puede variar según los últimos estándares o publicaciones.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    words: [
      { Korean: "시작하다", English: "to begin", Japanese: "始める", Spanish: "comenzar", difficulty: "A1", category: "Verbo", exampleKo: "새로운 프로젝트를 시작했습니다.", exampleEn: "She began a new project." },
      { Korean: "좋다", English: "good", Japanese: "良い", Spanish: "bueno", difficulty: "A1", category: "Adjetivo", exampleKo: "날씨가 정말 좋습니다.", exampleEn: "The weather is really good." },
      { Korean: "사람", English: "person", Japanese: "人", Spanish: "persona", difficulty: "A1", category: "Sustantivo", exampleKo: "그 사람은 매우 친절합니다.", exampleEn: "That person is very kind." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "A1", category: "Sustantivo", exampleKo: "학교에 가는 길이에요.", exampleEn: "I'm on my way to school." },
      { Korean: "먹다", English: "to eat", Japanese: "食べる", Spanish: "comer", difficulty: "A1", category: "Verbo", exampleKo: "아침을 먹었습니다.", exampleEn: "I ate breakfast." },
      { Korean: "물", English: "water", Japanese: "水", Spanish: "agua", difficulty: "A1", category: "Sustantivo", exampleKo: "물을 한 잔 주세요.", exampleEn: "Please give me a glass of water." },
      { Korean: "크다", English: "big", Japanese: "大きい", Spanish: "grande", difficulty: "A1", category: "Adjetivo", exampleKo: "큰 공원이 있습니다.", exampleEn: "There is a big park." },
      { Korean: "가다", English: "to go", Japanese: "行く", Spanish: "ir", difficulty: "A1", category: "Verbo", exampleKo: "학교에 갑니다.", exampleEn: "I go to school." },
      { Korean: "친구", English: "friend", Japanese: "友達", Spanish: "amigo", difficulty: "A2", category: "Sustantivo", exampleKo: "친구를 만났습니다.", exampleEn: "I met my friend." },
      { Korean: "공부하다", English: "to study", Japanese: "勉強する", Spanish: "estudiar", difficulty: "A2", category: "Verbo", exampleKo: "매일 공부를 합니다.", exampleEn: "I study every day." },
      { Korean: "시간", English: "time", Japanese: "時間", Spanish: "tiempo", difficulty: "A2", category: "Sustantivo", exampleKo: "시간이 없습니다.", exampleEn: "I do not have time." },
      { Korean: "작다", English: "small", Japanese: "小さい", Spanish: "pequeño", difficulty: "A2", category: "Adjetivo", exampleKo: "작은 집이 있습니다.", exampleEn: "There is a small house." },
      { Korean: "읽다", English: "to read", Japanese: "読む", Spanish: "leer", difficulty: "A2", category: "Verbo", exampleKo: "책을 읽습니다.", exampleEn: "I read a book." },
      { Korean: "학교", English: "school", Japanese: "学校", Spanish: "escuela", difficulty: "B1", category: "Sustantivo", exampleKo: "학교가 어디에 있나요?", exampleEn: "Where is the school?" },
      { Korean: "여행", English: "travel", Japanese: "旅行", Spanish: "viaje", difficulty: "B1", category: "Sustantivo", exampleKo: "여행을 계획 중입니다.", exampleEn: "I am planning a trip." },
      { Korean: "재미있다", English: "fun", Japanese: "面白い", Spanish: "divertido", difficulty: "B1", category: "Adjetivo", exampleKo: "그 영화는 재미있었습니다.", exampleEn: "That movie was fun." },
      { Korean: "쓰다", English: "to write", Japanese: "書く", Spanish: "escribir", difficulty: "B1", category: "Verbo", exampleKo: "편지를 씁니다.", exampleEn: "I write a letter." },
      { Korean: "음식", English: "food", Japanese: "食べ物", Spanish: "comida", difficulty: "B2", category: "Sustantivo", exampleKo: "한국 음식을 좋아합니다.", exampleEn: "I like Korean food." },
      { Korean: "건강", English: "health", Japanese: "健康", Spanish: "salud", difficulty: "B2", category: "Sustantivo", exampleKo: "건강이 가장 중요합니다.", exampleEn: "Health is the most important." },
      { Korean: "경제", English: "economy", Japanese: "経済", Spanish: "economia", difficulty: "C1", category: "Sustantivo", exampleKo: "경제가 성장하고 있습니다.", exampleEn: "The economy is growing." },
    ],
  },
};
