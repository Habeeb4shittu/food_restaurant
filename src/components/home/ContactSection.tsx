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
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-28 pt-16 text-[#2d1814] sm:px-8"
    >
      <div
        className="grid gap-10 rounded-[2.75rem] border border-white/70 bg-white/78 p-8 shadow-[0_50px_110px_rgba(123,18,25,0.22)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
        data-animate
      >
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">
            <SparklesIcon className="h-4 w-4 text-[#e20613]" /> İletişim
          </p>
          <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Samimi bir akşam için rezervasyon yapın</h2>
          <p className="text-sm text-[#5f3b35]">
            Davetinizi paylaşın; ekibimiz seçkin eşleşmeler ve İstanbul’un sıcak atmosferiyle size özel bir menü hazırlasın.
          </p>
          <div className="space-y-3 text-sm text-[#5f3b35]">
            {contactDetails.map((detail) => (
              <p key={detail.title} className="flex items-start gap-3 text-sm text-[#5f3b35]">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#ffc7c7]/40 bg-[#fff1f1]/85">
                  <detail.icon className="h-4 w-4 text-[#0f7a38]" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#c21c26]">{detail.title}</span>
                  {detail.description}
                </span>
              </p>
            ))}
            <a className="group inline-flex items-center gap-2 text-[#0f7a38] transition hover:text-[#0c5a2a]" href={contactCtas.phone.href}>
              <contactCtas.phone.icon className="h-4 w-4" />
              {contactCtas.phone.label}
              <ArrowRightIcon className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <a className="group inline-flex items-center gap-2 text-[#0f7a38] transition hover:text-[#0c5a2a]" href={contactCtas.email.href}>
              <contactCtas.email.icon className="h-4 w-4" />
              {contactCtas.email.label}
              <ArrowRightIcon className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
          </div>
          <button
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#0f7a38] via-[#1fb355] to-[#7bd97f] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:shadow-[0_20px_55px_rgba(15,122,56,0.35)]"
            type="button"
            onClick={onReserve}
          >
            Masa Ayırt
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
        <form className="grid gap-4 text-sm text-[#5f3b35]" data-animate="slide-left">
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            İsim
            <input
              className="h-12 rounded-full border border-[#ffc7c7]/60 bg-white/85 px-5 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none"
              placeholder="Adınız"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            E-posta
            <input
              className="h-12 rounded-full border border-[#ffc7c7]/60 bg-white/85 px-5 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none"
              placeholder="E-posta adresiniz"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Davet
            <input
              className="h-12 rounded-full border border-[#ffc7c7]/60 bg-white/85 px-5 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none"
              placeholder="Kutlama, yıldönümü, şef masası"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
            Notlar
            <textarea
              rows={4}
              className="rounded-3xl border border-[#ffc7c7]/60 bg-white/85 px-5 py-3 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none"
              placeholder="Beslenme tercihlerinizi, geliş saatini veya eşleştirme taleplerinizi yazın"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffd7d7]/60 bg-gradient-to-r from-[#e20613] via-[#f24a3a] to-[#ffb36b] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_55px_rgba(226,6,19,0.35)] transition hover:shadow-[0_25px_65px_rgba(226,6,19,0.45)]"
          >
            Gönder
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
