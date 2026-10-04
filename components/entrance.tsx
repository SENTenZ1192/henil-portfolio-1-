"use client";
import { useEffect } from "react";
import gsap from "gsap";
export function Entrance() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ".hero-title > *",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        },
      );
      gsap.fromTo(
        ".hero-model",
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          clearProps: "all",
        },
      );
    });
    return () => mm.revert();
  }, []);
  return null;
}
