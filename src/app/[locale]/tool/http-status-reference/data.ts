export type Locale = "ko" | "en" | "ja" | "es";

export interface FaqItem {
  q: string;
  a: string;
}

export interface i18nData {
  title: string;
  subtitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  cat1xx: string;
  cat2xx: string;
  cat3xx: string;
  cat4xx: string;
  cat5xx: string;
  noResults: string;
  howTitle: string;
  howSteps: string[];
  faq: FaqItem[];
  footer: string;
}

export const data: Record<Locale, i18nData> = {
  ko: {
    title: "HTTP 상태 코드 참조표",
    subtitle: "자주 쓰는 HTTP 상태 코드와 의미를 검색하고 카테고리별로 확인합니다.",
    searchLabel: "코드 또는 설명 검색",
    searchPlaceholder: "예: 404, Not Found",
    cat1xx: "1xx 정보 응답",
    cat2xx: "2xx 성공",
    cat3xx: "3xx 리다이렉션",
    cat4xx: "4xx 클라이언트 오류",
    cat5xx: "5xx 서버 오류",
    noResults: "검색 결과가 없습니다.",
    howTitle: "사용 방법",
    howSteps: [
      "검색창에 상태 코드 번호나 키워드를 입력합니다.",
      "카테고리별로 정리된 코드 목록을 훑어봅니다.",
      "API 디버깅이나 로그 분석 시 빠르게 의미를 확인하세요.",
    ],
    faq: [
      { q: "418 같은 특이한 코드도 있나요?", a: "네, 'I'm a teapot' 같은 농담성 코드를 포함해 IANA에 공식 등록된 다양한 상태 코드를 다루고 있습니다." },
      { q: "가장 자주 보게 되는 코드는 무엇인가요?", a: "200(성공), 301/302(리다이렉션), 400/401/403/404(클라이언트 오류), 500/502/503(서버 오류)이 실무에서 가장 흔하게 마주치는 코드입니다." },
    ],
    footer: "모든 처리는 로컬에서 즉시 이루어집니다.",
  },
  en: {
    title: "HTTP Status Code Reference",
    subtitle: "Search and browse common HTTP status codes and their meanings by category.",
    searchLabel: "Search code or description",
    searchPlaceholder: "e.g. 404, Not Found",
    cat1xx: "1xx Informational",
    cat2xx: "2xx Success",
    cat3xx: "3xx Redirection",
    cat4xx: "4xx Client Error",
    cat5xx: "5xx Server Error",
    noResults: "No results found.",
    howTitle: "How to Use",
    howSteps: [
      "Type a status code number or keyword into the search box.",
      "Browse the list organized by category.",
      "Quickly check meanings while debugging APIs or reading logs.",
    ],
    faq: [
      { q: "Are unusual codes like 418 included?", a: "Yes, including the joke code 'I'm a teapot', we cover the various status codes officially registered with IANA." },
      { q: "What are the most commonly seen codes?", a: "200 (success), 301/302 (redirection), 400/401/403/404 (client errors), and 500/502/503 (server errors) are the ones you'll encounter most often." },
    ],
    footer: "All processing happens instantly, locally in your browser.",
  },
  ja: {
    title: "HTTPステータスコード参照表",
    subtitle: "よく使うHTTPステータスコードとその意味を検索・カテゴリ別に確認します。",
    searchLabel: "コードまたは説明を検索",
    searchPlaceholder: "例：404、Not Found",
    cat1xx: "1xx 情報レスポンス",
    cat2xx: "2xx 成功",
    cat3xx: "3xx リダイレクト",
    cat4xx: "4xx クライアントエラー",
    cat5xx: "5xx サーバーエラー",
    noResults: "検索結果がありません。",
    howTitle: "使用方法",
    howSteps: [
      "検索欄にステータスコード番号やキーワードを入力します。",
      "カテゴリ別に整理されたコード一覧を確認します。",
      "APIデバッグやログ分析時に意味をすぐ確認しましょう。",
    ],
    faq: [
      { q: "418のような珍しいコードもありますか？", a: "はい、「I'm a teapot」のようなジョークコードを含め、IANAに公式登録された様々なステータスコードを扱っています。" },
      { q: "最もよく見るコードは何ですか？", a: "200（成功）、301/302（リダイレクト）、400/401/403/404（クライアントエラー）、500/502/503（サーバーエラー）が実務で最も頻繁に遭遇するコードです。" },
    ],
    footer: "すべての処理はローカルで即座に行われます。",
  },
  es: {
    title: "Referencia de Códigos de Estado HTTP",
    subtitle: "Busca y explora los códigos de estado HTTP comunes y su significado por categoría.",
    searchLabel: "Buscar código o descripción",
    searchPlaceholder: "ej: 404, Not Found",
    cat1xx: "1xx Informativo",
    cat2xx: "2xx Éxito",
    cat3xx: "3xx Redirección",
    cat4xx: "4xx Error del Cliente",
    cat5xx: "5xx Error del Servidor",
    noResults: "No se encontraron resultados.",
    howTitle: "Cómo Usar",
    howSteps: [
      "Escribe un número de código o palabra clave en el buscador.",
      "Explora la lista organizada por categoría.",
      "Verifica rápidamente los significados al depurar APIs o leer logs.",
    ],
    faq: [
      { q: "¿Se incluyen códigos inusuales como 418?", a: "Sí, incluyendo el código de broma 'I'm a teapot', cubrimos los diversos códigos de estado registrados oficialmente en IANA." },
      { q: "¿Cuáles son los códigos más comunes?", a: "200 (éxito), 301/302 (redirección), 400/401/403/404 (errores del cliente) y 500/502/503 (errores del servidor) son los más frecuentes." },
    ],
    footer: "Todo el procesamiento ocurre instantáneamente, de forma local.",
  },
};
