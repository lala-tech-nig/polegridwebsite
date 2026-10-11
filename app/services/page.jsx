import { Link } from "react-router-dom";
import { 
  Radio, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  FileText,
  Search,
  Activity,
  Award
} from "lucide-react";

const servicesList = [
  {
    number: "01",
    tag: "FREE CORE SERVICE",
    title: "PROPERTY REGISTRATION & PRELIMINARY SCREENING",
    desc: "A free service allowing landowners, families, companies and institutions to register property details within the Polegrid platform. The preliminary screening process identifies whether the property demonstrates general characteristics that may make it relevant to telecommunications or digital infrastructure consideration.",
    features: [
      "No registration fee required",
      "Nationwide coverage across all 36 States + FCT",
      "Preserves original land ownership and possession",
      "Puts property information on the infrastructure radar",
    ],
    badge: "100% Free • Open to All Landowners",
    image: "/hero1.JPG",
    ctaText: "REGISTER YOUR PROPERTY — FREE",
    ctaLink: "/register-property",
  },
  {
    number: "02",
    tag: "INVITED / SHORTLISTED SERVICE",
    title: "ADVANCED TECHNICAL SITE ASSESSMENT (ATA)",
    desc: "A structured assessment service available for shortlisted properties where preliminary screening indicates potential suitability. Delivers a professional Assessment Report examining elevation, coordinate accuracy, terrain characteristics, access, and surrounding connectivity requirements.",
    notice: "Fee: ₦15,500 — Payable ONLY after formal invitation following preliminary screening.",
    features: [
      "Comprehensive Geospatial Location Analysis",
      "Structural & Terrain Viability Evaluation",
      "Network Blindspot & Mast Proximity Check",
      "Formal Technical Assessment Report deliverable",
    ],
    badge: "₦15,500 Standard Fee • Shortlisted Only",
    image: "/hero2.jpg",
    ctaText: "LEARN MORE ABOUT ATA",
    ctaLink: "/assessment-payment",
  },
  {
    number: "03",
    tag: "FOR ORGANIZATIONS & OPERATORS",
    title: "INFRASTRUCTURE SITE ACQUISITION SUPPORT",
    desc: "Assisting telecommunications companies, TowerCos and infrastructure developers to identify and screen suitable sites. We reduce search time, improve location quality and support field engagement through verified geospatial data.",
    features: [
      "Custom Location & Grid Search",
      "Preliminary Viability & Access Screening",
      "Right-of-Way & Infrastructure Proximity Evaluation",
      "Coordinated Landowner Verification",
    ],
    badge: "For Telecom Operators & TowerCos",
    image: "/hero3.jpg",
    ctaText: "ENQUIRE WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "04",
    tag: "PORTFOLIO INTELLIGENCE",
    title: "INSTITUTIONAL & MULTI-SITE PORTFOLIO SCREENING",
    desc: "Specialized service for property developers, estates, universities, agricultural operators, and corporate landowners holding multiple parcels. Enables centralized geospatial review to identify potential infrastructure nodes across an entire asset portfolio.",
    features: [
      "Portfolio-Wide Location Review",
      "Prioritized Node Viability Ranking",
      "Unified Geospatial Asset Management",
      "Direct Operator & TowerCo Outreach Coordination",
    ],
    badge: "Multi-Site Estates & Corporate Land",
    image: "/hero4.jpg",
    ctaText: "DISCUSS PORTFOLIO SCREENING",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "05",
    tag: "COMMERCIAL COORDINATION",
    title: "TRANSACTION COORDINATION & FACILITATION",
    desc: "Professional transaction support bridging property owners and infrastructure operators. Facilitating clear documentation, lease structuring, site visits, and commercial execution through Geospatial Asset Systems Limited (GASL).",
    features: [
      "Independent Lease Documentation Review",
      "Transparent Milestone Tracking",
      "Site Access & Stakeholder Meeting Coordination",
      "Regulatory & Community Liaison Guidance",
    ],
    badge: "Managed by GASL • SCUML Certified",
    image: "/hero5.jpg",
    ctaText: "CONTACT COORDINATION DESK",
    ctaLink: "/contact",
  },
  {
    number: "06",
    tag: "STRATEGIC MAPPING",
    title: "LOCATION INTELLIGENCE & INFRASTRUCTURE MAPPING",
    desc: "Advanced geospatial data services supporting digital connectivity planning. Mapping cell coverage blindspots, fiber optic routes, grid power availability, and population expansion corridors nationwide.",
    features: [
      "Geospatial Coverage Gap Analysis",
      "Optical Fiber & Transmission Proximity Data",
      "Elevation & Line-of-Sight Terrain Modelling",
      "National Site Registry Intelligence",
    ],
    badge: "National Infrastructure Map",
    image: "/hero6.jpg",
    ctaText: "EXPLORE LOCATION DATA",
    ctaLink: "/organization-enquiry",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-28 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Services Overview"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            WHAT POLEGRID DOES
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            INFRASTRUCTURE INTELLIGENCE SERVICES
          </h1>
          <p className="text-lg sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Polegrid provides infrastructure intelligence services designed to support the identification, evaluation and coordination of potential telecommunications and digital infrastructure opportunities.
          </p>
        </div>
      </section>

      {/* Main Services - Alternating Photo Split Layout */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {servicesList.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={srv.number}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Photo Showcase (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3] relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-black text-white tracking-wider">
                    {srv.badge}
                  </div>
                </div>
              </div>

              {/* Editorial Text (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-mono font-black text-emerald-800 uppercase tracking-widest block">
                    {srv.number} • {srv.tag}
                  </span>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                  {srv.desc}
                </p>

                {srv.notice && (
                  <div className="p-5 rounded-2xl bg-emerald-50 text-sm sm:text-base text-emerald-950 font-bold leading-relaxed shadow-sm">
                    {srv.notice}
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  {srv.features.map((ft, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-zinc-800 font-bold">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={srv.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Photo Callout */}
      <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        <img
          src="/hero5.jpg"
          alt="Telecom Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow">
            READY TO PUT YOUR PROPERTY ON THE RADAR?
          </h3>
          <p className="text-zinc-100 text-base sm:text-xl max-w-2xl mx-auto font-medium">
            Start with free property registration. No payment is required to submit your land to the Polegrid National Site Intelligence Network.
          </p>
          <div className="pt-2">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-2xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
