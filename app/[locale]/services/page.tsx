import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionDivider } from "@/components/decorative/SectionDivider";
import { AiUseCasesGrid } from "@/components/sections/AiUseCasesGrid";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.services" });
  return {
    title: t("title"),
    description: t("description"),
  };
}


export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Page header */}
      <section className="py-3xl lg:py-4xl px-xl">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-h1 font-heading font-semibold text-primary mt-xs mb-md">
            {t("servicesPage.headline")}
          </h1>
          <p className="text-body-lg font-light text-text max-w-[720px]">
            {t("servicesPage.intro")}
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* AI Adoption services */}
      <section className="section-alt py-3xl lg:py-4xl px-xl relative overflow-hidden">
        {/* Botanical — potted plant */}
        <div
          className="hidden lg:block absolute bottom-0 end-0 -me-4 z-0 pointer-events-none select-none opacity-80"
          aria-hidden="true"
          style={{ animation: "gentle-drift 6s ease-in-out infinite" }}
        >
          <Image
            src="/images/visuals/botanical-plant-pot.png"
            alt=""
            width={300}
            height={300}
            className="w-auto h-auto"
            style={{ maxWidth: 300 }}
            unoptimized
          />
        </div>

        <FadeInSection>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h2 className="text-h2 font-heading font-semibold text-primary-dark mb-sm">
            {t("servicesPage.tier1.headline")}
          </h2>
          <p className="text-body font-light text-text mb-xl max-w-[720px]">
            {t("servicesPage.tier1.intro")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {[0, 1, 2].map((i) => (
              <Card key={i}>

                <h3 className="text-h4 font-heading font-medium text-text mb-md">
                  {t(`servicesPage.tier1.items.${i}.title`)}
                </h3>
                <p className="text-body font-light text-text">
                  {t(`servicesPage.tier1.items.${i}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
        </FadeInSection>
      </section>

      <SectionDivider />

      {/* Digital Presence services */}
      <section className="py-3xl lg:py-4xl px-xl relative overflow-hidden">
        {/* Botanical — leaf with vase */}
        <div
          className="hidden lg:block absolute bottom-0 start-0 -ms-4 z-0 pointer-events-none select-none opacity-80"
          aria-hidden="true"
          style={{ animation: "gentle-drift 7s ease-in-out infinite" }}
        >
          <Image
            src="/images/visuals/botanical-leaf-vase.png"
            alt=""
            width={280}
            height={280}
            className="w-auto h-auto"
            style={{ maxWidth: 280 }}
            unoptimized
          />
        </div>

        <FadeInSection>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <h2 className="text-h2 font-heading font-semibold text-primary-dark mb-sm">
            {t("servicesPage.tier2.headline")}
          </h2>
          <p className="text-body font-light text-text mb-xl max-w-[720px]">
            {t("servicesPage.tier2.intro")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {[0, 1].map((i) => (
              <Card key={i}>

                <h3 className="text-h4 font-heading font-medium text-text mb-md">
                  {t(`servicesPage.tier2.items.${i}.title`)}
                </h3>
                <p className="text-body font-light text-text">
                  {t(`servicesPage.tier2.items.${i}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
        </FadeInSection>
      </section>

      <SectionDivider />

      {/* AI Use Cases Grid */}
      <AiUseCasesGrid
        headline={t("servicesPage.aiUseCases.headline")}
        subtitle={t("servicesPage.aiUseCases.subtitle")}
        items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) =>
          t(`servicesPage.aiUseCases.items.${i}`)
        )}
      />

    </>
  );
}
