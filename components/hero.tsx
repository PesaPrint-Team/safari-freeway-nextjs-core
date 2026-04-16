'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Wallet } from 'lucide-react';
import { COMPANY, STATS } from '@/lib/company';
import { Button } from '@/components/ui';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,52,57,0.22),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(241,223,207,0.16),transparent_24%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.06] px-4 py-2 text-sm text-[var(--sand)]">
            Electric commercial vehicles for East Africa
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Electric fleets that work for real transport businesses.
            <span className="block text-[var(--sand)]">{COMPANY.vehicleBrand} vehicles by {COMPANY.brand}.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {COMPANY.legalName} supplies {COMPANY.vehicleBrand} electric shuttle, cargo, and commercial platforms for operators who need lower running costs, stronger uptime, and vehicles built for local conditions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => scrollToId('book-demo')}>
              Request Proposal <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollToId('fleet')}>Explore Fleet</Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label} className="rounded-[1.6rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 backdrop-blur-sm">
                <div className="text-lg font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/45">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,52,57,0.18),transparent_36%)]" />
            <div className="relative">
              <div className="relative h-[340px] overflow-hidden rounded-[2rem]">
                <Image src="/brand/cover-fleet.jpg" alt={`${COMPANY.vehicleBrand} fleet cover`} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0908] via-[#0d0908]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-[0.32em] text-[var(--sand)]">Electric fleet lineup</div>
                  <div className="mt-2 max-w-md text-3xl font-semibold text-white">Passenger and cargo platforms designed for modern transport operators.</div>
                </div>
              </div>
            </div>
            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Lower running costs</div>
                    <div className="mt-1 text-3xl font-semibold text-white">-58%</div>
                  </div>
                  <Wallet className="h-9 w-9 text-[var(--sand)]" />
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/50">Support readiness</div>
                    <div className="mt-1 text-3xl font-semibold text-white">98.2%</div>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-[var(--sand)]" />
                </div>
              </div>
              <div className="rounded-3xl border border-[var(--line)] bg-black/20 p-5 sm:col-span-2">
                <div className="text-sm text-white/50">Built for transport operators</div>
                <div className="mt-1 text-2xl font-semibold text-white">Fleet performance. Route fit. Commercial confidence.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
