import Script from "next/script";

/**
 * Plausible Analytics — technical-decisions.md:
 * "Privacy-friendly, no cookie-consent banner required."
 *
 * TODO: Replace YOURWAI_DOMAIN with actual domain after purchase.
 */
export function PlausibleAnalytics() {
  // Only load in production
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      data-domain="YOURWAI_DOMAIN"
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
