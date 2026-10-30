interface Coordinates {
  lat: number;
  lng: number;
}

export async function getDrivingDistanceKm(
  origin: Coordinates,
  destination: Coordinates
): Promise<number> {
  const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=false`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Driving route request failed: ${response.status}`);
  }

  const data: unknown = await response.json();
  if (
    typeof data !== "object" ||
    data === null ||
    !("code" in data) ||
    data.code !== "Ok" ||
    !("routes" in data) ||
    !Array.isArray(data.routes)
  ) {
    throw new Error("Driving route response did not contain a route");
  }

  const distanceMeters = data.routes[0]?.distance;
  if (
    typeof distanceMeters !== "number" ||
    !Number.isFinite(distanceMeters) ||
    distanceMeters < 0
  ) {
    throw new Error("Driving route response contained an invalid distance");
  }

  return distanceMeters / 1000;
}
