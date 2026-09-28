"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check, X, HelpCircle, RotateCcw } from "lucide-react";

export type Locale = "ko" | "en" | "ja" | "es";
type Difficulty = "all" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
type ViewMode = "learn" | "quiz";

interface WordItem {
  Korean: string;
  English: string;
  Japanese: string;
  Spanish: string;
  difficulty: string;
  category: string;
  exampleKo: string;
  exampleEn: string;
}

interface i18nData {
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
    known: "안!",
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
      "매일 10~15개의 새 단어를 학습하면 1년 후 약 3,000~5,000개의 새로운 단어를 축적할 수 있습니다.\n\nCEFR(유럽 공통 참조 프레임워크) 기준 난이도를 분류하면, 현 자신의 수준을 파악하고 다음 단계로 나아갈 수 있습니다.\n\n플래시카드 방식은 간격 반복(spaced repetition) 원칙에 따라 기억력을 효율적으로 강화합니다.",
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
      { Korean: "大的", English: "big", Japanese: "大きい", Spanish: "grande", difficulty: "A1", category: "형용사", exampleKo: "큰公園이 있습니다.", exampleEn: "There is a big park." },
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
    title: "Practica de Vocabulario",
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
    selectMeaning: "Elige la traduccion correcta",
    quizResult: "Resultados del Quiz",
    score: "Puntuacion",
    correct: "Correcta",
    incorrect: "Incorrecta",
    retry: "Intentar de nuevo",
    whyLearn: "Por que aprender palabras nuevas cada dia?",
    whyExplanation:
      "Aprender 10-15 palabras nuevas diarias puede sumar 3,000-5,000 palabras a tu vocabulario en un ano.\n\nLa clasificacion de dificultad CEFR te ayuda a identificar tu nivel actual y progresar sistematicamente.\n\nEl formato de flashcards sigue el principio de repeticion espaciada para una retencion eficiente de la memoria.",
    tips: "Consejos para un aprendizaje efectivo",
    tipsList: [
      "Estudia a la misma hora cada dia (forma el Habito)",
      " Usa No se con moderacion - la autoevaluacion honesta es la clave",
      "Memoriza las oraciones de ejemplo junto con el vocabulario (el contexto ayuda a la memoria a largo plazo)",
      "Revisa las respuestas incorrectas periodicamente",
      "Usa el modo quiz para practica de repaso",
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
        a: "Quizzes de opcion multiple (4 opciones) donde seleccionas la traduccion correcta. Después del quiz, revisa tu puntuacion y repasa las respuestas incorrectas.",
      },
    ],
    disclaimer: "⚠️ Esta lista de vocabulario es para referencia educativa. El contenido puede variar según los últimos estandares o publicaciones.",
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
      { Korean: "작다", English: "small", Japanese: "小さい", Spanish: "pequeno", difficulty: "A2", category: "Adjetivo", exampleKo: "작은 집이 있습니다.", exampleEn: "There is a small house." },
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

