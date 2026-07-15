import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/src/content/services";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title:
    "Home Physiotherapy Services in Greater Noida | Life Care Physiotherapy Center",
  description:
    "Browse home physiotherapy services for pain relief support, mobility improvement, rehabilitation, and recovery in Gaur City 2 and nearby Greater Noida areas.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Home physiotherapy services built for useful, condition-specific support"
        description="Each service page is written with its own goals, movement concerns, and home-session guidance rather than changing only the service name."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="surface-card flex h-full flex-col p-6"
            >
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {service.difficulties.slice(0, 3).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}/`}
                className="mt-auto pt-6 text-sm font-semibold text-[var(--color-teal)]"
              >
                Open service page
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
