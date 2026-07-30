export const PHOTO_MIRROR_SLUG = "fotospiegel-glow";

export function isDeliveryPlzValid(deliveryPlz: string, selfPickup: boolean): boolean {
  if (selfPickup) {
    return true;
  }

  return deliveryPlz.length === 5;
}

export function getSelfPickupHint(isPhotoMirrorSelected: boolean): string | null {
  if (!isPhotoMirrorSelected) {
    return null;
  }

  return "Beim Fotospiegel ist keine Selbstabholung möglich.";
}
