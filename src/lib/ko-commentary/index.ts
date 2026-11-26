// 도구 id → 한국어 해설 데이터 로더 (필요한 도구 것만 지연 로드).
// 새 도구 해설을 만들면 여기에 한 줄을 추가한다.
import type { Commentary } from "./types";

type Loader = () => Promise<{ default: Commentary }>;

export const koCommentaryLoaders: Record<string, Loader> = {
  "severance-pay-calculator": () => import("./tools/severance-pay-calculator"),
  "salary-net-calculator": () => import("./tools/salary-net-calculator"),
  "loan-amortization-schedule": () => import("./tools/loan-amortization-schedule"),
  "compound-interest-calculator": () => import("./tools/compound-interest-calculator"),
  "savings-maturity-calculator": () => import("./tools/savings-maturity-calculator"),
  "vat-calculator": () => import("./tools/vat-calculator"),
  "deposit-rent-converter": () => import("./tools/deposit-rent-converter"),
  "car-loan-calculator": () => import("./tools/car-loan-calculator"),
  "dti-calculator": () => import("./tools/dti-calculator"),
  "year-end-tax-refund-estimator": () => import("./tools/year-end-tax-refund-estimator"),
  "realty-commission-calculator": () => import("./tools/realty-commission-calculator"),
  "capital-gains-tax-estimator": () => import("./tools/capital-gains-tax-estimator"),
  "gift-tax-estimator": () => import("./tools/gift-tax-estimator"),
  "fixed-deposit-interest": () => import("./tools/fixed-deposit-interest"),
  "age-calculator": () => import("./tools/age-calculator"),
  "bmi": () => import("./tools/bmi"),
  "bmr-calculator": () => import("./tools/bmr-calculator"),
  "tdee": () => import("./tools/tdee"),
  "ovulation": () => import("./tools/ovulation"),
  "pregnancy-week-calculator": () => import("./tools/pregnancy-week-calculator"),
  "moving-cost-estimator": () => import("./tools/moving-cost-estimator"),
  "weight-loss-goal-calculator": () => import("./tools/weight-loss-goal-calculator"),
};
