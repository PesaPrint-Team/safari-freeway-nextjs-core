import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';

const socialImage = '/brand/social-preview.svg';

export const metadata: Metadata = {
  title: 'Auto Freeway | Safari Freeway Electric Fleet Solutions',
  description:
    'Auto Freeway Limited helps transport companies deploy Safari Freeway electric shuttle, cargo, and commercial fleets with ROI tools, booking flows, and executive-grade fleet visibility.',
  metadataBase: new URL(COMPANY.website),
  openGraph: {
    title: 'Auto Freeway | Safari Freeway Electric Fleet Solutions',
    description:
      'Premium Safari Freeway electric fleet platform for transport operators, logistics companies, hotels, and enterprise buyers.',
    url: COMPANY.website,
    siteName: COMPANY.brand,
    type: 'website',
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Safari Freeway electric fleet social preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Freeway | Safari Freeway Electric Fleet Solutions',
    description:
      'Electric shuttle, cargo, and commercial fleet solutions for transport operators across East Africa.',
    images: [socialImage]
  }
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  brand: COMPANY.vehicleBrand,
  url: COMPANY.website,
  email: COMPANY.email,
  telephone: COMPANY.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE'
  },
  areaServed: 'East Africa',
  description: 'Safari Freeway electric commercial vehicles and fleet solutions for transport companies.'
};
