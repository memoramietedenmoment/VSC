// ─── Produkt-Kombinationen für interne Verlinkung ─────────────────────────────

export const PRODUCT_COMBINATIONS = {
  "fotospiegel-glow": {
    related: [
      "audio-gaestebuch-vivi",
      "sofortbildkamera-dior",
    ],
    bundleTitle: "Das Hochzeits-Gesamtpaket",
    bundleDescription: "Fotospiegel für Erinnerungen + Audio-Gästebuch für Stimmen + Seifenblasen für die perfekte Stimmung",
    bundleOriginalPrice: 377,
    bundleDiscountedPrice: 349,
  },
  "audio-gaestebuch-vivi": {
    related: [
      "fotospiegel-glow",
      "sofortbildkamera-dior",
    ],
    bundleTitle: "Erinnerungen sammeln",
    bundleDescription: "Audio-Nachrichten + Sofortfotos + Musik für das perfekte Gästebuch-Erlebnis",
    bundleOriginalPrice: 377,
    bundleDiscountedPrice: 349,
  },
  "video-gaestebuch-vimo": {
    related: [
      "fotospiegel-glow",
      "sofortbildkamera-dior",
    ],
  },
  "sofortbildkamera-dior": {
    related: [
      "fotospiegel-glow",
      "audio-gaestebuch-vivi",
    ],
    bundleTitle: "Die Foto-Kombination",
    bundleDescription: "Sofortdruck + Fotospiegel + Seifenblasen = unvergessliche Erinnerungen",
    bundleOriginalPrice: 377,
    bundleDiscountedPrice: 349,
  },
  "fotospiegel-milo": {
    related: [
      "audio-gaestebuch-vivi",
      "karaokemaschine-sing",
    ],
    bundleTitle: "Erinnerungen & Snacks",
    bundleDescription: "Fotospiegel-Erinnerungen + knusprige Snacks und warme Leckereien für hungrige Gäste",
    bundleOriginalPrice: 267,
    bundleDiscountedPrice: 239,
  },
  "karaokemaschine-sing": {
    related: [
      "nebelmaschine-mira",
      "seifenblasenmaschine-lilo",
    ],
    bundleTitle: "Die Party-Essentials",
    bundleDescription: "Karaoke-Spaß + Musik + Nebeleffekte = unvergessliche Nacht",
    bundleOriginalPrice: 177,
    bundleDiscountedPrice: 159,
  },
  "zuckerwattemaschine-luna": {
    related: [
      "popcornmaschine-keno",
      "fotospiegel-milo",
      "seifenblasenmaschine-lilo",
    ],
    bundleTitle: "Das Kinder-Party-Paket",
    bundleDescription: "Zuckerwatte + Popcorn + Fotospiegel + Seifenblasen = glückliche Kinderaugen",
    bundleOriginalPrice: 267,
    bundleDiscountedPrice: 239,
  },
  "seifenblasenmaschine-lilo": {
    related: [
      "karaokemaschine-sing",
      "nebelmaschine-mira",
    ],
    bundleTitle: "Die Atmosphären-Kombi",
    bundleDescription: "Seifenblasen + Musik + Nebeleffekte für märchenhafte Momente",
    bundleOriginalPrice: 177,
    bundleDiscountedPrice: 159,
  },
  "nebelmaschine-mira": {
    related: [
      "seifenblasenmaschine-lilo",
      "karaokemaschine-sing",
    ],
    bundleTitle: "Die Show-Effekte",
    bundleDescription: "Nebelmaschine + Seifenblasen + Musik für professionelle Atmosphäre",
    bundleOriginalPrice: 177,
    bundleDiscountedPrice: 159,
  },
  "hot-dog-waermer-sjen": {
    related: [
      "nacho-waermer-sala",
      "popcornmaschine-keno",
      "fotospiegel-milo",
    ],
    bundleTitle: "Das Snack-Bundle",
    bundleDescription: "Hot Dogs + Nachos + Popcorn = perfekte Snack-Bar",
    bundleOriginalPrice: 267,
    bundleDiscountedPrice: 239,
  },
  "nacho-waermer-sala": {
    related: [
      "hot-dog-waermer-sjen",
      "popcornmaschine-keno",
      "fotospiegel-milo",
    ],
    bundleTitle: "Das Würzige Snack-Paket",
    bundleDescription: "Nachos + Hot Dogs + Popcorn für die kulinarische Party",
    bundleOriginalPrice: 267,
    bundleDiscountedPrice: 239,
  },
  "popcornmaschine-keno": {
    related: [
      "hot-dog-waermer-sjen",
      "nacho-waermer-sala",
      "zuckerwattemaschine-luna",
    ],
    bundleTitle: "Das Klassiker-Snack-Paket",
    bundleDescription: "Popcorn + warme Snacks + Zuckerwatte für Candy-Bar und mehr",
    bundleOriginalPrice: 267,
    bundleDiscountedPrice: 239,
  },
};
