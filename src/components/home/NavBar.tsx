import Link from "next/link";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  LeafIcon,
} from "../icons";
import type { NavLink, SectionKey } from "./types";

type NavBarProps = {
  links: NavLink[];
  activeSection: SectionKey;
  isNavOpen: boolean;
  onToggleNav: () => void;
  onNavigate: () => void;
  onReserve: () => void;
};

export function NavBar({
  links,
  activeSection,
  isNavOpen,
  onToggleNav,
  onNavigate,
  onReserve,
}: NavBarProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-between px-4 pt-6 sm:px-8 md:px-12 lg:px-16">
      {/* Logo on the left */}
      <div className="pointer-events-auto">
        <Link
          href="#hero"
          className="flex items-center gap-3 rounded-full border border-[#ffd7d7]/70 bg-white/85 px-5 py-3 text-xs font-semibold tracking-[0.32em] text-[#2d1814] shadow-[0_25px_70px_rgba(123,18,25,0.18)] backdrop-blur-2xl transition-colors hover:text-[#c21c26]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-base font-bold text-[#0f7a38] shadow-inner">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-[0.9]">
            <span className="text-base font-bold lowercase tracking-[0.1em] text-[#e20613]">istanbul</span>
            <span className="flex items-center gap-2 text-sm font-semibold lowercase tracking-[0.3em] text-[#0f7a38]">
              <span className="h-px w-6 rounded-full bg-[#0f7a38]" aria-hidden />
              piliç
              <span className="h-px w-6 rounded-full bg-[#0f7a38]" aria-hidden />
            </span>
          </span>
        </Link>
      </div>

      {/* Menu dropdown on the right */}
      <div className="pointer-events-auto relative">
        <button
          id="floating-menu-trigger"
          aria-controls="floating-menu-panel"
          aria-expanded={isNavOpen}
          type="button"
          onClick={onToggleNav}
          className="flex cursor-pointer items-center gap-3 rounded-full border border-[#ffd7d7]/70 bg-white/85 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-[#2d1814] shadow-[0_25px_70px_rgba(123,18,25,0.18)] backdrop-blur-2xl transition-colors hover:text-[#c21c26]"
        >
          Menü
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${isNavOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          id="floating-menu-panel"
          className={`pointer-events-auto ${isNavOpen ? "visible opacity-100" : "invisible opacity-0"
            } absolute right-0 top-[calc(100%+12px)] flex w-[280px] flex-col gap-3 rounded-3xl border border-[#ffd7d7]/70 bg-white/92 p-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2d1814] shadow-[0_25px_70px_rgba(123,18,25,0.18)] backdrop-blur-2xl transition-all duration-300 ease-out sm:w-[320px]`}
        >
          <p className="text-[10px] font-semibold tracking-[0.5em] text-[#c21c26]">Gezin</p>
          <div className="flex flex-col divide-y divide-white/50">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between py-3 text-[11px] tracking-[0.4em] transition ${isActive ? "text-[#1b0e0c]" : "text-[#6b3b35] hover:text-[#1b0e0c]"
                    }`}
                >
                  {link.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition ${isActive ? "rotate-180" : "-rotate-90"}`}
                  />
                </a>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              onNavigate();
              onReserve();
            }}
            className="group flex items-center justify-between rounded-full bg-gradient-to-r from-[#0f7a38] via-[#1a9b49] to-[#7bd97f] px-5 py-3 text-[11px] tracking-[0.4em] text-white transition hover:shadow-[0_18px_45px_rgba(15,122,56,0.35)]"
          >
            Rezervasyon
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}