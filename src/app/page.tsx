"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroHighlights = [
  {
    title: "Seasonal Chef’s Tasting",
    description: "Six courses inspired by the harvest with thoughtful wine pairings.",
    image: "/images/tasting-menu.svg",
  },
  {
    title: "Wood-Fired Evenings",
    description: "Rustic pizzas and charred vegetables finished with herb oil.",
    image: "/images/wood-fired.svg",
  },
  {
    title: "Garden Brunch",
    description: "Fresh-pressed juices, sourdough waffles, and housemade preserves.",
    image: "/images/brunch-circle.svg",
  },
];

const pillars = [
  {
    title: "Local Producers",
    copy: "We partner with nearby farms for greens, cheeses, and sustainable proteins harvested at peak flavor.",
  },
  {
    title: "Slow Crafted",
    copy: "Ferments, broths, and breads are nurtured in-house to coax depth from simple ingredients.",
  },
  {
    title: "Gather Together",
    copy: "Dining rooms designed for long conversations, celebratory toasts, and everyday comfort.",
  },
];

const heroHighlights = [
  {
    title: "Seasonal Chef’s Tasting",
    description: "Six courses inspired by the harvest with thoughtful wine pairings.",
    image: "/images/tasting-menu.svg",
  },
  {
    title: "Wood-Fired Evenings",
    description: "Rustic pizzas and charred vegetables finished with herb oil.",
    image: "/images/wood-fired.svg",
  },
  {
    title: "Garden Brunch",
    description: "Fresh-pressed juices, sourdough waffles, and housemade preserves.",
    image: "/images/brunch-circle.svg",
  },
];

