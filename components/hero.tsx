'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Wallet } from 'lucide-react';
import { COMPANY, STATS } from '@/lib/company';
import { Button } from '@/components/ui';
import { CountUp, Typewriter } from '@/components/animated';
import { ImageLightbox } from '@/components/image-lightbox';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  const [fleetCoverOpen, setFleetCoverOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,52,57,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(241,223,207,0.16),transparent_24%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.06] px-4 py-2 text-xs text-[var(--sand)] sm:text-sm">
            Electric commercial vehicles for East Africa
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:mt-8 sm:text-6xl lg:text-7xl">
            <Typewriter text="Electric fleets that work for real transport businesses." speedMs={28} />
          </h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-white/72"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            {COMPANY.legalName} supplies {COMPANY.vehicleBrand} electric shuttles, cargo vans, and commercial trucks to Kenyan operators who want lower running costs and stronger uptime.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.5 }}
          >
            <Button glow onClick={() => scrollToId('book-demo')}>
              Request Proposal <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollToId('fleet')}>Explore Fleet</Button>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + index * 0.1, duration: 0.5 }}
                className="rounded-[1.6rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 backdrop-blur-sm"
              >
                <div className="text-lg font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/45">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,52,57,0.18),transparent_36%)]" />
            <div className="relative">
              <button
                type="button"
                className="relative block h-[260px] w-full cursor-zoom-in overflow-hidden rounded-[2rem] border-0 bg-transparent p-0 text-left outline-none transition sm:h-[340px] focus-visible:ring-2 focus-visible:ring-[rgba(207,52,57,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0908]"
                onClick={() => setFleetCoverOpen(true)}
                aria-label={`View ${COMPANY.vehicleBrand} fleet cover image larger`}
              >
                <Image src="/brand/cover-fleet.jpg" alt="" fill className="object-cover" priority aria-hidden />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0908] via-[#0d0908]/15 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--sand)] sm:text-xs sm:tracking-[0.32em]">Electric fleet lineup</div>
                  <div className="mt-2 max-w-md text-xl font-semibold text-white sm:text-3xl">Passenger and cargo vehicles for transport operators.</div>
                </div>
              </button>
            </div>
            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Lower running costs</div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                      <CountUp value={58} prefix="-" suffix="%" duration={2} />
                    </div>
                  </div>
                  <Wallet className="h-9 w-9 text-[var(--sand)]" />
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Support readiness</div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                      <CountUp value={98.2} decimals={1} suffix="%" duration={2} />
                    </div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-[var(--sand)]" />
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5 sm:col-span-2">
                <div className="text-sm text-white/50">For transport operators</div>
                <div className="mt-1 text-2xl font-semibold text-white">Range, payload, and service support you can plan around.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ImageLightbox
        open={fleetCoverOpen}
        onClose={() => setFleetCoverOpen(false)}
        src="/brand/cover-fleet.jpg"
        alt={`${COMPANY.vehicleBrand} fleet cover`}
      />
    </section>
  );
}
