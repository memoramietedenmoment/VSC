export interface ContactBundlePricing {
  name: string;
  productSlugs: string[];
  originalPrice: number;
  discountedPrice: number;
}

export function getCustomBundlePricing(
  productTotal: number,
  productCount: number
): Pick<ContactBundlePricing, "originalPrice" | "discountedPrice"> | null {
  if (productCount < 3) return null;

  return {
    originalPrice: productTotal,
    discountedPrice: Math.round(productTotal * 0.9),
  };
}

export function getActiveContactBundle(
  selectedSlugs: string[],
  bundles: ContactBundlePricing[]
): ContactBundlePricing | null {
  const uniqueSelectedSlugs = Array.from(new Set(selectedSlugs));

  return (
    bundles.find((bundle) =>
      bundle.productSlugs.every((slug) => uniqueSelectedSlugs.includes(slug))
    ) ?? null
  );
}
