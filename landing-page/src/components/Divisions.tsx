import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import ServiceList from "./ServiceList";

const TruckIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6 text-current" aria-hidden="true">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

const BuildingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building w-6 h-6 text-current" aria-hidden="true">
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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check w-6 h-6 text-current" aria-hidden="true">
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
    title: "Equipment Rental, Contracting & Spare Parts",
    tagline: "Amirah",
    image: "/banners/div-equipment.jpg",

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
    tagline: "Al Jessour",
    image: "/banners/div-materials.jpg",

    description: "Premium quality building materials for construction projects",
    href: "/products?category=building",
    services: ["Tile Adhesive", "Wall Plaster", "Dry Mortar", "Gypsum Products"],
    extraServices: ["Steel & Rebar", "Cement & Mortars", "Plywood & MDF", "Paints & Coatings"],
    icon: BuildingIcon,
  },
  {
    title: "Safety Equipment Trading",
    tagline: "KIWI Trading",
    image: "/banners/div-safety.jpg",

    description: "Comprehensive personal protective equipment and safety gear",
    href: "/products?category=uniforms",
    services: ["PPE & Safety Equipment", "Safety Helmets", "Safety Shoes", "Reflective Jackets"],
    extraServices: ["Coveralls", "Safety Goggles", "Work Gloves", "Hearing Protection"],
    icon: ShieldIcon,
  },
];

export default function Divisions() {
  return (
    <section id="services" className="relative overflow-hidden bg-navy-950 py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal delay={0}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-secondary">
              What We Offer
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">
              Our Core Business <span className="text-gold-gradient">Divisions</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
              <span className="h-0.5 w-16 bg-gradient-to-r from-transparent to-secondary" />
              <span className="h-0.5 w-2 bg-secondary" />
              <span className="h-0.5 w-2 bg-secondary" />
              <span className="h-0.5 w-16 bg-gradient-to-l from-transparent to-secondary" />
            </div>
          </Reveal>
          <Reveal delay={360}>
            <p className="mx-auto mt-6 max-w-2xl font-light tracking-wide text-zinc-400">
              Comprehensive construction and industrial solutions tailored to meet your project requirements.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-14">
          {divisions.map((division, i) => (
            <Reveal key={division.title} delay={0}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-2xl shadow-black/40 transition-all duration-500 hover:border-secondary/40">
                <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b from-secondary via-yellow-500 to-secondary opacity-70 lg:block" />
                <div className="grid items-stretch lg:grid-cols-2">
                  <div className="contents lg:order-1 lg:flex lg:flex-col lg:justify-center">
                    <div className="relative order-1 p-5 pb-3 sm:p-12 sm:pb-4">
                      <span className="pointer-events-none absolute right-8 top-8 hidden font-heading text-6xl font-black text-white/5 sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary/40 bg-navy-950 text-secondary sm:h-12 sm:w-12">
                          {division.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary sm:text-xs sm:tracking-[0.35em]">
                          {division.tagline}
                        </span>
                      </div>
                      <h3 className="font-heading text-base font-black uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-secondary sm:text-2xl lg:text-3xl">
                        {division.title}
                      </h3>
                    </div>
                    <div className="relative order-3 p-5 pt-0 sm:p-12 sm:pt-0">
                      <p className="mb-4 max-w-md text-xs leading-relaxed text-zinc-400 sm:text-sm sm:mb-7">
                        {division.description}
                      </p>
                      <ServiceList
                        services={division.services}
                        extraServices={division.extraServices}
                      />
                      <Link
                        href={division.href}
                        className="group/link mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/25 sm:mt-8 sm:w-fit sm:px-6 sm:py-3 sm:text-sm"
                      >
                        <span>Explore Division</span>
                        {ArrowRightIcon}
                      </Link>
                    </div>
                  </div>

                  <div className="relative order-2 aspect-video w-full overflow-hidden lg:order-2 lg:aspect-auto lg:min-h-full">
                    <div className="absolute inset-0 lg:clip-diagonal-left">
                      <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/10 lg:bg-gradient-to-r lg:from-navy-950/40 lg:via-transparent lg:to-navy-950/20" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
                    <div className="pointer-events-none absolute -right-6 top-6 h-24 w-24 border-t-2 border-r-2 border-secondary/50" />
                    <div className="pointer-events-none absolute bottom-6 left-6 hidden h-10 w-32 items-center justify-center border border-secondary/40 bg-navy-950/70 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary backdrop-blur-sm lg:flex">
                      Division 0{i + 1}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
