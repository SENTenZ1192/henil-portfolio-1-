import Link from "next/link";
import Image from "next/image";
import { projects, projectHref } from "@/data/projects";
export function FeaturedProjects() {
  return (
    <section className="section selected" id="selected-work">
      <div className="section-kicker">
        <span>03 / SELECTED ENGINEERING</span>
        <Link href="/work">VIEW ALL WORK ↗</Link>
      </div>
      <div className="section-title">
        <h2>
          Turning models
          <br />
          into <em>motion.</em>
        </h2>
        <p>
          Independent projects and aerospace research.
          <br />
          The methods, the evidence, and the limits.
        </p>
      </div>
      <Link href="/projects/minimum-lap-time" className="flagship">
        <div className="flagship-copy">
          <span className="eyebrow">01 / OPTIMAL CONTROL</span>
          <h3>
            Finding the fastest
            <br />
            way around.
          </h3>
          <p>
            Joint racing-line and speed optimization.
            <br />
            Four circuits. Real telemetry. A frozen vehicle model.
          </p>
          <div className="tags">
            <span>CASADI / IPOPT</span>
            <span>FASTF1</span>
          </div>
          <span className="project-cta">
            Minimum-Lap-Time Simulator <b>↗</b>
          </span>
        </div>
        <div className="flagship-art">
          <span className="plot-label">V2.1 / FOUR-CIRCUIT VALIDATION</span>
          <Image
            src="/project-media/lap-validation.webp"
            alt="Real four-circuit lap-time and speed-error validation results"
            width={2969}
            height={1168}
            sizes="(max-width:760px) 90vw, 50vw"
          />
          <span className="plot-label">
            NUMERICAL FEASIBILITY ≠ EMPIRICAL ACCURACY
          </span>
        </div>
      </Link>
      <div className="project-duo">
        {[projects[1], projects[2]].map((p, i) => (
          <Link className="project-tile" key={p.slug} href={projectHref(p)}>
            <div className="tile-image">
              <Image
                src={`/project-media/${i === 0 ? "nmpc-trajectory" : "energy-deployment"}.webp`}
                alt={
                  i === 0
                    ? "Actual EKF and NMPC trajectory output"
                    : "Actual hybrid deployment track map"
                }
                fill
                sizes="(max-width:760px) 90vw, 45vw"
              />
            </div>
            <div className="tile-header">
              <span className="eyebrow">
                0{i + 2} /{" "}
                {i === 0 ? "ESTIMATION + CONTROL" : "ENERGY + OPTIMIZATION"}
              </span>
              <span>↗</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="status-label">{p.status}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function Archive() {
  return (
    <section className="section archive">
      <div className="section-kicker">
        <span>05 / ENGINEERING ARCHIVE</span>
        <span>OTHER SCALES. SAME CURIOSITY.</span>
      </div>
      {projects.slice(4).map((p, i) => (
        <Link className="archive-row" href={projectHref(p)} key={p.slug}>
          <span>0{i + 1}</span>
          <h3>{p.title}</h3>
          <span>{p.tags.slice(0, 2).join(" / ")}</span>
          <b>↗</b>
        </Link>
      ))}
    </section>
  );
}
