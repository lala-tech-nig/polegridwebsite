import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Building2, Radio } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 text-zinc-950 shadow-md backdrop-blur-md"
          : "bg-black/80 text-white backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none" onClick={() => setMobileOpen(false)}>
            <div className="bg-white p-1 rounded-xl shadow-sm">
              <img 
                src="/polegrid.png" 
                alt="Polegrid Logo" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl font-black tracking-tight leading-none ${
                scrolled ? "text-zinc-950" : "text-white"
              }`}>
                POLEGRID
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1 text-emerald-500">
                National Site Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Active turns Green */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-2 text-sm sm:text-base font-bold rounded-full transition-all duration-200 ${
                    active
                      ? "bg-emerald-600 text-white font-black shadow-md ring-2 ring-emerald-400/30"
                      : scrolled
                        ? "text-zinc-800 hover:text-emerald-700 hover:bg-emerald-50/80"
                        : "text-zinc-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/organization-enquiry"
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition ${
                scrolled
                  ? "text-zinc-800 hover:text-emerald-700 hover:bg-emerald-50/80"
                  : "text-zinc-200 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-500" />
              Organizations
            </Link>

            <Link
              to="/register-property"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-black rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              REGISTER PROPERTY — FREE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/register-property"
              className="px-3.5 py-1.5 text-xs font-black text-white bg-emerald-600 rounded-full"
            >
              REGISTER FREE
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 focus:outline-none ${scrolled ? "text-zinc-900" : "text-white"}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className={`lg:hidden shadow-2xl animate-in slide-in-from-top-4 duration-200 ${
          scrolled ? "bg-white text-zinc-950" : "bg-zinc-950 text-white"
        }`}>
          <div className="px-6 pt-4 pb-8 space-y-3">
            <div className="grid grid-cols-2 gap-3 pb-4 mb-3 border-b border-zinc-200/20">
              <Link
                to="/register-property"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 p-3 text-xs font-black text-white bg-emerald-600 rounded-2xl text-center"
              >
                <Radio className="w-3.5 h-3.5" />
                Register Property
              </Link>
              <Link
                to="/organization-enquiry"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-center gap-1.5 p-3 text-xs font-bold rounded-2xl text-center ${
                  scrolled ? "bg-zinc-100 text-zinc-900" : "bg-zinc-800 text-white"
                }`}
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
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition ${
                    active
                      ? "bg-emerald-600 text-white font-black"
                      : scrolled
                        ? "text-zinc-800 hover:bg-zinc-100"
                        : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}

            <div className="pt-4 text-xs space-y-1 text-center opacity-70">
              <p>Managed by Geospatial Asset Systems Limited (GASL)</p>
              <p className="font-bold">Helpline: 07018162166</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
