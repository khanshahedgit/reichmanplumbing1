import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { BUSINESS, NAV } from "@/lib/business";

// REPLACE: set HERO_VIDEO to your final plumbing video URL (e.g. "/videos/hero.mp4").
// While empty, the poster image is shown instead.
const HERO_VIDEO = "";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-graphite text-paper">
      <motion.div className="absolute inset-0" style={{ y }} initial={{ scale: 1.15 }} animate={{ scale: 1.03 }} transition={{ duration: 2.4, ease }}>
        {HERO_VIDEO ? (
          <video className="h-full w-full object-cover" src={HERO_VIDEO} poster={heroImg} autoPlay muted loop playsInline />
        ) : (
          <img src={heroImg} alt="Reichman Plumbing technician working on copper pipes" className="h-full w-full object-cover" width={1920} height={1088} />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/70 to-graphite/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/80 to-transparent" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="#top" className="min-w-0 font-display text-lg font-extrabold tracking-tight">
          REICHMAN<span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-7 text-sm text-paper/70 lg:flex">
          {NAV.slice(1).map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-paper">{n.label}</a>
          ))}
        </nav>
        <a href={BUSINESS.phoneHref} className="flex shrink-0 items-center gap-2 rounded-md border border-paper/20 px-3 py-2 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary">
          <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{BUSINESS.phone}</span><span className="sm:hidden">Call</span>
        </a>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-20 sm:px-8 sm:pb-14">
        <motion.p className="eyebrow text-primary" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease }}>
          Family-Owned • Locally Operated
        </motion.p>
        <h1 className="mt-5 max-w-5xl text-[clamp(2.6rem,9vw,7.5rem)] font-extrabold leading-[0.92]">
          {["Plumbing,", "Without the Panic."].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.55 + i * 0.15, duration: 1, ease }}>
                {i === 1 ? <>Without the <span className="text-primary">Panic.</span></> : line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="mt-6 max-w-xl text-base text-paper/75 sm:text-lg" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease }}>
          Reliable plumbing and water services for new construction, repairs, and the homes and businesses of Tuscarawas County and surrounding communities.
        </motion.p>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8, ease }}>
          <a href={BUSINESS.phoneHref} className="group inline-flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:shadow-[0_10px_40px_-8px_var(--color-primary)]">
            <Phone className="h-5 w-5 transition-transform group-hover:-rotate-12" /> Call Reichman Plumbing
          </a>
          <a href="#services" className="group inline-flex items-center justify-center gap-3 rounded-md border border-paper/25 px-6 py-4 font-semibold transition-colors hover:border-paper">
            Explore Our Services <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
        <motion.ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-paper/15 pt-6 text-sm text-paper/70 sm:flex sm:gap-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}>
          {["New Construction", "Repair Plumbing", "Water Services", "Local Service"].map((t) => (
            <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 shrink-0 bg-primary" />{t}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
