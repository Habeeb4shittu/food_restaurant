"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ThemeKey = "hero" | "highlights" | "promise" | "mission" | "contact";

type IconProps = React.SVGProps<SVGSVGElement>;

const backgroundThemes: Record<ThemeKey, { gradient: string; vignette: string }> = {
  hero: {
    gradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(253, 249, 241, 0.95) 0%, rgba(242, 233, 219, 0.94) 45%, rgba(211, 204, 190, 0.92) 100%)",
    vignette:
      "radial-gradient(circle at 80% 80%, rgba(52, 41, 24, 0.25), transparent 55%), radial-gradient(circle at 10% 10%, rgba(184, 167, 120, 0.22), transparent 60%)",
  },
  highlights: {
    gradient:
      "radial-gradient(125% 125% at 30% 10%, rgba(248, 245, 238, 0.96), rgba(232, 223, 206, 0.94) 48%, rgba(188, 178, 151, 0.92) 100%)",
    vignette:
      "radial-gradient(circle at 90% 20%, rgba(90, 69, 38, 0.28), transparent 58%), radial-gradient(circle at 10% 80%, rgba(166, 134, 82, 0.24), transparent 55%)",
  },
  promise: {
    gradient:
      "radial-gradient(120% 140% at 70% 20%, rgba(248, 240, 227, 0.98), rgba(224, 214, 190, 0.94) 52%, rgba(190, 177, 150, 0.9) 100%)",
    vignette:
      "radial-gradient(circle at 5% 15%, rgba(148, 129, 87, 0.2), transparent 50%), radial-gradient(circle at 90% 90%, rgba(60, 46, 29, 0.32), transparent 60%)",
  },
  mission: {
    gradient:
      "radial-gradient(120% 130% at 15% 85%, rgba(245, 236, 223, 0.98), rgba(219, 205, 181, 0.92) 50%, rgba(176, 158, 127, 0.9) 100%)",
    vignette:
      "radial-gradient(circle at 80% 10%, rgba(74, 58, 37, 0.28), transparent 55%), radial-gradient(circle at 20% 40%, rgba(171, 141, 86, 0.26), transparent 58%)",
  },
  contact: {
    gradient:
      "radial-gradient(130% 130% at 80% 20%, rgba(247, 238, 225, 0.98), rgba(213, 199, 172, 0.92) 52%, rgba(162, 138, 96, 0.92) 100%)",
    vignette:
      "radial-gradient(circle at 15% 15%, rgba(97, 73, 43, 0.24), transparent 55%), radial-gradient(circle at 85% 85%, rgba(42, 32, 20, 0.32), transparent 60%)",
  },
};

const sectionOrder: ThemeKey[] = ["hero", "highlights", "promise", "mission", "contact"];

const heroFeatures = [
  {
    title: "Charred Leek Crown",
    copy: "Spring leeks, smoked beurre blanc, toasted hazelnut praline.",
  },
  {
    title: "Amber Honey Glaze",
    copy: "Wildflower honey kissed with bergamot and chamomile steam.",
  },
  {
    title: "Olive Oil Emulsion",
    copy: "Early-harvest oil aerated with citrus vapor and sea salt.",
  },
];

