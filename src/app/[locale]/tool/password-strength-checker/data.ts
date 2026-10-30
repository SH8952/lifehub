export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  inputLabel: string;
  placeholder: string;
  showPassword: string;
  strengthLabel: string;
  levels: string[];
  tipsTitle: string;
  tipLength: string;
  tipUpper: string;
  tipLower: string;
  tipNumber: string;
  tipSymbol: string;
  tipCommon: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  disclaimer: string;
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "비밀번호 강도 체커",
    subtitle: "입력한 비밀번호의 강도를 길이와 문자 조합을 기준으로 즉시 평가합니다. 입력값은 서버로 전송되지 않습니다.",
    inputLabel: "비밀번호 입력",
    placeholder: "평가할 비밀번호를 입력하세요",
    showPassword: "비밀번호 표시",
    strengthLabel: "강도",
    levels: ["매우 약함", "약함", "보통", "강함", "매우 강함"],
    tipsTitle: "개선 팁",
    tipLength: "12자 이상으로 길게 설정하세요",
    tipUpper: "대문자를 포함하세요",
    tipLower: "소문자를 포함하세요",
    tipNumber: "숫자를 포함하세요",
    tipSymbol: "특수문자를 포함하세요",
    tipCommon: "흔한 패턴(123456, qwerty 등)을 피하세요",
    howTitle: "사용 방법",
    howSteps: [
      "평가하고 싶은 비밀번호를 입력창에 입력합니다.",
      "강도 표시줄과 점수를 확인합니다.",
      "개선 팁을 참고해 더 안전한 비밀번호로 수정합니다.",
    ],
    faq: [
      { q: "입력한 비밀번호가 외부로 전송되나요?", a: "아니요, 모든 평가는 브라우저 내에서만 이루어지며 어떤 서버로도 전송되지 않습니다." },
      { q: "이 도구는 실제 유출 여부도 확인하나요?", a: "아니요, 이 도구는 길이와 문자 조합 등 구조적 강도만 평가하며 실제 데이터 유출 데이터베이스와 대조하지는 않습니다. 유출 여부 확인은 신뢰할 수 있는 별도 서비스를 이용하세요." },
    ],
    disclaimer: "이 도구는 브라우저 내에서만 동작하며 입력한 비밀번호를 서버에 저장하거나 전송하지 않습니다.",
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "Password Strength Checker",
    subtitle: "Instantly evaluate your password's strength based on length and character variety. Your input is never sent to a server.",
    inputLabel: "Enter Password",
    placeholder: "Enter the password to evaluate",
    showPassword: "Show Password",
    strengthLabel: "Strength",
    levels: ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"],
    tipsTitle: "Improvement Tips",
    tipLength: "Use at least 12 characters",
    tipUpper: "Include uppercase letters",
    tipLower: "Include lowercase letters",
    tipNumber: "Include numbers",
    tipSymbol: "Include special characters",
    tipCommon: "Avoid common patterns (123456, qwerty, etc.)",
    howTitle: "How to Use",
    howSteps: [
      "Type the password you want to evaluate into the input box.",
      "Check the strength bar and score.",
      "Use the improvement tips to make your password safer.",
    ],
    faq: [
      { q: "Is my password sent anywhere?", a: "No, all evaluation happens entirely in your browser and is never sent to any server." },
      { q: "Does this check if my password has been leaked?", a: "No, this tool only evaluates structural strength (length, character variety) — it does not check against real breach databases. Use a dedicated trusted service for that." },
    ],
    disclaimer: "This tool runs entirely in your browser and never stores or transmits your password.",
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "パスワード強度チェッカー",
    subtitle: "入力したパスワードの強度を、長さと文字の組み合わせに基づいて即座に評価します。入力値はサーバーに送信されません。",
    inputLabel: "パスワード入力",
    placeholder: "評価するパスワードを入力してください",
    showPassword: "パスワードを表示",
    strengthLabel: "強度",
    levels: ["非常に弱い", "弱い", "普通", "強い", "非常に強い"],
    tipsTitle: "改善のヒント",
    tipLength: "12文字以上に設定してください",
    tipUpper: "大文字を含めてください",
    tipLower: "小文字を含めてください",
    tipNumber: "数字を含めてください",
    tipSymbol: "記号を含めてください",
    tipCommon: "よくあるパターン（123456、qwertyなど）を避けてください",
    howTitle: "使用方法",
    howSteps: [
      "評価したいパスワードを入力欄に入力します。",
      "強度バーとスコアを確認します。",
      "改善のヒントを参考に、より安全なパスワードに変更します。",
    ],
    faq: [
      { q: "入力したパスワードは外部に送信されますか？", a: "いいえ、すべての評価はブラウザ内でのみ行われ、どのサーバーにも送信されません。" },
      { q: "このツールは実際の流出も確認しますか？", a: "いいえ、このツールは長さや文字の組み合わせなど構造的な強度のみを評価し、実際の漏洩データベースとは照合しません。" },
    ],
    disclaimer: "このツールはブラウザ内でのみ動作し、入力したパスワードをサーバーに保存・送信しません。",
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Verificador de Fortaleza de Contraseña",
    subtitle: "Evalúa al instante la fortaleza de tu contraseña según su longitud y variedad de caracteres. Tu entrada nunca se envía a un servidor.",
    inputLabel: "Introducir Contraseña",
    placeholder: "Introduce la contraseña a evaluar",
    showPassword: "Mostrar Contraseña",
    strengthLabel: "Fortaleza",
    levels: ["Muy Débil", "Débil", "Regular", "Fuerte", "Muy Fuerte"],
    tipsTitle: "Consejos de Mejora",
    tipLength: "Usa al menos 12 caracteres",
    tipUpper: "Incluye letras mayúsculas",
    tipLower: "Incluye letras minúsculas",
    tipNumber: "Incluye números",
    tipSymbol: "Incluye símbolos especiales",
    tipCommon: "Evita patrones comunes (123456, qwerty, etc.)",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe la contraseña que quieres evaluar en el cuadro.",
      "Revisa la barra de fortaleza y la puntuación.",
      "Usa los consejos de mejora para hacer tu contraseña más segura.",
    ],
    faq: [
      { q: "¿Se envía mi contraseña a algún lugar?", a: "No, toda la evaluación ocurre completamente en tu navegador y nunca se envía a ningún servidor." },
      { q: "¿Esto verifica si mi contraseña ha sido filtrada?", a: "No, esta herramienta solo evalúa la fortaleza estructural (longitud, variedad de caracteres), no la compara con bases de datos reales de filtraciones." },
    ],
    disclaimer: "Esta herramienta funciona completamente en tu navegador y nunca almacena ni transmite tu contraseña.",
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
