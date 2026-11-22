"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import {
  CatmullRomCurve3,
  Color,
  Group,
  MeshStandardMaterial,
  Vector3,
} from "three";
import type { PartType } from "@/src/data/content";

const ST = 0xe8f1f8;
const DK = 0x5a738c;
const BL = 0x4db4ef;
const GD = 0xffc45c;

function useMat(
  color: number,
  metalness = 0.35,
  roughness = 0.42,
): MeshStandardMaterial {
  return useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color(color),
        metalness,
        roughness,
        envMapIntensity: 1.2,
      }),
    [color, metalness, roughness],
  );
}

function Cylinder({
  args,
  position,
  rotation,
  material,
}: {
  args: [number, number, number, number?];
  position?: [number, number, number];
  rotation?: [number, number, number];
  material: MeshStandardMaterial;
}) {
  return (
    <mesh position={position} rotation={rotation} material={material}>
      <cylinderGeometry args={args} />
    </mesh>
  );
}

function Torus({
  args,
  positionY = 0,
  material,
}: {
  args: [number, number, number?, number?];
  positionY?: number;
  material: MeshStandardMaterial;
}) {
  return (
    <mesh
      position={[0, positionY, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      material={material}
    >
      <torusGeometry args={args} />
    </mesh>
  );
}

function Injector() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  return (
    <group>
      <Cylinder args={[0.38, 0.38, 2, 48]} material={st} />
      <Cylinder args={[0.52, 0.52, 0.28, 48]} position={[0, 0.5, 0]} material={dk} />
      <Cylinder args={[0.2, 0.2, 0.9, 48]} position={[0, 1.4, 0]} material={st} />
      <Cylinder args={[0.46, 0.46, 0.12, 48]} position={[0, 0.9, 0]} material={gd} />
      <Cylinder
        args={[0.13, 0.13, 0.7, 48]}
        position={[0.4, 1.1, 0]}
        rotation={[0, 0, -Math.PI / 2.6]}
        material={gd}
      />
      <Cylinder args={[0.38, 0.09, 0.7, 48]} position={[0, -1.35, 0]} material={bl} />
      <Cylinder args={[0.09, 0.06, 0.3, 48]} position={[0, -1.85, 0]} material={st} />
      <Torus args={[0.4, 0.05, 16, 56]} positionY={-0.55} material={dk} />
    </group>
  );
}

function Plunger() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  return (
    <group>
      <Cylinder args={[0.5, 0.5, 1.8, 48]} position={[0, -0.3, 0]} material={st} />
      <Cylinder args={[0.78, 0.78, 0.18, 48]} position={[0, 0.62, 0]} material={dk} />
      <Cylinder args={[0.24, 0.24, 1.7, 48]} position={[0, 1.45, 0]} material={gd} />
      <Cylinder args={[0.4, 0.4, 0.14, 48]} position={[0, 2.3, 0]} material={bl} />
      <Cylinder
        args={[0.12, 0.12, 0.4, 48]}
        position={[0, -1.1, 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
        material={dk}
      />
      <Torus args={[0.5, 0.07, 16, 56]} positionY={-0.9} material={bl} />
    </group>
  );
}

function Rotor() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  const pegs = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2;
        return {
          key: i,
          position: [Math.cos(a) * 0.7, 0.45, Math.sin(a) * 0.7] as [
            number,
            number,
            number,
          ],
        };
      }),
    [],
  );

  return (
    <group>
      <Cylinder args={[0.95, 0.95, 0.55, 48]} material={st} />
      <Cylinder args={[0.42, 0.42, 2, 48]} position={[0, 0.2, 0]} material={bl} />
      <Cylinder args={[0.2, 0.2, 0.7, 48]} position={[0, 1.5, 0]} material={gd} />
      {pegs.map((peg) => (
        <Cylinder
          key={peg.key}
          args={[0.14, 0.14, 0.4, 24]}
          position={peg.position}
          material={dk}
        />
      ))}
      <Torus args={[0.95, 0.07, 16, 56]} positionY={0.28} material={gd} />
      <Torus args={[0.95, 0.07, 16, 56]} positionY={-0.28} material={dk} />
    </group>
  );
}

function Nozzle() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  return (
    <group>
      <Cylinder args={[0.3, 0.3, 2.2, 48]} position={[0, 0.4, 0]} material={st} />
      <Cylinder args={[0.48, 0.48, 0.42, 6]} position={[0, 1.55, 0]} material={dk} />
      <Cylinder args={[0.2, 0.2, 0.5, 48]} position={[0, 2.0, 0]} material={gd} />
      <Cylinder args={[0.46, 0.46, 0.35, 6]} position={[0, -0.7, 0]} material={bl} />
      <Cylinder args={[0.3, 0.1, 0.8, 48]} position={[0, -1.3, 0]} material={st} />
      <Cylinder args={[0.1, 0.05, 0.3, 48]} position={[0, -1.85, 0]} material={gd} />
      <Cylinder
        args={[0.12, 0.12, 0.6, 48]}
        position={[0.4, 1.1, 0]}
        rotation={[0, 0, -1]}
        material={dk}
      />
    </group>
  );
}

