import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { business, formatFullAddress } from "@/src/config/business";
import { buildMetadata } from "@/src/lib/metadata";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";

export const metadata = buildMetadata({
  title:
    "Contact Home Physiotherapy in Greater Noida | Life Care Physiotherapy Center",
  description:
    "Call, WhatsApp, or submit a booking request for home physiotherapy in Gaur City 2 and nearby Greater Noida areas.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a home physiotherapy visit"
        description="Use direct contact options or the booking form. Appointment requests are reviewed before confirmation."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                Direct contact
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
                <a href={buildTelephoneHref(business.phoneE164)}>Call Puneet</a>
                <a
                  href={buildWhatsAppHref(
                    `Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`,
                  )}
                >
                  WhatsApp booking
                </a>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </div>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
                Current business data status
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Address: {formatFullAddress()}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Verified qualifications, maps URL, exact coverage list, and
                live contact details are still required before launch.
              </p>
              <Link
                href="/book-home-visit/"
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[var(--color-teal)] px-5 text-sm font-semibold text-white"
              >
                Go to booking page
              </Link>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
