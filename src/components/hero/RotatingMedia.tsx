"use client";
import { CSSProperties, useMemo } from "react";
type Props = {
    src: string;
    poster?: string;
    sizeClass?: string; // e.g. "w-[62vmin] h-[62vmin]"
    rotateSeconds?: number; // e.g. 32
    parallax?: { x: number; y: number } | null;
    reducedMotion?: boolean;
};
export default function RotatingMedia({
    src,
    poster,
    sizeClass = "w-[min(85vw,520px)] h-[min(85vw,520px)]",
    rotateSeconds = 32,
    parallax,
    reducedMotion = false,
}: Props) {
    const containerTransform = useMemo<CSSProperties["transform"]>(() => {
        if (reducedMotion || !parallax) return "translate3d(0,0,0)";
        return `translate3d(${parallax.x * 0.25}px, ${parallax.y * 0.25}px, 0)`;
    }, [parallax, reducedMotion]);

    return (
        <div className="relative" style={{ transform: containerTransform }}>
            {/* soft ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-[-60%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,200,0.12),transparent_75%)] blur-[100px]" />
            </div>

            {/* main circular container - subtle integration */}
            <div
                className={[
                    "relative overflow-hidden rounded-full",
                    "shadow-[0_10px_40px_rgba(0,0,0,0.08),0_0_1px_rgba(255,255,255,0.3)_inset]",
                    sizeClass,
                ].join(" ")}
            >
                {/* soft vignette edges to blend with background */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(255,240,230,0.3)_100%)]" />

                {/* rotating video container */}
                <div
                    className={
                        reducedMotion
                            ? "relative h-full w-full"
                            : `relative h-full w-full [animation:spin_linear_infinite] [animation-duration:${rotateSeconds}s]`
                    }
                >
                    <video
                        className="h-full w-full object-cover"
                        src={src}
                        poster={poster}
                        playsInline
                        autoPlay
                        muted
                        loop
                    />
                </div>
            </div>
        </div>
    );
}