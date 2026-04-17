/**
 * memora – Produktdetailseite
 * Design: Festive Elegance – Dunkelgrün + Gold-Amber + Cream
 * Features:
 *   - Produktbild/Galerie
 *   - Spezifikationen & Technische Daten
 *   - Kundenbewertungen
 *   - Preisberechnung
 *   - Direkter Anfrage-CTA
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { ChevronLeft, ChevronRight, Check, AlertCircle } from "lucide-react";

// ─── Produktdaten ─────────────────────────────────────────────────────────────

const PRODUCTS_DETAIL = {
  "fotospiegel-glow": {
    id: 1,
    name: "Fotospiegel GLOW",
    emoji: "🪞",
    tagline: "Der moderne Garant für gute Laune",
    price: "ab 299,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/fotospiegel-glow-neu-mEWnc6uokeNiC4Qd7MzeJ3.webp",
      "/images/Fotospiegel_Hochzeit.png",
      "/images/Fotospiegel_Geburtstag.png",
      "/images/Fotospiegel_mit_Koffer.png",
    ],
    description: "Sofortige Schnappschüsse zum Mitnehmen. Der Fotospiegel GLOW ist das Highlight auf jeder Feier – Gäste halten ihre Momente sofort in den Händen und haben eine echte Erinnerung.",
    longDescription: "Mit seiner eleganten Oberfläche und der interaktiven LED-Beleuchtung ist der GLOW nicht nur ein Fotospiegel, sondern ein echtes Statement-Piece. Die Sofortdrucke ermöglichen es deinen Gästen, ihre Fotos direkt mitzunehmen – perfekt für Gästebücher oder als Andenken.",
    specs: [
      { label: "Größe", value: "ca. 180 x 70 cm" },
      { label: "Beleuchtung", value: "Oberlicht und LED-Rahmen, einstellbar per App oder Fernbedienung" },
      { label: "Drucke", value: "Sofortdruck (10x15 cm), bis zu 700 Stück pro Event" },
      { label: "Kamera", value: "Professionelle DSLR mit Blitz" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Aufbau", value: "ca. 30 Minuten" },
      { label: "Bildschirm", value: "43″ Touch-Monitor" },
    ],
    features: [
      "Professionelle Kameraqualität",
      "Sofortdruck auf Premium-Papier",
      "Customizable Rahmen-Design",
      "Digitale Speicherung aller Fotos",
      "Auf Wunsch mit Aufbau",
      "Unbegrenzte Aufnahmen",
      "Individueller Startbildschirm",
      "Individuelles Druckdesign",
    ],
    occasions: ["Hochzeit", "Geburtstag", "Firmenfeier", "Jubiläum"],
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        date: "März 2026",
        text: "Absolut begeistert! Der Fotospiegel war der Star unserer Hochzeit. Alle Gäste wollten Fotos machen und die Sofortdrucke waren ein voller Erfolg.",
        event: "Hochzeit (120 Gäste)",
      },
      {
        name: "Thomas K.",
        rating: 5,
        date: "Februar 2026",
        text: "Professionelle Betreuung, tolle Qualität. Der GLOW sieht einfach klasse aus und die Fotos sind scharf und farbecht.",
        event: "Firmenfeier (80 Gäste)",
      },
      {
        name: "Julia L.",
        rating: 5,
        date: "Januar 2026",
        text: "Meine Gäste reden immer noch davon! Die Kombination aus Spaß und echtem Andenken ist unschlagbar.",
        event: "30. Geburtstag (60 Gäste)",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "299,- €" },
      { label: "Jeder weitere Tag", value: "+150,- €" },
      { label: "Druckflatrate (bis zu 700 Stück)", value: "+100,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Fotos können gemacht werden?",
        a: "Es gibt keine Begrenzung für die Anzahl der Aufnahmen, aber die Drucke sind auf 700 Stück limitiert. Alle Fotos werden digital gespeichert.",
      },
      {
        q: "Können die Fotos digital gespeichert werden?",
        a: "Ja, alle Fotos werden digital archiviert und dir nach dem Event per USB oder Cloud-Link zur Verfügung gestellt.",
      },
      {
        q: "Ist ein Techniker vor Ort?",
        a: "Wir kümmern uns auf Wunsch um Aufbau, Betreuung und Abbau. Du brauchst dich um nichts zu kümmern.",
      },
      {
        q: "Kann man die Drucke individualisieren?",
        a: "Ja! Wir können die Ausdrucke mit deinem Namen, Logo oder Motiv bedrucken lassen.",
        },
      {
        q: "Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "audio-gstebuch-vivi": {
    id: 2,
    name: "Audio-Gästebuch VIVI",
    emoji: "📞",
    tagline: "Persönliche Sprachnachrichten statt Einträge",
    price: "ab 49,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/audio-gaestebuch-vivi-8TDr2DteLoHaGVv5GwKgqm.webp",
      "/images/Audio_Gästebuch_goldeneHochzeit.png",
      "/images/Audio-Gästebuch_Polaroid.jpg",
      "/images/Audio-Gästebuch_Hochzeit.png",
    ],
    description: "Statt Gästebucheinträgen hinterlassen eure Gäste persönliche Sprachnachrichten – Gänsehaut garantiert!",
    longDescription: "Das Audio-Gästebuch VIVI ist eine moderne, emotionale Alternative zum klassischen Gästebuch. Deine Gäste sprechen ihre Glückwünsche, Ratschläge oder lustigen Anekdoten direkt ins Mikrofon – du erhältst eine Audio-Datei mit all diesen wertvollen Momenten.",
    specs: [
      { label: "Mikrofon", value: "Hochwertiges Kondensatormikrofon" },
      { label: "Aufnahmegerät", value: "Digitales Rekorder-System" },
      { label: "Speicherung", value: "SD-Karte (bis zu 20h Aufnahmezeit)" },
      { label: "Betrieb", value: "Akkubetrieb (bis zu 24h)" },
      { label: "Format", value: "MP3 / WAV" },
      { label: "Aufbau", value: "< 5 Minuten" },
    ],
    features: [
      "Hochwertige Audioqualität",
      "Einfache Bedienung",
      "Unbegrenzte Aufnahmen",
      "Digitale Archivierung",
      "Persönliche Erinnerungen",
      "Nachbearbeitung möglich",
    ],
    occasions: ["Hochzeit", "Jubiläum", "Geburtstag", "Abschied"],
    reviews: [
      {
        name: "Christine B.",
        rating: 5,
        date: "Februar 2026",
        text: "Wir haben das Gästetelefon für die goldene Hochzeit meiner Eltern gemietet. Die Aufnahmen sind sehr gut und wir können sie immer wieder anhören!",
        event: "Goldene Hochzeit",
      },
      {
        name: "Michael S.",
        rating: 5,
        date: "Dezember 2025",
        text: "Eine wunderbare Idee! Meine Hochzeitsgäste haben wunderbare Nachrichten hinterlassen. Das ist viel persönlicher als ein Gästebuch.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "49,- €" },
      { label: "Jeder weitere Tag", value: "+25,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie lange können Aufnahmen sein?",
        a: "Jede Aufnahme kann so lang sein, wie der Gast möchte. Insgesamt passen bis zu 20 Stunden auf die SD-Karte.",
      },
      {
        q: "Wie und in welchem Format erhalte ich die Aufnahmen?",
        a: "Wir senden dir im Nachgang an dein Event einen Link zu einer Cloud aus der du die Dateien als MP3 oder WAV-Datei herunterladen kannst. Du kannst sie direkt anhören oder nachbearbeiten.",
      },
      {
        q: "Kann ich die Aufnahmen nachbearbeiten?",
        a: "Ja, wir stellen dir die Rohdateien zur Verfügung. Du kannst sie mit jeder Standard-Audio-Software bearbeiten.",
         },
      {
        q: "Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "polaroidkamera-dior": {
    id: 3,
    name: "Sofortbildkamera DIOR",
    emoji: "📸",
    tagline: "Echter Retro-Charme",
    price: "ab 29,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/polaroidkamera-dior-mZPP2JPUnM27FCH5g72tbZ.webp",
      "/images/Polaroid_blanko.png",
      "/images/Polaroid_rechts.png",
      "/images/Polaroid_links.png",
    ],
    description: "Gäste halten ihre Momente sofort in den Händen – perfekt für Gästebücher und Fotowände.",
    longDescription: "Die Sofortbildkamera DIOR bringt nostalgischen Charme auf dein Event. Mit echten Sofortbildern haben deine Gäste ein echtes, analoges Andenken – perfekt zum Signieren im Gästebuch oder zum Aufhängen an eine Fotowand.",
    specs: [
      { label: "Film", value: "Fujifilm Instax Square" },
      { label: "Objektiv", value: "Festfokus, Blitz" },
      { label: "Batterie", value: "AA-Batterien" },
      { label: "Fotoformat", value: "62x62 mm" },
    ],
    features: [
      "Echte Sofortbilder",
      "Einfache Bedienung",
      "Retro-Ästhetik",
      "Gästebuch-kompatibel",
    ],
    occasions: ["Hochzeit", "Geburtstag", "Party", "Schulveranstaltung"],
    reviews: [
      {
        name: "Anna P.",
        rating: 5,
        date: "Januar 2026",
        text: "Die Sofortbildkameras waren ein voller Hit! Alle Gäste wollten Fotos machen und die Bilder im Gästebuch signieren.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "29,- €" },
      { label: "Jeder weitere Tag", value: "+15,- €" },
      { label: "Film 10er Pack (bei Bedarf)", value: "+15,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Filme sollte ich mitnehmen?",
        a: "Mit 2-3 Kameras und je 10er Packs solltest du für 50-80 Gäste gut ausgestattet sein. Gerne beraten wir dich!",
      },
      {
        q: "Können die Bilder signiert werden?",
        a: "Ja, die Bilder haben einen weißen Rand – perfekt zum Signieren!",
        },
      {
        q: "Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "slushmaschine-emit": {
    id: 4,
    name: "Slushmaschine EMIT",
    emoji: "🧊",
    tagline: "Buntes Slush-Eis im Handumdrehen",
    price: "ab 149,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/slushmaschine-emit-HuhgPzCXyq2oCRg9XN26nA.webp",
      "/images/Slush_befüllt.png",
      "/images/Slush_Alkohol.png",
      "/images/Slush_Aperol.png",
    ],
    description: "Fruchtig, eiskalt und ein echter Hingucker. Mit optionalem Erwachsenen-Upgrade!",
    longDescription: "Die Slushmaschine EMIT ist das perfekte Highlight für Sommer-Events. Bunte, frische Slush-Getränke in verschiedenen Geschmacksrichtungen – und optional auch mit Alkohol für die Erwachsenen. Ein echter Hingucker und bei Gästen jeden Alters beliebt.",
    specs: [
      { label: "Kapazität", value: "2x 12 Liter" },
      { label: "Größe", value: "ca. 80 x 50 x 100 cm" },
      { label: "Gewicht", value: "ca. 40 kg" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Geschmacksrichtungen", value: "Erdbeere, Himbeere, Zitrone, Blaubeere, Aperol, Daiquiri und viele mehr" },
      { label: "Gebrauchsbereit", value: "nach ca. 45-60 Minuten initialer Kühlung" },
    ],
    features: [
      "Hochleistungsmotor",
      "Mehrere Geschmacksrichtungen",
      "Optionales Alkohol-Upgrade",
      "Automatische Kühlung",
      "Einfache Bedienung",
      "Nostalgiefaktor garantiert",
    ],
    occasions: ["Sommerparty", "Hochzeit", "Kindergeburtstag", "Firmenfeier"],
    reviews: [
      {
        name: "Lena F.",
        rating: 5,
        date: "Februar 2026",
        text: "Wir haben die Slushi-Maschine für unsere Faschingsfeier ausgeliehen und sind absolut begeistert! Die Kommunikation war von Anfang an hervorragend.",
        event: "Faschingsfeier",
      },
      {
        name: "Peter G.",
        rating: 5,
        date: "Juli 2025",
        text: "Perfekt für unsere Sommerparty! Die Gäste haben sich um die Slushmaschine gerissen. Sehr zu empfehlen!",
        event: "Gartenparty",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "149,- €" },
      { label: "Jeder weitere Tag", value: "+75,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Gäste können bedient werden?",
        a: "Mit insgesamt 24 Litern können 50-100 Gäste gut versorgt werden.",
      },
      {
        q: "Ist ein Alkohol-Upgrade möglich?",
        a: "Ja! Die Slushmaschine funktioniert auch mit Rum, Vodka oder anderen Spirituosen. Gerne beraten wir dich!",
        },
      {
        q:"Müssen wir das Gerät nach der Nutzung reinigen?",
        a:"Eine Intensiv-Reinigung ist nicht erforderlich. Wir empfehlen, die Maschine nach der Nutzung mit klarem Wasser durchzuspülen. Eine gründliche Reinigung erfolgt bei uns nach jedem Event. Bei starker Verschmutzung behalten wir uns vor eine Reinigungsgebühr in Höhe von 50,- € zu berechnen.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "karaokemaschine-sing": {
    id: 5,
    name: "Karaokemaschine SING",
    emoji: "🎤",
    tagline: "Solo oder Duett",
    price: "ab 69,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/karaokemaschine-sing-E68YRAvtn3s3erpgQufsH5.webp",
      "/images/Karaoke_imRaum.png",
      "/images/Karaoke_Benutzung.png",
      "/images/Karaoke_Weihnachtsfeier.jpg",
    ],
    description: "Solo, im Duett oder als Chor – hier entstehen unvergessliche Momente voller Spaß, Lacher und Applaus.",
    longDescription: "Die Karaokemaschine SING ist der Garant für gute Laune und unvergessliche Momente. Mit einer riesigen Songbibliothek, professionellem Sound und LED-Effekten wird dein Event zur Party-Bühne.",
    specs: [
      { label: "Songbibliothek", value: "über 50.000 Songs" },
      { label: "Sprachen", value: "Deutsch, Englisch, Französisch, Italienisch, Spanisch" },
      { label: "Konnektivität", value: "per HDMI-Kabel an Fernseher oder Beamer anschließbar" },
      { label: "Mikrofone", value: "2x kabellose Mikrofone" },
      { label: "Display", value: "10,1 Zoll Touchscreen (drehbar um 180 Grad)" },
      { label: "LED-Effekte", value: "RGB-Beleuchtung mit verschiedenen Modi" },
      { label: "Betrieb", value: " Akku (bis zu 8 Stunden) oder Stromanschluss" },
    ],
    features: [
      "Riesige Songbibliothek",
      "Professioneller Sound",
      "LED-Effekte",
      "Kabellose Mikrofone",
      "Einfache Bedienung",
      "Techniker vor Ort",
    ],
    occasions: ["Geburtstag", "Firmenfeier", "Party", "Hochzeit"],
    reviews: [
      {
        name: "Klaus M.",
        rating: 5,
        date: "Dezember 2025",
        text: "Die beste Investition für unsere Weihnachtsfeier! Alle Mitarbeiter haben mitgemacht und es war riesig lustig.",
        event: "Firmen-Weihnachtsfeier",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "69,- €" },
      { label: "Jeder weitere Tag", value: "+35,- €" },
       { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Songs sind in der Bibliothek?",
        a: "Über 50.000 Songs in mehreren Sprachen. Die Bibliothek wird regelmäßig aktualisiert.",
      },
      {
        q: "Kann ich meine eigenen Songs hinzufügen?",
        a: "Du kannst über das Gerät auch auf Spotify oder andere Streaming-Dienste zugreifen, um deine eigenen Songs zu singen. Bitte beachte, dass hierfür eine stabile Internetverbindung erforderlich ist.",
      },
      {
        q: "Wie viele Mikrofone gibt es?",
        a: "2 kabellose Mikrofone.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "zuckerwattemaschine-luna": {
    id: 6,
    name: "Zuckerwattemaschine LUNA",
    emoji: "🍭",
    tagline: "Nostalgischer Jahrmarkt-Flair",
    price: "ab 49,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/zuckerwattemaschine-luna-YssUQSBqzSfkyTrshDaWmk.webp",
      "/images/Zuckerwatte_Kindergeburtstag.png",
      "/images/Zuckerwatte_Hochzeit.png",
      "/images/Zuckerwatte_Winterfeier.png",
    ],
    description: "Der Duft, die flauschige Konsistenz, der nostalgische Flair – eure Gäste sind direkt auf dem Jahrmarkt.",
    longDescription: "Die Zuckerwattemaschine LUNA bringt Jahrmarkt-Flair auf dein Event. Mit frisch gemachter, flauschiger Zuckerwatte in verschiedenen Farben und Geschmäckern – ein Hit bei Kindern und Erwachsenen!",
    specs: [
      { label: "Leistung", value: "950W" },
      { label: "Größe", value: "ca. 50 x 50 x 80 cm" },
      { label: "Gewicht", value: "ca. 20 kg" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Kapazität", value: "ca. 50-100 Portionen pro Stunde" },
      { label: "Farben", value: "Rosa, Blau, Grün, Gelb, Weiß" },
    ],
    features: [
      "Schnelle Produktion",
      "Mehrere Farben",
      "Einfache Bedienung",
      "50 Stäbchen inklusive",
    ],
    occasions: ["Kindergeburtstag", "Familienfeier", "Schulveranstaltung", "Sommerfest"],
    reviews: [
      {
        name: "Sandra K.",
        rating: 5,
        date: "Juni 2025",
        text: "Die Zuckerwattemaschine war der Hit bei unserem Kindergeburtstag! Alle Kinder wollten Zuckerwatte haben.",
        event: "Kindergeburtstag",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "49,- €" },
      { label: "Jeder weitere Tag", value: "+25- €" },
      { label: "50 Stäbchen", value: "kostenlos" },
      { label: "weitere 50 Stäbchen", value: "+10,- €" },
     { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Portionen pro Stunde?",
        a: "Mit einer Maschine können ca. 50-100 Portionen pro Stunde hergestellt werden.",
      },
      {
        q: "Welche Farben gibt es?",
        a: "Rosa, Blau, Grün, Gelb und Weiß. Gerne beraten wir euch!",
      },
      {
        q: "Ist Zucker inklusive?",
        a: "Nein, den Zucker müsst ihr selber besorgen. Wir empfehlen ca. 1 kg Zucker pro 50 Portionen.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
      },
    ],
  },
  "seifenblasenmaschine-lilo": {
    id: 7,
    name: "Seifenblasenmaschine LILO",
    emoji: "🫧",
    tagline: "Magie in der Luft",
    price: "ab 59,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
    ],
    description: "Bringt Magie in die Luft – romantisch beim Hochzeitstanz oder verspielt im Freien.",
    longDescription: "Die Seifenblasenmaschine LILO schafft eine märchenhafte Atmosphäre auf deinem Event. Mit unzähligen schillernden Seifenblasen wird dein Hochzeitstanz oder deine Party zu einem magischen Moment – perfekt für Fotos und Videos!",
    specs: [
      { label: "Leistung", value: "500W" },
      { label: "Größe", value: "ca. 30 x 30 x 50 cm" },
      { label: "Gewicht", value: "ca. 5 kg" },
      { label: "Blasenproduktion", value: "ca. 1000 Blasen/Minute" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Seifenlösung", value: "5 Liter inklusive" },
    ],
    features: [
      "Automatische Blasenproduktion",
      "Stufenlos regelbar",
      "Einfache Bedienung",
      "Seifenlösung inklusive",
      "Romantisch & märchenhaft",
      "Perfekt für Fotos",
    ],
    occasions: ["Hochzeit", "Verlobung", "Geburtstag", "Sommerfest"],
    reviews: [
      {
        name: "Petra W.",
        rating: 5,
        date: "Mai 2026",
        text: "Die Seifenblasen beim Hochzeitstanz waren einfach traumhaft! Alle Fotos sind wunderschön geworden.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "59,- €" },
      { label: "Jede weitere Stunde", value: "+12,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
      { label: "Seifenlösung", value: "inklusive" },
    ],
    faq: [
      {
        q: "Wie lange hält die Seifenlösung?",
        a: "Die 5 Liter Seifenlösung reichen für ca. 4-6 Stunden Betrieb.",
      },
      {
        q: "Kann ich die Blasenproduktion regeln?",
        a: "Ja, die Produktion ist stufenlos regelbar – von sanften Blasen bis zu intensiven Blasenwolken.",
      },
    ],
  },
  "nebelmaschine-mira": {
    id: 8,
    name: "Nebelmaschine MIRA",
    emoji: "☁️",
    tagline: "Tanzfläche wird zur Showbühne",
    price: "ab 49,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
    ],
    description: "Verwandelt die Tanzfläche zur Showbühne – kombinierbar mit Lichteffekten.",
    longDescription: "Die Nebelmaschine MIRA schafft atemberaubende Stimmung auf deiner Party. Mit dichtem, kühlem Nebel und in Kombination mit Lichteffekten wird deine Tanzfläche zur professionellen Showbühne.",
    specs: [
      { label: "Leistung", value: "1500W" },
      { label: "Größe", value: "ca. 40 x 30 x 40 cm" },
      { label: "Gewicht", value: "ca. 8 kg" },
      { label: "Nebelproduktion", value: "ca. 3000 m³/h" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Nebelflüssigkeit", value: "1 Liter inklusive" },
    ],
    features: [
      "Hochleistungsmotor",
      "Dichte Nebelproduktion",
      "Einfache Bedienung",
      "Kompatibel mit Lichteffekten",
      "Nebelflüssigkeit inklusive",
      "Professionelle Qualität",
    ],
    occasions: ["Hochzeit", "Party", "Firmenfeier", "DJ-Event"],
    reviews: [
      {
        name: "Marco L.",
        rating: 5,
        date: "April 2026",
        text: "Mit der Nebelmaschine und den Lichtern war die Tanzfläche einfach spektakulär! Alle Gäste waren begeistert.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "49,- €" },
      { label: "Jede weitere Stunde", value: "+10,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
      { label: "Nebelflüssigkeit", value: "inklusive" },
    ],
    faq: [
      {
        q: "Ist die Nebelmaschine sicher?",
        a: "Ja, die Nebelflüssigkeit ist ungiftig und für Innen- und Außenbereiche geeignet.",
      },
      {
        q: "Wie lange hält die Nebelflüssigkeit?",
        a: "1 Liter reicht für ca. 2-3 Stunden kontinuierlichen Betrieb.",
      },
    ],
  },
  "musik-box-inkl-mikro-sunu": {
    id: 9,
    name: "Musik-Box inkl. Mikro SUNU",
    emoji: "🎵",
    tagline: "Dezente Hintergrundmusik",
    price: "ab 99,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
    ],
    description: "Dezente Hintergrundmusik beim Sektempfang oder Dinner – Mikro für Reden inklusive.",
    longDescription: "Die Musik-Box SUNU ist das perfekte Audio-System für elegante Events. Mit hochwertigen Lautsprechern für Hintergrundmusik und einem professionellen Mikrofon für Reden und Ansprachen.",
    specs: [
      { label: "Leistung", value: "200W RMS" },
      { label: "Lautsprecher", value: "2x 100W Stereo" },
      { label: "Mikrofon", value: "1x drahtlos" },
      { label: "Konnektivität", value: "Bluetooth, AUX, USB" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Reichweite", value: "bis zu 50m" },
    ],
    features: [
      "Hochwertiger Sound",
      "Drahtloses Mikrofon",
      "Bluetooth-Konnektivität",
      "Einfache Bedienung",
      "Tragbar & flexibel",
      "Professionelle Qualität",
    ],
    occasions: ["Hochzeit", "Firmenfeier", "Jubiläum", "Gala"],
    reviews: [
      {
        name: "Angelika S.",
        rating: 5,
        date: "März 2026",
        text: "Die Musik-Box war perfekt für unsere Hochzeit. Der Sound war klar und alle Reden waren gut zu hören.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "99,- €" },
      { label: "Jede weitere Stunde", value: "+20,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
    ],
    faq: [
      {
        q: "Kann ich meine Playlist abspielen?",
        a: "Ja, über Bluetooth oder USB kannst du deine Musik direkt abspielen.",
      },
      {
        q: "Wie weit reicht das Mikrofon?",
        a: "Das drahtlose Mikrofon hat eine Reichweite von bis zu 50 Metern.",
      },
    ],
  },
  "hot-dog-wrmer-sjen": {
    id: 10,
    name: "Hot-Dog-Wärmer SJEN",
    emoji: "🌭",
    tagline: "Leckere, warme Snacks",
    price: "ab 59,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
    ],
    description: "Leckere, warme Snacks – heiß, frisch und perfekt für den kleinen Hunger.",
    longDescription: "Der Hot-Dog-Wärmer SJEN ist das perfekte Snack-Highlight für dein Event. Mit professionellem Wärmesystem hältst du Hot Dogs, Würstchen und andere Snacks warm und appetitlich.",
    specs: [
      { label: "Leistung", value: "1200W" },
      { label: "Größe", value: "ca. 60 x 40 x 80 cm" },
      { label: "Gewicht", value: "ca. 15 kg" },
      { label: "Kapazität", value: "ca. 100-150 Hot Dogs" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Temperaturkontrolle", value: "Regelbar" },
    ],
    features: [
      "Professionelle Wärmeleistung",
      "Große Kapazität",
      "Einfache Bedienung",
      "Temperaturregelung",
      "Hygienisch",
      "Techniker vor Ort",
    ],
    occasions: ["Party", "Hochzeit", "Firmenfeier", "Sommerfest"],
    reviews: [
      {
        name: "Ralf K.",
        rating: 5,
        date: "Juni 2026",
        text: "Die Hot Dogs waren der Hit! Alle Gäste haben sich daran bedient. Sehr zu empfehlen!",
        event: "Gartenparty",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "59,- €" },
      { label: "Jede weitere Stunde", value: "+12,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
    ],
    faq: [
      {
        q: "Wie viele Hot Dogs passen rein?",
        a: "Der Wärmer hat Platz für ca. 100-150 Hot Dogs, je nach Größe.",
      },
      {
        q: "Kann ich die Temperatur regeln?",
        a: "Ja, die Temperatur ist stufenlos regelbar für optimale Wärmehaltung.",
      },
    ],
  },
  "nacho-wrmer-sala": {
    id: 11,
    name: "Nacho-Wärmer SALA",
    emoji: "🦦",
    tagline: "Knusprige Nachos mit warmer Käsesoe",
    price: "ab 49,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
    ],
    description: "Knusprige Nachos mit warmer, cremiger Käsesoße – echtes Kino-Feeling!",
    longDescription: "Der Nacho-Wärmer SALA ist das perfekte Snack-System für dein Event. Mit separaten Behältern für Nachos und Käsesoße – immer warm, immer frisch!",
    specs: [
      { label: "Leistung", value: "800W" },
      { label: "Größe", value: "ca. 50 x 40 x 60 cm" },
      { label: "Gewicht", value: "ca. 10 kg" },
      { label: "Kapazität", value: "ca. 5 Liter Käsesoße + Nachos" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Temperaturkontrolle", value: "Regelbar" },
    ],
    features: [
      "Separate Wärmebehälter",
      "Große Kapazität",
      "Einfache Bedienung",
      "Temperaturregelung",
      "Hygienisch",
      "Professionelle Qualität",
    ],
    occasions: ["Party", "Geburtstag", "Firmenfeier", "Sportveranstaltung"],
    reviews: [
      {
        name: "Daniela M.",
        rating: 5,
        date: "Mai 2026",
        text: "Die Nachos waren der absolute Hit! Alle Gäste haben sie geliebt. Sehr zu empfehlen!",
        event: "Geburtstagsparty",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "49,- €" },
      { label: "Jede weitere Stunde", value: "+10,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
    ],
    faq: [
      {
        q: "Wie viel Käsesoße passt rein?",
        a: "Der Behälter fasst ca. 5 Liter Käsesoße – genug für 100+ Portionen.",
      },
      {
        q: "Können die Nachos separat gewärmt werden?",
        a: "Ja, es gibt separate Behälter für Nachos und Käsesoße.",
      },
    ],
  },
  "popcornmaschine-keno": {
    id: 12,
    name: "Popcornmaschine KENO",
    emoji: "🍿",
    tagline: "Frisch, knusprig, unwiderstehlich",
    price: "ab 59,- €",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
    ],
    description: "Frisch, knusprig, unwiderstehlich – ein Must-Have für die Candy-Bar!",
    longDescription: "Die Popcornmaschine KENO ist der Klassiker auf jedem Event. Mit professionellem Wärmesystem und großem Behälter – der Duft von warmem Popcorn verbreitet sofort gute Stimmung!",
    specs: [
      { label: "Leistung", value: "1500W" },
      { label: "Größe", value: "ca. 70 x 50 x 100 cm" },
      { label: "Gewicht", value: "ca. 20 kg" },
      { label: "Kapazität", value: "ca. 5 Liter pro Charge" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Produktionsrate", value: "ca. 200 Portionen/Stunde" },
    ],
    features: [
      "Professionelle Qualität",
      "Große Kapazität",
      "Schnelle Produktion",
      "Einfache Bedienung",
      "Nostalgisches Design",
      "Techniker vor Ort",
    ],
    occasions: ["Party", "Hochzeit", "Kindergeburtstag", "Sommerfest"],
    reviews: [
      {
        name: "Thomas B.",
        rating: 5,
        date: "April 2026",
        text: "Die Popcornmaschine war ein voller Erfolg! Der Duft allein war schon toll, und die Gäste haben es geliebt.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (4h)", value: "59,- €" },
      { label: "Jede weitere Stunde", value: "+12,- €" },
      { label: "Lieferung & Aufbau", value: "kostenlos" },
      { label: "Popcorn & Öl", value: "+20,- €" },
    ],
    faq: [
      {
        q: "Wie viel Popcorn kann produziert werden?",
        a: "Mit ca. 200 Portionen pro Stunde können 100+ Gäste versorgt werden.",
      },
      {
        q: "Ist Popcorn & Öl inklusive?",
        a: "Nein, aber wir können es für +20€ dazubuchen. Gerne beraten wir dich!",
      },
    ],
  },
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ─── Komponente ───────────────────────────────────────────────────────────────

export default function ProductDetail() {
  const [match, params] = useRoute("/produkt/:slug");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!match) return null;

  const slug = params?.slug as string;
  const product = PRODUCTS_DETAIL[slug as keyof typeof PRODUCTS_DETAIL];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Produkt nicht gefunden</h1>
          <a href="/" className="text-[oklch(0.32_0.07_155)] hover:underline font-semibold">
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(
      `Hallo memora! Ich interessiere mich für ${product.name}. Bitte sendet mir mehr Informationen und ein Angebot.`
    );
    window.open(`https://wa.me/4915225896570?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <ChevronLeft className="w-5 h-5 text-[oklch(0.32_0.07_155)]" />
            <span className="text-sm font-semibold text-[oklch(0.32_0.07_155)]">Zurück</span>
          </a>
          <a href="/" className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png" alt="memora Logo" className="h-8 w-auto" />
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="btn-gold pulse-gold px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
          >
            <WhatsAppIcon />
            Anfragen
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          HERO / PRODUCT OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 bg-[oklch(0.95_0.012_85)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {product.images && product.images.length > 0 ? (
                  <>
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - Bild ${currentImageIndex + 1}`}
                      className="w-full h-96 object-contain"
                    />

                    {/* Navigation Arrows */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) =>
                            prev === 0 ? product.images.length - 1 : prev - 1
                          )}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                          aria-label="Vorheriges Bild"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) =>
                            prev === product.images.length - 1 ? 0 : prev + 1
                          )}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                          aria-label="Nächstes Bild"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </>
                    )}

                    {/* Dot Indicators */}
                    {product.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Bild ${index + 1} anzeigen`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-[oklch(0.93_0.015_85)] to-[oklch(0.88_0.02_85)] rounded-2xl flex items-center justify-center text-9xl">
                    {product.emoji}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold text-foreground mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {product.name}
              </h1>
              <p className="text-lg text-[oklch(0.75_0.14_80)] italic mb-4">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating count={5} />
                <span className="text-sm text-muted-foreground">
                  {product.reviews.length} Bewertungen · 5.0 Sterne
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="bg-[oklch(0.32_0.07_155)] text-white rounded-xl p-6 mb-6">
                <div className="text-sm text-white/70 mb-1">Ab</div>
                <div className="text-3xl font-bold mb-3">{product.price}</div>
                <p className="text-sm text-white/80">zzgl. Lieferung (Abholung kostenlos)</p>
              </div>

              {/* Occasions */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">Perfekt für:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasions.map((occ) => (
                    <span key={occ} className="bg-[oklch(0.93_0.015_85)] text-[oklch(0.32_0.07_155)] px-3 py-1 rounded-full text-sm font-medium">
                      {occ}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full btn-gold pulse-gold py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 mb-3"
              >
                <WhatsAppIcon />
                Jetzt anfragen
              </button>
              <p className="text-xs text-muted-foreground text-center">
                ✓ Kostenlos & unverbindlich · ✓ Antwort innerhalb von 2h
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SPEZIFIKATIONEN
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Technische Daten
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[oklch(0.95_0.012_85)] rounded-lg p-4 border border-border"
                >
                  <div className="text-sm font-semibold text-[oklch(0.32_0.07_155)] mb-1">{spec.label}</div>
                  <div className="text-base text-foreground">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[oklch(0.75_0.14_80)] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PREISBERECHNUNG
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[oklch(0.95_0.012_85)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Preise
            </h2>
            <div className="bg-white rounded-xl border border-border overflow-hidden">
              {product.pricing.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 ${
                    i !== product.pricing.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-foreground font-medium">{item.label}</span>
                  <span className="text-lg font-bold text-[oklch(0.75_0.14_80)]">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          KUNDENBEWERTUNGEN
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Kundenbewertungen
            </h2>
            <div className="space-y-6">
              {product.reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[oklch(0.95_0.012_85)] rounded-xl p-6 border border-border"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.event}</div>
                    </div>
                    <div className="text-right">
                      <StarRating count={review.rating} />
                      <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed italic">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[oklch(0.95_0.012_85)]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Häufig gestellte Fragen
            </h2>
            <div className="space-y-3">
              {product.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[oklch(0.95_0.012_85)] transition-colors"
                  >
                    <span className="font-semibold text-foreground text-left">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-[oklch(0.32_0.07_155)] transition-transform ${
                        expandedFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-border px-4 py-3 bg-[oklch(0.95_0.012_85)]"
                    >
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[oklch(0.32_0.07_155)] text-white">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bereit für dein Event?
            </h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Stell uns eine kostenlose Anfrage zu {product.name}. Wir melden uns innerhalb von 2 Stunden zurück.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="btn-gold pulse-gold px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 mx-auto"
            >
              <WhatsAppIcon />
              Jetzt anfragen
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
