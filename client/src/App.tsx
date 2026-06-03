import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieConsent from "./components/CookieConsent";
import AGB from "./pages/AGB";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import ProductDetail from "./pages/ProductDetail";

// Disable browser's native scroll restoration so we control it entirely
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const scrollPositions: Record<string, number> = {};

// Routen die immer oben starten
const ALWAYS_TOP = ["/impressum", "/datenschutz", "/agb"];

function ScrollManager() {
  const [location] = useLocation();
  const prevLocation = useRef(location);
  const isBack = useRef(false);
  const isMobileRef = useRef(false);
  const lastBackTime = useRef(0);

  // Dynamische Mobile Detection - wird bei Resize aktualisiert
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle fragment identifier scrolling - but not immediately after back button
  useEffect(() => {
    const now = Date.now();
    // Don't process fragments if we just handled a back button (within 200ms)
    if (now - lastBackTime.current < 200) {
      return;
    }

    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove the '#'
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [location]); // Trigger on location changes to catch hash changes

  const getSavedScroll = (path: string) => {
    const inMemory = scrollPositions[path];
    if (inMemory !== undefined) return inMemory;

    const stored = window.sessionStorage.getItem(`scroll:${path}`);
    if (!stored) return undefined;

    const parsed = Number(stored);
    return Number.isFinite(parsed) ? parsed : undefined;
  };

  const restoreScroll = (path: string) => {
    const saved = getSavedScroll(path);
    if (saved === undefined) return false;

    // Auf Mobile nur für die Startseite erlauben
    if (isMobileRef.current && path !== "/") {
      return false;
    }

    let cancelled = false;

    const performRestore = () => {
      if (cancelled) return;
      window.scrollTo({ top: saved, behavior: "auto" });
    };

    // Use multiple frames + timeout for reliable restoration
    // First frame for layout, second for paint, then timeout for safety
    const frameId = requestAnimationFrame(() => {
      const frameId2 = requestAnimationFrame(performRestore);
      const timeoutId = window.setTimeout(performRestore, 100);

      return { frameId2, timeoutId };
    });

    return true;
  };

  useEffect(() => {
    const shouldRestoreOnLoad = window.sessionStorage.getItem("restore-scroll-once") === "1";
    if (!shouldRestoreOnLoad) return;

    restoreScroll(location);
    window.sessionStorage.removeItem("restore-scroll-once");
  }, [location]);

  useEffect(() => {
    const handlePopState = () => {
      isBack.current = true;
      lastBackTime.current = Date.now();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const prev = prevLocation.current;
    const next = location;

    if (prev !== next) {
      scrollPositions[prev] = window.scrollY;
      window.sessionStorage.setItem(`scroll:${prev}`, String(window.scrollY));
      prevLocation.current = next;

      // Legal-Seiten immer oben
      if (ALWAYS_TOP.includes(next)) {
        window.scrollTo(0, 0);
        isBack.current = false;
        return;
      }

      if (isBack.current) {
        const saved = getSavedScroll(next);
        
        if (next === "/") {
          // For home page, always set the restore key and let Home.tsx handle it
          if (saved !== undefined && saved > 0) {
            window.sessionStorage.setItem("restore-scroll-once", "1");
            window.sessionStorage.setItem("restore-home-scroll", String(saved));
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          // For other pages, restore directly with better timing
          if (saved !== undefined && saved > 0) {
            // Use multiple frames to ensure component is rendered
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                window.scrollTo({ top: saved, behavior: "auto" });
              });
            });
          } else {
            window.scrollTo(0, 0);
          }
        }
        
        isBack.current = false;
        
      } else {
        // Forward navigation - check for fragment
        const hash = window.location.hash;
        if (!hash) {
          window.scrollTo(0, 0);
        }
        // Fragment will be handled by the separate fragment handler
      }
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollManager />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/produkt/:slug"} component={ProductDetail} />
        <Route path={"/impressum"} component={Impressum} />
        <Route path={"/datenschutz"} component={Datenschutz} />
        <Route path={"/agb"} component={AGB} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
