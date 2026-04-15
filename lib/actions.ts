import { COMPANY } from '@/lib/company';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
