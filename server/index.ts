import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const legacySlugRedirects: Record<string, string> = {
    "/produkte": "/#produkte",
    "/kontakt": "/#kontakt",
    "/faq": "/#faq",
    "/referenzen": "/#bewertungen",
    "/über-uns": "/#wer-wir-sind-mobile",
    "/datenschutzerkl%C3%A4rung": "/datenschutz",
    "/%C3%BCber-uns": "/#wer-wir-sind-mobile",
    "/fotospiegel-glow": "/produkt/fotospiegel-glow",
    "/audio-gaestebuch-vivi": "/produkt/audio-gaestebuch-vivi",
    "/audio-gästebuch-vivi": "/produkt/audio-gaestebuch-vivi",
    "/audio-g%C3%A4stebuch-vivi": "/produkt/audio-gaestebuch-vivi",
    "/polaroid-kamera-dior": "/produkt/sofortbildkamera-dior",
    "/slushmaschine-emit": "/produkt/slushmaschine-emit",
    "/karaokemaschine-sing": "/produkt/karaokemaschine-sing",
    "/zuckerwattemaschine-luna": "/produkt/zuckerwattemaschine-luna",
    "/popcornmaschine-keno": "/produkt/popcornmaschine-keno",
    "/seifenblasenmaschine-lilo": "/produkt/seifenblasenmaschine-lilo",
    "/nebelmaschine-mira": "/produkt/nebelmaschine-mira",
    "/musik-box-sunu": "/produkt/musik-box-sunu",
    "/hot-dog-wärmer-sjen": "/produkt/hot-dog-waermer-sjen",
    "/hot-dog-w%C3%A4rmer-sjen": "/produkt/hot-dog-waermer-sjen",
    "/nacho-wärmer-sala": "/produkt/nacho-waermer-sala",
    "/nacho-w%C3%A4rmer-sala": "/produkt/nacho-waermer-sala",
    "/produkt/audio-gstebuch-vivi": "/produkt/audio-gaestebuch-vivi",
    "/produkt/hot-dog-wrmer-sjen": "/produkt/hot-dog-waermer-sjen",
    "/produkt/nacho-wrmer-sala": "/produkt/nacho-waermer-sala",
  };

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Redirect middleware - must come BEFORE static to intercept legacy URLs
  app.use((req, res, next) => {
    if (legacySlugRedirects[req.path]) {
      res.redirect(301, legacySlugRedirects[req.path]);
    } else {
      next();
    }
  });

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

