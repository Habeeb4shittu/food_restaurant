import * as THREE from "three";
import type { MutableRefObject } from "react";
import React, { Suspense, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import type { BackgroundConfig, SectionKey } from "./types";
import { useFrame } from "@react-three/fiber";
import Image from "next/image";
import FadedBackdropText from "../FadedBackdropText";

// Lazy client-only R3F bits
const Canvas = dynamic(
  () => import("@react-three/fiber").then(m => m.Canvas),
  { ssr: false }
);
const Drei = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useGLTF: undefined as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Center: undefined as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Environment: undefined as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
export function RotatingModel({
  src,
  isActive,
  scale = 1.2,
  maxTilt = 0.5,   // slightly higher for sensitivity
}: {
  src: string
  isActive?: boolean
  scale?: number
  maxTilt?: number
}) {
  const group = useRef<THREE.Group>(null)
  const gltf = Drei.useGLTF?.(src)

  const entryStart = useRef<number | null>(null)
  const follow = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  // ease helpers
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const damp = (a: number, b: number, lambda: number, dt: number) =>
    a + (b - a) * (1 - Math.exp(-lambda * dt))

  // track cursor
  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      target.current.y = -nx * maxTilt
      target.current.x = -ny * maxTilt
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [maxTilt])

  // trigger entry animation
  React.useEffect(() => {
    if (isActive) entryStart.current = performance.now()
  }, [isActive])

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return

    const now = performance.now()

    // 1) entry rotation and lift
    if (entryStart.current) {
      const t = Math.min(1, (now - entryStart.current) / 1600) // ~1.6s
      const e = easeOutCubic(t)
      g.rotation.y = THREE.MathUtils.lerp(-Math.PI / 1.8, 0, e)
      g.position.y = Math.sin(e * Math.PI) * 0.25
      g.scale.setScalar(THREE.MathUtils.lerp(scale * 0.9, scale, e))
      if (t >= 1) entryStart.current = null
    }

    // 2) follow cursor (smooth and responsive)
    follow.current.x = damp(follow.current.x, target.current.x, 6, delta)
    follow.current.y = damp(follow.current.y, target.current.y, 6, delta)

    g.rotation.x = follow.current.x
    g.rotation.y += (follow.current.y - g.rotation.y) * 0.1 // small easing drift
  })

  return (
    <group ref={group}>
      {Drei.Center && (
        <Drei.Center>
          {gltf?.scene ? <primitive object={gltf.scene.clone()} scale={scale} /> : null}
        </Drei.Center>
      )}
    </group>
  )
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
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  poster={(config as any).poster}
                >
                  <source src={
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (config as any).src} type="video/mp4" />
                </video>
              )}

              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (config as any).overlay ? (
                  <div className="absolute inset-0" style={{
                    background:
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (config as any).overlay
                  }} />
                ) : null}
            </div>
          );
        }

        // MODEL
        if (config.kind === "model") {
          const c = config as Extract<BackgroundConfig, { kind: "model" }>;
          return (
            <div
              key={key}
              aria-hidden
              className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {/* <img src={"/media/smoky_cloud.png"} alt="" className="absolute bottom-0 w-full z-1 opacity-30" /> */}
              {/* <video src="/media/coffee.mp4" className="absolute right-0 w-[45%] top-0" muted autoPlay loop></video> */}
              {/* gradient base (z-0) */}
              <div className="absolute inset-0 z-0" style={{ background: c.gradient || c.fallbackGradient || "transparent" }} />

              {/* the faded background text (under the Canvas) */}
              {/* <FadedBackdropText baseScale={0.8} duration={0.4} delayStep={0.08} text="ISTANBUL" subtext="Pilic" opacity={0.62} /> */}

              {!prefersReducedMotion && Canvas ? (
                <Suspense fallback={null}>
                  <Canvas
                    dpr={[1, 1.5]}
                    camera={{
                      position: c.camera?.position ?? [0, 0, 6],
                      fov: c.camera?.fov ?? 45,
                    }}
                    frameloop="always"
                    className="absolute z-10 inset-0"
                  >
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[3, 5, 2]} intensity={1} />
                    {Drei.Environment ? <Drei.Environment preset="city" /> : null}
                    <RotatingModel
                      src={c.src}
                      // rotateSpeed={c.rotateSpeed ?? 0.3}
                      isActive={isActive}
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
