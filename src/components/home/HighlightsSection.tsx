import Image from "next/image";
import type { RefObject } from "react";

import type { HeroHighlight } from "./types";

type HighlightsSectionProps = {
  sectionRef: RefObject<HTMLElement>;
  highlights: HeroHighlight[];
};

export function HighlightsSection({ sectionRef, highlights }: HighlightsSectionProps) {
  return (
    <section
      id="highlights"
      data-theme="highlights"
      ref={sectionRef}
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-24 text-[#1e1a16] sm:px-8"
    >
      <div
        className="rounded-[2.5rem] border border-white/60 bg-white/65 p-8 shadow-[0_45px_90px_rgba(30,24,16,0.15)] backdrop-blur-2xl"
        data-animate
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#857752]">Chef&rsquo;s Curation</p>
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Rotating seasonal compositions</h2>
          </div>
          <p className="max-w-xl text-sm text-[#574d37]">
            Each tasting course explores slow-fermented bases, gilded finishes, and botanicals balanced with warm citrus vapor.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const SpotlightIcon = highlight.icon;

            return (
              <article
                key={`${highlight.title}-${index}`}
                className="group relative overflow-hidden rounded-[2rem] border border-white/55 bg-white/65 p-6 shadow-[0_35px_70px_rgba(30,24,15,0.14)] backdrop-blur-2xl"
                data-animate={index === 0 ? "slide-right" : index === 1 ? "float" : "slide-left"}
              >
                <div className="relative mb-5 overflow-hidden rounded-[1.75rem] border border-white/60">
                  <Image
                    alt={highlight.title}
                    src={highlight.image}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c150d]/65 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#5a4c32] shadow-lg">
                    <SpotlightIcon className="h-4 w-4 text-[#b28738]" />
                    {highlight.tag}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1e1a16]">{highlight.title}</h3>
                <p className="mt-3 text-sm text-[#5e533a]">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
