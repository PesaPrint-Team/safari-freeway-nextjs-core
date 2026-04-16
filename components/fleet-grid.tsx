'use client';

import Image from 'next/image';
import { Bus, Factory, Snowflake, Truck, Users } from 'lucide-react';
import { FLEET } from '@/lib/company';
import { Button, Card, CardContent } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

const icons = [Bus, Users, Truck, Factory, Snowflake, Users] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FleetGrid() {
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Fleet"
        title="A commercial electric lineup that covers your routes end to end."
        copy="Premium shuttle vehicles, cargo vans, refrigerated trucks, and configurable platforms designed to help transport companies electrify without compromise."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {FLEET.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={item.name} className="overflow-hidden shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-black/30">
              <div className="relative h-52 overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100b09] via-[#100b09]/20 to-transparent" />
              </div>
              <CardContent>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-[var(--sand)]">{item.type}</div>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.name}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white/5">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-[var(--line)] bg-black/20 p-3">
                    <div className="text-xs text-white/40">Range</div>
                    <div className="mt-1 text-sm font-semibold text-white">{item.range}</div>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-black/20 p-3">
                    <div className="text-xs text-white/40">Battery</div>
                    <div className="mt-1 text-sm font-semibold text-white">{item.battery}</div>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-black/20 p-3">
                    <div className="text-xs text-white/40">Charge</div>
                    <div className="mt-1 text-sm font-semibold text-white">{item.fastCharge}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/60">{item.useCase}</p>
                <Button variant="outline" className="mt-6 w-full" onClick={() => scrollToId('book-demo')}>
                  Configure this fleet
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
