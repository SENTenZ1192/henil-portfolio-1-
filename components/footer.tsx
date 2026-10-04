export function Footer() {
  return (
    <footer id="contact">
      <div className="section-kicker">
        <span>06 / NEXT TRAJECTORY</span>
        <span>OPEN TO RESEARCH & ENGINEERING OPPORTUNITIES</span>
      </div>
      <div className="contact-grid">
        <h2>
          Let’s build something
          <br />
          that <em>moves.</em>
        </h2>
        <div>
          <p>
            Advanced study. Aerospace systems.
            <br />
            Motorsport engineering.
            <br />A good conversation is a starting point.
          </p>
          <a className="text-link" href="mailto:henilparmar@iitb.ac.in">
            henilparmar@iitb.ac.in <span>↗</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HENIL PARMAR</span>
        <span>MUMBAI, INDIA · 19.1334° N</span>
        <a
          href="https://www.linkedin.com/in/henilparmar11921208"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN ↗
        </a>
        <a
          href="https://github.com/SENTenZ1192"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB ↗
        </a>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
