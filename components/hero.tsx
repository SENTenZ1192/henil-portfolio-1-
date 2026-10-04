"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Entrance } from "./entrance";
const Scene = dynamic(() => import("./three/scene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loading">ORBITAL SYSTEM / ATTITUDE REFERENCE</div>
  ),
});
export function Hero() {
  return (
    <section className="hero">
      <Entrance />
      <div className="hero-grid" />
      <div className="hero-topline">
        <span>
          <i /> ENGINEERING AT THE LIMITS
        </span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <svg viewBox="0 0 900 700">
          <ellipse
            cx="490"
            cy="360"
            rx="375"
            ry="200"
            transform="rotate(-29 490 360)"
          />
          <ellipse
            cx="490"
            cy="360"
            rx="375"
            ry="200"
            transform="rotate(-29 490 360)"
            strokeDasharray="2 25"
          />
          <path d="M120 540L790 170M180 130L810 610" strokeDasharray="3 12" />
        </svg>
      </div>
      <div className="hero-model">
        <Scene kind="satellite" progress={0.12} />
      </div>
      <div className="hero-title">
        <div className="eyebrow">HENIL PARMAR</div>
        <h1>
          Different worlds.
          <br />
          Same <em>dynamics.</em>
        </h1>
        <p>
          Aerospace engineering at IIT Bombay.
          <br />
          Modelling, estimating and controlling complex
          <br className="desktop" /> vehicles, from orbit to apex.
        </p>
        <Link className="button" href="#selected-work">
          Explore my work <span>↗</span>
        </Link>
      </div>
      <div className="hero-coordinate">
        <span>01 / ORBITAL MECHANICS</span>
        <span>CONTROL WITHOUT CONTACT</span>
      </div>
      <div className="hero-bottom">
        <span>
          DYNAMICS <b>+</b> CONTROL <b>+</b> ESTIMATION <b>+</b> OPTIMIZATION
        </span>
        <a href="#flight">
          SCROLL TO CONNECT THE WORLDS <span>↓</span>
        </a>
      </div>
    </section>
  );
}
