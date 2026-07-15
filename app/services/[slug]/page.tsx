import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { business } from "@/src/config/business";
import { getService, services } from "@/src/content/services";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";
import { buildMetadata } from "@/src/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/src/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) return {};

  return buildMetadata({
    title: `${service.name} at Home in Greater Noida | Life Care Physiotherapy Center`,
    description: service.metaDescription,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[slug]">,
) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) notFound();

  const related = service.relatedSlugs
    .map((item) => getService(item))
    .filter(Boolean);

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", item: business.domain },
          { name: "Services", item: `${business.domain}/services/` },
          {
            name: service.name,
            item: `${business.domain}/services/${service.slug}/`,
          },
        ])}
      />
      <StructuredData
        data={serviceSchema(
          service.name,
          service.summary,
          `/services/${service.slug}/`,
        )}
      />
      <StructuredData data={faqSchema(service.faqs)} />
      <PageHero
        eyebrow="Service Detail"
        title={service.name}
        description={service.summary}
      />
      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                Common functional difficulties
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.difficulties.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                Physiotherapy goals
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.goals.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                What a home session may include
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.sessionIncludes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                Who may benefit
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.benefitsFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container-shell mt-8">
          <div className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
              Safety note
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Website information is general and does not diagnose medical
              conditions. Treatment suitability depends on assessment, and
              emergency warning signs need urgent medical care.
            </p>
          </div>
        </div>
        <div className="container-shell mt-8 grid gap-4 md:grid-cols-3">
          <a
            href={buildTelephoneHref(business.phoneE164)}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-navy)] px-6 text-sm font-semibold text-white"
          >
            Call CTA
          </a>
          <a
            href={buildWhatsAppHref(
              `Hello ${business.contactPerson}, I would like to discuss ${service.name}.`,
            )}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-whatsapp)] px-6 text-sm font-semibold text-white"
          >
            WhatsApp CTA
          </a>
          <Link
            href="/book-home-visit/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-teal)] px-6 text-sm font-semibold text-white"
          >
            Home-visit CTA
          </Link>
        </div>
      </section>
      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell">
          <h2 className="heading-display text-4xl font-semibold text-[var(--color-navy)]">
            Service FAQ
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="surface-card p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-navy)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          {related.length ? (
            <>
              <h2 className="mt-12 heading-display text-4xl font-semibold text-[var(--color-navy)]">
                Related services
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item!.slug}
                    href={`/services/${item!.slug}/`}
                    className="surface-card p-5"
                  >
                    <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                      {item!.name}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {item!.shortIntro}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
