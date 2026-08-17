import type { Metadata } from "next";

/**
 * Base metadata shared across all pages.
 * Individual pages extend this via generateMetadata().
 *
 * TODO: Replace placeholder OG image path with actual image after design.
 */

const SITE_URL = "https://yourwai.com"; // Update after domain is chosen

export function getBaseMetadata(locale: string): Metadata {
  const isHe = locale === "he";

  return {
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        he: "/he",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isHe ? "he_IL" : "en_US",
      siteName: "YourwAI",
      images: [
        {
          url: "/images/og-default.jpg", // TODO: create OG image
          width: 1200,
          height: 630,
          alt: isHe
            ? "YourwAI — ייעוץ AI לעסקים קטנים"
            : "YourwAI — AI Consulting for Small Businesses",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "format-detection": "telephone=no", // Prevent auto-linking phone numbers
    },
  };
}
