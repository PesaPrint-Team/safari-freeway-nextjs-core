import { CompetitorSection } from '@/components/competitor-section';
import { DashboardPreview } from '@/components/dashboard-preview';
import { FinalCta } from '@/components/final-cta';
import { FinanceSection } from '@/components/finance-section';
import { FleetGrid } from '@/components/fleet-grid';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { LeadForm } from '@/components/lead-form';
import { Navbar } from '@/components/navbar';
import { RoiSection } from '@/components/roi-section';
import { Solutions } from '@/components/solutions';
import { TrustBar } from '@/components/trust-bar';
import { VisualFleet } from '@/components/visual-fleet';
import { WhatsappSection } from '@/components/whatsapp-section';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Solutions />
      <VisualFleet />
      <FleetGrid />
      <CompetitorSection />
      <RoiSection />
      <FinanceSection />
      <DashboardPreview />
      <WhatsappSection />
      <LeadForm />
      <FinalCta />
      <Footer />
    </main>
  );
}
