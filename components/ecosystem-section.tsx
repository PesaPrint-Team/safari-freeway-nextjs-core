import { Building2, Home, MapPin, Warehouse, Zap } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const nodes = [
  {
    icon: Home,
    title: 'Home charging',
    copy: 'Inexpensive overnight AC top-ups at 6.6 kW. Driver-owned fleets and executive vehicles reset to a full battery by dawn — no public infrastructure required.',
    meta: '6.6 kW AC',
  },
  {
    icon: Building2,
    title: 'Workplace charging',
    copy: 'Corporate campuses, hotels, hospitals, and offices can install right-sized AC charging to power shuttles and staff vehicles during work hours.',
    meta: '6.6 kW AC',
  },
  {
    icon: Warehouse,
    title: 'Depot & fleet charging',
    copy: 'Mixed AC and DC setups for SACCO, logistics, and cold-chain operators. Schedules align with dispatch windows and off-peak tariffs.',
    meta: '6.6 kW AC · 40–80 kW DC',
  },
  {
    icon: MapPin,
    title: 'Destination & fast charging',
    copy: 'A 40 kW DC session adds roughly 160 km in under an hour on Chui and Duma. 80 kW DC restores most of a 340 km Ndovu range inside a long coffee stop.',
    meta: '40 kW · 80 kW DC',
  },
] as const;

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Charging Ecosystem"
        title={`${COMPANY.vehicleBrand} is not just a vehicle brand — it is an operating ecosystem.`}
        copy="Fleet electrification works when charging matches the route. Our charging model is practical: home, workplace, depot, and destination — tuned to how East African operators actually run."
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
          <span className="font-semibold text-white">Battery warranty:</span> 5 years or 200,000 km on the battery, motor, and motor controller — the parts that matter most for long-term fleet economics.
        </div>
      </Reveal>
    </section>
  );
}
