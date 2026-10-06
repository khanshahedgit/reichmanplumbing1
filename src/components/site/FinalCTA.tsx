import { Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-graphite text-paper">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <p className="eyebrow text-primary">Contact</p>
          <h2 className="mt-5 text-[clamp(2.6rem,9vw,8rem)] font-extrabold uppercase leading-[0.88]">
            Let's get your plumbing <span className="text-primary">right.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-paper/70">
            From new installations and repairs to water lines, sewer lines, water heaters, and remodeling, Reichman Plumbing is here to help.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center gap-3 rounded-md bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all hover:shadow-[0_10px_40px_-8px_var(--color-primary)]">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="inline-flex items-center justify-center gap-3 rounded-md border border-paper/25 px-7 py-4 font-semibold transition-colors hover:border-paper">
              <Mail className="h-5 w-5" /> Email Reichman Plumbing
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-line-dark pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow text-steel">Phone & Email</p>
            <a href={BUSINESS.phoneHref} className="mt-3 block font-semibold hover:text-primary">{BUSINESS.phone}</a>
            <a href={`mailto:${BUSINESS.email}`} className="mt-1 block break-all text-paper/70 hover:text-primary">{BUSINESS.email}</a>
          </div>
          <div>
            <p className="eyebrow text-steel">Address</p>
            <a href={BUSINESS.mapsHref} target="_blank" rel="noreferrer" className="mt-3 flex gap-2 text-paper/80 hover:text-primary">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {BUSINESS.address}
            </a>
          </div>
          <div>
            <p className="eyebrow text-steel">Service Area</p>
            <p className="mt-3 text-paper/80">{BUSINESS.area}</p>
          </div>
          <div>
            <p className="eyebrow text-steel">Connect</p>
            <div className="mt-3 flex gap-2">
              <a href={BUSINESS.messenger} target="_blank" rel="noreferrer" aria-label="Message on Messenger" className="grid h-11 w-11 place-items-center rounded-md border border-line-dark transition-colors hover:border-primary hover:bg-primary"><MessageCircle className="h-5 w-5" /></a>
              <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-md border border-line-dark transition-colors hover:border-primary hover:bg-primary"><Facebook className="h-5 w-5" /></a>
              <a href={`mailto:${BUSINESS.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center rounded-md border border-line-dark transition-colors hover:border-primary hover:bg-primary"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line-dark pt-8 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/60">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-paper">{n.label}</a>)}
          </nav>
          <p className="text-xs text-paper/40">© {new Date().getFullYear()} Reichman Plumbing. Family-owned & locally operated.</p>
        </div>
        <p aria-hidden className="mt-10 select-none text-center font-display text-[clamp(3rem,15vw,13rem)] font-extrabold leading-none text-paper/[0.04]">REICHMAN</p>
      </div>
    </footer>
  );
}
