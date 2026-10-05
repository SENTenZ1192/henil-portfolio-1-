import { Hero } from "@/components/hero";
import Link from "next/link";
import { Cinematic } from "@/components/cinematic";
import { FeaturedProjects, Archive } from "@/components/projects";
import { Experience } from "@/components/experience";
import { EngineeringLab } from "@/components/engineering-lab";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <section className="intro section" id="flight">
        <div className="section-kicker">
          <span>01 / A COMMON LANGUAGE</span>
          <span>SPACE → MOTORSPORT</span>
        </div>
        <div className="intro-grid">
          <h2>
            The environment changes.
            <br />
            <span>The questions don’t.</span>
          </h2>
          <div>
            <p>
              Where am I? How will the system respond? What is the best way
              forward?
            </p>
            <p>
              From a spacecraft’s attitude to a race car’s next corner, my work
              explores the same foundations: dynamics, estimation, control and
              optimization.
            </p>
            <Link className="text-link" href="/about">
              The story so far <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <Cinematic />
      <section className="research-feature section">
        <div>
          <span className="eyebrow">AEROSPACE / IIT BOMBAY + ISRO</span>
          <h2>
            The journey
            <br />
            doesn’t end
            <br />
            at <em>orbit.</em>
          </h2>
        </div>
        <div>
          <span className="research-equation" aria-hidden="true">
            ẋ = f(x, u)
          </span>
          <h3>Reusable launch vehicles</h3>
          <p>
            Return trajectories. Navigation under uncertainty. Controlled
            descent. Research that connected my fascination with space to the
            engineering of autonomous systems.
          </p>
          <Link className="text-link" href="/research/reusable-launch-vehicle">
            Explore the research <span>↗</span>
          </Link>
        </div>
      </section>
      <FeaturedProjects />
      <EngineeringLab />
      <Experience />
      <Archive />
      <section className="about-strip section">
        <span className="eyebrow">THE ENGINEER BEHIND THE MODELS</span>
        <h2>
          Curious about vehicles.
          <br />
          More curious about
          <br />
          <em>how they behave.</em>
        </h2>
        <div>
          <p>
            I’m Henil, a final-year Aerospace Engineering student at IIT Bombay,
            Class of 2027. My next trajectory is advanced study in dynamics,
            control and optimization.
          </p>
          <Link className="text-link" href="/about">
            More about me <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
