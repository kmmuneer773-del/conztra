import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Navbar";

const highlights = [
  "ISO 9001 Certified",
  "30,000+ Products",
  "24/7 Support",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banners/equipment-hero.jpg"
          alt="Heavy construction equipment"
          fill
          priority
          className="object-cover"
          style={{ animation: "slowZoom 24s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div
        className="absolute -left-20 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[120px]"
        style={{ animation: "floatGlow 8s ease-in-out infinite" }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <Reveal delay={100}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Serving the UAE
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              One-Stop Solution for{" "}
              <span className="text-gold-gradient">
                Construction & Industrial Services
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Building materials, safety equipment, heavy equipment rental and
              industrial solutions across the UAE.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/971541691215"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp hover:text-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg
                    className="h-5 w-5 shrink-0 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