const navLinks = [
  { href: "#highlights", label: "Highlights" },
  { href: "#promise", label: "Our Promise" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

export function IconCaretDown(props: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="m8 5 11 7-11 7V5Z" />
    </svg>
  );
}

export default function GreenMotiveInspiredHero() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [activeTheme, setActiveTheme] = useState(backgroundThemes.hero);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 18;
      const offsetY = (event.clientY / innerHeight - 0.5) * 10;
      setParallax({ x: offsetX, y: offsetY });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]")).filter((section) =>
      sectionOrder.includes(section.dataset.theme as ThemeKey),
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const nextKey = (visible[0].target.getAttribute("data-theme") || "hero") as ThemeKey;
        setActiveTheme(backgroundThemes[nextKey]);
      },
      { threshold: [0.35, 0.6, 0.8], rootMargin: "-15% 0px -25%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNavOpen) return;

    const handleOutside = (event: PointerEvent) => {
      const trigger = document.getElementById("floating-menu-trigger");
      const dropdown = document.getElementById("floating-menu-panel");
      if (!trigger || !dropdown) return;
      if (trigger.contains(event.target as Node) || dropdown.contains(event.target as Node)) {
        return;
      }

      setIsNavOpen(false);
    };

    window.addEventListener("pointerdown", handleOutside);
    return () => window.removeEventListener("pointerdown", handleOutside);
  }, [isNavOpen]);

  const parallaxStyle = useMemo(
    () => ({
      transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
    }),
    [parallax],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f4ec] text-[#1e1a16]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundImage: `${activeTheme.gradient}, ${activeTheme.vignette}` }}
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.32),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.25),transparent_55%)] opacity-90 mix-blend-screen"
      />

      <section
        id="hero"
        data-theme="hero"
        className="relative isolate flex min-h-screen items-center justify-center px-4 pb-16 pt-28 sm:px-8"
      >
        <div className="absolute inset-0 -z-30 overflow-hidden rounded-[3.5rem] border border-white/40 bg-white/40 shadow-[0_60px_120px_rgba(25,20,12,0.25)] backdrop-blur-3xl" />
        <video
          aria-hidden
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-40 h-full w-full object-cover opacity-55"
          poster="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-slow-drizzle-over-gourmet-plating-2312/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/45 via-black/25 to-transparent" />

        <div className="relative z-10 flex w-full max-w-6xl flex-col gap-12 rounded-[2.75rem] border border-white/40 bg-white/55 p-6 shadow-[0_50px_120px_rgba(25,24,20,0.25)] backdrop-blur-3xl sm:p-10 lg:p-16">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-white/85 sm:text-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/25 text-base font-bold text-white shadow-inner">
                <span className="sr-only">Verdant Atelier</span>
                <svg
                  aria-hidden
                  viewBox="0 0 32 32"
                  className="h-6 w-6 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                >
                  <path d="M16 5c-2.167 2.333-3.917 4.833-5.25 7.5S8.667 18.167 8 22c2.333-.667 4.417-1.667 6.25-3s3.417-2.833 4.75-4.5" />
                  <path d="M18 8.5c1.167 1.333 2 2.833 2.5 4.5s.833 3.917 1 6.5" />
                </svg>
              </span>
              Verdant Atelier
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <button
                id="floating-menu-trigger"
                type="button"
                onClick={() => setIsNavOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Menu
                <IconCaretDown className={`h-4 w-4 transition ${isNavOpen ? "rotate-180" : ""}`} />
              </button>
              <Link
                href="#"
                className="rounded-full border border-white/35 bg-[#0b120e]/70 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#152019]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              >
                Discover
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-[#ffedc2]/40 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_15px_45px_rgba(167,142,70,0.4)] transition hover:shadow-[0_20px_55px_rgba(167,142,70,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffefce]"
              >
                Reserve
              </Link>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col gap-8 text-white">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/80">
                  Project Open
                </span>
                <h1 className="text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Where Flavor Meets Art
                </h1>
                <p className="max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                  Crafted with passion, plated with precision. Slow-dripped infusions, heritage grains, and luminous finishing oils compose the Verdant Atelier tasting experience.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Explore Our Menu
                  <IconPlay className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  Follow the craft
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-sm flex-col gap-6">
              <div
                className="relative aspect-square overflow-hidden rounded-full border border-white/30 bg-white/10 shadow-[0_45px_90px_rgba(20,14,8,0.45)] backdrop-blur-2xl"
                style={parallaxStyle}
              >
                <video
                  aria-hidden
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                  poster="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-doughnut-of-herbs-9980/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
              </div>

              <ul className="grid gap-3">
                {heroFeatures.map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-3 rounded-[1.5rem] border border-white/25 bg-white/12 px-4 py-3 text-white/90 backdrop-blur-xl transition hover:bg-white/18"
                  >
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-white/40 to-white" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em]">{feature.title}</p>
                      <p className="text-xs text-white/75">{feature.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          id="floating-menu-panel"
          className={`absolute right-12 top-24 z-20 w-56 origin-top rounded-3xl border border-white/30 bg-white/15 p-4 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_35px_75px_rgba(18,16,13,0.35)] backdrop-blur-2xl transition-all duration-300 sm:block ${
            isNavOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/0 px-4 py-2 text-left text-[11px] tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                onClick={() => setIsNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section
        id="highlights"
        data-theme="highlights"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-24 text-[#1e1a16] sm:px-8"
      >
        <div className="rounded-[2.5rem] border border-white/60 bg-white/65 p-8 shadow-[0_45px_90px_rgba(30,24,16,0.15)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#857752]">Chef&rsquo;s Curation</p>
              <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Rotating seasonal compositions</h2>
            </div>
            <p className="max-w-xl text-sm text-[#574d37]">
              Each tasting course explores slow-fermented bases, gilded finishes, and botanicals balanced with warm citrus vapor.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {heroFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 p-6 shadow-[0_30px_65px_rgba(30,24,15,0.12)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#f1e8d8]/30 opacity-0 transition group-hover:opacity-100" />
                <h3 className="relative text-lg font-semibold text-[#1e1a16]">{feature.title}</h3>
                <p className="relative mt-2 text-sm text-[#5e533a]">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="promise"
        data-theme="promise"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#1e1a16] sm:px-8"
      >
        <div className="grid gap-10 rounded-[2.75rem] border border-white/60 bg-white/65 p-8 shadow-[0_50px_110px_rgba(28,22,16,0.18)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70" />
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">Our Promise</p>
            </div>
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
              Rooted in sustainability, elevated through sensory storytelling.
            </h2>
            <p className="text-sm text-[#5c5137]">
              Verdant Atelier reimagines coastal harvests through low-waste methods, solar kitchens, and regenerative partnerships with local growers.
            </p>
            <ul className="grid gap-4 text-sm text-[#5c5137] sm:grid-cols-2">
              <li className="rounded-[1.75rem] border border-white/55 bg-white/70 px-5 py-4">House-fermented infusions & botanical steam</li>
              <li className="rounded-[1.75rem] border border-white/55 bg-white/70 px-5 py-4">Electrostatic seasoning for feather-light finishes</li>
              <li className="rounded-[1.75rem] border border-white/55 bg-white/70 px-5 py-4">Partnerships with biodynamic farms & foragers</li>
              <li className="rounded-[1.75rem] border border-white/55 bg-white/70 px-5 py-4">Immersive service choreography & sensory pacing</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-[#f2ead5]/70 to-[#d8c6a4]/50 p-8 text-[#1e1a16] shadow-[0_45px_90px_rgba(27,21,14,0.2)]">
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
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="mission"
        data-theme="mission"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 text-[#1e1a16] sm:px-8"
      >
        <div className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 shadow-[0_45px_100px_rgba(25,20,14,0.17)] backdrop-blur-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#877851]">Mission</p>
              <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">
                Our mission is to orchestrate an edible gallery that celebrates terroir, craftsmanship, and community.
              </h2>
              <p className="text-sm text-[#5c5137]">
                Each evening is choreographed through multi-sensory pacing, from candlelit amuse-bouches to ember-roasted finales served amid whispers of citrus vapor.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/65 p-6 text-sm text-[#5c5137] shadow-inner">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#877851]">Tasting cadence</p>
                <p>Eight-course degustation, 2.5 hours</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#877851]">Soundscape</p>
                <p>Analog jazz pressings curated nightly</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#877851]">Studio garden</p>
                <p>Greenhouse-grown herbs harvested on demand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-theme="contact"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-28 pt-16 text-[#1e1a16] sm:px-8"
      >
        <div className="grid gap-10 rounded-[2.75rem] border border-white/65 bg-white/70 p-8 shadow-[0_50px_110px_rgba(24,18,12,0.2)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">Contact</p>
            <h2 className="text-3xl font-semibold leading-snug sm:text-4xl">Reserve an intimate seating</h2>
            <p className="text-sm text-[#5c5137]">
              Share your occasion and our hospitality team will create a tailored tasting with curated wine pairings and ambient design.
            </p>
            <div className="space-y-3 text-sm text-[#5c5137]">
              <p className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70" />
                214 Grove Street · Portland, Maine
              </p>
              <p className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70" />
                Wednesday – Sunday · 5pm – late
              </p>
              <a
                href="tel:+12075550123"
                className="inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]"
              >
                +1 (207) 555-0123
              </a>
              <a
                href="mailto:hello@verdantatelier.com"
                className="inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]"
              >
                hello@verdantatelier.com
              </a>
            </div>
          </div>
          <form className="grid gap-4 text-sm text-[#5c5137]">
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
                placeholder="Celebration, tasting, private chef"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
              Message
              <textarea
                rows={4}
                className="rounded-3xl border border-[#d6c9a4]/60 bg-white/80 px-5 py-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                placeholder="Share party size, dietary notes, or inspiration"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-[#ffe7b8]/50 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_20px_55px_rgba(167,142,70,0.45)] transition hover:shadow-[0_25px_65px_rgba(167,142,70,0.55)]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
