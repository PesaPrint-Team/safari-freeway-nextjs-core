'use client';

import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/actions';
import { NAV_ITEMS } from '@/lib/company';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium tracking-[0.35em] text-white/60">SAFARI FREEWAY</div>
            <div className="text-xs text-white/40">The Road Ahead is Electric</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(([label, id]) => (
            <button key={id} onClick={() => scrollToId(id)} className="text-sm text-white/75 transition hover:text-white">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            onClick={() => {
              trackEvent('cta_whatsapp_nav');
              window.open(buildWhatsAppUrl('Hello Safari Freeway. I would like pricing and availability.'), '_blank');
            }}
          >
            WhatsApp
          </Button>
          <Button onClick={() => scrollToId('book-demo')}>Book Fleet Demo</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map(([label, id]) => (
              <button key={id} className="text-left text-sm text-white/75" onClick={() => { setOpen(false); scrollToId(id); }}>
                {label}
              </button>
            ))}
            <Button onClick={() => { setOpen(false); scrollToId('book-demo'); }}>Book Fleet Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
