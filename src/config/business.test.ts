import { expect, it } from "vitest";
import {
  business,
  formatFullAddress,
  hasPlaceholderContact,
} from "@/src/config/business";

it("shows all seven days open, including Sunday", () => {
  expect(business.sundayClosed).toBe(false);
  expect(business.openingHours).toHaveLength(7);
  expect(business.openingHours.at(-1)).toEqual({
    day: "Sunday",
    hours: "8:00 AM - 8:00 PM",
  });
});

it("uses the verified mobile number for calls and WhatsApp", () => {
  expect(business.phoneE164).toBe("+917417252276");
  expect(business.whatsappNumber).toBe("+917417252276");
  expect(business.phoneDisplay).toBe("+91 7417 252 276");
});

it("uses the verified contact email", () => {
  expect(business.email).toBe("puneetthakur250@gmail.com");
  expect(hasPlaceholderContact).toBe(false);
});

it("uses the Justdial address in the complete business address", () => {
  expect(formatFullAddress()).toBe(
    "P-146, 14th Avenue, near Mahagun Mywoods, Gaur City 2, Greater Noida, Uttar Pradesh, 201318, India",
  );
  expect(business.socialLinks.justdial).toContain("justdial.com/Greater-Noida");
});
