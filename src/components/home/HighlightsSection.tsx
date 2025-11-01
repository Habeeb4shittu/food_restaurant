"use client";

import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, type RefObject } from "react";
import { RotatingModel } from "./BackgroundManager";

type HighlightsSectionProps = {
  sectionRef: RefObject<HTMLDivElement>;
};

export function HighlightsSection({ sectionRef }: HighlightsSectionProps) {
  return (
    <section
      id="highlights"
      ref={sectionRef}
      className={[
        "relative min-h-[100svh] w-full overflow-hidden",
        "grid place-items-center px-4 sm:px-8 py-24 sm:py-28",
        "text-white",
      ].join(" ")}
    >
      {/* LEFT SIDE: headline and blurbs (absolute on md+, flow on mobile) */}
      <div
        className={[
          "max-w-lg space-y-6",
          "md:absolute md:left-10 md:top-28",
          "md:max-w-lg",
          "w-full md:w-auto",
          "px-1 md:px-0",
        ].join(" ")}
        data-animate
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight md:tracking-tight md:text-7xl">
          ATEŞ <br />
          ÖTESİ <br />
          LEZZET
        </h1>

        <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#fff]">
          <p>Odun Ateşi & Marinasyon</p>
          <p>Günlük Taze Baharatlar</p>
        </div>

        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm font-medium text-[#fff] flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#fff]" />
            Usta Şef Dokunuşu
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: inset image card (absolute on md+, stacks on mobile) */}
      <div
        className={[
          "flex flex-col items-center gap-4 sm:gap-6",
          "mt-10 md:mt-0",
          "md:absolute md:right-12 md:top-28",
        ].join(" ")}
      >
        <div
          className="rounded-2xl overflow-hidden border border-white/70 
          bg-white/70 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.15)] 
          w-[78vw] max-w-[320px] h-[200px] sm:h-[220px] md:w-[260px] md:h-[220px]"
        >
          <Suspense fallback={<div className="w-full h-full bg-neutral-200" />}>
            <Canvas
              camera={{ position: [0, 0, 6], fov: 45 }}
              dpr={[1, 1.5]}
              className="absolute inset-0"
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[3, 5, 2]} intensity={1} />
              <Environment preset="city" />
              <Center>
                <RotatingModel
                  src="/Shawarma.glb"
                  isActive={true}
                  scale={1.2}
                  maxTilt={0.5}
                />
              </Center>
            </Canvas>
          </Suspense>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.05] tracking-tight">
          İSTANBUL
        </h1>
      </div>
    </section>
  );
}
