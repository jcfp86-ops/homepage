# Fernandez Consulting

Website for Fernandez Consulting — Global SaMD Program Direction for Class II/III
Software as a Medical Device.

**Next.js 16** (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Development

```bash
npm install
npm run dev
```

Runs at http://localhost:3000

```bash
npm run build    # production build
npm run lint     # eslint
```

## Content

All site copy lives in a single file:

```
src/content/site.ts
```

Pages read from it, so wording changes require no component edits.

## Structure

```
src/app/              Routes
  page.tsx              /
  program-direction/    /program-direction
  approach/             /approach
  leadership/           /leadership
  contact/              /contact
  privacy/              /privacy
  opengraph-image.tsx   Generated social preview card
  robots.ts, sitemap.ts SEO
src/components/       Header, footer, logo, shared UI primitives
src/content/site.ts   All copy
```

## Environment

The contact form sends through [Resend](https://resend.com). Set these in the
deployment environment:

| Variable         | Purpose                         |
| ---------------- | ------------------------------- |
| `RESEND_API_KEY` | Resend API key                  |
| `CONTACT_EMAIL`  | Mailbox that receives enquiries |

Without `RESEND_API_KEY` the form validates input and directs visitors to email
instead of failing silently.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a build.

A `Dockerfile` and `compose.yaml` are included for self-hosting, using Next.js
standalone output and a non-root runtime user.

## License

© Fernandez Consulting. All rights reserved.
