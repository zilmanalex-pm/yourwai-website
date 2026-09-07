import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["he", "en"] as const;
  const pages = ["", "/about", "/services", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
