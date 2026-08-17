import Link from "next/link";
import { BotanicalDivider } from "@/components/decorative/BotanicalDivider";

type Locale = "he" | "en";

interface FooterProps {
  locale: Locale;
}

const footerContent = {
  he: {
    tagline: "ליווי מקצועי באימוץ AI לעסקים קטנים",
    contact: "יצירת קשר",
    phone: "054-546-4305",
    email: "zilman.alex@gmail.com",
    copyright: "© {year} YourwAI. כל הזכויות שמורות.",
  },
  en: {
    tagline: "Professional AI adoption consulting for small businesses",
    contact: "Get in Touch",
    phone: "054-546-4305",
    email: "zilman.alex@gmail.com",
    copyright: "© {year} YourwAI. All rights reserved.",
  },
};

export function Footer({ locale }: FooterProps) {
  const t = footerContent[locale];
  const year = new Date().getFullYear();
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <footer className="bg-surface border-t border-border" dir={dir}>
      <BotanicalDivider className="pt-lg" color="sage" />

      <div className="max-w-[1200px] mx-auto px-xl py-2xl">
        <div className="flex flex-col lg:flex-row justify-between gap-lg">
          {/* Brand */}
          <div>
            <p className="text-h4 font-heading font-medium text-primary-dark mb-xs">
              YourwAI
            </p>
            <p className="text-caption text-text-muted">{t.tagline}</p>
          </div>

          {/* Contact info — product-brain.md §4 Contact */}
          <div className="flex flex-col gap-xs">
            <p className="text-caption font-medium text-text">{t.contact}</p>
            <a
              href={`tel:+972545464305`}
              className="text-caption text-text-muted no-underline hover:text-primary-dark"
            >
              {t.phone}
            </a>
            <a
              href={`mailto:${t.email}`}
              className="text-caption text-text-muted no-underline hover:text-primary-dark"
            >
              {t.email}
            </a>
          </div>
        </div>

        <p className="text-caption text-text-muted mt-xl pt-lg border-t border-border">
          {t.copyright.replace("{year}", String(year))}
        </p>
      </div>
    </footer>
  );
}
