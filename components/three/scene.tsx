"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import * as THREE from "three";
type Kind = "satellite" | "car";
function StaticScene() {
  return (
    <div className="scene-fallback">
      <Image
        src="/social.webp"
        alt="Henil Parmar: an orbital path connects aerospace and motorsport engineering"
        width={1536}
        height={864}
        sizes="(max-width:760px) 90vw, 55vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <StaticScene /> : this.props.children;
  }
}
function Box({
  position,
  scale,
  color = "#b6bcc2",
  metalness = 0.8,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color?: string;
  metalness?: number;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={0.32}
      />
    </mesh>
  );
}
function Satellite({ progress }: { progress: number }) {
  const explosion = Math.max(0, progress - 0.22) * 2;
  return (
    <group rotation={[0.3 + progress * 0.3, -0.5 + progress * 0.75, -0.28]}>
      <Box position={[0, 0, 0]} scale={[1.3, 1.15, 1.15]} color="#c6b38b" />
      <Box position={[0, 0.62 + explosion * 0.4, 0]} scale={[1.38, 0.1, 1.2]} />
      <Box
        position={[0, -0.62 - explosion * 0.4, 0]}
        scale={[1.38, 0.1, 1.2]}
      />
      {[-1, 1].map((side) => (
        <group key={side} position={[side * (2.18 + explosion), 0, 0]}>
          <Box
            position={[0, 0, 0]}
            scale={[2.55, 0.07, 1.75]}
            color="#17314d"
          />
          {Array.from({ length: 9 }, (_, i) => (
            <Box
              key={i}
              position={[-1.15 + i * 0.29, 0.044, 0]}
              scale={[0.015, 0.015, 1.75]}
              color="#81909f"
            />
          ))}
          {[-0.86, -0.44, 0, 0.44, 0.86].map((z) => (
            <Box
              key={z}
              position={[0, 0.05, z]}
              scale={[2.55, 0.012, 0.018]}
              color="#7b8c9d"
            />
          ))}
          <Box position={[0, -0.065, 0]} scale={[2.6, 0.05, 0.045]} />
        </group>
      ))}
      <Box position={[0, 0, 0]} scale={[5, 0.06, 0.06]} />
      <group position={[0, 0.85 + explosion * 0.6, 0]} rotation={[0, 0, -0.25]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <sphereGeometry
            args={[0.54, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.4]}
          />
          <meshStandardMaterial
            color="#eceeed"
            metalness={0.7}
            roughness={0.22}
            side={THREE.DoubleSide}
          />
        </mesh>
        <Box position={[0, 0.34, 0]} scale={[0.028, 0.75, 0.028]} />
      </group>
      <mesh
        position={[0, 0, 0.7 + explosion * 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.24, 0.3, 0.3, 24]} />
        <meshStandardMaterial color="#313b43" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.45, -0.1, 0.6]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshStandardMaterial
          emissive="#9ccae0"
          emissiveIntensity={1}
          color="#a8d7eb"
        />
      </mesh>
    </group>
  );
}
function Car({ progress }: { progress: number }) {
  return (
    <group rotation={[0.1, -0.55 + progress * 0.4, 0]} scale={1.08}>
      <mesh position={[0, 0.1, 0]} scale={[0.72, 0.38, 2.3]}>
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="#aeb9bd" metalness={0.8} roughness={0.3} />
      </mesh>
      <Box position={[0, -0.19, 0]} scale={[1.55, 0.09, 3.5]} color="#22272c" />
      <mesh position={[0, 0.19, -1.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.34, 1.8, 4]} />
        <meshStandardMaterial color="#deded8" metalness={0.7} roughness={0.3} />
      </mesh>
      <Box position={[0, 0.0, -2.4]} scale={[2.6, 0.09, 0.5]} color="#d25a3a" />
      <Box
        position={[0, 0.73, 1.8]}
        scale={[2.2, 0.12, 0.52]}
        color="#c8c9c4"
      />
      {[-0.8, 0.8].map((x) => (
        <Box
          key={x}
          position={[x, 0.34, 1.8]}
          scale={[0.06, 0.8, 0.5]}
          color="#333b3f"
        />
      ))}
      <mesh position={[0, 0.43, -0.1]} scale={[0.42, 0.2, 0.62]}>
        <sphereGeometry args={[1, 24, 12]} />
        <meshStandardMaterial color="#070a0c" />
      </mesh>
      {[-1, 1].flatMap((x) =>
        [-1.55, 1.35].map((z) => (
          <group key={`${x}${z}`} position={[x * 1.06, -0.05, z]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.52, 0.52, 0.46, 32]} />
              <meshStandardMaterial color="#111518" roughness={0.84} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[x * 0.24, 0, 0]}>
              <cylinderGeometry args={[0.28, 0.28, 0.018, 16]} />
              <meshStandardMaterial
                color="#666e72"
                metalness={0.9}
                roughness={0.3}
              />
            </mesh>
            <Box position={[-x * 0.38, 0.0, 0]} scale={[0.5, 0.035, 0.045]} />
          </group>
        )),
      )}
      <Box position={[0, 0.47, 0.8]} scale={[0.15, 0.35, 1]} color="#dd5e3d" />
    </group>
  );
}
function Invalidate({
  progress,
  onLost,
}: {
  progress: number;
  onLost: () => void;
}) {
  const invalidate = useThree((s) => s.invalidate);
  const gl = useThree((s) => s.gl);
  useEffect(() => invalidate(), [progress, invalidate]);
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", onLost);
    return () => canvas.removeEventListener("webglcontextlost", onLost);
  }, [gl, onLost]);
  return null;
}
export default function Scene({
  kind,
  progress = 0,
}: {
  kind: Kind;
  progress?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lost, setLost] = useState(false);
  if (lost) return <StaticScene />;
  return (
    <Boundary>
      <div
        ref={ref}
        className="canvas-wrap"
        role="img"
        aria-label={
          kind === "satellite"
            ? "Original 3D satellite with twin solar arrays and communication antenna"
            : "Original unbranded open-wheel Formula-style engineering car"
        }
      >
        <Canvas
          fallback={<StaticScene />}
          frameloop="demand"
          dpr={[1, 1.5]}
          camera={{
            position: kind === "satellite" ? [5, 4.5, 7] : [5, 4, 7],
            fov: 37,
          }}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 0);
          }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[3, 5, 4]}
            intensity={4}
            color="#edf4f8"
          />
          <directionalLight
            position={[-5, 0, -3]}
            intensity={3}
            color={kind === "satellite" ? "#88acc5" : "#e76f42"}
          />
          <directionalLight position={[0, -2, 5]} intensity={1} />
          {kind === "satellite" ? (
            <Satellite progress={progress} />
          ) : (
            <Car progress={progress} />
          )}
          <Invalidate progress={progress} onLost={() => setLost(true)} />
        </Canvas>
      </div>
    </Boundary>
  );
}
