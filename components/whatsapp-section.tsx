'use client';

import { COMPANY } from '@/lib/company';
import { buildWhatsAppUrl } from '@/lib/actions';
import { Button } from '@/components/ui';

export function WhatsappSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Instant Lead Funnel</div>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Capture serious buyers on WhatsApp in one tap.</h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/60">
              A direct WhatsApp CTA for fleet buyers who want immediate pricing, delivery timelines, financing options, or route-fit advice.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => window.open(buildWhatsAppUrl('Hello Safari Freeway. I need pricing and availability.'), '_blank')}>Chat on WhatsApp</Button>
            <Button variant="outline" onClick={() => (window.location.href = `tel:${COMPANY.phoneIntl}`)}>Call Sales Desk</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
