export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  intro: string;
  questions: Array<{
    q: string;
    options: Array<{
      label: string;
      score: number;
      type: string;
    }>;
  }>;
  calculate: string;
  result: string;
  types: Record<string, { name: string; desc: string; tips: string[]; color: string }>;
  why: string;
  whyExplanation: string;
  whyExplanation2? : string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "학습 방법 진단",
    subtitle: "나에게 맞는 공부법을 찾아드립니다",
    intro: "다음 문항에 답변하면あなたの 학습 스타일과 추천 공부법을 알려드립니다.",
    questions: [
      {
        q: "새로운 내용을 배울 때 어떤 방식이 가장 효과적이나요?",
        options: [
          { label: "책이나 글로 읽으며", score: 1, type: "read" },
          { label: "듣고 들으며", score: 2, type: "audio" },
          { label: "직접 하며 배우는", score: 3, type: "practical" },
          { label: "사람과 대화하며", score: 4, type: "social" },
        ],
      },
      {
        q: "숙제나 공부를 할 때 주로 어떤 방식으로 하나요?",
        options: [
          { label: "한 번에 오래하게", score: 3, type: "practical" },
          { label: "짧게 끊어서 여러 번", score: 2, type: "audio" },
          { label: "조용한 곳에서 혼자", score: 1, type: "read" },
          { label: "다른 사람과 함께", score: 4, type: "social" },
        ],
      },
      {
        q: "시험 준비를 할 때 어떤 방식이 효과적이라고 느꼈나요?",
        options: [
          { label: "요약 노트 만들기", score: 1, type: "read" },
          { label: "암기 Card 활용하기", score: 2, type: "audio" },
          { label: "문제 풀이 반복하기", score: 3, type: "practical" },
          { label: "그룹 스터디하기", score: 4, type: "social" },
        ],
      },
      {
        q: "어떤 방식으로 기억이 가장 오래 가나요?",
        options: [
          { label: "본으로 본 것", score: 1, type: "read" },
          { label: "들어서 들은 것", score: 2, type: "audio" },
          { label: "직접 하면서", score: 3, type: "practical" },
          { label: "다른 사람과 이야기하며", score: 4, type: "social" },
        ],
      },
      {
        q: "집중할 때 어떤 환경이 가장 좋나요?",
        options: [
          { label: "완전한 조용함", score: 1, type: "read" },
          { label: "부 배경 음악", score: 2, type: "audio" },
          { label: "실시간으로 움직이는 것", score: 3, type: "practical" },
          { label: "다른 사람이 있는 공간", score: 4, type: "social" },
        ],
      },
    ],
    calculate: "진단하기",
    result: "결과",
    types: {
      read: {
        name: "읽기/쓰기 스타일",
        desc: "글로 읽고 쓰는 방식으로 학습하는 것을 선호합니다. 책, 노트, 글쓰기가 주요 학습 도구입니다.",
        tips: [
          "교재를 읽고 핵심 내용을 요약하여 노트에 적어보세요.",
          "중요한 내용을 마킹하고 자신의 언어로 다시 써보세요.",
          "플래쉬카드를 만들어 단어를 보고 의미 떠올리기.",
          "요약한 내용을 다른 사람에게 설명해보기 (쓰기+말하기 병행)",
        ],
        color: "blue",
      },
      audio: {
        name: "듣기/말하기 스타일",
        desc: "듣고 말하며 학습하는 것을 선호합니다. 설명 듣기, 암송, 음성이 중요한 학습 도구입니다.",
        tips: [
          "강의나 podcasts를 활용해 내용을 들어보세요.",
          "교재 내용을 직접 소리 내어 암송해보세요.",
          "자신의 목소리로 녹음하고 반복재생하며 공부하기.",
          "단어나 개념을 소리 내어 외우기.",
        ],
        color: "purple",
      },
      practical: {
        name: "체험/실습 스타일",
        desc: "직접 하며 배우는 것을 선호합니다. 문제 풀이, 실험, 실습이 주요 학습 방법입니다.",
        tips: [
          "문제 풀이, 요약노트 만들기 등 직접 활동하는 방식 활용.",
          "시뮬레이션이나 게임 형식의 학습 앱 활용.",
          "실생활에 적용해보며 배우기.",
          "짧은 공백을 두고 반복 학습하기.",
        ],
        color: "orange",
      },
      social: {
        name: "대화/협력 스타일",
        desc: "다른 사람과 대화하고 협력하며 학습하는 것을 선호합니다. 그룹 스터디, 토론이 효과적입니다.",
        tips: [
          "스터디 그룹을 구성하여 함께 공부하기.",
          "배운 내용을 다른 사람에게 설명해주기 (교수법).",
          "토론이나 퀴즈 대회를 활용하기.",
          "온라인 커뮤니티에서 질문하며 배우기.",
        ],
        color: "green",
      },
    },
    why: "왜 학습 방법 진단이 필요한가요?",
    whyExplanation:
      "사람마다 공부하는 방식(학습 스타일)이 다릅니다.\n\n내게 맞는 공부법을 찾으면 공부 효율이 크게 높아집니다. 불필요한 시간 낭비를 줄이고, 더 빠르게 결과를 얻을 수 있습니다.\n\n학습 스타일은 한 가지로 국한되지 않을 수 없습니다. 여러 방식을 조합하면 더 좋은 결과가 나옵니다.\n\n이 진단은 참고용이며, 개인의 경험과 기호에 따라 결과가 다를 수 있습니다.",
    disclaimer: "⚠️ 이 진단은 참고용이며, 전문 상담을 대체할 수 없습니다. 학습 방법에는 정답이 아닙니다. 여러 방식을 시도해보고 자신에게 맞는 방법을 찾는 것이 중요합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "학습 스타일 진단의 효과는 무엇인가요?", a: "자신에게 맞는 공부법을 찾아 공부 시간을 효율적으로 보내실 수 있습니다. 하지만 모든 사람이 동일한 결과에 해당하는 것은 아닙니다." },
      { q: "여러 학습 스타일이 혼합된 결과가 나왔습니다. 어떻게 해야 하나요?", a: "혼합 유형은 매우 일반적입니다. 여러 유형에 해당하는 공부법을 모두 시도하면서 가장 높은 효과를 보이는 방법을 찾아보세요." },
      { q: "이 진단으로 실제 성적이 오릅니까요?", a: "본인에게 맞는 공부법을 찾는 참고 자료일 뿐입니다. 실제 결과는 꾸준한 노력과 실천에 달려 있습니다." },
    ],
  },
  en: {
    title: "Study Method Assessment",
    subtitle: "Discover the study method that works best for you",
    intro: "Answer the following questions to discover your learning style and recommended study strategies.",
    questions: [
      {
        q: "What method is most effective when learning something new?",
        options: [
          { label: "Reading books or text", score: 1, type: "read" },
          { label: "Listening to audio", score: 2, type: "audio" },
          { label: "Doing hands-on activities", score: 3, type: "practical" },
          { label: "Discussing with others", score: 4, type: "social" },
        ],
      },
      {
        q: "How do you usually approach homework or studying?",
        options: [
          { label: "Long sessions at once", score: 3, type: "practical" },
          { label: "Short sessions multiple times", score: 2, type: "audio" },
          { label: "Quietly alone", score: 1, type: "read" },
          { label: "With other people", score: 4, type: "social" },
        ],
      },
      {
        q: "What method did you find effective for exam preparation?",
        options: [
          { label: "Making summary notes", score: 1, type: "read" },
          { label: "Using flashcards", score: 2, type: "audio" },
          { label: "Repeated problem-solving", score: 3, type: "practical" },
          { label: "Group study sessions", score: 4, type: "social" },
        ],
      },
      {
        q: "What helps you remember information the longest?",
        options: [
          { label: "Reading it myself", score: 1, type: "read" },
          { label: "Hearing it", score: 2, type: "audio" },
          { label: "Doing it hands-on", score: 3, type: "practical" },
          { label: "Discussing with others", score: 4, type: "social" },
        ],
      },
      {
        q: "Which environment helps you focus best?",
        options: [
          { label: "Complete silence", score: 1, type: "read" },
          { label: "Background music", score: 2, type: "audio" },
          { label: "Active, hands-on", score: 3, type: "practical" },
          { label: "Around other people", score: 4, type: "social" },
        ],
      },
    ],
    calculate: "Assess",
    result: "Result",
    types: {
      read: {
        name: "Reading/Writing Style",
        desc: "You prefer learning through reading and writing. Books and notes are your primary study tools.",
        tips: [
          "Read your material and write summaries in your own words.",
          "Highlight key points and rewrite them in your own language.",
          "Use flashcards to recall meanings from vocabulary.",
          "Summarize written content and explain it verbally.",
        ],
        color: "blue",
      },
      audio: {
        name: "Auditory/Verbal Style",
        desc: "You prefer learning through listening and speaking. Lectures and verbal repetition are important.",
        tips: [
          "Use lectures, podcasts, and audiobooks to absorb content.",
          "Read textbooks aloud and recite key points.",
          "Record yourself reading and listen repeatedly while studying.",
          "Memorize vocabulary and concepts by saying them aloud.",
        ],
        color: "purple",
      },
      practical: {
        name: "Hands-on/Kinesthetic Style",
        desc: "You prefer learning by doing. Problem-solving, experiments, and practice are your primary methods.",
        tips: [
          "Use active methods: problem-solving, making summaries.",
          "Use simulation or game-based learning apps.",
          "Apply what you learn to real-life situations.",
          "Use short study sessions with repetition.",
        ],
        color: "orange",
      },
      social: {
        name: "Social/Interpersonal Style",
        desc: "You prefer learning through discussion and collaboration with others. Group study and debate are effective for you.",
        tips: [
          "Form a study group to learn together.",
          "Teach what you learned to others (the teaching method).",
          "Use debates and quiz competitions.",
          "Learn by asking questions in online communities.",
        ],
        color: "green",
      },
    },
    why: "Why take a study method assessment?",
    whyExplanation:
      "Everyone has a different way of learning (learning style).\n\n" +
      "Finding the right study method for you can significantly improve your study efficiency. You'll waste less time and achieve results faster.\n\n" +
      "Your learning style may not be limited to just one type. Combining multiple approaches often yields better results.\n\n" +
      "This assessment is for reference only, and results may vary based on personal experience and preferences.",
    disclaimer: "⚠️ This assessment is for reference only and doesn't replace professional counseling. There's no single right answer for learning methods. It's important to try various approaches and find what works for you.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "What's the benefit of a learning style assessment?", a: "Helps you find study methods that work for you, allowing you to use your study time more efficiently. However, not everyone gets the same results." },
      { q: "I got a mixed result from multiple styles. What should I do?", a: "Mixed types are very common. Try studying methods from multiple styles and find the ones that give you the best results." },
      { q: "Will this actually improve my grades?", a: "This is a reference tool to help you find the right study method. Actual results depend on consistent effort and practice." },
    ],
  },
  ja: {
    title: "学習方法診断",
    subtitle: "あなたに合った勉強法を見つけましょう",
    intro: "次の質問に答えて、あなたの学習スタイルのおすすめ勉強法を知りましょう。",
    questions: [
      {
        q: "新しいことを覚えるとき、どの方法が一番効果的ですか？",
        options: [
          { label: "本や文字で", score: 1, type: "read" },
          { label: "聞いて", score: 2, type: "audio" },
          { label: "実際に手を動かして", score: 3, type: "practical" },
          { label: "人との会話で", score: 4, type: "social" },
        ],
      },
      {
        q: "宿題や勉強を行うとき、通常どんな方式でしますか？",
        options: [
          { label: "一度に長時間", score: 3, type: "practical" },
          { label: "短く分けて何回か", score: 2, type: "audio" },
          { label: "静かな場所で一人", score: 1, type: "read" },
          { label: "他の人と一緒に", score: 4, type: "social" },
        ],
      },
      {
        q: "試験勉強で効果的だった方式は？",
        options: [
          { label: "まとめノードを作る", score: 1, type: "read" },
          { label: "暗唱カードを活用する", score: 2, type: "audio" },
          { label: "問題演習を繰り返す", score: 3, type: "practical" },
          { label: "勉強会に参加する", score: 4, type: "social" },
        ],
      },
      {
        q: "どの方式で覚えると一番長く覚えていますか？",
        options: [
          { label: "自分で目で見る", score: 1, type: "read" },
          { label: "耳で聞く", score: 2, type: "audio" },
          { label: "実際に手を動かしながら", score: 3, type: "practical" },
          { label: "他の人と話し合いながら", score: 4, type: "social" },
        ],
      },
      {
        q: "集中する環境で一番いいのは？",
        options: [
          { label: "完全な静けさ", score: 1, type: "read" },
          { label: "バックグラウンド音楽", score: 2, type: "audio" },
          { label: "リアルタイムで動くもの", score: 3, type: "practical" },
          { label: "他の人がいる場所", score: 4, type: "social" },
        ],
      },
    ],
    calculate: "診断する",
    result: "結果",
    types: {
      read: {
        name: "読む・書くスタイル",
        desc: "読んで書く方式で勉強することを好みます。本、ノート、書式が主な勉強道具です。",
        tips: [
          "教科書を読み合い、重要な部分をノートにまとめて書いてください。",
          "重要な部分をマーキングして、自分の言葉で書き直してください。",
          "フラッシュ CARD を使って単語を見て意味を思い出す。",
          "要約した内容を他人に説明してみる (書く+話す併用)",
        ],
        color: "blue",
      },
      audio: {
        name: "聞く・話すスタイル",
        desc: "聞いて話し合いながら勉強することを好みます。講義の聞き取り、暗誦、音声重要な勉強道具です。",
        tips: [
          "講座やポッドキャストを利用して内容を聞いてください。",
          "教科書の内容を直接声に出して暗誦してください。",
          "自分の声で録音して繰り返し再生ながら勉強する。",
          "単語や概念を声に出して覚える.",
        ],
        color: "purple",
      },
      practical: {
        name: "体験・実習スタイル",
        desc: "実際に手を動かして勉強することを好みます。問題演習、実験、実習が主な勉強方法です。",
        tips: [
          "問題演習、まとめノート作りなど直接活動する方式を活用。",
          "シミュレーションやゲーム形式の勉強アプリを活用。",
          "実生活に適用しながら覚える。",
          "短い間隔で反復学習する。",
        ],
        color: "orange",
      },
      social: {
        name: "会話・協力スタイル",
        desc: "他の人と会話して協力しながら勉強することを好みます。勉強会、議論が効果的です。",
        tips: [
          "勉強会を構成して一緒に勉強する。",
          "学んだ内容を他人に説明してみる (教授法).",
          "議論やクイズ大会を活用する。",
          "オンラインコミュニティで質問して学ぶ。",
        ],
        color: "green",
      },
    },
    why: "なぜ学習方法診断が必要ですか？",
    whyExplanation:
      "人によって勉強する方法(学習スタイル)が異なります。\n\n自分に合った勉強法を見つけると、勉強の効率が大きく向上します。無駄な時間を減らし、より速く結果を得ることができます。\n\n学習スタイルは一つに限定されないことがあるかもしれません。複数の方法を組み合わせると、より良い結果が得られることがあります。\n\nこの診断は参考用であり、個人の経験や好みによって結果が異なることがあります。",
    disclaimer: "⚠️ この診断は参考用であり、専門相談を代替できるものではありません。勉強法に正解はありません。様々な方法を試し、自分に合った方法を見つけることが重要です。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "学習スタイル診断のメリットは何ですか？", a: "自分に合った勉強法を見つけることができます。しかし、すべての人が同じ結果を得るわけではありません。" },
      { q: "複数のスタイルの混合結果が出ました。どうすればいいですか？", a: "混合型は非常に一般的です。複数のタイプに該当する勉強法をすべて試し、最も効果が高い方法を見つけてください。" },
      { q: "これで実際の成績が上がりますか？", a: "自分にあう勉強法を見つけるための参考資料です。実際の結果は継続的な努力と実践にかかっています。" },
    ],
  },
  es: {
    title: "Evaluación del Método de Estudio",
    subtitle: "Descubre el método de estudio que mejor funciona para ti",
    intro: "Responde las siguientes preguntas para descubrir tu estilo de aprendizaje y estrategias de estudio recomendadas.",
    questions: [
      {
        q: "¿Qué método es más efectiva al aprender algo nuevo?",
        options: [
          { label: "Leyendo libros o texto", score: 1, type: "read" },
          { label: "Escuchando audio", score: 2, type: "audio" },
          { label: "Haciendo actividades prácticas", score: 3, type: "practical" },
          { label: "Discutiendo con otros", score: 4, type: "social" },
        ],
      },
      {
        q: "¿Cómo sueles abordar las tareas o el estudio?",
        options: [
          { label: "Sesiones largas a la vez", score: 3, type: "practical" },
          { label: "Sesiones cortas varias veces", score: 2, type: "audio" },
          { label: "Solo en silencio", score: 1, type: "read" },
          { label: "Con otras personas", score: 4, type: "social" },
        ],
      },
      {
        q: "¿Qué método encontraste efectivo para preparar exámen?",
        options: [
          { label: "Hacer resúmenes", score: 1, type: "read" },
          { label: "Usar fichas de estudio", score: 2, type: "audio" },
          { label: "Práctica repetida de problemas", score: 3, type: "practical" },
          { label: "Sesiones de estudio en grupo", score: 4, type: "social" },
        ],
      },
      {
        q: "¿Qué te ayuda a recordar información por más tiempo?",
        options: [
          { label: "Leyéndolo yo mismo", score: 1, type: "read" },
          { label: "Escuchándolo", score: 2, type: "audio" },
          { label: "Haciéndolo con las manos", score: 3, type: "practical" },
          { label: "Discutiendo con otros", score: 4, type: "social" },
        ],
      },
      {
        q: "¿Qué ambiente te ayuda a concentrarte mejor?",
        options: [
          { label: "Silencio total", score: 0, type: "read" },
          { label: "Música de fondo", score: 2, type: "audio" },
          { label: "Activo, con las manos", score: 3, type: "practical" },
          { label: "Con otras personas", score: 4, type: "social" },
        ],
      },
    ],
    calculate: "Evaluar",
    result: "Resultado",
    types: {
      read: {
        name: "Estilo Lectura/Escritura",
        desc: "Prefieres aprender leyendo y escribiendo. Libros y notas son tus principales herramientas.",
        tips: [
          "Lee tu material y escribe resúmenes en tus propias palabras.",
          "Destaca los puntos clave y reesríbelos con tu propio lenguaje.",
          "Usa fichas de estudio para recordar significados de vocabulario.",
          "Resume por escrito y explícalo verbalmente.",
        ],
        color: "blue",
      },
      audio: {
        name: "Estilo Auditivo/Verbal",
        desc: "Prefieres aprender escuchando y hablando. Las conferencias y la repetición verbal son importantes.",
        tips: [
          "Usa conferencias, podcasts y audiolibros para absorber el contenido.",
          "Lee los libros en voz alta y recita los puntos clave.",
          "Graba tu voz y escucha repetidamente mientras estudias.",
          "Memoriza vocabulario y conceptos diciendo en voz alta.",
        ],
        color: "purple",
      },
      practical: {
        name: "Estilo Manual/Psicomotor",
        desc: "Prefieres aprender haciendo. La resolución de problemas, experimentos y práctica son tus métodos principales.",
        tips: [
          "Usa métodos activos: resolución de problemas, hacer resúmenes.",
          "Usa aplicaciones de aprendizaje basadas en simulación o juegos.",
          "Aplica lo que aprendes a situaciones de la vida real.",
          "Usa sesiones de estudio cortas con repetición.",
        ],
        color: "orange",
      },
      social: {
        name: "Estilo Social/Interpersonal",
        desc: "Prefieres aprender a través de la discusión y colaboración con otros. El estudio en grupo y el debate son efectivos para ti.",
        tips: [
          "Forma un grupo de estudio para aprender juntos.",
          "Enseña lo que aprendiste a otros (el método de enseñanza).",
          "Usa debates y competiciones de preguntas.",
          "Aprende haciendo preguntas en comunidades en línea.",
        ],
        color: "green",
      },
    },
    why: "¿Por qué hacer una evaluación del método de estudio?",
    whyExplanation:
      "Todos tenemos una forma diferente de aprender (estilo de aprendizaje).\n\n" +
      "Encontrar el método de estudio adecuado para ti puede mejorar significativamente tu eficiencia de estudio. Perderás menos tiempo y lograrás resultados más rápido.\n\n" +
      "Tu estilo de aprendizaje puede no estar limitado a solo un tipo. Combinar múltiples enfoques a menudo produce mejores resultados.\n\n" +
      "Esta evaluación es solo de referencia, y los resultados pueden variar según la experiencia y las preferencias personales.",
    disclaimer: "⚠️ Esta evaluación es solo de referencia y no reemplaza el asesoramiento profesional. No hay una única respuesta correcta para los métodos de aprendizaje. Es importante probar varios enfoques y encontrar lo que funciona para ti.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Cuál es el beneficio de una evaluación del estilo de aprendizaje?", a: "Te ayuda a encontrar métodos de estudio que funcionan para ti, permitiéndole usar tu tiempo de estudio más eficientemente. Sin embargo, no todos obtienen los mismos resultados." },
      { q: "Recibí un resultado mixto de múltiples estilos. ¿Qué debo hacer?", a: "Los tipos mixtos son muy comunes. Intenta los métodos de estudio de múltiples estilos y encuentra los que te den los mejores resultados." },
      { q: "¿Esto realmente mejorará mis calificaciones?", a: "Esta es una herramienta de referencia para ayudarte a encontrar el método de estudio adecuado. Resultados reales dependen del esfuerzo y la práctica constante." },
    ],
  },
};
