'use client';

import { useState } from 'react';
import { buildMailtoUrl, buildWhatsAppUrl } from '@/lib/actions';
import { trackEvent } from '@/lib/analytics';
import { Button, Card, CardContent, Input, Textarea } from '@/components/ui';

export function LeadForm() {
  const [form, setForm] = useState({
    company: '',
    person: '',
    email: '',
    phone: '',
    fleetSize: '',
    route: '',
    notes: ''
  });

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const emailLead = () => {
    trackEvent('lead_email_submit', { fleetSize: form.fleetSize || 'unknown' });
    window.location.href = buildMailtoUrl(
      'Safari Freeway Commercial Proposal Request',
      `Hello Safari Freeway,\n\nCompany: ${form.company}\nContact: ${form.person}\nEmail: ${form.email}\nPhone: ${form.phone}\nFleet size: ${form.fleetSize}\nRoute: ${form.route}\nNotes: ${form.notes}`
    );
  };

  const whatsappLead = () => {
    trackEvent('lead_whatsapp_submit', { fleetSize: form.fleetSize || 'unknown' });
    window.open(
      buildWhatsAppUrl(
        `Hello Safari Freeway. Company: ${form.company}. Contact: ${form.person}. Email: ${form.email}. Phone: ${form.phone}. Fleet size: ${form.fleetSize}. Route: ${form.route}. Notes: ${form.notes}`
      ),
      '_blank'
    );
  };

  return (
    <section id="book-demo" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Card className="bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Company name" value={form.company} onChange={(e) => update('company', e.target.value)} />
          <Input placeholder="Contact person" value={form.person} onChange={(e) => update('person', e.target.value)} />
          <Input placeholder="Work email" value={form.email} onChange={(e) => update('email', e.target.value)} />
          <Input placeholder="Phone number" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          <Input placeholder="Estimated fleet size" value={form.fleetSize} onChange={(e) => update('fleetSize', e.target.value)} />
          <Input placeholder="Primary operating city / route" value={form.route} onChange={(e) => update('route', e.target.value)} />
          <div className="md:col-span-2">
            <Textarea placeholder="Tell us about your routes, payload, passenger volume, or fleet goals" value={form.notes} onChange={(e) => update('notes', e.target.value)} />
          </div>
          <div className="grid gap-3 md:col-span-2 sm:grid-cols-2">
            <Button onClick={emailLead}>Request Commercial Proposal</Button>
            <Button variant="outline" onClick={whatsappLead}>Send to WhatsApp</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
