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
    <div className="mb-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
        Key Services
      </p>
      <ul className="space-y-1.5 sm:space-y-2">
        {services.map((service) => (
          <li key={service} className="flex items-center text-xs text-zinc-300 sm:text-sm">
            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
            {service}
          </li>
        ))}
        <div
          className="grid transition-all duration-500 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <ul className="min-h-0 overflow-hidden space-y-1.5 sm:space-y-2">
            {extraServices.map((service) => (
              <li key={service} className="flex items-center text-xs text-zinc-300 sm:text-sm">
                <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
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
          className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-secondary transition-colors hover:text-yellow-400 sm:text-sm"
          aria-expanded={open}
        >
          {open ? "−" : "+"}
          {open ? "Show less" : `${extraServices.length} more services`}
        </button>
      )}
    </div>
  );
}
