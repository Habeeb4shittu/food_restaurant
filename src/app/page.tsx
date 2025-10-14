"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type SectionKey = "hero" | "highlights" | "promise" | "mission" | "contact";

type IconProps = React.SVGProps<SVGSVGElement>;

const navLinks: { id: SectionKey; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "promise", label: "Promise" },
  { id: "mission", label: "Mission" },
  { id: "contact", label: "Contact" },
];

const backgroundThemes: Record<SectionKey, { gradient: string; vignette: string }> = {
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

const heroHighlights = [
  {
    title: "Fire-Roasted Langoustine",
    description:
      "Brushed with smoked beurre monté, fennel pollen, and charred Meyer lemon pearls.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Velvet Truffle Cappelletti",
    description:
      "Hand-folded pasta in parmesan brodo, finished with aged balsamic and porcini oil.",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Amber Patisserie Tableau",
    description:
      "Caramelia mousse, brûléed figs, and toasted pistachio praline in warm candlelight.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=640&q=80",
  },
];

const promiseHighlights = [
  "House-fermented infusions & botanical steam",
  "Electrostatic seasoning for feather-light finishes",
  "Partnerships with biodynamic farms & foragers",
  "Immersive service choreography & sensory pacing",
];

const missionDetails = [
  {
    label: "Tasting cadence",
    value: "Eight-course degustation, 2.5 hours",
  },
  {
    label: "Soundscape",
    value: "Analog jazz pressings curated nightly",
  },
  {
    label: "Studio garden",
    value: "Greenhouse-grown herbs harvested on demand",
  },
];

const contactDetails = [
  {
    title: "Visit",
    description: "214 Grove Street · Portland, Maine",
    icon: IconMapPin,
  },
  {
    title: "Hours",
    description: "Wednesday – Sunday · 5pm – late",
    icon: IconClock,
  },
];

function IconLeaf(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
      <path d="M5 19c0-7 4-11 11-11" />
    </svg>
  );
}

function IconSparkles(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 3v4M12 17v4M5 12H1m22 0h-4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

function IconMapPin(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx={12} cy={10} r={2.5} />
    </svg>
  );
}

function IconClock(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={8} />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function IconPhone(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 5c0-1.105.895-2 2-2h2.28a1.5 1.5 0 0 1 1.473 1.183l.57 2.566a1.5 1.5 0 0 1-.879 1.686L6.8 9.4a11.042 11.042 0 0 0 7.8 7.8l1.966-1.644a1.5 1.5 0 0 1 1.686-.879l2.566.57A1.5 1.5 0 0 1 22 17.28V19c0 1.105-.895 2-2 2h-.5C9.492 21 3 14.508 3 6.5V5Z" />
    </svg>
  );
}

function IconMail(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <rect height={16} rx={2} width={20} x={2} y={4} />
      <path d="m3 6 7.889 6.316a2 2 0 0 0 2.222 0L21 6" />
    </svg>
  );
}

