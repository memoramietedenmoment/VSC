import { describe, expect, it } from "vitest";
import { getActiveContactBundle } from "./contact-bundles";

describe("getActiveContactBundle", () => {
  it("returns a bundle when all bundle products are selected, even with extras", () => {
    const bundles = [
      {
        name: "Das Hochzeits-Paket",
        productSlugs: ["fotospiegel-glow", "audio-gaestebuch-vivi", "sofortbildkamera-dior"],
        originalPrice: 527,
        discountedPrice: 475,
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
});
