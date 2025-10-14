import type { MutableRefObject } from "react";

import type { BackgroundConfig, SectionKey } from "./types";

type BackgroundManagerProps = {
  entries: [SectionKey, BackgroundConfig][];
  activeKey: SectionKey;
  prefersReducedMotion: boolean;
  videoRefs: MutableRefObject<Record<SectionKey, HTMLVideoElement | null>>;
};

export function BackgroundManager({
  entries,
  activeKey,
  prefersReducedMotion,
  videoRefs,
}: BackgroundManagerProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden" aria-hidden>
      {entries.map(([key, config]) => {
        const isActive = activeKey === key;
        const baseClasses =
          "absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

        if (config.kind === "video") {
          if (prefersReducedMotion) {
            videoRefs.current[key] = null;
          }

          return (
            <div
              key={key}
              aria-hidden
              className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {prefersReducedMotion ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: config.fallbackGradient || `url(${config.poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <video
                  ref={(node) => {
                    videoRefs.current[key] = node;
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={config.poster}
                >
                  <source src={config.src} type="video/mp4" />
                </video>
              )}
              {config.overlay ? (
                <div className="absolute inset-0" style={{ background: config.overlay }} />
              ) : null}
            </div>
          );
        }

        const gradientImage = config.texture
          ? `${config.gradient}, ${config.texture}`
          : config.gradient;

        return (
          <div
            key={key}
            aria-hidden
            className={`${baseClasses} ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: gradientImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {config.overlay ? (
              <div className="absolute inset-0" style={{ background: config.overlay }} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
