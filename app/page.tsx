import { CompetitorSection } from '@/components/competitor-section';
import { DashboardPreview } from '@/components/dashboard-preview';
import { EcosystemSection } from '@/components/ecosystem-section';
import { FinalCta } from '@/components/final-cta';
import { FinanceSection } from '@/components/finance-section';
import { FleetGrid } from '@/components/fleet-grid';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { LeadForm } from '@/components/lead-form';
import { Navbar } from '@/components/navbar';
import { PartnersSection } from '@/components/partners-section';
import { RoiSection } from '@/components/roi-section';
import { Solutions } from '@/components/solutions';
import { TechnologySection } from '@/components/technology-section';
import { TrustBar } from '@/components/trust-bar';
import { VisualFleet } from '@/components/visual-fleet';
import { WhatsappSection } from '@/components/whatsapp-section';
import { ReservationForm } from '@/components/forms/reservation-form';
import { TestDriveForm } from '@/components/forms/test-drive-form';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Solutions />
      <VisualFleet />
      <FleetGrid />
      <TechnologySection />
      <EcosystemSection />
      <CompetitorSection />
      <RoiSection />
      <FinanceSection />
      <DashboardPreview />
      <PartnersSection />

      {/* Priority Access — operator, fleet, and consumer pre-order */}
      <section id="reserve" className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
              Priority Access
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Reserve a Safari Freeway vehicle.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)] sm:leading-8">
              Three ways to get early access: as a buyer, as a fleet operator, or as a partner. Pick your track below.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--muted-soft)] sm:mt-8">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                Buyers: first-drive priority and launch updates
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                Fleets: deployment planning and TCO numbers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                Partners: charging, energy, and distribution
              </li>
            </ul>
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* Book a Test Drive */}
      <section id="test-drive" className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--brand)]">
              Test Drive
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              Book a test drive.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)] sm:leading-8">
              Try a Safari Freeway vehicle in person. We&apos;ll confirm a slot in your city and answer questions directly.
            </p>
          </div>
          <TestDriveForm />
        </div>
      </section>

      <WhatsappSection />
      <LeadForm />
      <FinalCta />
      <Footer />
    </main>
  );
}
