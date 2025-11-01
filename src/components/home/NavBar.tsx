import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  LeafIcon,
} from "../icons";
import { MenuIcon } from "lucide-react";
import type { NavLink, SectionKey } from "./types";

type NavBarProps = {
  links: NavLink[];
  activeSection: SectionKey;
  isNavOpen: boolean;
  onToggleNav: () => void;
  onNavigate: () => void;
  onReserve: () => void;
  darkMode?: boolean;
};

export function NavBar({
  links,
  activeSection,
  isNavOpen,
  onToggleNav,
  onNavigate,
  onReserve,
  darkMode = false,
}: NavBarProps) {
  // Close mobile panel on outside click / Esc (no impact on desktop layout)
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!isNavOpen) return;
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        triggerRef.current &&
        !triggerRef.current.contains(t)
      ) {
        onToggleNav();
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape" && isNavOpen) onToggleNav();
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [isNavOpen, onToggleNav]);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-between px-3 sm:px-6 md:px-10 lg:px-16 pt-4 sm:pt-6 transition-colors duration-500 ${darkMode ? "text-white" : "text-[#2d1814]"
        }`}
    >
      {/* Left cluster: Logo + Menu (unchanged structure) */}
      <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
        <Link
          href="#hero"
          className={`flex items-center gap-3 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.32em] backdrop-blur-2xl transition-colors ${darkMode
              ? "text-white bg-white/10 hover:text-[#ff5500]"
              : "text-[#2d1814] bg-white/90 hover:text-[#c21c26]"
            }`}
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-sm sm:text-base font-bold text-[#0f7a38] shadow-inner">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-[0.9]">
            <span
              className={`text-sm sm:text-base font-bold lowercase tracking-[0.1em] transition-colors ${darkMode ? "text-white" : " text-black"
                }`}
            >
              istanbul
            </span>
            <span
              className={`flex items-center gap-2 text-[11px] sm:text-sm font-semibold lowercase tracking-[0.3em] transition-colors ${darkMode ? "text-white" : " text-black"
                }`}
            >
              <span
                className={`h-px w-4 sm:w-6 rounded-full ${darkMode ? "bg-white/80" : "bg-black"
                  }`}
                aria-hidden
              />
              piliç
              <span
                className={`h-px w-4 sm:w-6 rounded-full ${darkMode ? "bg-white/80" : "bg-black"
                  }`}
                aria-hidden
              />
            </span>
          </span>
        </Link>

        {/* Menu dropdown trigger (same spot, just better tap target on mobile) */}
        <div className="pointer-events-auto relative">
          <button
            id="floating-menu-trigger"
            ref={triggerRef}
            aria-controls="floating-menu-panel"
            aria-expanded={isNavOpen}
            type="button"
            onClick={onToggleNav}
            className={`flex cursor-pointer items-center gap-2 sm:gap-3 rounded-full px-2.5 py-2 sm:px-3 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.38em] sm:tracking-[0.45em] transition-colors ${darkMode ? "text-white" : " text-black"
              }`}
          >
            <div
              className={`h-9 w-9 sm:h-8 sm:w-8 rounded-full flex items-center justify-center transition-colors ${darkMode ? "bg-white" : " bg-black"
                }`}
            >
              <MenuIcon color={darkMode ? "black" : "#c0c0c0"} size={16} />
            </div>
            <span className="hidden xs:inline">Menü</span>
            <span className="sr-only">Toggle menu</span>
          </button>

          {/* Floating menu panel (same markup, responsive width/animation only) */}
          <div
            id="floating-menu-panel"
            ref={panelRef}
            className={`pointer-events-auto ${isNavOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1.5"
              } absolute right-0 top-[calc(100%+10px)] sm:top-[calc(100%+12px)] flex w-[88vw] max-w-[320px] sm:w-[320px] flex-col gap-3 rounded-3xl border border-[#ffd7d7]/70 bg-white/92 p-4 sm:p-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] sm:tracking-[0.35em] text-[#2d1814] shadow-[0_25px_70px_rgba(123,18,25,0.18)] backdrop-blur-2xl transition-all duration-200 ease-out`}
          >
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.5em] text-[#c21c26]">Gezin</p>
            <div className="flex flex-col divide-y divide-white/50">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] transition ${isActive
                        ? "text-[#1b0e0c]"
                        : "text-[#6b3b35] hover:text-[#1b0e0c]"
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
              className="group flex items-center justify-between rounded-full bg-gradient-to-r from-[#0f7a38] via-[#1a9b49] to-[#7bd97f] px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[11px] tracking-[0.36em] sm:tracking-[0.4em] text-white transition hover:shadow-[0_18px_45px_rgba(15,122,56,0.35)]"
            >
              Rezervasyon
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right cluster: Info link + CTA (unchanged positions) */}
      <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
        <Link
          href={"#"}
          className={`hidden md:inline font-extralight text-sm text-[#000000bb] underline transition-colors ${darkMode ? "text-white" : " text-black"
            }`}
        >
          New recipes available soon
        </Link>

        <button
          className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] sm:text-[9px] font-medium tracking-[0.28em] sm:tracking-[0.32em] shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-colors ${darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          onClick={() => {
            onNavigate();
            onReserve();
          }}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Order Now</span>
          <span className="sm:hidden">Order</span>
        </button>
      </div>
    </header>
  );
}
