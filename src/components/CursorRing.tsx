// components/CursorRing.tsx
"use client";
import React from "react";

export default function CursorRing() {
    const ref = React.useRef<HTMLDivElement>(null);
    const target = React.useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const curr = React.useRef({ x: target.current.x, y: target.current.y });
    const down = React.useRef(false);
    const raf = React.useRef<number>(0);

    React.useEffect(() => {
        const onMove = (e: PointerEvent) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;
            if (ref.current) ref.current.style.opacity = "1";
        };
        const onLeave = () => {
            if (ref.current) ref.current.style.opacity = "0";
        };
        const onDown = () => { down.current = true; };
        const onUp = () => { down.current = false; };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerleave", onLeave, { passive: true });
        window.addEventListener("pointerdown", onDown, { passive: true });
        window.addEventListener("pointerup", onUp, { passive: true });

        const tick = () => {
            // damp toward target
            curr.current.x += (target.current.x - curr.current.x) * 0.18;
            curr.current.y += (target.current.y - curr.current.y) * 0.18;
            if (ref.current) {
                ref.current.style.transform = `translate3d(${curr.current.x}px, ${curr.current.y}px, 0) translate(-50%, -50%) scale(${down.current ? 0.85 : 1})`;
            }
            raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointerup", onUp);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="fixed left-0 top-0 z-[9999] pointer-events-none opacity-0 transition-opacity duration-200"
            style={{
                width: 28,
                height: 28,
                borderRadius: "9999px",
                border: "1.5px solid rgba(255,255,255,0.8)",
                boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                backdropFilter: "blur(2px)",
                mixBlendMode: "difference", // stays visible on both light/dark
            }}
        />
    );
}
