// Swap background video sources or poster images inside `backgroundConfigs` below.

import {
  ClockIcon,
  DessertIcon,
  FlameIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UtensilsIcon,
} from "../icons";
import type {
  BackgroundConfig,
  ContactDetail,
  HeroHighlight,
  MissionDetail,
  NavLink,
  SectionKey,
} from "./types";

export const navLinks: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "promise", label: "Promise" },
  { id: "mission", label: "Mission" },
  { id: "contact", label: "Contact" },
];

export const backgroundConfigs: Record<SectionKey, BackgroundConfig> = {
  hero: {
    kind: "video",
    src: "https://cdn.coverr.co/videos/coverr-gourmet-chef-plating-a-fine-dining-dish-7321/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(10, 8, 4, 0.45) 0%, rgba(12, 9, 5, 0.2) 45%, rgba(16, 12, 6, 0.05) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(253, 249, 241, 0.95) 0%, rgba(242, 233, 219, 0.94) 45%, rgba(211, 204, 190, 0.92) 100%)",
  },
  highlights: {
    kind: "gradient",
    gradient:
      "radial-gradient(120% 140% at 30% 15%, rgba(251, 244, 234, 0.96) 0%, rgba(232, 218, 196, 0.94) 45%, rgba(196, 176, 141, 0.9) 100%)",
    texture:
      "radial-gradient(circle at 80% 20%, rgba(120, 89, 45, 0.22), transparent 55%), radial-gradient(circle at 10% 85%, rgba(209, 170, 104, 0.2), transparent 60%)",
    overlay:
      "radial-gradient(140% 140% at 50% 40%, rgba(20, 12, 6, 0.22), rgba(20, 12, 6, 0.05) 60%, transparent 100%)",
  },
  promise: {
    kind: "video",
    src: "https://cdn.coverr.co/videos/coverr-slow-motion-pour-of-olive-oil-into-bowl-5598/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1446611720526-39d16597055e?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(22, 16, 8, 0.5) 0%, rgba(19, 14, 9, 0.2) 55%, rgba(17, 12, 8, 0.05) 100%)",
    fallbackGradient:
      "radial-gradient(120% 140% at 70% 20%, rgba(248, 240, 227, 0.98), rgba(224, 214, 190, 0.94) 52%, rgba(190, 177, 150, 0.9) 100%)",
  },
  mission: {
    kind: "gradient",
    gradient:
      "radial-gradient(120% 130% at 15% 85%, rgba(245, 236, 223, 0.98), rgba(219, 205, 181, 0.92) 50%, rgba(176, 158, 127, 0.9) 100%)",
    texture:
      "radial-gradient(circle at 80% 10%, rgba(74, 58, 37, 0.26), transparent 55%), radial-gradient(circle at 20% 40%, rgba(171, 141, 86, 0.24), transparent 58%)",
    overlay:
      "linear-gradient(180deg, rgba(17, 10, 6, 0.18) 0%, rgba(24, 16, 10, 0.12) 65%, rgba(27, 18, 12, 0.05) 100%)",
  },
  contact: {
    kind: "video",
    src: "https://cdn.coverr.co/videos/coverr-steaming-pasta-in-stainless-steel-pot-6606/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18, 13, 9, 0.55) 0%, rgba(20, 14, 9, 0.25) 55%, rgba(24, 18, 12, 0.08) 100%)",
    fallbackGradient:
      "radial-gradient(130% 130% at 80% 20%, rgba(247, 238, 225, 0.98), rgba(213, 199, 172, 0.92) 52%, rgba(162, 138, 96, 0.92) 100%)",
  },
};

export const heroHighlights: HeroHighlight[] = [
  {
    title: "Fire-Roasted Langoustine",
    description:
      "Brushed with smoked beurre monté, fennel pollen, and charred Meyer lemon pearls.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=640&q=80",
    tag: "Signature Course",
    icon: UtensilsIcon,
    accent: "linear-gradient(135deg, #f8d5a8 0%, #d88540 75%)",
  },
  {
    title: "Velvet Truffle Cappelletti",
    description:
      "Hand-folded pasta in parmesan brodo, finished with aged balsamic and porcini oil.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=640&q=80",
    tag: "Fire & Aromatics",
    icon: FlameIcon,
    accent: "linear-gradient(135deg, #f5c4b3 0%, #cf6438 75%)",
  },
  {
    title: "Amber Patisserie Tableau",
    description:
      "Caramelia mousse, brûléed figs, and toasted pistachio praline in warm candlelight.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=640&q=80",
    tag: "Patisserie",
    icon: DessertIcon,
    accent: "linear-gradient(135deg, #f8e1c9 0%, #d89f54 80%)",
  },
];

export const promiseHighlights = [
  "House-fermented infusions & botanical steam",
  "Electrostatic seasoning for feather-light finishes",
  "Partnerships with biodynamic farms & foragers",
  "Immersive service choreography & sensory pacing",
];

export const missionDetails: MissionDetail[] = [
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

export const contactDetails: ContactDetail[] = [
  {
    title: "Visit",
    description: "214 Grove Street · Portland, Maine",
    icon: MapPinIcon,
  },
  {
    title: "Hours",
    description: "Wednesday – Sunday · 5pm – late",
    icon: ClockIcon,
  },
];

export const contactCtas = {
  phone: {
    href: "tel:+12075550123",
    label: "+1 (207) 555-0123",
    icon: PhoneIcon,
  },
  email: {
    href: "mailto:hello@verdantatelier.com",
    label: "hello@verdantatelier.com",
    icon: MailIcon,
  },
};
