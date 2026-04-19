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
      prevLocation.current = next;

      // Legal-Seiten immer oben
      if (ALWAYS_TOP.includes(next)) {
        window.scrollTo(0, 0);
        isBack.current = false;
        return;
      }

      if (isBack.current) {
        const saved = scrollPositions[next];
        if (saved !== undefined) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setTimeout(() => {
                window.scrollTo({ top: saved, behavior: "instant" });
              }, 50);
            });
          });
        } else {
          window.scrollTo(0, 0);
        }
        isBack.current = false;
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
