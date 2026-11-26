// 두 날짜(early ≤ late)의 차이를 년·개월·일로 나눈다.
// 시작일에 개월 수를 더한 기준일(해당 월에 그 날짜가 없으면 말일)에서 종료일까지 남은 일수를 일(day)로 센다.
// 이렇게 하면 월말 시작일(예: 1월 31일 → 3월 1일)에서도 일수가 음수가 되지 않는다.
export function diffYMD(early: Date, late: Date): { y: number; m: number; dd: number } {
  let months =
    (late.getFullYear() - early.getFullYear()) * 12 + (late.getMonth() - early.getMonth());
  if (late.getDate() < early.getDate()) months -= 1;
  if (months < 0) months = 0;

  // 기준일 = early + months개월 (말일 보정)
  const baseYear = early.getFullYear() + Math.floor((early.getMonth() + months) / 12);
  const baseMonth = (early.getMonth() + months) % 12;
  const lastDay = new Date(baseYear, baseMonth + 1, 0).getDate();
  const base = new Date(baseYear, baseMonth, Math.min(early.getDate(), lastDay));

  const dd = Math.max(0, Math.round((late.getTime() - base.getTime()) / 86400000));
  return { y: Math.floor(months / 12), m: months % 12, dd };
}
