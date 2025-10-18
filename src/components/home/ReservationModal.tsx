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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-8 backdrop-blur-sm sm:px-6"
        onClick={handleBackdropClick}
      >
        <div
          className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden rounded-[2.5rem] border border-white/75 bg-white/92 p-6 text-[#2d1814] shadow-[0_45px_110px_rgba(123,18,25,0.35)] backdrop-blur-3xl sm:p-10"
        >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#e20613] shadow-sm">
              <SparklesIcon className="h-4 w-4 text-[#0f7a38]" /> Rezervasyon
            </span>
            <div className="space-y-2">
              <h3 id="reservation-title" className="text-2xl font-semibold leading-snug text-[#2d1814] sm:text-3xl">
                Degüstasyon deneyiminizi ayırtın
              </h3>
              <p className="text-sm text-[#5f3b35] sm:max-w-sm">
                Tercih ettiğiniz tarihi paylaşın; ekibimiz kişiye özel menünüzü bir saat içinde onaylasın.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#ffd7d7] bg-white/92 text-[#c21c26] transition hover:bg-white"
            aria-label="Rezervasyon penceresini kapat"
          >
            <CloseIcon className="h-4 w-4 transition group-hover:rotate-90" />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-white/65 bg-white/90 px-4 py-3 shadow-sm">
            <LeafIcon className="mt-0.5 h-5 w-5 text-[#0f7a38]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0f7a38]">Mevsim uyumu</p>
              <p className="text-sm text-[#5f3b35]">Çiftlikten masaya uzanan taze hasat menüler.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/65 bg-white/90 px-4 py-3 shadow-sm">
            <ClockIcon className="mt-0.5 h-5 w-5 text-[#e20613]" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0f7a38]">Akşam ritmi</p>
              <p className="text-sm text-[#5f3b35]">Sekiz tabak · 2,5 saatlik gastronomi yolculuğu.</p>
            </div>
          </div>
        </div>

        <div className="max-h-[min(80vh,640px)] overflow-y-auto rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-inner">
          <form className="grid gap-4 text-sm text-[#5f3b35]" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                İsim
                <input
                  className="h-11 rounded-full border border-[#ffd7d7]/70 bg-white/95 px-4 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                  placeholder="Adınız"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                E-posta
                <input
                  className="h-11 rounded-full border border-[#ffd7d7]/70 bg-white/95 px-4 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                  placeholder="E-posta adresiniz"
                  type="email"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Tarih
                <input
                  className="h-11 rounded-full border border-[#ffd7d7]/70 bg-white/95 px-4 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                  type="date"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Kişi sayısı
                <input
                  className="h-11 rounded-full border border-[#ffd7d7]/70 bg-white/95 px-4 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                  type="number"
                  min={1}
                  placeholder="2"
                />
              </label>
            </div>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
              Davet
              <input
                className="h-11 rounded-full border border-[#ffd7d7]/70 bg-white/95 px-4 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                placeholder="Kutlama, yıldönümü, şef masası"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
              Notlar
              <textarea
                rows={4}
                className="rounded-3xl border border-[#ffd7d7]/70 bg-white/95 px-4 py-3 text-sm text-[#2d1814] placeholder:text-[#bb8a86] focus:border-[#0f7a38] focus:outline-none focus:ring-2 focus:ring-[#7bd97f]/50"
                placeholder="Beslenme tercihlerinizi, geliş saatini veya eşleştirme taleplerinizi yazın"
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#c21c26]">Servis saatlerinde 30 dakika içinde dönüş yapıyoruz.</p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-[#ffd7d7]/70 bg-gradient-to-r from-[#e20613] via-[#f24a3a] to-[#ffb36b] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_55px_rgba(226,6,19,0.35)] transition hover:shadow-[0_25px_65px_rgba(226,6,19,0.45)]"
              >
                Rezervasyonu Onayla
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
