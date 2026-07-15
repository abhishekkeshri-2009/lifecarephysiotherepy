import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { blogPosts, getBlogPost } from "@/src/content/blog";
import { business } from "@/src/config/business";
import { getService } from "@/src/content/services";
import { buildMetadata } from "@/src/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/src/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | Life Care Physiotherapy Center`,
    description: post.description,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogDetailPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", item: business.domain },
          { name: "Blog", item: `${business.domain}/blog/` },
          { name: post.title, item: `${business.domain}/blog/${post.slug}/` },
        ])}
      />
      <StructuredData
        data={articleSchema({
          headline: post.title,
          description: post.description,
          path: `/blog/${post.slug}/`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        })}
      />
      <PageHero
        eyebrow="Article"
        title={post.title}
        description={post.description}
      />
      <section className="section-pad">
        <article className="container-shell prose-copy max-w-4xl">
          <div className="mb-8 rounded-[2rem] bg-[var(--color-pale)] p-5 text-sm text-[var(--color-muted)]">
            Author: {post.author} | Reviewer: {post.reviewer} | Published:{" "}
            {post.publishedAt} | Updated: {post.updatedAt} | {post.readingTime}
          </div>
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-3xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
              Medical disclaimer
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              This article shares general information only. It does not provide
              diagnosis, emergency advice, or a promise of results. Treatment
              suitability depends on individual assessment.
            </p>
          </div>
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-navy)]">
              Related services
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {post.relatedServiceSlugs.map((slug) => {
                const service = getService(slug);
                if (!service) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}/`}
                    className="rounded-full bg-[var(--color-aqua)] px-4 py-3 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    {service.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
