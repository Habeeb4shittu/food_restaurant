"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "promise", label: "Promise" },
  { id: "mission", label: "Mission" },
  { id: "contact", label: "Contact" },
];

const heroHighlights = [
  {
    title: "Chef’s Garden Tasting",
    description: "Eight-course menu celebrating biodynamic vegetables and heritage grains.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Wood-Fired Evenings",
    description: "Oak-fired sourdough pizzas with charred citrus oil and smoked sea salt.",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=640&q=80",
  },
  {
    title: "Botanical Brunch",
    description: "Green goddess waffles, microherb salads, and petal-garnished spritzes.",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=640&q=80",
  },
];

const pillars = [
  {
    title: "Local Producers",
    copy: "We partner with nearby farms for greens, cheeses, and sustainable proteins harvested at peak flavor.",
    icon: IconLeaf,
  },
  {
    title: "Slow Crafted",
    copy: "Ferments, broths, and breads are nurtured in-house to coax depth from simple ingredients.",
    icon: IconSparkles,
  },
  {
    title: "Gather Together",
    copy: "Dining rooms designed for long conversations, celebratory toasts, and everyday comfort.",
    icon: IconFirefly,
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

function IconFirefly(props: IconProps) {
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
      <path d="M12 21c3-1.5 6-4.239 6-7.5A6 6 0 0 0 6 13.5C6 16.761 9 19.5 12 21Z" />
      <path d="M12 21V9" />
      <path d="M12 5V3" />
      <path d="M8 7l-1.5-1.5" />
      <path d="M16 7l1.5-1.5" />
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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current,
        );

        setActiveSection(mostVisible.target.id);
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-20% 0px -40%" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );

    if (animatedElements.length === 0) {
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
      { threshold: 0.2, rootMargin: "0px 0px -10%" },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleReserveClick = () => {
    setIsModalOpen(true);
    setIsNavOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#eef0ec] text-[#16140f]">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-6 sm:px-8">
        <nav className="pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/50 bg-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-[0_20px_60px_rgba(20,27,18,0.28)] backdrop-blur-2xl">
          <a
            className="flex items-center gap-2 text-sm tracking-[0.4em] text-white transition hover:text-white/80"
            href="#hero"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-base font-bold text-[#1f1c16] shadow-inner">
              <IconLeaf className="h-5 w-5 text-[#1f1c16]" />
            </span>
            Verdant Kitchen
          </a>
          <div className="hidden items-center gap-4 sm:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.35em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? "border-white/80 bg-white/40 text-[#1f1c16] shadow-sm"
                      : "border-white/40 text-white/85 hover:-translate-y-0.5 hover:border-white/70 hover:text-white"
                  }`}
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              className="group flex cursor-pointer items-center gap-2 rounded-full border border-transparent bg-[#8ac27d] px-6 py-2 text-[11px] tracking-[0.4em] text-[#1f1c16] transition hover:-translate-y-0.5 hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={handleReserveClick}
              type="button"
            >
              Reserve
              <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
          <button
            aria-controls="mobile-nav"
            aria-expanded={isNavOpen}
            className="flex cursor-pointer flex-col items-end gap-1 text-[10px] font-normal tracking-[0.45em] text-white/80 transition hover:text-white sm:hidden"
            onClick={() => setIsNavOpen((prev) => !prev)}
            type="button"
          >
            Menu
            <span className="h-px w-6 bg-white/70" />
          </button>
        </nav>
      </header>

      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden px-4 pb-24 pt-32 sm:px-8 lg:min-h-screen" id="hero">
        <video
          aria-hidden
          autoPlay
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=60"
          src="https://cdn.coverr.co/videos/coverr-gourmet-chef-plating-a-fine-dining-dish-7321/1080p.mp4"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f140d]/30 via-[#11170f]/15 to-white/10" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="grid gap-12 text-white lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8" data-animate>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                <IconSparkles className="h-4 w-4" />
                Slow dining · Farm fresh · Botanical cocktails
              </p>
              <h1 className="text-4xl font-semibold leading-tight drop-shadow-[0_15px_35px_rgba(20,24,18,0.35)] sm:text-5xl lg:text-6xl xl:text-7xl">
                Taste the season with every plate and pour.
              </h1>
              <p className="max-w-2xl text-base text-white/85 sm:text-lg">
                Verdant Kitchen celebrates the rhythm of nature with a plant-forward menu, small-batch ferments, and wood-fired favorites.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row" data-animate="slide-right">
                <input
                  className="h-12 flex-1 rounded-full border border-white/35 bg-white/30 px-5 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                  placeholder="Enter your email for supper club updates"
                  type="email"
                />
                <button
                  className="group flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-[#8ac27d] px-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1c16] transition hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  type="submit"
                >
                  Request Invite
                  <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" data-animate="slide-left">
              {heroHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="flex items-center gap-4 rounded-3xl border border-white/25 bg-white/25 p-4 text-left shadow-[0_24px_60px_rgba(15,19,12,0.25)] backdrop-blur-2xl transition hover:-translate-y-1"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-[24px] border border-white/40 bg-white/30">
                    <Image alt={highlight.title} fill className="object-cover" src={highlight.image} sizes="80px" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                    <p className="text-xs text-white/75">{highlight.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8" id="highlights">
        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_30px_70px_rgba(54,68,45,0.12)] backdrop-blur-xl sm:p-10"
          data-animate
        >
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold text-[#16140f] sm:text-4xl">Chef’s Highlights</h2>
            <p className="mx-auto max-w-2xl text-sm text-[#4e4a3f] sm:text-base">
              Rotating spotlights from our kitchen, each paired with sustainable sips and lively conversation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {heroHighlights.map((highlight, index) => (
              <article
                key={`${highlight.title}-${index}`}
                className="group relative flex flex-col gap-4 rounded-[26px] border border-white/60 bg-white/50 p-6 text-left shadow-[0_30px_60px_rgba(41,48,34,0.1)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#d1e2cb]"
                data-animate={index === 0 ? "slide-right" : index === 1 ? "float" : "slide-left"}
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-[22px] border border-[#d9d5ca] bg-gradient-to-br from-white via-[#f3f1ea] to-[#e3ebdf]">
                  <Image alt={highlight.title} fill className="object-cover" src={highlight.image} sizes="(max-width: 768px) 80vw, 320px" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#1f1c16]">{highlight.title}</h3>
                  <p className="text-sm text-[#575246]">{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#eef3ea] via-white to-[#e5ecdf] px-4 py-20 sm:px-8" id="promise">
        <div className="mx-auto grid w-full max-w-6xl gap-12 rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[0_40px_90px_rgba(46,58,37,0.15)] backdrop-blur-xl lg:grid-cols-[1.1fr_1fr] lg:items-center sm:p-10">
          <div className="space-y-6" data-animate="slide-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
              <IconSparkles className="h-4 w-4" />
              Our Promise
            </span>
            <h2 className="text-3xl font-semibold text-[#16140f] sm:text-4xl">
              Rooted in sustainability, crafted for community.
            </h2>
            <p className="max-w-2xl text-sm text-[#4e4a3f] sm:text-lg">
              From soil to service, every choice we make prioritizes local ecosystems and the neighbors who dine with us nightly.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="rounded-[22px] border border-white/70 bg-white/60 p-5 shadow-sm backdrop-blur-xl"
                  data-animate={index === 0 ? "slide-right" : index === 1 ? "float" : "slide-left"}
                >
                  <pillar.icon className="mb-3 h-6 w-6 text-[#3b7a45]" />
                  <h3 className="text-base font-semibold text-[#1f1c16]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-[#575246]">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center" data-animate="slide-left">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[#f4f3ec] via-white to-[#e4ecdf]" />
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-2xl">
              <Image
                alt="Fresh herbs and edible flowers arranged in a ring"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8" id="mission">
        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_40px_80px_rgba(59,73,48,0.12)] backdrop-blur-xl sm:p-10"
          data-animate
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
              <span>Terrace</span>
              <span className="h-1 w-1 rounded-full bg-[#6d6859]" />
              <span>Dining Room</span>
              <span className="h-1 w-1 rounded-full bg-[#6d6859]" />
              <span>Chef’s Counter</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-[#12100b] sm:text-4xl lg:text-5xl">
              Our mission is to nourish with intention, serving dishes that honor regional farmers and the stories they tell.
            </h2>
          </div>
          <p className="max-w-3xl text-sm text-[#4e4a3f] sm:text-lg">
            Guided by a love for the soil, Verdant Kitchen invites guests into a culinary experience that evolves with the seasons. Every visit brings a new expression of flavor, artistry, and hospitality.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#eef3ea] via-white to-[#e5ecdf] px-4 py-20 sm:px-8" id="contact">
        <div
          className="mx-auto grid w-full max-w-6xl gap-10 rounded-[32px] border border-white/70 bg-white/85 p-6 text-[#1f1c16] shadow-[0_40px_80px_rgba(59,73,48,0.15)] backdrop-blur-2xl sm:grid-cols-[1fr_1fr] sm:p-12"
          data-animate
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6d6859]">
              <IconSparkles className="h-4 w-4" />
              Let’s Connect
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#12100b] sm:text-4xl">
              Reserve a table or plan a private event.
            </h2>
            <p className="text-sm text-[#4e4a3f] sm:text-base">
              Share your occasion and our hospitality team will curate an experience with garden-fresh menus, thoughtful pairings, and warm service.
            </p>
            <div className="space-y-3 text-sm text-[#4e4a3f]">
              {contactDetails.map((detail) => (
                <p key={detail.title} className="flex items-start gap-3 text-sm text-[#4e4a3f]">
                  <detail.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3b7a45]" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]">
                      {detail.title}
                    </span>
                    {detail.description}
                  </span>
                </p>
              ))}
              <a
                className="group inline-flex items-center gap-2 text-[#3b7a45] underline-offset-4 transition hover:text-[#2f6337]"
                href="tel:+12075550123"
              >
                <IconPhone className="h-4 w-4" />
                +1 (207) 555-0123
                <IconArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                className="group inline-flex items-center gap-2 text-[#3b7a45] underline-offset-4 transition hover:text-[#2f6337]"
                href="mailto:hello@verdantkitchen.com"
              >
                <IconMail className="h-4 w-4" />
                hello@verdantkitchen.com
                <IconArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>
            <button
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-transparent bg-[#8ac27d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
              onClick={handleReserveClick}
              type="button"
            >
              Reserve a Table
              <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
          <form className="grid gap-4" data-animate="slide-left">
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="name">
                Name
              </label>
              <input
                className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                id="name"
                name="name"
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="email">
                Email
              </label>
              <input
                className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                id="email"
                name="email"
                placeholder="your@email.com"
                type="email"
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="occasion">
                  Occasion
                </label>
                <input
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="occasion"
                  name="occasion"
                  placeholder="Anniversary, tasting, etc."
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="party-size">
                  Party Size
                </label>
                <input
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="party-size"
                  min={1}
                  name="party-size"
                  type="number"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="details">
                Details
              </label>
              <textarea
                className="min-h-[140px] rounded-3xl border border-[#d9d5ca] bg-white/90 px-5 py-4 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                id="details"
                name="details"
                placeholder="Tell us about your celebration"
              />
            </div>
            <button
              className="group h-12 cursor-pointer rounded-full border border-transparent bg-[#8ac27d] text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
              type="submit"
            >
              Send Message
              <IconArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#f1f3ef] via-white to-[#eaf2ea] px-4 py-12 sm:px-8">
        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[0_30px_70px_rgba(54,68,45,0.12)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-10"
          data-animate
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#1f1c16]">Visit Verdant Kitchen</h3>
            <p className="text-sm text-[#575246]">
              214 Grove Street · Portland, Maine · Open Wednesday to Sunday, 5pm – late
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#575246]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#6d6859]">
              <IconSparkles className="h-4 w-4" />
              Instagram
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#6d6859]">
              <IconSparkles className="h-4 w-4" />
              Newsletter
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#6d6859]">
              <IconSparkles className="h-4 w-4" />
              Gift Cards
            </span>
          </div>
        </div>
      </footer>

      {(isModalOpen || isNavOpen) && (
        <button
          aria-label="Close overlays"
          className="fixed inset-0 z-40 cursor-pointer bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsModalOpen(false);
            setIsNavOpen(false);
          }}
          type="button"
        />
      )}

      {isNavOpen && (
        <aside
          aria-labelledby="mobile-nav-title"
          className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-sm translate-y-8 rounded-3xl border border-white/40 bg-white/95 p-6 text-[#1f1c16] shadow-[0_30px_70px_rgba(18,24,15,0.35)]"
          id="mobile-nav"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6d6859]" id="mobile-nav-title">
              Navigate Verdant
            </p>
            <button
              aria-label="Close navigation"
              className="cursor-pointer text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859] transition hover:text-[#1f1c16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
              onClick={() => setIsNavOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>
          <div className="mt-6 grid gap-4 text-sm font-semibold uppercase tracking-[0.35em]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={`mobile-${link.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-3 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45] ${
                    isActive
                      ? "bg-[#8ac27d]/40 text-[#2f6337]"
                      : "bg-[#eef3ea] text-[#2f6337] hover:bg-[#dcebd5]"
                  }`}
                  href={`#${link.id}`}
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#8ac27d] px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#1f1c16] transition hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
              onClick={handleReserveClick}
              type="button"
            >
              Reserve
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </aside>
      )}

      {isModalOpen && (
        <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12" role="dialog">
          <div className="relative w-full max-w-lg rounded-[32px] border border-white/40 bg-white/95 p-8 text-[#1f1c16] shadow-[0_40px_80px_rgba(18,24,15,0.35)] backdrop-blur-2xl">
            <button
              aria-label="Close reservation form"
              className="absolute right-6 top-6 cursor-pointer text-sm font-semibold uppercase tracking-[0.3em] text-[#6d6859] transition hover:text-[#1f1c16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
              onClick={() => setIsModalOpen(false)}
              type="button"
            >
              Close
            </button>
            <div className="space-y-2 pr-10">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6d6859]">Reserve a Table</p>
              <h2 className="text-3xl font-semibold leading-tight">Tell us about your visit.</h2>
              <p className="text-sm text-[#4e4a3f]">
                We’ll confirm availability within the hour and share a custom tasting menu preview.
              </p>
            </div>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="reservation-name">
                  Name
                </label>
                <input
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="reservation-name"
                  name="reservation-name"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="reservation-email">
                  Email
                </label>
                <input
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="reservation-email"
                  name="reservation-email"
                  placeholder="you@email.com"
                  type="email"
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="reservation-date">
                    Date
                  </label>
                  <input
                    className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                    id="reservation-date"
                    name="reservation-date"
                    type="date"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="reservation-party">
                    Party Size
                  </label>
                  <input
                    className="h-12 rounded-full border border-[#d9d5ca] bg-white/90 px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                    id="reservation-party"
                    min={1}
                    name="reservation-party"
                    type="number"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="reservation-notes">
                  Special Requests
                </label>
                <textarea
                  className="min-h-[120px] rounded-3xl border border-[#d9d5ca] bg-white/90 px-5 py-4 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="reservation-notes"
                  name="reservation-notes"
                  placeholder="Allergies, celebrations, preferences"
                />
              </div>
              <button
                className="group h-12 cursor-pointer rounded-full border border-transparent bg-[#8ac27d] text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b7a45]"
                type="submit"
              >
                Submit Request
                <IconArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
