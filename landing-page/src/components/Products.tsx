"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Navbar";

type FeaturedItem = {
  name: string;
  image: string;
  detail: string;
};

type Product = {
  name: string;
  image: string;
  caption: string;
  description: string;
  download: string;
  items: FeaturedItem[];
};

type Category = {
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  download: string;
  products: Product[];
};

const categories: Category[] = [
  {
    name: "Equipment Rental",
    shortName: "Equipment",
    tagline: "Amirah",
    icon: "crane",
    download: "/downloads/Amirah-Brochure.pdf",
    products: [
      {
        name: "Cranes",
        image: "/catalogue/amirah-crane.jpg",
        caption: "Crane Rental",
        description:
          "Heavy-duty lifting solutions for engineering and turnkey projects.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Mobile Crane",
            image: "/products/crane-mobile.jpg",
            detail: "All-terrain, rough-terrain & truck-mounted",
          },
          {
            name: "Crawler Crane",
            image: "/products/crane-crawler.jpg",
            detail: "Lifting, jacking & skidding",
          },
          {
            name: "Tower Crane",
            image: "/products/crane-tower.jpg",
            detail: "Suitable for all construction sites",
          },
        ],
      },
      {
        name: "Excavators",
        image: "/catalogue/amirah-excavator.jpg",
        caption: "Excavators",
        description:
          "High-performance excavators from our rental fleet for earthmoving and excavation.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Excavator",
            image: "/products/excavator.jpg",
            detail: "CASE CX220C / ZE215E · earthmoving & excavation",
          },
        ],
      },
      {
        name: "Dozers",
        image: "/catalogue/amirah-dozer.jpg",
        caption: "Dozers",
        description:
          "CAT and Komatsu dozers for grading, levelling and site preparation.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Caterpillar & Komatsu Dozer",
            image: "/products/dozer.jpg",
            detail: "D4–D9 / D65–D155 · 62–306 kW · 8,147–47,872 kg",
          },
        ],
      },
      {
        name: "Wheel Loaders",
        image: "/products/wheelloader.jpg",
        caption: "Wheel Loaders",
        description:
          "Productive loaders for construction sites, quarries and mines.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Wheel Loader 82YF",
            image: "/products/wheelloader.jpg",
            detail: "Construction, quarry & mine duty",
          },
        ],
      },
      {
        name: "Rollers & Compactors",
        image: "/products/roller.jpg",
        caption: "Rollers & Compactors",
        description:
          "Efficient rollers and compactors for soil, landfill and paving works.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Roller / Compactor",
            image: "/products/roller.jpg",
            detail: "Soil, landfill & paving compaction",
          },
        ],
      },
      {
        name: "Backhoe Loaders",
        image: "/products/backhoe.jpg",
        caption: "Backhoe Loaders",
        description:
          "Versatile backhoe loaders for construction, landscaping and demolition.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "JCB Backhoe Loader",
            image: "/products/backhoe.jpg",
            detail: "Construction, landscaping, demolition & excavation",
          },
        ],
      },
      {
        name: "Telehandlers",
        image: "/products/telehandler.jpg",
        caption: "Telehandlers",
        description:
          "High-productivity telehandlers with best-in-class comfort and reliability.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "JCB Telehandler 540-170",
            image: "/products/telehandler.jpg",
            detail: "High productivity with best-in-class comfort & reliability",
          },
        ],
      },
      {
        name: "Skid Steer Loaders",
        image: "/products/skidsteer.jpg",
        caption: "Skid Steer Loaders",
        description:
          "Compact, powerful skid steer loaders built for safety and efficiency.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Skid Steer Loader",
            image: "/products/skidsteer.jpg",
            detail: "Safety, reliability & efficiency · powerful & compact",
          },
        ],
      },
      {
        name: "Boom Lifts",
        image: "/products/boomlift.jpg",
        caption: "Boom Lifts",
        description:
          "Articulated boom lifts with industry-specific standards and the latest lift technology.",
        download: "/downloads/Amirah-Brochure.pdf",
        items: [
          {
            name: "Articulated Boom Lift",
            image: "/products/boomlift.jpg",
            detail: "Industry-specific standards & latest lift technology",
          },
        ],
      },
    ],
  },
  {
    name: "Building Materials",
    shortName: "Building",
    tagline: "Al Jessour",
    icon: "building",
    download: "/downloads/al-jessur-catalogue.pdf",
    products: [
      {
        name: "Steel & Rebar",
        image: "/catalogue/aljessour-steel.jpg",
        caption: "Steel & Reinforcement",
        description:
          "Certified reinforcement steel from authorised UAE and GCC mills.",
        download: "/downloads/al-jessur-catalogue.pdf",
        items: [
          {
            name: "Deformed Steel Rebar",
            image: "/products/steel-rebar.jpg",
            detail: "08–32 mm · AGSI, Jindal, Shadeed, Qatar Steel",
          },
          {
            name: "MS Cold Drawn Steel Bars",
            image: "/products/steel-msdrawn.jpg",
            detail: "6–12 mm · Grade BS 4482 / ASTM A1064",
          },
          {
            name: "MS Plain Bars",
            image: "/products/steel-msplain.jpg",
            detail: "5.5 / 8 / 10 / 12 mm · Grade SAE 1008",
          },
          {
            name: "BRC Mesh / Wire Mesh",
            image: "/products/steel-brcmesh.jpg",
            detail: "BS 4483 / ASTM A1064 · openings 100–250 mm",
          },
        ],
      },
      {
        name: "Cement & Mortars",
        image: "/catalogue/aljessour-cement.jpg",
        caption: "Cement & Mortars",
        description:
          "Portland cement and ready-to-use mortars from authorised brands.",
        download: "/downloads/al-jessur-catalogue.pdf",
        items: [
          {
            name: "OPC",
            image: "/products/cement-opc.jpg",
            detail: "Ordinary Portland Cement · 50 kg",
          },
          {
            name: "SRC",
            image: "/products/cement-src.jpg",
            detail: "Sulphate Resisting Portland Cement · 50 kg",
          },
          {
            name: "Rushcoat 510",
            image: "/products/cement-rushcoat.jpg",
            detail: "Premix plaster",
          },
          {
            name: "Tile Fix 700",
            image: "/products/cement-tilefix.jpg",
            detail: "Tile adhesive",
          },
        ],
      },
      {
        name: "Plywood & MDF",
        image: "/catalogue/aljessour-plywood.jpg",
        caption: "Plywood & MDF",
        description:
          "Commercial, film-face and marine plywood in standard sizes.",
        download: "/downloads/al-jessur-catalogue.pdf",
        items: [
          {
            name: "Commercial Plywood",
            image: "/products/ply-commercial.jpg",
            detail: "4 / 6 / 9 / 12 / 15 / 18 mm",
          },
          {
            name: "Film Face Plywood",
            image: "/products/ply-filmface.jpg",
            detail: "12 / 18 mm · 1220 x 2440 mm",
          },
          {
            name: "PVC Coated Film Face",
            image: "/products/ply-pvc.jpg",
            detail: "18 mm · Viva Max Silver / Gold",
          },
          {
            name: "PVC Laminated Plywood",
            image: "/products/ply-laminated.jpg",
            detail: "18 mm",
          },
        ],
      },
      {
        name: "Paints & Coatings",
        image: "/catalogue/aljessour-paint.jpg",
        caption: "Paints & Coatings",
        description:
          "Interior and exterior paints and coatings from Jotun and National Paints.",
        download: "/downloads/al-jessur-catalogue.pdf",
        items: [
          {
            name: "Fenomastic",
            image: "/products/paint-fenomastic.jpg",
            detail: "Jotun interior / exterior emulsion",
          },
          {
            name: "Easycoat",
            image: "/products/paint-easycoat.jpg",
            detail: "Jotun interior emulsion",
          },
          {
            name: "Jotashield",
            image: "/products/paint-jotashield.jpg",
            detail: "Jotun exterior protective coating",
          },
          {
            name: "Rich Matt",
            image: "/products/paint-richmatt.jpg",
            detail: "Jotun decorative interior",
          },
        ],
      },
    ],
  },
  {
    name: "Uniforms & Safety Apparel",
    shortName: "Uniforms",
    tagline: "KIWI Trading",
    icon: "uniform",
    download: "/downloads/KIWI%20-%20PROFILE-1.pdf",
    products: [
      {
        name: "Doctor Coats",
        image: "/catalogue/kiwi-medical.jpg",
        caption: "Medical Wear",
        description:
          "Professional medical wear tailored in premium poly-cotton fabrics.",
        download: "/downloads/KIWI%20-%20PROFILE-1.pdf",
        items: [
          {
            name: "Doctor Coat",
            image: "/products/doctor-coat.jpg",
            detail: "Poly Cotton or Poly Viscose · long sleeves · back slit · 3 pockets",
          },
          {
            name: "Nurse Jacket",
            image: "/products/nurse-jacket.jpg",
            detail: "Poly Viscose · short sleeves · open collar · 2 pockets",
          },
          {
            name: "Nurse Trouser",
            image: "/products/nurse-trouser.jpg",
            detail: "Poly Viscose · 2 slant pockets",
          },
          {
            name: "O.T. Scrub Suit",
            image: "/products/scrub-suit.jpg",
            detail: "100% cotton · short sleeves · V neck · 2 hip pockets",
          },
        ],
      },
      {
        name: "Chef Jackets",
        image: "/catalogue/kiwi-hospitality.jpg",
        caption: "Hospitality Wear",
        description:
          "Chef wear and restaurant uniforms for professional kitchens.",
        download: "/downloads/KIWI%20-%20PROFILE-1.pdf",
        items: [
          {
            name: "Chef Jacket",
            image: "/products/chef-jacket.jpg",
            detail: "Poly Cotton · long sleeves · double chest · 10 buttons",
          },
          {
            name: "Shirt Waiter",
            image: "/products/shirt-waiter.jpg",
            detail: "Poly Cotton · long sleeves with piping",
          },
          {
            name: "Shirt Waitress",
            image: "/products/shirt-waitress.jpg",
            detail: "Poly Cotton · long sleeves with piping",
          },
          {
            name: "Skirt",
            image: "/products/skirt-hosp.jpg",
            detail: "Poly Viscose / Wool · knee length · back zip opening",
          },
        ],
      },
      {
        name: "Executive Suits",
        image: "/catalogue/kiwi-corporate.jpg",
        caption: "Corporate Wear",
        description:
          "Tailored corporate and executive wear for a sharp professional look.",
        download: "/downloads/KIWI%20-%20PROFILE-1.pdf",
        items: [
          {
            name: "Jacket (Male)",
            image: "/products/jacket-male.jpg",
            detail: "Poly Wool · long sleeves · single breast · 2 buttons",
          },
          {
            name: "Trouser (Male)",
            image: "/products/trouser-male.jpg",
            detail: "Poly Wool · pleatless front · 2 slant + 1 back pocket",
          },
          {
            name: "Jacket (Female)",
            image: "/products/jacket-female.jpg",
            detail: "Poly Wool · 1 button · suit collar · 2 pockets",
          },
          {
            name: "Skirt",
            image: "/products/skirt-corp.jpg",
            detail: "Poly Wool · pencil cut",
          },
        ],
      },
      {
        name: "Construction Uniforms",
        image: "/catalogue/kiwi-construction.jpg",
        caption: "Construction Wear",
        description:
          "Durable safety and construction workwear built for the job site.",
        download: "/downloads/KIWI%20-%20PROFILE-1.pdf",
        items: [
          {
            name: "Reflective Safety Jacket",
            image: "/products/security-jacket.jpg",
            detail: "Poly Viscose / Wool · long sleeves · epaulettes · 2 pockets",
          },
          {
            name: "Coveralls",
            image: "/products/coveralls.jpg",
            detail: "Poly Cotton / Twill · fire retardant option · reflector",
          },
          {
            name: "Technician Shirt",
            image: "/products/technician-shirt.jpg",
            detail: "Poly Cotton / Twill · short sleeves · 2 pocket flaps",
          },
          {
            name: "Cargo Trouser",
            image: "/products/cargo-trouser.jpg",
            detail: "Poly Cotton / Twill · 6 pockets",
          },
        ],
      },
    ],
  },
];

function CategoryIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  if (name === "uniform") {
    return (
      <svg {...common}>
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
        <path d="M16 6a4 4 0 0 1-8 0" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...common}>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M2 21h20" />
      <path d="M8 21V5l6-2v18" />
      <path d="M8 8l8-3" />
      <path d="m16 4 4 7h-3l-2-4" />
      <path d="M17 11v10" />
      <path d="M5 5H2" />
    </svg>
  );
}

export default function Products() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Product | null>(null);
  const category = categories[active];
  const back = () => setSelected(null);

  return (
    <section id="products" className="relative bg-navy-950 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-gold-gradient">Products</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Select a product to view its featured items with details and pricing.
          </p>
        </Reveal>

        <Reveal className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => {
                setActive(i);
                setSelected(null);
              }}
              className={
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors " +
                (i === active
                  ? "bg-secondary text-primary"
                  : "border border-white/15 text-zinc-300 hover:border-secondary/50 hover:text-white")
              }
            >
              <CategoryIcon name={cat.icon} className="h-4 w-4" />
              {cat.shortName}
            </button>
          ))}
        </Reveal>

        {selected ? (
          <div>
            <button
              onClick={back}
              className="mb-6 flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-yellow-400"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {category.shortName} products
            </button>

            <Reveal className="mb-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                    {category.tagline} · {selected.caption}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
                    {selected.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-zinc-400">{selected.description}</p>
                </div>
                <a
                  href={selected.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-secondary/50 hover:text-secondary"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Full Catalogue
                </a>
              </div>
            </Reveal>

            <div className={"grid gap-6 " + (selected.items.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3")}>
              {selected.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 80}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-black/30">
                    <div className="relative block aspect-[4/3] overflow-hidden bg-navy-950">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary backdrop-blur-sm">
                        {category.tagline}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h4 className="font-heading text-sm font-semibold leading-snug text-white">
                          {item.name}
                        </h4>
                      </div>
                      <p className="mb-4 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
                      <p className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-bold text-secondary">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Price on Request
                      </p>
                      <div className="mt-auto flex items-center gap-2">
                        <a
                          href="https://wa.me/971541691215"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 py-2 text-xs font-semibold text-white transition-colors hover:border-whatsapp hover:text-whatsapp"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                        <Link
                          href="/contact"
                          className="flex-1 rounded-lg bg-secondary py-2 text-center text-xs font-semibold text-primary transition-colors hover:bg-yellow-500"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {category.products.map((product, pi) => (
              <Reveal key={product.name} delay={pi * 100}>
                <button
                  onClick={() => setSelected(product)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary backdrop-blur-sm">
                      {category.tagline}
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {product.caption}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="mb-2 font-heading text-sm font-semibold leading-snug text-white">
                      {product.name}
                    </h4>
                    <p className="mb-5 text-xs leading-relaxed text-zinc-400">{product.description}</p>
                    <div className="mt-auto flex items-center gap-2">
                      <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-secondary py-2 text-xs font-semibold text-primary transition-colors group-hover:bg-yellow-500">
                        View {product.items.length} {product.items.length === 1 ? "Item" : "Items"}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <a
                        href={product.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-secondary/50 hover:text-secondary"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
