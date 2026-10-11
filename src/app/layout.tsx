import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.discipline}`,
    template: `%s — ${site.name}`,
  },
  description: site.heroSub,
  applicationName: site.name,
  authors: [{ name: site.principal }],
  keywords: [
    "SaMD",
    "Software as a Medical Device",
    "program direction",
    "Class II/III medical device software",
    "FDA 510(k)",
    "EU MDR",
    "IEC 62304",
    "ISO 13485",
    "regulatory program management",
  ],
  // Deliberately no title/description/url here: Next inherits `openGraph`
  // wholesale, so setting them would give every interior page the homepage's
  // social card. Left unset, they resolve from each page's own metadata.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  // `alternates` is likewise inherited, so canonical is set per page.
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--ground)]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
