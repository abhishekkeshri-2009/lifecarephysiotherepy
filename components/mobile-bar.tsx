"use client";

import Link from "next/link";
import { CalendarPlus, MessageCircle, Phone } from "lucide-react";
import { business } from "@/src/config/business";
import { trackEvent } from "@/src/lib/analytics";
import { buildTelephoneHref, buildWhatsAppHref } from "@/src/lib/booking";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(18,50,71,0.08)] md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a href={buildTelephoneHref(business.phoneE164)} onClick={() => trackEvent("call_click", { placement: "mobile-bar" })} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-3 text-sm font-semibold text-[var(--color-navy)]">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a href={buildWhatsAppHref(`Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`)} onClick={() => trackEvent("whatsapp_click", { placement: "mobile-bar" })} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--color-whatsapp)] px-3 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link href="/book-home-visit/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--color-teal)] px-3 text-sm font-semibold text-white">
          <CalendarPlus className="h-4 w-4" />
          Book
        </Link>
      </div>
    </div>
  );
}
