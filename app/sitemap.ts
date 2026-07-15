import type { MetadataRoute } from "next";
import { blogPosts } from "@/src/content/blog";
import { services } from "@/src/content/services";
import { business } from "@/src/config/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about/",
    "/services/",
    "/conditions/",
    "/home-physiotherapy/",
    "/service-areas/",
    "/home-visit-process/",
    "/blog/",
    "/faq/",
    "/contact/",
    "/book-home-visit/",
    "/privacy-policy/",
    "/terms/",
    "/medical-disclaimer/",
    "/thank-you/",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${business.domain}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${business.domain}/services/${service.slug}/`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      url: `${business.domain}/blog/${post.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
