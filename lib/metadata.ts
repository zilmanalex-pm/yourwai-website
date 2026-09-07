import type { Metadata } from "next";

/**
 * Base metadata shared across all pages.
 * Individual pages extend this via generateMetadata().
 *
 * TODO: Replace placeholder OG image path with actual image after design.
 */

const SITE_URL = "https://yourwai-website-alexzilman-s-projects.vercel.app"; // Interim Vercel URL — update after domain purchase

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
          url: isHe ? "/images/og-he.jpg" : "/images/og-en.jpg",
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
    verification: {
      google: "5Yq3OF0llfi-ooKW8VW7KSJy4DPj_pH20vM60cEOEB8",
    },
    other: {
      "format-detection": "telephone=no", // Prevent auto-linking phone numbers
    },
  };
}
