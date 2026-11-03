export const BOOKING_PROMOTION_END_DATE = "31.12.2026";

export function isBookingPromotionActive(now = new Date()): boolean {
  return now < new Date(2027, 0, 1);
}

export function calculateBookingPromotion(subtotal: number) {
  const subtotalInCents = Math.round(subtotal * 100);
  const discountInCents = Math.round(subtotalInCents * 0.1);

  return {
    subtotal: subtotalInCents / 100,
    discount: discountInCents / 100,
    total: (subtotalInCents - discountInCents) / 100,
  };
}

export function formatPromotionPrice(price: number): string {
  return `${new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)} €`;
}
