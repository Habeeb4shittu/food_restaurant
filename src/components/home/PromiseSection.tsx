import Image from "next/image";

import { SparklesIcon } from "../icons";

type PromiseSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  highlights: string[];
};

export function PromiseSection({ sectionRef, highlights }: PromiseSectionProps) {
  return (
    <section
      id="promise"
      data-theme="promise"
      ref={sectionRef}
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#1e1a16] sm:px-8"
    >
      <div className="grid gap-10 rounded-[2.75rem] border border-white/60 bg-white/65 p-8 shadow-[0_50px_110px_rgba(28,22,16,0.18)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6" data-animate="slide-right">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70">
              <SparklesIcon className="h-4 w-4 text-[#8a7a54]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">Our Promise</p>
          </div>
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
            Rooted in sustainability, elevated through sensory storytelling.
          </h2>
          <p className="text-sm text-[#5c5137]">
            Verdant Atelier reimagines coastal harvests through low-waste methods, solar kitchens, and regenerative partnerships with local growers.
          </p>
          <ul className="grid gap-4 text-sm text-[#5c5137] sm:grid-cols-2">
            {highlights.map((item, index) => (
              <li
                key={item}
                className="rounded-[1.75rem] border border-white/55 bg-white/70 px-5 py-4"
                data-animate={index % 2 === 0 ? "slide-right" : "slide-left"}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-[#f2ead5]/70 to-[#d8c6a4]/50 p-8 text-[#1e1a16] shadow-[0_45px_90px_rgba(27,21,14,0.2)]" data-animate="slide-left">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7a6a47]">Signature Pairing</p>
            <h3 className="text-2xl font-semibold">Seared scallop with olive smoke veil</h3>
            <p className="text-sm text-[#5e533a]">
              Served beneath a glass cloche filled with citrus wood aroma, unveiled tableside for a theatre of scent and light.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"
              alt="Seared scallop with herb garnish"
              width={640}
              height={480}
              className="h-56 w-full rounded-[1.75rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
