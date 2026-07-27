export interface ContactBundlePricing {
  name: string;
  productSlugs: string[];
  originalPrice: number;
  discountedPrice: number;
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