function WordCard({ word, locale, d }: { word: WordItem; locale: Locale; d: i18nData }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const getWord = (field: "Korean" | "English" | "Japanese" | "Spanish") => word[field];

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">{word.difficulty}</span>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">{word.category}</span>
      </div>
      <div className="min-h-[200px] rounded-lg bg-muted/50 p-6 text-center">
        <p className="mb-2 text-3xl font-bold">
          {locale === "ko" ? word.Korean : locale === "en" ? word.English : locale === "ja" ? word.Japanese : word.Spanish}
        </p>
        {showAnswer && (
          <div className="mt-4 text-left">
            <p className="mb-2 text-sm text-muted-foreground">
              {locale === "ko" ? `🇰🇷 ${word.Korean} | 🇯🇵 ${word.Japanese}` : locale === "en" ? `🇺🇸 ${word.English} | 🇯🇵 ${word.Japanese}` : locale === "ja" ? `🇯🇵 ${word.Japanese} | 🇺🇸 ${word.English}` : `🇪🇸 ${word.Spanish} | 🇺🇸 ${word.English}`}
            </p>
            <p className="text-sm text-muted-foreground italic">
              "{locale === "ko" ? word.exampleKo : word.exampleEn}"
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center gap-1 rounded-md border px-4 py-2 text-sm hover:bg-muted"
        >
          <HelpCircle className="h-4 w-4" />
          {showAnswer ? d.back : d.showAnswer}
        </button>
      </div>
    </div>
  );
}

function Quiz({ word, locale, d }: { word: WordItem; locale: Locale; d: i18nData }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getWord = (field: "Korean" | "English" | "Japanese" | "Spanish") => word[field];

  const correctTranslation = locale === "ko" ? word.Korean : locale === "en" ? word.English : locale === "ja" ? word.Japanese : word.Spanish;

  const generateOptions = () => {
    const allWords = data.en.words.filter((w) => w.Korean !== word.Korean);
    const wrongAnswers = allWords.slice(0, 3).map((w) => (locale === "ko" ? w.Korean : locale === "en" ? w.English : locale === "ja" ? w.Japanese : w.Spanish));
    const options = [...new Set([...wrongAnswers, correctTranslation])];
    while (options.length < 4) {
      const extra = data.en.words[options.length];
      options.push(locale === "ko" ? extra.Korean : locale === "en" ? extra.English : locale === "ja" ? extra.Japanese : extra.Spanish);
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const options = generateOptions();
  const isCorrect = selected === correctTranslation;

  return (
    <Card className="border shadow-md">
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <p className="text-base text-muted-foreground">What does this word mean?</p>
          <p className="mt-2 text-3xl font-bold">{word.English}</p>
          <p className="mt-1 text-sm text-muted-foreground">({word.Korean})</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                if (!showResult) setSelected(opt);
              }}
              disabled={showResult}
              className={`flex items-center justify-center gap-2 rounded-md border p-4 text-base transition-colors ${(
                showResult && opt === correctTranslation
                  ? "bg-green-100 border-green-500 text-green-700"
                  : showResult && selected === opt && !isCorrect
                    ? "bg-red-100 border-red-500 text-red-700"
                    : selected === opt
                      ? "bg-indigo-100 border-indigo-500"
                      : "bg-white hover:bg-muted"
              )}`}
            >
              {showResult && opt === correctTranslation && <Check className="h-5 w-5" />}
              {showResult && selected === opt && !isCorrect && <X className="h-5 w-5" />}
              {opt}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          {!showResult ? (
            <button
              onClick={() => setShowResult(true)}
              disabled={!selected}
              className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              Check Answer
            </button>
          ) : (
            <div className="space-y-2">
              <p className={`text-lg font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? "Correct!" : "Incorrect"}
              </p>
              <p className="text-sm text-muted-foreground">Correct answer: {correctTranslation}</p>
              <button
                onClick={() => {
                  setSelected(null);
                  setShowResult(false);
                }}
                className="mt-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              >
                Try Another
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function WordPractice({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useTranslations("Tools");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("learn");
  const [currentIndex, setCurrentIndex] = useState(0);

  const d = data[locale];
  const words = difficulty === "all" ? d.words : d.words.filter((w) => w.difficulty === difficulty);
  const currentWord = currentIndex < words.length ? words[currentIndex] : words[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{d.title}</h1>
      <p className="mt-2 text-muted-foreground">{d.subtitle}</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: d.title,
            description: d.subtitle,
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <div className="my-6 flex gap-2">
        {(["ko", "en", "ja", "es"] as Locale[]).map((l) => (
          <button key={l} onClick={() => setLocale(l)} className={`rounded-md border px-3 py-1 text-sm ${locale === l ? "bg-indigo-600 text-white" : "bg-white hover:bg-muted"}`}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(["learn", "quiz"] as ViewMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`rounded-md border px-4 py-2 text-sm font-medium ${viewMode === mode ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
          >
            {mode === "learn" ? "Learn" : "Quiz"}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["all", "A1", "A2", "B1", "B2", "C1", "C2"] as Difficulty[]).map((level) => (
          <button
            key={level}
            onClick={() => setDifficulty(level)}
            className={`rounded-md border px-3 py-1 text-xs ${difficulty === level ? "bg-indigo-600 text-white" : "hover:bg-muted"}`}
          >
            {level === "all" ? "All" : level}
          </button>
        ))}
      </div>

      {viewMode === "learn" && (
        <div className="mt-8">
          <Card className="border shadow-md">
            <CardContent className="pt-6">
              <WordCard word={currentWord} locale={locale} d={d} />
            </CardContent>
          </Card>
          <div className="mt-4 flex justify-between">
            <button
              className="flex items-center gap-1 rounded-md border px-4 py-2 text-sm hover:bg-muted"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>
            <button
              className="flex items-center gap-1 rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700"
              onClick={() => setCurrentIndex(Math.min(words.length - 1, currentIndex + 1))}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {viewMode === "quiz" && <div className="mt-8"><Quiz word={currentWord} locale={locale} d={d} /></div>}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.whyLearn}</h2>
        <p className="whitespace-pre-line leading-relaxed text-muted-foreground">{d.whyExplanation}</p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{d.tips}</h2>
        <ul className="space-y-2">
          {d.tipsList.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-1 text-indigo-600">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">{t("faq")}</h2>
        <div className="space-y-4">
          {d.faq.map((faq, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="py-4">
                <p className="mb-2 font-semibold">{i + 1}. {faq.q}</p>
                <p className="text-base text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">{d.disclaimer}</p>
      <p className="mt-4 text-sm text-muted-foreground">{d.footer}</p>
    </div>
  );
}
