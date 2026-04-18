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

import { useState, useRef } from "react";
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
        name: "Joshua D.",
        rating: 5,
        date: "Februar 2026",
        text: "Ich habe den Fotospiegel für meinen Geburtstag geliehen. Das Team war super nett und der Ablauf war sehr unkompliziert!",
        event: "Geburtstag (60 Gäste)",
      },
      {
        name: "Marc Z.",
        rating: 5,
        date: "Januar 2026",
        text: "Der Fotospiegel war das absolute Highlight meiner Geburtstagsfeier! Super einfache Bedienung, tolle Fotoqualität und jede Menge Spaß für alle Gäste. Aufbau und Service liefen reibungslos und professionell. Klare Empfehlung – würde ich jederzeit wieder buchen!",
        event: "35. Geburtstag (40 Gäste)",
      },
      {
        name: "Luca C.",
        rating: 5,
        date: "Januar 2026",
        text: "Habe den Fotospiegel für meinen Geburtstag gehabt. Alles von Lieferung, Aufbau, Unterhaltung bis Abholung war top. Der Spiegel wurde den ganzen Abend viel genutzt, die Fotos sind in einer sehr guten Qualität, sind auf einer Cloud gespeichert und können sogar direkt ausgedruckt werden. Empfehle es jedem weiter!",
        event: "29. Geburtstag (30 Gäste)",
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
      "Perfekt für alle Altersgruppen",
    ],
    occasions: ["Geburtstag", "Firmenfeier", "Party", "Hochzeit"],
    reviews: [
{
   name: "Fabio G.",
  rating: 5,
  date: "Januar 2026",
  text: "Unkompliziert, super Service und mega Stimmung! Wir haben im Januar für den 60. Geburtstag meines Vaters eine Karaokemaschine über Memora gemietet und selbst abgeholt. Die beiden vor Ort waren sehr zuvorkommend, freundlich und haben alles ruhig erklärt. Die Abholung lief absolut unkompliziert. Die Karaokemaschine war in einwandfreiem Zustand, leicht aufzubauen und zu bedienen. Unsere Gäste hatten riesigen Spaß, Karaoke war definitiv das Highlight des Abends! Klare Empfehlung, wir würden jederzeit wieder mieten.",
  event: "60. Geburtstag (60 Gäste)",
},
      {
         name: "Lea S.",
        rating: 5,
        date: "Dezember 2025",
        text: "Ich hatte die Karaokemaschine für Silvester und war sehr zufrieden. Einfache Bestellung und Lieferung, super nettes Team die mir beim Anschließen geholfen haben und auch die Rückgabe hat problemlos funktioniert. Kann es nur empfehlen und werde wieder bei Memora bestellen!",
        event: "Silvesterfeier (20 Gäste)",
      },
      {
        name: "Stefan W.",
        rating: 5,
        date: "Dezember 2025",
        text: "Waren Mega zufrieden , der Service war echt klasse das abholen und zurückbringen funktionierte sehr gut . Wir hatten die Karaoke Maschine für ein Event , und das war der Hammer. Funktionierte sehr gut und wir hatten alle einen Riesen Spaß damit. Gerne wieder !",
        event: "Fußball-Weihnachtsfeier",
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
        name: "Celine Z.",
        rating: 5,
        date: "Januar 2026",
        text: "Die Zuckerwattemaschine war ein Highlight bei unserer Winterfeier.",
        event: "Winterfeier",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "49,- €" },
      { label: "Jeder weitere Tag", value: "+25- €" },
      { label: "50 Stäbchen", value: "inklusive" },
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
         q:"Müssen wir das Gerät nach der Nutzung reinigen?",
        a:"Eine Intensiv-Reinigung ist nicht erforderlich. Wir empfehlen, die Maschine nach der Nutzung mit klarem Wasser durchzuspülen. Eine gründliche Reinigung erfolgt bei uns nach jedem Event. Bei starker Verschmutzung behalten wir uns vor eine Reinigungsgebühr in Höhe von 25,- € zu berechnen.",
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
      "/images/Seifenblasen_blau.png",
      "/images/Seifenblasenmaschine_Hochzeit.png",
      "/images/Seifenblasen_Hochzeit.png",
    ],
    description: "Bringt Magie in die Luft – romantisch beim Hochzeitstanz oder verspielt im Freien.",
    longDescription: "Die Seifenblasenmaschine LILO schafft eine märchenhafte Atmosphäre auf deinem Event. Mit unzähligen schillernden Seifenblasen wird dein Hochzeitstanz oder deine Party zu einem magischen Moment – perfekt für Fotos und Videos!",
    specs: [
      { label: "Leistung", value: "2000W" },
      { label: "Größe", value: "ca. 53 x 38 x 33 cm" },
      { label: "Tankinhalt", value: "1,35 liter" },
      { label: "Funktion", value: "Seifenblasen, Nebel und Lichteffekte" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Aufwärmzeit", value: "ca. 3 Minuten" },
    ],
    features: [
      "Automatische Blasenproduktion",
      "Stufenlos regelbar",
      "Einfache Bedienung",
      "Seifenlösung inklusive",
      "Romantisch & märchenhaft",
      "Perfekt für Fotos",
      "Je nach Bedarf klassische Seifenblasen oder mit Nebel gefüllte Blasen",
      "Erzeugt eine magische Atmosphäre auf jeder Feier",
    ],
    occasions: ["Hochzeit", "Verlobung", "Geburtstag", "Sommerfest"],
     reviews: [
      {
       name: "Anonym",
        rating: 5,
       date: "April 2026",
       text: "Die Seifenblasen beim Hochzeitstanz waren einfach traumhaft! Alle Fotos sind wunderschön geworden.",
        event: "Hochzeit",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "59,- €" },
      { label: "Jeder weiterer Tag", value: "+30,- €" },
      { label: "Nebel- und Seifenblasenflüssigkeit", value: "inklusive" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
      
    ],
    faq: [
      {
        q: "Wie lange hält die Seifenlösung?",
        a: "Die 1,35 Liter Seifenlösung reichen für ca. 1-2 Stunden Betrieb. Meldet euch gerne, wenn ihr mehr Flüssigkeit benötigt!",
      },
      {
        q: "Kann ich die Blasenproduktion regeln?",
        a: "Ja, die Produktion ist stufenlos regelbar – von sanften Blasen bis zu intensiven Blasenwolken.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
      "/images/Nebelmaschine_rechts.png",
      "/images/Nebelmaschine_links.png",
      "/images/Nebelmaschine_Hochzeit.png",
    ],
    description: "Verwandelt die Tanzfläche zur Showbühne – kombinierbar mit Lichteffekten.",
    longDescription: "Die Nebelmaschine MIRA schafft atemberaubende Stimmung auf deiner Party. Mit dichtem, kühlem Nebel und in Kombination mit Lichteffekten wird deine Tanzfläche zur professionellen Showbühne.",
    specs: [
      { label: "Leistung", value: "1500W" },
      { label: "Größe", value: "ca. 53 x 38 x 33 cm" },
      { label: "Tankinhalt", value: "2,5 liter" },
      { label: "Fördermenge", value: "295m³ pro Minute" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Aufwärmzeit", value: "ca. 3,5 Minuten" },
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
        name: "Manuel D.",
        rating: 5,
        date: "Februar 2026",
        text: "Wir haben die Nebelmaschine spontan für unseren Faschingsumzug gemietet. Hat super funktioniert, der Nebel war dicht und die Maschine einfach zu bedienen.",
        event: "Faschings-Umzug",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "49,- €" },
      { label: "Jeder weiterer Tag", value: "+25,- €" },
      { label: "Nebelflüssigkeit", value: "inklusive" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Ist die Nebelmaschine sicher?",
        a: "Ja, die Nebelflüssigkeit ist ungiftig und für Innen- und Außenbereiche geeignet. Klärt allerdings immer im Vorfeld mit eurer Location, ob ihr Nebel in Innenbereichen verwenden dürft. ",
      },
      {
        q: "Wie lange hält die Nebelflüssigkeit?",
        a: "Die 2,5 Liter Tankinhalt reichen für ca. 4-6 Stunden kontinuierlichen Betrieb.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
       "/images/Musikbox_unten.png",
      "/images/Musikbox_oben.png",
      "/images/Musikbox_Szene.png",
    ],
    description: "Dezente Hintergrundmusik beim Sektempfang oder Dinner – Mikro für Reden inklusive.",
    longDescription: "Die Musik-Box SUNU ist das perfekte Audio-System für elegante Events. Mit hochwertigen Lautsprechern für Hintergrundmusik und einem professionellen Mikrofon für Reden und Ansprachen.",
    specs: [
      { label: "Art", value: "Mobiles Sound-System" },
      { label: "Leistung", value: "450W Verstärker" },
      { label: "Mikrofon", value: "2x Funk & 1x kabelgebunden" },
      { label: "Konnektivität", value: "Bluetooth, USB, CD" },
      { label: "Akkuleistung", value: "bis zu 6 Stunden" },
      { label: "Reichweite", value: "bis zu 50m" },
    ],
    features: [
      "Hochwertiger Sound",
      "Drahtlose Mikrofone",
      "Bluetooth-Konnektivität",
      "Einfache Bedienung",
      "Leichter Transport durch integrierte Rollen",
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
      { label: "Mietgebühr (1 Tag)", value: "99,- €" },
      { label: "Jeder weiterer Tag", value: "+50,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
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
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
      "/images/Hot_dog_leer.png",
      "/images/Hot_Dog_links.png",
      "/images/Hot_Dog_Hochzeit.png",
    ],
    description: "Leckere, warme Snacks – heiß, frisch und perfekt für den kleinen Hunger.",
    longDescription: "Der Hot-Dog-Wärmer SJEN ist das perfekte Snack-Highlight für dein Event. Mit professionellem Wärmesystem hältst du Hot Dogs, Würstchen und andere Snacks warm und appetitlich.",
    specs: [
      { label: "Leistung", value: "2000W" },
      { label: "Größe", value: "ca. 42 x 32 x 41 cm" },
      { label: "Aufwärmzeit", value: "ca. 30 Minuten" },
      { label: "Kapazität", value: "bis zu 200 Würstchen und 50 Brötchen gleichzeitig" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Temperaturbereich", value: "30 - 110 °C" },
    ],
    features: [
      "Professionelle Wärmeleistung",
      "Große Kapazität",
      "Einfache Bedienung",
      "Temperaturregelung",
      "Hygienisch",
      "Ideal als Mitternachtssnack",
    ],
    occasions: ["Party", "Hochzeit", "Firmenfeier", "Sommerfest"],
    reviews: [
      {
        name: "Daniel K.",
        rating: 5,
        date: "Januar 2026",
        text: "Die Hot Dogs waren der Hit! Alle Gäste haben sich daran bedient. Sehr zu empfehlen!",
        event: "Winterfeier",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "59,- €" },
      { label: "Jeder weiterer Tag", value: "+30,- €" },
      { label: "50 Hot-Dog-Tüten", value: "inklusive" },
      { label: "weitere 50 Hot-Dog-Tüten", value: "+10,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Hot Dogs passen rein?",
        a: "Der Wärmer hat Platz für bis zu 200 Würstchen und 50 Brötchen gleichzeitig",
      },
      {
        q: "Kann ich die Temperatur regeln?",
        a: "Ja, die Temperatur ist im Temperaturbereich 30-110 °C stufenlos regelbar für optimale Wärmehaltung.",
        },
      {
         q:"Müssen wir das Gerät nach der Nutzung reinigen?",
        a:"Eine Intensiv-Reinigung ist nicht erforderlich. Wir empfehlen, die Maschine nach der Nutzung mit klarem Wasser durchzuspülen. Eine gründliche Reinigung erfolgt bei uns nach jedem Event. Bei starker Verschmutzung behalten wir uns vor eine Reinigungsgebühr in Höhe von 25,- € zu berechnen.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
       "/images/Nacho-Wärmer_rechts.png",
      "/images/Nacho_Wärmer_vorne.png",
      "/images/Nacho_Wärmer_dekoriert.png",
    ],
    description: "Knusprige Nachos mit warmer, cremiger Käsesoße – echtes Kino-Feeling!",
    longDescription: "Der Nacho-Wärmer SALA ist die perfekte Ergänzung für deine Candy-Bar. Verschiedene Saucen und Toppings sorgen für Abwechslung, während die Nachos knusprig bleiben – ein echter Hit bei Gästen jeden Alters!",
    specs: [
      { label: "Leistung", value: "160W" },
      { label: "Größe", value: "ca. 38 x 31 x 52 cm" },
      { label: "Heiztemperatur", value: "bis 65 °C" },
      { label: "Kapazität", value: "45 liter" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Temperaturkontrolle", value: "Regelbar" },
    ],
    features: [
      "Knuspriger, warmer Snack",
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
        date: "November 2025",
        text: "Die Nachos waren der absolute Hit! Alle Kinder haben sie geliebt. Sehr zu empfehlen!",
        event: "Kindergeburtstag",
      },
    ],
    pricing: [
       { label: "Mietgebühr (1 Tag)", value: "49,- €" },
      { label: "Jeder weiterer Tag", value: "+25,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viele Nachos passen rein?",
        a: "Der Wärmer hat eine Kapazität von ca. 45 Litern – genug für 100+ Portionen.",
      },
      {
        q: "Kann ich die Temperatur regeln?",
        a: "Ja, die Temperatur ist stufenlos bis zu einem Temperaturbereich 65 °C stufenlos regelbar für optimale Wärmehaltung.",
        },
      {
         q:"Müssen wir das Gerät nach der Nutzung reinigen?",
        a:"Eine Intensiv-Reinigung ist nicht erforderlich. Wir empfehlen, die Maschine nach der Nutzung mit klarem Wasser durchzuspülen. Eine gründliche Reinigung erfolgt bei uns nach jedem Event. Bei starker Verschmutzung behalten wir uns vor eine Reinigungsgebühr in Höhe von 25,- € zu berechnen.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
     "/images/Popcorn_leer.jpg",
      "/images/Popcorn_offen.png",
      "/images/Popcorn_dekoriert.png",
    ],
    description: "Frisch, knusprig, unwiderstehlich – ein Must-Have für die Candy-Bar!",
    longDescription: "Die Popcornmaschine KENO ist der Klassiker auf jedem Event. Mit professionellem Wärmesystem und großem Behälter – der Duft von warmem Popcorn verbreitet sofort gute Stimmung!",
    specs: [
      { label: "Leistung", value: "1500W" },
      { label: "Größe", value: "ca. 56 x 42 x 76 cm" },
      { label: "Gewicht", value: "ca. 20 kg" },
      { label: "Produktionsrate", value: "ca. 6 kg pro Stunde" },
      { label: "Betrieb", value: "Stromanschluss erforderlich" },
      { label: "Aufwärmzeit", value: "Erstes Portion nach 2 Minuten" },
    ],
    features: [
      "Professionelle Qualität",
      "Große Kapazität",
      "Warmes Popcorn binnen Minuten",
      "Einfache Bedienung",
      "Nostalgisches Design",
      "Highlight für Kinder & Erwachsene",
    ],
    occasions: ["Party", "Hochzeit", "Kindergeburtstag", "Sommerfest"],
    reviews: [
      {
         name: "Julian Z.",
        rating: 5,
        date: "Februar 2025",
        text: "Die Popcornmaschine war in einem sehr guten, sauberen Zustand und funktionierte einwandfrei – frisches, leckeres Popcorn ohne Aufwand. Insgesamt ein toller Service mit hochwertigem Gerät. Sehr zu empfehlen!",
        event: "Private Feier (25 Gäste)",
      },
      {
        name: "Lara G.",
        rating: 5,
        date: "Januar 2026",
        text: "Die Popcornmaschine war ein voller Erfolg! Der Duft allein war schon toll, und die Gäste haben es geliebt.",
        event: "Winterfeier",
      },
    ],
    pricing: [
      { label: "Mietgebühr (1 Tag)", value: "59,- €" },
      { label: "Jeder weiterer Tag", value: "+30,- €" },
      { label: "50 Popcorn-Tüten", value: "inklusive" },
      { label: "weitere 50 Popcorn-Tüten", value: "+10,- €" },
      { label: "Lieferung im 50-km-Umkreis", value: "+50,- €" },
      { label: "Lieferung im 100-km-Umkreis", value: "+100,- €" },
      { label: "Abholung", value: "kostenlos (Gaggenau)" },
    ],
    faq: [
      {
        q: "Wie viel Popcorn kann ich produzieren?",
        a: "Bis zu 6 kg pro Stunde.",
      },
      {
        q: "Kann ich direkt Zucker dazugeben?",
        a: "Ja, der Zucker kann direkt in die Maschine gegeben werden.",
        },
      {
         q:"Müssen wir das Gerät nach der Nutzung reinigen?",
        a:"Eine Intensiv-Reinigung ist nicht erforderlich. Wir empfehlen, die Maschine nach der Nutzung mit klarem Wasser durchzuspülen. Eine gründliche Reinigung erfolgt bei uns nach jedem Event. Bei starker Verschmutzung behalten wir uns vor eine Reinigungsgebühr in Höhe von 25,- € zu berechnen.",
         },
      {
        q:"Kommt auf eure Preise noch die Mehrwertsteuer drauf?",
        a: "Wir sind ein Kleinunternehmen im Sinne von § 19 UStG. Das bedeutet: Wir berechnen keine Umsatzsteuer, da wir von der sogenannten Kleinunternehmerregelung Gebrauch machen.",
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

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

  const nextImage = () => {
    if (!product.images) return;
    setCurrentImageIndex((prev) => (prev === product.images!.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    if (!product.images) return;
    setCurrentImageIndex((prev) => (prev === 0 ? product.images!.length - 1 : prev - 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = null;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      nextImage();
    } else {
      previousImage();
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png" alt="memora Logo" className="h-8 w-auto filter invert" />
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
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {product.images && product.images.length > 0 ? (
                  <>
                    <img
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - Bild ${currentImageIndex + 1}`}
                      className="w-full h-auto object-contain"
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
