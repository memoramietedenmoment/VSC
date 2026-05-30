import { useEffect, useState } from "react";

const STORAGE_KEY = "memora_ga_cookie_consent";
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

// Debug log
if (typeof window !== "undefined") {
  console.log("[CookieConsent] GA_MEASUREMENT_ID:", GA_MEASUREMENT_ID);
}

function disableGoogleAnalytics(measurementId: string) {
  const disableKey = `ga-disable-${measurementId}`;
  (window as any)[disableKey] = true;
}

function loadGoogleAnalytics(measurementId: string) {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.id = "ga-script";
  document.head.appendChild(script);

  const inline = document.createElement("script");
  inline.id = "ga-inline";
  inline.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const storedValue = window.localStorage.getItem(STORAGE_KEY) as "accepted" | "declined" | null;
    setConsent(storedValue);

    if (storedValue === "accepted") {
      disableGoogleAnalytics(GA_MEASUREMENT_ID);
      (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      loadGoogleAnalytics(GA_MEASUREMENT_ID);
    } else if (storedValue === "declined") {
      disableGoogleAnalytics(GA_MEASUREMENT_ID);
    } else {
      setIsBannerVisible(true);
      disableGoogleAnalytics(GA_MEASUREMENT_ID);
    }
  }, []);

  const handleAccept = () => {
    if (!GA_MEASUREMENT_ID) return;

    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setIsBannerVisible(false);
    (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    loadGoogleAnalytics(GA_MEASUREMENT_ID);
  };

  const handleDecline = () => {
    if (!GA_MEASUREMENT_ID) return;

    window.localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
    setIsBannerVisible(false);
    disableGoogleAnalytics(GA_MEASUREMENT_ID);
  };

  if (!GA_MEASUREMENT_ID || !isBannerVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-[oklch(0.12_0.06_155)] border-t border-white/10 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl text-sm leading-relaxed text-white/90">
          <p className="font-semibold text-white">Wir verwenden Google Analytics</p>
          <p>
            Um diese Website zu verbessern, nutzen wir Google Analytics. Bitte gib deine Einwilligung, damit wir das Nutzerverhalten anonymisiert auswerten können. Weitere Infos findest du in unserer <a href="/datenschutz" className="underline text-white">Datenschutzerklärung</a>.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Nur notwendige Cookies
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
