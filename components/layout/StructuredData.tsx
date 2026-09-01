interface StructuredDataProps {
  locale: "he" | "en";
}

/**
 * JSON-LD structured data for Google rich results.
 * LocalBusiness + Person schema — Sprint 5.
 *
 * Product-brain.md: Location is Rosh Ha'Ayin, central Israel.
 * Services: AI consulting, website creation, LinkedIn consulting.
 */
export function StructuredData({ locale }: StructuredDataProps) {
  const isHe = locale === "he";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yourwai-website-alexzilman-s-projects.vercel.app/#business",
    name: "YourwAI",
    description: isHe
      ? "ייעוץ AI לעסקים קטנים — ניתוח תהליכי עבודה, בניית כלי AI מותאמים, הדרכות"
      : "AI consulting for small businesses — work process analysis, custom AI tools, training",
    url: `https://yourwai-website-alexzilman-s-projects.vercel.app/${locale}`,
    telephone: "+972-54-546-4305",
    email: "zilman.alex@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: isHe ? "ראש העין" : "Rosh HaAyin",
      addressRegion: isHe ? "מרכז" : "Central District",
      addressCountry: "IL",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.0961,
        longitude: 34.9571,
      },
      geoRadius: "50000", // ~50km radius covering central Israel + Sharon
    },
    founder: { "@id": "https://yourwai-website-alexzilman-s-projects.vercel.app/#person" },
    inLanguage: [locale],
    knowsLanguage: ["he", "en", "ru"],
    serviceType: [
      "AI Consulting",
      "Work Process Analysis",
      "Custom AI Tool Development",
      "AI Training",
      "Website Development",
      "LinkedIn Consulting",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yourwai-website-alexzilman-s-projects.vercel.app/#person",
    name: isHe ? "אלכסנדרה זילמן" : "Alexandra Zilman",
    jobTitle: isHe ? "יועצת AI ומומחית תהליכים ארגוניים" : "AI Consultant & Organizational Process Expert",
    worksFor: { "@id": "https://yourwai-website-alexzilman-s-projects.vercel.app/#business" },
    url: `https://yourwai-website-alexzilman-s-projects.vercel.app/${locale}/about`,
    knowsAbout: [
      "Artificial Intelligence",
      "Organizational Consulting",
      "Process Analysis",
      "B2B Product Management",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
