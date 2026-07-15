import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Home Physiotherapy in Gaur City 2 | Life Care Physiotherapy Center",
  description:
    "Learn how home physiotherapy works, who it may suit, and how a home assessment can be requested in Greater Noida.",
  path: "/home-physiotherapy/",
});

export default function HomePhysiotherapyPage() {
  return (
    <PageHero
      eyebrow="Home Physiotherapy"
      title="Why home physiotherapy can be more practical for many patients"
      description="A home-first setup can reduce travel strain, make exercises more relevant to daily life, and involve caregivers when needed."
    />
  );
}
