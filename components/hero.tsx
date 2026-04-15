'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Wallet } from 'lucide-react';
import { STATS } from '@/lib/company';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            Premium electric fleets for transport companies
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Move more.
            <span className="block text-white/70">Spend less.</span>
            <span className="block">Electrify with confidence.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Safari Freeway helps transport operators reduce operating cost, increase trust, and modernize fleet operations with elite electric commercial vehicles built for East African realities.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => scrollToId('book-demo')}>
              Request Proposal <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollToId('fleet')}>Explore Fleet</Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Fleet energy cost</div>
                    <div className="mt-1 text-3xl font-semibold text-white">-58%</div>
                  </div>
                  <Wallet className="h-9 w-9 text-white/70" />
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Uptime status</div>
                    <div className="mt-1 text-3xl font-semibold text-white">98.2%</div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-white/70" />
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <div className="text-sm text-white/50">Executive fleet command</div>
                <div className="mt-1 text-2xl font-semibold text-white">Bookings. Routing. Charging. Service.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
