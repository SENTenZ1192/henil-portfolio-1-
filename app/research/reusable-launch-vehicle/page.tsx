import { CaseStudy } from "@/components/case-study";
import { projects } from "@/data/projects";
export const metadata = {
  title: "Reusable Launch Vehicle Research",
  description: projects[3].summary,
  alternates: { canonical: "/research/reusable-launch-vehicle" },
  openGraph: {
    title: "Reusable Launch Vehicle Research",
    description: projects[3].summary,
    images: [],
  },
  twitter: { images: [] },
};
export default function Page() {
  return <CaseStudy project={projects[3]} />;
}
