import { BatteryCharging, Gauge, MapPinned, Zap } from 'lucide-react';
import { Button } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const cards = [
  { title: 'Bookings', value: '1,284', icon: MapPinned, meta: '+18% this week' },
  { title: 'Average battery level', value: '74%', icon: BatteryCharging, meta: 'Healthy dispatch window' },
  { title: 'Utilization', value: '91%', icon: Gauge, meta: 'Peak fleet usage' },
  { title: 'Charging sessions', value: '246', icon: Zap, meta: 'Optimized overnight' }
] as const;

export function DashboardPreview() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Dashboard"
          title="Fleet visibility in one place."
          copy="A simple preview of the tools operators can use to track bookings, charging, service activity, and overall vehicle utilization."
        />
        <Reveal className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={0.1 + index * 0.08} y={16}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/50">{card.title}</div>
                        <div className="mt-2 text-3xl font-semibold text-white">{card.value}</div>
                      </div>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-sm text-white/55">{card.meta}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.45} y={16}>
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/50">Charging and service timeline</div>
                  <div className="mt-1 text-xl font-semibold text-white">Smart fleet scheduling panel</div>
                </div>
                <Button variant="outline">Live preview</Button>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
