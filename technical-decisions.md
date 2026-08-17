# technical-decisions.md

*Living document. Updated by whoever is building the site whenever a significant technical choice is made. Source of truth for the web-developer skill.*

## Stack — LOCKED

Framework: Next.js 15 (App Router), TypeScript throughout.

Styling: Tailwind CSS v4, configured via CSS `@theme` tokens in `globals.css` (v4 replaces tailwind.config.ts with CSS-based configuration).

Components: shadcn/ui as accessible base, customized via Tailwind. (To be initialized in Sprint 3 when component needs are clearer.)

Hosting: Vercel, connected via GitHub for auto-deploy on push.

## Forms — REMOVED

No contact form. Contact page uses direct methods only: WhatsApp, phone, email. Client preference — keeps the interaction personal and low-friction, consistent with the brand's "the next step is a conversation" messaging.

## Analytics — LOCKED

Provider: **Plausible**.

Reason: privacy-friendly, no cookie-consent banner required, simple dashboard. Fits a trust-driven professional-services brand and avoids GDPR/consent friction for EU/Israeli visitors.

## Site structure — LOCKED (per product-brain.md)

Home / About / Services / Contact. No blog, no separate FAQ route at launch.

## Bilingual routing — DECIDED (Sprint 1)

**Approach:** `next-intl` v4 with `[locale]` path segments in App Router.

- Hebrew is the default locale. Root `/` redirects to `/he`.
- Routes: `/he`, `/he/about`, `/en`, `/en/about`, etc.
- Middleware handles locale detection and redirect.
- Each locale gets `dir="rtl"` or `dir="ltr"` and `lang` attribute on `<html>`.
- RTL/LTR layout handled via CSS logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, etc.) per design-rules.md §9.
- Dictionary files in `content/dictionaries/{locale}.ts` — TypeScript objects, not JSON, for type safety.

**Why next-intl over manual approach:** Even for a 4-page site, next-intl provides locale-aware middleware, `useTranslations` hook, and `generateStaticParams` integration out of the box. The alternative (manual `[locale]` folder + raw dictionary imports) saves one dependency but requires reimplementing routing logic. next-intl is lightweight (~15KB) and well-maintained — not over-engineering for this use case.

**Why not subdomains or query params:** Path segments are the simplest, most SEO-friendly approach. No DNS configuration needed. Google indexes each locale cleanly.

## Tailwind v4 — DECIDED (Sprint 1)

`create-next-app` now installs Tailwind v4 by default. Key differences from v3:
- Design tokens defined via `@theme { }` in CSS, not `tailwind.config.ts`
- No separate config file needed
- All YourwAI design tokens (colors, typography, spacing, radii, shadows, breakpoints) are in `app/globals.css`

## Domain — TBD

Not yet chosen/purchased. Needed before Sprint 6 (deployment) but not before.

## Content source — note, not a decision

There is no separate polished-copy document. Page copy is drafted from product-brain.md's messaging pillars, positioning statements, and raw client quotes directly during build. Content goes through dictionaries and component props — never hardcoded in components.

## Open questions

- Domain name/registrar
- Whether testimonials exist yet for TestimonialsSection (per product-brain.md client-voice section — confirm before Sprint 3)
