import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Medical Disclaimer | Life Care Physiotherapy Center",
  description:
    "Medical disclaimer for Life Care Physiotherapy Center covering general information, assessment requirements, emergency care, and variability of outcomes.",
  path: "/medical-disclaimer/",
});

export default function MedicalDisclaimerPage() {
  return (
    <PageHero
      eyebrow="Medical Disclaimer"
      title="General information, not diagnosis"
      description="Website content is general information only. Treatment suitability requires assessment, results differ between patients, and emergencies require immediate medical care."
    />
  );
}
