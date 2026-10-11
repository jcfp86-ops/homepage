import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/program-direction", priority: 0.9 },
  { path: "/approach", priority: 0.8 },
  { path: "/leadership", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
