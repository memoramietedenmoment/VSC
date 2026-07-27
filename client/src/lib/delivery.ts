const SPECIAL_DELIVERY_PRODUCT_NAMES = new Set([
  "Audio-Gästebuch VIVI",
  "Sofortbildkamera DIOR",
]);

const SPECIAL_DELIVERY_FLAT_RATE = 25;
const SPECIAL_DELIVERY_COMBINED_RATE = 50;

export function getDeliveryCostForSelection(selectedProductNames: string[]): number | null {
  const matchingSpecialProducts = selectedProductNames.filter((name) =>
    SPECIAL_DELIVERY_PRODUCT_NAMES.has(name)
  );

  if (matchingSpecialProducts.length === 0) {
    return null;
  }

  const hasOnlySpecialProducts = selectedProductNames.length === matchingSpecialProducts.length;
  if (!hasOnlySpecialProducts) {
    return null;
  }

  if (matchingSpecialProducts.length === 1) {
    return SPECIAL_DELIVERY_FLAT_RATE;
  }

  return SPECIAL_DELIVERY_COMBINED_RATE;
}
