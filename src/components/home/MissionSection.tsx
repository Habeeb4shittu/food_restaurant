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
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#2d1814] sm:px-8"
    >
      <div
        className="rounded-[2.5rem] border border-white/65 bg-white/70 p-8 shadow-[0_45px_100px_rgba(123,18,25,0.18)] backdrop-blur-2xl"
        data-animate
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e20613]">Misyonumuz</p>
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
              Misyonumuz, terroir’i kutlayan, ustalığı sergileyen ve sofrada birliktelik oluşturan bir lezzet galerisi kurmak.
            </h2>
            <p className="text-sm text-[#5f3b35]">
              Her akşam; köz ateşinde mühürlenen tatlar, turunç esintili buharlar ve paylaşımı teşvik eden ritimler eşliğinde çok duyulu bir yolculuk olarak tasarlanıyor.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 rounded-[2rem] border border-white/65 bg-white/80 p-6 text-sm text-[#5f3b35] shadow-inner"
            data-animate="slide-left"
          >
            {details.map((detail) => (
              <div key={detail.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0f7a38]">{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
