import React from "react";
import { ShieldCheck, PhoneCall } from "lucide-react";

export default function AnnouncementTicker() {
  return (
    <div className="bg-zinc-950 text-zinc-200 text-xs sm:text-sm py-2.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-3 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-zinc-800 text-emerald-400 shrink-0 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            NATIONAL REGISTRY
          </span>
          <p className="truncate text-zinc-200 font-bold text-xs sm:text-sm">
            Property Registration is <strong className="text-white font-black underline decoration-emerald-500">100% Free</strong>. Placing Nigeria’s land assets on the digital infrastructure radar.
          </p>
        </div>

        <div className="flex items-center gap-5 text-zinc-300 shrink-0 text-xs sm:text-sm font-bold">
          <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            SCUML Certified • Managed by GASL
          </span>
          <a
            href="tel:07018162166"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 font-black text-white"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            0701 816 2166
          </a>
        </div>
      </div>
    </div>
  );
}
