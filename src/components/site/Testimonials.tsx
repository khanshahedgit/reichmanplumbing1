import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { REVIEWS } from "@/lib/business";

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i] ?? REVIEWS[0]!;
  const go = (d: number) => setI((v) => (v + d + REVIEWS.length) % REVIEWS.length);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-graphite-2 py-20 text-paper sm:py-28">
      <span aria-hidden className="pointer-events-none absolute -left-4 -top-16 select-none font-display text-[18rem] font-extrabold leading-none text-primary/15 sm:text-[26rem]">“</span>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-primary">Trusted by homeowners</p>
          <p className="flex items-center gap-2 text-sm text-paper/60">
            <span className="flex text-primary">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</span>
            {REVIEWS.length} Reviews
          </p>
        </div>

        <div className="mt-10 min-h-[22rem] sm:min-h-[20rem]">
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <blockquote className="font-display text-[clamp(1.5rem,3.6vw,3rem)] font-bold leading-[1.15]">“{r.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-primary" />
                <span className="font-semibold">{r.name}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line-dark pt-6">
          <span className="font-display text-sm font-bold text-paper/60">
            <span className="text-paper">{String(i + 1).padStart(2, "0")}</span> / {String(REVIEWS.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button aria-label="Previous review" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-md border border-line-dark transition-colors hover:border-primary hover:bg-primary"><ArrowLeft className="h-5 w-5" /></button>
            <button aria-label="Next review" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-md border border-line-dark transition-colors hover:border-primary hover:bg-primary"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
