"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: string; hint?: string };

export function StatsRail({
    side = "left",
    stats,
}: {
    side?: "left" | "right";
    stats: Stat[];
}) {
    return (
        <aside
            className={[
                "pointer-events-none flex flex-col gap-4",
                side === "left" ? "items-start text-left" : "items-end text-right",
            ].join(" ")}
        >
            {stats.map((s, i) => (
                <AnimatedStat key={i} stat={s} index={i} />
            ))}
        </aside>
    );
}

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
    const [displayValue, setDisplayValue] = useState("0");
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue(stat.value);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [stat.value, hasAnimated]);

    const animateValue = (finalValue: string) => {
        // Extract number and suffix (like +, K, M, etc.)
        const match = finalValue.match(/^(\d+(?:\.\d+)?)(.*?)$/);

        if (!match) {
            // If no number found, just display the value as is
            setDisplayValue(finalValue);
            return;
        }

        const targetNumber = parseFloat(match[1]);
        const suffix = match[2];
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        const stepDuration = duration / steps;

        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, targetNumber);

            // Format the number
            const formattedNumber = current % 1 === 0
                ? Math.round(current).toString()
                : current.toFixed(1);

            setDisplayValue(formattedNumber + suffix);

            if (step >= steps || current >= targetNumber) {
                clearInterval(timer);
                // Ensure we end with the exact final value
                setDisplayValue(finalValue);
            }
        }, stepDuration);
    };

    return (
        <div
            ref={elementRef}
            data-animate
            className="pointer-events-auto rounded-2xl px-4 py-3"
        >
            <div className="text-sm uppercase tracking-wide text-black/60">
                {stat.label}
            </div>
            <div className="text-3xl md:text-6xl font-semibold md:font-medium leading-tight tabular-nums">
                {displayValue}
            </div>
            {stat.hint ? (
                <div className="text-sm text-black/50">{stat.hint}</div>
            ) : null}
        </div>
    );
}