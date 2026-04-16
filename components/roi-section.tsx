'use client';

import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, Input } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

const FLEET_PRESETS = [10, 25, 50];

function formatKes(value: number) {
  return `KES ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function formatCompact(value: number) {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}

export function RoiSection() {
  const [fleetSize, setFleetSize] = useState(25);
  const [monthlyFuel, setMonthlyFuel] = useState(180000);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState(35000);

  const results = useMemo(() => {
    const dieselMonthly = fleetSize * (monthlyFuel + monthlyMaintenance);
    const electricMonthly = fleetSize * (monthlyFuel * 0.42 + monthlyMaintenance * 0.55);
    const monthlySavings = dieselMonthly - electricMonthly;
    const yearlySavings = monthlySavings * 12;
    return { dieselMonthly, electricMonthly, monthlySavings, yearlySavings };
  }, [fleetSize, monthlyFuel, monthlyMaintenance]);

  const timeline = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => {
        const month = index + 1;

        return {
          month: `M${month}`,
          diesel: results.dieselMonthly * month,
          electric: results.electricMonthly * month,
          savings: results.monthlySavings * month
        };
      }),
    [results.dieselMonthly, results.electricMonthly, results.monthlySavings]
  );

  const yearOne = timeline[timeline.length - 1] ?? { diesel: 0, electric: 0, savings: 0 };

  return (
    <section id="roi" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="ROI"
          title="See the operating cost gap clearly."
          copy="Use your fleet assumptions to compare diesel and electric running costs over the first year."
        />

        <Card className="bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
          <CardContent className="space-y-6 lg:p-8">
            <div className="grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                <label htmlFor="roi-fleet-size" className="text-sm font-medium text-white/80">
                  Fleet size
                </label>
                <Input id="roi-fleet-size" type="number" min={0} value={fleetSize} onChange={(e) => setFleetSize(Number(e.target.value) || 0)} className="mt-3" />
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                <label htmlFor="roi-fuel" className="text-sm font-medium text-white/80">
                  Monthly fuel per vehicle
                </label>
                <div className="relative mt-3">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40">KES</span>
                  <Input id="roi-fuel" type="number" min={0} value={monthlyFuel} onChange={(e) => setMonthlyFuel(Number(e.target.value) || 0)} className="pl-14" />
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
                <label htmlFor="roi-maintenance" className="text-sm font-medium text-white/80">
                  Monthly maintenance per vehicle
                </label>
                <div className="relative mt-3">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40">KES</span>
                  <Input id="roi-maintenance" type="number" min={0} value={monthlyMaintenance} onChange={(e) => setMonthlyMaintenance(Number(e.target.value) || 0)} className="pl-14" />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[1.6rem] border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Quick size</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {FLEET_PRESETS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFleetSize(value)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                        fleetSize === value
                          ? 'border-emerald-300/50 bg-emerald-300/15 text-emerald-200'
                          : 'border-white/10 bg-white/5 text-white/65 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,280px)]">
              <div className="rounded-[1.85rem] border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-sm text-white/50">12-month spend comparison</div>
                    <div className="mt-1 text-2xl font-semibold text-white">Diesel vs electric fleet cost</div>
                  </div>

                  <div className="hidden w-fit rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55 sm:block">
                    Hover a month for exact values
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-3 sm:p-5">
                  <div className="h-[280px] sm:h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={timeline} margin={{ top: 8, right: 4, left: -20, bottom: 0 }} barGap={6} barCategoryGap="18%">
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="3 6" vertical={false} />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 12 }} />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          width={44}
                          tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 12 }}
                          tickFormatter={(value: number) => formatCompact(value)}
                        />
                        <Tooltip
                          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                          contentStyle={{
                            background: '#0b0b0b',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '16px',
                            color: 'white'
                          }}
                          formatter={(value, name) => [formatKes(Number(value ?? 0)), name === 'diesel' ? 'Diesel' : 'Electric']}
                        />
                        <Legend wrapperStyle={{ paddingTop: 12, fontSize: 12 }} iconType="circle" />
                        <Bar dataKey="diesel" fill="rgba(255,255,255,0.82)" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="electric" fill="#34d399" radius={[10, 10, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/50">Diesel per month</div>
                    <div className="mt-2 text-xl font-semibold text-white">{formatKes(results.dieselMonthly)}</div>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-white/50">Electric per month</div>
                    <div className="mt-2 text-xl font-semibold text-white">{formatKes(results.electricMonthly)}</div>
                  </div>
                  <div className="rounded-[1.4rem] border border-emerald-300/20 bg-emerald-300/8 p-4">
                    <div className="text-sm text-white/55">Monthly gap</div>
                    <div className="mt-2 text-xl font-semibold text-white">{formatKes(results.monthlySavings)}</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.85rem] border border-emerald-300/20 bg-emerald-300/10 p-5">
                  <div className="text-sm text-white/55">Projected annual savings</div>
                  <div className="mt-2 text-4xl font-semibold text-white">{formatKes(results.yearlySavings)}</div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/50">Diesel after 12 months</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{formatKes(yearOne.diesel)}</div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-white/50">Electric after 12 months</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{formatKes(yearOne.electric)}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
