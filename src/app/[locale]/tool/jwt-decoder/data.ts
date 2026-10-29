export type Locale = "ko" | "en" | "ja" | "es";

export interface FAQ {
  q: string;
  a: string;
}

export interface I18nData {
  title: string;
  subtitle: string;
  inputs: string;
  tokenInput: string;
  tokenPlaceholder: string;
  decode: string;
  header: string;
  payload: string;
  expValid: string;
  expExpired: string;
  expNone: string;
  verifySection: string;
  verifyHint: string;
  hmacSecretKey: string;
  pemPublicKey: string;
  pemPlaceholder: string;
  verify: string;
  verifyValid: string;
  verifyMismatch: string;
  verifyError: string;
  verifyUnsupported: string;
  invalidToken: string;
  whyJwt: string;
  jwtExplanation: string;
  disclaimer: string;
  footer: string;
  processingMsg: string;
  faq: FAQ[];
}

const i18nData: Record<Locale, I18nData> = {
  ko: {
    title: "JWT 디코더",
    subtitle: "JWT 토큰의 헤더·페이로드를 디코딩하고 서명을 검증합니다",
    inputs: "JWT 토큰",
    tokenInput: "JWT 토큰 입력",
    tokenPlaceholder: "eyJ...으로 시작하는 토큰을 붙여넣으세요",
    decode: "디코딩",
    header: "헤더 (Header)",
    payload: "페이로드 (Payload)",
    expValid: "유효 (만료 전)",
    expExpired: "만료됨",
    expNone: "exp 클레임 없음",
    verifySection: "서명 검증 (선택)",
    verifyHint: "비밀키 또는 공개키를 입력하면 서명을 검증합니다. 입력하지 않으면 디코딩만 수행합니다.",
    hmacSecretKey: "HMAC 비밀키 (HS256/384/512)",
    pemPublicKey: "PEM 공개키 (RS256/ES256)",
    pemPlaceholder: "-----BEGIN PUBLIC KEY----- 로 시작하는 PEM 텍스트",
    verify: "서명 검증",
    verifyValid: "서명이 유효합니다.",
    verifyMismatch: "서명이 일치하지 않습니다.",
    verifyError: "검증 중 오류가 발생했습니다 (키 형식을 확인하세요).",
    verifyUnsupported: "이 알고리즘은 서명 검증을 지원하지 않습니다 (HS256/384/512, RS256, ES256만 지원).",
    invalidToken: "올바른 JWT 형식이 아닙니다 (점(.)으로 구분된 3부분이어야 합니다).",
    whyJwt: "JWT는 어떻게 구성되나요?",
    jwtExplanation: "JWT(JSON Web Token)는 점(.)으로 구분된 3부분(헤더.페이로드.서명)으로 구성됩니다. 헤더와 페이로드는 base64url로 인코딩된 JSON이며, 디코딩만으로는 서명 검증 없이도 내용을 확인할 수 있습니다.\n\n서명은 헤더와 페이로드를 합친 문자열을 비밀키(HMAC 계열) 또는 개인키(RSA/ECDSA 계열)로 서명한 값입니다. 이 도구에서 비밀키(HS256/384/512) 또는 PEM 공개키(RS256/ES256)를 입력하면 Web Crypto API(crypto.subtle)로 서명을 검증합니다.\n\npayload에 exp(만료시각) 클레임이 있으면 현재 시각과 비교해 유효/만료 상태를 표시합니다.",
    disclaimer: "입력한 토큰과 키는 서버로 전송되지 않고 브라우저 안에서만 처리됩니다. 그래도 실제 운영 환경의 비밀키나 민감한 토큰은 신뢰할 수 있는 환경에서만 다루는 것을 권장합니다.",
    footer: "브라우저에서 100% 처리. 서버로 전송되는 데이터가 없습니다.",
    processingMsg: "JWT 디코딩·검증은 브라우저에서 처리됩니다.",
    faq: [
      { q: "서명 검증 없이도 토큰 내용을 볼 수 있나요?", a: "네. 헤더와 페이로드는 단순히 base64url로 인코딩되어 있을 뿐이라 누구나 디코딩해 내용을 볼 수 있습니다. 서명 검증은 그 내용이 변조되지 않았는지, 올바른 키를 가진 발급자가 만들었는지 확인하는 별도의 단계입니다." },
      { q: "어떤 알고리즘의 서명 검증을 지원하나요?", a: "HS256/HS384/HS512(HMAC 비밀키 방식)와 RS256/ES256(공개키 방식)의 서명 검증을 지원합니다. 다른 알고리즘은 디코딩만 가능합니다." },
      { q: "JWT에 비밀번호나 민감 정보를 넣어도 되나요?", a: "권장하지 않습니다. 페이로드는 암호화되지 않고 누구나 디코딩할 수 있으므로, 비밀번호나 주민번호 같은 민감 정보는 JWT에 직접 담지 않아야 합니다." },
    ],
  },
  en: {
    title: "JWT Decoder",
    subtitle: "Decode a JWT token's header and payload, and verify its signature",
    inputs: "JWT Token",
    tokenInput: "Enter JWT Token",
    tokenPlaceholder: "Paste a token starting with eyJ...",
    decode: "Decode",
    header: "Header",
    payload: "Payload",
    expValid: "Valid (not yet expired)",
    expExpired: "Expired",
    expNone: "No exp claim",
    verifySection: "Signature Verification (optional)",
    verifyHint: "Enter a secret key or public key to verify the signature. Without one, only decoding is performed.",
    hmacSecretKey: "HMAC Secret Key (HS256/384/512)",
    pemPublicKey: "PEM Public Key (RS256/ES256)",
    pemPlaceholder: "PEM text starting with -----BEGIN PUBLIC KEY-----",
    verify: "Verify Signature",
    verifyValid: "The signature is valid.",
    verifyMismatch: "The signature does not match.",
    verifyError: "An error occurred during verification (check the key format).",
    verifyUnsupported: "This algorithm does not support signature verification (only HS256/384/512, RS256, and ES256 are supported).",
    invalidToken: "This is not a valid JWT format (must be 3 parts separated by dots).",
    whyJwt: "How is a JWT structured?",
    jwtExplanation: "A JWT (JSON Web Token) consists of 3 parts separated by dots (header.payload.signature). The header and payload are base64url-encoded JSON, so you can view the content just by decoding, without verifying the signature.\n\nThe signature is the header and payload combined, signed with a secret key (HMAC family) or private key (RSA/ECDSA family). Entering a secret key (HS256/384/512) or PEM public key (RS256/ES256) in this tool verifies the signature using the Web Crypto API (crypto.subtle).\n\nIf the payload has an exp (expiration) claim, it is compared to the current time to show whether the token is valid or expired.",
    disclaimer: "The token and key you enter are processed entirely in your browser and never sent to a server. Still, it's recommended to only handle production secret keys or sensitive tokens in a trusted environment.",
    footer: "100% processed in browser. No data is sent to the server.",
    processingMsg: "JWT decoding and verification is processed in your browser.",
    faq: [
      { q: "Can I see the token's content without verifying the signature?", a: "Yes. The header and payload are simply base64url-encoded, so anyone can decode them to view the content. Signature verification is a separate step that confirms the content hasn't been tampered with and was created by an issuer holding the correct key." },
      { q: "Which algorithms are supported for signature verification?", a: "HS256/HS384/HS512 (HMAC secret key method) and RS256/ES256 (public key method) are supported for signature verification. Other algorithms only support decoding." },
      { q: "Can I put passwords or sensitive info in a JWT?", a: "This is not recommended. Since the payload is not encrypted and can be decoded by anyone, sensitive information like passwords or ID numbers should not be placed directly in a JWT." },
    ],
  },
  ja: {
    title: "JWTデコーダー",
    subtitle: "JWTトークンのヘッダー・ペイロードをデコードし、署名を検証します",
    inputs: "JWTトークン",
    tokenInput: "JWTトークンを入力",
    tokenPlaceholder: "eyJ...で始まるトークンを貼り付けてください",
    decode: "デコード",
    header: "ヘッダー",
    payload: "ペイロード",
    expValid: "有効（期限前）",
    expExpired: "期限切れ",
    expNone: "expクレームなし",
    verifySection: "署名検証（任意）",
    verifyHint: "秘密鍵または公開鍵を入力すると署名を検証します。入力しない場合はデコードのみ行います。",
    hmacSecretKey: "HMAC秘密鍵（HS256/384/512）",
    pemPublicKey: "PEM公開鍵（RS256/ES256）",
    pemPlaceholder: "-----BEGIN PUBLIC KEY----- で始まるPEMテキスト",
    verify: "署名検証",
    verifyValid: "署名は有効です。",
    verifyMismatch: "署名が一致しません。",
    verifyError: "検証中にエラーが発生しました（鍵の形式を確認してください）。",
    verifyUnsupported: "このアルゴリズムは署名検証をサポートしていません（HS256/384/512、RS256、ES256のみサポート）。",
    invalidToken: "正しいJWT形式ではありません（ドット(.)で区切られた3部分である必要があります）。",
    whyJwt: "JWTはどのように構成されますか？",
    jwtExplanation: "JWT（JSON Web Token）はドット(.)で区切られた3部分（ヘッダー.ペイロード.署名）で構成されます。ヘッダーとペイロードはbase64urlでエンコードされたJSONで、署名検証なしでもデコードだけで内容を確認できます。\n\n署名はヘッダーとペイロードを結合した文字列を秘密鍵（HMAC系）または秘密鍵（RSA/ECDSA系）で署名した値です。このツールで秘密鍵（HS256/384/512）またはPEM公開鍵（RS256/ES256）を入力すると、Web Crypto API（crypto.subtle）で署名を検証します。\n\npayloadにexp（期限）クレームがある場合、現在時刻と比較して有効/期限切れの状態を表示します。",
    disclaimer: "入力したトークンと鍵はサーバーに送信されず、ブラウザ内でのみ処理されます。それでも実際の運用環境の秘密鍵や機密トークンは信頼できる環境でのみ扱うことをお勧めします。",
    footer: "ブラウザで100％処理されます。サーバーに送信されるデータはありません。",
    processingMsg: "JWTのデコード・検証はブラウザで処理されます。",
    faq: [
      { q: "署名検証なしでもトークンの内容を見られますか？", a: "はい。ヘッダーとペイロードは単にbase64urlでエンコードされているだけなので、誰でもデコードして内容を見ることができます。署名検証はその内容が改ざんされていないか、正しい鍵を持つ発行者が作成したかを確認する別の段階です。" },
      { q: "どのアルゴリズムの署名検証をサポートしますか？", a: "HS256/HS384/HS512（HMAC秘密鍵方式）とRS256/ES256（公開鍵方式）の署名検証をサポートします。他のアルゴリズムはデコードのみ可能です。" },
      { q: "JWTにパスワードや機密情報を入れてもいいですか？", a: "推奨されません。ペイロードは暗号化されておらず誰でもデコードできるため、パスワードやID番号のような機密情報はJWTに直接含めるべきではありません。" },
    ],
  },
  es: {
    title: "Decodificador de JWT",
    subtitle: "Decodifica el encabezado y carga útil de un token JWT, y verifica su firma",
    inputs: "Token JWT",
    tokenInput: "Ingresa el Token JWT",
    tokenPlaceholder: "Pega un token que empiece con eyJ...",
    decode: "Decodificar",
    header: "Encabezado",
    payload: "Carga Útil",
    expValid: "Válido (aún no expirado)",
    expExpired: "Expirado",
    expNone: "Sin reclamo exp",
    verifySection: "Verificación de Firma (opcional)",
    verifyHint: "Ingresa una clave secreta o pública para verificar la firma. Sin ella, solo se realiza la decodificación.",
    hmacSecretKey: "Clave Secreta HMAC (HS256/384/512)",
    pemPublicKey: "Clave Pública PEM (RS256/ES256)",
    pemPlaceholder: "Texto PEM que empieza con -----BEGIN PUBLIC KEY-----",
    verify: "Verificar Firma",
    verifyValid: "La firma es válida.",
    verifyMismatch: "La firma no coincide.",
    verifyError: "Ocurrió un error durante la verificación (verifica el formato de la clave).",
    verifyUnsupported: "Este algoritmo no soporta verificación de firma (solo se soportan HS256/384/512, RS256 y ES256).",
    invalidToken: "Este no es un formato JWT válido (debe tener 3 partes separadas por puntos).",
    whyJwt: "¿Cómo se estructura un JWT?",
    jwtExplanation: "Un JWT (JSON Web Token) consta de 3 partes separadas por puntos (encabezado.carga útil.firma). El encabezado y la carga útil son JSON codificado en base64url, así que puedes ver el contenido solo decodificando, sin verificar la firma.\n\nLa firma es el encabezado y la carga útil combinados, firmados con una clave secreta (familia HMAC) o clave privada (familia RSA/ECDSA). Ingresar una clave secreta (HS256/384/512) o clave pública PEM (RS256/ES256) en esta herramienta verifica la firma usando la API Web Crypto (crypto.subtle).\n\nSi la carga útil tiene un reclamo exp (expiración), se compara con la hora actual para mostrar si el token es válido o ha expirado.",
    disclaimer: "El token y la clave que ingresas se procesan completamente en tu navegador y nunca se envían a un servidor. Aun así, se recomienda manejar claves secretas de producción o tokens sensibles solo en un entorno de confianza.",
    footer: "100% procesado en el navegador. No se envían datos al servidor.",
    processingMsg: "La decodificación y verificación de JWT se procesa en tu navegador.",
    faq: [
      { q: "¿Puedo ver el contenido del token sin verificar la firma?", a: "Sí. El encabezado y la carga útil simplemente están codificados en base64url, así que cualquiera puede decodificarlos para ver el contenido. La verificación de firma es un paso separado que confirma que el contenido no ha sido alterado y fue creado por un emisor con la clave correcta." },
      { q: "¿Qué algoritmos se soportan para la verificación de firma?", a: "Se soportan HS256/HS384/HS512 (método de clave secreta HMAC) y RS256/ES256 (método de clave pública) para la verificación de firma. Otros algoritmos solo soportan decodificación." },
      { q: "¿Puedo poner contraseñas o información sensible en un JWT?", a: "No se recomienda. Como la carga útil no está encriptada y cualquiera puede decodificarla, información sensible como contraseñas o números de identificación no debe colocarse directamente en un JWT." },
    ],
  },
};

export function i18n(locale: Locale): I18nData {
  return i18nData[locale] ?? i18nData.ko;
}
