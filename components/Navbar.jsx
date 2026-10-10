import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Building2, Radio } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full editorial-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none" onClick={() => setMobileOpen(false)}>
            <img 
              src="/polegrid.png" 
              alt="Polegrid Logo" 
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-zinc-950 leading-none">
                POLEGRID
              </span>
              <span className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase mt-1">
                National Site Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Borderless, minimalist */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    active
                      ? "text-zinc-950 font-semibold bg-zinc-100"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs - Solid colors, no gradients, no borders */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition"
            >
              <Building2 className="w-3.5 h-3.5" />
              Organizations
            </Link>

            <Link
              to="/register-property"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-400" />
              REGISTER PROPERTY — FREE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/register-property"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-zinc-950 rounded-full"
            >
              REGISTER FREE
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-zinc-800 hover:text-zinc-950 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Borderless, clean */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-6 pt-4 pb-8 space-y-3">
            <div className="grid grid-cols-2 gap-3 pb-4 mb-3 border-b border-zinc-100">
              <Link
                to="/register-property"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 p-3 text-xs font-bold text-white bg-zinc-950 rounded-2xl text-center"
              >
                <Radio className="w-3.5 h-3.5 text-emerald-400" />
                Register Property
              </Link>
              <Link
                to="/organization-enquiry"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 p-3 text-xs font-semibold text-zinc-800 bg-zinc-100 rounded-2xl text-center"
              >
                <Building2 className="w-3.5 h-3.5" />
                Organizations
              </Link>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition ${
                    active
                      ? "bg-zinc-100 text-zinc-950 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}

            <div className="pt-4 text-xs text-zinc-500 space-y-1 text-center">
              <p>Managed by Geospatial Asset Systems Limited (GASL)</p>
              <p className="font-medium text-zinc-800">Helpline: 07018162166</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
