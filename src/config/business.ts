export type OpeningHour = {
  day: string;
  hours: string;
};

export type Review = {
  quote: string;
  author: string;
  sourceLabel: string;
  sourceUrl?: string;
};

export const PLACEHOLDER_PHONE = "+910000000000";
export const PLACEHOLDER_WHATSAPP = "+910000000000";
export const PLACEHOLDER_EMAIL = "hello@example.com";

export const business = {
  businessName: "Life Care Physiotherapy Center",
  domain: "https://lifecarephysiotherepy.com",
  contactPerson: "Puneet",
  phoneDisplay: "Phone number required before launch",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || PLACEHOLDER_PHONE,
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_E164 || PLACEHOLDER_WHATSAPP,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || PLACEHOLDER_EMAIL,
  addressLine: "Complete postal address required before launch",
  locality: "Gaur City 2",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  postalCode: "Postal code required",
  country: "India",
  latitude: "Latitude required",
  longitude: "Longitude required",
  googleMapsUrl: "",
  openingHours: [
    { day: "Monday", hours: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
  ] satisfies OpeningHour[],
  sundayClosed: true,
  serviceAreas: [
    "Gaur City 2",
    "Gaur City 1",
    "Noida Extension",
    "Nearby societies in Greater Noida West",
  ],
  qualifications: [],
  registrations: [],
  verifiedReviews: [] as Review[],
  socialLinks: {
    whatsapp: "",
    googleBusinessProfile: "",
    justdial: "",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
};

export const hasPlaceholderContact =
  business.phoneE164 === PLACEHOLDER_PHONE ||
  business.whatsappNumber === PLACEHOLDER_WHATSAPP ||
  business.email === PLACEHOLDER_EMAIL;

export function formatFullAddress() {
  return [
    business.addressLine,
    business.locality,
    business.city,
    business.state,
    business.postalCode,
    business.country,
  ]
    .filter(Boolean)
    .join(", ");
}
