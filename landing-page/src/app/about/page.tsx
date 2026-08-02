import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Products" },
  { value: "6", label: "GCC Countries" },
];

const values = [
  { title: "Quality First", description: "We deliver only the highest quality products and services that meet international standards." },
  { title: "Customer Focus", description: "Our clients are at the heart of everything we do. Your success is our success." },
  { title: "Innovation", description: "Continuously improving and adopting new technologies to serve you better." },
  { title: "Integrity", description: "Building trust through honest, transparent, and ethical business practices." },
];

const journey = [
  { year: "2010", title: "Foundation", description: "CONZTRA was established in Dubai." },
  { year: "2014", title: "Equipment Division", description: "Launched heavy equipment rental with a fleet of 50+ machines." },
  { year: "2016", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification." },
  { year: "2024", title: "Industry Leadership", description: "500+ satisfied clients across the GCC." },
];

const certifications = [
  { title: "ISO 9001:2015", description: "Quality Management System" },
  { title: "ISO 14001:2015", description: "Environmental Management System" },
  { title: "OHSAS 18001", description: "Occupational Health and Safety" },
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
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
                Company Profile
              </p>
              <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our <span className="text-gold-gradient">Story</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mb-8 text-zinc-300">
                Founded in 2010, CONZTRA has grown from a small trading company
                into a comprehensive industrial solutions provider serving the
                entire GCC region — over 500 satisfied clients across
                construction, infrastructure, oil & gas, and manufacturing.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100}>
                  <div className="rounded-2xl border border-white/10 bg-navy-900 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                    <p className="font-heading text-3xl font-black text-secondary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
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

        <section className="bg-navy-900 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">Timeline</p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our <span className="text-gold-gradient">Journey</span>
              </h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-4">
              {journey.map((item, i) => (
                <Reveal key={item.year} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                    <p className="font-heading text-2xl font-black text-secondary">{item.year}</p>
                    <h3 className="mb-2 mt-3 font-heading text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">Quality Assurance</p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="text-gold-gradient">Certifications</span>
              </h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-900 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-zinc-400">{cert.description}</p>
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
