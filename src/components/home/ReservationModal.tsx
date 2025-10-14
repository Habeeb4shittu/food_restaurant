import { useCallback } from "react";
import type { MouseEvent } from "react";

import {
  ArrowRightIcon,
  ClockIcon,
  CloseIcon,
  LeafIcon,
  SparklesIcon,
} from "../icons";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {

  const handleBackdropClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) {
    return null;
  }

  return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-8 backdrop-blur-sm sm:px-6"
        onClick={handleBackdropClick}
      >
        <div
          className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/90 p-6 text-[#1f160c] shadow-[0_45px_110px_rgba(24,18,12,0.35)] backdrop-blur-3xl sm:p-10"
        >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#7a6238] shadow-sm">
              <SparklesIcon className="h-4 w-4 text-[#b28738]" /> Reserve
            </span>
            <div className="space-y-2">
              <h3 id="reservation-title" className="text-2xl font-semibold leading-snug text-[#1f160c] sm:text-3xl">
                Reserve your tasting
              </h3>
              <p className="text-sm text-[#5c5137] sm:max-w-sm">
                Select your evening and our concierge will confirm your bespoke menu pairing within the hour.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#e5d6b8] bg-white/85 text-[#6d5a3a] transition hover:bg-white"
            aria-label="Close reservation modal"
          >
            <CloseIcon className="h-4 w-4 transition group-hover:rotate-90" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/85 px-4 py-3 shadow-sm">
            <LeafIcon className="mt-0.5 h-5 w-5 text-[#3b5b34]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#897047]">Seasonal Pairing</p>
              <p className="text-sm text-[#5c5137]">Garden-to-table courses in peak season.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/55 bg-white/85 px-4 py-3 shadow-sm">
            <ClockIcon className="mt-0.5 h-5 w-5 text-[#b28738]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#897047]">Evening cadence</p>
              <p className="text-sm text-[#5c5137]">Eight courses · 2.5 hour dining journey.</p>
            </div>
          </div>
        </div>

        <div className="max-h-[min(80vh,640px)] overflow-y-auto rounded-[2rem] border border-white/65 bg-white/85 p-6 shadow-inner">
          <form className="grid gap-4 text-sm text-[#5c5137]" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Name
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/70 bg-white/90 px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Email
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/70 bg-white/90 px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                  placeholder="Email address"
                  type="email"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Date
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/70 bg-white/90 px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                  type="date"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Guests
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/70 bg-white/90 px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                  type="number"
                  min={1}
                  placeholder="2"
                />
              </label>
            </div>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
              Occasion
              <input
                className="h-11 rounded-full border border-[#d6c9a4]/70 bg-white/90 px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                placeholder="Celebration, anniversary, chef's table"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
              Notes
              <textarea
                rows={4}
                className="rounded-3xl border border-[#d6c9a4]/70 bg-white/90 px-4 py-3 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#3b5b34] focus:outline-none focus:ring-2 focus:ring-[#d5bb62]/60"
                placeholder="Share dietary notes, arrival time, or preferred sommelier pairings"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#867751]">We reply within 30 minutes during service hours.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-[#ffe7b8]/60 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_20px_55px_rgba(167,142,70,0.45)] transition hover:shadow-[0_25px_65px_rgba(167,142,70,0.55)]"
              >
                Confirm Reservation
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
