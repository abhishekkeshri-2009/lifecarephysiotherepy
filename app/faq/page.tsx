import { PageHero } from "@/components/page-hero";
import { faqs } from "@/src/content/faqs";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Home Physiotherapy FAQ | Life Care Physiotherapy Center",
  description:
    "Read frequently asked questions about coverage, booking, hours, elderly care, stroke rehabilitation, and important safety notes.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers written for clarity, safety, and realistic expectations"
        description="The FAQ keeps the site conversion-focused without offering diagnosis, fake certainty, or unsupported claims."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
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
      </section>
    </>
  );
}
