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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-6 sm:px-8">
      <nav className="pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/65 bg-white/85 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#2b2014] shadow-[0_25px_70px_rgba(38,26,14,0.25)] backdrop-blur-2xl">
        <Link
          href="#hero"
          className="flex items-center gap-3 text-xs font-semibold tracking-[0.5em] text-[#2b2014] transition-colors hover:text-[#5b4a2f]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-base font-bold text-[#2b2014] shadow-inner">
            <LeafIcon className="h-5 w-5" />
          </span>
          Verdant Atelier
        </Link>

        <div className="hidden items-center gap-4 sm:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.35em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b5b34] ${
                  isActive
                    ? "border-[#d7caa6] bg-white text-[#1f140b] shadow-sm"
                    : "border-transparent text-[#4e3d29] hover:-translate-y-0.5 hover:border-[#d7caa6] hover:bg-white/90 hover:text-[#1f140b]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={onReserve}
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-transparent bg-[#8ac27d] px-6 py-2 text-[11px] tracking-[0.4em] text-[#1f1c16] transition hover:-translate-y-0.5 hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b5b34]"
          >
            Reserve
            <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          id="floating-menu-trigger"
          aria-controls="floating-menu-panel"
          aria-expanded={isNavOpen}
          type="button"
          onClick={onToggleNav}
          className="flex cursor-pointer flex-col items-end gap-1 text-[10px] font-normal tracking-[0.45em] text-[#2b2014] transition-colors hover:text-[#5b4a2f] sm:hidden"
        >
          Menu
          <span className="h-px w-6 bg-current" />
        </button>
      </nav>

      <div
        id="floating-menu-panel"
        className={`pointer-events-auto sm:hidden ${
          isNavOpen ? "visible opacity-100" : "invisible opacity-0"
        } absolute top-[90px] flex w-full max-w-[320px] -translate-x-1/2 flex-col gap-3 rounded-3xl border border-white/70 bg-white/90 p-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2b2014] shadow-[0_25px_70px_rgba(38,26,14,0.25)] backdrop-blur-2xl transition-all duration-300 ease-out md:max-w-sm`}
        style={{ left: "calc(50%)" }}
      >
        <p className="text-[10px] font-semibold tracking-[0.5em] text-[#8b7a57]">Navigate</p>
        <div className="flex flex-col divide-y divide-white/50">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={`mobile-${link.id}`}
                href={`#${link.id}`}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between py-3 text-[11px] tracking-[0.4em] transition ${
                  isActive ? "text-[#1f140b]" : "text-[#4e3d29] hover:text-[#1f140b]"
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
          className="group flex items-center justify-between rounded-full bg-[#8ac27d] px-5 py-3 text-[11px] tracking-[0.4em] text-[#1f1c16] transition hover:bg-[#76b169]"
        >
          Reserve
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}
