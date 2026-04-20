import { Building2, Home, MapPin, Warehouse, Zap } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const nodes = [
  {
    icon: Home,
    title: 'Home charging',
    copy: 'Overnight 6.6 kW AC top-ups. A full battery by morning, with no public infrastructure required.',
    meta: '6.6 kW AC',
  },
  {
    icon: Building2,
    title: 'Workplace charging',
    copy: 'Campuses, hotels, hospitals, and offices install AC chargers to top up shuttles and staff vehicles during the workday.',
    meta: '6.6 kW AC',
  },
  {
    icon: Warehouse,
    title: 'Depot & fleet charging',
    copy: 'Mixed AC and DC setups for SACCO, logistics, and cold-chain fleets. Plans align with dispatch windows and off-peak tariffs.',
    meta: '6.6 kW AC · 40–80 kW DC',
  },
  {
    icon: MapPin,
    title: 'Destination & fast charging',
    copy: 'A 40 kW DC session adds about 160 km to a Chui in under an hour. An 80 kW DC session restores most of a Ndovu\u2019s 340 km range in about the same time.',
    meta: '40 kW · 80 kW DC',
  },
] as const;

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Charging"
        title="Where and how you charge."
        copy={`Charging matched to how fleets actually operate. Home, workplace, depot, and destination — each tuned to the way ${COMPANY.vehicleBrand} vehicles are used.`}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <Reveal key={node.title} delay={(index % 2) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,52,57,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-7 w-7 text-[var(--sand)]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-white">{node.title}</h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-black/20 px-3 py-1 text-xs text-white/70">
                        <Zap className="h-3 w-3 text-[var(--brand)]" /> {node.meta}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">{node.copy}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-8 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(207,52,57,0.18),rgba(255,255,255,0.04))] p-6 text-sm leading-7 text-white/75 sm:p-8">
          <span className="font-semibold text-white">Battery warranty:</span> 5 years or 200,000 km on the battery, motor, and motor controller.
        </div>
      </Reveal>
    </section>
  );
}
