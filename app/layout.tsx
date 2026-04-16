import type { ReactNode } from 'react';
import './globals.css';
import { metadata, organizationJsonLd } from '@/lib/seo';

export { metadata };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
