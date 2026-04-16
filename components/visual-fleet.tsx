import Image from 'next/image';
import { COMPANY, VISUALS } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';

export function VisualFleet() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Visual Fleet"
        title="Electric vehicles built for real transport work."
        copy={`${COMPANY.vehicleBrand} brings together shuttle, cargo, and commercial platforms designed for operators who need reliability, efficiency, and lower running costs.`}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {VISUALS.map((item) => (
          <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20">
            <div className="relative h-64 overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-lg font-semibold text-white">{item.title}</div>
                <div className="mt-1 text-sm text-white/70">{item.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
