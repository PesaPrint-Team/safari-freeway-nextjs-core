import {
  BatteryCharging,
  CircuitBoard,
  Cog,
  Droplets,
  Mountain,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const pillars = [
  {
    icon: BatteryCharging,
    title: 'LFP battery packs',
    copy: 'Lithium-iron-phosphate packs from GOTION High-Tech and EVE. Safer and longer-lasting than NMC for commercial use.',
  },
  {
    icon: ShieldCheck,
    title: '5-year battery warranty',
    copy: '5 years or 200,000 km on the battery, motor, and controller. Chassis and body get their own tiered coverage on top.',
  },
  {
    icon: CircuitBoard,
    title: 'CAN-bus diagnostics',
    copy: 'Real-time vehicle health data. Fleet managers see issues before they become breakdowns.',
  },
  {
    icon: Mountain,
    title: 'Built for African roads',
    copy: 'McPherson front suspension, leaf-spring rear, 20%+ gradeability, and waterproof wiring for flood season.',
  },
  {
    icon: Droplets,
    title: 'Liquid-cooled packs',
    copy: 'Batteries sit low in the floor and are liquid-cooled for equatorial heat and rough road surfaces.',
  },
  {
    icon: Cog,
    title: 'Operator-friendly cabins',
    copy: 'RHD electric power-assist steering, ABS brakes, anti-slip vinyl floors, and a 24V body-builder interface.',
  },
] as const;

export function TechnologySection() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Technology & Safety"
        title="Specs that matter for commercial fleets."
        copy="The specs below are standard across every Safari Freeway model. Uptime, running cost, and safety — the three things fleet operators measure."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={(index % 3) * 0.08}>
              <Card className="h-full shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <CardContent>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6 text-[var(--sand)]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{pillar.copy}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
