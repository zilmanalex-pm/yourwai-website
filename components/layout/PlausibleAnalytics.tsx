import Script from "next/script";

/**
 * Plausible Analytics — technical-decisions.md:
 * "Privacy-friendly, no cookie-consent banner required."
 *
 * Interim: using Vercel URL until custom domain is purchased.
 */
export function PlausibleAnalytics() {
  // Only load in production
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      defer
      data-domain="yourwai-website-alexzilman-s-projects.vercel.app"
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
