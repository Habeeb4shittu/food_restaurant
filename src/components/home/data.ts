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
  { id: "statsSection", label: "İstatistikler" },
  { id: "highlights", label: "Öne Çıkanlar" },
  { id: "promise", label: "Sözümüz" },
  { id: "mission", label: "Misyonumuz" },
  { id: "contact", label: "İletişim" },
];

export const backgroundConfigs: Record<SectionKey, BackgroundConfig> = {
  hero: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(to bottom, rgba(255, 210, 150, 0.5) 0%, rgba(255, 190, 120, 0.45) 20%, rgba(255, 170, 100, 0.35) 40%, rgba(240, 150, 100, 0.3) 55%, rgba(220, 130, 90, 0.25) 70%, rgba(200, 180, 160, 0.3) 85%, rgba(230, 225, 220, 0.9) 100%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
  },
  statsSection: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(to bottom, rgba(255, 210, 150, 0.5) 0%, rgba(255, 190, 120, 0.45) 20%, rgba(255, 170, 100, 0.35) 40%, rgba(240, 150, 100, 0.3) 55%, rgba(220, 130, 90, 0.25) 70%, rgba(200, 180, 160, 0.3) 85%, rgba(230, 225, 220, 0.9) 100%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
  },
  highlights: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(to bottom, rgba(255, 210, 150, 0.5) 0%, rgba(255, 190, 120, 0.45) 20%, rgba(255, 170, 100, 0.35) 40%, rgba(240, 150, 100, 0.3) 55%, rgba(220, 130, 90, 0.25) 70%, rgba(200, 180, 160, 0.3) 85%, rgba(230, 225, 220, 0.9) 100%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
  },
  promise: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(135deg,#131215 0%,#121317 20%,#141518 40%,#16171B 60%,#1A1A1F 80%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
  },
  mission: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(135deg,#131215 0%,#121317 20%,#141518 40%,#16171B 60%,#1A1A1F 80%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
  },
  contact: {
    kind: "model",
    src: "/Kebaba.glb",
    gradient:
      " linear-gradient(135deg,#131215 0%,#121317 20%,#141518 40%,#16171B 60%,#1A1A1F 80%)",
    overlay:
      "linear-gradient(180deg, rgba(15,6,5,0.55) 0%, rgba(20,9,8,0.28) 45%, rgba(26,11,9,0.1) 100%)",
    fallbackGradient:
      "radial-gradient(120% 120% at 20% 20%, rgba(255,244,244,0.96) 0%, rgba(245,226,226,0.94) 45%, rgba(234,220,220,0.9) 100%)",
    camera: { position: [0, 0, 15.0], fov: 15 },
    rotateSpeed: 0.3,
    scale: 2.2,
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
