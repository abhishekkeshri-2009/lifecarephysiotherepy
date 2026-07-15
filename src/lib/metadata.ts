import type { Metadata } from "next";
import { business } from "@/src/config/business";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, `${business.domain}/`).toString();
}

export function buildMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    metadataBase: new URL(business.domain),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.businessName,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
