import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { projects, projectHref } from "@/data/projects";
import { EngineeringLab } from "./engineering-lab";
import { mediaSizes } from "@/data/media";
export function CaseStudy({ project: p }: { project: Project }) {
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main id="main">
      <div className="case-hero section">
        <Link className="back-link" href="/work">
          ← ALL ENGINEERING
        </Link>
        <span className="eyebrow">{p.category}</span>
        <h1>{p.title}</h1>
        <p className="case-summary">{p.summary}</p>
        <div className="case-meta">
          <span>{p.status}</span>
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="case-actions">
          {p.repo && (
            <a
              className="button"
              href={`https://github.com/SENTenZ1192/${p.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              View code <span>↗</span>
            </a>
          )}
          {p.report && (
            <a className="button" href={p.report}>
              Read report
            </a>
          )}
          {p.doi && (
            <a className="button" href={p.doi}>
              Publication / DOI
            </a>
          )}
        </div>
      </div>
      {p.metrics && (
        <div className="metrics">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      )}
      {p.image && (
        <figure className="case-figure">
          <a
            href={`/project-media/${p.image}.webp`}
            target="_blank"
            rel="noreferrer"
            aria-label="Open original result figure at full size"
          >
            <Image
              src={`/project-media/${p.image}.webp`}
              alt={p.caption || p.title}
              width={mediaSizes[p.image][0]}
              height={mediaSizes[p.image][1]}
              sizes="90vw"
              priority
            />
          </a>
          <figcaption>
            {p.caption} <span>OPEN FULL SIZE ↗</span>
          </figcaption>
        </figure>
      )}
      <div className="case-body section">
        <aside>
          <span className="eyebrow">IN THIS STUDY</span>
          {p.sections.map((s, i) => (
            <a key={s.title} href={`#study-${i}`}>
              0{i + 1} /{" "}
              {
                [
                  "Problem",
                  "Method",
                  "Evidence",
                  "Interpretation",
                  "Next steps",
                ][i]
              }
            </a>
          ))}
        </aside>
        <div>
          {p.sections.map((s, i) => (
            <section id={`study-${i}`} key={s.title} className="case-section">
              <span className="eyebrow">0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
              {p.slug === "minimum-lap-time" && i === 3 && (
                <div className="results-table-wrap">
                  <table>
                    <caption>V2.1 / 2023 qualifying comparison</caption>
                    <thead>
                      <tr>
                        <th>Circuit</th>
                        <th>Role</th>
                        <th>Simulated</th>
                        <th>Recorded</th>
                        <th>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [
                          "Monza",
                          "Calibration",
                          "82.001 s",
                          "80.307 s",
                          "+2.11%",
                        ],
                        [
                          "Silverstone",
                          "Calibration",
                          "85.184 s",
                          "86.720 s",
                          "−1.77%",
                        ],
                        [
                          "Bahrain",
                          "Held out",
                          "88.180 s",
                          "89.708 s",
                          "−1.70%",
                        ],
                        [
                          "Suzuka",
                          "Held out",
                          "88.085 s",
                          "88.877 s",
                          "−0.89%",
                        ],
                      ].map((row) => (
                        <tr key={row[0]}>
                          {row.map((c, j) =>
                            j === 0 ? (
                              <th scope="row" key={j}>
                                {c}
                              </th>
                            ) : (
                              <td key={j}>{c}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
          <div className="limitations">
            <span className="eyebrow">SCOPE & LIMITATIONS</span>
            <p>{p.limits}</p>
            {p.repo && (
              <a
                className="text-link"
                href={`https://github.com/SENTenZ1192/${p.repo}#readme`}
                target="_blank"
                rel="noreferrer"
              >
                Source, reproduction & full limitations <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
      {(p.slug === "state-estimation-nmpc" ||
        p.slug === "f1-energy-management") && <EngineeringLab />}
      <Link href={projectHref(next)} className="next-project section">
        <span className="eyebrow">NEXT STUDY</span>
        <h2>
          {next.title} <span>↗</span>
        </h2>
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            description: p.summary,
            author: { "@type": "Person", name: "Henil Parmar" },
            ...(p.repo
              ? { codeRepository: `https://github.com/SENTenZ1192/${p.repo}` }
              : {}),
          }),
        }}
      />
    </main>
  );
}
