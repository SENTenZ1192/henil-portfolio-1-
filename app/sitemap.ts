import type { MetadataRoute } from "next";
import { projects, projectHref } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  return [
    "",
    "/work",
    "/research",
    "/experience",
    "/about",
    ...projects.map(projectHref),
  ].map((p) => ({
    url: base + p,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