const pillars = [
  {
    title: "Local Producers",
    copy: "We partner with nearby farms for greens, cheeses, and sustainable proteins harvested at peak flavor.",
  },
  {
    title: "Slow Crafted",
    copy: "Ferments, broths, and breads are nurtured in-house to coax depth from simple ingredients.",
  },
  {
    title: "Gather Together",
    copy: "Dining rooms designed for long conversations, celebratory toasts, and everyday comfort.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
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

  return (
    <main className="flex min-h-screen flex-col bg-[#f2f3ef] text-[#16140f]">
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden px-4 pb-24 pt-32 sm:px-8 lg:min-h-screen">
        <video
          aria-hidden
          autoPlay
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/images/hero-plate.svg"
          src="https://static.vecteezy.com/system/resources/previews/007/027/942/mp4/3d-rotating-donut-with-colorful-sprinkles-free-video.mp4"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/30 to-black/10" />

        <div className="absolute top-6 left-1/2 z-20 w-full max-w-6xl -translate-x-1/2 px-4 sm:top-8 sm:px-8">
          <nav className="flex items-center justify-between rounded-full border border-white/40 bg-white/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-xl transition shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
            <a href="#hero" className="flex items-center gap-2 text-sm tracking-[0.4em]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-lg font-bold text-[#1f1c16] shadow-inner">VK</span>
              Verdant Kitchen
            </a>
            <button
              className="flex flex-col items-end gap-1 text-[10px] font-normal tracking-[0.45em] text-white/70 transition hover:text-white sm:hidden"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              Menu
              <span className="h-px w-6 bg-white/70" />
            </button>
            <div className="hidden items-center gap-4 sm:flex">
              <a className="rounded-full border border-white/30 px-4 py-2 text-[11px] tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:border-white/60" href="#highlights">
                Highlights
              </a>
              <a className="rounded-full border border-white/30 px-4 py-2 text-[11px] tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:border-white/60" href="#promise">
                Promise
              </a>
              <a className="rounded-full border border-white/30 px-4 py-2 text-[11px] tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:border-white/60" href="#mission">
                Mission
              </a>
              <a className="rounded-full border border-white/30 px-4 py-2 text-[11px] tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:border-white/60" href="#contact">
                Contact
              </a>
              <button
                className="rounded-full border border-transparent bg-[#8ac27d] px-6 py-2 text-[11px] tracking-[0.4em] text-[#1f1c16] transition hover:-translate-y-0.5 hover:bg-[#76b169]"
                onClick={() => setIsModalOpen(true)}
              >
                Reserve
              </button>
            </div>
          </nav>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16" id="hero">
          <div className="grid gap-12 text-white lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em]">
                Slow dining · Farm fresh · Botanical cocktails
              </p>
              <h1 className="text-4xl font-semibold leading-tight drop-shadow-[0_15px_35px_rgba(20,24,18,0.35)] sm:text-5xl lg:text-6xl xl:text-7xl">
                Taste the season with every plate and pour.
              </h1>
              <p className="max-w-2xl text-base text-white/80 sm:text-lg">
                Verdant Kitchen celebrates the rhythm of nature with a plant-forward menu, small-batch ferments, and wood-fired favorites.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="h-12 flex-1 rounded-full border border-white/30 bg-white/20 px-5 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                  placeholder="Enter your email for supper club updates"
                  type="email"
                />
                <button className="h-12 rounded-full border border-transparent bg-[#8ac27d] px-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f1c16] transition hover:bg-[#76b169]">
                  Request Invite
                </button>
              </form>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {heroHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="flex items-center gap-4 rounded-3xl border border-white/20 bg-white/15 p-4 backdrop-blur-xl"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-white/30 bg-white/20">
                    <Image alt={highlight.title} fill className="object-contain p-3" src={highlight.image} sizes="64px" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                    <p className="text-xs text-white/70">{highlight.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8" id="highlights">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-[32px] border border-[#d9d5ca]/60 bg-white/70 p-6 backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-semibold text-[#16140f] sm:text-4xl">Chef’s Highlights</h2>
            <p className="mx-auto max-w-2xl text-sm text-[#4e4a3f] sm:text-base">
              Rotating spotlights from our kitchen, each paired with sustainable sips and lively conversation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="group relative flex flex-col gap-4 rounded-[26px] border border-[#d9d5ca]/60 bg-white/80 p-6 text-left shadow-[0_30px_60px_rgba(41,48,34,0.08)] transition hover:-translate-y-1 hover:border-[#cbd8c4]"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-[22px] border border-[#d9d5ca] bg-gradient-to-br from-white via-[#f3f1ea] to-[#e3ebdf]">
                  <Image alt={highlight.title} height={140} width={140} src={highlight.image} />
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
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
              Our Promise
            </span>
            <h2 className="text-3xl font-semibold text-[#16140f] sm:text-4xl">Rooted in sustainability, crafted for community.</h2>
            <p className="max-w-2xl text-sm text-[#4e4a3f] sm:text-lg">
              From soil to service, every choice we make prioritizes local ecosystems and the neighbors who dine with us nightly.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[22px] border border-white/60 bg-white/70 p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-[#1f1c16]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-[#575246]">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-[#f4f3ec] via-white to-[#e4ecdf]" />
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[32px] border border-[#d9d5ca] bg-white shadow-2xl">
              <Image
                alt="Herb ring centerpiece"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                src="/images/herb-ring.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8" id="mission">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[32px] border border-[#d9d5ca]/60 bg-white/80 p-6 sm:p-10">
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 rounded-[32px] border border-[#d9d5ca]/60 bg-white/85 p-6 text-[#1f1c16] shadow-[0_40px_80px_rgba(59,73,48,0.12)] backdrop-blur-xl sm:grid-cols-2 sm:p-12">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#6d6859]">
              Let&rsquo;s Connect
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#12100b] sm:text-4xl">Reserve a table or plan a private event.</h2>
            <p className="text-sm text-[#4e4a3f] sm:text-base">
              Share your occasion and our hospitality team will curate an experience with garden-fresh menus, thoughtful pairings, and warm service.
            </p>
            <div className="space-y-2 text-sm text-[#4e4a3f]">
              <p className="font-semibold text-[#1f1c16]">Verdant Kitchen</p>
              <p>214 Grove Street · Portland, Maine</p>
              <p>Wednesday – Sunday · 5pm – late</p>
              <a className="inline-flex items-center gap-2 text-[#3b7a45] underline-offset-4 hover:text-[#2f6337]" href="tel:+12075550123">
                +1 (207) 555-0123
              </a>
              <a className="inline-flex items-center gap-2 text-[#3b7a45] underline-offset-4 hover:text-[#2f6337]" href="mailto:hello@verdantkitchen.com">
                hello@verdantkitchen.com
              </a>
            </div>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="name">
                Name
              </label>
              <input
                className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
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
                className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                id="email"
                name="email"
                placeholder="your@email.com"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859]" htmlFor="details">
                Details
              </label>
              <textarea
                className="min-h-[120px] rounded-3xl border border-[#d9d5ca] bg-white px-5 py-4 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                id="details"
                name="details"
                placeholder="Tell us about your celebration"
              />
            </div>
            <button className="h-12 rounded-full border border-transparent bg-[#8ac27d] text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169]">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#f1f3ef] via-white to-[#eaf2ea] px-4 py-12 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-[32px] border border-[#d9d5ca]/60 bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#1f1c16]">Visit Verdant Kitchen</h3>
            <p className="text-sm text-[#575246]">
              214 Grove Street · Portland, Maine · Open Wednesday to Sunday, 5pm – late
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#575246]">
            <span>Instagram</span>
            <span className="h-1 w-1 rounded-full bg-[#575246]" />
            <span>Newsletter</span>
            <span className="h-1 w-1 rounded-full bg-[#575246]" />
              <span>Gift Cards</span>
          </div>
        </div>
      </footer>

      {(isModalOpen || isNavOpen) && <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />} 

      {isNavOpen && (
        <div className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-sm translate-y-6 rounded-3xl border border-white/20 bg-white/95 p-6 text-[#1f1c16] shadow-[0_30px_70px_rgba(18,24,15,0.35)]">
          <button
            aria-label="Close navigation"
            className="ml-auto text-xs font-semibold uppercase tracking-[0.3em] text-[#6d6859] transition hover:text-[#1f1c16]"
            onClick={() => setIsNavOpen(false)}
          >
            Close
          </button>
          <div className="mt-4 grid gap-4 text-sm font-semibold uppercase tracking-[0.35em]">
            <a className="rounded-full bg-[#eef3ea] px-4 py-3 text-center text-[#2f6337]" href="#highlights" onClick={() => setIsNavOpen(false)}>
              Highlights
            </a>
            <a className="rounded-full bg-[#eef3ea] px-4 py-3 text-center text-[#2f6337]" href="#promise" onClick={() => setIsNavOpen(false)}>
              Promise
            </a>
            <a className="rounded-full bg-[#eef3ea] px-4 py-3 text-center text-[#2f6337]" href="#mission" onClick={() => setIsNavOpen(false)}>
              Mission
            </a>
            <a className="rounded-full bg-[#eef3ea] px-4 py-3 text-center text-[#2f6337]" href="#contact" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
            <button
              className="rounded-full bg-[#8ac27d] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-[#1f1c16] transition hover:bg-[#76b169]"
              onClick={() => {
                setIsNavOpen(false);
                setIsModalOpen(true);
              }}
            >
              Reserve
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-12"
          role="dialog"
        >
          <div className="relative w-full max-w-lg rounded-[32px] border border-white/20 bg-white/95 p-8 text-[#1f1c16] shadow-[0_40px_80px_rgba(18,24,15,0.35)]">
            <button
              aria-label="Close reservation form"
              className="absolute right-6 top-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#6d6859] transition hover:text-[#1f1c16]"
              onClick={() => setIsModalOpen(false)}
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
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
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
                  className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
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
                    className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
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
                    className="h-12 rounded-full border border-[#d9d5ca] bg-white px-5 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
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
                  className="min-h-[120px] rounded-3xl border border-[#d9d5ca] bg-white px-5 py-4 text-sm text-[#1f1c16] placeholder:text-[#9a9588] focus:border-[#8ac27d] focus:outline-none"
                  id="reservation-notes"
                  name="reservation-notes"
                  placeholder="Allergies, celebrations, preferences"
                />
              </div>
              <button className="h-12 rounded-full border border-transparent bg-[#8ac27d] text-xs font-semibold uppercase tracking-[0.35em] text-[#1f1c16] transition hover:bg-[#76b169]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
