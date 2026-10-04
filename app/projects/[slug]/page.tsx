import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudy } from "@/components/case-study";
export function generateStaticParams() {
  return projects
    .filter((p) => p.slug !== "reusable-launch-vehicle")
    .map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.title,
    description: p?.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: p?.title,
      description: p?.summary,
      images: p?.image ? [{ url: `/project-media/${p.image}.webp` }] : [],
    },
    twitter: {
      title: p?.title,
      description: p?.summary,
      images: p?.image ? [`/project-media/${p.image}.webp`] : [],
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find(
    (p) => p.slug === slug && p.slug !== "reusable-launch-vehicle",
  );
  if (!p) notFound();
  return <CaseStudy project={p} />;
}
