import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "2347018162166";
  const defaultMessage = "Hello Polegrid, I would like to inquire about property registration and infrastructure intelligence.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-zinc-950 text-white text-xs p-4 rounded-2xl shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Official WhatsApp Support</span>
          </div>
          <p className="text-zinc-300 text-[11px] leading-relaxed font-light">
            Questions regarding land submission or verification? Chat directly with Polegrid.
          </p>
        </div>
      )}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-950 hover:bg-zinc-900 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="WhatsApp Support"
      >
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
      </a>
    </div>
  );
}
