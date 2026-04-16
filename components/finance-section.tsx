'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, Input } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

function formatKes(value: number) {
  return `KES ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export function FinanceSection() {
  const [vehicleCost, setVehicleCost] = useState(7200000);
  const [depositPct, setDepositPct] = useState(20);
  const [termMonths, setTermMonths] = useState(48);
  const [annualRate, setAnnualRate] = useState(14);

  const finance = useMemo(() => {
    const deposit = vehicleCost * (depositPct / 100);
    const principal = Math.max(vehicleCost - deposit, 0);
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayment = monthlyRate === 0 ? principal / Math.max(termMonths, 1) : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
    const totalRepayment = monthlyPayment * termMonths + deposit;
    return { deposit, principal, monthlyPayment, totalRepayment };
  }, [vehicleCost, depositPct, termMonths, annualRate]);

  return (
    <section id="finance" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Finance"
          title="Finance snapshot"
          copy="A simple estimate for structuring a single vehicle purchase."
        />

        <Card className="bg-gradient-to-b from-white/8 to-white/[0.03] shadow-2xl">
          <CardContent className="space-y-6 lg:p-8">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <label htmlFor="finance-vehicle-cost" className="text-sm font-medium text-white/80">
                  Vehicle price
                </label>
                <div className="relative mt-3">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40">KES</span>
                  <Input
                    id="finance-vehicle-cost"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={vehicleCost}
                    onChange={(e) => setVehicleCost(Number(e.target.value) || 0)}
                    className="pl-14"
                  />
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <label htmlFor="finance-deposit" className="text-sm font-medium text-white/80">
                  Deposit %
                </label>
                <div className="relative mt-3">
                  <Input
                    id="finance-deposit"
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={depositPct}
                    onChange={(e) => setDepositPct(Number(e.target.value) || 0)}
                    className="pr-12"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/40">%</span>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <label htmlFor="finance-term" className="text-sm font-medium text-white/80">
                  Term
                </label>
                <div className="relative mt-3">
                  <Input
                    id="finance-term"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value) || 1)}
                    className="pr-24"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/40">months</span>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
                <label htmlFor="finance-interest" className="text-sm font-medium text-white/80">
                  Annual rate
                </label>
                <div className="relative mt-3">
                  <Input
                    id="finance-interest"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value) || 0)}
                    className="pr-12"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-white/40">%</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 sm:p-6">
              <div className="text-xs uppercase tracking-[0.24em] text-white/40">Estimated monthly repayment</div>
              <div className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{formatKes(finance.monthlyPayment)}</div>
              <div className="mt-3 text-sm text-white/55">
                {depositPct}% deposit over {termMonths} months at {annualRate}% p.a.
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm text-white/50">Deposit</div>
                  <div className="mt-2 text-xl font-semibold text-white">{formatKes(finance.deposit)}</div>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm text-white/50">Financed</div>
                  <div className="mt-2 text-xl font-semibold text-white">{formatKes(finance.principal)}</div>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-sm text-white/50">Total repayment</div>
                  <div className="mt-2 text-xl font-semibold text-white">{formatKes(finance.totalRepayment)}</div>
                </div>
              </div>
            </div>

            <div className="text-sm text-white/50">Indicative only. Final lender terms may vary.</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
