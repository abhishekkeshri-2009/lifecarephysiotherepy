import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { business, hasPlaceholderContact } from "@/src/config/business";
import { buildMetadata } from "@/src/lib/metadata";
import { organizationSchema, websiteSchema } from "@/src/lib/schema";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title:
      "Home Physiotherapy in Gaur City 2, Greater Noida | Life Care Physiotherapy Center",
    description:
      "Book home physiotherapy in Gaur City 2 and nearby Greater Noida areas for pain management, mobility support, rehabilitation, and recovery at home.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-page)] text-[var(--color-text)]">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteShell showPlaceholderBanner={hasPlaceholderContact}>
          {children}
        </SiteShell>
        {hasPlaceholderContact ? (
          <div className="sr-only" aria-live="polite">
            Contact placeholders are still active for {business.businessName}.
          </div>
        ) : null}
      </body>
    </html>
  );
}
