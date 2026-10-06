import type { ReactNode } from "react";

/** Seamless, masked, continuously-scrolling horizontal track. Items are duplicated for looping. */
export function ImageAutoSlider({ children, duration = 60 }: { children: ReactNode[]; duration?: number }) {
  return (
    <div className="mask-x w-full overflow-hidden">
      <div
        className="marquee flex w-max gap-4 sm:gap-6"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[...children, ...children].map((c, i) => (
          <div key={i} className="shrink-0" aria-hidden={i >= children.length}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
