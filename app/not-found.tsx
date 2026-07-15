import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-shell soft-panel px-6 py-12 text-center">
        <p className="eyebrow">404</p>
        <h1 className="heading-display mt-5 text-5xl font-semibold text-[var(--color-navy)]">
          The page you wanted is not here
        </h1>
        <p className="mt-4 text-lg text-[var(--color-muted)]">
          Try the main service pages, blog, or contact options instead.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--color-teal)] px-6 font-semibold text-white"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
