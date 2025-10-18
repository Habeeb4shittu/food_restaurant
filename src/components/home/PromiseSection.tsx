import Image from "next/image";
import type { RefObject } from "react";

import { SparklesIcon } from "../icons";

type PromiseSectionProps = {
  sectionRef: RefObject<HTMLDivElement>;
  highlights: string[];
};

export function PromiseSection({ sectionRef, highlights }: PromiseSectionProps) {
  return (
    <section
      id="promise"
      data-theme="promise"
      ref={sectionRef}
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#2d1814] sm:px-8"
    >
      <div className="grid gap-10 rounded-[2.75rem] border border-white/65 bg-white/72 p-8 shadow-[0_50px_110px_rgba(123,18,25,0.2)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-6" data-animate="slide-right">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ffc7c7]/40 bg-[#fff1f1]/80">
              <SparklesIcon className="h-4 w-4 text-[#e20613]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0f7a38]">Sözümüz</p>
          </div>
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
            Sürdürülebilir üretim, İstanbul ruhuyla yükselen servis.
          </h2>
          <p className="text-sm text-[#5f3b35]">
            İstanbul Piliç, yerel çiftliklerle kurduğu bağ ve israfı azaltan mutfak ritüelleriyle Anadolu’nun lezzetini şehrin kalbine taşıyor.
          </p>
          <ul className="grid gap-4 text-sm text-[#5f3b35] sm:grid-cols-2">
            {highlights.map((item, index) => (
              <li
                key={item}
                className="rounded-[1.75rem] border border-white/65 bg-white/80 px-5 py-4"
                data-animate={index % 2 === 0 ? "slide-right" : "slide-left"}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/65 bg-gradient-to-br from-[#fff0f0]/75 to-[#e0f3dd]/55 p-8 text-[#2d1814] shadow-[0_45px_90px_rgba(123,18,25,0.22)]" data-animate="slide-left">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#e20613]">İmza Eşleşme</p>
            <h3 className="text-2xl font-semibold">Fesleğenli Piliç Lokması</h3>
            <p className="text-sm text-[#5f3b35]">
              Bakır tavada karamelize edilen piliç lokmaları, narenciye dumanı ve taze fesleğen köpüğü eşliğinde masada açığa çıkar.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1512058564366-c9e2c8c7ed3c?auto=format&fit=crop&w=900&q=80"
              alt="Fesleğenle süslenmiş piliç lokması"
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
