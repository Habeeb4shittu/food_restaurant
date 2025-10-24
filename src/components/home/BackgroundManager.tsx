import * as THREE from "three";
import type { MutableRefObject } from "react";
import React, { Suspense, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import type { BackgroundConfig, SectionKey } from "./types";

// Lazy client-only R3F bits
const Canvas = dynamic(
  () => import("@react-three/fiber").then(m => m.Canvas),
  { ssr: false }
);
const Drei = {
  useGLTF: undefined as any,
  Center: undefined as any,
  Environment: undefined as any,
  OrbitControls: undefined as any,
};
if (typeof window !== "undefined") {
  // safe to import drei on client
  import("@react-three/drei").then(mod => {
    Drei.useGLTF = mod.useGLTF;
    Drei.Center = mod.Center;
    Drei.Environment = mod.Environment;
    Drei.OrbitControls = mod.OrbitControls;
  });
}

type BackgroundManagerProps = {
  entries: [SectionKey, BackgroundConfig][];
  activeKey: SectionKey;
  prefersReducedMotion: boolean;
  videoRefs: MutableRefObject<Record<SectionKey, HTMLVideoElement | null>>;
};

function RotatingModel({
  src,
  rotateSpeed = 0.3, // idle spin rad/sec
  scale = 1.2,
  maxTilt = 0.35,    // radians of tilt from mouse
  idleAfter = 900,   // ms of inactivity before idle spin
}: {
  src: string;
  rotateSpeed?: number;
  scale?: number;
  maxTilt?: number;
  idleAfter?: number;
}) {
  const group = useRef<THREE.Group>(null!);
  const { useFrame } = require("@react-three/fiber");
  const gltf = Drei.useGLTF?.(src);

  // pointer state
  const targetTilt = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPointerTs = useRef<number>(0);
  const isPointerInside = useRef<boolean>(false);

  // entry animation state
  const mountTs = useRef<number>(performance.now());
  const entryDone = useRef<boolean>(false);

  // global listeners (works with pointer-events none)
  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      lastPointerTs.current = performance.now();
      isPointerInside.current = true;
      // normalize to [-0.5, 0.5]
      const nx = e.clientX / window.innerWidth - 4;
      const ny = e.clientY / window.innerHeight - 4;
      // invert ny so moving mouse up tilts model back slightly
      targetTilt.current.y = -nx * maxTilt; // yaw around Y via mouse X
      targetTilt.current.x = -ny * maxTilt; // pitch around X via mouse Y
    };
    const onLeave = () => {
      isPointerInside.current = false;
      // release to idle after timer
      lastPointerTs.current = performance.now() - idleAfter - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [maxTilt, idleAfter]);

  // tiny helper
  const damp = (curr: number, target: number, lambda: number, dt: number) =>
    curr + (target - curr) * (1 - Math.exp(-lambda * dt));

  useFrame((_: any, delta: number) => {
    const g = group.current;
    if (!g) return;

    const now = performance.now();

    // 1) Entry animation: position Z and scale ease out
    if (!entryDone.current) {
      const t = Math.min(1, (now - mountTs.current) / 700);
      const ease = 1 - Math.pow(1 - t, 3);

      const startZ = 0.15; // was 1.2, way too much
      const endZ = 0.0;
      g.position.z = THREE.MathUtils.lerp(startZ, endZ, ease);

      const s = THREE.MathUtils.lerp(scale * 0.95, scale, ease);
      g.scale.setScalar(s);

      if (t >= 1) {
        // hard-pin to target so no drift
        g.position.z = 0;
        g.scale.setScalar(scale);
        entryDone.current = true;
      }
    } else {
      g.position.z = 0;
      g.scale.setScalar(scale);
    }

    // 2) Decide if we are idle
    const idle = now - lastPointerTs.current > idleAfter || !isPointerInside.current;

    if (idle) {
      // smooth autorotate and decay tilt back to neutral
      g.rotation.y += delta * rotateSpeed;
      g.rotation.x = damp(g.rotation.x, 0, 6, delta);
      // keep a tiny forward tilt so it’s not dead flat
      g.rotation.z = damp(g.rotation.z, 0, 6, delta);
    } else {
      // move toward mouse-driven tilt
      g.rotation.x = damp(g.rotation.x, targetTilt.current.x, 8, delta);
      g.rotation.y = damp(g.rotation.y, targetTilt.current.y, 8, delta);
      // optional slight bank based on X to feel nicer
      const bank = -targetTilt.current.y * 0.25;
      g.rotation.z = damp(g.rotation.z, bank, 8, delta);
    }
  });

  // scene
  return (
    <group ref={group}>
      {Drei.Center ? (
        <Drei.Center>
          {gltf?.scene ? <primitive object={gltf.scene} scale={scale} /> : null}
        </Drei.Center>
      ) : null}
    </group>
  );
}

export function BackgroundManager({
  entries,
  activeKey,
  prefersReducedMotion,
  videoRefs,
}: BackgroundManagerProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden>
      {entries.map(([key, config]) => {
        const isActive = activeKey === key;
        const baseClasses =
          "absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

        // VIDEO
        if (config.kind === "video") {
          if (prefersReducedMotion) {
            videoRefs.current[key] = null;
          }
          return (
            <div
              key={key}
              aria-hidden
              className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {prefersReducedMotion ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      (config as any).fallbackGradient || `url(${(config as any).poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <video
                  ref={(node) => {
                    videoRefs.current[key] = node;
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={(config as any).poster}
                >
                  <source src={(config as any).src} type="video/mp4" />
                </video>
              )}
              {(config as any).overlay ? (
                <div className="absolute inset-0" style={{ background: (config as any).overlay }} />
              ) : null}
            </div>
          );
        }

        // MODELs
        if (config.kind === "model") {
          const c = config as Extract<BackgroundConfig, { kind: "model" }>;
          return (
            <div
              key={key}
              aria-hidden
              className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {/* Gradient layer always visible under the 3D canvas */}
              <div
                className="absolute inset-0"
                style={{
                  background: c.gradient || c.fallbackGradient || "transparent",
                }}
              />

              {!prefersReducedMotion && Canvas ? (
                <Suspense fallback={null}>
                  <Canvas
                    dpr={[1, 1.5]}
                    camera={{
                      position: c.camera?.position ?? [0, 0, 6],
                      fov: c.camera?.fov ?? 45,
                    }}
                    frameloop="always"
                    className="absolute inset-0"
                  >
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[3, 5, 2]} intensity={1} />
                    {Drei.Environment ? <Drei.Environment preset="city" /> : null}
                    <RotatingModel
                      src={c.src}
                      rotateSpeed={c.rotateSpeed ?? 0.3}
                      scale={c.scale ?? 1.2}
                    />
                    {Drei.OrbitControls ? (
                      <Drei.OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                    ) : null}
                  </Canvas>
                </Suspense>
              ) : null}

              {c.overlay ? (
                <div className="absolute inset-0" style={{ background: c.overlay }} />
              ) : null}
            </div>
          );
        }


        // GRADIENT
        const g = config as any;
        const gradientImage = g.texture ? `${g.gradient}, ${g.texture}` : g.gradient;

        return (
          <div
            key={key}
            aria-hidden
            className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: gradientImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {g.overlay ? <div className="absolute inset-0" style={{ background: g.overlay }} /> : null}
          </div>
        );
      })}
    </div>
  );
}
