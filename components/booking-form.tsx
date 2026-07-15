"use client";

import { useState } from "react";
import {
  BookingFormInput,
  buildWhatsAppHref,
  createBookingMessage,
  validateBookingForm,
} from "@/src/lib/booking";
import { trackEvent } from "@/src/lib/analytics";

const initialState: BookingFormInput = {
  patientName: "",
  mobileNumber: "",
  whatsappNumber: "",
  patientAge: "",
  locality: "",
  preferredDate: "",
  preferredTime: "",
  mainConcern: "",
  homeVisitConfirmed: false,
  consentAccepted: false,
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormInput, string>>
  >({});
  const [started, setStarted] = useState(false);

  function update<K extends keyof BookingFormInput>(key: K, value: BookingFormInput[K]) {
    if (!started) {
      setStarted(true);
      trackEvent("booking_form_start");
    }
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateBookingForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const message = createBookingMessage(form);
    trackEvent("booking_form_submit");
    window.open(buildWhatsAppHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="surface-card space-y-5 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["patientName", "Patient name", "text"],
          ["mobileNumber", "Mobile number", "tel"],
          ["whatsappNumber", "WhatsApp number", "tel"],
          ["patientAge", "Patient age", "text"],
          ["locality", "Area / locality", "text"],
          ["preferredDate", "Preferred date", "date"],
          ["preferredTime", "Preferred time", "time"],
        ].map(([key, label, type]) => (
          <label key={key} className="space-y-2 text-sm font-medium text-[var(--color-navy)]">
            <span>{label}</span>
            <input
              type={type}
              value={String(form[key as keyof BookingFormInput] ?? "")}
              onChange={(event) =>
                update(
                  key as keyof BookingFormInput,
                  event.target.value as never,
                )
              }
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[var(--color-text)]"
            />
            {errors[key as keyof BookingFormInput] ? (
              <span className="text-xs text-rose-700">
                {errors[key as keyof BookingFormInput]}
              </span>
            ) : null}
          </label>
        ))}
      </div>
      <label className="space-y-2 text-sm font-medium text-[var(--color-navy)]">
        <span>Main concern</span>
        <textarea
          rows={5}
          value={form.mainConcern}
          onChange={(event) => update("mainConcern", event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-[var(--color-text)]"
        />
        {errors.mainConcern ? (
          <span className="text-xs text-rose-700">{errors.mainConcern}</span>
        ) : null}
      </label>
      <label className="flex items-start gap-3 rounded-2xl bg-[var(--color-pale)] p-4 text-sm">
        <input
          type="checkbox"
          checked={form.homeVisitConfirmed}
          onChange={(event) => update("homeVisitConfirmed", event.target.checked)}
          className="mt-1"
        />
        <span>
          I confirm that I am requesting a home physiotherapy visit.
          {errors.homeVisitConfirmed ? (
            <span className="mt-1 block text-xs text-rose-700">
              {errors.homeVisitConfirmed}
            </span>
          ) : null}
        </span>
      </label>
      <label className="flex items-start gap-3 rounded-2xl bg-[var(--color-pale)] p-4 text-sm">
        <input
          type="checkbox"
          checked={form.consentAccepted}
          onChange={(event) => update("consentAccepted", event.target.checked)}
          className="mt-1"
        />
        <span>
          I understand this is a booking request only and that appointments are
          subject to confirmation.
          {errors.consentAccepted ? (
            <span className="mt-1 block text-xs text-rose-700">
              {errors.consentAccepted}
            </span>
          ) : null}
        </span>
      </label>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-teal)] px-6 text-sm font-semibold text-white">
        Send WhatsApp Booking Request
      </button>
    </form>
  );
}
