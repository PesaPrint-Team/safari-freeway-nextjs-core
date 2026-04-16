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
bun install
bun run dev
```

This project uses Bun as the package manager. The Bun scripts launch Next.js through a small Node wrapper so the app can reliably use the WASM SWC fallback on this setup.

If you want a fresh local install:

```bash
rm -rf node_modules
bun install
bun run dev
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
