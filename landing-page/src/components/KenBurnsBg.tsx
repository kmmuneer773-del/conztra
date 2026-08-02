"use client";

import { useEffect, useRef } from "react";

export default function KenBurnsBg({
  src,
  alt,
  reverse = false,
  className = "",
}: {
  src: string;
  alt: string;
  reverse?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(reverse ? "kenburns-reverse-active" : "kenburns-active");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reverse]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt}
      className={
        "kenburns absolute inset-0 bg-cover bg-center " + className
      }
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
}
