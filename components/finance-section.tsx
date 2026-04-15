'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, Input } from '@/components/ui';
import { SectionHeading } from '@/components/section-heading';

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
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Finance"
          title="Make the buying decision easier for fleet operators."
          copy="This finance layer helps convert serious transport operators by showing deposit assumptions, monthly payment ranges, and ownership visibility."
        />
        <Card className="bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
          <CardContent className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <Input type="number" value={vehicleCost} onChange={(e) => setVehicleCost(Number(e.target.value) || 0)} placeholder="Vehicle price" />
              <Input type="number" value={depositPct} onChange={(e) => setDepositPct(Number(e.target.value) || 0)} placeholder="Deposit %" />
              <Input type="number" value={termMonths} onChange={(e) => setTermMonths(Number(e.target.value) || 1)} placeholder="Term months" />
              <Input type="number" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value) || 0)} placeholder="Annual interest %" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Deposit', finance.deposit],
                ['Finance principal', finance.principal],
                ['Estimated monthly', finance.monthlyPayment],
                ['Estimated total repayment', finance.totalRepayment]
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm text-white/50">{label}</div>
                  <div className="mt-2 text-2xl font-semibold text-white">KES {Number(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
