import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { SectionDivider } from "@/components/decorative/SectionDivider";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

/** WhatsApp icon in brand green */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#25D366"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      {/* Page header */}
      <section className="py-3xl lg:py-4xl px-xl">
        <div className="max-w-[800px] mx-auto">
          <span className="text-caption font-normal text-text-muted uppercase tracking-[0.08em]">
            {t("contactPage.eyebrow")}
          </span>
          <h1 className="text-h1 font-heading font-semibold text-primary mt-xs mb-md">
            {t("contactPage.headline")}
          </h1>
          <p className="text-body-lg font-light text-text">
            {t("contactPage.intro")}
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Contact methods + what happens next */}
      <section className="section-alt py-3xl lg:py-4xl px-xl relative overflow-hidden">
        {/* Botanical illustration — positioned to the start side */}
        <div
          className="hidden lg:block absolute bottom-0 start-0 -ms-4 z-0 pointer-events-none select-none opacity-75"
          aria-hidden="true"
          style={{ animation: "gentle-drift 5s ease-in-out infinite" }}
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
        <div className="max-w-[1000px] mx-auto relative z-10">
          <h2 className="text-h3 font-heading font-semibold text-primary-dark mb-xl">
            {t("contactPage.direct.headline")}
          </h2>

          {/* Contact boxes + what happens — side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3xl items-start">
            {/* Direct contact — 3 white boxes */}
            <div className="flex flex-col gap-lg">
              {/* WhatsApp — green icon */}
              <a
                href={t("contactPage.direct.whatsapp.href")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-md p-lg bg-white border border-border border-s-[3px] border-s-accent rounded-md no-underline shadow-subtle hover:shadow-rose-lg hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="text-body font-medium text-text">
                    {t("contactPage.direct.whatsapp.label")}
                  </p>
                  <p className="text-caption text-text-muted">
                    {t("contactPage.direct.whatsapp.context")}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={t("contactPage.direct.phone.href")}
                className="flex items-center gap-md p-lg bg-white border border-border border-s-[3px] border-s-accent rounded-md no-underline shadow-subtle hover:shadow-rose-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-8 h-8 flex-shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-body font-medium text-text">
                    {t("contactPage.direct.phone.label")}
                  </p>
                  <p className="text-caption text-text-muted">
                    {t("contactPage.direct.phone.context")}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={t("contactPage.direct.email.href")}
                className="flex items-center gap-md p-lg bg-white border border-border border-s-[3px] border-s-accent rounded-md no-underline shadow-subtle hover:shadow-rose-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-8 h-8 flex-shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-body font-medium text-text">
                    {t("contactPage.direct.email.label")}
                  </p>
                  <p className="text-caption text-text-muted">
                    {t("contactPage.direct.email.context")}
                  </p>
                </div>
              </a>
            </div>

            {/* What happens next */}
            <div className="bg-background border border-border rounded-lg p-xl">
              <h3 className="text-h4 font-heading font-medium text-text mb-lg">
                {t("contactPage.whatHappens.headline")}
              </h3>
              <div className="flex flex-col gap-md">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-sm">
                    <span className="mt-[2px] w-6 h-6 rounded-full bg-accent-dark text-white flex items-center justify-center text-caption font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-body font-light text-text">
                      {t(`contactPage.whatHappens.steps.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location — pushed to bottom of section */}
          <p className="text-caption font-light text-text-muted mt-2xl text-center">
            {t("contactPage.location")}
          </p>
        </div>
        </FadeInSection>
      </section>
    </>
  );
}
