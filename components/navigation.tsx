"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="nav"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Link
        href="/"
        className="wordmark"
        onClick={() => setOpen(false)}
        aria-label="Henil Parmar home"
      >
        <span className="brandmark">
          h<span>p</span>
        </span>
        <span>
          HENIL PARMAR
          <span className="wordmark-sub">AEROSPACE / IIT BOMBAY</span>
        </span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"} <span>{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-menu"
        aria-label="Main navigation"
        className={open ? "links open" : "links"}
      >
        {[
          ["Work", "/work"],
          ["Research", "/research"],
          ["Experience", "/experience"],
          ["About", "/about"],
        ].map(([n, h]) => (
          <Link
            key={h}
            href={h}
            aria-current={path === h ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {n}
          </Link>
        ))}
        <a
          href="/henil-parmar-cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="cv-link"
        >
          Résumé <span>↗</span>
        </a>
        <Link
          href="/#contact"
          className="contact-nav"
          onClick={() => setOpen(false)}
        >
          Let’s talk <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}
