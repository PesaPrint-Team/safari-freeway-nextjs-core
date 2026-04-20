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
    title: 'LFP battery platforms',
    copy: 'Lithium-iron-phosphate packs from GOTION High-Tech and EVE — chosen for safety, thermal stability, and dependable commercial lifecycle.',
  },
  {
    icon: ShieldCheck,
    title: '5-year battery warranty',
    copy: 'Up to 200,000 km of coverage on the battery, motor, and motor controller. Tiered warranty across chassis, body, and controllers for predictable fleet TCO.',
  },
  {
    icon: CircuitBoard,
    title: 'CAN-bus diagnostics',
    copy: 'Every vehicle ships with real-time fleet health telemetry, giving operators service clarity and reducing surprise downtime.',
  },
  {
    icon: Mountain,
    title: 'Built for African roads',
    copy: 'McPherson front suspension, leaf-spring rear, ≥20% gradeability, and waterproof wiring looms engineered to survive flood season and heat.',
  },
  {
    icon: Droplets,
    title: 'Liquid-cooled packs',
    copy: 'Batteries live low in the floor, liquid-cooled to shrug off equatorial heat and pothole punishment without throttling performance.',
  },
  {
    icon: Cog,
    title: 'Operator-friendly cabins',
    copy: 'RHD electric power-assist steering, ABS disc/drum brakes, anti-slip vinyl flooring, and a 24V body-builder interface for easy conversions.',
  },
] as const;

export function TechnologySection() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Technology & Safety"
        title="Engineered for the routes, climates, and economics of East Africa."
        copy="Every Safari Freeway™ vehicle is built around the three things fleet operators actually measure: uptime, running cost, and safety. The specs below are standard across the lineup."
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
