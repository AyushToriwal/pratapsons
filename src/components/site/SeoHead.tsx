import { useEffect } from "react";
import { SITE_CONFIG, type PageMeta } from "@/lib/site";

type SeoHeadProps = PageMeta & {
  serviceType?: string;
};

export default function SeoHead({ title, description, path, type = "LocalBusiness", serviceType }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    const canonical = `${SITE_CONFIG.siteUrl}${path}`;

    const setMeta = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", "index,follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", SITE_CONFIG.name);
    setMeta("name", "twitter:card", "summary_large_image");

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;

    const schema = type === "Service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          serviceType,
          areaServed: "Noida, Uttar Pradesh, India",
          provider: {
            "@type": "LocalBusiness",
            name: SITE_CONFIG.name,
            telephone: SITE_CONFIG.phone,
            address: SITE_CONFIG.address,
          },
          url: canonical,
        }
      : {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          description,
          telephone: SITE_CONFIG.phone,
          address: SITE_CONFIG.address,
          areaServed: "Noida, Uttar Pradesh, India",
          url: canonical,
          knowsAbout: ["AC repair", "AC installation", "water tanker service", "geyser repair", "heater repair"],
        };

    let script = document.head.querySelector<HTMLScriptElement>('script[data-site-schema="true"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.siteSchema = "true";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [description, path, serviceType, title, type]);

  return null;
}