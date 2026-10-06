import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { SERVICES } from "@/lib/business";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto mb-12 grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 md:items-end">
        <Reveal>
          <p className="eyebrow text-primary">Services</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[0.95]">Solutions, not just services.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-muted-foreground md:ml-auto">
            From new construction to repairs, water lines to remodels — ten ways Reichman Plumbing keeps your water working.
          </p>
        </Reveal>
      </div>
      <ImageAutoSlider duration={70}>
        {SERVICES.map((s, i) => (
          <article key={s.id} className="group relative h-[420px] w-[280px] overflow-hidden rounded-md bg-graphite sm:h-[500px] sm:w-[360px]">
            <img src={s.img} alt={s.name} loading="lazy" width={896} height={1152} className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
            <span className="absolute left-5 top-5 font-display text-sm font-bold text-paper/60">{String(i + 1).padStart(2, "0")}</span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-6">
              <div className="mb-4 h-0.5 w-8 bg-primary transition-all duration-500 group-hover:w-16" />
              <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">{s.name}</h3>
              <p className="mt-2 text-sm text-paper/70">{s.desc}</p>
            </div>
          </article>
        ))}
      </ImageAutoSlider>
    </section>
  );
}
