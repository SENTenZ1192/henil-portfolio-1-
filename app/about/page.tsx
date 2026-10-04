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
              My fascination with space brought me to aerospace engineering.
              Working on reusable launch vehicles made the questions more
              specific: how does a vehicle know where it is, decide where to go,
              and get there under real physical constraints?
            </p>
            <p>
              At IIT Bombay and during my ISRO research internship, those
              questions connected trajectory, guidance and navigation. Exposure
              to the C295 Final Assembly Line at Airbus Defence and Space added
              another perspective: an engineering model ultimately belongs to a
              physical system.
            </p>
            <p>
              Formula-style vehicles offer a different setting for the same
              questions. My independent projects explore minimum-lap-time
              optimization, energy deployment, state estimation and nonlinear
              control.
            </p>
            <p>
              I’m preparing for advanced postgraduate study at the intersection
              of dynamics, control, estimation and optimization. I want to
              understand complex vehicles—and make their behaviour more
              predictable, capable and efficient.
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
