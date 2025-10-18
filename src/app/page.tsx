"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

import { BackgroundManager } from "../components/home/BackgroundManager";
import { ContactSection } from "../components/home/ContactSection";
import {
  backgroundConfigs,
  contactCtas,
  contactDetails,
  heroHighlights,
  missionDetails,
  navLinks,
  promiseHighlights,
} from "../components/home/data";
import { HeroSection } from "../components/home/HeroSection";
import { HighlightsSection } from "../components/home/HighlightsSection";
import { MissionSection } from "../components/home/MissionSection";
import { NavBar } from "../components/home/NavBar";
import { PromiseSection } from "../components/home/PromiseSection";
import { ReservationModal } from "../components/home/ReservationModal";
import type { BackgroundConfig, SectionKey } from "../components/home/types";

type ParallaxVector = { x: number; y: number };

export default function Home() {
  const heroSectionRef = useRef<HTMLDivElement>(null!);
  const highlightsSectionRef = useRef<HTMLDivElement>(null!);
  const promiseSectionRef = useRef<HTMLDivElement>(null!);
  const missionSectionRef = useRef<HTMLDivElement>(null!);
  const contactSectionRef = useRef<HTMLDivElement>(null!);
  const backgroundVideosRef = useRef<Record<SectionKey, HTMLVideoElement | null>>({
    hero: null,
    highlights: null,
    promise: null,
    mission: null,
    contact: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [parallax, setParallax] = useState<ParallaxVector>({ x: 0, y: 0 });
  const [scrollDepth, setScrollDepth] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");
  const [activeThemeKey, setActiveThemeKey] = useState<SectionKey>("hero");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setParallax({ x: 0, y: 0 });
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (event.clientX / innerWidth - 0.5) * 20;
      const offsetY = (event.clientY / innerHeight - 0.5) * 12;
      setParallax({ x: offsetX, y: offsetY });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleScroll = () => {
      const heroNode = heroSectionRef.current;
      if (!heroNode) return;
      const rect = heroNode.getBoundingClientRect();
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
    const sectionEntries: [SectionKey, HTMLElement | null][] = [
      ["hero", heroSectionRef.current],
      ["highlights", highlightsSectionRef.current],
      ["promise", promiseSectionRef.current],
      ["mission", missionSectionRef.current],
      ["contact", contactSectionRef.current],
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) {
          return;
        }

        const entry = visible[0];
        const nextKey = entry.target.getAttribute("data-theme") as SectionKey;
        if (nextKey) {
          setActiveSection(nextKey);
          setActiveThemeKey(nextKey);
        }
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-30% 0px -30%" },
    );

    sectionEntries.forEach(([, element]) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      Object.values(backgroundVideosRef.current).forEach((video) => video?.pause());
      return;
    }

    Object.entries(backgroundVideosRef.current).forEach(([key, video]) => {
      if (!video) return;

      if (key === activeThemeKey) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            /* ignore autoplay errors */
          });
        }
      } else {
        video.pause();
      }
    });
  }, [activeThemeKey, prefersReducedMotion]);

  useEffect(() => {
    const animatedElements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));

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

  const parallaxStyle = useMemo<CSSProperties>(() => {
    if (prefersReducedMotion) {
      return { transform: "translate3d(0,0,0)" };
    }

    return {
      transform: `translate3d(${parallax.x}px, ${parallax.y + scrollDepth * 24}px, 0)` as CSSProperties["transform"],
    };
  }, [parallax, scrollDepth, prefersReducedMotion]);

  const glowParallax = useMemo<
    (multiplier: number, depth: number) => CSSProperties
  >(() => {
    if (prefersReducedMotion) {
      return () => ({ transform: "translate3d(0,0,0)" });
    }

    return (multiplier: number, depth: number) => ({
      transform: `translate3d(${parallax.x * multiplier}px, ${parallax.y * multiplier + scrollDepth * depth}px, 0)`,
    });
  }, [parallax, scrollDepth, prefersReducedMotion]);

  const cardParallax = (index: number): CSSProperties => {
    if (prefersReducedMotion) {
      return { transform: "translate3d(0,0,0)" };
    }

    return {
      transform: `translate3d(${parallax.x * (0.08 + index * 0.04)}px, ${scrollDepth * 18 * (index + 1)}px, 0)`,
    };
  };

  const backgroundEntries = useMemo(
    () => Object.entries(backgroundConfigs) as [SectionKey, BackgroundConfig][],
    [],
  );

  const heroVideoConfig =
    backgroundConfigs.hero.kind === "video"
      ? { src: backgroundConfigs.hero.src, poster: backgroundConfigs.hero.poster }
      : null;

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#1f1810]">
      <BackgroundManager
        entries={backgroundEntries}
        activeKey={activeThemeKey}
        prefersReducedMotion={prefersReducedMotion}
        videoRefs={backgroundVideosRef}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-40 bg-[radial-gradient(circle_at_20%_15%,rgba(255,214,214,0.3),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(146,221,168,0.25),transparent_60%)]"
      />

      {isNavOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          className="fixed inset-0 z-30 cursor-pointer bg-black/30 backdrop-blur-sm sm:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      <NavBar
        links={navLinks}
        activeSection={activeSection}
        isNavOpen={isNavOpen}
        onToggleNav={() => setIsNavOpen((prev) => !prev)}
        onNavigate={() => setIsNavOpen(false)}
        onReserve={() => setIsModalOpen(true)}
      />

      <HeroSection
        sectionRef={heroSectionRef}
        highlights={heroHighlights}
        parallaxStyle={parallaxStyle}
        glowParallax={glowParallax}
        cardParallax={cardParallax}
        heroVideoConfig={heroVideoConfig}
        prefersReducedMotion={prefersReducedMotion}
        onReserve={() => setIsModalOpen(true)}
      />

      <HighlightsSection sectionRef={highlightsSectionRef} highlights={heroHighlights} />
      <PromiseSection sectionRef={promiseSectionRef} highlights={promiseHighlights} />
      <MissionSection sectionRef={missionSectionRef} details={missionDetails} />
      <ContactSection
        sectionRef={contactSectionRef}
        contactDetails={contactDetails}
        contactCtas={contactCtas}
        onReserve={() => setIsModalOpen(true)}
      />

      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
