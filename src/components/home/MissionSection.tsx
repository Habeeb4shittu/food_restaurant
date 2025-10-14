import type { RefObject } from "react";

import type { MissionDetail } from "./types";

type MissionSectionProps = {
  sectionRef: RefObject<HTMLElement>;
  details: MissionDetail[];
};

export function MissionSection({ sectionRef, details }: MissionSectionProps) {
  return (
    <section
      id="mission"
      data-theme="mission"
      ref={sectionRef}
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#1e1a16] sm:px-8"
    >
      <div
        className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 shadow-[0_45px_100px_rgba(25,20,14,0.17)] backdrop-blur-2xl"
        data-animate
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#877851]">Mission</p>
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
              Our mission is to orchestrate an edible gallery that celebrates terroir, craftsmanship, and community.
            </h2>
            <p className="text-sm text-[#5c5137]">
              Each evening is choreographed through multi-sensory pacing, from candlelit amuse-bouches to ember-roasted finales served amid whispers of citrus vapor.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/65 p-6 text-sm text-[#5c5137] shadow-inner"
            data-animate="slide-left"
          >
            {details.map((detail) => (
              <div key={detail.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#877851]">{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
