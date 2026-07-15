import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  House,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { StructuredData } from "@/components/structured-data";
import { blogPosts } from "@/src/content/blog";
import { conditions } from "@/src/content/conditions";
import { faqs } from "@/src/content/faqs";
import { additionalServices, services } from "@/src/content/services";
import { business } from "@/src/config/business";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";
import { breadcrumbSchema, faqSchema } from "@/src/lib/schema";

const featuredServices = services.filter((service) => service.featured);

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([{ name: "Home", item: business.domain }])}
      />
      <StructuredData data={faqSchema(faqs)} />
      <section className="overflow-hidden bg-[var(--color-page)]">
        <div className="container-shell grid gap-8 py-10 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <span className="eyebrow">Professional Physiotherapy at Your Home</span>
            <h1 className="heading-display max-w-3xl text-5xl font-semibold leading-tight text-[var(--color-navy)] md:text-7xl">
              Feel Better. Move Better. Recover at Home.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Personalised home physiotherapy in Gaur City 2 and nearby Greater
              Noida areas for pain relief, mobility, rehabilitation and
              recovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-home-visit/"
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-teal)] px-6 font-semibold text-white"
              >
                Book a Home Visit
              </Link>
              <a
                href={buildTelephoneHref(business.phoneE164)}
                className="inline-flex min-h-12 items-center rounded-full border border-slate-200 px-6 font-semibold text-[var(--color-navy)]"
              >
                Call Puneet
              </a>
              <a
                href={buildWhatsAppHref(
                  `Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`,
                )}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-whatsapp)] px-6 font-semibold text-white"
              >
                WhatsApp to Book
              </a>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "Home visits available",
                "Personalised treatment plans",
                "Monday-Saturday, 8 AM-8 PM",
                "Gaur City 2 and nearby areas",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-3 rounded-2xl bg-[var(--color-pale)] px-4 py-3 text-sm font-medium text-[var(--color-navy)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-teal)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="soft-panel relative overflow-hidden px-6 py-6 md:px-8 md:py-8">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 backdrop-blur">
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#d7f4f7,#fefefe)] p-5">
                  <House className="h-8 w-8 text-[var(--color-teal)]" />
                  <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl text-[var(--color-navy)]">
                    Home-first care
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    An original visual treatment for a reassuring home service,
                    not a clinic or hospital setup.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#123247,#18516a)] p-5 text-white">
                  <ShieldCheck className="h-8 w-8 text-cyan-100" />
                  <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl">
                    Practical recovery
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-cyan-50/80">
                    Assessment, exercise progression, mobility support, and
                    caregiver education where relevant.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 rounded-[1.75rem] bg-[var(--color-aqua)] p-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <Clock3 className="h-6 w-6 text-[var(--color-teal)]" />
                  <p className="mt-5 text-sm font-semibold text-[var(--color-navy)]">
                    Monday-Saturday
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    8:00 AM to 8:00 PM
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <MapPin className="h-6 w-6 text-[var(--color-teal)]" />
                  <p className="mt-5 text-sm font-semibold text-[var(--color-navy)]">
                    Primary coverage
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    Gaur City 2, Greater Noida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[var(--color-pale)] py-5">
        <div className="container-shell grid gap-3 md:grid-cols-6">
          {[
            "Home Physiotherapy Only",
            "Monday-Saturday",
            "8 AM-8 PM",
            "Sunday Closed",
            "Call and WhatsApp booking",
            "Gaur City 2, Greater Noida",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-[var(--color-navy)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="eyebrow">Introduction</span>
            <h2 className="heading-display mt-5 text-4xl font-semibold text-[var(--color-navy)] md:text-5xl">
              Home Physiotherapy Focused on Your Recovery
            </h2>
            <div className="prose-copy mt-4 max-w-2xl">
              <p>
                The care approach is built around individual assessment,
                personalised exercise programmes, pain-management support,
                mobility improvement, rehabilitation at home, progress
                monitoring, and caregiver education where relevant.
              </p>
              <p>
                The website avoids guaranteed recovery claims and instead
                presents home physiotherapy as a practical, assessment-led
                service designed around patient needs and function.
              </p>
            </div>
          </div>
          <div className="surface-card grid gap-4 p-6 md:grid-cols-2">
            {[
              "Individual assessment",
              "Personalised exercise programme",
              "Pain-management support",
              "Mobility improvement",
              "Rehabilitation at home",
              "Progress monitoring",
              "Caregiver education",
              "Appointment confirmation required",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-[var(--color-pale)] p-4 text-sm font-medium text-[var(--color-navy)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Popular Services</span>
              <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
                Popular Home Physiotherapy Services
              </h2>
            </div>
            <Link
              href="/services/"
              className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-teal)] md:inline-flex"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="surface-card flex h-full flex-col p-6"
              >
                <h3 className="text-2xl font-semibold text-[var(--color-navy)]">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {service.shortIntro}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.goals.map((goal) => (
                    <span
                      key={goal}
                      className="rounded-full bg-[var(--color-aqua)] px-3 py-2 text-xs font-semibold text-[var(--color-navy)]"
                    >
                      {goal}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                  {service.homeSuitability}
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    href={`/services/${service.slug}/`}
                    className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-teal)] px-5 text-sm font-semibold text-white"
                  >
                    Discuss Your Condition
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white p-5 text-sm text-[var(--color-muted)]">
            Additional services listed for content management:{" "}
            {additionalServices.join(", ")}.
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Conditions</span>
            <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
              Conditions We Support
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              The site uses support and physiotherapy management language rather
              than cure claims, with condition-led navigation for common home
              visit enquiries.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {conditions.map((condition) => (
              <div key={condition.slug} className="surface-card p-5">
                <h3 className="text-xl font-semibold text-[var(--color-navy)]">
                  {condition.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {condition.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Treatment in a familiar home environment",
            "No travel requirement",
            "Personalised one-to-one attention",
            "Exercises adapted to the patient's surroundings",
            "Family and caregiver participation",
            "Convenient appointment timing",
            "Regular progress review",
            "Booking subject to confirmation",
          ].map((item) => (
            <div
              key={item}
              className="surface-card p-5 text-sm font-medium text-[var(--color-navy)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <span className="eyebrow">Home Visit Process</span>
          <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
            How a Home Visit Request Moves Forward
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              "Call or WhatsApp",
              "Share the patient's concern and location",
              "Schedule the home assessment",
              "Receive a personalised physiotherapy plan",
            ].map((step, index) => (
              <div key={step} className="surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-teal)] text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mt-5 text-lg font-semibold text-[var(--color-navy)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/book-home-visit/"
              className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-teal)] px-6 font-semibold text-white"
            >
              Request Home Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-8">
            <span className="eyebrow">Meet Puneet</span>
            <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
              A restrained, accurate profile until verified data is supplied
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Puneet coordinates home physiotherapy appointments and patient
              enquiries for Life Care Physiotherapy Center.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Verified degrees, registrations, certifications, hospital
              associations, awards, or experience claims are intentionally not
              shown here because they were not available in the repository.
            </p>
          </div>
          <div className="surface-card p-8">
            <span className="eyebrow">Service Area</span>
            <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
              Gaur City 2 first, nearby areas by confirmation
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-[var(--color-aqua)] px-4 py-3 text-sm font-semibold text-[var(--color-navy)]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
              Home-visit availability depends on location and schedule
              confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-8">
            <span className="eyebrow">Patient Reviews</span>
            <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
              Verified reviews can be added later
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              The site includes the review section UI but does not fabricate
              testimonials, names, profile images, or ratings from screenshots.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-2xl font-semibold text-[var(--color-navy)]">
              Invite a review after service
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Once verified review sources and consent are available, this area
              can display authentic feedback with source links and accurate
              wording.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
            Common Questions About Home Physiotherapy
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="surface-card group p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-navy)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Blog</span>
              <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
                Helpful Physiotherapy Articles
              </h2>
            </div>
            <Link
              href="/blog/"
              className="hidden text-sm font-semibold text-[var(--color-teal)] md:block"
            >
              Visit the blog
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="surface-card flex h-full flex-col p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
                  {post.readingTime}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-navy)]">
                  {post.title}
                </h3>
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
        </div>
      </section>

      <section className="section-pad bg-[var(--color-pale)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <span className="eyebrow">Book a Visit</span>
            <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)]">
              Request a home assessment through WhatsApp
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              The form validates required details, prepares a prefilled
              WhatsApp request, and never claims an appointment is confirmed
              automatically.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell soft-panel px-6 py-10 text-center md:px-10 md:py-14">
          <span className="eyebrow">Final CTA</span>
          <h2 className="heading-display mt-4 text-4xl font-semibold text-[var(--color-navy)] md:text-5xl">
            Need Physiotherapy at Home?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={buildTelephoneHref(business.phoneE164)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Call Puneet
            </a>
            <a
              href={buildWhatsAppHref(
                `Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`,
              )}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-6 font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </a>
            <Link
              href="/book-home-visit/"
              className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-teal)] px-6 font-semibold text-white"
            >
              Request Home Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
