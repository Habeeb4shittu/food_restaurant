import { ForwardedRef, forwardRef, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    id: string;
    themeKey: string; // 'hero' | 'highlights' | ...
    alignContent?: string,
}>;

export const FullpageSection = forwardRef(function FullpageSection(
    { id, themeKey, alignContent = "center", children }: Props,
    ref: ForwardedRef<HTMLDivElement>
) {
    return (
        <section
            id={id}
            ref={ref}
            data-theme={themeKey}
            className={`snap-start [scroll-snap-stop:always] min-h-[100svh] grid place-items-${alignContent} relative`}
        >
            {children}
        </section>

    );
});
