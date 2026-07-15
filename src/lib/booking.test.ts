import { describe, expect, it } from "vitest";
import {
  buildTelephoneHref,
  buildWhatsAppHref,
  createBookingMessage,
  validateBookingForm,
} from "@/src/lib/booking";

describe("booking helpers", () => {
  it("creates a tel link", () => {
    expect(buildTelephoneHref("+91 99999 00000")).toBe("tel:+919999900000");
  });

  it("creates a whatsapp link", () => {
    expect(buildWhatsAppHref("Hello Puneet")).toContain(
      "https://wa.me/917417252276?text=Hello%20Puneet",
    );
  });

  it("validates required fields", () => {
    const errors = validateBookingForm({
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
    });

    expect(Object.keys(errors)).toHaveLength(9);
  });

  it("creates a booking message", () => {
    const message = createBookingMessage({
      patientName: "Aarav",
      mobileNumber: "9999999999",
      whatsappNumber: "9999999999",
      patientAge: "52",
      locality: "Gaur City 2",
      preferredDate: "2026-07-20",
      preferredTime: "10:00",
      mainConcern: "Knee pain",
      homeVisitConfirmed: true,
      consentAccepted: true,
    });

    expect(message).toContain("Patient name: Aarav");
    expect(message).toContain("Please confirm availability.");
  });
});
