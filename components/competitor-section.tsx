import { COMPANY } from '@/lib/company';
import { BUSIGO_COMPARE } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export function CompetitorSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Market Leadership"
        title="Built to outperform legacy transport brands."
        copy={`${COMPANY.legalName} positions ${COMPANY.vehicleBrand} as a premium electric fleet ecosystem with stronger economics, executive control, and future-ready transport infrastructure.`}
      />
      <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
        <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white">
          <div>Metric</div>
          <div>{COMPANY.vehicleBrand}</div>
          <div>Typical Competitor</div>
        </div>
        {BUSIGO_COMPARE.map((row) => (
          <div key={row[0]} className="grid grid-cols-3 border-b border-white/10 p-4 text-sm text-white/70 last:border-0">
            <div className="font-medium text-white">{row[0]}</div>
            <div>{row[1]}</div>
            <div>{row[2]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
