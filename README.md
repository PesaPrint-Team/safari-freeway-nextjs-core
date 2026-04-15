# Safari Freeway Next.js Core Package

This is a deployment-ready Next.js App Router starter for the Safari Freeway commercial website.

## Included
- Next.js 15 App Router structure
- Tailwind CSS v4 setup
- Reusable components
- Lead capture by email and WhatsApp
- SEO metadata and JSON-LD organization schema
- Analytics stub for GA4 / Meta Pixel / LinkedIn replacement

## Quick start
```bash
npm install
npm run dev
```

## Replace before production
- Unsplash placeholder images with final Safari Freeway brand photography
- `mailto:` and WhatsApp-only lead flow with API route / CRM webhook
- analytics stub in `lib/analytics.ts`
- company website URL if final domain differs

## Suggested next integrations
- Vercel deployment
- Resend / Formspree / HubSpot form pipeline
- Google Analytics 4
- Meta Pixel
- LinkedIn Insight Tag
