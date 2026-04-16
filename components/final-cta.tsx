'use client';

import { buildMailtoUrl } from '@/lib/actions';
import { COMPANY } from '@/lib/company';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(207,52,57,0.18),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--sand)]">{COMPANY.vehicleBrand}</div>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The premium electric fleet partner for the next decade of transport.</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/60">
              {COMPANY.legalName} delivers the {COMPANY.vehicleBrand} range for businesses looking to modernize transport, reduce fuel exposure, and grow with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button onClick={() => scrollToId('book-demo')}>Book Executive Demo</Button>
            <Button variant="outline" onClick={() => { window.location.href = buildMailtoUrl(`${COMPANY.brand} Brochure Request`, `Hello ${COMPANY.brand}, please share your latest ${COMPANY.vehicleBrand} fleet brochure.`); }}>
              Download Fleet Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
