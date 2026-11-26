// 장기보유특별공제율 계산 (순수 함수 — 화면과 분리해 단독 검증 가능)
// 일반(표1): 보유 3년 이상, 보유 연수 × 2% (최대 30%)
// 1세대 1주택(표2): 보유 3년 이상 + 거주 2년 이상일 때 보유 공제(연 4%, 최대 40%) + 거주 공제(연 4%, 최대 40%)
// 1세대 1주택이어도 거주 2년 미만이면 표1 적용. 연수는 1년 단위로 내림.
export function longTermDeductionRate(holdingYears: number, oneHouse: boolean, residenceYears: number): number {
  const hold = Math.max(0, Number.isFinite(holdingYears) ? holdingYears : 0);
  const h = Math.floor(hold);
  if (h < 3) return 0;
  const res = Math.max(0, Number.isFinite(residenceYears) ? residenceYears : 0);
  const r = Math.floor(Math.min(res, hold));
  if (oneHouse && r >= 2) return Math.min(0.4, h * 0.04) + Math.min(0.4, r * 0.04);
  return Math.min(0.3, h * 0.02);
}
