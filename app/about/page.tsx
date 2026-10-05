import Link from "next/link";
export const metadata = {
  title: "About",
  description:
    "Henil Parmar, final-year Aerospace Engineering student at IIT Bombay, Class of 2027.",
  alternates: { canonical: "/about" },
};
export default function Page() {
  return (
    <main id="main" className="page-main">
      <section className="section">
        <span className="eyebrow">ABOUT / HENIL PARMAR</span>
        <h1>
          It started with space.
          <br />
          It became a question
          <br />
          of <em>control.</em>
        </h1>
        <div className="about-body">
          <div className="education-block">
            <span className="eyebrow">EDUCATION</span>
            <h3>
              Indian Institute
              <br />
              of Technology Bombay
            </h3>
            <p>
              B.Tech Aerospace Engineering
              <br />
              2023–2027 · Final year
            </p>
            <a
              className="button"
              href="/henil-parmar-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <span>↗</span>
            </a>
          </div>
          <div>
            <p>
              Astronomy books and encyclopaedias my father brought home first
              made me curious about space. Conversations about cars and engines
              gave that curiosity another direction: how do the parts of a
              vehicle work together as one system?
            </p>
            <div className="origin-story">
              <span className="eyebrow">A CHILDHOOD PLAN</span>
              <blockquote>
                A close friend shared my fascination with space. We spent time
                learning about missions, discoveries and the possibilities
                beyond Earth. We even made a childhood plan: I would become a
                space scientist and my friend would become an astronaut.
                Somehow, we would explore and build things together.
              </blockquote>
              <p>
                My understanding of that path has changed considerably.
                <strong> The ambition behind it has remained.</strong>
              </p>
            </div>
            <p>
              Friends introduced me to Formula 1 in Class XI. Following races
              gradually became a curiosity about the engineering behind them.
              Choosing Aerospace Engineering at IIT Bombay let me pursue those
              questions through mathematics, physics, experimentation and
              design.
            </p>
            <p>
              A reusable launch vehicle project with a team of four connected
              that early fascination to trajectory, guidance and landing-system
              design. Research at SAC, ISRO deepened my interest in guidance and
              navigation. The C295 programme at Airbus Defence and Space showed
              me how engineering decisions meet production, coordination and
              responsibility inside a large aerospace programme.
            </p>
            <p>
              In winter 2025, I brought my interest in complete vehicle
              behaviour into a Formula 1 lap-time simulation project. My
              independent work now explores optimization, energy deployment,
              state estimation and nonlinear control.
            </p>
            <p>
              These experiences have made postgraduate study a considered next
              step. I want deeper knowledge of dynamics, control and
              optimization, while keeping sight of how aerodynamics, design and
              other subsystems shape a vehicle as a whole.
            </p>
            <Link className="text-link" href="/work">
              Explore the work <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="skills-section">
          <span className="eyebrow">TOOLS, ORGANIZED BY PURPOSE</span>
          <div className="skills-grid">
            {[
              ["Optimization", "CasADi / IPOPT / direct collocation"],
              ["Estimation & control", "EKF / sensor fusion / LQR / NMPC"],
              ["Scientific computation", "Python / MATLAB / NumPy / SciPy"],
              ["Vehicle performance", "FastF1 / telemetry / vehicle modelling"],
              [
                "Aerospace & simulation",
                "Flight mechanics / GNC / ANSYS / OpenVSP",
              ],
              ["Engineering design", "Fusion 360 / SolidWorks / CAD"],
            ].map(([t, b]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
