"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Locale = "he" | "en";

interface HeaderProps {
  locale: Locale;
}

const navItems = {
  he: [
    { label: "בית", href: "/" },
    { label: "אודות", href: "/about" },
    { label: "שירותים", href: "/services" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
};

const ctaLabel = { he: "יצירת קשר", en: "Get in Touch" };

export function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const dir = locale === "he" ? "rtl" : "ltr";
  const otherLocale = locale === "he" ? "en" : "he";
  const toggleLabel = locale === "he" ? "EN" : "עב";

  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const contactHref = `/${locale}/contact`;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-sm",
        "border-b border-transparent transition-colors duration-200",
        "[&.scrolled]:border-border"
      )}
      dir={dir}
    >
      <div className="max-w-[1200px] mx-auto px-xl flex items-center justify-between h-[80px]">
        {/* ── Zone 1: Logo (start-aligned) ── */}
        <Link
          href={`/${locale}`}
          className="flex-shrink-0 no-underline"
          aria-label="YourwAI — Home"
        >
          <Image
            src="/images/logo.png"
            alt="YourwAI"
            width={260}
            height={86}
            className="h-[76px] w-auto"
            priority
          />
        </Link>

        {/* ── Zone 2: Centered nav (desktop) ── */}
        <nav
          className="hidden lg:flex items-center gap-xl absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {navItems[locale].map((item) => {
            const fullHref = `/${locale}${item.href === "/" ? "" : item.href}`;
            const isActive = pathname === fullHref;
            return (
              <Link
                key={item.href}
                href={fullHref}
                className={cn(
                  "text-nav font-normal text-text no-underline",
                  "transition-all duration-200",
                  "hover:text-accent-dark hover:-translate-y-[2px]",
                  isActive && "text-primary-dark font-medium"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Zone 3: Lang toggle + CTA (end-aligned, desktop) ── */}
        <div className="hidden lg:flex items-center gap-lg">
          {/* Language toggle — bold, separated from nav */}
          <Link
            href={switchPath}
            className={cn(
              "inline-flex items-center justify-center",
              "text-body font-bold tracking-[0.04em]",
              "rounded-md px-[18px] py-[8px]",
              "border-2 border-accent-dark text-accent-dark no-underline",
              "transition-all duration-200",
              "hover:bg-accent-dark hover:text-white hover:-translate-y-[2px]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/40"
            )}
            locale={otherLocale}
          >
            {toggleLabel}
          </Link>

          {/* Contact CTA — primary button */}
          <Link
            href={contactHref}
            className={cn(
              "inline-flex items-center justify-center",
              "text-button font-medium tracking-[0.03em]",
              "rounded-md px-[28px] py-[14px]",
              "bg-accent-dark text-white no-underline shadow-rose",
              "transition-all duration-200",
              "hover:bg-[#9a5f5f] hover:shadow-rose-lg hover:-translate-y-[2px]",
              "active:bg-[#8a5252]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/40"
            )}
          >
            {ctaLabel[locale]}
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-sm text-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={locale === "he" ? "תפריט" : "Menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile panel ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-xl pb-lg">
          <nav className="flex flex-col gap-md pt-md" aria-label="Mobile navigation">
            {navItems[locale].map((item) => {
              const fullHref = `/${locale}${item.href === "/" ? "" : item.href}`;
              return (
                <Link
                  key={item.href}
                  href={fullHref}
                  className="text-body font-normal text-text no-underline py-sm transition-colors duration-200 hover:text-accent-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={contactHref}
              className={cn(
                "inline-flex items-center justify-center",
                "text-button font-medium tracking-[0.03em]",
                "rounded-md px-[28px] py-[14px] mt-sm",
                "bg-accent-dark text-white no-underline shadow-rose",
                "transition-colors duration-200",
                "hover:bg-[#9a5f5f] active:bg-[#8a5252]"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {ctaLabel[locale]}
            </Link>

            <Link
              href={switchPath}
              className={cn(
                "inline-flex items-center justify-center",
                "text-body font-bold tracking-[0.04em]",
                "rounded-md px-[18px] py-[8px] mt-xs",
                "border-2 border-accent-dark text-accent-dark no-underline",
                "transition-colors duration-200",
                "hover:bg-accent-dark hover:text-white"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {toggleLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
