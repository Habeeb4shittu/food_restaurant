import Image from "next/image";

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
  return (
    <main className="min-h-screen bg-[#eef0ec] px-4 py-10 text-[#16140f]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[40px] border border-[#d9d5ca] bg-white/90 p-8 shadow-[0_40px_120px_rgba(41,48,34,0.25)] backdrop-blur">
        <header className="flex flex-col gap-6 rounded-[28px] bg-gradient-to-br from-[#f8f5ec] via-white to-[#eef4e8] p-8">
          <nav className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium uppercase tracking-[0.2em] text-[#5d5a4e]">
            <span className="flex items-center gap-2 text-base font-semibold tracking-[0.4em] text-[#2c2a22]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2c2a22] text-white">VK</span>
              Verdant Kitchen
            </span>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-[#d7d2c4] bg-white px-5 py-2 transition hover:-translate-y-0.5 hover:shadow-md">
                Menu
              </button>
              <button className="rounded-full border border-transparent bg-[#3c5f3a] px-5 py-2 text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#2e4a2d]">
                Reserve Table
              </button>
            </div>
          </nav>
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
                Slow dining · Farm fresh · Botanical cocktails
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-[#12100b] md:text-6xl lg:text-7xl">
                Taste the season with every plate and pour.
              </h1>
              <p className="max-w-2xl text-lg text-[#4e4a3f]">
                Verdant Kitchen celebrates the rhythm of nature with a plant-forward menu, small-batch ferments, and wood-fired favorites.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="h-12 flex-1 rounded-full border border-[#d7d2c4] bg-white px-5 text-sm text-[#2c2a22] focus:border-[#3c5f3a] focus:outline-none"
                  placeholder="Enter your email for supper club updates"
                  type="email"
                />
                <button className="h-12 rounded-full border border-transparent bg-[#3c5f3a] px-6 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#2e4a2d]">
                  Request Invite
                </button>
              </form>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -z-10 scale-110 rounded-[32px] bg-gradient-to-br from-[#f1f4ee] via-white to-[#e6eee1]" />
              <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[32px] border border-[#d9d5ca] bg-white shadow-2xl">
                <Image
                  alt="Hero dish featuring seasonal greens"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 320px"
                  src="/images/hero-plate.svg"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 rounded-[28px] bg-gradient-to-br from-[#f4f2e8] via-white to-[#edf2e9] p-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-4xl font-semibold text-[#16140f]">Chef’s Highlights</h2>
            <p className="mx-auto max-w-2xl text-[#4e4a3f]">
              Rotating spotlights from our kitchen, each paired with sustainable sips and lively conversation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="group relative flex flex-col gap-4 rounded-[26px] border border-white/40 bg-white/60 p-6 text-left shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#cbd8c4]"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-[22px] border border-[#d9d5ca] bg-gradient-to-br from-white via-[#f3f1ea] to-[#e3ebdf]">
                  <Image
                    alt={highlight.title}
                    height={140}
                    width={140}
                    src={highlight.image}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#1f1c16]">{highlight.title}</h3>
                  <p className="text-sm text-[#575246]">{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[28px] bg-gradient-to-br from-[#f1f3ee] via-white to-[#eef2e9] p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d7d2c4] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
              Our Promise
            </span>
            <h2 className="text-4xl font-semibold text-[#16140f]">Rooted in sustainability, crafted for community.</h2>
            <p className="max-w-2xl text-lg text-[#4e4a3f]">
              From soil to service, every choice we make prioritizes local ecosystems and the neighbors who dine with us nightly.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[22px] border border-[#d9d5ca] bg-white/70 p-5">
                  <h3 className="text-lg font-semibold text-[#1f1c16]">{pillar.title}</h3>
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
        </section>

        <section className="grid gap-6 rounded-[28px] bg-gradient-to-br from-[#eef1ed] via-white to-[#e9f1eb] p-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#6d6859]">
              <span>Terrace</span>
              <span className="h-1 w-1 rounded-full bg-[#6d6859]" />
              <span>Dining Room</span>
              <span className="h-1 w-1 rounded-full bg-[#6d6859]" />
              <span>Chef’s Counter</span>
            </div>
            <h2 className="text-5xl font-semibold leading-tight text-[#12100b]">
              Our mission is to nourish with intention, serving dishes that honor regional farmers and the stories they tell.
            </h2>
          </div>
          <p className="max-w-3xl text-lg text-[#4e4a3f]">
            Guided by a love for the soil, Verdant Kitchen invites guests into a culinary experience that evolves with the seasons. Every visit brings a new expression of flavor, artistry, and hospitality.
          </p>
        </section>

        <footer className="flex flex-col gap-6 rounded-[28px] bg-gradient-to-br from-[#f5f6f2] via-white to-[#eaf2ea] p-8 lg:flex-row lg:items-center lg:justify-between">
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
        </footer>
      </div>
    </main>
  );
}
