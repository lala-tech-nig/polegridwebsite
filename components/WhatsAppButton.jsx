import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "2347018162166";
  const defaultMessage = "Hello Polegrid, I would like to inquire about property registration and infrastructure intelligence.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Optional helper dialog */}
      {showTooltip && (
        <div className="bg-zinc-950 text-white text-xs p-4 rounded-2xl shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1 border border-zinc-800">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-black text-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>WhatsApp Support</span>
          </div>
          <p className="text-zinc-300 text-xs leading-relaxed font-medium">
            Have questions about your land, location pin, or review progress? Chat directly with our verified team.
          </p>
        </div>
      )}

      {/* Animated WhatsApp Support Button with Prominent Caption */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="WhatsApp Support"
      >
        {/* Animated Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>

        {/* Caption */}
        <span className="relative z-10 text-sm sm:text-base font-black tracking-wide text-white whitespace-nowrap">
          WhatsApp Support
        </span>
      </a>
    </div>
  );
}
