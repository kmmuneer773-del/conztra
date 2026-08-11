import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const values = [
  { title: "Quality First", description: "We deliver only the highest quality products and services that meet international standards." },
  { title: "Customer Focus", description: "Our clients are at the heart of everything we do. Your success is our success." },
  { title: "Innovation", description: "Continuously improving and adopting new technologies to serve you better." },
  { title: "Integrity", description: "Building trust through honest, transparent, and ethical business practices." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          image="/banners/about-hero.jpg"
          label="Corporate Overview"
          title="About CONZTRA"
          subtitle="One-Stop solution for construction & industrial services."
        />

        <section className="bg-navy-950 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
                Company Profile
              </p>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our <span className="text-gold-gradient">Story</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-col gap-4 text-zinc-300">
                <p>
                  CONZTRA is a UAE-based industrial solutions provider
                  headquartered in Sharjah, dedicated to supplying the region's
                  construction, infrastructure, and manufacturing sectors with
                  reliable materials and equipment. From building materials and
                  safety apparel to heavy equipment rental, contracting, and
                  spare parts, we bring together everything a project needs
                  under one roof — backed by genuine products, dependable
                  delivery, and a team focused on getting the job done right.
                </p>
                <p>
                  Since our founding, we have grown alongside the UAE's rapid
                  development, expanding our product range and capabilities to
                  serve contractors, developers, and industrial clients of all
                  sizes. Our divisions work as one: a trading operation that
                  sources quality building materials, a safety equipment arm
                  that keeps workers protected on site, and an equipment rental
                  and contracting division that keeps projects moving with the
                  right machines and support.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-navy-900 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal delay={0}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">Our Mission</p>
                  <p className="text-zinc-300">
                    To empower businesses across the GCC with quality products,
                    reliable services, and unwavering commitment to excellence.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">Our Vision</p>
                  <p className="text-zinc-300">
                    To be the most trusted industrial solutions partner in the
                    GCC, recognized for innovation, reliability, and customer success.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-navy-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">What Drives Us</p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Core <span className="text-gold-gradient">Values</span>
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-white">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
