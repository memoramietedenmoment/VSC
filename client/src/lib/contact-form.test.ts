import { describe, expect, it } from "vitest";
import { getSelfPickupHint, isDeliveryPlzValid } from "./contact-form";

describe("contact form delivery validation", () => {
  it("allows an empty delivery field when self pickup is selected", () => {
    expect(isDeliveryPlzValid("", true)).toBe(true);
  });

  it("requires a five-digit delivery field when self pickup is not selected", () => {
    expect(isDeliveryPlzValid("", false)).toBe(false);
    expect(isDeliveryPlzValid("76131", false)).toBe(true);
  });

  it("shows a notice when self pickup is not possible for the photo mirror", () => {
    expect(getSelfPickupHint(true)).toBe("Beim Fotospiegel ist keine Selbstabholung möglich.");
    expect(getSelfPickupHint(false)).toBeNull();
  });
});
