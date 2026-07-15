import { PageHero } from "@/components/page-hero";
import { business } from "@/src/config/business";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Home Physiotherapy Service Areas | Life Care Physiotherapy Center",
  description:
    "See the primary home physiotherapy coverage area in Gaur City 2 and editable nearby service areas for Greater Noida.",
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Coverage that stays editable and realistic"
        description="The area list is intentionally modest so it can be updated accurately instead of overclaiming availability."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-4 md:grid-cols-2">
          {business.serviceAreas.map((area) => (
            <div
              key={area}
              className="surface-card p-6 text-lg font-semibold text-[var(--color-navy)]"
            >
              {area}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
