// FadedBackdropText.tsx
import React from "react";

type Props = {
    text?: string;        // big background word, e.g. "DIO"
    subtext?: string;     // optional curved word
    opacity?: number;     // 0..1 overall strength
    animate?: boolean;    // turn on the letter-pop animation
    duration?: number;    // seconds per letter
    delayStep?: number;   // seconds between letters
    baseScale?: number;   // starting scale
};

export default function FadedBackdropText({
    text = "DIO",
    subtext = "",
    opacity = 0.22,
    animate = true,
    duration = 0.55,
    delayStep = 0.06,
    baseScale = 0.6,
}: Props) {
    const letters = Array.from(text);

    return (
        <svg
            aria-hidden
            className="absolute inset-0 z-[2] pointer-events-none"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                {/* soft peach → warm orange */}
                <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFD7A1" stopOpacity={opacity} />
                    <stop offset="100%" stopColor="#F28B4A" stopOpacity={opacity * 0.85} />
                </linearGradient>

                {/* feather the edges */}
                <radialGradient id="maskRadial" cx="50%" cy="55%" r="65%">
                    <stop offset="45%" stopColor="#fff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
                <mask id="softMask">
                    <rect width="100%" height="100%" fill="url(#maskRadial)" />
                </mask>

                {/* printed-on-haze blur */}
                <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="10" />
                </filter>

                {/* arc for curved subtext */}
                <path id="arc" d="M 80 520 Q 720 420 1360 520" />
            </defs>

            <g mask="url(#softMask)" filter="url(#softBlur)" style={{ mixBlendMode: "soft-light" }}>
                {/* Big word: each letter is its own <tspan> so we can scale it */}
                <text
                    x="50%"
                    y="58%"
                    textAnchor="middle"
                    fontFamily="Inter, Poppins, ui-sans-serif"
                    fontWeight="900"
                    fontSize="320"
                    letterSpacing="-0.02em"
                    fill="url(#fg)"
                >
                    {letters.map((ch, i) => (
                        <tspan
                            key={i}
                            // set x only on first chunk so layout stays centered
                            {...(i === 0 ? { x: "50%", dy: "0" } : {})}
                            // transform per-letter
                            transform={`scale(${animate ? baseScale : 1})`}
                        >
                            {ch}
                            {animate ? (
                                <>
                                    {/* scale pop-in, staggered */}
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        from={`${baseScale}`}
                                        to="1"
                                        begin={`${i * delayStep}s`}
                                        dur={`${duration}s`}
                                        fill="freeze"
                                        calcMode="spline"
                                        keyTimes="0;1"
                                        keySplines="0.2 0.8 0.2 1"  /* smooth ease-out */
                                    />
                                    {/* fade in to avoid harsh edges */}
                                    <animate
                                        attributeName="opacity"
                                        from="0"
                                        to="1"
                                        begin={`${i * delayStep}s`}
                                        dur={`${Math.max(0.25, duration * 0.6)}s`}
                                        fill="freeze"
                                    />
                                </>
                            ) : null}
                        </tspan>
                    ))}
                </text>

                {subtext ? (
                    <text
                        textAnchor="middle"
                        fontFamily="Inter, Poppins, ui-sans-serif"
                        fontWeight="900"
                        fontSize="220"
                        fill="url(#fg)"
                    >
                        <textPath href="#arc" startOffset="50%">{subtext}</textPath>
                    </text>
                ) : null}
            </g>

            {/* Accessibility mercy: disable motion for users who asked nicely */}
            <style>{`
        @media (prefers-reduced-motion: reduce) {
          svg animate, svg animateTransform { display: none; }
        }
      `}</style>
        </svg>
    );
}
