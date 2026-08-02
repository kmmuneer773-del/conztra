import Image from "next/image";

export default function PageHero({
  image,
  label,
  title,
  subtitle,
  fullHeight = false,
  scrollHint = false,
}: {
  image: string;
  label?: string;
  title: string;
  subtitle: string;
  fullHeight?: boolean;
  scrollHint?: boolean;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950" />
      </div>

      <div
        className={
          "mx-auto max-w-4xl px-6 pt-40 text-center " +
          (fullHeight ? "flex min-h-screen flex-col items-center justify-center pb-40" : "pb-16")
        }
      >
        {label && (
          <p className="animate-fade-in-up mb-4 text-xs font-bold uppercase tracking-widest text-secondary">
            {label}
          </p>
        )}
        <h1
          className="animate-fade-in-up mb-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-in-up mx-auto max-w-2xl text-zinc-300"
          style={{ animationDelay: "200ms" }}
        >
          {subtitle}
        </p>
      </div>

      {scrollHint && (
        <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
          <svg
            className="animate-scroll-bounce h-6 w-6 text-zinc-400/80"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6v4" />
          </svg>
        </div>
      )}
    </section>
  );
}
