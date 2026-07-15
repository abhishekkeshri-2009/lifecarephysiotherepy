import { PageHero } from "@/components/page-hero";
import { conditions } from "@/src/content/conditions";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title:
    "Conditions Supported by Home Physiotherapy | Life Care Physiotherapy Center",
  description:
    "Explore the kinds of pain, mobility, neurological, and rehabilitation concerns supported by home physiotherapy in Gaur City 2 and Greater Noida.",
  path: "/conditions/",
});

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conditions"
        title="Support-focused condition pages without cure language"
        description="The condition catalogue keeps the messaging grounded in physiotherapy management, home support, and practical rehabilitation."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {conditions.map((condition) => (
            <article key={condition.slug} className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                {condition.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {condition.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
