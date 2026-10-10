import React from "react";
import { ShieldCheck, PhoneCall } from "lucide-react";

export default function AnnouncementTicker() {
  return (
    <div className="bg-zinc-950 text-zinc-300 text-xs py-2.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-emerald-400 shrink-0 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            National Registry
          </span>
          <p className="truncate text-zinc-300 font-normal text-[11px] sm:text-xs">
            Property Registration is <strong className="text-white font-semibold">100% Free</strong>. Placing Nigeria’s land assets on the digital infrastructure radar.
          </p>
        </div>

        <div className="flex items-center gap-5 text-zinc-400 shrink-0 text-[11px]">
          <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            SCUML Certified • Managed by GASL
          </span>
          <a
            href="tel:07018162166"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium text-zinc-300"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            0701 816 2166
          </a>
        </div>
      </div>
    </div>
  );
}
