'use client';

import { buildMailtoUrl } from '@/lib/actions';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Elite conversion layer</div>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The premium electric fleet partner for the next decade of transport.</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/60">
              Safari Freeway is positioned to win transport companies that want lower operating costs, stronger brand optics, and future-proof fleet economics.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button onClick={() => scrollToId('book-demo')}>Book Executive Demo</Button>
            <Button variant="outline" onClick={() => { window.location.href = buildMailtoUrl('Safari Freeway Brochure Request', 'Hello Safari Freeway, please share your latest fleet brochure.'); }}>
              Download Fleet Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
