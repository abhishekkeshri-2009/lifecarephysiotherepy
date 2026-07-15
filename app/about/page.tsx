import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title:
    "About Home Physiotherapy in Gaur City 2 | Life Care Physiotherapy Center",
  description:
    "Learn about the home physiotherapy approach, service positioning, and patient-first care model used by Life Care Physiotherapy Center.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A home physiotherapy service designed around real daily life"
        description="Life Care Physiotherapy Center is positioned as a home physiotherapy service for Gaur City 2 and nearby Greater Noida areas, with a strong focus on accessibility, mobility support, and appointment-led care."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            "Home physiotherapy only, not a walk-in clinic",
            "Assessment-led support instead of exaggerated claims",
            "Patient routines and surroundings considered during care",
          ].map((item) => (
            <div
              key={item}
              className="surface-card p-6 text-lg font-semibold text-[var(--color-navy)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
