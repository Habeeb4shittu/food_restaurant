"use client"

import type { RefObject } from "react"

export function MissionSection({ sectionRef }: { sectionRef: RefObject<HTMLElement> }) {
  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-center justify-center text-white overflow-hidden"
    >
      {/* Top-left copy (absolute on md+, flows on mobile) */}
      <div
        className="text-xs sm:text-sm font-medium leading-snug
                   px-4 md:px-0
                   md:absolute md:top-32 md:left-10"
        data-animate="fade-in"
      >
        <p>
          Her ateşte tam <br /> <span className="text-[#ff5500]">kontrol</span>
        </p>
      </div>

      {/* Left vertical small text (absolute on md+, inline helper on mobile) */}
      <div
        className="hidden md:block absolute bottom-16 left-10 rotate-[-90deg] origin-left text-[0.65rem] tracking-[0.25em] uppercase text-neutral-400"
        data-animate="slide-up"
      >
        Izgara Dengesi ve Lezzet
      </div>
      {/* mobile-only helper line to keep the feel without rotation */}
      <div className="md:hidden mt-6 text-[0.7rem] tracking-[0.22em] uppercase text-neutral-400" data-animate="slide-up">
        Izgara Dengesi ve Lezzet
      </div>

      {/* Center headline (absolute and half-width on md+, stacked on mobile) */}
      <div
        className="w-full px-4 md:px-0 text-center md:text-left
                   md:w-1/2 md:absolute md:left-[50%] md:top-[10%]
                   leading-[0.95]"
        data-animate="slide-up"
      >
        <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] tracking-tight">
          ODUN<br />
          ATEŞİ.<br />
          <span className="text-[#ff5500]">TAM</span><br />
          LEZZET.
        </h2>
      </div>
    </section>
  )
}
