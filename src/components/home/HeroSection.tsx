'use client'

import Image from "next/image"
import type { CSSProperties, RefObject } from "react"
import { ArrowRightIcon, SparklesIcon, StarIcon } from "../icons"
import type { HeroHighlight } from "./types"
import { CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

const HERO_PRIMARY_COPY = {
  eyebrow: "İstanbul Piliç",
  headline: "Lezzetin Sanatla Buluştuğu Yer",
  subcopy:
    "Tutkuyla marine edilen piliçlerimiz, odun ateşinin sıcaklığı ve taze otların aromasıyla tabağınızda yeni bir İstanbul hikâyesi anlatır.",
}

type HeroSectionProps = {
  sectionRef?: RefObject<HTMLDivElement>
  parallaxStyle?: CSSProperties
  cardParallax?: (index: number) => CSSProperties
  heroVideoConfig?: { src: string; poster: string } | null
  prefersReducedMotion?: boolean
  onReserve?: () => void
}

export function HeroSection({
  sectionRef,
}: HeroSectionProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const target = 7
    let current = 0

    const next = () => {
      if (current < target) {
        current += 1
        setAnimating(true)
        setTimeout(() => {
          setCount(current)
          setAnimating(false)
        }, 200)
        setTimeout(next, 400)
      }
    }

    const timer = setTimeout(next, 500)
    return () => clearTimeout(timer)
  }, [isVisible])

  // Turkish headline words, kitchen vibe, similar lengths to original
  const headlineWords = [
    "ateşte",
    "ızgara",
    "piliç",
    "usta",
    "lezzet",
    "sofra",
  ]

  return (
    <section
      id="hero"
      data-theme="hero"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center px-4 pb-24 pt-28 sm:px-8 md:pt-32"
    >
      {/* Top-left kicker (keeps position; responsive size only) */}
      <h3 className={`text-white absolute left-4 sm:left-16 top-24 md:top-auto text-lg sm:text-xl md:text-2xl ${isVisible ? 'fade-up' : ''}`}>
        Lezzet <br /> Burada Başlar
      </h3>

      {/* Bottom gradient bar cluster (unchanged structure; responsive paddings) */}
      <div
        className="absolute bottom-0 flex w-full items-end pb-6 md:pb-8 bg-gradient-to-b from-transparent to-[#fbae73] px-4 sm:px-8 md:px-16"
      >
        <div className="space-y-2 md:space-y-3">
          <h5 className="text-white text-[10px] sm:text-xs">Ateşten Sofraya</h5>

          {/* headline with word-by-word slide-up */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl mb-0 uppercase leading-tight flex flex-col">
            <div className="flex flex-wrap gap-x-2">
              {headlineWords.slice(0, 3).map((word, i) => (
                <span
                  key={i}
                  className="word-slide inline-block"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {word}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-2 mt-1">
              {headlineWords.slice(3).map((word, i) => (
                <span
                  key={i + 3}
                  className="word-slide inline-block"
                  style={{ animationDelay: `${(i + 3) * 0.2}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
        </div>

        <div className="p-2.5 sm:p-3 bg-[#fbae73] rounded-full pr-4 sm:pr-5 text-xs sm:text-sm flex items-center gap-2.5 sm:gap-3 self-end">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center">
            <CheckCircle className="h-4 w-4 text-white" />
          </span>
          Hemen Rezervasyon Yap
        </div>
      </div>

      {/* Orders widget (same spot; responsive tweaks only) */}
      <div
        className={`absolute bottom-24 sm:bottom-28 bg-black rounded-md right-4 sm:right-8 md:right-16 p-3 sm:p-4 space-y-2 sm:space-y-3 ${isVisible ? 'fade-up' : ''
          }`}
      >
        <h5 className="text-[10px] sm:text-xs text-[#c0c0c0d3] leading-tight">
          Tamamlanan <br /> Sipariş
        </h5>

        <div className="text-white text-3xl sm:text-4xl flex items-end">
          <div className="digit-wrapper relative w-[0.7em] h-[1.1em] overflow-hidden">
            <span className={`digit ${animating ? 'digit-exit' : 'digit-enter'}`}>
              {count}
            </span>
          </div>
          k+
        </div>
      </div>
    </section>
  )
}
