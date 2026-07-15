export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="soft-panel px-6 py-10 md:px-10 md:py-14">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="heading-display mt-5 max-w-3xl text-4xl font-semibold text-[var(--color-navy)] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
