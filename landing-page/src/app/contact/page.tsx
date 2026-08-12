"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Navbar";

const contactCards = [
  {
    title: "Visit Us",
    value: "Al Messaned, Al Bataeh, Sharjah, United Arab Emirates",
    href: "https://maps.google.com/?q=Al%20Messaned%2C%20Al%20Bataeh%2C%20Sharjah%2C%20United%20Arab%20Emirates",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
const phoneCodes = [
  { name: "United Arab Emirates", code: "+971", example: "50 123 4567" },
  { name: "Saudi Arabia", code: "+966", example: "50 123 4567" },
  { name: "Qatar", code: "+974", example: "55 123 4567" },
  { name: "Kuwait", code: "+965", example: "500 12345" },
  { name: "Bahrain", code: "+973", example: "3600 1234" },
  { name: "Oman", code: "+968", example: "9123 4567" },
  { name: "Egypt", code: "+20", example: "100 123 4567" },
  { name: "Jordan", code: "+962", example: "79 123 4567" },
  { name: "Iraq", code: "+964", example: "750 123 4567" },
  { name: "Lebanon", code: "+961", example: "70 123 456" },
  { name: "Syria", code: "+963", example: "94 123 4567" },
  { name: "Yemen", code: "+967", example: "70 123 4567" },
  { name: "Palestine", code: "+970", example: "59 123 4567" },
  { name: "Morocco", code: "+212", example: "6 12 34 56 78" },
  { name: "Algeria", code: "+213", example: "55 12 34 56" },
  { name: "Tunisia", code: "+216", example: "20 123 456" },
  { name: "Libya", code: "+218", example: "91 123 4567" },
  { name: "Sudan", code: "+249", example: "91 234 5678" },
  { name: "Turkey", code: "+90", example: "532 123 4567" },
  { name: "Iran", code: "+98", example: "912 123 4567" },
  { name: "Pakistan", code: "+92", example: "300 1234567" },
  { name: "India", code: "+91", example: "98765 43210" },
  { name: "Bangladesh", code: "+880", example: "17 1234 5678" },
  { name: "Nepal", code: "+977", example: "9841 234567" },
  { name: "Sri Lanka", code: "+94", example: "71 234 5678" },
  { name: "Afghanistan", code: "+93", example: "70 123 4567" },
  { name: "Philippines", code: "+63", example: "912 345 6789" },
  { name: "Indonesia", code: "+62", example: "812 3456 7890" },
  { name: "Malaysia", code: "+60", example: "12 345 6789" },
  { name: "Singapore", code: "+65", example: "9123 4567" },
  { name: "Thailand", code: "+66", example: "81 234 5678" },
  { name: "Vietnam", code: "+84", example: "91 234 5678" },
  { name: "China", code: "+86", example: "138 1234 5678" },
  { name: "Hong Kong", code: "+852", example: "9123 4567" },
  { name: "Japan", code: "+81", example: "90 1234 5678" },
  { name: "South Korea", code: "+82", example: "10 1234 5678" },
  { name: "Australia", code: "+61", example: "412 345 678" },
  { name: "New Zealand", code: "+64", example: "21 234 5678" },
  { name: "United Kingdom", code: "+44", example: "7700 900123" },
  { name: "United States", code: "+1", example: "(202) 555-0123" },
  { name: "Canada", code: "+1", example: "(416) 555-0123" },
  { name: "Germany", code: "+49", example: "151 2345678" },
  { name: "France", code: "+33", example: "6 12 34 56 78" },
  { name: "Italy", code: "+39", example: "312 345 6789" },
  { name: "Spain", code: "+34", example: "612 345 678" },
  { name: "Netherlands", code: "+31", example: "6 1234 5678" },
  { name: "Belgium", code: "+32", example: "470 12 34 56" },
  { name: "Switzerland", code: "+41", example: "79 123 45 67" },
  { name: "Austria", code: "+43", example: "664 1234567" },
  { name: "Sweden", code: "+46", example: "70 123 45 67" },
  { name: "Norway", code: "+47", example: "412 34 567" },
  { name: "Denmark", code: "+45", example: "20 12 34 56" },
  { name: "Finland", code: "+358", example: "40 123 4567" },
  { name: "Ireland", code: "+353", example: "85 123 4567" },
  { name: "Poland", code: "+48", example: "512 345 678" },
  { name: "Portugal", code: "+351", example: "912 345 678" },
  { name: "Greece", code: "+30", example: "691 234 5678" },
  { name: "Russia", code: "+7", example: "912 345-67-89" },
  { name: "Ukraine", code: "+380", example: "67 123 4567" },
  { name: "Nigeria", code: "+234", example: "801 234 5678" },
  { name: "Kenya", code: "+254", example: "712 345678" },
  { name: "South Africa", code: "+27", example: "82 123 4567" },
  { name: "Ethiopia", code: "+251", example: "91 123 4567" },
  { name: "Brazil", code: "+55", example: "11 91234-5678" },
  { name: "Mexico", code: "+52", example: "1 55 1234 5678" },
  { name: "Argentina", code: "+54", example: "11 15-1234-5678" },
  { name: "Chile", code: "+56", example: "9 1234 5678" },
  { name: "Colombia", code: "+57", example: "300 123 4567" },
];
const services = [
  "Uniforms & Safety Apparel",
  "Building Materials",
  "Equipment Rental",
  "Other Inquiry",
];

function PhoneCodeSelect({
  selected,
  onChange,
}: {
  selected: (typeof phoneCodes)[number];
  onChange: (code: (typeof phoneCodes)[number]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-[86px] cursor-pointer items-center justify-between gap-1 rounded-l-lg border-r border-white/15 bg-navy-900 py-3 pl-3 pr-2 text-sm font-semibold tracking-wide text-white outline-none transition-colors hover:bg-navy-800"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected.code}</span>
        <svg
          className={`h-3.5 w-3.5 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <input type="hidden" name="phoneCode" value={selected.code} />
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1 max-h-64 w-56 overflow-auto rounded-lg border border-white/15 bg-navy-900 py-1 shadow-2xl shadow-black/50"
        >
          {phoneCodes.map((c) => (
            <li key={c.code}>
              <button
                type="button"
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-navy-800 ${
                  selected.code === c.code ? "text-secondary" : "text-zinc-200"
                }`}
              >
                <span>{c.name}</span>
                <span className={selected.code === c.code ? "font-semibold text-secondary" : "text-zinc-500"}>{c.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [phoneCode, setPhoneCode] = useState(phoneCodes[0]);

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
            <div className="mb-16 grid gap-8 md:grid-cols-2">
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
              <div id="contact-form" className="scroll-mt-24 rounded-2xl border border-white/10 bg-navy-900 p-8 sm:p-12">
                <h2 className="mb-3 font-heading text-2xl font-bold text-white">
                  Send Us a <span className="text-gold-gradient">Message</span>
                </h2>

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
                    const fullPhone = phone ? `${phoneCode.code} ${phone}` : "-";
                    const country = String(data.get("country") || "").trim();
                    const service = String(data.get("service") || "").trim();
                    const message = String(data.get("message") || "").trim();

                    const text = [
                      "*New Inquiry from CONZTRA Website*",
                      "",
                      `Name: ${name}`,
                      `Company: ${company || "-"}`,
                      `Email: ${email}`,
                      `Phone: ${fullPhone}`,
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
                    <div className="flex rounded-lg border border-white/15 bg-navy-950 transition-colors focus-within:border-secondary/60">
                      <PhoneCodeSelect selected={phoneCode} onChange={setPhoneCode} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder={phoneCode.example}
                        className="min-w-0 flex-1 rounded-r-lg bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none"
                      />
                    </div>
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
