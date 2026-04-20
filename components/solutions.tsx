import { Bus, LineChart, Snowflake, Truck } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { Card, CardContent } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const items = [
  {
    title: 'Staff & shuttle transport',
    copy: 'Run employee buses, hotel shuttles, and airport transfers with lower fuel and maintenance costs.',
    icon: Bus
  },
  {
    title: 'Urban cargo & logistics',
    copy: 'Electric vans and light trucks for parcel delivery, FMCG, and B2B distribution.',
    icon: Truck
  },
  {
    title: 'Cold-chain distribution',
    copy: 'Move food, pharma, and temperature-sensitive cargo in electric refrigerated trucks.',
    icon: Snowflake
  },
  {
    title: 'Fleet digitization',
    copy: 'Track bookings, dispatch, charging, and maintenance from one dashboard.',
    icon: LineChart
  }
] as const;

export function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Solutions"
        title="Solutions for fleet operators."
        copy={`From hotel shuttles to logistics companies, ${COMPANY.vehicleBrand} vehicles cover the routes, schedules, and payloads Kenyan transport businesses actually run.`}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="h-full shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-black/30">
                <CardContent>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.copy}</p>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
