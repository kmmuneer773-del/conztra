import Link from "next/link";
import Reveal from "./Reveal";
import CardReveal from "./CardReveal";
import KenBurnsBg from "./KenBurnsBg";
import ServiceList from "./ServiceList";

const TruckIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-8 h-8 text-current" aria-hidden="true">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

const BuildingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building w-8 h-8 text-current" aria-hidden="true">
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M12 6h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
    <path d="M8 6h.01" />
    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    <rect x="4" y="2" width="16" height="20" rx="2" />
  </svg>
);

const ShieldIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-8 h-8 text-current" aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowRightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const divisions = [
  {
    title: "Equipment Rental & Contracting",
    image: "/banners/divisions-equipment.jpg",
    description: "Heavy equipment rental and contracting services for construction projects",
    href: "/products?category=equipment",
    services: [
      "Heavy Equipment Rental",
      "Construction Equipment",
      "Hydraulic Hose Services",
      "Equipment Maintenance",
    ],
    extraServices: ["Aerial Work Platforms", "Generators & Lighting"],
    icon: TruckIcon,
  },
  {
    title: "Building Materials Trading",
    image: "/banners/divisions-materials.jpg",
    description: "Premium quality building materials for construction projects",
    href: "/products?category=building",
    services: ["Tile Adhesive", "Wall Plaster", "Dry Mortar", "Gypsum Products"],
    extraServices: ["Steel & Rebar", "Cement & Mortars", "Plywood & MDF", "Paints & Coatings"],
    icon: BuildingIcon,
  },
  {
    title: "Safety Equipment Trading",
    image: "/banners/divisions-safety.jpg",
    description: "Comprehensive personal protective equipment and safety gear",
    href: "/products?category=uniforms",
    services: ["PPE & Safety Equipment", "Safety Helmets", "Safety Shoes", "Reflective Jackets"],
    extraServices: ["Coveralls", "Safety Goggles", "Work Gloves", "Hearing Protection"],
    icon: ShieldIcon,
  },
];

export default function Divisions() {
  return (
    <section id="services" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <Reveal delay={0}>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
              What We Offer
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ animation: "titleReveal 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>
              Our Core Business <span className="text-gold-gradient">Divisions</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
          </Reveal>
          <Reveal delay={360}>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Comprehensive construction and industrial solutions tailored to meet your project requirements.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {divisions.map((division, i) => (
            <CardReveal key={division.title} delay={i * 140}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-2xl hover:shadow-black/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <KenBurnsBg src={division.image} alt={division.title} reverse={i % 2 === 1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-900/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="badge-pop flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/90 text-primary shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary"
                      style={{ animationDelay: `${i * 140 + 350}ms` }}
                    >
                      {division.icon}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-3 font-heading text-2xl font-bold text-white transition-colors duration-300 group-hover:text-secondary">
                    {division.title}
                  </h3>
                  <p className="mb-6 flex-grow leading-relaxed text-zinc-400">
                    {division.description}
                  </p>
                  <ServiceList
                    services={division.services}
                    extraServices={division.extraServices}
                  />
                  <Link
                    href={division.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-yellow-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/25"
                  >
                    <span>Explore</span>
                    {ArrowRightIcon}
                  </Link>
                </div>
              </div>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
