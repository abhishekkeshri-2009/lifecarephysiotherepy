import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBar } from "@/components/mobile-bar";

export function SiteShell({
  children,
  showPlaceholderBanner,
}: {
  children: React.ReactNode;
  showPlaceholderBanner: boolean;
}) {
  return (
    <>
      {showPlaceholderBanner ? (
        <div className="bg-amber-100 px-4 py-3 text-sm text-amber-950">
          <div className="container-shell flex flex-wrap items-center justify-between gap-2">
            <p>
              Launch data is still incomplete. Qualifications and analytics
              placeholders must be replaced before the site goes live.
            </p>
            <Link className="font-semibold underline" href="/contact/">
              Review launch checklist
            </Link>
          </div>
        </div>
      ) : null}
      <Header />
      <main id="main-content" className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
