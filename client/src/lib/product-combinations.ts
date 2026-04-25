// ─── Produkt-Kombinationen für interne Verlinkung ─────────────────────────────

export const PRODUCT_COMBINATIONS = {
  "fotospiegel-glow": {
    related: [
      "audio-gaestebuch-vivi",
      "sofortbildkamera-dior",
      "musik-box-sunu",
    ],
    bundleTitle: "Das Hochzeits-Gesamtpaket",
    bundleDescription: "Fotospiegel für Erinnerungen + Audio-Gästebuch für Stimmen + Seifenblasen für die perfekte Stimmung",
  },
  "audio-gaestebuch-vivi": {
    related: [
      "fotospiegel-glow",
      "sofortbildkamera-dior",
      "musik-box-sunu",
    ],
    bundleTitle: "Erinnerungen sammeln",
    bundleDescription: "Audio-Nachrichten + Sofortfotos + Musik für das perfekte Gästebuch-Erlebnis",
  },
  "sofortbildkamera-dior": {
    related: [
      "fotospiegel-glow",
      "audio-gaestebuch-vivi",
      "seifenblasenmaschine-lilo",
    ],
    bundleTitle: "Die Foto-Kombination",
    bundleDescription: "Sofortdruck + Fotospiegel + Seifenblasen = unvergessliche Erinnerungen",
  },
  "slushmaschine-emit": {
    related: [
      "popcornmaschine-keno",
      "hot-dog-waermer-sjen",
      "nacho-waermer-sala",
    ],
    bundleTitle: "Das Snack-Buffet",
    bundleDescription: "Kalte Slushies + knusprige Snacks + warme Leckereien für hungrige Gäste",
  },
  "karaokemaschine-sing": {
    related: [
      "musik-box-sunu",
      "nebelmaschine-mira",
      "seifenblasenmaschine-lilo",
    ],
    bundleTitle: "Die Party-Essentials",
    bundleDescription: "Karaoke-Spaß + Musik + Nebeleffekte = unvergessliche Nacht",
  },
  "zuckerwattemaschine-luna": {
    related: [
      "popcornmaschine-keno",
      "slushmaschine-emit",
      "seifenblasenmaschine-lilo",
    ],
    bundleTitle: "Das Kinder-Party-Paket",
    bundleDescription: "Zuckerwatte + Popcorn + Slusheis + Seifenblasen = glückliche Kinderaugen",
  },
  "seifenblasenmaschine-lilo": {
    related: [
      "fotospiegel-glow",
      "musik-box-sunu",
      "nebelmaschine-mira",
    ],
    bundleTitle: "Die Atmosphären-Kombi",
    bundleDescription: "Seifenblasen + Musik + Nebeleffekte für märchenhafte Momente",
  },
  "nebelmaschine-mira": {
    related: [
      "seifenblasenmaschine-lilo",
      "musik-box-sunu",
      "karaokemaschine-sing",
    ],
    bundleTitle: "Die Show-Effekte",
    bundleDescription: "Nebelmaschine + Seifenblasen + Musik für professionelle Atmosphäre",
  },
  "musik-box-sunu": {
    related: [
      "seifenblasenmaschine-lilo",
      "nebelmaschine-mira",
      "audio-gaestebuch-vivi",
    ],
    bundleTitle: "Die Audio-Lösung",
    bundleDescription: "Musik + Effekte + Gästebuch für das perfekte Soundtracking",
  },
  "hot-dog-waermer-sjen": {
    related: [
      "nacho-waermer-sala",
      "popcornmaschine-keno",
      "slushmaschine-emit",
    ],
    bundleTitle: "Das Snack-Bundle",
    bundleDescription: "Hot Dogs + Nachos + Popcorn = perfekte Snack-Bar",
  },
  "nacho-waermer-sala": {
    related: [
      "hot-dog-waermer-sjen",
      "popcornmaschine-keno",
      "slushmaschine-emit",
    ],
    bundleTitle: "Das Würzige Snack-Paket",
    bundleDescription: "Nachos + Hot Dogs + Popcorn für die kulinarische Party",
  },
  "popcornmaschine-keno": {
    related: [
      "hot-dog-waermer-sjen",
      "nacho-waermer-sala",
      "zuckerwattemaschine-luna",
    ],
    bundleTitle: "Das Klassiker-Snack-Paket",
    bundleDescription: "Popcorn + warme Snacks + Zuckerwatte für Candy-Bar und mehr",
  },
};
