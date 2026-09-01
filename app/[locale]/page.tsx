import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { SectionDivider } from "@/components/decorative/SectionDivider";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const loc = locale as "he" | "en";

  return (
    <>
      <HeroSection
        headline={t("hero.headline")}
        subheadline={t("hero.subheadline")}
        locale={loc}
      />

      <SectionDivider />

      <AudienceSection
        heading={t("audience.heading")}
        body={t("audience.body")}
      />

      <SectionDivider />

      <TrustBar
        items={[
          { value: t("trust.items.0.value"), label: t("trust.items.0.label") },
          { value: t("trust.items.1.value"), label: t("trust.items.1.label") },
          { value: t("trust.items.2.value"), label: t("trust.items.2.label") },
          { value: t("trust.items.3.value"), label: t("trust.items.3.label") },
          { value: t("trust.items.4.value"), label: t("trust.items.4.label") },
        ]}
      />

      <SectionDivider />

      <ServicesPreview
        eyebrow={t("services.eyebrow")}
        headline={t("services.headline")}
        items={[
          {
            title: t("services.items.0.title"),
            description: t("services.items.0.description"),
          },
          {
            title: t("services.items.1.title"),
            description: t("services.items.1.description"),
          },
          {
            title: t("services.items.2.title"),
            description: t("services.items.2.description"),
          },
          {
            title: t("services.secondaryItems.0.title"),
            description: t("services.secondaryItems.0.description"),
          },
          {
            title: t("services.secondaryItems.1.title"),
            description: t("services.secondaryItems.1.description"),
          },
        ]}
        ctaLabel={t("services.cta")}
        ctaHref={`/${locale}/services`}
      />

      <SectionDivider />

      <ProcessSection
        alt
        headline={t("process.headline")}
        steps={[0, 1, 2, 3].map((i) => ({
          label: t(`process.steps.${i}.title`),
          description: t(`process.steps.${i}.description`),
        }))}
      />

    </>
  );
}
