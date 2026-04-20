import { useEffect } from "react";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SeoProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
  robots?: string;
  type?: string;
  structuredData?: StructuredData;
};

type MetaTarget = {
  attribute: "name" | "property";
  value: string;
  content: string | undefined;
};

function updateMetaTag(target: MetaTarget) {
  const selector = `meta[${target.attribute}="${target.value}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (existing) {
    const previousContent = existing.getAttribute("content");

    if (target.content !== undefined) {
      existing.setAttribute("content", target.content);
    }

    return () => {
      if (previousContent === null) {
        existing.removeAttribute("content");
        return;
      }

      existing.setAttribute("content", previousContent);
    };
  }

  if (target.content === undefined) {
    return () => undefined;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(target.attribute, target.value);
  meta.setAttribute("content", target.content);
  document.head.appendChild(meta);

  return () => {
    meta.remove();
  };
}

function updateCanonicalLink(canonicalUrl: string) {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (existing) {
    const previousHref = existing.getAttribute("href");
    existing.setAttribute("href", canonicalUrl);

    return () => {
      if (previousHref === null) {
        existing.removeAttribute("href");
        return;
      }

      existing.setAttribute("href", previousHref);
    };
  }

  const link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", canonicalUrl);
  document.head.appendChild(link);

  return () => {
    link.remove();
  };
}

export default function Seo({
  title,
  description,
  canonicalUrl,
  image,
  robots,
  type = "website",
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restoreActions = [
      updateMetaTag({ attribute: "name", value: "description", content: description }),
      updateMetaTag({ attribute: "name", value: "robots", content: robots }),
      updateMetaTag({ attribute: "property", value: "og:title", content: title }),
      updateMetaTag({ attribute: "property", value: "og:description", content: description }),
      updateMetaTag({ attribute: "property", value: "og:url", content: canonicalUrl }),
      updateMetaTag({ attribute: "property", value: "og:type", content: type }),
      updateMetaTag({ attribute: "property", value: "og:image", content: image }),
      updateMetaTag({ attribute: "name", value: "twitter:title", content: title }),
      updateMetaTag({ attribute: "name", value: "twitter:description", content: description }),
      updateMetaTag({ attribute: "name", value: "twitter:image", content: image }),
      updateCanonicalLink(canonicalUrl),
    ];

    let structuredDataScript: HTMLScriptElement | null = null;
    if (structuredData) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.type = "application/ld+json";
      structuredDataScript.setAttribute("data-seo-script", "true");
      structuredDataScript.text = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      document.title = previousTitle;
      structuredDataScript?.remove();
      restoreActions.reverse().forEach((restore) => restore());
    };
  }, [canonicalUrl, description, image, robots, structuredData, title, type]);

  return null;
}
