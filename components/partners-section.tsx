import { Factory, Globe2, Handshake, Landmark, TrendingUp } from 'lucide-react';
import { COMPANY } from '@/lib/company';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/animated';

const partners = [
  {
    name: 'GOTION High-Tech',
    role: 'LFP battery supplier',
    blurb: 'LFP battery packs used in Safari Chui and Safari Duma.',
  },
  {
    name: 'EVE Energy',
    role: 'LFP battery supplier',
    blurb: '81 kWh LFP packs in Safari Ndovu, Mamba, Nyati, and Kiboko. 340 km of real-world range.',
  },
  {
    name: 'Global OEM alliances',
    role: 'Manufacturing partners',
    blurb: 'Direct OEM agreements for supply, pricing, and authentic parts.',
  },
  {
    name: 'Local CKD assembly',
    role: 'Kenyan manufacturing',
    blurb: 'CKD kits assembled in Kenya. Lower import costs, local jobs, and vehicles tuned for local conditions.',
  },
] as const;

const pillars = [
  {
    icon: Globe2,
    title: 'East African focus',
    copy: 'We build commercial EVs for Kenyan roads, budgets, and operators. Not repackaged European fleet vehicles.',
  },
  {
    icon: Factory,
    title: 'Kenyan CKD assembly',
    copy: 'CKD assembly in Kenya reduces import costs, creates local jobs, and lets us tune each vehicle for the climate.',
  },
  {
    icon: Handshake,
    title: 'Dealer network expansion',
    copy: 'Rolling out Safari Freeway showrooms and service centers across Kenya\u2019s main urban and peri-urban hubs.',
  },
  {
    icon: TrendingUp,
    title: 'Investor-ready platform',
    copy: 'Nine vehicle platforms, tiered warranties, recurring fleet revenue, and a regional expansion roadmap.',
  },
] as const;

export function PartnersSection() {
  return (
    <section id="investors" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Investors & Partners"
        title="The partners behind the fleet."
        copy={`${COMPANY.legalName} works with global OEMs, top LFP battery suppliers, and Kenyan CKD assemblers to deliver every ${COMPANY.vehicleBrand} vehicle.`}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => (
          <Reveal key={partner.name} delay={(index % 4) * 0.08}>
            <div className="flex h-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
              <Landmark className="h-6 w-6 text-[var(--sand)]" />
              <div className="mt-5 text-xs uppercase tracking-[0.28em] text-[var(--sand)]">{partner.role}</div>
              <div className="mt-2 text-xl font-semibold text-white">{partner.name}</div>
              <p className="mt-3 text-sm leading-7 text-white/60">{partner.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={0.1 + (index % 2) * 0.1}>
              <div className="flex h-full items-start gap-5 rounded-[1.75rem] border border-[var(--line)] bg-black/20 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-6 w-6 text-[var(--sand)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{pillar.copy}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.35}>
        <div className="mt-10 rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(207,52,57,0.18),rgba(255,255,255,0.04))] p-6 text-sm leading-7 text-white/75 sm:p-8">
          <span className="font-semibold text-white">Investors, dealers, and charging partners:</span> we&apos;re expanding dealer coverage and welcoming new collaborations. Use the Priority Access form below to get in touch.
        </div>
      </Reveal>
    </section>
  );
}
