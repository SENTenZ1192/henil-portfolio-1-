import Link from "next/link";
export const metadata = {
  title: "Aerospace Research",
  description:
    "Reusable launch vehicle guidance, navigation and control research at IIT Bombay and ISRO.",
  alternates: { canonical: "/research" },
};
export default function Page() {
  return (
    <main id="main" className="page-main">
      <section className="section">
        <span className="eyebrow">RESEARCH / AEROSPACE SYSTEMS</span>
        <h1>
          A trajectory
          <br />
          back to <em>Earth.</em>
        </h1>
        <p className="page-intro">
          Mission design, guidance and navigation are deeply connected. My
          research interests sit where those disciplines meet.
        </p>
        <div className="research-overview">
          <div className="research-symbol" aria-hidden="true">
            ∫<span>f(x, u) dt</span>
          </div>
          <div>
            <span className="eyebrow">
              IIT BOMBAY / SEPTEMBER 2024–NOVEMBER 2025
            </span>
            <h2>Reusable Launch Vehicle Research</h2>
            <p>
              Under Prof. Dhwanil Shukla, I explored autonomous return and
              landing through mission trajectory, terminal guidance and
              landing-system design.
            </p>
            <Link className="button" href="/research/reusable-launch-vehicle">
              Read the research overview <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="research-note">
          <span className="eyebrow">SPACE APPLICATIONS CENTRE / ISRO</span>
          <h2>
            Making navigation
            <br />
            robust to uncertainty.
          </h2>
          <p>
            My May–July 2025 research internship under Dr. Ashish Kumar Shukla
            involved GPS/INS fusion, pseudolite navigation strategies, Monte
            Carlo simulation and guidance modelling for reusable launch vehicle
            landing. This portfolio shares a public overview while preserving
            the confidentiality of institutional work.
          </p>
        </div>
        <Link className="text-link" href="/projects/satellite-lqr">
          Related study / Satellite attitude control <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
