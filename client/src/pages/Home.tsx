/**
 * memora – miete den moment | CRO-optimierte Hauptseite
 * Design: Festive Elegance – Dunkelgrün + Gold-Amber + Cream
 * CRO-Strategie:
 *   1. Sticky Navigation mit eingebettetem CTA
 *   2. Hero: Einziger dominanter CTA + Social Proof Snippet
 *   3. Trust-Bar: Zahlen, Vertrauen, Garantien
 *   4. 3-Schritte-Prozess mit Urgency
 *   5. Produkte mit direktem "Jetzt anfragen" CTA
 *   6. Testimonials prominent
 *   7. Vereinfachtes Kontaktformular (3 Pflichtfelder)
 *   8. Floating WhatsApp Button mit Puls
 *   9. Sticky Bottom CTA Bar (Mobile)
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MenuIcon, Instagram, Music } from "lucide-react";
import Seo from "@/components/Seo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  extractNumericPrice,
  toAbsoluteUrl,
  toProductSlug,
} from "@/lib/seo";
import { PRODUCT_COMBINATIONS } from "@/lib/product-combinations";
import { Link } from "wouter";

// ─── Daten ───────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    name: "Fotospiegel GLOW",
    emoji: "🪞",
    price: "ab 299,- €",
    tag: "Bestseller",
    tagColor: "bg-amber-500",
    description: "Der moderne Garant für gute Laune – sofortige Schnappschüsse zum Mitnehmen. Einfach aufstellen, sofort loslegen.",
    occasions: ["Hochzeit", "Geburtstag", "Firmenfeier"],
    image: "/images/Fotospiegel_Übersichtsseite.png",
  },
  {
    id: 2,
    name: "Audio-Gästebuch VIVI",
    emoji: "📞",
    price: "ab 49,- €",
    tag: "Beliebt",
    tagColor: "bg-emerald-600",
    description: "Statt geschriebenen Gästebucheinträgen hinterlassen eure Gäste persönliche Sprachnachrichten – Gänsehaut garantiert!",
    occasions: ["Hochzeit", "Jubiläum", "Geburtstag"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/audio-gaestebuch-vivi-8TDr2DteLoHaGVv5GwKgqm.webp",
  },
  {
    id: 3,
    name: "Sofortbildkamera DIOR",
    emoji: "📸",
    price: "ab 29,- €",
    tag: "Günstig",
    tagColor: "bg-sky-600",
    description: "Echter Retro-Charme: Gäste halten ihre Momente sofort in den Händen – perfekt für Gästebücher und Fotowände.",
    occasions: ["Geburtstag", "Hochzeit", "Party"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/polaroidkamera-dior-mZPP2JPUnM27FCH5g72tbZ.webp",
  },
  {
    id: 4,
    name: "Slushmaschine EMIT",
    emoji: "🧊",
    price: "ab 149,- €",
    tag: "Sommer-Hit",
    tagColor: "bg-cyan-600",
    description: "Buntes Slush-Eis im Handumdrehen – fruchtig, eiskalt und ein echter Hingucker. Mit optionalem Erwachsenen-Upgrade!",
    occasions: ["Sommerparty", "Hochzeit", "Kindergeburtstag"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/slushmaschine-emit-HuhgPzCXyq2oCRg9XN26nA.webp",
  },
  {
    id: 5,
    name: "Karaokemaschine SING",
    emoji: "🎤",
    price: "ab 69,- €",
    tag: "Partyhit",
    tagColor: "bg-purple-600",
    description: "Solo, im Duett oder als Chor – hier entstehen unvergessliche Momente voller Spaß, Lacher und Applaus.",
    occasions: ["Geburtstag", "Firmenfeier", "Party"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/karaokemaschine-sing-E68YRAvtn3s3erpgQufsH5.webp",
  },
  {
    id: 6,
    name: "Zuckerwattemaschine LUNA",
    emoji: "🍭",
    price: "ab 49,- €",
    tag: "Kinder-Favorit",
    tagColor: "bg-pink-500",
    description: "Der Duft, die flauschige Konsistenz, der nostalgische Flair – eure Gäste fühlen sich direkt wie auf dem Jahrmarkt.",
    occasions: ["Kindergeburtstag", "Familienfeier", "Schulveranstaltung"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/zuckerwattemaschine-luna-YssUQSBqzSfkyTrshDaWmk.webp",
  },
  {
    id: 7,
    name: "Seifenblasenmaschine LILO",
    emoji: "🫧",
    price: "ab 59,- €",
    tag: "Romantisch",
    tagColor: "bg-rose-500",
    description: "Bringt Magie in die Luft – romantisch beim Hochzeitstanz oder verspielt im Freien. Märchenhafte Atmosphäre garantiert!",
    occasions: ["Hochzeit", "Verlobung", "Geburtstag"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
  },
  {
    id: 8,
    name: "Nebelmaschine MIRA",
    emoji: "☁️",
    price: "ab 49,- €",
    tag: "Effekt",
    tagColor: "bg-indigo-600",
    description: "Verwandelt die Tanzfläche zur Showbühne – kombinierbar mit Lichteffekten für atemberaubende Stimmung.",
    occasions: ["Hochzeit", "Party", "Firmenfeier"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
  },
  {
    id: 9,
    name: "Musik-Box inkl. Mikro SUNU",
    emoji: "🎵",
    price: "ab 99,- €",
    tag: "Audio",
    tagColor: "bg-teal-600",
    description: "Dezente Hintergrundmusik beim Sektempfang oder Dinner – Mikrofone für Reden und Ansprachen sind inklusive.",
    occasions: ["Hochzeit", "Firmenfeier", "Jubiläum"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
  },
  {
    id: 10,
    name: "Hot-Dog-Wärmer SJEN",
    emoji: "🌭",
    price: "ab 59,- €",
    tag: "Mitternachtssnack",
    tagColor: "bg-orange-600",
    description: "Leckere, warme Snacks – heiß, frisch und perfekt für den kleinen Hunger zwischendurch oder als Mitternachtssnack.",
    occasions: ["Party", "Hochzeit", "Firmenfeier"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
  },
  {
    id: 11,
    name: "Nacho-Wärmer SALA",
    emoji: "🦦",
    price: "ab 49,- €",
    tag: "Lecker",
    tagColor: "bg-yellow-600",
    description: "Knusprige, warme Nachos - ein ganz besonderer Snack, der garantiert schnell zum Lieblingsspot eurer Gäste wird.",
    occasions: ["Party", "Geburtstag", "Firmenfeier"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
  },
  {
    id: 12,
    name: "Popcornmaschine KENO",
    emoji: "🍿",
    price: "ab 59,- €",
    tag: "Klassiker",
    tagColor: "bg-red-600",
    description: "Frisch, knusprig, unwiderstehlich – der Duft verbreitet sofort gute Stimmung. Ein Must-Have für die Candy-Bar!",
    occasions: ["Party", "Hochzeit", "Kindergeburtstag"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/Fotospiegel_dekoriert.png",
    alt: "Fotospiegel GLOW im Eventeinsatz",
    caption: "✨ Fotospiegel-Highlight an einem 35. Geburtstag",
  },
  {
    src: "/images/Fotospiegel_Ergebnis.png",
    alt: "Fröhliche Feier mit Party-Atmosphäre am Fotospiegel",
    caption: "🪩 Unser Fotospiegel im Einsatz",
  },
  {
    src: "/images/Seifenblasen_Hochzeit_Kuss.png",
    alt: "Gäste feiern gemeinsam beim Event mit Seifenblasenmaschine",
    caption: "🫧 Fotoshooting mit Seifenblasen",
  },
  {
    src: "/images/Audio-Gästebuch_Polaroid.jpg",
    alt: "Elegante Hochzeit mit Audio-Gästebuch und Sofortbildkamera",
    caption: "☎️ Elegante Hochzeit mit Audio-Gästebuch und Sofortbildkamera",
  },
  {
    src: "/images/Karaoke_Weihnachtsfeier.jpg",
    alt: "Gäste singen Karaoke auf der Party",
    caption: "🎤 Karaoke-Spaß bei der Weihnachtsfeier des FV Bad Rotenfels",
  },
  {
    src: "/images/Zuckerwatte_Kindergeburtstag.png",
    alt: "Zuckerwattemaschine LUNA auf einem Event",
    caption: "🍭 Süßer Genuss bei einem Kindergeburtstag",
  },
];

const TESTIMONIALS = [
  {
    name: "Lena Fellmoser",
    date: "Februar 2026",
    rating: 5,
    text: "Wir haben die Slushi-Maschine für unsere Faschingsfeier ausgeliehen und sind absolut begeistert! Die Kommunikation war von Anfang an hervorragend, schnell und unkompliziert. Die Maschine war ein echtes Highlight.",
    event: "Faschingsfeier",
    avatar: "L",
    avatarColor: "bg-amber-500",
  },
  {
    name: "Christine Be",
    date: "Februar 2026",
    rating: 5,
    text: "Wir haben das Gästetelefon für die goldene Hochzeit meiner Eltern gemietet. Der Kontakt verlief reibungslos, die Kommunikation war sehr nett. Die Aufnahmen sind sehr gut! Fazit: sehr gut, immer wieder gerne!",
    event: "Goldene Hochzeit",
    avatar: "C",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "Joshua Deck",
    date: "Februar 2026",
    rating: 5,
    text: "Ich habe den Fotospiegel für meinen Geburtstag geliehen. Das Team war super nett und der Ablauf war sehr unkompliziert! Alle Gäste waren begeistert.",
    event: "Geburtstag",
    avatar: "J",
    avatarColor: "bg-sky-600",
  },
  {
  name: "Fabio",
    date: "Februar 2026",
    rating: 5,
    text: "Wir haben im Januar für den 60. Geburtstag meines Vaters eine Karaokemaschine über Memora gemietet und selbst abgeholt. Die beiden vor Ort waren sehr zuvorkommend, freundlich und haben alles ruhig erklärt. Die Abholung lief absolut unkompliziert. Die Karaokemaschine war in einwandfreiem Zustand, leicht aufzubauen und zu bedienen. Unsere Gäste hatten riesigen Spaß, Karaoke war definitiv das Highlight des Abends! Klare Empfehlung, wir würden jederzeit wieder mieten.",
    event: "Geburtstag",
    avatar: "F",
    avatarColor: "bg-amber-600",
     },
  {
  name: "Marc",
    date: "Februar 2026",
    rating: 5,
    text: "Der Fotospiegel war das absolute Highlight meiner Geburtstagsfeier! Super einfache Bedienung, tolle Fotoqualität und jede Menge Spaß für alle Gäste. Aufbau und Service liefen reibungslos und professionell. Klare Empfehlung – würde ich jederzeit wieder buchen!",
    event: "Geburtstag",
    avatar: "M",
    avatarColor: "bg-emerald-600",
     },
  {
  name: "Julian",
    date: "Februar 2026",
    rating: 5,
    text: "Der gesamte Ablauf war absolut unkompliziert und professionell. Die Kommunikation war freundlich, schnell und zuverlässig, Absprachen wurden perfekt eingehalten. Übergabe und Rückgabe verliefen reibungslos. Die Popcornmaschine war in einem sehr guten, sauberen Zustand und funktionierte einwandfrei – frisches, leckeres Popcorn ohne Aufwand. Insgesamt ein toller Service mit hochwertigem Gerät. Sehr zu empfehlen!",
    event: "Private Feier",
    avatar: "J",
    avatarColor: "bg-blue-600",
     },
  {
  name: "Luca Ciadamidaro",
    date: "Februar 2026",
    rating: 5,
    text: "Habe den Fotospiegel für meinen Geburtstag gehabt. Alles von Lieferung, Aufbau, Unterhaltung bis Abholung war top. Der Spiegel wurde den ganzen Abend viel genutzt, die Fotos sind in einer sehr guten Qualität, sind auf einer Cloud gespeichert und können sogar direkt ausgedruckt werden. Empfehle es jedem weiter!",
    event: "Geburtstag",
    avatar: "LC",
    avatarColor: "bg-yellow-600",
      },
  {
  name: "Adrian Ehlinger",
    date: "Januar 2026",
    rating: 5,
    text: "Ich kann memora jedem wärmstens empfehlen. Ob Popcornmaschine, Karaokemaschine oder der Fotospiegel - das ganze Equipment war in einem sehr guten Zustand und hat genau den gewünschten Effekt erzielt: Gute Laune bei den Gästen. Die Anfrage über die Webseite lief schnell sowie unkompliziert ab und die beiden Ansprechpartner waren sehr zuvorkommend und hilfsbereit.",
    event: "Geburtstag",
    avatar: "AE",
    avatarColor: "bg-amber-600",
    },
  {
  name: "Lea Stegmaier",
    date: "Dezember 2025",
    rating: 5,
    text: "Ich hatte die Karaokemaschine für Silvester und war sehr zufrieden. Einfache Bestellung und Lieferung, super nettes Team die mir beim Anschließen geholfen haben und auch die Rückgabe hat problemlos funktioniert. Kann es nur empfehlen und werde wieder bei Memora bestellen!",
    event: "Silvesterfeier",
    avatar: "LS",
    avatarColor: "bg-emerald-600",
      },
  {
  name: "Stefan Wieland",
    date: "Dezember 2025",
    rating: 5,
    text: "Waren Mega zufrieden , der Service war echt klasse das abholen und zurückbringen funktionierte sehr gut . Wir hatten die Karaoke Maschine für ein Event , und das war der Hammer. Funktionierte sehr gut und wir hatten alle einen Riesen Spaß damit. Gerne wieder !",
    event: "Weihnachtsfeier",
    avatar: "SW",
    avatarColor: "bg-sky-600",
      },
  {
  name: "Katrin van Himbergen",
    date: "Dezember 2025",
    rating: 5,
    text: "Mega bequem: Online auswählen, Anfrage absenden, Lieferung — alles ohne Stress. Die Geräte waren hochwertig und funktionierten problemlos. Unsere Gäste waren total begeistert. Danke für die tolle Unterstützung!",
    event: "Hochzeit",
    avatar: "KV",
    avatarColor: "bg-blue-600",
  },
];

type Product = (typeof PRODUCTS)[number];

const SERVICE_AREAS = [
  "Karlsruhe",
  "Rastatt",
  "Baden-Baden",
  "Gaggenau",
  "Ettlingen",
  "Buehl",
];

const HOME_FAQ_ITEMS = [
  {
    question: "Wie funktioniert die Miete bei memora?",
    answer:
      "Du suchst dir auf unserer Webseite die passenden Produkte aus und stellst uns dann eine kostenlose Anfrage per WhatsApp, E-Mail oder Telefon. Wir prüfen die Verfügbarkeit, stimmen alles mit dir ab und danach kannst du die Ausstattung in Gaggenau abholen oder dir liefern lassen.",
  },
  {
    question: "Kann ich die Produkte abholen oder liefern lassen?",
    answer:
      "Ja. Du kannst die Produkte kostenlos in Gaggenau abholen oder dir die Ausstattung bequem liefern lassen. Auf Wunsch liefern wir zu eurer Location im Umkreis von bis zu 100 km.",
  },
  {
    question: "In welchem Gebiet liefert ihr?",
    answer:
      "Wir vermieten Eventausstattung mit Fokus auf Karlsruhe, Rastatt, Baden-Baden, Gaggenau, Ettlingen und Bühl. Wenn deine Stadt nicht dabei ist, kannst du uns trotzdem eine Anfrage senden und wir prüfen individuell, ob eine Lieferung möglich ist.",
  },
  {
    question: "Ist eine Einweisung bei den Geräten dabei?",
    answer:
      "Ja. Alle Geräte sind sofort einsatzbereit und wir erklären euch alles in wenigen Minuten, damit ihr direkt loslegen könnt.",
  },
];

const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "info@mietedenmoment.de",
      telephone: "+49 1522 5896570",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muehlstrasse 8c",
        postalCode: "76571",
        addressLocality: "Gaggenau",
        addressCountry: "DE",
      },
      areaServed: SERVICE_AREAS,
      sameAs: [
        "https://www.instagram.com/memora_miete_den_moment/?igsh=MnFhYTBtNGowMjhk",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+49 1522 5896570",
          email: "info@mietedenmoment.de",
          areaServed: SERVICE_AREAS,
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "5",
      },
      priceRange: "EUR",
    },
    ...PRODUCTS.map((product) => {
      const slug = toProductSlug(product.name);
      const serviceUrl = `${SITE_URL}/produkt/${slug}`;

      return {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: `${product.name} Vermietung`,
        serviceType: product.name,
        description: product.description,
        url: serviceUrl,
        areaServed: SERVICE_AREAS,
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
        category: "Eventausstattung Vermietung",
        audience: {
          "@type": "Audience",
          audienceType: product.occasions.join(", "),
        },
        offers: {
          "@type": "Offer",
          url: serviceUrl,
          priceCurrency: "EUR",
          price: extractNumericPrice(product.price),
          availability: "https://schema.org/InStock",
        },
        image: toAbsoluteUrl(product.image),
      };
    }),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: HOME_FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

// ─── Hilfsfunktionen ──────────────────────────────────────────────────────────

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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

// ─── Animierter Zähler ────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Hauptkomponente ──────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", products: [] as string[], message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Testimonial Karussell
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const productIdParam = window.location.search ? new URLSearchParams(window.location.search).get("productId") : null;
    const productId = productIdParam ? Number(productIdParam) : NaN;

    if (!Number.isInteger(productId)) return;

    const selectedProduct = PRODUCTS.find((product) => product.id === productId);
    if (!selectedProduct) return;

    const value = `${selectedProduct.name} (${selectedProduct.price})`;

    setFormSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(value) ? prev.products : [...prev.products, value],
    }));

    requestAnimationFrame(() => {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    });

    const nextHash = window.location.hash || "#kontakt";
    window.history.replaceState({}, "", `${window.location.pathname}${nextHash}`);
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductInquiry = (product: Product) => {
    const value = `${product.name} (${product.price})`;

    setFormSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(value) ? prev.products : [...prev.products, value],
    }));
    scrollToContact();
  };

  const handleBundleInquiry = (productSlugs: string[]) => {
    setFormSubmitted(false);
    const bundleProducts = productSlugs
      .map(slug => PRODUCTS.find(p => toProductSlug(p.name) === slug))
      .filter(Boolean)
      .map(p => `${p!.name} (${p!.price})`)
      .filter(val => !formData.products.includes(val));
    
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, ...bundleProducts],
    }));
    
    setTimeout(() => {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Touch handlers for testimonial swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
    }
    if (isRightSwipe) {
      setActiveTestimonial(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.products.length === 0) {
      alert("Bitte wähle mindestens ein Produkt aus.");
      return;
    }

    const productList = formData.products.join(" | ");
    // Öffnet WhatsApp mit vorausgefüllter Nachricht
    const msg = encodeURIComponent(
      `Hallo memora-Team,\n\nName: ${formData.name}\nTelefon: ${formData.phone}\nEvent-Datum: ${formData.date}\nProdukte: ${productList}\nNachricht: ${formData.message}`
    );
    window.open(`https://wa.me/4915225896570?text=${msg}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Seo
        title="Eventausstattung mieten in Karlsruhe, Rastatt & Baden-Baden | memora"
        description="Eventausstattung mieten in Karlsruhe, Rastatt, Baden-Baden und Umgebung: Fotospiegel, Slushmaschine, Audio-Gaestebuch, Popcornmaschine und mehr. Abholung in Gaggenau oder Lieferung im Umkreis von bis zu 100 km."
        canonicalUrl={SITE_URL}
        image={DEFAULT_OG_IMAGE}
        structuredData={HOME_STRUCTURED_DATA}
      />

      {/* ═══════════════════════════════════════════════════
          STICKY NAVIGATION
      ═══════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.22_0.06_155)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container relative flex items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png" alt="memora Logo" className="h-10 w-auto filter invert" />
          </a>

          {/* Mobile Menu - rechts */}
          <div className="md:hidden absolute right-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[oklch(0.75_0.14_80)] hover:bg-white/10"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[oklch(0.22_0.06_155)] border-l border-white/20">
              <div className="flex flex-col gap-6 mt-6">
                <nav className="flex flex-col gap-4 items-center">
                  <a
                    href="#impressionen"
                    className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('impressionen')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    Impressionen
                  </a>
                  <a
                    href="#wie-es-funktioniert"
                    className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('wie-es-funktioniert')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    So geht's
                  </a>
                  <a
                    href="#produkte"
                    className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('produkte')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    Produkte
                  </a>
                  <a
                    href="#bewertungen"
                    className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('bewertungen')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    Bewertungen
                  </a>
                  <a
                    href="#kontakt"
                    className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                  >
                    Kontakt
                  </a>
                </nav>
                <div className="flex flex-col gap-4 pt-4 border-t border-white/20 items-center">
                  <a
                    href="tel:+4915225896570"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <PhoneIcon />
                    <span>0152 258 96570</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        scrollToContact();
                      }, 300);
                    }}
                    className="btn-gold px-4 py-3 rounded-lg text-sm font-bold pulse-gold w-full text-center max-w-xs"
                  >
                    Jetzt anfragen
                  </button>
                  <div className="flex gap-6 pt-4">
                    <a
                      href="https://www.instagram.com/memora_miete_den_moment/?igsh=MnFhYTBtNGowMjhk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors"
                      title="Folge uns auf Instagram"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@memora303?_t=ZN-90SplgHjs6Y&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors"
                      title="Folge uns auf TikTok"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Music className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full ml-4">
            {/* Desktop Nav */}
            <nav className="flex items-center gap-6 text-sm text-white/80">
              <a href="#impressionen" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Impressionen</a>
              <a href="#wie-es-funktioniert" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">So geht's</a>
              <a href="#produkte" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Produkte</a>
              <a href="#bewertungen" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Bewertungen</a>
              <a href="#kontakt" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Kontakt</a>
            </nav>

            {/* Nav CTA */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+4915225896570"
                className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors"
              >
                <PhoneIcon />
                <span className="hidden lg:inline">0152 258 96570</span>
              </a>
              <a
                href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hero-wedding-bxuza95kZppK3iMUgEStpR.webp')` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.06_155/0.85)] via-[oklch(0.12_0.06_155/0.65)] to-[oklch(0.12_0.06_155/0.3)]" />

        <div className="container relative z-10 pt-24 pb-16">
          {/* H1 for SEO - visually hidden */}
          <h1 className="sr-only">Eventausstattung mieten in Karlsruhe, Rastatt und Baden-Baden | memora - miete den moment</h1>
          <div className="max-w-2xl">
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="urgency-badge">🔥 Sommersaison – Jetzt Termin sichern</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Mach dein Event
              <br />
              <span className="text-[oklch(0.75_0.14_80)] italic">unvergesslich.</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl"
            >
              Hochwertige Eventausstattung mieten in Karlsruhe, Rastatt & erweiterter Umgebung.
              Fotospiegel, Slushmaschinen, Audio-Gästebücher und mehr –
              <strong className="text-white"> einfach, schnell, unkompliziert.</strong>
            </motion.p>

            {/* Social Proof Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex -space-x-2">
                {["L", "C", "J"].map((letter, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white ${
                      i === 0 ? "bg-amber-500" : i === 1 ? "bg-emerald-600" : "bg-sky-600"
                    }`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <StarRating />
                  <span className="text-white font-bold text-sm ml-1">5.0</span>
                </div>
                <p className="text-white/70 text-xs">Werde auch Du ein begeisterter Kunde</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="sm:hidden mb-8"
            >
              <button
                onClick={scrollToContact}
                className="btn-gold pulse-gold w-full px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
              >
                <span>✨ Kostenlos anfragen</span>
              </button>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden sm:flex"
            >
              <button
                onClick={scrollToContact}
                className="btn-gold pulse-gold px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
              >
                <span>✨ Kostenlos anfragen</span>
              </button>
            </motion.div>

            {/* Micro Trust */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-white/50 text-sm mt-8"
            >
              ✓ Unverbindlich anfragen &nbsp;·&nbsp; ✓ Kostenlose Beratung &nbsp;·&nbsp; ✓ Antwort innerhalb von 2h
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="text-xs">Mehr entdecken</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          IMAGE GALLERY
      ═══════════════════════════════════════════════════ */}
      <section id="impressionen" className="py-20 bg-[oklch(0.97_0.012_85)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Impressionen unserer Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Echte Momente, lebendige Stimmung und unsere Ausstattung in Aktion.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-border"
              >
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xl font-semibold text-foreground leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[oklch(0.32_0.07_155)] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {([
              { value: 20, suffix: "+", label: "zufriedene Kunden" },
              { value: 5, suffix: "★", label: "Google-Bewertung" },
              { value: 12, suffix: "", label: "Produkte verfügbar" },
              { value: 2, suffix: "h", label: "Antwortzeit" },
            ]).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white"
              >
                <div className="text-3xl font-bold text-[oklch(0.75_0.14_80)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WIE ES FUNKTIONIERT
      ═══════════════════════════════════════════════════ */}
      <section id="wie-es-funktioniert" className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              In 3 Schritten zum perfekten Event
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Kein Stress, kein Aufwand – wir kümmern uns um alles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[oklch(0.75_0.14_80)] to-[oklch(0.75_0.14_80)] opacity-20" />

            {([
              {
                step: "01",
                icon: "🔍",
                title: "Stöbern & auswählen",
                desc: "Entdecke unsere 12 Highlights und wähle die passenden Produkte für dein nächstes Event – von Fotospiegel bis Slushmaschine.",
                cta: "Produkte ansehen",
                href: "#produkte",
              },
              {
                step: "02",
                icon: "💬",
                title: "Unverbindlich anfragen",
                desc: "Stell uns eine kostenlose Anfrage direkt per WhatsApp oder Formular. Wir prüfen die Verfügbarkeit und melden uns innerhalb von 12 Stunden.",
                cta: "Jetzt anfragen",
                href: "#kontakt",
                highlight: true,
              },
              {
                step: "03",
                icon: "🚀",
                title: "Abholen oder liefern",
                desc: "Kostenlose Abholung bei uns oder bequeme Lieferung & Aufbau – du entscheidest. Wir machen dein Event zum Erlebnis.",
                cta: "Lieferinfo",
                href: "#kontakt",
              },
            ]).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl p-8 ${
                  step.highlight
                    ? "bg-[oklch(0.32_0.07_155)] text-white shadow-2xl scale-105"
                    : "bg-white border border-border shadow-sm"
                }`}
              >
                {step.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[oklch(0.75_0.14_80)] text-[oklch(0.18_0.02_65)] text-xs font-bold px-3 py-1 rounded-full">
                      Empfohlen
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className={`text-sm font-bold mb-2 ${step.highlight ? "text-[oklch(0.75_0.14_80)]" : "text-[oklch(0.75_0.14_80)]"}`}>
                  Schritt {step.step}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${step.highlight ? "text-white" : "text-foreground"}`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${step.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  {step.desc}
                </p>
                <a
                  href={step.href}
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${
                    step.highlight
                      ? "text-[oklch(0.75_0.14_80)]"
                      : "text-[oklch(0.32_0.07_155)]"
                  } hover:underline`}
                >
                  {step.cta} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ÜBER UNS - TRUST & E-A-T
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Warum memora?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Weil besondere Momente mehr verdienen als Standardlösungen. Wir schaffen Erlebnisse, die eure Feier nicht nur schöner machen, sondern unvergesslich.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "⭐",
                title: "5.0 Sterne Bewertung",
                desc: "100% zufriedene Kunden – Qualität und Service sind uns wichtig",
              },
              {
                icon: "🚀",
                title: "Produkte für sämtliche Anlässe",
                desc: "Hochzeiten, Geburtstage, Firmenfeiern – wir haben Erfahrung",
              },
              {
                icon: "🎯",
                title: "Unkompliziert & zuverlässig",
                desc: "Schnelle Reaktion, faire Preise, persönlicher Service",
              },
              {
                icon: "🏆",
                title: "Professionelle Geräte",
                desc: "Hochwertige Produkte, regelmäßig gewartet und desinfiziert",
              },
              {
                icon: "📍",
                title: "Lokal & nachhaltig",
                desc: "Ansässig in Gaggenau – unterstützen wir die lokale Community",
              },
              {
                icon: "💬",
                title: "2h Reaktionszeit",
                desc: "Deine Anfragen werden innerhalb von 2 Stunden beantwortet",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow bg-[oklch(0.97_0.012_85)]"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[oklch(0.32_0.07_155)] to-[oklch(0.32_0.07_155/0.8)] text-white rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bereit für dein perfektes Event?
            </h3>
            <p className="mb-6 text-white/90">
              Lass dich von unserer Erfahrung und Leidenschaft überzeugen
            </p>
            <button
              onClick={scrollToContact}
              className="btn-gold px-8 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform"
            >
              Jetzt Anfrage stellen
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRODUKTE
      ═══════════════════════════════════════════════════ */}
      <section id="produkte" className="py-20 bg-[oklch(0.95_0.012_85)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Unsere Highlights für dein Event
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Hochwertige Ausstattung für Hochzeiten, Geburtstage und Firmenfeiern –
              Region Karlsruhe, Rastatt, Baden-Baden.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((product, i) => {
              const slug = toProductSlug(product.name);
              return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="product-card group cursor-pointer"
              >
                <Link href={`/produkt/${slug}`} 
                  className="block hover:opacity-95 transition-opacity"
                >
                {/* Product Image / Emoji */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[oklch(0.93_0.015_85)] to-[oklch(0.88_0.02_85)]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.name} - Eventausstattung Vermietung für ${product.occasions.join(", ")}`}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">
                      {product.emoji}
                    </div>
                  )}
                  {/* Tag Badge */}
                  <div className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {product.tag}
                  </div>
                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[oklch(0.18_0.02_65)] text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-foreground hover:text-[oklch(0.32_0.07_155)] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Occasions */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.occasions.map((occ) => (
                      <span key={occ} className="text-xs bg-[oklch(0.93_0.015_85)] text-[oklch(0.32_0.07_155)] px-2 py-0.5 rounded-full font-medium">
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
                </Link>
                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() => handleProductInquiry(product)}
                    className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
                  >
                    <WhatsAppIcon />
                    Jetzt anfragen
                  </button>
                </div>
              </motion.div>
            );
            })}
          </div>

          {/* Expanded Products Section */}
          {showAllProducts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.slice(6, 12).map((product, i) => {
                  const slug = toProductSlug(product.name);
                  return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="product-card group cursor-pointer"
                  >
                    <Link href={`/produkt/${slug}`} 
                      className="block hover:opacity-95 transition-opacity"
                    >
                    {/* Product Image / Emoji */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[oklch(0.93_0.015_85)] to-[oklch(0.88_0.02_85)]">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={`${product.name} - Eventausstattung Vermietung für ${product.occasions.join(", ")}`}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-7xl">
                          {product.emoji}
                        </div>
                      )}
                      {/* Tag Badge */}
                      <div className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                        {product.tag}
                      </div>
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[oklch(0.18_0.02_65)] text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 text-foreground hover:text-[oklch(0.32_0.07_155)] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Occasions */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {product.occasions.map((occ) => (
                          <span key={occ} className="text-xs bg-[oklch(0.93_0.015_85)] text-[oklch(0.32_0.07_155)] px-2 py-0.5 rounded-full font-medium">
                            {occ}
                          </span>
                        ))}
                      </div>
                    </div>
                    </Link>
                    <div className="px-5 pb-5">
                      <button
                        type="button"
                        onClick={() => handleProductInquiry(product)}
                        className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
                      >
                        <WhatsAppIcon />
                        Jetzt anfragen
                      </button>
                    </div>
                  </motion.div>
                );
                })}
              </div>
            </motion.div>
          )}

          {/* Bottom CTA / Toggle Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Noch nicht das Richtige gefunden? Wir haben noch mehr!</p>
            <button
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="btn-green px-8 py-3 rounded-xl font-semibold"
            >
              {showAllProducts ? "Weniger Produkte anzeigen ↑" : "Alle Produkte anzeigen →"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HÄUFIG KOMBINIERT - PRODUKT-BUNDLES
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.93_0.015_85)] to-[oklch(0.95_0.01_85)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Gerne kombiniert
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Diese Produkte ergänzen sich perfekt – für noch mehr Spaß und Abwechslung auf eurer Feier.
            </p>
          </motion.div>

          {/* Featured Combinations */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hochzeit-Bundle */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">💍</div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Das Hochzeits-Paket
                </h3>
                <p className="text-muted-foreground text-sm">
                  Erinnerungen & Atmosphäre
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {["fotospiegel-glow", "audio-gaestebuch-vivi", "sofortbildkamera-dior"].map((slug) => {
                  const product = PRODUCTS.find(p => toProductSlug(p.name) === slug);
                  return (
                    <Link key={slug} href={`/produkt/${slug}`} className="block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-[oklch(0.97_0.012_85)] hover:bg-[oklch(0.93_0.015_85)] transition-colors">
                        <span className="text-2xl">{product?.emoji}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground text-sm">{product?.name}</div>
                          <div className="text-xs text-muted-foreground">{product?.price}</div>
                        </div>
                        <span className="text-[oklch(0.75_0.14_80)] text-lg">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => handleBundleInquiry(["fotospiegel-glow", "audio-gaestebuch-vivi", "sofortbildkamera-dior"])}
                className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Paket anfragen
              </button>
            </motion.div>

            {/* Party-Bundle */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Das Party-Paket
                </h3>
                <p className="text-muted-foreground text-sm">
                  Karaoke & Show-Effekte
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {["karaokemaschine-sing", "seifenblasenmaschine-lilo", "nebelmaschine-mira"].map((slug) => {
                  const product = PRODUCTS.find(p => toProductSlug(p.name) === slug);
                  return (
                    <Link key={slug} href={`/produkt/${slug}`} className="block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-[oklch(0.97_0.012_85)] hover:bg-[oklch(0.93_0.015_85)] transition-colors">
                        <span className="text-2xl">{product?.emoji}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground text-sm">{product?.name}</div>
                          <div className="text-xs text-muted-foreground">{product?.price}</div>
                        </div>
                        <span className="text-[oklch(0.75_0.14_80)] text-lg">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => handleBundleInquiry(["karaokemaschine-sing", "seifenblasenmaschine-lilo", "nebelmaschine-mira"])}
                className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Paket anfragen
              </button>
            </motion.div>

            {/* Gastro-Bundle */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🍿</div>
                <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Das Gastro-Paket
                </h3>
                <p className="text-muted-foreground text-sm">
                  Getränke & Snacks
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {["slushmaschine-emit", "hot-dog-waermer-sjen", "popcornmaschine-keno"].map((slug) => {
                  const product = PRODUCTS.find(p => toProductSlug(p.name) === slug);
                  return (
                    <Link key={slug} href={`/produkt/${slug}`} className="block">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-[oklch(0.97_0.012_85)] hover:bg-[oklch(0.93_0.015_85)] transition-colors">
                        <span className="text-2xl">{product?.emoji}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground text-sm">{product?.name}</div>
                          <div className="text-xs text-muted-foreground">{product?.price}</div>
                        </div>
                        <span className="text-[oklch(0.75_0.14_80)] text-lg">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => handleBundleInquiry(["slushmaschine-emit", "hot-dog-waermer-sjen", "popcornmaschine-keno"])}
                className="w-full btn-gold py-2.5 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Paket anfragen
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section
        id="bewertungen"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/social-proof-bg-gS42g2yciKsdt6zp5Kz5bx.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.97_0.012_85/0.92)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center gap-2">
              <StarRating />
              <span className="font-bold text-lg">5.0</span>
              <span className="text-muted-foreground">· Google Bewertungen</span>
            </div>
          </motion.div>

          {/* Featured Testimonial */}
          <div
            ref={testimonialRef}
            className="max-w-3xl mx-auto mb-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full ${TESTIMONIALS[activeTestimonial].avatarColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {TESTIMONIALS[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{TESTIMONIALS[activeTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{TESTIMONIALS[activeTestimonial].event} · {TESTIMONIALS[activeTestimonial].date}</div>
                  <StarRating count={TESTIMONIALS[activeTestimonial].rating} />
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[oklch(0.75_0.14_80)]" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15l-4-4 1.414-1.414L11 14.172l6.586-6.586L19 9l-8 8z"/>
                  </svg>
                </div>
              </div>
              <blockquote className="text-foreground leading-relaxed text-base italic">
                "{TESTIMONIALS[activeTestimonial].text}"
              </blockquote>
            </motion.div>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center gap-2 mb-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeTestimonial
                    ? "bg-[oklch(0.75_0.14_80)] w-6"
                    : "bg-[oklch(0.75_0.14_80/0.3)]"
                }`}
              />
            ))}
          </div>

          {/* CTA after testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4 text-lg">
              Werde Teil unserer glücklichen Kunden!
            </p>
            <button
              onClick={scrollToContact}
              className="btn-gold pulse-gold px-8 py-4 rounded-xl text-base font-bold"
            >
              ✨ Jetzt kostenlos anfragen
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          KONTAKT / ANFRAGE-FORMULAR
      ═══════════════════════════════════════════════════ */}
      <section id="kontakt" ref={contactRef} className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-headline text-4xl md:text-5xl mb-3">
                Dein Event verdient
                <br />
                <span className="text-[oklch(0.32_0.07_155)] italic">das Beste.</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Schreib uns – wir melden uns <strong>innerhalb von 2 Stunden</strong> zurück
                und beraten dich kostenlos und unverbindlich.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Dein Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        className="form-input"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Telefon / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+49 152 ..."
                        className="form-input"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Wann ist dein Event? *
                    </label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Für welche Produkte interessierst du dich? *
                    </label>
                    <div className="grid gap-2 p-4 rounded-3xl border border-border bg-[oklch(0.97_0.012_85)]">
                      {PRODUCTS.map((product) => (
                        <label key={product.id} className="flex items-center gap-3 text-sm text-foreground">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-border text-amber-500 focus:ring-amber-300"
                            checked={formData.products.includes(`${product.name} (${product.price})`)}
                            onChange={(e) => {
                              const value = `${product.name} (${product.price})`;
                              setFormData((prev) => ({
                                ...prev,
                                products: e.target.checked
                                  ? [...prev.products, value]
                                  : prev.products.filter((item) => item !== value),
                              }));
                            }}
                          />
                          <span>{product.name} – {product.price}</span>
                        </label>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Mehrfachauswahl möglich. Das Feld ist erforderlich.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Erzähl uns mehr über dein Event (optional) 
                    </label>
                    <textarea
                      rows={3}
                      placeholder="z.B. Hochzeit mit 80 Personen in Karlsruhe, möchte die Produkte gerne selbst abholen, etc."
                      className="form-input resize-none"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Trust before submit */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-[oklch(0.93_0.015_85)] rounded-lg p-3">
                    <span className="text-[oklch(0.58_0.18_145)] text-lg">✓</span>
                    <span>100% kostenlos & unverbindlich – keine versteckten Kosten</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold pulse-gold py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon />
                    Anfrage per WhatsApp senden
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Oder direkt anrufen:{" "}
                    <a href="tel:+4915225896570" className="text-[oklch(0.32_0.07_155)] font-semibold hover:underline">
                      0152 258 96570
                    </a>
                    {" "}· E-Mail:{" "}
                    <a href="mailto:info@mietedenmoment.de" className="text-[oklch(0.32_0.07_155)] font-semibold hover:underline">
                      info@mietedenmoment.de
                    </a>
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[oklch(0.93_0.015_85)] rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Anfrage gesendet!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Wir melden uns innerhalb der nächsten 2 Stunden bei dir.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-sm text-[oklch(0.32_0.07_155)] hover:underline"
                  >
                    Neue Anfrage stellen
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Right: Trust & Info */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {/* Hero Image */}
              <div className="order-2 lg:order-1 hidden lg:block rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hero-party-QUt8YTdG6QANTMs6YJXq7z.webp"
                  alt="Fröhliche Feier mit memora Ausstattung"
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Trust Points */}
              <div className="order-3 lg:order-2 space-y-3">
                {([
                  { icon: "⚡", title: "Schnelle Antwort", desc: "Wir melden uns innerhalb von 2 Stunden – auch abends und am Wochenende." },
                  { icon: "🚚", title: "Lieferung & Abholung", desc: "Kostenlose Abholung oder bequeme Lieferung im 100-km-Umkreis von Gaggenau." },
                  { icon: "🎓", title: "Einweisung inklusive", desc: "Alle Geräte sind sofort einsatzbereit – wir erklären alles in wenigen Minuten." },
                  { icon: "💚", title: "Faire Preise", desc: "Transparente Preise ohne versteckte Kosten. Schon ab 29,- € für dein Event." },
                ]).map((point, i) => (
                  <div key={i} className="trust-badge">
                    <span className="text-2xl">{point.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{point.title}</div>
                      <div className="text-xs text-muted-foreground">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact */}
              <div className="order-4 lg:order-3 bg-[oklch(0.32_0.07_155)] rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Direkt kontaktieren
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp pulse-whatsapp w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon />
                    WhatsApp: 0152 258 96570
                  </a>
                  <a
                    href="tel:+4915225896570"
                    className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-white"
                  >
                    <PhoneIcon />
                    Anrufen: 0152 258 96570
                  </a>
                  <a
                    href="mailto:info@mietedenmoment.de"
                    className="w-full bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    E-Mail: info@mietedenmoment.de
                  </a>
                </div>
              </div>

              {/* Geschäftsführer - mobile zwischen Kontakttext links und Bild, desktop unten rechts */}
              <div className="order-1 lg:order-4 rounded-2xl border border-border bg-[oklch(0.97_0.012_85)] p-5 text-center">
                <h4
                  className="mb-4 text-xl font-bold text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Wir freuen uns auf deine Nachricht.
                </h4>
                <img
                  src="/images/ueberuns_mit_logo.jpeg"
                  alt="Geschäftsführer Daniel und Simon"
                  className="mx-auto w-full max-w-sm rounded-xl object-cover"
                />
                <p className="mt-3 italic font-semibold text-[oklch(0.32_0.07_155)]">
                  Daniel &amp; Simon
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Häufige Fragen zur Miete
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Die wichtigsten Antworten zu Anfrage, Lieferung, Abholung und Einweisung auf einen Blick.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {HOME_FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-[oklch(0.97_0.012_85)] p-6 shadow-sm"
              >
                <h3
                  className="text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EINSATZGEBIET / STANDORT
      ═══════════════════════════════════════════════════ */}
      <section id="einsatzgebiet" className="py-20 bg-[oklch(0.97_0.012_85)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-headline centered text-4xl md:text-5xl mb-4 mx-auto inline-block">
              Eventausstattung im Raum Karlsruhe, Rastatt & Baden-Baden
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Wir vermieten Eventausstattung mit Fokus auf die Region Karlsruhe, Rastatt, Baden-Baden und den erweiterten Umkreis.
              Abholung ist in Gaggenau möglich, auf Wunsch liefern wir zu eurer Location im Umkreis von bis zu 100 km.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {[
                "Karlsruhe",
                "Rastatt",
                "Baden-Baden",
                "Gaggenau",
                "Ettlingen",
                "Bühl",
              ].map((city) => (
                <div
                  key={city}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-[oklch(0.32_0.07_155)]"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Deine Stadt ist nicht dabei? Sende uns trotzdem eine Anfrage - wir prüfen gerne individuell, ob eine Lieferung möglich ist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-[oklch(0.15_0.04_155)] text-white/70 py-12 md:pb-12 pb-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
                <div className="flex items-center gap-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png" alt="memora Logo" className="h-10 w-auto filter invert" />
              </div>
              <p className="text-sm leading-relaxed">
                Hochwertige Eventausstattung mieten in Karlsruhe, Rastatt, Baden-Baden und erweiterter Umgebung.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Schnellzugriff</h4>
              <div className="space-y-2 text-sm">
                <a href="#impressionen" className="block hover:text-[oklch(0.75_0.14_80)] transition-colors">Impressionen</a>
                <a href="#wie-es-funktioniert" className="block hover:text-[oklch(0.75_0.14_80)] transition-colors">So geht's</a>
                <a href="#produkte" className="block hover:text-[oklch(0.75_0.14_80)] transition-colors">Produkte</a>
                <a href="#bewertungen" className="block hover:text-[oklch(0.75_0.14_80)] transition-colors">Kundenbewertungen</a>
                <a href="#kontakt" className="block hover:text-[oklch(0.75_0.14_80)] transition-colors">Kontakt & Anfrage</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-3">Kontakt</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+4915225896570" className="flex items-center gap-2 hover:text-[oklch(0.75_0.14_80)] transition-colors">
                  <PhoneIcon /> 0152 258 96570
                </a>
                <a href="mailto:info@mietedenmoment.de" className="flex items-center gap-2 hover:text-[oklch(0.75_0.14_80)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@mietedenmoment.de
                </a>
                <div className="flex items-start gap-2 text-white/80">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Mühlstraße 8c<br />76571 Gaggenau</span>
                </div>
                <a
                  href="https://wa.me/4915225896570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[oklch(0.75_0.14_80)] transition-colors"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3">Folge uns</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/memora_miete_den_moment/?igsh=MnFhYTBtNGowMjhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[oklch(0.75_0.14_80)] transition-colors"
                  title="Folge uns auf Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@memora303?_t=ZN-90SplgHjs6Y&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[oklch(0.75_0.14_80)] transition-colors"
                  title="Folge uns auf TikTok"
                >
                  <Music className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 memora – miete den moment. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ═══════════════════════════════════════════════════ */}
      <motion.a
        href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="hidden fixed bottom-6 right-6 z-50 btn-whatsapp pulse-whatsapp w-14 h-14 rounded-full items-center justify-center shadow-2xl"
        title="WhatsApp Anfrage"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      {/* ═══════════════════════════════════════════════════
          STICKY BOTTOM CTA BAR (Mobile)
      ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[oklch(0.22_0.06_155)] border-t border-[oklch(0.75_0.14_80/0.3)] px-3 py-2 flex gap-2"
      >
        <a
          href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <button
          onClick={scrollToContact}
          className="btn-gold pulse-gold flex-1 py-2 rounded-lg font-bold text-xs"
        >
          Jetzt anfragen
        </button>
      </motion.div>

    </div>
  );
}
