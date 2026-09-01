import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yourwai-website-alexzilman-s-projects.vercel.app/sitemap.xml",
  };
}
