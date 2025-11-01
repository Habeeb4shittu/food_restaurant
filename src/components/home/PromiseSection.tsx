"use client"

import type { RefObject } from "react"
import { GlobeIcon } from "lucide-react"

export function PromiseSection({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) {
  return (
    <section
      id="promise"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-24 text-white"
    >
      {/* top-left meta label (absolute on md+, flows on mobile) */}
      <div
        className="space-y-6 sm:space-y-8 font-medium text-neutral-300
                   w-full md:w-auto
                   md:absolute md:top-[20%] md:left-10
                   max-w-md md:max-w-none
                   px-1 md:px-0"
        data-animate="fade-in"
      >
        <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm tracking-wide">
          <GlobeIcon className="text-[#d46a34] w-4 h-4" />
          Dünya çapında lezzet
        </div>
        <h2 className="text-base sm:text-lg md:text-xl font-bold leading-tight mb-2 md:mb-6">
          <span className="text-[#d46a34]">İstanbul Piliç</span> sizi<br />başkalarının ulaşamadığı tatlara götürür
        </h2>
      </div>

      {/* main left copy (keeps original position on desktop) */}
      <div
        className="max-w-xl w-full
                   mt-8 md:mt-0
                   md:absolute md:top-[18%]"
        data-animate="slide-right"
      >
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-md">
          Çöl sıcaklığından dağ serinliğine, odun ateşinde pişen piliçlerimiz
          sizi her lokmada yolculuğa çıkarır. Bu yalnızca bir yemek değil;
          özgürlük, ateşin gücü ve sahici mutfak deneyimi.
        </p>
      </div>

      {/* right-side blurbs (absolute on md+, stacked spacing on mobile) */}
      <div
        className="text-right md:text-right
                   w-full md:w-auto
                   mt-10 md:mt-0
                   md:absolute md:right-10 md:top-16
                   h-auto md:h-full
                   flex md:flex-col items-end md:items-end justify-start md:justify-between
                   gap-6 md:gap-0
                   pb-0 md:pb-36 pt-0 md:pt-16
                   text-[11px] sm:text-xs md:text-sm font-medium space-y-0 md:space-y-6 text-neutral-300"
      >
        <p>Saf lezzet<br />ateşten sofraya</p>
        <p className="text-white font-semibold uppercase tracking-wide">
          Sınır yok<br />Taviz yok
        </p>
      </div>
    </section>
  )
}
