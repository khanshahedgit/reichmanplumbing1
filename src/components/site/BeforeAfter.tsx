import { MoveHorizontal } from "lucide-react";
import { useCallback, useRef, useState } from "react";
// REPLACE: swap these two imports with your real before/after job photos.
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section id="before-after" className="bg-paper pb-20 pt-10 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-primary">Before / After</p>
            <h2 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[0.95]">See the transformation.</h2>
          </div>
          <p className="text-sm text-muted-foreground">Drag the handle to compare.</p>
        </Reveal>
        <Reveal>
          <div
            ref={ref}
            className="relative aspect-[4/5] w-full touch-none select-none overflow-hidden rounded-md bg-graphite sm:aspect-[16/9]"
            onPointerDown={(e) => { dragging.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); move(e.clientX); }}
            onPointerMove={(e) => dragging.current && move(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img src={afterImg} alt="After: remodeled bathroom" loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
            <img src={beforeImg} alt="Before: dated bathroom" loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
            <span className="eyebrow absolute left-4 top-4 rounded-sm bg-graphite/80 px-3 py-2 text-paper">Before</span>
            <span className="eyebrow absolute right-4 top-4 rounded-sm bg-primary px-3 py-2 text-primary-foreground">After</span>
            <div className="absolute inset-y-0 w-0.5 bg-paper" style={{ left: `${pos}%` }}>
              <button
                aria-label="Drag to compare before and after"
                role="slider"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
                }}
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-primary text-primary-foreground shadow-xl ring-4 ring-paper/40 transition-transform hover:scale-110"
              >
                <MoveHorizontal className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
