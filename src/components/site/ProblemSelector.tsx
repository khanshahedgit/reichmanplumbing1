import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { useState } from "react";
import { BUSINESS, PROBLEMS, SERVICES } from "@/lib/business";
import { Reveal } from "./Reveal";

export function ProblemSelector() {
  const [active, setActive] = useState(0);
  const p = PROBLEMS[active];
  const related = SERVICES.filter((s) => p.services.includes(s.id));

  return (
    <section className="bg-graphite py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-primary">Tell us what you're dealing with.</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[0.95]">What's going wrong?</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ul className="border-t border-line-dark">
            {PROBLEMS.map((item, i) => (
              <li key={item.label}>
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group flex w-full items-center justify-between gap-4 border-b border-line-dark py-4 text-left sm:py-5"
                >
                  <span className="flex min-w-0 items-baseline gap-4">
                    <span className={`font-display text-xs font-bold ${i === active ? "text-primary" : "text-steel"}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={`font-display text-xl font-extrabold transition-all duration-300 sm:text-3xl ${i === active ? "translate-x-2 text-paper" : "text-paper/35 group-hover:text-paper/70"}`}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className={`h-5 w-5 shrink-0 transition-all ${i === active ? "rotate-45 text-primary" : "text-paper/20"}`} />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="relative overflow-hidden rounded-md border border-line-dark bg-graphite-2">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img src={related[0]?.img} alt="" className="h-full w-full object-cover opacity-70" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-2 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-extrabold sm:text-3xl">{p.label}</h3>
                    <p className="mt-3 text-paper/70">{p.text}</p>
                    <p className="eyebrow mt-6 text-steel">Related services</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SERVICES.map((s) => (
                        p.services.includes(s.id) && (
                          <span key={s.id} className="rounded-sm border border-primary bg-primary/15 px-3 py-1.5 text-xs font-semibold text-paper">{s.name}</span>
                        )
                      ))}
                    </div>
                    <a href={BUSINESS.phoneHref} className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto">
                      <Phone className="h-5 w-5" /> Call about {p.label.toLowerCase()}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
