import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Navbar";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banners/ppe-workers.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get <span className="text-gold-gradient">Started?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mb-10 text-lg text-zinc-300">
            Contact us today for a free consultation and quote.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/971541691215"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-whatsapp px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-whatsapp/30"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <Link
              href="/contact#contact-form"
              className="rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
            >
              Contact Form
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
