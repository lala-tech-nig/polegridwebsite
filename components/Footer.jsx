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
    <footer className="bg-zinc-950 text-zinc-300 pt-20 pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Strip */}
        <div className="rounded-3xl bg-zinc-900 p-8 sm:p-14 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
              NATIONAL SITE INTELLIGENCE NETWORK
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              YOUR LAND COULD BE PART OF NIGERIA'S NEXT INFRASTRUCTURE OPPORTUNITY.
            </h3>
            <p className="text-white text-base sm:text-lg max-w-xl font-semibold">
              Registration is 100% free with zero upfront payment required. Place your property on the radar for future connectivity deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition hover:scale-105"
            >
              <Building2 className="w-4 h-4 text-emerald-400" />
              CONNECT WITH POLEGRID
            </Link>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-zinc-900 text-sm">
          
          {/* Column 1: Brand & Identity (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl">
                <img src="/polegrid.png" alt="Polegrid Logo" className="h-9 w-auto" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block">
                  POLEGRID
                </span>
                <span className="text-xs text-emerald-400 font-bold tracking-wider uppercase block">
                  Infrastructure Intelligence Platform
                </span>
              </div>
            </Link>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
              Polegrid is an Infrastructure Intelligence Platform managed by <strong className="text-white font-bold">Geospatial Asset Systems Limited (GASL)</strong>. We organize and maintain location intelligence to support telecom and digital infrastructure planning nationwide.
            </p>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>“Polegrid Solutions is registered with the Special Control Unit Against Money Laundering (SCUML).”</span>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com/people/Polegrid-Solutions/61577642467184"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://www.instagram.com/_polegrid/?__pwa=1#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link to="/" className="text-zinc-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-300 hover:text-white transition">About Us & Team</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-zinc-300 hover:text-white transition">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-zinc-300 hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Portals
            </h4>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link to="/register-property" className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5 font-black">
                  <span>Register Property (Free)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/organization-enquiry" className="text-zinc-300 hover:text-white transition">
                  Organization Engagement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-white transition">
                  Technical Site Assessment
                </Link>
              </li>
              <li>
                <Link to="/assessment-payment" className="text-zinc-400 hover:text-zinc-200 transition text-xs font-semibold">
                  Assessment Payment (Invited)
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2347018162166"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-white transition"
                >
                  WhatsApp Photo Review
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Contact & Address
            </h4>
            <div className="space-y-3 text-sm text-zinc-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>4A Ajimo Logere, Pinnacle Horizon, Ibeju-Lekki, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5 font-bold">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:07018162166" className="hover:text-white transition">07018162166</a>
              </div>
              <div className="flex items-center gap-2.5 font-bold">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:polegrid01@gmail.com" className="hover:text-white transition">polegrid01@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Verbatim Disclaimer */}
        <div className="py-8 text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
          <p className="p-6 sm:p-8 rounded-3xl bg-zinc-900/70">
            <strong className="text-zinc-200 font-black block mb-1 text-sm sm:text-base">Important Legal Notice:</strong>
            Property registration is free and provides an opportunity for consideration. Any paid assessment is a separate service applicable only to shortlisted properties invited to proceed. Registration or assessment does not guarantee immediate infrastructure deployment, lease approval, commercial engagement, or income. Any eventual lease, commercial arrangement, or deployment depends strictly on the relevant requirements and operational decisions of the parties involved.
          </p>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400 font-semibold">
          <div className="flex flex-wrap items-center gap-5">
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
