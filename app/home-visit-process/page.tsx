import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Home Visit Process | Life Care Physiotherapy Center",
  description:
    "Understand the steps for requesting a home physiotherapy visit, from initial contact through assessment scheduling and follow-up planning.",
  path: "/home-visit-process/",
});

export default function HomeVisitProcessPage() {
  return (
    <PageHero
      eyebrow="Process"
      title="A simple four-step route to a home assessment request"
      description="Call or WhatsApp, share the concern and location, schedule the home assessment, and receive a personalised physiotherapy plan after review."
    />
  );
}
