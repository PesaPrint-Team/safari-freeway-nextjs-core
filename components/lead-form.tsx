'use client';

import { useState } from 'react';
import { buildMailtoUrl, buildWhatsAppUrl } from '@/lib/actions';
import { trackEvent } from '@/lib/analytics';
import { COMPANY } from '@/lib/company';
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
      `${COMPANY.legalName} Commercial Proposal Request`,
      `Hello ${COMPANY.brand},\n\nI am interested in ${COMPANY.vehicleBrand} vehicles.\n\nCompany: ${form.company}\nContact: ${form.person}\nEmail: ${form.email}\nPhone: ${form.phone}\nFleet size: ${form.fleetSize}\nRoute: ${form.route}\nNotes: ${form.notes}`
    );
  };

  const whatsappLead = () => {
    trackEvent('lead_whatsapp_submit', { fleetSize: form.fleetSize || 'unknown' });
    window.open(
      buildWhatsAppUrl(
        `Hello ${COMPANY.brand}. I am interested in ${COMPANY.vehicleBrand} vehicles. Company: ${form.company}. Contact: ${form.person}. Email: ${form.email}. Phone: ${form.phone}. Fleet size: ${form.fleetSize}. Route: ${form.route}. Notes: ${form.notes}`
      ),
      '_blank'
    );
  };

  return (
    <section id="book-demo" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Card className="bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <div className="text-sm font-medium text-white">Request a commercial proposal</div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              Share a few operating details and {COMPANY.legalName} can tailor pricing, fleet sizing, and route recommendations for your {COMPANY.vehicleBrand} requirements.
            </p>
          </div>
          <div>
            <label htmlFor="lead-company" className="text-sm text-white/65">Company name</label>
            <Input id="lead-company" placeholder="Safari Shuttle Ltd" value={form.company} onChange={(e) => update('company', e.target.value)} className="mt-3" />
          </div>
          <div>
            <label htmlFor="lead-person" className="text-sm text-white/65">Contact person</label>
            <Input id="lead-person" placeholder="Jane Wanjiku" value={form.person} onChange={(e) => update('person', e.target.value)} className="mt-3" />
          </div>
          <div>
            <label htmlFor="lead-email" className="text-sm text-white/65">Work email</label>
            <Input id="lead-email" type="email" placeholder="fleet@safarishuttle.co.ke" value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-3" />
          </div>
          <div>
            <label htmlFor="lead-phone" className="text-sm text-white/65">Phone number</label>
            <Input id="lead-phone" type="tel" placeholder="+254 700 000 000" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="mt-3" />
          </div>
          <div>
            <label htmlFor="lead-fleet-size" className="text-sm text-white/65">Estimated fleet size</label>
            <Input id="lead-fleet-size" placeholder="25 vehicles" value={form.fleetSize} onChange={(e) => update('fleetSize', e.target.value)} className="mt-3" />
          </div>
          <div>
            <label htmlFor="lead-route" className="text-sm text-white/65">Primary operating city or route</label>
            <Input id="lead-route" placeholder="Nairobi CBD to JKIA" value={form.route} onChange={(e) => update('route', e.target.value)} className="mt-3" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="lead-notes" className="text-sm text-white/65">Fleet goals and operating notes</label>
            <Textarea id="lead-notes" placeholder="Tell us about your routes, payload, passenger volume, or fleet goals" value={form.notes} onChange={(e) => update('notes', e.target.value)} className="mt-3" />
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
