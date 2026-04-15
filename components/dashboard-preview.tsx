import { BatteryCharging, Gauge, MapPinned, Zap } from 'lucide-react';
import { Button } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

const cards = [
  { title: 'Bookings', value: '1,284', icon: MapPinned, meta: '+18% this week' },
  { title: 'Average battery level', value: '74%', icon: BatteryCharging, meta: 'Healthy dispatch window' },
  { title: 'Utilization', value: '91%', icon: Gauge, meta: 'Peak fleet usage' },
  { title: 'Charging sessions', value: '246', icon: Zap, meta: 'Optimized overnight' }
] as const;

export function DashboardPreview() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Dashboard"
          title="Sell the vehicles. Own the operating layer."
          copy="A premium dashboard preview for fleet operators: bookings, route oversight, charging windows, service alerts, and fleet utilization."
        />
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/50">{card.title}</div>
                      <div className="mt-2 text-3xl font-semibold text-white">{card.value}</div>
                    </div>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm text-white/55">{card.meta}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/50">Charging and service timeline</div>
                <div className="mt-1 text-xl font-semibold text-white">Smart fleet scheduling panel</div>
              </div>
              <Button variant="outline">Live preview</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
