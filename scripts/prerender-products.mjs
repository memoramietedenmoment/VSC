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
    price: "299",
    description:
      "Fotospiegel GLOW ab 299,- EUR fuer Hochzeiten, Geburtstage und Firmenfeiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/fotospiegel-glow-neu-mEWnc6uokeNiC4Qd7MzeJ3.webp",
  },
  {
    slug: "audio-gaestebuch-vivi",
    name: "Audio-Gaestebuch VIVI",
    price: "49",
    description:
      "Audio-Gaestebuch VIVI ab 49,- EUR fuer Hochzeiten und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/audio-gaestebuch-vivi-8TDr2DteLoHaGVv5GwKgqm.webp",
  },
  {
    slug: "sofortbildkamera-dior",
    name: "Sofortbildkamera DIOR",
    price: "29",
    description:
      "Sofortbildkamera DIOR ab 29,- EUR fuer Hochzeiten, Geburtstage und Partys in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/polaroidkamera-dior-mZPP2JPUnM27FCH5g72tbZ.webp",
  },
  {
    slug: "slushmaschine-emit",
    name: "Slushmaschine EMIT",
    price: "149",
    description:
      "Slushmaschine EMIT ab 149,- EUR fuer Sommerpartys und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/slushmaschine-emit-HuhgPzCXyq2oCRg9XN26nA.webp",
  },
  {
    slug: "karaokemaschine-sing",
    name: "Karaokemaschine SING",
    price: "69",
    description:
      "Karaokemaschine SING ab 69,- EUR fuer Geburtstage, Firmenfeiern und Partys in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/karaokemaschine-sing-E68YRAvtn3s3erpgQufsH5.webp",
  },
  {
    slug: "zuckerwattemaschine-luna",
    name: "Zuckerwattemaschine LUNA",
    price: "49",
    description:
      "Zuckerwattemaschine LUNA ab 49,- EUR fuer Kindergeburtstage und Feiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/zuckerwattemaschine-luna-YssUQSBqzSfkyTrshDaWmk.webp",
  },
  {
    slug: "seifenblasenmaschine-lilo",
    name: "Seifenblasenmaschine LILO",
    price: "59",
    description:
      "Seifenblasenmaschine LILO ab 59,- EUR fuer Hochzeiten und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/seifenblasenmaschine-lilo-o6z2zHGSXkLJAPjW43bzS5.webp",
  },
  {
    slug: "nebelmaschine-mira",
    name: "Nebelmaschine MIRA",
    price: "49",
    description:
      "Nebelmaschine MIRA ab 49,- EUR fuer Partys und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nebelmaschine-mira-DNAQuYqcf66FgucyiTU5iB.webp",
  },
  {
    slug: "musik-box-inkl-mikro-sunu",
    name: "Musik-Box inkl. Mikro SUNU",
    price: "99",
    description:
      "Musik-Box inkl. Mikro SUNU ab 99,- EUR fuer Hochzeiten und Firmenfeiern in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/musikbox-sunu-YzchpMLmbyfqh4DufPyvkD.webp",
  },
  {
    slug: "hot-dog-waermer-sjen",
    name: "Hot-Dog-Waermer SJEN",
    price: "59",
    description:
      "Hot-Dog-Waermer SJEN ab 59,- EUR fuer Feiern und Firmenevents in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/hotdogwarmer-sjen-4DJ6cgoBWB5cKTqHNYryL3.webp",
  },
  {
    slug: "nacho-waermer-sala",
    name: "Nacho-Waermer SALA",
    price: "49",
    description:
      "Nacho-Waermer SALA ab 49,- EUR fuer Partys und Veranstaltungen in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/nachowarmer-sala-65QjBzSrDUQNoGexkDjxQr.webp",
  },
  {
    slug: "popcornmaschine-keno",
    name: "Popcornmaschine KENO",
    price: "59",
    description:
      "Popcornmaschine KENO ab 59,- EUR fuer Feiern und Events in Karlsruhe, Rastatt, Baden-Baden und Gaggenau mieten.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/popcornmaschine-keno-CFunR82z9YowPtJfffpUAz.webp",
  },
];

const LEGACY_SLUG_REDIRECTS = {
  "audio-gstebuch-vivi": "audio-gaestebuch-vivi",
  "hot-dog-wrmer-sjen": "hot-dog-waermer-sjen",
  "nacho-wrmer-sala": "nacho-waermer-sala",
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
        image: [product.image || DEFAULT_OG_IMAGE],
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
  const image = product.image || DEFAULT_OG_IMAGE;

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
