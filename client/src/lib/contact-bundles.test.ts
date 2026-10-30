import { describe, expect, it } from "vitest";
import { getActiveContactBundle, getCustomBundlePricing } from "./contact-bundles";

describe("getActiveContactBundle", () => {
  it("returns a bundle when all bundle products are selected, even with extras", () => {
    const bundles = [
      {
        name: "Das Hochzeits-Paket",
        productSlugs: ["fotospiegel-glow", "audio-gaestebuch-vivi", "sofortbildkamera-dior"],
        originalPrice: 657,
        discountedPrice: 591,
      },
    ];

    expect(getActiveContactBundle(["fotospiegel-glow", "audio-gaestebuch-vivi"], bundles)).toBeNull();
    expect(
      getActiveContactBundle(
        ["fotospiegel-glow", "audio-gaestebuch-vivi", "sofortbildkamera-dior", "popcornmaschine-keno"],
        bundles
      )?.name
    ).toBe("Das Hochzeits-Paket");
  });

  describe("getCustomBundlePricing", () => {
    it("applies a 10% discount starting at three selected products", () => {
      expect(getCustomBundlePricing(300, 2)).toBeNull();
      expect(getCustomBundlePricing(300, 3)).toEqual({
        originalPrice: 300,
        discountedPrice: 270,
      });
    });

    it("rounds the discounted total to whole euros", () => {
      expect(getCustomBundlePricing(217, 3)?.discountedPrice).toBe(195);
    });
  });
});
