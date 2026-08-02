"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Navbar";

const contactCards = [
  {
    title: "Visit Us",
    value: "Dubai, United Arab Emirates",
    href: "https://maps.google.com/?q=Dubai%2C%20United%20Arab%20Emirates",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    value: "+971 54 169 1215",
    href: "tel:+971541691215",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    value: "info@conztra.com",
    href: "mailto:info@conztra.com",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const countries = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain"];
const services = [
  "Uniforms & Safety Apparel",
  "Building Materials",
  "Equipment Rental",
  "Other Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          image="/banners/contact-hero.jpg"
          label="Support & Inquiries"
          title="Contact Us"
          subtitle="Get in touch with our team for specialized inquiries and bulk quotes."
        />

        <section className="bg-navy-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {contactCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 100}>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block h-full rounded-2xl border border-white/10 bg-navy-900 p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-black/30"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20">
                      {card.icon}
                    </div>
                    <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{card.value}</p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mx-auto mb-8 max-w-3xl" delay={100}>
              <div className="rounded-2xl border border-white/10 bg-navy-900 p-6 text-center text-sm text-zinc-400">
                <span className="text-secondary">Business Hours:</span> Sunday –
                Thursday 8:00 AM – 6:00 PM · Friday Closed · Saturday 9:00 AM –
                1:00 PM
              </div>
            </Reveal>

            <Reveal className="mx-auto max-w-3xl" delay={150}>
              <div className="rounded-2xl border border-white/10 bg-navy-900 p-8 sm:p-12">
                <h2 className="mb-3 font-heading text-2xl font-bold text-white">
                  Send Us a <span className="text-gold-gradient">Message</span>
                </h2>
              <p className="mb-8 text-zinc-400">
                Our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-secondary/30 bg-secondary/10 p-8 text-center">
                  <p className="text-lg font-semibold text-secondary">Thank you!</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Your message has been opened in WhatsApp. Press send to
                    deliver it to our team — we will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-6 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const name = String(data.get("name") || "").trim();
                    const company = String(data.get("company") || "").trim();
                    const email = String(data.get("email") || "").trim();
                    const phone = String(data.get("phone") || "").trim();
                    const country = String(data.get("country") || "").trim();
                    const service = String(data.get("service") || "").trim();
                    const message = String(data.get("message") || "").trim();

                    const text = [
                      "*New Inquiry from CONZTRA Website*",
                      "",
                      `Name: ${name}`,
                      `Company: ${company || "-"}`,
                      `Email: ${email}`,
                      `Phone: ${phone || "-"}`,
                      `Country: ${country}`,
                      `Service: ${service}`,
                      "",
                      `Message: ${message}`,
                    ].join("\n");

                    window.open(
                      `https://wa.me/971541691215?text=${encodeURIComponent(text)}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                    setSubmitted(true);
                  }}
                >
                  <Field label="Full Name">
                    <input type="text" name="name" required placeholder="Your name" className={inputClass} />
                  </Field>
                  <Field label="Company">
                    <input type="text" name="company" placeholder="Company name" className={inputClass} />
                  </Field>
                  <Field label="Email">
                    <input type="email" name="email" required placeholder="you@company.com" className={inputClass} />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" name="phone" placeholder="+971 ..." className={inputClass} />
                  </Field>
                  <Field label="Country">
                    <select name="country" required className={inputClass} defaultValue="United Arab Emirates">
                      {countries.map((country) => (
                        <option key={country}>{country}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Service">
                    <select name="service" required className={inputClass} defaultValue={services[0]}>
                      {services.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Message">
                      <textarea name="message" required rows={5} placeholder="Tell us about your requirements..." className={inputClass} />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-secondary px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-yellow-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
              </div>
            </Reveal>

            <Reveal className="mx-auto mt-8 max-w-3xl" delay={200}>
              <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy-900 p-6 transition-all duration-300 hover:border-secondary/40 sm:flex-row">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Outside business hours, call our emergency line:
                    <a href="tel:+971541691215" className="ml-1 font-semibold text-secondary hover:text-yellow-400">
                      +971 54 169 1215
                    </a>
                  </p>
                </div>
                <a
                  href="https://wa.me/971541691215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Emergency
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

const inputClass =
  "w-full rounded-lg border border-white/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-secondary/60";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
        {label}
      </span>
      {children}
    </label>
  );
}
