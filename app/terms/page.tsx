import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms and Conditions | Life Care Physiotherapy Center",
  description:
    "Terms for using the Life Care Physiotherapy Center website, including booking request status, content limitations, and service availability notes.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <PageHero
      eyebrow="Terms"
      title="Terms and Conditions"
      description="Appointment requests are subject to confirmation, website content is informational, and service availability depends on location and scheduling."
    />
  );
}
