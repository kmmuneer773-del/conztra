import Link from "next/link";
import Reveal from "./Reveal";

const points = [
  {
    number: "01",
    title: "Quality Products",
    description:
      "Every product meets international standards — ISO, CE-marked, and ADNOC-approved for GCC-grade projects.",
  },
  {
    number: "02",
    title: "Fast Delivery",
    description:
      "Reliable logistics and stocked warehouses ensure your critical supplies arrive on time.",
  },
  {
    number: "03",
    title: "Complete Solutions",
    description:
      "One-stop for building materials, safety equipment, equipment rental, and precast barriers.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
            The CONZTRA Advantage
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose <span className="text-gold-gradient">CONZTRA</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.number} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-950 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-secondary/10" />
                <span className="font-heading text-4xl font-black text-secondary/30 transition-colors duration-300 group-hover:text-secondary/60">
                  {point.number}
                </span>
                <h3 className="mb-3 mt-4 font-heading text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={150}>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
          >
            Speak to Our Team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
