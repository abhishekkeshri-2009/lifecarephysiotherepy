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
export const PRIMARY_PHONE_E164 = "+917417252276";

export const business = {
  businessName: "Life Care Physiotherapy Center",
  domain: "https://lifecarephysiotherepy.com",
  contactPerson: "Dr. Puneet Tomar",
  phoneDisplay: "+91 7417 252 276",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || PRIMARY_PHONE_E164,
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_E164 || PRIMARY_PHONE_E164,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || PLACEHOLDER_EMAIL,
  addressLine: "P-146, 14th Avenue, near Mahagun Mywoods",
  locality: "Gaur City 2",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  postalCode: "201318",
  country: "India",
  latitude: "Latitude required",
  longitude: "Longitude required",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=P-146%2C%2014th%20Avenue%2C%20Gaur%20City%202%2C%20near%20Mahagun%20Mywoods%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201318",
  openingHours: [
    { day: "Monday", hours: "8:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" },
  ] satisfies OpeningHour[],
  sundayClosed: false,
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
    justdial:
      "https://www.justdial.com/Greater-Noida/Life-Care-Physiotherapy-Center-Near-Mahagun-Mywoods-Gaur-City-2/011PXX11-XX11-210713225521-B7Q5_BZDET",
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
