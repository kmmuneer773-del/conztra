import Link from "next/link";
import Reveal from "./Reveal";

const divisions = [
  {
    title: "Equipment Rental & Contracting",
    description:
      "Heavy equipment rental and contracting services for construction projects.",
    services: ["Heavy Equipment Rental", "Hydraulic Hose Services", "Equipment Maintenance"],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5V21m-9 0v-4.5a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5V21M4 21h16M12 3.75l1.72 1.59 2.28-1.44 1.5 1.5-1.44 2.28L18 9l-1.5 1.5-2.28-1.44L12.75 10.5 12 12l-.75-1.5L9.78 12.06 7.5 13.5 6 12l1.44-1.72L6 8.28l1.5-1.5 2.28 1.44L11.5 5.84 12 3.75z" />
      </svg>
    ),
  },
  {
    title: "Safety Equipment Trading",
    description:
      "Comprehensive personal protective equipment and safety gear.",
    services: ["PPE", "Safety Helmets", "Safety Shoes"],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.95 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Building Materials Trading",
    description:
      "Premium quality building materials for construction projects.",
    services: ["Tile Adhesive", "Wall Plaster", "Gypsum Products"],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Precast & Road Barrier Solutions",
    description:
      "Precast concrete products and road safety barriers.",
    services: ["Precast Concrete", "Road Barriers", "Concrete Blocks"],
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

export default function Divisions() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Core Business <span className="text-gold-gradient">Divisions</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Construction and industrial solutions tailored to your project requirements.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {divisions.map((division, i) => (
            <Reveal key={division.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20">
                  {division.icon}
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-white">
                  {division.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                  {division.description}
                </p>
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Key Services
                </p>
                <ul className="mb-7 flex flex-col gap-2">
                  {division.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-zinc-300">
                      <svg className="h-4 w-4 shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-auto text-sm font-semibold text-secondary transition-colors hover:text-yellow-400"
                >
                  Explore →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
