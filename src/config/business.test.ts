import { expect, it } from "vitest";
import { business } from "@/src/config/business";

it("shows sunday closed and six opening days", () => {
  expect(business.sundayClosed).toBe(true);
  expect(business.openingHours).toHaveLength(6);
});

it("uses the verified mobile number for calls and WhatsApp", () => {
  expect(business.phoneE164).toBe("+917417252276");
  expect(business.whatsappNumber).toBe("+917417252276");
  expect(business.phoneDisplay).toBe("+91 7417 252 276");
});
