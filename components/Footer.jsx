import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Radio, 
  Building2 
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Strip - Clean Solid, No Gradients, No Boxy Borders */}
        <div className="rounded-3xl bg-zinc-900 p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
              National Site Intelligence Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Your Land Could Be Part of Nigeria's Next Infrastructure Opportunity.
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl font-light">
              Registration is 100% free with zero upfront payment required. Place your property on the radar for future connectivity deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-lg"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition"
            >
              <Building2 className="w-4 h-4" />
              CONNECT WITH POLEGRID
            </Link>
          </div>
        </div>

        {/* 4 Column Layout - Clean, borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-zinc-900 text-sm">
          
          {/* Column 1: Brand & Identity (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/polegrid.png" alt="Polegrid Logo" className="h-9 w-auto" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  POLEGRID
                </span>
                <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase block">
                  Infrastructure Intelligence Platform
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Polegrid is an Infrastructure Intelligence Platform managed by <strong className="text-white font-medium">Geospatial Asset Systems Limited (GASL)</strong>. We organize and maintain location intelligence to support telecom and digital infrastructure planning nationwide.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered with SCUML (Anti-Money Laundering Certified).</span>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com/people/Polegrid-Solutions/61577642467184"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/_polegrid/?__pwa=1#"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us & Team</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Portals
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <Link to="/register-property" className="text-white font-medium hover:underline flex items-center gap-1">
                  <span>Register Property (Free)</span>
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                </Link>
              </li>
              <li>
                <Link to="/organization-enquiry" className="hover:text-white transition">
                  Organization Engagement
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Technical Site Assessment
                </Link>
              </li>
              <li>
                <Link to="/assessment-payment" className="text-zinc-500 hover:text-zinc-300 transition text-[11px]">
                  Assessment Payment Portal (Invited)
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2347018162166"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp Photo Review
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>4A Ajimo Logere, Pinnacle Horizon, Ibeju-Lekki, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <a href="tel:07018162166" className="hover:text-white transition">07018162166</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <a href="mailto:polegrid01@gmail.com" className="hover:text-white transition">polegrid01@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Verbatim Disclaimer - Clean, no harsh box borders */}
        <div className="py-8 text-xs text-zinc-500 font-light leading-relaxed">
          <p className="p-6 rounded-2xl bg-zinc-900/60">
            <strong className="text-zinc-300 font-semibold block mb-1">Important Legal Notice:</strong>
            Property registration is free and provides an opportunity for consideration. Any paid assessment is a separate service applicable only to shortlisted properties invited to proceed. Registration or assessment does not guarantee immediate infrastructure deployment, lease approval, commercial engagement, or income. Any eventual lease, commercial arrangement, or deployment depends strictly on the relevant requirements and operational decisions of the parties involved.
          </p>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <div className="flex flex-wrap items-center gap-5 text-zinc-400">
            <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link>
          </div>

          <p>© {currentYear} Polegrid Solutions. Managed by Geospatial Asset Systems Limited (GASL). All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
