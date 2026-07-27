import { describe, expect, it } from "vitest";
import { getDeliveryCostForSelection } from "./delivery";

describe("getDeliveryCostForSelection", () => {
  it("returns 25 euro for a single special device", () => {
    expect(getDeliveryCostForSelection(["Audio-Gästebuch VIVI"])).toBe(25);
  });

  it("returns 50 euro when both special devices are selected", () => {
    expect(
      getDeliveryCostForSelection(["Audio-Gästebuch VIVI", "Sofortbildkamera DIOR"])
    ).toBe(50);
  });

  it("falls back to normal radius pricing when another product is selected", () => {
    expect(getDeliveryCostForSelection(["Audio-Gästebuch VIVI", "Fotospiegel GLOW"])).toBeNull();
  });
});
