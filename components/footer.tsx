import Link from "next/link";
import { business, formatFullAddress } from "@/src/config/business";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl">
            {business.businessName}
          </h2>
          <p className="max-w-md text-sm text-cyan-50/85">
            Home physiotherapy only for Gaur City 2 and nearby Greater Noida
            areas. Appointment requests remain subject to availability and
            confirmation.
          </p>
          <div className="space-y-1 text-sm text-cyan-50/85">
            <p>Contact person: {business.contactPerson}</p>
            <p>Monday-Sunday: 8:00 AM-8:00 PM</p>
            <p>{formatFullAddress()}</p>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Quick links</h3>
          <div className="flex flex-col gap-2 text-sm text-cyan-50/85">
            <Link href="/services/">Services</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms/">Terms and Conditions</Link>
            <Link href="/medical-disclaimer/">Medical Disclaimer</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Contact</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href={buildTelephoneHref(business.phoneE164)}>
              Call {business.phoneDisplay}
            </a>
            <a href={buildWhatsAppHref(`Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`)}>
              WhatsApp {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={business.googleMapsUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cyan-50/70">
        Copyright {new Date().getFullYear()} {business.businessName}
      </div>
    </footer>
  );
}
