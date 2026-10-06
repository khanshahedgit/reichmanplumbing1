import { motion } from "framer-motion";
import { Droplets, HardHat, Heart, Home, MapPin, Wrench } from "lucide-react";
import repairImg from "@/assets/svc-repair.jpg";
import { Reveal } from "./Reveal";

const QUALITIES = [
  { icon: Home, t: "Family-Owned", d: "A family business serving its own community." },
  { icon: MapPin, t: "Locally Operated", d: "Based in New Philadelphia, serving Tuscarawas County." },
  { icon: HardHat, t: "New Construction Expertise", d: "Plumbing for new builds, done right from the start." },
  { icon: Wrench, t: "Repair Plumbing", d: "Everyday fixes for homes and businesses." },
  { icon: Droplets, t: "Comprehensive Water Services", d: "Water lines, heaters and more." },
  { icon: Heart, t: "Customer-Focused Service", d: "Clear communication and respect for your home." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="relative">
          <Reveal>
            <p className="eyebrow text-primary">Why Reichman</p>
            <h2 className="mt-4 text-[clamp(2.4rem,6.5vw,5.5rem)] font-extrabold leading-[0.92]">
              The difference is in the <span className="text-primary">details.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Family-owned, locally operated, and focused on dependable plumbing and water services for the local community.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="relative mt-10">
            <img src={repairImg} alt="Plumber tightening a copper fitting" loading="lazy" width={896} height={1152} className="aspect-[4/3] w-full rounded-md object-cover" />
            <motion.div
              className="absolute -bottom-6 right-4 max-w-[14rem] rounded-md bg-graphite p-5 text-paper shadow-2xl sm:right-[-1.5rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="eyebrow text-primary">Service area</p>
              <p className="mt-2 font-display font-bold leading-snug">Tuscarawas County & surrounding communities</p>
            </motion.div>
          </Reveal>
        </div>

        <ul className="grid gap-px self-center bg-border sm:grid-cols-2">
          {QUALITIES.map((q, i) => (
            <Reveal key={q.t} delay={i * 0.06} className={`bg-paper ${i % 2 === 1 ? "sm:translate-y-10" : ""}`}>
              <li className="group h-full p-6 transition-colors duration-300 hover:bg-graphite hover:text-paper sm:p-8">
                <q.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-6 text-xl font-extrabold">{q.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-paper/70">{q.d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
