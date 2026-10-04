"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectHref } from "@/data/projects";
export function WorkList() {
  const [filter, setFilter] = useState("All work");
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {["All work", "Motorsport", "Aerospace", "Archive"].map((f) => (
          <button
            key={f}
            aria-pressed={f === filter}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="work-list">
        {projects
          .filter(
            (p, i) =>
              filter === "All work" ||
              (filter === "Motorsport" && i < 3) ||
              (filter === "Aerospace" && (i === 3 || i === 4)) ||
              (filter === "Archive" && i === 5),
          )
          .map((p) => (
            <Link key={p.slug} href={projectHref(p)} className="work-row">
              <span className="eyebrow">{p.category}</span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="work-arrow">↗</span>
            </Link>
          ))}
      </div>
    </>
  );
}
