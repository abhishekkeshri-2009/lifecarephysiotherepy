import { business } from "@/src/config/business";

export type BookingFormInput = {
  patientName: string;
  mobileNumber: string;
  whatsappNumber: string;
  patientAge: string;
  locality: string;
  preferredDate: string;
  preferredTime: string;
  mainConcern: string;
  homeVisitConfirmed: boolean;
  consentAccepted: boolean;
};

export function buildTelephoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function buildWhatsAppHref(message: string) {
  const cleanNumber = business.whatsappNumber.replace(/[^\d+]/g, "");
  return `https://wa.me/${cleanNumber.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function validateBookingForm(input: BookingFormInput) {
  const errors: Partial<Record<keyof BookingFormInput, string>> = {};

  if (!input.patientName.trim()) errors.patientName = "Patient name is required.";
  if (!input.mobileNumber.trim()) errors.mobileNumber = "Mobile number is required.";
  if (!input.patientAge.trim()) errors.patientAge = "Patient age is required.";
  if (!input.locality.trim()) errors.locality = "Area or locality is required.";
  if (!input.preferredDate.trim()) errors.preferredDate = "Preferred date is required.";
  if (!input.preferredTime.trim()) errors.preferredTime = "Preferred time is required.";
  if (!input.mainConcern.trim()) errors.mainConcern = "Main concern is required.";
  if (!input.homeVisitConfirmed) errors.homeVisitConfirmed = "Please confirm the home visit requirement.";
  if (!input.consentAccepted) errors.consentAccepted = "Consent is required before sending the request.";

  return errors;
}

export function createBookingMessage(input: BookingFormInput) {
  return [
    `Hello ${business.contactPerson}, I would like to request a home physiotherapy visit.`,
    "",
    `Patient name: ${input.patientName}`,
    `Mobile number: ${input.mobileNumber}`,
    `WhatsApp number: ${input.whatsappNumber || input.mobileNumber}`,
    `Age: ${input.patientAge}`,
    `Area: ${input.locality}`,
    `Preferred date: ${input.preferredDate}`,
    `Preferred time: ${input.preferredTime}`,
    `Main concern: ${input.mainConcern}`,
    "",
    "Please confirm availability.",
  ].join("\n");
}
