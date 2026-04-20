import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AGB from "./pages/AGB";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import ProductDetail from "./pages/ProductDetail";

const scrollPositions: Record<string, number> = {};

// Routen die immer oben starten
const ALWAYS_TOP = ["/impressum", "/datenschutz", "/agb"];

function ScrollManager() {
  const [location] = useLocation();
  const prevLocation = useRef(location);
  const isBack = useRef(false);

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

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: saved, behavior: "auto" });
        }, 50);
      });
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
        if (!restoreScroll(next)) {
          window.scrollTo(0, 0);
        }
        isBack.current = false;
        window.sessionStorage.removeItem("restore-scroll-once");
      } else {
        window.scrollTo(0, 0);
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
