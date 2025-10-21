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
  { id: "hero", label: "Ana Sayfa" },
  { id: "highlights", label: "Öne Çıkanlar" },
  { id: "promise", label: "Sözümüz" },
  { id: "mission", label: "Misyonumuz" },
  { id: "contact", label: "İletişim" },
];

export const backgroundConfigs: Record<SectionKey, BackgroundConfig> = {
  hero: {
    kind: "video",
    src: "/media/shawarma.mp4",
    poster:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(15, 6, 5, 0.55) 0%, rgba(20, 9, 8, 0.28) 45%, rgba(26, 11, 9, 0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255, 244, 244, 0.96) 0%, rgba(245, 226, 226, 0.94) 45%, rgba(234, 220, 220, 0.9) 100%)",
  },
  highlights: {
    kind: "video",
    src: "/media/highlight-shawarma.mp4",
    poster:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(15, 6, 5, 0.55) 0%, rgba(20, 9, 8, 0.28) 45%, rgba(26, 11, 9, 0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255, 244, 244, 0.96) 0%, rgba(245, 226, 226, 0.94) 45%, rgba(234, 220, 220, 0.9) 100%)",
  },
  promise: {
    kind: "video",
    src: "https://cdn.pixabay.com/video/2024/08/18/227132_tiny.mp4",
    poster:
      "https://images.unsplash.com/photo-1446611720526-39d16597055e?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(18, 7, 6, 0.58) 0%, rgba(30, 12, 10, 0.28) 55%, rgba(32, 15, 13, 0.12) 100%)",
    fallbackGradient:
      "radial-gradient(120% 140% at 70% 20%, rgba(252, 232, 232, 0.96), rgba(235, 215, 215, 0.9) 52%, rgba(208, 229, 205, 0.88) 100%)",
  },
  mission: {
    kind: "video",
    src: "https://cdn.pixabay.com/video/2023/01/22/147463-791696689_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    fallbackGradient:
      "radial-gradient(120% 130% at 15% 85%, rgba(245, 236, 223, 0.98), rgba(219, 205, 181, 0.92) 50%, rgba(176, 158, 127, 0.9) 100%)",
    overlay:
      "linear-gradient(180deg, rgba(17, 10, 6, 0.18) 0%, rgba(24, 16, 10, 0.12) 65%, rgba(27, 18, 12, 0.05) 100%)",
  },
  contact: {
    kind: "video",
    src: "https://cdn.coverr.co/videos/coverr-steaming-pasta-in-stainless-steel-pot-6606/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=80",
    overlay:
      "linear-gradient(180deg, rgba(20, 8, 7, 0.6) 0%, rgba(33, 14, 12, 0.32) 55%, rgba(36, 16, 14, 0.12) 100%)",
    fallbackGradient:
      "radial-gradient(130% 130% at 80% 20%, rgba(253, 236, 236, 0.96), rgba(237, 221, 221, 0.9) 52%, rgba(208, 233, 208, 0.88) 100%)",
  },
};

export const heroHighlights: HeroHighlight[] = [
  {
    title: "Nar Soslu Izgara Piliç",
    description:
      "Köz ateşinde mühürlenen piliç, nar pekmezi ve sumak tozu ile karamelize edilir.",
    image:
      "https://images.unsplash.com/photo-1608039755401-087a3c5249cf?auto=format&fit=crop&w=640&q=80",
    tag: "Şefin Tabağı",
    icon: UtensilsIcon,
    accent: "linear-gradient(135deg, #f77b72 0%, #e20613 85%)",
  },
  {
    title: "Fıstıklı Piliç İskender",
    description:
      "Odun fırınında pişen piliç dilimleri, sarımsaklı yoğurt ve Antep fıstığıyla servis edilir.",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=640&q=80",
    tag: "Ateş & Aromalar",
    icon: FlameIcon,
    accent: "linear-gradient(135deg, #ffb196 0%, #f64f2f 80%)",
  },
  {
    title: "Anadolu Tatlı Şöleni",
    description:
      "Tarçınlı sütlaç, gül şerbetli künefe ve pestilli lokumla dengelenen sıcak tatlı tabağı.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=640&q=80",
    tag: "Tatlı Final",
    icon: DessertIcon,
    accent: "linear-gradient(135deg, #ffd7a8 0%, #f68c3f 80%)",
  },
];

export const promiseHighlights = [
  "Ev yapımı fermente soslar ve taze ot buharı",
  "Hafif dokunuşlu baharat dengesi ve taş fırın aroması",
  "Yerel çiftçilerle sürdürülebilir tedarik ortaklıkları",
  "Her servis için duyusal ritim ve zarif sunum",
];

export const missionDetails: MissionDetail[] = [
  {
    label: "Degüstasyon ritmi",
    value: "Sekiz tabaklık deneyim · 2,5 saat",
  },
  {
    label: "Ses atmosferi",
    value: "Her akşam seçilmiş İstanbul caz plakları",
  },
  {
    label: "Şef bahçesi",
    value: "İstediğiniz an kesilen seradan taze otlar",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    title: "Adres",
    description: "İstiklal Caddesi 118 · Beyoğlu, İstanbul",
    icon: MapPinIcon,
  },
  {
    title: "Saatler",
    description: "Her gün · 11.00 – 23.00",
    icon: ClockIcon,
  },
];

export const contactCtas = {
  phone: {
    href: "tel:+902123456789",
    label: "+90 (212) 345 67 89",
    icon: PhoneIcon,
  },
  email: {
    href: "mailto:rezervasyon@istanbulpilic.com",
    label: "rezervasyon@istanbulpilic.com",
    icon: MailIcon,
  },
};
