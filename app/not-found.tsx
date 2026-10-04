import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section not-found">
      <span className="eyebrow">404 / OUTSIDE THE FLIGHT ENVELOPE</span>
      <h1>
        Trajectory <em>lost.</em>
      </h1>
      <p>This destination isn’t on the map. Let’s get back on course.</p>
      <Link href="/" className="button">
        Return home <span>↗</span>
      </Link>
    </main>
  );
}
