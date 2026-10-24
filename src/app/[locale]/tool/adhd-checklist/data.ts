export type Locale = "ko" | "en" | "ja" | "es";

export interface Data {
  title: string;
  subtitle: string;
  intro: string;
  questions: Array<{ q: string; options: Array<{ label: string; score: number }> }>;
  calculate: string;
  result: string;
  levels: Array<{ min: number; max: number; label: string; desc: string; color: string }>;
  why: string;
  whyExplanation: string;
  disclaimer: string;
  footer: string;
  faq: Array<{ q: string; a: string }>;
}

export const i18nData: Record<Locale, Data> = {
  ko: {
    title: "ADHD 자가검사",
    subtitle: "주의력결핍 과다행동장애 자가진단 체크리스트 (참용용입니다)",
    intro: "아래 문항에 대해 자신의 경험과 가장 일치하는 답변을 선택하세요. 총 18개 문항입니다.",
    questions: [
      { q: "집중한 일을 끝내기가 어렵다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "바쁠 일을 미룬다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "한 가지 일을 동시에 여러 가지로 한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "잡담을 많이 한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "다른 사람이 말하는 것을 끝까지 듣지 않는다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "집중력을 유지하기 어렵다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "할 일을 잊어버린다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "손이나 발을 constantly 움직인다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "자주 과잉행동이 보인다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "순서를 기다리기 어렵다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "다른 사람의 일을 방해한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "즉각적인 보상을 원한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "충동적으로 행동한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "감정이 기복이 심하다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "기분이 급변한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "산만해지기 쉽다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "일이나 공부에서 실수를 한다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
      { q: "규칙적인 일정을 지키기 어렵다", options: [
        { label: "거의 아니다", score: 0 },
        { label: "가끔 그렇다", score: 1 },
        { label: "자주 그렇다", score: 2 },
        { label: "항상 그렇다", score: 3 },
      ]},
    ],
    calculate: "점수 계산하기",
    result: "결과",
    levels: [
      { min: 0, max: 12, label: "정상 범위", desc: "ADHD 증상이 크게 나타나지 않는 범위입니다. 정상적인 집중력과 행동 조절이 되는 것으로 보입니다.", color: "green" },
      { min: 13, max: 24, label: "경계선", desc: "ADHD 증상이 약간 나타날 수 있는 범위입니다. 일상에서 약간의 집중력 또는 행동 조절에 어려움을 느낄 수 있습니다.", color: "yellow" },
      { min: 25, max: 54, label: "우려 필요", desc: "ADHD 증상이 상당량 나타날 수 있는 범위입니다. 전문가의 정확한 진단을 받아보시는 것을 권장드립니다.", color: "red" },
    ],
    why: "왜 ADHD 자가검사가 필요한가요?",
    whyExplanation:
      "ADHD(주의력결핍 과다행동장애)는 주의력 부재, 과다행동, 충동성과 관련된 발달성 정신장애입니다.\n\n성인 ADHD도 매우 흔하며, 정확한 진단을 위해서는 정신건강 전문가의 면담과 평가가 필수적입니다.\n\n이 체크리스트는 자가검사의 참고용이며, 의학적 진단을 대체할 수 없습니다. 증상이 걱정된다면 반드시 전문 상담기관이나 정신건강의학과를 방문하세요.",
    disclaimer: "⚠️ 이 자가검사는 의학적 진단이 아니며 참고용입니다. 정확한 진단은 정신건강 전문가에게 받으세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    faq: [
      { q: "ADHD 자가검사와 실제 진단의 차이점은 무엇인가요?", a: "자가검사는 참고용이며, 실제 진단은 정신건강의학과 전문의가 DSM-5 기준에 따라 면담, 평가, 임상적 판단을 통해 내립니다." },
      { q: "검사 점수가 높게 나왔는데, 병원에 가야 하나요?", a: "점수가 높게 나왔더라도 불안해하지 마세요. 정확한 진단을 위해 정신건강의학과나 상담기관을 방문하는 것이 좋습니다." },
      { q: "ADHD는 왜 성인에게도 나타나나요?", a: "ADHD는 아동기에 시작되는 발달성 장애입니다. 증상이 성인기에도 지속될 수 있으며, 성인 ADHD는 매우 흔합니다." },
    ],
  },
  en: {
    title: "ADHD Self-Check",
    subtitle: "Attention Deficit Hyperactivity Disorder self-assessment checklist (for reference only)",
    intro: "Please select the answer that best matches your experience for each item. There are 18 items in total.",
    questions: [
      { q: "I have difficulty finishing what I start", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I procrastinate on tasks that need to be done", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I do multiple things at once", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I talk too much", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I don't listen when others speak to me", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I have trouble maintaining focus", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I forget things I need to do", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "My hands or feet fidget constantly", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I show signs of hyperactivity often", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I find it hard to wait my turn", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I interrupt what others are doing", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I want immediate rewards", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I act impulsively", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "My emotions fluctuate greatly", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "My mood changes rapidly", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I'm easily distracted", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I make careless mistakes at work or study", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
      { q: "I have trouble sticking to a routine schedule", options: [
        { label: "Rarely", score: 0 },
        { label: "Sometimes", score: 1 },
        { label: "Often", score: 2 },
        { label: "Very often", score: 3 },
      ]},
    ],
    calculate: "Calculate Score",
    result: "Result",
    levels: [
      { min: 0, max: 12, label: "Normal Range", desc: "ADHD symptoms are not significantly present. Normal focus and behavior regulation appear to be functioning well.", color: "green" },
      { min: 13, max: 24, label: "Borderline", desc: "Some ADHD symptoms may be present. You may experience mild difficulties with focus or behavior regulation in daily life.", color: "yellow" },
      { min: 25, max: 54, label: "Concern — Seek Evaluation", desc: "Significant ADHD symptoms may be present. It is recommended to seek a professional evaluation.", color: "red" },
    ],
    why: "Why take an ADHD self-assessment?",
    whyExplanation:
      "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental condition characterized by inattention, hyperactivity, and impulsivity.\n\nAdult ADHD is very common, and an accurate diagnosis requires a mental health professional's interview and evaluation.\n\nThis checklist is for self-assessment reference only and cannot replace a medical diagnosis. If you are concerned about symptoms, please visit a mental health professional or psychiatrist.",
    disclaimer: "⚠️ This self-assessment is not a medical diagnosis and is for reference only. Please see a mental health professional for accurate diagnosis.",
    footer: "100% processed in browser. No data is sent to the server.",
    faq: [
      { q: "What's the difference between a self-assessment and a real diagnosis?", a: "Self-assessment is for reference only. Actual diagnosis is made by a psychiatrist using DSM-5 criteria, interviews, evaluations, and clinical judgment." },
      { q: "My score came out high. Should I go to the hospital?", a: "Don't panic even if your score is high. It's best to visit a psychiatrist or counseling center for an accurate diagnosis." },
      { q: "Why does ADHD appear in adults too?", a: "ADHD is a neurodevelopmental disorder that begins in childhood. Symptoms can persist into adulthood, and adult ADHD is very common." },
    ],
  },
  ja: {
    title: "ADHDセルフチェック",
    subtitle: "注意欠如・多動性障害のセルフチェックリスト（参考用です）",
    intro: "各項目について、ご自身の経験に最も合う回答を選んでください。全18項目です。",
    questions: [
      { q: "集中して最後までやり遂げることが難しい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "やらなければならないことを先送りする", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "一度に複数のことをする", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "おしゃべりしすぎることがある", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "人が話しているのを最後まで聞けない", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "集中力を保つのが難しい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "やらなければならないことを忘れがち", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "手足を絶えず動かしている", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "多動性が見られることがある", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "順番を待つのが難しい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "他の人の邪魔をしてしまう", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "即時の報酬を求める", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "衝動的に行動する", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "感情の起伏が激しい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "気分が急に変化する", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "集中力が散漫になりやすい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "仕事や勉強で不注意なミスをすることがある", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
      { q: "決まったスケジュールを守るのが難しい", options: [
        { label: "ほとんどない", score: 0 },
        { label: "ときどきある", score: 1 },
        { label: "よくある", score: 2 },
        { label: "いつもある", score: 3 },
      ]},
    ],
    calculate: "得点を計算",
    result: "結果",
    levels: [
      { min: 0, max: 12, label: "正常範囲", desc: "ADHDの症状はほとんど見られません。正常な集中力と行動コントロールができていると考えられます。", color: "green" },
      { min: 13, max: 24, label: "境界域", desc: "ADHDの症状が少し出ている可能性があります。日常で集中力や行動コントロールに若干の困難を感じるかもしれません。", color: "yellow" },
      { min: 25, max: 54, label: "要注目", desc: "ADHDの症状がかなり出ている可能性があります。専門家の正確な診断を受けることを推奨します。", color: "red" },
    ],
    why: "なぜADHDセルフチェックが必要ですか？",
    whyExplanation:
      "ADHD（注意欠如・多動性障害）は、不注意、多動性、衝動性に関連する神経発達症です。\n\n大人のADHDも非常に多く、正確な診断には精神保健専門家の面接と評価が不可欠です。\n\nこのチェックリストはセルフチェックの参考用であり、医療診断を代替できるものではありません。症状が心配な場合は、必ず専門の相談機関や精神保健の科を受診してください。",
    disclaimer: "⚠️ このセルフチェックは医療診断ではなく、参考用です。正確な診断は精神保健専門家を受けてください。",
    footer: "ブラウザで100%処理。サーバーに送信されるデータはありません。",
    faq: [
      { q: "ADHDセルフチェックと実際の診断の違いは何ですか？", a: "セルフチェックは参考用です。実際の診断は、精神科専門医がDSM-5の基準に基づき、面接、評価、臨床的判断で行います。" },
      { q: "得点が高かったですが、病院に行きますか？", a: "得点が高くても心配しないでください。正確な診断のために、精神科や相談機関を受診することをお勧めします。" },
      { q: "なぜ大人にもADHDが現れるんですか？", a: "ADHDは児童期に始まる神経発達症です。症状が成人期まで継続することがあり、大人のADHDは非常に一般的です。" },
    ],
  },
  es: {
    title: "Autoevaluación de TDAH",
    subtitle: "Lista de verificación de autoevaluación del trastorno por déficit de atención e hiperactividad (solo de referencia)",
    intro: "Seleccione la respuesta que mejor se adapte a su experiencia para cada ítem. Hay 18 ítems en total.",
    questions: [
      { q: "Tengo dificultad para terminar lo que empiezo", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Postergo las tareas que necesitan hacerse", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Hago varias cosas a la vez", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Hablo demasiado", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "No escucho cuando me hablan", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Me cuesta mantener la concentración", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Olvido lo que necesito hacer", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Mis manos o pies se mueven constantemente", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Muestro signos de hiperactividad a menudo", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Me cuesta esperar mi turno", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Interfiero en lo que otros hacen", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Quiero recompensas inmediatas", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Actúo de manera impulsiva", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Mis emociones fluctúan mucho", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Mi estado de ánimo cambia rápidamente", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Me distraigo con facilidad", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Cometo errores por descuido en el trabajo o estudio", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
      { q: "Me cuesta seguir un horario regular", options: [
        { label: "Casi nunca", score: 0 },
        { label: "A veces", score: 1 },
        { label: "Frecuentemente", score: 2 },
        { label: "Muy frecuentemente", score: 3 },
      ]},
    ],
    calculate: "Calcular Puntuación",
    result: "Resultado",
    levels: [
      { min: 0, max: 12, label: "Rango Normal", desc: "Los síntomas de TDAH no están significativamente presentes. Parece que la concentración y el control de conducta están funcionando bien.", color: "green" },
      { min: 13, max: 24, label: "Límite", desc: "Algunos síntomas de TDAH pueden estar presentes. Puede experimentar dificultades leves con la concentración o el control de conducta en la vida diaria.", color: "yellow" },
      { min: 25, max: 54, label: "Preocupante — Buscar Evaluación", desc: "Signos significativos de TDAH pueden estar presentes. Se recomienda buscar una evaluación profesional.", color: "red" },
    ],
    why: "¿Por qué hacer una autoevaluación de TDAH?",
    whyExplanation:
      "El TDAH (Trastorno por Déficit de Atención e Hiperactividad) es una condición neurodesarroll caracterizada por desatención, hiperactividad e impulsividad.\n\nEl TDAH en adultos es muy común, y un diagnóstico preciso requiere la entrevista y evaluación de un profesional de salud mental.\n\nEsta lista de verificación es solo para referencia de autoevaluación y no puede reemplazar un diagnóstico médico. Si le preocupan los síntomas, por favor visite un profesional de salud mental o psiquiatra.",
    disclaimer: "⚠️ Esta autoevaluación no es un diagnóstico médico y es solo de referencia. Por favor, consulte a un profesional de salud mental para un diagnóstico preciso.",
    footer: "Procesado 100% en el navegador. Sin datos enviados al servidor.",
    faq: [
      { q: "¿Cuál es la diferencia entre una autoevaluación y un diagnóstico real?", a: "La autoevaluación es solo de referencia. El diagnóstico real lo hace un psiquiatra usando criterios DSM-5, entrevistas, evaluaciones y juicio clínico." },
      { q: "Mi puntuación fue alta, ¿debo ir al hospital?", a: "No se preocupe incluso si su puntuación es alta. Es mejor visitar un psiquiatra o centro de consejería para un diagnóstico preciso." },
      { q: "¿Por qué el TDAH también aparece en adultos?", a: "El TDAH es un trastorno neurodesarroll que comienza en la infancia. Los síntomas pueden persistir en la edad adulta, y el TDAH en adultos es muy común." },
    ],
  },
};
