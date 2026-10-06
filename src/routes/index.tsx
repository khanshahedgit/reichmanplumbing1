import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { ProblemSelector } from "@/components/site/ProblemSelector";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ProcessAndReels } from "@/components/site/ProcessAndReels";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reichman Plumbing | Tuscarawas County Plumbing & Water Services" },
      { name: "description", content: "Family-owned, locally operated plumbing in New Philadelphia, OH. New construction, repairs, water lines, sewer lines, water heaters and remodeling." },
      { property: "og:title", content: "Reichman Plumbing — Plumbing, Without the Panic." },
      { property: "og:description", content: "Family-owned plumbing and water services for Tuscarawas County and surrounding communities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <ProblemSelector />
      <WhyChooseUs />
      <BeforeAfter />
      <ProcessAndReels />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
