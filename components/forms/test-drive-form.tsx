'use client';

import { useState } from 'react';
import { buildLeadPayload, validateRequired } from '@/lib/leads';
import { Button, Input } from '@/components/ui';

export function TestDriveForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    model: '',
    city: '',
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit() {
    const required = ['fullName', 'email', 'phone', 'model'];
    if (!validateRequired(form, required)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    const payload = buildLeadPayload('test-drive', form);
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setStatus(response.ok ? 'success' : 'error');
  }

  return (
    <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7">
      <div className="text-xs uppercase tracking-[0.25em] text-white/45">Book a Test Drive</div>
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
            placeholder="Email"
            type="email"
          />
          <Input
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="Phone / WhatsApp"
            type="tel"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            value={form.model}
            onChange={(e) => set('model', e.target.value)}
            placeholder="Preferred model"
          />
          <Input
            value={form.city}
            onChange={(e) => set('city', e.target.value)}
            placeholder="Preferred city"
          />
        </div>
        <Button onClick={handleSubmit} disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting…' : 'Book My Test Drive'}
        </Button>
        {status === 'error' && (
          <p className="text-xs text-red-400">Please fill in your name, email, phone, and preferred model.</p>
        )}
        {status === 'success' && (
          <p className="text-xs text-emerald-400">Test-drive request received. We will contact you to confirm.</p>
        )}
      </div>
    </div>
  );
}
