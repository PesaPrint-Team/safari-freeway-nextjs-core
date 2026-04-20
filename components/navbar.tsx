'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/actions';
import { COMPANY, NAV_ITEMS } from '@/lib/company';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#120d0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/brand/auto-freeway.png"
            alt={`${COMPANY.brand} logo mark`}
            width={320}
            height={272}
            className="h-11 w-auto sm:h-14 lg:h-16"
            priority
          />
          <div className="flex flex-col justify-center gap-1 leading-none">
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-white/55 sm:text-[0.7rem] sm:tracking-[0.35em]">
              {COMPANY.brand}
            </div>
            <div className="text-2xl font-semibold tracking-[0.2em] text-[var(--sand)] sm:text-3xl lg:text-4xl">
              SAFARI
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(([label, id]) => (
            <button key={id} onClick={() => scrollToId(id)} className="text-sm text-white/75 transition hover:text-[var(--sand)]">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            onClick={() => {
              trackEvent('cta_whatsapp_nav');
              window.open(buildWhatsAppUrl(`Hello ${COMPANY.brand}. I would like pricing and availability for ${COMPANY.vehicleBrand} vehicles.`), '_blank');
            }}
          >
            WhatsApp
          </Button>
          <Button variant="outline" onClick={() => scrollToId('test-drive')}>
            Book Test Drive
          </Button>
          <Button glow onClick={() => scrollToId('book-demo')}>Book Fleet Demo</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map(([label, id]) => (
              <button key={id} className="text-left text-sm text-white/75" onClick={() => { setOpen(false); scrollToId(id); }}>
                {label}
              </button>
            ))}
            <Button variant="outline" onClick={() => { setOpen(false); scrollToId('test-drive'); }}>Book Test Drive</Button>
            <Button glow onClick={() => { setOpen(false); scrollToId('book-demo'); }}>Book Fleet Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
