import Link from "next/link";
import Reveal from "./Reveal";

const values = [
  {
    title: "Quality First",
    description: "Premium products and services that meet international standards.",
  },
  {
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do.",
  },
  {
    title: "Innovation",
    description: "Continuously adopting new technologies to serve you better.",
  },
  {
    title: "Integrity",
    description: "Building trust through honest and transparent dealings.",
  },
];

export default function About() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About <span className="text-gold-gradient">CONZTRA</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            A leading industrial solutions provider serving the GCC region with
            premium products and exceptional service.
          </p>
        </Reveal>

        <div className="mb-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="group h-full rounded-2xl border border-white/10 bg-navy-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
                Our Mission
              </p>
              <p className="text-zinc-300">
                To empower businesses across the GCC with quality products,
                reliable services, and unwavering commitment to excellence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="group h-full rounded-2xl border border-white/10 bg-navy-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
                Our Vision
              </p>
              <p className="text-zinc-300">
                To be the most trusted industrial solutions partner in the GCC,
                recognized for innovation, reliability, and customer success.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                <div className="mb-4 h-1 w-8 rounded-full bg-secondary/50 transition-all duration-300 group-hover:w-14 group-hover:bg-secondary" />
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-yellow-400"
          >
            Learn More About Us
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
