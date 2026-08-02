import Reveal from "./Reveal";

const resources = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "CONZTRA Company Profile",
    meta: "English • 1.7 MB",
    href: "/downloads/KIWI%20-%20PROFILE-1.pdf",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Complete Product Catalogue",
    meta: "English • 24.2 MB",
    href: "/downloads/al-jessur-catalogue.pdf",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Equipment Rental Brochure",
    meta: "English • 3.6 MB",
    href: "/downloads/Amirah-Brochure.pdf",
  },
];

export default function Downloads() {
  return (
    <section className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">
            Resources
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Download <span className="text-gold-gradient">Catalogues</span>
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-secondary to-transparent" />
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Company profile, product catalogue, and equipment rental brochure.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20">
                  {resource.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {resource.title}
                </h3>
                <p className="mb-6 text-sm text-zinc-400">{resource.meta}</p>
                <a
                  href={resource.href}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-secondary/40 px-5 py-2.5 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-secondary hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
