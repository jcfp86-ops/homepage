import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Per-page metadata.
 *
 * Next inherits `alternates` and `openGraph` wholesale from the root layout
 * when a page does not redefine them, which would point every canonical and
 * every social card at the homepage. Each page therefore sets its own.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  // The <title> template adds the firm name; og:title is set explicitly and
  // must carry it too, or a shared link reads as a bare word.
  const fullTitle =
    path === "/" ? `${site.name} — ${site.discipline}` : `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${site.url}${path === "/" ? "" : path}`,
    },
    twitter: { title: fullTitle, description },
  };
}
