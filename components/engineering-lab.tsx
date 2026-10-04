"use client";
import { useState } from "react";
export function EngineeringLab() {
  const [mode, setMode] = useState<"estimate" | "energy">("estimate");
  const [amount, setAmount] = useState(45);
  const data = Array.from({ length: 90 }, (_, i) => {
    const baseline = 95 + Math.sin(i * 0.07) * 35;
    const noise =
      Math.sin(i * 2.17) * amount * 0.6 + Math.cos(i * 0.91) * amount * 0.35;
    return {
      x: 20 + i * 5.1,
      raw: baseline + noise,
      filtered: baseline + noise * 0.13,
    };
  });
  return (
    <section className="lab">
      <div className="lab-copy">
        <span className="eyebrow">A CLOSER LOOK</span>
        <h3>
          {mode === "estimate" ? (
            <>
              From measurement
              <br />
              to meaning.
            </>
          ) : (
            <>
              Every joule
              <br />
              has a destination.
            </>
          )}
        </h3>
        <p>
          {mode === "estimate"
            ? "A state estimator combines noisy measurements with a model. Explore the idea by increasing the measurement noise."
            : "Energy deployment and recovery trade against a finite battery budget. Explore an illustrative allocation around a lap."}
        </p>
        <div
          className="lab-switch"
          role="group"
          aria-label="Choose engineering illustration"
        >
          <button
            aria-pressed={mode === "estimate"}
            onClick={() => setMode("estimate")}
          >
            State estimation
          </button>
          <button
            aria-pressed={mode === "energy"}
            onClick={() => setMode("energy")}
          >
            Energy allocation
          </button>
        </div>
      </div>
      <div className="lab-chart">
        <div className="chart-heading">
          <span>
            {mode === "estimate"
              ? "MEASUREMENT → ESTIMATE"
              : "RECOVERY ↔ DEPLOYMENT"}
          </span>
          <span>CONCEPT DEMO</span>
        </div>
        <svg
          viewBox="0 0 500 190"
          role="img"
          aria-label={
            mode === "estimate"
              ? "Illustrative noisy signal compared to a smoothed estimate"
              : "Illustrative battery energy allocation"
          }
        >
          {[40, 80, 120, 160].map((y) => (
            <path key={y} d={`M20 ${y}H480`} stroke="#29333b" />
          ))}
          {mode === "estimate" ? (
            <>
              <polyline
                points={data.map((d) => `${d.x},${d.raw}`).join(" ")}
                fill="none"
                stroke="#55616b"
                strokeWidth="1"
              />
              <polyline
                points={data.map((d) => `${d.x},${d.filtered}`).join(" ")}
                fill="none"
                stroke="#a7d4e6"
                strokeWidth="2"
              />
            </>
          ) : (
            <>
              {data.map((d, i) => (
                <rect
                  key={i}
                  x={d.x}
                  y={
                    Math.sin(i * 0.12) > 0
                      ? 95 - (amount * 0.6 + 12) * Math.sin(i * 0.12)
                      : 95
                  }
                  width="3"
                  height={Math.abs((amount * 0.6 + 12) * Math.sin(i * 0.12))}
                  fill={Math.sin(i * 0.12) > 0 ? "#e4714b" : "#8cb6a1"}
                />
              ))}
              <path d="M20 95H480" stroke="#81949b" />
            </>
          )}
        </svg>
        <label className="range-label" htmlFor="lab-input">
          {mode === "estimate" ? "Measurement noise" : "Deployment intensity"}
          <span>{amount}%</span>
        </label>
        <input
          id="lab-input"
          type="range"
          min="0"
          max="100"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <p className="small-note">
          Illustrative signals only. This interactive sketch does not run the
          project’s estimator or optimizer. See the case studies for actual
          results.
        </p>
      </div>
    </section>
  );
}
