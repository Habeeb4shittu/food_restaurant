import type { ComponentType, SVGProps } from "react";

export type SectionKey = "hero" | "highlights" | "promise" | "mission" | "contact";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type BackgroundConfig =
  | {
      kind: "video";
      src: string;
      poster: string;
      overlay?: string;
      fallbackGradient: string;
    }
  | {
      kind: "gradient";
      gradient: string;
      texture?: string;
      overlay?: string;
    };

export type NavLink = { id: SectionKey; label: string };

export type HeroHighlight = {
  title: string;
  description: string;
  image: string;
  tag: string;
  icon: IconComponent;
  accent: string;
};

export type MissionDetail = { label: string; value: string };

export type ContactDetail = { title: string; description: string; icon: IconComponent };
