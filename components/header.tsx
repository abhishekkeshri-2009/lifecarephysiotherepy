"use client";

import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { business } from "@/src/config/business";
import { trackEvent } from "@/src/lib/analytics";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";

const navItems = [
  ["/", "Home"],
  ["/about/", "About"],
  ["/services/", "Services"],
  ["/conditions/", "Conditions"],
  ["/home-visit-process/", "Home Visit Process"],
  ["/blog/", "Blog"],
  ["/faq/", "FAQ"],
  ["/contact/", "Contact"],
] as const;

function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-navy)] text-white shadow-lg shadow-cyan-100">
        LC
      </div>
      <div className="leading-tight">
        <div className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)]">
          Life Care
        </div>
        <div className="text-sm text-[var(--color-muted)]">
          Physiotherapy Center
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-teal)]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={buildTelephoneHref(business.phoneE164)} onClick={() => trackEvent("call_click", { placement: "header" })} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[var(--color-navy)]">
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a href={buildWhatsAppHref(`Hello ${business.contactPerson}, I would like to book a home physiotherapy visit.`)} onClick={() => trackEvent("whatsapp_click", { placement: "header" })} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-2 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a aria-label="Call now" href={buildTelephoneHref(business.phoneE164)} onClick={() => trackEvent("call_click", { placement: "mobile-top" })} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--color-navy)]">
            <Phone className="h-4 w-4" />
          </a>
          <a aria-label="Book on WhatsApp" href={buildWhatsAppHref(`Hello ${business.contactPerson}, I would like to book a home physiotherapy visit.`)} onClick={() => trackEvent("whatsapp_click", { placement: "mobile-top" })} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white">
            <MessageCircle className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--color-navy)]">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-3 font-medium text-[var(--color-navy)] hover:bg-[var(--color-pale)]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
