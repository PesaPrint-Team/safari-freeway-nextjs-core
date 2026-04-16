import { Bus, LineChart, Snowflake, Truck } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { Card, CardContent } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

const items = [
  {
    title: 'Staff & shuttle transport',
    copy: 'Replace diesel-heavy employee, hotel, airport, and institutional routes with predictable electric fleet economics.',
    icon: Bus
  },
  {
    title: 'Urban cargo & logistics',
    copy: 'Deploy electric vans and light trucks for parcel, FMCG, and B2B distribution while reducing fuel exposure.',
    icon: Truck
  },
  {
    title: 'Cold-chain distribution',
    copy: 'Move food, pharma, and temperature-sensitive cargo in electric reefer platforms with fleet-grade control.',
    icon: Snowflake
  },
  {
    title: 'Fleet digitization',
    copy: 'Operate bookings, dispatch, energy planning, and maintenance visibility through one executive control layer.',
    icon: LineChart
  }
] as const;

export function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Solutions"
        title="Built for operators, not just drivers."
        copy={`From hotel shuttles to logistics companies and transport contractors, ${COMPANY.legalName} supports commercial uptime, route economics, and executive-level fleet visibility across the ${COMPANY.vehicleBrand} range.`}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-black/30">
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.copy}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
