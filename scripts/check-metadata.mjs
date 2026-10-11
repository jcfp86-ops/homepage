/**
 * Asserts that every route emits its own canonical URL and Open Graph URL.
 *
 * Next inherits `alternates` and `openGraph` wholesale from the root layout,
 * so a page that omits them silently declares the homepage as its canonical
 * URL. That shipped once: all five interior pages pointed at `/`, which would
 * have dropped them from search results while the sitemap still listed them.
 *
 * Run against the build output: `npm run build && node scripts/check-metadata.mjs`
 */
import { readFileSync, existsSync } from "node:fs";

const ORIGIN = "https://fernandezconsulting.co";

const ROUTES = [
  ["index", ""],
  ["approach", "/approach"],
  ["leadership", "/leadership"],
  ["program-direction", "/program-direction"],
  ["contact", "/contact"],
  ["privacy", "/privacy"],
];

const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

let failed = 0;

for (const [page, path] of ROUTES) {
  const file = `.next/server/app/${page}.html`;

  if (!existsSync(file)) {
    console.error(`FAIL ${page}: no build output at ${file}`);
    failed++;
    continue;
  }

  const html = readFileSync(file, "utf8");
  const expected = `${ORIGIN}${path}`;

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const ogUrl = attr(html, /<meta property="og:url" content="([^"]*)"/);
  const ogTitle = attr(html, /<meta property="og:title" content="([^"]*)"/);

  if (canonical !== expected) {
    console.error(
      `FAIL ${page}: canonical is "${canonical}", expected "${expected}"`,
    );
    failed++;
  }

  if (ogUrl !== expected) {
    console.error(`FAIL ${page}: og:url is "${ogUrl}", expected "${expected}"`);
    failed++;
  }

  // An interior page inheriting the homepage card is the symptom to catch.
  if (page !== "index" && ogTitle && !ogTitle.includes("—")) {
    console.error(
      `FAIL ${page}: og:title "${ogTitle}" is missing the firm name`,
    );
    failed++;
  }

  if (!failed) console.log(`ok   ${page.padEnd(18)} ${canonical}`);
}

if (failed > 0) {
  console.error(`\n${failed} metadata check(s) failed.`);
  process.exit(1);
}

console.log(`\nAll ${ROUTES.length} routes have correct canonical and og:url.`);
