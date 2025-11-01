"use client"

import type { RefObject } from "react"

export function ContactSection({ sectionRef }: { sectionRef: RefObject<HTMLElement> }) {
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center text-center text-white overflow-hidden px-4 sm:px-6"
    >
      {/* Subheading */}
      <p
        className="text-xs sm:text-sm font-medium text-white mb-3 tracking-wide"
        data-animate="fade-in"
      >
        Lezzetin Ateşini Serbest Bırak
      </p>

      {/* Main Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-5xl leading-tight mb-8"
        data-animate="slide-up"
      >
        DOĞUŞTAN{" "}
        <br />
        LEZZET
      </h2>

      {/* CTA Button */}
      <button
        type="button"
        className="rounded-full border border-white/40 bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] backdrop-blur transition hover:bg-white/20"
        data-animate="fade-in"
      >
        Tadım Rezervasyonları Yakında
      </button>

      {/* Footer */}
      <footer
        className="absolute bottom-6 w-full px-4 sm:px-8 text-[0.75rem] text-neutral-400
                   flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-3 md:gap-0"
      >
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Kullanım Şartları</a>
          <a href="#" className="hover:text-white transition">Gizlilik Politikası</a>
        </div>
        <p className="text-neutral-500">
          © 2025 İstanbul Piliç Tüm hakları saklıdır
        </p>
      </footer>
    </section>
  )
}
