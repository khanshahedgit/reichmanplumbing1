import { Play } from "lucide-react";
import hero from "@/assets/hero.jpg";
import heater from "@/assets/svc-heater.jpg";
import kitchen from "@/assets/svc-kitchen.jpg";
import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", t: "Diagnose", d: "We look at what's going on." },
  { n: "02", t: "Explain", d: "We tell you what we found." },
  { n: "03", t: "Repair", d: "We do the work." },
  { n: "04", t: "Done", d: "Your plumbing is back in order." },
];

// REPLACE: set `embed` to a Facebook Reel embed URL
// (e.g. "https://www.facebook.com/plugins/video.php?href=...") and update titles.
const REELS = [
  { title: "Reel title placeholder 01", poster: hero, embed: "" },
  { title: "Reel title placeholder 02", poster: heater, embed: "" },
  { title: "Reel title placeholder 03", poster: kitchen, embed: "" },
];

export function ProcessAndReels() {
  return (
    <section className="bg-graphite py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-primary">How it works</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[0.95]">From problem to fixed.</h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-line-dark lg:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <li className="group relative lg:pr-8">
                <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-primary bg-graphite font-display text-xs font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">{s.n}</span>
                <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">{s.t}</h3>
                <p className="mt-2 text-sm text-paper/60">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="-mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
          {REELS.map((r, i) => (
            <Reveal key={i} delay={i * 0.1} className="w-[78%] shrink-0 snap-center sm:w-auto">
              <article className="group relative aspect-[9/16] overflow-hidden rounded-md bg-graphite-2">
                {r.embed ? (
                  <iframe src={r.embed} title={r.title} className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                ) : (
                  <>
                    <img src={r.poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="eyebrow text-primary">Facebook Reel</p>
                      <h3 className="mt-2 text-lg font-bold">{r.title}</h3>
                    </div>
                  </>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
