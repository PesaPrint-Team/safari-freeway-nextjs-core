import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Safari Freeway | Electric Fleet Solutions for Transport Companies',
  description:
    'Safari Freeway helps transport companies deploy premium electric shuttle, cargo, and commercial fleets with ROI tools, booking flows, and executive-grade fleet visibility.',
  metadataBase: new URL(COMPANY.website),
  openGraph: {
    title: 'Safari Freeway | Electric Fleet Solutions',
    description:
      'Premium electric fleet platform for transport operators, logistics companies, hotels, and enterprise buyers.',
    url: COMPANY.website,
    siteName: COMPANY.brand,
    type: 'website'
  }
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  brand: COMPANY.brand,
  url: COMPANY.website,
  email: COMPANY.email,
  telephone: COMPANY.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE'
  },
  areaServed: 'East Africa',
  description: 'Electric commercial vehicles and fleet solutions for transport companies.'
};
