import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://www.mietedenmoment.de";
const SITE_NAME = "memora - miete den moment";
const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png";

const PRODUCTS = [
  {
    slug: "fotospiegel-glow",
    name: "Fotospiegel GLOW",
    price: "399",
    description:
      "Fotospiegel GLOW für Hochzeiten, Geburtstage und Firmenfeiern ab 399 € in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Fotospiegel_Übersichtsseite.png",
  },
  {
    slug: "video-gaestebuch-vimo",
    name: "Video-Gästebuch VIMO",
    price: "139",
    description:
      "Video-Gästebuch VIMO ab 139 € für persönliche Videobotschaften bei Hochzeiten und Feiern in Karlsruhe, Rastatt und Baden-Baden mieten.",
    image: "/images/Test_Videogästebuch_Übersichtsseite.png",
  },
  {
    slug: "audio-gaestebuch-vivi",
    name: "Audio-Gästebuch VIVI",
    price: "79",
    description:
      "Audio-Gästebuch VIVI ab 79 € für persönliche Sprachnachrichten auf Hochzeiten und Feiern in Karlsruhe, Rastatt und Baden-Baden mieten.",
    image: "/images/Test_Audio.png",
  },
  {
    slug: "sofortbildkamera-dior",
    name: "Sofortbildkamera DIOR",
    price: "29",
    description:
      "Sofortbildkamera DIOR ab 29 € für Hochzeiten, Geburtstage und Partys mieten. Abholung in Gaggenau und Lieferung im Umkreis möglich.",
    image: "/images/Test_Sofortbildkamera_Übersichtsseite.png",
  },
  {
    slug: "fotospiegel-milo",
    name: "Fotospiegel MILO",
    price: "299",
    description:
      "Fotospiegel MILO ab 299 € für Hochzeiten, Geburtstage und Firmenfeiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Fotospiegel_Klein_Übersichtsseite.png",
  },
  {
    slug: "karaokemaschine-sing",
    name: "Karaokemaschine SING",
    price: "99",
    description:
      "Karaokemaschine SING ab 99 € für Geburtstage, Firmenfeiern und Partys in Karlsruhe, Rastatt und Baden-Baden mieten.",
    image: "/images/Test_Karaoke_Übersichtsseite.png",
  },
  {
    slug: "zuckerwattemaschine-luna",
    name: "Zuckerwattemaschine LUNA",
    price: "79",
    description:
      "Zuckerwattemaschine LUNA ab 79 € für Kindergeburtstage und Feiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Zuckerwatte_Übersichtsseite.png",
  },
  {
    slug: "seifenblasenmaschine-lilo",
    name: "Seifenblasenmaschine LILO",
    price: "99",
    description:
      "Seifenblasenmaschine LILO ab 99 € für Hochzeitstanz und Feiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Seifenblasenmaschine_Übersichtsseite.png",
  },
  {
    slug: "nebelmaschine-mira",
    name: "Nebelmaschine MIRA",
    price: "89",
    description:
      "Nebelmaschine MIRA ab 89 € für Partys und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Nebelmaschine_Übersichtsseite.png",
  },
  {
    slug: "hot-dog-waermer-sjen",
    name: "Hot-Dog-Wärmer SJEN",
    price: "99",
    description:
      "Hot-Dog-Wärmer SJEN ab 99 € für Feiern und Firmenevents in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Hot-Dog_Übersichtsseite.png",
  },
  {
    slug: "nacho-waermer-sala",
    name: "Nacho-Wärmer SALA",
    price: "49",
    description:
      "Nacho-Wärmer SALA ab 49 € für Partys und Veranstaltungen in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Nacho-Wärmer_Übersichtsseite.png",
  },
  {
    slug: "popcornmaschine-keno",
    name: "Popcornmaschine KENO",
    price: "99",
    description:
      "Popcornmaschine KENO ab 99 € für Feiern und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image: "/images/Test_Popcorn_Übersichtsseite.png",
  },
];

const LEGACY_SLUG_REDIRECTS = {
  "audio-gstebuch-vivi": "audio-gaestebuch-vivi",
  "hot-dog-wrmer-sjen": "hot-dog-waermer-sjen",
  "nacho-wrmer-sala": "nacho-waermer-sala",
  "slushmaschine-emit": "fotospiegel-milo",
};

