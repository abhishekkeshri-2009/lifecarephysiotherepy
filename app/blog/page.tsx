import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/src/content/blog";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Physiotherapy Blog | Life Care Physiotherapy Center",
  description:
    "Read practical physiotherapy articles about home visits, neck strain, knee pain, sciatica, stroke rehabilitation, and sports injury recovery.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="A maintainable starter blog for home physiotherapy content"
        description="All articles are stored in structured content so future updates stay simple and do not depend on repeated JSX edits."
      />
      <section className="section-pad">
        <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="surface-card flex h-full flex-col p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
                {post.readingTime}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--color-navy)]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}/`}
                className="mt-auto pt-6 text-sm font-semibold text-[var(--color-teal)]"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
