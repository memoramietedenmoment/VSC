import { afterEach, describe, expect, it, vi } from "vitest";
import { getDrivingDistanceKm } from "./delivery-routing";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("getDrivingDistanceKm", () => {
  it("uses the OSRM driving route and converts meters to kilometers", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ code: "Ok", routes: [{ distance: 52500 }] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      getDrivingDistanceKm(
        { lat: 48.8025, lng: 8.3336 },
        { lat: 49.0069, lng: 8.4037 }
      )
    ).resolves.toBe(52.5);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://router.project-osrm.org/route/v1/driving/8.3336,48.8025;8.4037,49.0069?overview=false"
    );
  });

  it("rejects unsuccessful route requests", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503 }));

    await expect(
      getDrivingDistanceKm(
        { lat: 48.8025, lng: 8.3336 },
        { lat: 49.0069, lng: 8.4037 }
      )
    ).rejects.toThrow("Driving route request failed: 503");
  });
});
