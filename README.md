# Fernandez Consulting

![Global SaMD Program Direction — we do not conclude at recommendations](https://github.com/jcfp86-ops/homepage/raw/main/docs/banner.svg)

[![CI](https://github.com/jcfp86-ops/homepage/actions/workflows/ci.yml/badge.svg)](https://github.com/jcfp86-ops/homepage/actions/workflows/ci.yml)

The website for Fernandez Consulting — a boutique practice directing Class II/III
Software as a Medical Device programs from strategy through multi-market launch.

## What is this?

A five-page marketing site built with Next.js. It is small on purpose: no CMS, no
database, no client-side state beyond a contact form. Every word of copy lives in
one TypeScript file, so changing the site's message means editing content rather
than components.

The interesting parts are the contact form — a server action that validates,
rate-limits and delivers enquiries — and the CI pipeline, which gates on a
metadata check that exists because of a bug that reached production once.

**Next.js 16** (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Get started

```bash
npm install
npm run dev
```

Runs at http://localhost:3000.

```bash
npm run build     # production build
npm run verify    # everything CI runs
```

## Where things live

| Path                         | What it holds                                   |
| ---------------------------- | ----------------------------------------------- |
| `src/content/site.ts`        | Every word of site copy, in one file            |
| `src/app/`                   | Routes, each with its own metadata              |
| `src/components/`            | Header, footer, logo, shared UI primitives      |
| `src/lib/metadata.ts`        | Per-page canonical and Open Graph construction  |
| `src/app/contact/actions.ts` | Contact server action — validation and delivery |
| `scripts/check-metadata.mjs` | Asserts every route's canonical and `og:url`    |

Editing `src/content/site.ts` changes the site's wording without touching a
component.

## Routes

| Route                | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `/`                  | Positioning, the four-stage arc, global reach  |
| `/program-direction` | The arc in full, engagement models, governance |
| `/approach`          | How engagements run, six operating principles  |
| `/leadership`        | The Principal                                  |
| `/contact`           | Enquiry form                                   |
| `/privacy`           | GDPR privacy notice                            |

## Configuration

| Env              | Default      | Purpose                    |
| ---------------- | ------------ | -------------------------- |
| `RESEND_API_KEY` | —            | Delivers contact enquiries |
| `CONTACT_EMAIL`  | `site.email` | Mailbox that receives them |

Without `RESEND_API_KEY` the form still validates and tells the visitor to email
directly, rather than accepting a message it cannot deliver.

## How the contact form works

The server action validates input, strips CR/LF from anything reaching an email
header, escapes HTML in the body, and echoes submitted values back on error so a
long enquiry is not lost to a failed submit. A hidden honeypot field catches
naive bots.

## Continuous integration

Two workflows run in GitHub Actions:

- **CI** (`ci.yml`) — on every push to `main`
- **PR Validation** (`pr-validation.yml`) — on every pull request, posting
  per-check results back to the PR as a comment that updates in place

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

`npm run verify` runs the same set locally.

### Why route metadata has its own check

Next inherits `alternates` and `openGraph` from the root layout, so a page that
omits them silently loses its canonical URL. That shipped once: five pages
declared the homepage as canonical while `sitemap.xml` still submitted them,
which would have dropped them from search results entirely.

Nothing else catches it. The build passes, types check, the page renders
correctly, and the container serves a `200`. `scripts/check-metadata.mjs`
asserts every route against its expected canonical and `og:url`, and it was
tested against a deliberate regression rather than trusted on sight.

## Deployment

Deployed on [Vercel](https://vercel.com); pushing to `main` triggers a build.

A `Dockerfile` and `compose.yaml` are included for self-hosting, using Next.js
standalone output and a non-root runtime user. CI builds the image and serves it
on every run, so it is verified rather than assumed.

## License

© Fernandez Consulting. All rights reserved.
