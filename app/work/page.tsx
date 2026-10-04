import { WorkList } from "@/components/work-list";
export const metadata = {
  title: "Engineering Work",
  description:
    "Selected work in optimal control, vehicle dynamics, state estimation and aerospace systems.",
  alternates: { canonical: "/work" },
};
export default function Page() {
  return (
    <main id="main" className="section page-main">
      <span className="eyebrow">ENGINEERING / SELECTED STUDIES</span>
      <h1>
        Ideas, tested
        <br />
        against <em>physics.</em>
      </h1>
      <p className="page-intro">
        A collection of models, simulations and control systems. Each study
        makes its assumptions, evidence and limitations explicit.
      </p>
      <WorkList />
    </main>
  );
}
