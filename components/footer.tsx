import Image from 'next/image';
import { Building2, Mail, MapPinned, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/company';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex flex-wrap gap-3">
            <div className="overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <Image src="/brand/auto-freeway.png" alt={`${COMPANY.brand} logo`} width={160} height={136} className="h-14 w-auto" />
            </div>
            <div className="overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <Image src="/brand/safari-freeway-logo.png" alt={`${COMPANY.vehicleBrand} logo`} width={520} height={320} className="h-14 w-auto" />
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/50">{COMPANY.legalName} delivers {COMPANY.vehicleBrand} electric mobility solutions for transport companies, logistics operators, manufacturers, and commercial fleets across East Africa.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Solutions</div>
          <div className="mt-4 space-y-3 text-sm text-white/50">
            <div>Passenger transport</div>
            <div>Fleet logistics</div>
            <div>Cold-chain delivery</div>
            <div>Commercial electrification</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Platform</div>
          <div className="mt-4 space-y-3 text-sm text-white/50">
            <div>Booking forms</div>
            <div>Fleet dashboard</div>
            <div>ROI planning</div>
            <div>Service visibility</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <div className="mt-4 space-y-3 text-sm text-white/50">
            <div className="flex items-center gap-3"><MapPinned className="h-4 w-4" /> {COMPANY.city}</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> {COMPANY.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}</div>
            <div className="flex items-center gap-3"><Building2 className="h-4 w-4" /> Commercial fleet sales desk</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