const distPublicPath = path.resolve(process.cwd(), "dist", "public");
const indexPath = path.join(distPublicPath, "index.html");

if (!fs.existsSync(indexPath)) {
  throw new Error(`Could not find built index at ${indexPath}. Run vite build first.`);
}

const baseHtml = fs.readFileSync(indexPath, "utf-8");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toAbsoluteUrl(url) {
  return new URL(url, SITE_URL).href;
}

function upsertMeta(html, attribute, key, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+[^>]*${attribute}=["']${key}["'][^>]*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapedContent}" />`;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertCanonical(html, canonicalUrl) {
  const tag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`;
  const regex = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  if (regex.test(html)) {
    return html.replace(regex, tag);
  }

  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertTitle(html, title) {
  const tag = `<title>${escapeHtml(title)}</title>`;
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, tag);
  }

  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertJsonLd(html, jsonLdObject) {
  const content = JSON.stringify(jsonLdObject);
  const scriptTag = `<script type="application/ld+json" data-prerender-product-schema="true">${content}</script>`;
  const existingRegex = /<script\s+type=["']application\/ld\+json["'][^>]*data-prerender-product-schema=["']true["'][^>]*>[\s\S]*?<\/script>/i;

  if (existingRegex.test(html)) {
    return html.replace(existingRegex, scriptTag);
  }

  return html.replace("</head>", `  ${scriptTag}\n</head>`);
}

function buildProductJsonLd(product, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: [toAbsoluteUrl(product.image || DEFAULT_OG_IMAGE)],
        sku: product.slug,
        brand: {
          "@type": "Brand",
          name: "memora",
        },
        url: canonicalUrl,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: product.price,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "LocalBusiness",
            name: SITE_NAME,
            url: SITE_URL,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.name,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
}

function buildProductHtml(product) {
  const canonicalUrl = `${SITE_URL}/produkt/${product.slug}`;
  const title = `${product.name} mieten in Karlsruhe | memora`;
  const description = product.description;
  const image = toAbsoluteUrl(product.image || DEFAULT_OG_IMAGE);

  let html = baseHtml;
  html = upsertTitle(html, title);
  html = upsertMeta(html, "name", "description", description);
  html = upsertMeta(html, "name", "robots", "index,follow");
  html = upsertCanonical(html, canonicalUrl);
  html = upsertMeta(html, "property", "og:type", "product");
  html = upsertMeta(html, "property", "og:title", title);
  html = upsertMeta(html, "property", "og:description", description);
  html = upsertMeta(html, "property", "og:url", canonicalUrl);
  html = upsertMeta(html, "property", "og:image", image);
  html = upsertMeta(html, "name", "twitter:title", title);
  html = upsertMeta(html, "name", "twitter:description", description);
  html = upsertMeta(html, "name", "twitter:image", image);
  html = upsertJsonLd(html, buildProductJsonLd(product, canonicalUrl));

  return html;
}

for (const product of PRODUCTS) {
  const productDir = path.join(distPublicPath, "produkt", product.slug);
  fs.mkdirSync(productDir, { recursive: true });
  fs.writeFileSync(path.join(productDir, "index.html"), buildProductHtml(product), "utf-8");
}

for (const [legacySlug, canonicalSlug] of Object.entries(LEGACY_SLUG_REDIRECTS)) {
  const legacyDir = path.join(distPublicPath, "produkt", legacySlug);
  fs.mkdirSync(legacyDir, { recursive: true });
  const target = `${SITE_URL}/produkt/${canonicalSlug}`;
  const legacyHtml = `<!doctype html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8" />\n  <meta http-equiv="refresh" content="0;url=${target}" />\n  <link rel="canonical" href="${target}" />\n  <title>Weiterleitung ...</title>\n</head>\n<body>\n  <p>Weiterleitung zu <a href="${target}">${target}</a></p>\n</body>\n</html>\n`;
  fs.writeFileSync(path.join(legacyDir, "index.html"), legacyHtml, "utf-8");
}

console.log(`Prerendered ${PRODUCTS.length} product pages and ${Object.keys(LEGACY_SLUG_REDIRECTS).length} legacy redirects.`);
