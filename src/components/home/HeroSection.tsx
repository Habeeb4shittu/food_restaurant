import Image from "next/image";
import type { CSSProperties, RefObject } from "react";

import { ArrowRightIcon, SparklesIcon, StarIcon } from "../icons";
import type { HeroHighlight } from "./types";

const HERO_PRIMARY_COPY = {
  eyebrow: "İstanbul Piliç",
  headline: "Lezzetin Sanatla Buluştuğu Yer",
  subcopy:
    "Tutkuyla marine edilen piliçlerimiz, odun ateşinin sıcaklığı ve taze otların aromasıyla tabağınızda yeni bir İstanbul hikâyesi anlatır.",
};

type HeroSectionProps = {
  sectionRef: RefObject<HTMLDivElement>;
  highlights: HeroHighlight[];
  parallaxStyle: CSSProperties;
  glowParallax: (multiplier: number, depth: number) => CSSProperties;
  cardParallax: (index: number) => CSSProperties;
  heroVideoConfig: { src: string; poster: string } | null;
  prefersReducedMotion: boolean;
  onReserve: () => void;
};

export function HeroSection({
  sectionRef,
  highlights,
  parallaxStyle,
  glowParallax,
  cardParallax,
  heroVideoConfig,
  prefersReducedMotion,
  onReserve,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      data-theme="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center px-4 pb-24 pt-32 sm:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#2b0d0d]/55 via-[#1c150e]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[40vh] bg-gradient-to-t from-[#220808]/65 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-12 text-center text-white sm:gap-14">
        <div className="flex flex-col items-center gap-4" data-animate>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-white/85">
            <StarIcon className="h-4 w-4 text-white/75" />
            {HERO_PRIMARY_COPY.eyebrow}
          </span>
          <h1 className="text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-white">
            {HERO_PRIMARY_COPY.headline}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            {HERO_PRIMARY_COPY.subcopy}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4" data-animate="slide-left">
          <a
            href="#highlights"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f7a38] via-[#1fb355] to-[#7bd97f] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-white shadow-[0_25px_60px_rgba(15,122,56,0.35)] transition hover:shadow-[0_28px_70px_rgba(15,122,56,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f7a38]"
          >
            Menümüzü Keşfedin
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex items-center gap-3 rounded-full border border-white/35 bg-[#2b0d0d]/70 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-white transition hover:bg-[#420f11]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            Bir Akşam Ayırtın
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative flex w-full max-w-4xl flex-col items-center gap-8">
          <div className="hero-glow hero-glow--one" style={glowParallax(0.4, 18)} aria-hidden />
          <div className="hero-glow hero-glow--two" style={glowParallax(-0.28, 14)} aria-hidden />
          <div className="hero-portal" style={parallaxStyle}>
            {heroVideoConfig && !prefersReducedMotion ? (
              <video
                className="absolute inset-0 h-[20%] w-[20%] object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={heroVideoConfig.poster}
              >
                <source src={heroVideoConfig.src} type="video/mp4" />
              </video>
            ) : heroVideoConfig ? (
              <Image
                alt="Şef tabak hazırlıyor"
                src={heroVideoConfig.poster}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 420px"
              />
            ) : null}
            <div className="hero-portal__halo" aria-hidden />
          </div>

          <div className="w-full rounded-[2.5rem] border border-white/35 bg-white/12 p-6 shadow-[0_35px_90px_rgba(10,0,0,0.35)] backdrop-blur-3xl" data-animate="float">
            <div className="flex items-center justify-between gap-4 pb-4 text-left text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/85">
              <span className="inline-flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-white/75" /> Şefin Vurgusu
              </span>
              <span className="hidden text-white/65 sm:inline">Şef tadımı ön izlemesi</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight, index) => {
                const SpotlightIcon = highlight.icon;

                return (
                  <li
                    key={highlight.title}
                    className="relative flex flex-col gap-3 rounded-3xl border border-white/35 bg-white/18 p-4 text-left shadow-[0_25px_60px_rgba(10,0,0,0.25)] transition hover:bg-white/24"
                    style={{
                      ...cardParallax(index),
                      ...(highlight.accent
                        ? ({ "--spotlight-accent": highlight.accent } as CSSProperties)
                        : {}),
                    }}
                  >
                    <div className="relative h-28 overflow-hidden rounded-2xl border border-white/30">
                      <Image
                        alt={highlight.title}
                        src={highlight.image}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 45vw, 220px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0404]/65 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-md">
                        <SpotlightIcon className="h-3.5 w-3.5" />
                        {highlight.tag}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                        {highlight.title}
                      </p>
                      <p className="text-xs leading-relaxed text-white/75">
                        {highlight.description}
                      </p>
                    </div>
                    <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
