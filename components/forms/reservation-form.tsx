'use client';

import { useMemo, useState } from 'react';
import { buildLeadPayload, validateRequired } from '@/lib/leads';
import { Button, Input, Textarea } from '@/components/ui';

type BuyerType = 'consumer' | 'fleet' | 'partner';

const audiencePaths: Record<BuyerType, { title: string; body: string; cta: string }> = {
  consumer: {
    title: 'For Consumer Buyers',
    body: 'Reserve early access, track launch updates, and position yourself for first-drive opportunities in your market.',
    cta: 'Reserve as a Buyer',
  },
  fleet: {
    title: 'For Fleets & Institutions',
    body: 'Capture commercial demand, begin deployment planning, and open a serious conversation around total cost of ownership.',
    cta: 'Request Fleet Access',
  },
  partner: {
    title: 'For Infrastructure & Strategic Partners',
    body: 'Explore charging partnerships, destination charging rollouts, energy collaborations, and distribution pathways.',
    cta: 'Partner With Safari Freeway',
  },
};

export function ReservationForm() {
  const [buyerType, setBuyerType] = useState<BuyerType>('consumer');
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    model: '',
    location: '',
    timeline: '',
    buyerKind: '',
    notes: '',
  });

  const progress = useMemo(() => (step / 3) * 100, [step]);

  async function handleSubmit() {
    const required = ['fullName', 'email', 'phone', 'model', 'location'];
    if (!validateRequired(form, required)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    const payload = buildLeadPayload(buyerType, form);
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? 'success' : 'error');
  }

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div
      id="reserve"
      className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
    >
      {/* Buyer type tabs */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {(['consumer', 'fleet', 'partner'] as BuyerType[]).map((key) => (
            <button
              key={key}
              onClick={() => setBuyerType(key)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-200 ${
                buyerType === key
                  ? 'bg-[var(--brand)] text-white shadow-[0_8px_24px_rgba(207,52,57,0.35)]'
                  : 'border border-[var(--line)] bg-white/5 text-white/65 hover:bg-white/10'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="hidden text-right text-xs uppercase tracking-[0.2em] text-white/40 sm:block">
          Step {step} of 3
        </div>
      </div>

      {/* Animated step progress bar */}
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[var(--brand)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-5 text-xs uppercase tracking-[0.3em] text-white/45">Priority Access</div>
      <h2 className="mt-3 text-2xl font-semibold text-[var(--text)]">
        {audiencePaths[buyerType].title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
        {audiencePaths[buyerType].body}
      </p>

      {step === 1 && (
        <div className="mt-6 grid gap-4">
          <Input
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            placeholder="Full name"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="Email address"
              type="email"
            />
            <Input
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              placeholder="Phone / WhatsApp"
              type="tel"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setStep(2)}>Continue</Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              value={form.model}
              onChange={(e) => set('model', e.target.value)}
              placeholder="Interested model"
            />
            <Input
              value={form.location}
              onChange={(e) => set('location', e.target.value)}
              placeholder="City / Country"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              value={form.timeline}
              onChange={(e) => set('timeline', e.target.value)}
              placeholder="Purchase timeline"
            />
            <Input
              value={form.buyerKind}
              onChange={(e) => set('buyerKind', e.target.value)}
              placeholder="Buyer type detail"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button onClick={() => setStep(3)}>Continue</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-6 grid gap-4">
          <Textarea
            value={form.notes}
            onChange={(e) => set('notes', e.target.value)}
            placeholder="Anything we should know?"
          />
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : audiencePaths[buyerType].cta}
            </Button>
          </div>
          {status === 'error' && (
            <p className="text-xs text-red-400">Please complete the required fields first.</p>
          )}
          {status === 'success' && (
            <p className="text-xs text-emerald-400">
              Your request has been received. We will be in touch shortly.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
