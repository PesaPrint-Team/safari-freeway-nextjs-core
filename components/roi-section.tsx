'use client';

import { useMemo, useState } from 'react';
import { LineChart } from 'lucide-react';
import { Input, Card, CardContent } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

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

  return (
    <section id="roi" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="ROI"
            title="Show the finance team the delta."
            copy="A clean executive-style savings model for evaluating diesel-to-electric transition potential."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <label className="text-sm text-white/55">Fleet size</label>
              <Input type="number" value={fleetSize} onChange={(e) => setFleetSize(Number(e.target.value) || 0)} className="mt-3" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <label className="text-sm text-white/55">Monthly fuel per vehicle</label>
              <Input type="number" value={monthlyFuel} onChange={(e) => setMonthlyFuel(Number(e.target.value) || 0)} className="mt-3" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <label className="text-sm text-white/55">Monthly maintenance per vehicle</label>
              <Input type="number" value={monthlyMaintenance} onChange={(e) => setMonthlyMaintenance(Number(e.target.value) || 0)} className="mt-3" />
            </div>
          </div>
        </div>
        <Card className="bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/50">Projected annual savings</div>
                <div className="mt-2 text-4xl font-semibold text-white">KES {results.yearlySavings.toLocaleString()}</div>
              </div>
              <LineChart className="h-10 w-10 text-white/75" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
