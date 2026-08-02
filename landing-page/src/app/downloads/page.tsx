import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const resources = [
  { category: "Company Profile", title: "CONZTRA Company Profile", meta: "English • 1.7 MB", href: "/downloads/KIWI%20-%20PROFILE-1.pdf" },
  { category: "Catalogue", title: "Complete Product Catalogue", meta: "English • 24.2 MB", href: "/downloads/al-jessur-catalogue.pdf" },
  { category: "Brochure", title: "Equipment Rental Brochure", meta: "English • 3.6 MB", href: "/downloads/Amirah-Brochure.pdf" },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Resource Center"
          title="Corporate Downloads"
          subtitle="Company profiles, catalogues, and product brochures."
        />

        <section className="bg-navy-950 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {resources.map((resource, i) => (
                <Reveal key={resource.title} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-secondary">
                      {resource.category}
                    </p>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                      {resource.title}
                    </h3>
                    <p className="mb-6 text-sm text-zinc-400">{resource.meta}</p>
                    <a
                      href={resource.href}
                      className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/25"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16" delay={100}>
              <div className="rounded-2xl border border-white/10 bg-navy-900 p-10 text-center transition-all duration-300 hover:border-secondary/40">
                <h2 className="mb-3 font-heading text-2xl font-bold text-white">
                  Cannot Find What You Are Looking For?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-zinc-400">
                  Need a specific material data sheet, test certificate, or
                  project report? Contact our team.
                </p>
                <a
                  href="/contact"
                  className="inline-block rounded-lg bg-gradient-to-r from-secondary to-yellow-500 px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
                >
                  Contact Documents Team
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
