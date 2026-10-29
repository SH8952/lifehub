export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  textInput: string;
  hmacKey: string;
  hmacKeyPlaceholder: string;
  calculate: string;
  result: string;
  hmacResult: string;
  copy: string;
  copied: string;
  whyHash: string;
  hashExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "해시 생성기",
    subtitle: "텍스트의 MD5/SHA-1/SHA-256/SHA-384/SHA-512 해시값과 HMAC을 계산합니다",
    inputs: "정보 입력",
    textInput: "텍스트 입력",
    hmacKey: "HMAC 비밀키 (선택)",
    hmacKeyPlaceholder: "입력 시 HMAC 결과도 함께 표시됩니다",
    calculate: "계산하기",
    result: "해시 결과",
    hmacResult: "HMAC 결과",
    copy: "복사",
    copied: "복사됨!",
    whyHash: "해시는 어떻게 계산하나요?",
    hashExplanation: "SHA-1/SHA-256/SHA-384/SHA-512는 브라우저에 내장된 Web Crypto API(crypto.subtle.digest)를 사용해 계산합니다. MD5는 Web Crypto API가 지원하지 않아 순수 자바스크립트로 직접 구현한 알고리즘을 사용합니다.\n\nHMAC(해시 기반 메시지 인증 코드)은 비밀키를 입력하면 crypto.subtle.importKey와 sign 기능을 이용해 SHA-1/256/384/512 알고리즘으로 계산됩니다. HMAC은 비밀키를 아는 두 당사자만 동일한 결과를 확인할 수 있어, 메시지의 위변조 여부를 검증하는 데 사용됩니다.",
    disclaimer: "입력한 텍스트와 비밀키는 서버로 전송되지 않고 브라우저 안에서만 처리됩니다. 다만 MD5와 SHA-1은 보안 취약점이 알려져 있어 암호화 용도보다는 체크섬(무결성 검증) 용도로만 사용하는 것을 권장합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "해시 계산은 브라우저에서 처리됩니다.",
    faq: [
      { q: "MD5와 SHA-1은 왜 보안에 취약하다고 하나요?", a: "MD5와 SHA-1은 서로 다른 입력이 같은 해시값을 만들어내는 '충돌'을 찾아내는 공격 방법이 알려져 있어, 비밀번호 저장이나 전자서명 등 보안이 중요한 용도에는 더 이상 권장되지 않습니다. 다만 파일 무결성 체크 같은 단순 용도에는 여전히 널리 쓰입니다." },
      { q: "HMAC과 일반 해시는 어떻게 다른가요?", a: "일반 해시는 누구나 같은 입력으로 같은 결과를 얻을 수 있지만, HMAC은 비밀키를 함께 사용하므로 그 키를 모르는 사람은 올바른 HMAC 값을 만들어낼 수 없습니다. 이 때문에 메시지가 특정 키를 가진 당사자에 의해 생성되었는지 검증하는 데 사용됩니다." },
      { q: "SHA-256은 어디에 주로 사용되나요?", a: "비트코인 등 블록체인, 디지털 서명, 파일 체크섬, 비밀번호 해싱(추가 보안 기법과 함께) 등 다양한 분야에서 현재 가장 널리 사용되는 안전한 해시 알고리즘 중 하나입니다." },
    ],
  },
  en: {
    title: "Hash Generator",
    subtitle: "Calculate MD5/SHA-1/SHA-256/SHA-384/SHA-512 hashes and HMAC for text",
    inputs: "Enter Information",
    textInput: "Text Input",
    hmacKey: "HMAC Secret Key (optional)",
    hmacKeyPlaceholder: "Enter a key to also show HMAC results",
    calculate: "Calculate",
    result: "Hash Results",
    hmacResult: "HMAC Results",
    copy: "Copy",
    copied: "Copied!",
    whyHash: "How are hashes calculated?",
    hashExplanation: "SHA-1/SHA-256/SHA-384/SHA-512 are calculated using the browser's built-in Web Crypto API (crypto.subtle.digest). Since Web Crypto doesn't support MD5, a pure JavaScript implementation of the algorithm is used instead.\n\nHMAC (Hash-based Message Authentication Code), when a secret key is entered, is calculated using crypto.subtle.importKey and sign with SHA-1/256/384/512 algorithms. Only parties who know the secret key can produce or verify the same HMAC result, making it useful for verifying message integrity and authenticity.",
    disclaimer: "The text and secret key you enter are processed entirely in your browser and never sent to a server. Note that MD5 and SHA-1 have known security weaknesses, so they are recommended only for checksums (integrity checks) rather than cryptographic security purposes.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "Hash calculation is processed in your browser.",
    faq: [
      { q: "Why are MD5 and SHA-1 considered insecure?", a: "Known attack methods exist for finding 'collisions' — different inputs that produce the same hash — for MD5 and SHA-1, so they are no longer recommended for security-sensitive uses like password storage or digital signatures. They are still widely used for simpler purposes like file integrity checks." },
      { q: "How is HMAC different from a regular hash?", a: "A regular hash gives the same result for the same input to anyone, but HMAC also uses a secret key, so someone without that key cannot produce the correct HMAC value. This is used to verify that a message was created by a party holding a specific key." },
      { q: "Where is SHA-256 commonly used?", a: "It's one of the most widely used secure hash algorithms today, used in blockchain (like Bitcoin), digital signatures, file checksums, and password hashing (combined with additional security techniques)." },
    ],
  },
  ja: {
    title: "ハッシュ生成機",
    subtitle: "テキストのMD5/SHA-1/SHA-256/SHA-384/SHA-512ハッシュ値とHMACを計算します",
    inputs: "情報入力",
    textInput: "テキスト入力",
    hmacKey: "HMAC秘密鍵（任意）",
    hmacKeyPlaceholder: "入力するとHMAC結果も表示されます",
    calculate: "計算する",
    result: "ハッシュ結果",
    hmacResult: "HMAC結果",
    copy: "コピー",
    copied: "コピーしました！",
    whyHash: "ハッシュはどのように計算しますか？",
    hashExplanation: "SHA-1/SHA-256/SHA-384/SHA-512はブラウザに内蔵されたWeb Crypto API（crypto.subtle.digest）を使用して計算します。MD5はWeb Crypto APIがサポートしていないため、純粋なJavaScriptで直接実装したアルゴリズムを使用します。\n\nHMAC（ハッシュベースのメッセージ認証コード）は秘密鍵を入力すると、crypto.subtle.importKeyとsign機能を利用してSHA-1/256/384/512アルゴリズムで計算されます。HMACは秘密鍵を知っている当事者のみが同じ結果を確認できるため、メッセージの改ざんの有無を検証するために使用されます。",
    disclaimer: "入力したテキストと秘密鍵はサーバーに送信されず、ブラウザ内でのみ処理されます。ただしMD5とSHA-1はセキュリティ上の脆弱性が知られているため、暗号化用途よりはチェックサム（整合性検証）用途にのみ使用することをお勧めします。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "ハッシュ計算はブラウザで処理されます。",
    faq: [
      { q: "MD5とSHA-1はなぜセキュリティに脆弱だと言われますか？", a: "MD5とSHA-1は異なる入力が同じハッシュ値を生成する「衝突」を見つける攻撃方法が知られているため、パスワード保存や電子署名などセキュリティが重要な用途にはもはや推奨されません。ただしファイル整合性チェックなどの単純な用途には依然として広く使われています。" },
      { q: "HMACと一般的なハッシュはどう違いますか？", a: "一般的なハッシュは誰でも同じ入力で同じ結果が得られますが、HMACは秘密鍵も一緒に使用するため、その鍵を知らない人は正しいHMAC値を生成できません。このためメッセージが特定の鍵を持つ当事者によって生成されたかを検証するために使用されます。" },
      { q: "SHA-256は主にどこで使われますか？", a: "ビットコインなどのブロックチェーン、電子署名、ファイルチェックサム、パスワードハッシング（追加のセキュリティ技術と併用）など、様々な分野で現在最も広く使われている安全なハッシュアルゴリズムの一つです。" },
    ],
  },
  es: {
    title: "Generador de Hash",
    subtitle: "Calcula hashes MD5/SHA-1/SHA-256/SHA-384/SHA-512 y HMAC para texto",
    inputs: "Ingresa la información",
    textInput: "Entrada de Texto",
    hmacKey: "Clave Secreta HMAC (opcional)",
    hmacKeyPlaceholder: "Ingresa una clave para también mostrar resultados HMAC",
    calculate: "Calcular",
    result: "Resultados de Hash",
    hmacResult: "Resultados HMAC",
    copy: "Copiar",
    copied: "¡Copiado!",
    whyHash: "¿Cómo se calculan los hashes?",
    hashExplanation: "SHA-1/SHA-256/SHA-384/SHA-512 se calculan usando la API Web Crypto integrada del navegador (crypto.subtle.digest). Como Web Crypto no soporta MD5, se usa una implementación en JavaScript puro del algoritmo.\n\nHMAC (Código de Autenticación de Mensajes basado en Hash), cuando se ingresa una clave secreta, se calcula usando crypto.subtle.importKey y sign con algoritmos SHA-1/256/384/512. Solo las partes que conocen la clave secreta pueden producir o verificar el mismo resultado HMAC, lo que lo hace útil para verificar la integridad y autenticidad del mensaje.",
    disclaimer: "El texto y la clave secreta que ingresas se procesan completamente en tu navegador y nunca se envían a un servidor. Ten en cuenta que MD5 y SHA-1 tienen debilidades de seguridad conocidas, por lo que se recomiendan solo para checksums (verificaciones de integridad) en lugar de propósitos de seguridad criptográfica.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "El cálculo de hash se procesa en tu navegador.",
    faq: [
      { q: "¿Por qué se considera que MD5 y SHA-1 son inseguros?", a: "Existen métodos de ataque conocidos para encontrar 'colisiones' — entradas diferentes que producen el mismo hash — para MD5 y SHA-1, por lo que ya no se recomiendan para usos sensibles a la seguridad como el almacenamiento de contraseñas o firmas digitales. Todavía se usan ampliamente para propósitos más simples como verificaciones de integridad de archivos." },
      { q: "¿En qué se diferencia HMAC de un hash regular?", a: "Un hash regular da el mismo resultado para la misma entrada a cualquiera, pero HMAC también usa una clave secreta, por lo que alguien sin esa clave no puede producir el valor HMAC correcto. Esto se usa para verificar que un mensaje fue creado por una parte que posee una clave específica." },
      { q: "¿Dónde se usa comúnmente SHA-256?", a: "Es uno de los algoritmos de hash seguros más utilizados hoy en día, usado en blockchain (como Bitcoin), firmas digitales, checksums de archivos y hashing de contraseñas (combinado con técnicas de seguridad adicionales)." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