function IconArrowRight(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function IconCaretDown(props: IconProps) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollDepth, setScrollDepth] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [activeThemeKey, setActiveThemeKey] = useState<SectionKey>("hero");
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 20;
      const offsetY = (event.clientY / innerHeight - 0.5) * 12;
      setParallax({ x: offsetX, y: offsetY });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = heroRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const rawProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setScrollDepth(Math.min(1, Math.max(0, rawProgress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const evaluateViewport = () => {
      setIsMobileViewport(window.matchMedia("(max-width: 640px)").matches);
    };

    evaluateViewport();
    window.addEventListener("resize", evaluateViewport);

    return () => window.removeEventListener("resize", evaluateViewport);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(`[data-theme="${link.id}"]`))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) {
          return;
        }

        const nextKey = (visible[0].target.getAttribute("data-theme") || "hero") as SectionKey;
        setActiveSection(nextKey);
        setActiveThemeKey(nextKey);
      },
      { threshold: [0.3, 0.6, 0.85], rootMargin: "-20% 0px -25%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );

    if (!animatedElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10%" },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNavOpen) {
      return;
    }

    const handleOutside = (event: PointerEvent) => {
      const trigger = document.getElementById("floating-menu-trigger");
      const panel = document.getElementById("floating-menu-panel");
      if (!panel || !trigger) {
        return;
      }

      if (panel.contains(event.target as Node) || trigger.contains(event.target as Node)) {
        return;
      }

      setIsNavOpen(false);
    };

    window.addEventListener("pointerdown", handleOutside);
    return () => window.removeEventListener("pointerdown", handleOutside);
  }, [isNavOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setIsNavOpen(false);
      }
    };

    if (isModalOpen || isNavOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isNavOpen]);

  const parallaxStyle = useMemo(
    () => ({
      transform: `translate3d(${parallax.x}px, ${parallax.y + scrollDepth * 24}px, 0)`,
    }),
    [parallax, scrollDepth],
  );

  const cardParallax = (index: number) => ({
    transform: `translate3d(${parallax.x * (0.08 + index * 0.04)}px, ${
      scrollDepth * 18 * (index + 1)
    }px, 0)`,
  });

  const activeTheme = backgroundThemes[activeThemeKey];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#1e1a16]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ backgroundImage: `${activeTheme.gradient}, ${activeTheme.vignette}` }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.32),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(255,255,255,0.25),transparent_55%)] opacity-90 mix-blend-screen"
      />

      {(isModalOpen || (isNavOpen && isMobileViewport)) && (
        <button
          aria-label="Close overlays"
          className="fixed inset-0 z-40 cursor-pointer bg-black/45 backdrop-blur-sm"
          onClick={() => {
            setIsModalOpen(false);
            setIsNavOpen(false);
          }}
          type="button"
        />
      )}

      <section
        id="hero"
        data-theme="hero"
        ref={heroRef}
        className="relative isolate flex min-h-screen items-center justify-center px-4 pb-20 pt-28 sm:px-8"
      >
        <div className="absolute inset-0 -z-30 overflow-hidden rounded-[3.5rem] border border-white/35 bg-white/35 shadow-[0_60px_120px_rgba(25,20,12,0.25)] backdrop-blur-3xl" />
        <video
          aria-hidden
          autoPlay
          className="absolute inset-0 -z-40 h-full w-full object-cover opacity-55"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-slow-drizzle-over-gourmet-plating-2312/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black/45 via-black/25 to-transparent" />

        <div className="relative z-10 flex w-full max-w-6xl flex-col gap-12 rounded-[2.75rem] border border-white/35 bg-white/55 p-6 text-white shadow-[0_50px_120px_rgba(25,24,20,0.25)] backdrop-blur-3xl sm:p-10 lg:p-16">
          <header className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-white/85 sm:text-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/20 text-base font-bold text-white shadow-inner">
                <span className="sr-only">Verdant Atelier</span>
                <IconLeaf className="h-5 w-5" />
              </span>
              Verdant Atelier
            </a>

            <div className="flex items-center gap-3">
              <button
                id="floating-menu-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={isNavOpen}
                onClick={() => setIsNavOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
              >
                Menu
                <IconCaretDown className={`h-4 w-4 transition ${isNavOpen ? "rotate-180" : ""}`} />
              </button>
              <a
                href="#contact"
                className="hidden rounded-full border border-[#ffedc2]/40 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_15px_45px_rgba(167,142,70,0.4)] transition hover:shadow-[0_20px_55px_rgba(167,142,70,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffefce] sm:inline-flex"
              >
                Reserve
              </a>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4" data-animate>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/80">
                  Project Open
                </span>
                <h1 className="text-4xl font-semibold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Where Flavor Meets Art
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  Crafted with passion, plated with precision. Slow-dripped infusions, heritage grains, and luminous finishing oils compose the Verdant Atelier tasting experience.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4" data-animate="slide-left">
                <a
                  href="#highlights"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/15 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Explore Our Menu
                  <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-[#0b120e]/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#152019]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Reserve an Evening
                  <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
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

              <ul className="grid gap-3" data-animate="float">
                {heroHighlights.map((highlight, index) => (
                  <li
                    key={highlight.title}
                    className="flex items-start gap-3 rounded-[1.5rem] border border-white/25 bg-white/12 px-4 py-3 text-white/90 backdrop-blur-xl transition hover:bg-white/18"
                    style={cardParallax(index)}
                  >
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-gradient-to-r from-white/40 to-white" />
                    <div className="space-y-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em]">{highlight.title}</p>
                      <p className="text-xs text-white/75">{highlight.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          id="floating-menu-panel"
          className={`absolute top-24 z-30 w-[clamp(16rem,90vw,18rem)] origin-top rounded-3xl border border-white/30 bg-white/15 p-4 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_35px_75px_rgba(18,16,13,0.35)] backdrop-blur-2xl transition-all duration-300 ${
            isNavOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
          } ${isMobileViewport ? "left-1/2 -translate-x-1/2" : "right-6"}`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`rounded-full border border-white/0 px-4 py-2 text-left text-[11px] tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white ${
                  activeSection === link.id ? "border-white/30 bg-white/15 text-white" : ""
                }`}
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
        <div className="rounded-[2.5rem] border border-white/60 bg-white/65 p-8 shadow-[0_45px_90px_rgba(30,24,16,0.15)] backdrop-blur-2xl" data-animate>
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
            {heroHighlights.map((highlight, index) => (
              <article
                key={`${highlight.title}-${index}`}
                className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 p-6 shadow-[0_30px_65px_rgba(30,24,15,0.12)] backdrop-blur-xl"
                data-animate={index === 0 ? "slide-right" : index === 1 ? "float" : "slide-left"}
              >
                <div className="relative mb-5 h-48 overflow-hidden rounded-[1.75rem] border border-white/55">
                  <Image
                    alt={highlight.title}
                    src={highlight.image}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c150d]/60 via-transparent to-transparent" />
                </div>
                <h3 className="relative text-lg font-semibold text-[#1e1a16]">{highlight.title}</h3>
                <p className="relative mt-2 text-sm text-[#5e533a]">{highlight.description}</p>
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
          <div className="space-y-6" data-animate="slide-right">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c4b48d]/30 bg-[#f0e6d0]/70">
                <IconSparkles className="h-4 w-4 text-[#8a7a54]" />
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
              {promiseHighlights.map((item, index) => (
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
        <div className="rounded-[2.5rem] border border-white/60 bg-white/60 p-8 shadow-[0_45px_100px_rgba(25,20,14,0.17)] backdrop-blur-2xl" data-animate>
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
            <div className="flex flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/65 p-6 text-sm text-[#5c5137] shadow-inner" data-animate="slide-left">
              {missionDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#877851]">{detail.label}</p>
                  <p>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-theme="contact"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-28 pt-16 text-[#1e1a16] sm:px-8"
      >
        <div className="grid gap-10 rounded-[2.75rem] border border-white/65 bg-white/70 p-8 shadow-[0_50px_110px_rgba(24,18,12,0.2)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12" data-animate>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#867751]">Contact</p>
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
              <a className="group inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]" href="tel:+12075550123">
                <IconPhone className="h-4 w-4" />
                +1 (207) 555-0123
                <IconArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a className="group inline-flex items-center gap-2 text-[#405e36] transition hover:text-[#2a4126]" href="mailto:hello@verdantatelier.com">
                <IconMail className="h-4 w-4" />
                hello@verdantatelier.com
                <IconArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>
            <button
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#8ac27d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169]"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Reserve a Table
              <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-lg rounded-[2.5rem] border border-white/25 bg-white/85 p-8 text-[#1e1a16] shadow-[0_40px_110px_rgba(18,16,13,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold uppercase tracking-[0.4em] text-[#3b5b34]">Reserve Table</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-transparent px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#6d6859] transition hover:border-[#d6c9a4] hover:bg-white/70"
              >
                Close
              </button>
            </div>
            <form className="mt-6 grid gap-4 text-sm text-[#5c5137]">
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Name
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/60 bg-white px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Email
                <input
                  className="h-11 rounded-full border border-[#d6c9a4]/60 bg-white px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                  placeholder="Email address"
                  type="email"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                  Date
                  <input
                    className="h-11 rounded-full border border-[#d6c9a4]/60 bg-white px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                    type="date"
                  />
                </label>
                <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                  Guests
                  <input
                    className="h-11 rounded-full border border-[#d6c9a4]/60 bg-white px-4 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                    type="number"
                    min={1}
                  />
                </label>
              </div>
              <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.35em]">
                Notes
                <textarea
                  rows={4}
                  className="rounded-3xl border border-[#d6c9a4]/60 bg-white px-4 py-3 text-sm text-[#1e1a16] placeholder:text-[#9c8c63] focus:border-[#405e36] focus:outline-none"
                  placeholder="Share celebration details or dietary notes"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-[#ffe7b8]/50 bg-gradient-to-r from-[#3b5b34] via-[#7f903a] to-[#d5bb62] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1b150b] shadow-[0_20px_55px_rgba(167,142,70,0.45)] transition hover:shadow-[0_25px_65px_rgba(167,142,70,0.55)]"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
