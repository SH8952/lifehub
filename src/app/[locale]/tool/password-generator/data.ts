export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  length: string;
  charTypes: string;
  uppercase: string;
  lowercase: string;
  numbers: string;
  symbols: string;
  excludeSimilar: string;
  count: string;
  generate: string;
  result: string;
  copyAll: string;
  copy: string;
  copied: string;
  lengthTip: string;
  whyPassword: string;
  passwordExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "비밀번호 생성기",
    subtitle: "안전한 임의의 비밀번호를 생성합니다",
    inputs: "정보 입력",
    length: "길이",
    charTypes: "포함할 문자 종류",
    uppercase: "대문자(A-Z)",
    lowercase: "소문자 (a-z)",
    numbers: "숫자 (0-9)",
    symbols: "기호 (!@#$...)",
    excludeSimilar: "유사 문자 제외 (0, O, 1, l, I 등)",
    count: "생성 개수 (1~100)",
    generate: "생성하기",
    result: "생성된 비밀번호",
    copyAll: "전체 복사",
    copy: "복사",
    copied: "복사됨!",
    lengthTip: "길이가 길수록 더 안전합니다.",
    whyPassword: "안전한 비밀번호는 어떻게 만들어지나요?",
    passwordExplanation: "본 생성기는 브라우저의 암호학적으로 안전한 난수 생성 기능(crypto.getRandomValues)을 사용하여 비밀번호를 생성합니다. 일반적인 난수 함수(Math.random 등)보다 예측하기 어려워 보안에 더 적합합니다.\n\n길이가 길고 다양한 문자 종류(대문자/소문자/숫자/기호)를 포함할수록 비밀번호를 추측하거나 무차별 대입 공격(brute force)으로 알아내기 어려워집니다.",
    disclaimer: "생성된 비밀번호는 서버로 전송되지 않고 브라우저 안에서만 생성·표시됩니다. 그래도 공용 컴퓨터나 신뢰할 수 없는 환경에서는 사용에 주의하세요.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "비밀번호 생성은 브라우저에서 처리됩니다.",
    faq: [
      { q: "이 비밀번호 생성기는 안전한가요?", a: "네. Math.random()이 아닌 브라우저의 암호학적으로 안전한 난수 API(crypto.getRandomValues)를 사용하므로 예측이 매우 어렵습니다. 또한 생성된 비밀번호는 서버로 전송되지 않고 브라우저 안에서만 처리됩니다." },
      { q: "유사 문자 제외는 왜 필요한가요?", a: "0(숫자)과 O(알파벳), 1(숫자)과 l(소문자 L)·I(대문자 I)처럼 모양이 비슷한 문자는 수기로 옮겨 적거나 읽을 때 혼동되기 쉽습니다. 이 옵션을 켜면 그런 문자를 제외해 혼동을 줄일 수 있습니다." },
      { q: "비밀번호를 얼마나 길게 만들어야 하나요?", a: "일반적으로 12자 이상을 권장하며, 중요한 계정일수록 16자 이상에 대문자/소문자/숫자/기호를 모두 포함하는 것이 안전합니다." },
    ],
  },
  en: {
    title: "Password Generator",
    subtitle: "Generate secure random passwords",
    inputs: "Enter Information",
    length: "Length",
    charTypes: "Character Types to Include",
    uppercase: "Uppercase (A-Z)",
    lowercase: "Lowercase (a-z)",
    numbers: "Numbers (0-9)",
    symbols: "Symbols (!@#$...)",
    excludeSimilar: "Exclude Similar Characters (0, O, 1, l, I, etc.)",
    count: "Number to Generate (1-100)",
    generate: "Generate",
    result: "Generated Passwords",
    copyAll: "Copy All",
    copy: "Copy",
    copied: "Copied!",
    lengthTip: "Longer passwords are more secure.",
    whyPassword: "How are secure passwords generated?",
    passwordExplanation: "This generator uses the browser's cryptographically secure random number generator (crypto.getRandomValues) to create passwords. This is much harder to predict than general-purpose random functions (like Math.random), making it more suitable for security.\n\nThe longer the password and the more varied the character types (uppercase/lowercase/numbers/symbols) it includes, the harder it becomes to guess or crack via brute-force attacks.",
    disclaimer: "Generated passwords are not sent to any server — they are created and displayed entirely in your browser. Still, be cautious when using public or untrusted computers.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Password generation is processed in your browser.",
    faq: [
      { q: "Is this password generator secure?", a: "Yes. It uses the browser's cryptographically secure random API (crypto.getRandomValues) instead of Math.random(), making it very difficult to predict. Generated passwords are also never sent to a server — everything happens in your browser." },
      { q: "Why would I want to exclude similar characters?", a: "Characters that look alike, like 0 (zero) and O (letter O), or 1 (one) and l (lowercase L) / I (uppercase I), are easy to confuse when copying by hand or reading. Enabling this option removes those characters to reduce confusion." },
      { q: "How long should my password be?", a: "Generally, 12 characters or more is recommended, and for important accounts, 16+ characters including uppercase, lowercase, numbers, and symbols is safer." },
    ],
  },
  ja: {
    title: "パスワード生成機",
    subtitle: "安全なランダムパスワードを生成します",
    inputs: "情報入力",
    length: "長さ",
    charTypes: "含める文字種",
    uppercase: "大文字（A-Z）",
    lowercase: "小文字（a-z）",
    numbers: "数字（0-9）",
    symbols: "記号（!@#$...）",
    excludeSimilar: "類似文字を除外（0、O、1、l、Iなど）",
    count: "生成数（1~100）",
    generate: "生成する",
    result: "生成されたパスワード",
    copyAll: "すべてコピー",
    copy: "コピー",
    copied: "コピーしました！",
    lengthTip: "長いほど安全です。",
    whyPassword: "安全なパスワードはどのように作られますか？",
    passwordExplanation: "本生成機はブラウザの暗号学的に安全な乱数生成機能（crypto.getRandomValues）を使用してパスワードを生成します。一般的な乱数関数（Math.randomなど）より予測が難しく、セキュリティにより適しています。\n\n長さが長く、多様な文字種（大文字/小文字/数字/記号）を含むほど、推測やブルートフォース攻撃で見破られにくくなります。",
    disclaimer: "生成されたパスワードはサーバーに送信されず、ブラウザ内でのみ生成・表示されます。それでも共有コンピューターや信頼できない環境での使用には注意してください。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "パスワード生成はブラウザで処理されます。",
    faq: [
      { q: "このパスワード生成機は安全ですか？", a: "はい。Math.random()ではなくブラウザの暗号学的に安全な乱数API（crypto.getRandomValues）を使用しているため、予測が非常に困難です。また、生成されたパスワードはサーバーに送信されず、ブラウザ内でのみ処理されます。" },
      { q: "類似文字の除外はなぜ必要ですか？", a: "0（数字）とO（アルファベット）、1（数字）とl（小文字のL）・I（大文字のI）のように形が似ている文字は、手で書き写したり読んだりする際に混同しやすいです。このオプションを有効にすると、そうした文字を除外して混乱を減らせます。" },
      { q: "パスワードはどのくらいの長さにすべきですか？", a: "一般的に12文字以上が推奨され、重要なアカウントほど16文字以上で大文字・小文字・数字・記号をすべて含めるのが安全です。" },
    ],
  },
  es: {
    title: "Generador de Contraseñas",
    subtitle: "Genera contraseñas aleatorias seguras",
    inputs: "Ingresa la información",
    length: "Longitud",
    charTypes: "Tipos de Caracteres a Incluir",
    uppercase: "Mayúsculas (A-Z)",
    lowercase: "Minúsculas (a-z)",
    numbers: "Números (0-9)",
    symbols: "Símbolos (!@#$...)",
    excludeSimilar: "Excluir Caracteres Similares (0, O, 1, l, I, etc.)",
    count: "Cantidad a Generar (1-100)",
    generate: "Generar",
    result: "Contraseñas Generadas",
    copyAll: "Copiar Todo",
    copy: "Copiar",
    copied: "¡Copiado!",
    lengthTip: "Las contraseñas más largas son más seguras.",
    whyPassword: "¿Cómo se generan contraseñas seguras?",
    passwordExplanation: "Este generador usa el generador de números aleatorios criptográficamente seguro del navegador (crypto.getRandomValues) para crear contraseñas. Esto es mucho más difícil de predecir que funciones aleatorias de propósito general (como Math.random), haciéndolo más adecuado para la seguridad.\n\nCuanto más larga sea la contraseña y más variados los tipos de caracteres (mayúsculas/minúsculas/números/símbolos) que incluya, más difícil será adivinarla o descifrarla mediante ataques de fuerza bruta.",
    disclaimer: "Las contraseñas generadas no se envían a ningún servidor — se crean y muestran completamente en tu navegador. Aun así, ten precaución al usar computadoras públicas o no confiables.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "La generación de contraseñas se procesa en tu navegador.",
    faq: [
      { q: "¿Es seguro este generador de contraseñas?", a: "Sí. Usa la API aleatoria criptográficamente segura del navegador (crypto.getRandomValues) en lugar de Math.random(), haciéndolo muy difícil de predecir. Las contraseñas generadas tampoco se envían nunca a un servidor — todo ocurre en tu navegador." },
      { q: "¿Por qué querría excluir caracteres similares?", a: "Los caracteres que se parecen, como 0 (cero) y O (letra O), o 1 (uno) y l (ele minúscula) / I (i mayúscula), son fáciles de confundir al copiar a mano o leer. Activar esta opción elimina esos caracteres para reducir la confusión." },
      { q: "¿Qué longitud debería tener mi contraseña?", a: "Generalmente se recomiendan 12 caracteres o más, y para cuentas importantes, 16+ caracteres incluyendo mayúsculas, minúsculas, números y símbolos es más seguro." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
