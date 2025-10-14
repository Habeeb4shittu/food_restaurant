"use client";

import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { JSX } from "react";

// The stroke paths below mirror the Lucide icon set so the UI can use the same
// visual language without bringing the dependency into the bundle. Lucide icons
// are licensed under the ISC license. See https://lucide.dev/icons.

type IconProps = SVGProps<SVGSVGElement>;

const createIcon = (paths: JSX.Element) =>
  forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
    return (
      <svg
        ref={ref}
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths}
      </svg>
    );
  });

export const LeafIcon = createIcon(
  <>
    <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
    <path d="M5 19c0-7 4-11 11-11" />
  </>,
);

export const SparklesIcon = createIcon(
  <>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M5 12H1" />
    <path d="M23 12h-4" />
    <path d="m5.6 5.6 2.8 2.8" />
    <path d="m15.6 15.6 2.8 2.8" />
    <path d="m5.6 18.4 2.8-2.8" />
    <path d="m15.6 8.4 2.8-2.8" />
  </>,
);

export const MapPinIcon = createIcon(
  <>
    <path d="M12 21s-6-4.5-6-10a6 6 0 1 1 12 0c0 5.5-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </>,
);

export const ClockIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2 1.5" />
  </>,
);

export const PhoneIcon = createIcon(
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.1 12.1 0 0 0 .65 2.57 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.51-1.2a2 2 0 0 1 2.11-.45 12.1 12.1 0 0 0 2.57.65 2 2 0 0 1 1.72 2.01Z" />,
);

export const MailIcon = createIcon(
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-9.6 7.2a2 2 0 0 1-2.4 0L2 6" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>,
);

export const ChevronDownIcon = createIcon(
  <path d="m6 9 6 6 6-6" />,
);

export const CloseIcon = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
);

export const StarIcon = createIcon(
  <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8L6.6 20l1-6L3.2 9.4l6.1-.9Z" />,
);

export const FlameIcon = createIcon(
  <>
    <path d="M12 2C10 5 8 7 8 10a4 4 0 0 0 8 0c0-2-1-4-4-8Z" />
    <path d="M12 22a6 6 0 0 0 6-6c0-4-3-6-6-10-3 4-6 6-6 10a6 6 0 0 0 6 6Z" />
  </>,
);

export const UtensilsIcon = createIcon(
  <>
    <path d="m6 4-.5 8" />
    <path d="m8 4 .5 8" />
    <path d="M7 2v2" />
    <path d="M5 2v2" />
    <path d="M9 2v2" />
    <path d="M4 12h6" />
    <path d="M14 7h6" />
    <path d="M17 20V7" />
    <path d="m15 20 2 2 2-2" />
  </>,
);

export const DessertIcon = createIcon(
  <>
    <path d="M12 3C8.5 3 7 5 7 6.5c0 1.7 1.7 3 5 3s5-1.3 5-3C17 5 15.5 3 12 3Z" />
    <path d="M7 6s-2 3.5-2 6 2.5 5 7 5 7-2.5 7-5-2-6-2-6" />
    <path d="M7 16v3h10v-3" />
  </>,
);
