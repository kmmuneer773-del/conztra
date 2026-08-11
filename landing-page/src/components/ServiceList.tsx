"use client";

import { useState } from "react";

export default function ServiceList({
  services,
  extraServices,
}: {
  services: string[];
  extraServices: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 sm:mb-6">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500 sm:mb-3 sm:text-xs">
        Key Services
      </p>
      <ul className="space-y-1.5 sm:space-y-2">
        {services.map((service) => (
          <li key={service} className="flex items-start text-[11px] leading-snug text-zinc-300 sm:items-center sm:text-sm">
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary sm:mt-0" />
            {service}
          </li>
        ))}
        <div
          className="grid transition-all duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <ul className="min-h-0 overflow-hidden space-y-1.5 sm:space-y-2">
            {extraServices.map((service) => (
              <li key={service} className="flex items-start text-[11px] leading-snug text-zinc-300 sm:items-center sm:text-sm">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary sm:mt-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </ul>
      {extraServices.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-secondary transition-colors hover:text-yellow-400 sm:mt-3 sm:text-sm"
          aria-expanded={open}
        >
          {open ? "−" : "+"}
          {open ? "Show less" : `${extraServices.length} more services`}
        </button>
      )}
    </div>
  );
}
