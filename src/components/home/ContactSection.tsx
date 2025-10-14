import type { ComponentType, RefObject, SVGProps } from "react";

import { ArrowRightIcon, SparklesIcon } from "../icons";
import type { ContactDetail } from "./types";

type ContactCtas = {
  phone: { href: string; label: string; icon: ComponentType<SVGProps<SVGSVGElement>> };
  email: { href: string; label: string; icon: ComponentType<SVGProps<SVGSVGElement>> };
};

type ContactSectionProps = {
  sectionRef: RefObject<HTMLElement>;
  contactDetails: ContactDetail[];
  contactCtas: ContactCtas;
  onReserve: () => void;
};

export function ContactSection({ sectionRef, contactDetails, contactCtas, onReserve }: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-theme="contact"
      ref={sectionRef}
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-28 pt-16 text-[#1e1a16] sm:px-8"
    >
      <div
        className="grid gap-10 rounded-[2.75rem] border border-white/65 bg-white/70 p-8 shadow-[0_50px_110px_rgba(24,18,12,0.2)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
        data-animate
      >
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">
            <SparklesIcon className="h-4 w-4 text-[#b28738]" /> Contact
          </p>
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Reserve an intimate seating</h2>
          <p className="text-sm text-[#5c5137]">
            Share your occasion and our hospitality team will create a tailored tasting with curated wine pairings and ambient design.
          </p>
          <div className="space-y-3 text-sm text-[#5c5137]">
            {contactDetails.map((detail) => (
              <p key={detail.title} className="flex items-start gap-3 text-sm text-[#5c5137]">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70">
                  <detail.icon className="h-4 w-4 text-[#405e36]" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]">{detail.title}</span>
                  {detail.description}
                </span>
              </p>
            ))}
            <a className="group inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]" href={contactCtas.phone.href}>
              <contactCtas.phone.icon className="h-4 w-4" />
              {contactCtas.phone.label}
              <ArrowRightIcon className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <a className="group inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]" href={contactCtas.email.href}>
              <contactCtas.email.icon className="h-4 w-4" />
              {contactCtas.email.label}
              <ArrowRightIcon className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          </div>
          <button
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#8ac27d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169]"
            type="button"
            onClick={onReserve}
          >
            Reserve a Table
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
        <form className="grid gap-4 text-sm text-[#5c5137]" data-animate="slide-left">
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Name
            <input
              className="h-12 rounded-full border border-[#d6c9a4]/60 bg-white/80 px-5 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Email
            <input
              className="h-12 rounded-full border border-[#d6c9a4]/60 bg-white/80 px-5 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
              placeholder="Your email"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Occasion
            <input
              className="h-12 rounded-full border border-[#d6c9a4]/60 bg-white/80 px-5 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
              placeholder="Celebration, anniversary, chef's table"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Notes
            <textarea
              rows={4}
              className="rounded-3xl border border-[#d6c9a4]/60 bg-white/80 px-5 py-3 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
              placeholder="Share dietary notes, arrival time, or preferred sommelier pairings"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffe7b8]/60 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_20px_55px_rgba(167,142,70,0.45)] transition hover:shadow-[0_25px_65px_rgba(167,142,70,0.55)]"
          >
            Send Inquiry
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
