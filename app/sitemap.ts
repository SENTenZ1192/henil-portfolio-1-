import type { MetadataRoute } from "next";
import { projects, projectHref } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://henilparmar1208.vercel.app";
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