function Kit() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  const springCurve = useMemo(() => {
    const points: Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * Math.PI * 8;
      points.push(
        new Vector3(
          Math.cos(a) * 0.35,
          -1.5 + (i / 40) * 1.5 + 0.2,
          Math.sin(a) * 0.35,
        ),
      );
    }
    return new CatmullRomCurve3(points);
  }, []);

  return (
    <group>
      <Torus args={[0.95, 0.14, 16, 56]} positionY={0.6} material={st} />
      <Torus args={[0.75, 0.14, 16, 56]} positionY={0.25} material={gd} />
      <Torus args={[0.55, 0.14, 16, 56]} positionY={-0.1} material={bl} />
      <Cylinder args={[0.9, 0.9, 0.07, 48]} position={[0, -0.5, 0]} material={dk} />
      <Cylinder args={[0.9, 0.9, 0.07, 48]} position={[0, -0.62, 0]} material={st} />
      <mesh position={[0, -0.3, 0]} material={gd}>
        <tubeGeometry args={[springCurve, 200, 0.05, 8]} />
      </mesh>
    </group>
  );
}

function Pump() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  return (
    <group>
      <mesh material={st}>
        <boxGeometry args={[1.7, 1.3, 1.3]} />
      </mesh>
      <Cylinder
        args={[0.55, 0.55, 0.9, 48]}
        position={[1.1, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        material={dk}
      />
      <Cylinder
        args={[0.8, 0.8, 0.2, 48]}
        position={[1.7, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        material={bl}
      />
      <Cylinder args={[0.3, 0.3, 0.5, 48]} position={[-0.2, 0.85, 0]} material={gd} />
      <Cylinder
        args={[0.2, 0.2, 0.8, 48]}
        position={[-0.9, 0, 0.8]}
        rotation={[Math.PI / 2, 0, 0]}
        material={dk}
      />
      {[0, 1, 2].map((i) => (
        <Cylinder
          key={i}
          args={[0.16, 0.16, 0.5, 48]}
          position={[-0.55 + i * 0.55, -0.85, 0]}
          material={gd}
        />
      ))}
    </group>
  );
}

function Rail() {
  const st = useMat(ST, 0.28, 0.4);
  const dk = useMat(DK, 0.4, 0.45);
  const bl = useMat(BL, 0.32, 0.35);
  const gd = useMat(GD, 0.38, 0.32);

  return (
    <group>
      <Cylinder
        args={[0.28, 0.28, 3.4, 48]}
        rotation={[0, 0, Math.PI / 2]}
        material={st}
      />
      {[0, 1, 2, 3].map((i) => {
        const x = -1.15 + i * 0.77;
        return (
          <group key={i}>
            <Cylinder
              args={[0.13, 0.13, 0.8, 48]}
              position={[x, 0.55, 0]}
              material={gd}
            />
            <Cylinder
              args={[0.2, 0.2, 0.14, 48]}
              position={[x, 0.95, 0]}
              material={dk}
            />
          </group>
        );
      })}
      <Cylinder
        args={[0.2, 0.2, 0.6, 48]}
        position={[1.9, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        material={bl}
      />
      <Cylinder args={[0.14, 0.14, 0.5, 48]} position={[0, -0.5, 0]} material={dk} />
    </group>
  );
}

const PARTS: Record<PartType, () => JSX.Element> = {
  inj: Injector,
  plunger: Plunger,
  rotor: Rotor,
  nozzle: Nozzle,
  kit: Kit,
  pump: Pump,
  rail: Rail,
};

function Scene({ type }: { type: PartType }) {
  const groupRef = useRef<Group>(null);
  const Part = PARTS[type];
  const initialY = useMemo(() => Math.random() * 3, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.position.y =
      Math.sin(clock.elapsedTime * (1000 / 900)) * 0.07;
  });

  return (
    <>
      <hemisphereLight
        color={0xffffff}
        groundColor={0xd6eaf8}
        intensity={1.35}
      />
      <ambientLight color={0xffffff} intensity={1.6} />
      <pointLight
        color={0x8fd4ff}
        intensity={3.4}
        distance={50}
        position={[-4, 4, 7]}
      />
      <pointLight
        color={0xffe0a0}
        intensity={2.8}
        distance={50}
        position={[5, -1, 5]}
      />
      <directionalLight color={0xffffff} intensity={1.6} position={[2, 6, 8]} />
      <directionalLight
        color={0xffffff}
        intensity={0.7}
        position={[-3, 2, -4]}
      />
      <group ref={groupRef} rotation={[0.3, initialY, 0]}>
        <Part />
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={4}
        minPolarAngle={Math.PI / 2 - 1.2}
        maxPolarAngle={Math.PI / 2 + 1.2}
      />
    </>
  );
}

export type PartViewerProps = {
  type: PartType;
  scale?: number;
  className?: string;
  "aria-label"?: string;
  compact?: boolean;
};

export default function PartViewer({
  type,
  scale = 1,
  className = "",
  "aria-label": ariaLabel = "Model 3D spare part diesel",
  compact = false,
}: PartViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <Canvas
        className={`block h-full w-full cursor-grab active:cursor-grabbing ${
          compact ? "touch-pan-y" : "touch-none"
        }`}
        style={{
          background: "radial-gradient(closest-side, #EAF5FC, transparent)",
        }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 1.45 }}
        camera={{
          fov: 35,
          near: 0.1,
          far: 60,
          position: [0, 0, 9.5 / scale],
        }}
        frameloop={visible ? "always" : "never"}
        aria-label={ariaLabel}
      >
        <Scene type={type} />
      </Canvas>
    </div>
  );
}
