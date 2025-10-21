"use client";

import Image from "next/image";
import type { RefObject } from "react";
import type { HeroHighlight } from "./types";

type HighlightsSectionProps = {
  sectionRef: RefObject<HTMLDivElement>;
  highlights: HeroHighlight[];
};

export function HighlightsSection({ sectionRef, highlights }: HighlightsSectionProps) {
  // split highlights into two stacks (bottom-left / bottom-right)
  const mid = Math.ceil(highlights.length / 2);
  const leftPile = highlights.slice(0, mid);
  const rightPile = highlights.slice(mid);

  return (
    <section
      id="highlights"
      data-theme="highlights"
      ref={sectionRef}
      className={[
        // full-viewport, keep center empty for bg video
        "relative min-h-[100svh] w-full",
        "grid place-items-center",
        "px-4 py-16 sm:px-8",
        "text-[#2d1814]",
      ].join(" ")}
    >
      {/* Invisible center spacer so the bg video stays visible */}
      <div className="pointer-events-none h-[52vmin] w-[52vmin] rounded-full lg:h-[58vmin] lg:w-[58vmin]" />

      {/* Corner layout (desktop). On mobile we show a stacked fallback below */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Top left: section heading */}
        <div className="pointer-events-auto absolute left-8 top-10 max-w-xl">
          <div
            className="rounded-[2rem] border border-white/65 bg-white/70 p-6 shadow-[0_35px_70px_rgba(123,18,25,0.14)] backdrop-blur-2xl"
            data-animate
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e20613]">
              Şefin Seçkisi
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-snug">
              Mevsimlik tabaklarda Anadolu yorumu
            </h2>
            <p className="mt-3 text-sm text-[#5f3b35] max-w-lg">
              Her tabak, taş fırın notalarıyla harmanlanan fermente soslar ve taze baharatlarla İstanbul
              ruhunu yansıtıyor.
            </p>
          </div>
        </div>

        {/* Top right: tiny blurb or CTA chips (keep it airy) */}
        <div className="pointer-events-auto absolute right-8 top-10 flex max-w-md flex-col gap-3">
          <div
            className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#c21c26] shadow ring-1 ring-white/60 backdrop-blur"
            data-animate
          >
            Fırından Sıcak
          </div>
          <div
            className="rounded-2xl bg-white/70 px-4 py-3 text-sm text-[#5f3b35] shadow ring-1 ring-white/60 backdrop-blur"
            data-animate
          >
            Günlük taze hamur, odun ateşi, sade iyilik.
          </div>
        </div>

        {/* Bottom left: first pile of highlight cards */}
        <div className="pointer-events-auto absolute bottom-10 left-8 flex max-w-md flex-col gap-6">
          {leftPile.map((highlight, index) => {
            const SpotlightIcon = highlight.icon;
            return (
              <article
                key={`L-${highlight.title}-${index}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-[0_35px_70px_rgba(123,18,25,0.14)] backdrop-blur-2xl"
                data-animate={index % 2 === 0 ? "slide-right" : "float"}
              >
                <div className="relative mb-4 h-36 w-full overflow-hidden rounded-[1.4rem] border border-white/60">
                  <Image
                    alt={highlight.title}
                    src={highlight.image}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b0d0d]/65 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#c21c26] shadow">
                    <SpotlightIcon className="h-4 w-4 text-[#0f7a38]" />
                    {highlight.tag}
                  </div>
                </div>
                <h3 className="text-base font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm text-[#5f3b35] line-clamp-3">{highlight.description}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom right: second pile of highlight cards */}
        <div className="pointer-events-auto absolute bottom-10 right-8 flex max-w-md flex-col gap-6">
          {rightPile.map((highlight, index) => {
            const SpotlightIcon = highlight.icon;
            return (
              <article
                key={`R-${highlight.title}-${index}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-[0_35px_70px_rgba(123,18,25,0.14)] backdrop-blur-2xl"
                data-animate={index % 2 === 0 ? "slide-left" : "float"}
              >
                <div className="relative mb-4 h-36 w-full overflow-hidden rounded-[1.4rem] border border-white/60">
                  <Image
                    alt={highlight.title}
                    src={highlight.image}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b0d0d]/65 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#c21c26] shadow">
                    <SpotlightIcon className="h-4 w-4 text-[#0f7a38]" />
                    {highlight.tag}
                  </div>
                </div>
                <h3 className="text-base font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm text-[#5f3b35] line-clamp-3">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Mobile/tablet fallback: simple grid so it doesn’t get weird */}
      <div className="lg:hidden w-full max-w-6xl">
        <div
          className="rounded-[2rem] border border-white/65 bg-white/70 p-6 shadow-[0_35px_70px_rgba(123,18,25,0.14)] backdrop-blur-2xl"
          data-animate
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e20613]">Şefin Seçkisi</p>
          <h2 className="mt-2 text-2xl font-semibold leading-snug">Mevsimlik tabaklarda Anadolu yorumu</h2>
          <p className="mt-3 text-sm text-[#5f3b35]">
            Her tabak, taş fırın notalarıyla harmanlanan fermente soslar ve taze baharatlarla İstanbul ruhunu yansıtıyor.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {highlights.map((highlight, index) => {
              const SpotlightIcon = highlight.icon;
              return (
                <article
                  key={`${highlight.title}-${index}`}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70 p-5 shadow-[0_25px_50px_rgba(123,18,25,0.12)] backdrop-blur-2xl"
                  data-animate={index % 3 === 0 ? "slide-right" : index % 3 === 1 ? "float" : "slide-left"}
                >
                  <div className="relative mb-4 h-40 w-full overflow-hidden rounded-[1.25rem] border border-white/60">
                    <Image
                      alt={highlight.title}
                      src={highlight.image}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b0d0d]/65 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#c21c26] shadow">
                      <SpotlightIcon className="h-4 w-4 text-[#0f7a38]" />
                      {highlight.tag}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-[#5f3b35]">{highlight.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
