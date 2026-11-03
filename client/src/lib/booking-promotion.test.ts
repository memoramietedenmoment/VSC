import { describe, expect, it } from "vitest";
import {
  calculateBookingPromotion,
  isBookingPromotionActive,
} from "./booking-promotion";

describe("booking promotion", () => {
  it("is active through December 31, 2026 and expires on January 1, 2027", () => {
    expect(isBookingPromotionActive(new Date(2026, 11, 31, 23, 59, 59))).toBe(true);
    expect(isBookingPromotionActive(new Date(2027, 0, 1))).toBe(false);
  });

  it("calculates 10 percent on the full subtotal, including delivery", () => {
    expect(calculateBookingPromotion(125)).toEqual({
      subtotal: 125,
      discount: 12.5,
      total: 112.5,
    });
  });
});
