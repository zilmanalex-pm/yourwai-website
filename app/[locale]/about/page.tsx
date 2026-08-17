import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionDivider } from "@/components/decorative/SectionDivider";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

interface PageProps {
  params: Promise<{ locale: string }>;
}

/** Render **bold** markers in text as <strong> elements */
function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Hero / Intro */}
      <section className="py-3xl lg:py-4xl px-xl">
        <div className="max-w-[800px] mx-auto flex flex-col gap-lg">
          <h1 className="text-h2 font-heading font-semibold text-primary">
            {t("about.headline")}
          </h1>
        </div>
      </section>

      <SectionDivider />

      {/* Story — crocus bloom next to the last paragraph ("What drives me?") */}
      <section className="section-alt py-3xl lg:py-4xl px-xl relative overflow-hidden">
        {/* Blooming crocus — metaphor for unlocking potential */}
        <div
          className="hidden lg:block absolute bottom-0 end-[3%] z-0 pointer-events-none select-none opacity-85"
          aria-hidden="true"
          style={{ animation: "gentle-drift 5s ease-in-out infinite" }}
        >
          <Image
            src="/images/visuals/about-crocus-bloom.png"
            alt=""
            width={280}
            height={440}
            className="w-auto h-auto"
            style={{ maxHeight: 420 }}
            unoptimized
          />
        </div>

        <FadeInSection>
        <div className="max-w-[800px] mx-auto flex flex-col gap-lg relative z-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <p key={i} className="text-body font-light text-text">
              {renderBold(t(`about.storyParagraphs.${i}`))}
            </p>
          ))}
        </div>
        </FadeInSection>
      </section>

      <SectionDivider />

      {/* Differentiator */}
      <section className="py-3xl lg:py-4xl px-xl">
        <FadeInSection>
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-h2 font-heading font-semibold text-primary mb-lg">
            {t("about.differentiator.headline")}
          </h2>
          {[0, 1, 2].map((i) => (
            <p key={i} className="text-body font-light text-text mb-md">
              {t(`about.differentiator.paragraphs.${i}`)}
            </p>
          ))}
        </div>
        </FadeInSection>
      </section>

      <SectionDivider />

      {/* Credentials & Values — potted plant near education/consulting */}
      <section className="section-alt py-3xl lg:py-4xl px-xl relative overflow-hidden">
        {/* Secondary potted plant — near professional background */}
        <div
          className="hidden lg:block absolute bottom-0 end-0 -me-2 z-0 pointer-events-none select-none opacity-85"
          aria-hidden="true"
          style={{ animation: "gentle-drift 7s ease-in-out infinite" }}
        >
          <Image
            src="/images/visuals/about-plant-potted.png"
            alt=""
            width={320}
            height={320}
            className="w-auto h-auto"
            style={{ maxWidth: 320 }}
            unoptimized
          />
        </div>

        <FadeInSection>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <CredentialsSection
            headline={t("about.credentials.headline")}
            items={[0, 1, 2, 3].map((i) => ({
              category: t(`about.credentials.items.${i}.category`),
              detail: t(`about.credentials.items.${i}.detail`),
            }))}
          />
          <ValuesSection
            headline={t("about.values.headline")}
            items={[0, 1, 2].map((i) => ({
              title: t(`about.values.items.${i}.title`),
              description: t(`about.values.items.${i}.description`),
            }))}
          />
        </div>
        </FadeInSection>
      </section>

      <SectionDivider />

      <TestimonialsSection
        eyebrow={t("testimonials.eyebrow")}
        headline={t("testimonials.headline")}
        items={[0, 1, 2].map((i) => ({
          quote: t(`testimonials.items.${i}.quote`),
          name: t(`testimonials.items.${i}.name`),
          role: t(`testimonials.items.${i}.role`),
        }))}
      />
    </>
  );
}
