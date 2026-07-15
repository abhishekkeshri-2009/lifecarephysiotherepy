import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy | Life Care Physiotherapy Center",
  description:
    "Privacy policy for the Life Care Physiotherapy Center website, including basic contact handling, analytics configuration, and data minimisation guidance.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <PageHero
      eyebrow="Privacy"
      title="Privacy Policy"
      description="The site is built to minimise data collection, use direct contact methods where possible, and keep analytics optional."
    />
  );
}
