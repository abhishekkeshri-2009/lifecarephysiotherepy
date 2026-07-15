import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Book a Home Physiotherapy Visit | Life Care Physiotherapy Center",
  description:
    "Submit a validated booking request that opens a prefilled WhatsApp message for home physiotherapy availability confirmation.",
  path: "/book-home-visit/",
});

export default function BookHomeVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Share the details needed for a home visit request"
        description="The form is designed for static hosting: it validates input, prepares a WhatsApp booking message, and avoids server-side dependencies."
      />
      <section className="section-pad">
        <div className="container-shell max-w-4xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
