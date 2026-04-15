import { Building2, Mail, MapPinned, Phone } from 'lucide-react';
import { COMPANY } from '@/lib/company';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-sm font-medium tracking-[0.35em] text-white/60">SAFARI FREEWAY</div>
          <p className="mt-4 text-sm leading-7 text-white/50">Elite electric mobility for transport companies, logistics operators, and commercial fleets.</p>
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
