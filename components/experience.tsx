import Link from "next/link";
export const experience = [
  {
    year: "2026",
    date: "JUN — JUL",
    name: "Airbus Defence and Space",
    role: "Aerospace Engineering Intern · C295 Programme",
    body: "Final Assembly Line exposure in Vadodara: station workflows, aircraft systems integration, assembly quality and configuration management.",
  },
  {
    year: "2025",
    date: "MAY — JUL",
    name: "Space Applications Centre, ISRO",
    role: "Research Intern · Reusable Launch Vehicles",
    body: "Guidance and navigation research with GPS/INS fusion, pseudolite strategies and Monte Carlo simulation under Dr. Ashish Kumar Shukla.",
  },
  {
    year: "2024–25",
    date: "SEP — NOV",
    name: "IIT Bombay",
    role: "Reusable Launch Vehicle Research",
    body: "Mission trajectory, controlled descent and landing-system design under Prof. Dhwanil Shukla.",
  },
];
export function Experience({ full = false }: { full?: boolean }) {
  return (
    <section className="section experience">
      <div className="section-kicker">
        <span>04 / RESEARCH & INDUSTRY</span>
        {!full && <Link href="/experience">FULL EXPERIENCE ↗</Link>}
      </div>
      <h2>
        From first principles
        <br />
        to the <em>real world.</em>
      </h2>
      <div className="experience-list">
        {experience.map((e) => (
          <article className="experience-row" key={e.name}>
            <div className="experience-date">
              <strong>{e.year}</strong>
              <span>{e.date}</span>
            </div>
            <div>
              <h3>{e.name}</h3>
              <span className="experience-role">{e.role}</span>
            </div>
            <p>{e.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
