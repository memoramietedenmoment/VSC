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
    "/produkt/audio-gstebuch-vivi": "/produkt/audio-gaestebuch-vivi",
    "/produkt/hot-dog-wrmer-sjen": "/produkt/hot-dog-waermer-sjen",
    "/produkt/nacho-wrmer-sala": "/produkt/nacho-waermer-sala",
  };

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get(Object.keys(legacySlugRedirects), (req, res) => {
    res.redirect(301, legacySlugRedirects[req.path]);
  });

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

