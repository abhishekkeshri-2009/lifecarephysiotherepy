import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Thank You | Life Care Physiotherapy Center",
  description:
    "Thank you page for booking requests sent through WhatsApp, with reminder copy that appointments are not confirmed automatically.",
  path: "/thank-you/",
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank You"
        title="Your request still needs confirmation"
        description="If you used WhatsApp to send a booking request, please wait for availability confirmation before assuming a session is booked."
      />
      <section className="section-pad">
        <div className="container-shell">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-teal)] px-6 font-semibold text-white"
          >
            Return home
          </Link>
        </div>
      </section>
    </>
  );
}
