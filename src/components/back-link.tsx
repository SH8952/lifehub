import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * 상위 페이지로 돌아가는 버튼.
 * 브라우저 기록이 아니라 고정된 상위 페이지로 이동한다(홈 → /, 카테고리 → /category/<id>).
 * 도구 페이지는 해당 도구가 속한 카테고리 목록으로, 그 밖의 페이지는 홈으로 돌아간다.
 */
export function BackLink({
  to,
  categoryId,
  className = "",
}: {
  to: "home" | "category";
  categoryId?: string;
  className?: string;
}) {
  const t = useTranslations("BackNav");
  const isCategory = to === "category" && categoryId;
  return (
    <Link
      href={isCategory ? `/category/${categoryId}` : "/"}
      className={`inline-block text-sm text-muted-foreground hover:text-foreground ${className}`.trim()}
    >
      {isCategory ? t("toCategory") : t("toHome")}
    </Link>
  );
}
