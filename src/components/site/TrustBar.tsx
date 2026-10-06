import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "./Reveal";

const ITEMS = ["Family-Owned", "Locally Operated", "New Construction", "Repair Plumbing", "Water Services"];

export function TrustBar() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="relative overflow-hidden bg-graphite text-paper">
      <div className="h-1 w-full bg-primary" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr] md:items-end md:py-20">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,5vw,3.75rem)] font-extrabold uppercase leading-[0.95]">
            When plumbing can't wait, <span className="text-primary">call the local team.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <a href={BUSINESS.phoneHref} className="group block border-l-2 border-primary pl-5">
            <span className="eyebrow text-steel">Talk to Reichman Plumbing</span>
            <span className="mt-2 flex items-center gap-3 font-display text-2xl font-extrabold sm:text-4xl">
              <Phone className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:scale-110" />
              <span className="transition-colors group-hover:text-primary">{BUSINESS.phone}</span>
            </span>
          </a>
        </Reveal>
      </div>
      <div className="border-y border-line-dark bg-graphite-2 py-5">
        <div className="mask-x overflow-hidden">
          <ul className="marquee flex w-max" style={{ ["--marquee-duration" as string]: "30s" }}>
            {[...row, ...row].map((t, i) => (
              <li key={i} className="group flex shrink-0 items-center gap-6 px-6">
                <span className="font-display text-2xl font-extrabold uppercase text-paper/30 transition-colors duration-300 group-hover:text-paper sm:text-4xl">
                  {t}
                </span>
                <span className="h-3 w-3 rotate-45 bg-primary transition-transform duration-300 group-hover:rotate-[135deg]" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
