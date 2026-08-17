import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { heebo } from "@/lib/fonts";
import { getBaseMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/layout/StructuredData";
import { PlausibleAnalytics } from "@/components/layout/PlausibleAnalytics";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

type Locale = (typeof routing.locales)[number];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const base = getBaseMetadata(locale);

  return {
    ...base,
    title: {
      default: t("title"),
      template: `%s | YourwAI`,
    },
    description: t("description"),
    openGraph: {
      ...base.openGraph,
      title: t("title"),
      description: t("description"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={heebo.variable}>
      <head>
        <StructuredData locale={locale as Locale} />
        <PlausibleAnalytics />
      </head>
      <body className="font-body text-body antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[100] focus:bg-primary-dark focus:text-white focus:px-md focus:py-sm focus:rounded-sm"
          >
            {locale === "he" ? "דלג לתוכן" : "Skip to content"}
          </a>
          <Header locale={locale as Locale} />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
