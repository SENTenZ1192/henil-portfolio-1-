import { Experience } from "@/components/experience";
export const metadata = {
  title: "Research & Industry Experience",
  description:
    "Engineering experience at Airbus Defence and Space, ISRO and IIT Bombay.",
  alternates: { canonical: "/experience" },
};
export default function Page() {
  return (
    <main id="main" className="page-main">
      <div className="section page-heading">
        <span className="eyebrow">EXPERIENCE / CONTEXT MATTERS</span>
        <h1>
          Engineering beyond
          <br />
          the <em>equations.</em>
        </h1>
        <p className="page-intro">
          Research sharpened my questions. Industry showed me how systems, teams
          and physical constraints shape their answers.
        </p>
      </div>
      <Experience full />
      <section className="section leadership">
        <span className="eyebrow">LEADERSHIP & MENTORSHIP</span>
        <h2>
          Good engineering
          <br />
          is a shared effort.
        </h2>
        <div className="leadership-grid">
          <article>
            <span>2025–26</span>
            <h3>Joint Secretary</h3>
            <p>
              Aerospace Engineering Department, IIT Bombay. Led an eight-member
              council supporting academic coordination, events and
              student–faculty engagement for more than 450 students.
            </p>
          </article>
          <article>
            <span>2025–PRESENT</span>
            <h3>Student Mentor</h3>
            <p>
              Department Academic Mentor Program. Academic and social guidance
              for second-year students; recognized as Best DAMP Mentor among 28
              peers in 2026.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
