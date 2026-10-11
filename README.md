# Fernandez Consulting

[![CI](https://github.com/jcfp86-ops/homepage/actions/workflows/ci.yml/badge.svg)](https://github.com/jcfp86-ops/homepage/actions/workflows/ci.yml)

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

## Continuous integration

Two workflows run in GitHub Actions:

- **CI** (`ci.yml`) — on every push to `main`
- **PR Validation** (`pr-validation.yml`) — on every pull request, posting
  per-check results back to the PR as a comment

Both gate on the same checks:

| Check            | Command                                          |
| ---------------- | ------------------------------------------------ |
| Types            | `npm run type-check`                             |
| Lint             | `npm run lint`                                   |
| Formatting       | `npm run format:check`                           |
| Build            | `npm run build`                                  |
| Route metadata   | `npm run check:metadata`                         |
| Dependency audit | `npm audit --omit=dev --audit-level=high`        |
| Container        | Docker build, then every route checked for `200` |

Run everything locally with `npm run verify`.

### Why route metadata has its own check

Next inherits `alternates` and `openGraph` from the root layout, so a page
that omits them silently loses its canonical URL. That shipped once: five
pages declared the homepage as canonical while `sitemap.xml` still listed
them, which would have dropped them from search results. Nothing else
catches it — the build passes, the page renders, the container serves a
`200`. `scripts/check-metadata.mjs` asserts every route against its expected
canonical and `og:url`.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a build.

A `Dockerfile` and `compose.yaml` are included for self-hosting, using Next.js
standalone output and a non-root runtime user.

## License

© Fernandez Consulting. All rights reserved.
