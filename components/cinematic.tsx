"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Scene = dynamic(() => import("./three/scene"), { ssr: false });
const clamp = (v: number) => Math.max(0, Math.min(1, v));
export function Cinematic() {
  const root = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener("change", change);
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        setP(clamp(-rect.top / (el.offsetHeight - innerHeight)));
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", change);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  const t = reduced ? 0.68 : p;
  const morph = clamp((t - 0.35) / 0.35);
  const points = Array.from({ length: 121 }, (_, i) => {
    const a = (i / 120) * Math.PI * 2;
    const x = 500 + Math.cos(a) * 320;
    const y = 300 + Math.sin(a) * 145;
    const r = 1 + 0.18 * Math.cos(a * 3) + 0.12 * Math.sin(a * 5);
    const tx = 500 + Math.cos(a) * 300 * r;
    const ty = 300 + Math.sin(a) * 170 * r;
    return `${x * (1 - morph) + tx * morph},${y * (1 - morph) + ty * morph}`;
  }).join(" ");
  const phase = t < 0.36 ? 0 : t < 0.68 ? 1 : 2;
  return (
    <section
      ref={root}
      className={`cinematic ${reduced ? "reduced" : ""}`}
      aria-label="From orbital trajectory to racing line"
    >
      <div className="cinematic-sticky">
        <div className="section-kicker">
          <span>02 / ORBIT TO APEX</span>
          <span>ONE LANGUAGE. TWO EXTREMES.</span>
        </div>
        <div className="chapter-index">
          <span className={phase === 0 ? "active" : ""}>01 ORBIT</span>
          <span className={phase === 1 ? "active" : ""}>02 TRAJECTORY</span>
          <span className={phase === 2 ? "active" : ""}>03 APEX</span>
        </div>
        <svg className="morph-path" viewBox="0 0 1000 600" aria-hidden="true">
          <defs>
            <linearGradient id="trajectory-color">
              <stop stopColor="#8cbace" />
              <stop
                offset="1"
                stopColor={morph > 0.4 ? "#e4714b" : "#8cbace"}
              />
            </linearGradient>
          </defs>
          <polyline
            points={points}
            fill="none"
            stroke="url(#trajectory-color)"
            strokeWidth="1.5"
          />
          <polyline
            points={points}
            fill="none"
            stroke="#a7b9c3"
            strokeWidth="15"
            opacity=".04"
          />
          <path
            d="M80 300H920M500 60V540"
            stroke="#647982"
            strokeWidth=".5"
            strokeDasharray="3 9"
          />
        </svg>
        <div
          className="cinematic-model"
          style={{
            opacity: reduced
              ? 1
              : phase === 2
                ? clamp((t - 0.68) / 0.12)
                : 1 - clamp((t - 0.48) / 0.18),
          }}
        >
          {active && (
            <Scene
              kind={phase === 2 ? "car" : "satellite"}
              progress={phase === 2 ? (t - 0.68) * 3 : t * 2}
            />
          )}
        </div>
        <div className="cinematic-copy">
          <span className="eyebrow">
            {
              [
                "ESTIMATE THE STATE",
                "OPTIMIZE THE TRAJECTORY",
                "CONTROL THE LIMIT",
              ][phase]
            }
          </span>
          <h2>
            {phase === 0 ? (
              <>
                Precision.
                <br />
                In every axis.
              </>
            ) : phase === 1 ? (
              <>
                An orbit becomes
                <br />a racing line.
              </>
            ) : (
              <>
                Same physics.
                <br />
                <em>Different limits.</em>
              </>
            )}
          </h2>
          <p>
            {
              [
                "Before a spacecraft can point, it must know its orientation. Sensing, dynamics and feedback close the loop.",
                "The geometry changes. The objective remains: find the best feasible path through a constrained physical system.",
                "Tyre forces replace thrusters. A racing line connects estimation, prediction and control.",
              ][phase]
            }
          </p>
          <Link
            className="text-link"
            href={
              phase === 0
                ? "/projects/satellite-lqr"
                : phase === 1
                  ? "/research/reusable-launch-vehicle"
                  : "/projects/minimum-lap-time"
            }
          >
            Explore the engineering <span>↗</span>
          </Link>
        </div>
        <div className="scene-labels">
          <span>{phase === 2 ? "LATERAL FORCE / Fᵧ" : "ATTITUDE / q"}</span>
          <span>{phase === 2 ? "YAW RATE / r" : "ANGULAR VELOCITY / ω"}</span>
          <span>
            {phase === 2 ? "CONTROL INPUT / δ" : "CONTROL TORQUE / τ"}
          </span>
        </div>
        <div className="cinematic-bottom">
          <span>ILLUSTRATIVE GEOMETRY · SCROLL TO EXPLORE</span>
          <div>
            <i style={{ transform: `scaleX(${reduced ? 1 : p})` }} />
          </div>
          <span>{String(Math.round(p * 100)).padStart(3, "0")} / 100</span>
        </div>
      </div>
    </section>
  );
}
