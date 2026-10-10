import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Radio, 
  MapPin, 
  FileCheck2, 
  Layers, 
  Building2, 
  Network, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Briefcase,
  Compass,
  FileSpreadsheet
} from "lucide-react";

const servicesList = [
  {
    number: "01",
    tag: "STARTING POINT",
    badge: "FREE",
    title: "Register Your Property",
    desc: "Register land or property with the Polegrid National Site Intelligence Network. Property registration is the starting point for property owners who want their property information considered within the Polegrid network.",
    features: [
      "Geospatial location pin capture & verification",
      "Preliminary suitability screening against network demand",
      "Zero upfront registration fee required",
    ],
    ctaText: "REGISTER YOUR PROPERTY — FREE",
    ctaLink: "/register-property",
    image: "/hero1.JPG",
  },
  {
    number: "02",
    tag: "GEOSPATIAL INTELLIGENCE",
    badge: "INTELLIGENCE",
    title: "Property & Location Intelligence",
    desc: "Polegrid organizes and maintains relevant property and location information to support infrastructure-related evaluation and planning. This helps make potentially relevant locations easier to identify and understand as infrastructure requirements evolve.",
    features: [
      "Structured GIS attribute cataloging across all 36 states",
      "Accessibility, road width & clearance screening",
      "Proximity analysis to existing masts and clusters",
    ],
    ctaText: "LEARN ABOUT THE NETWORK",
    ctaLink: "/about",
    image: "/hero2.jpg",
  },
  {
    number: "03",
    tag: "CONTROLLED STAGE",
    badge: "₦15,500 FEE",
    title: "Advanced Technical Site Assessment",
    desc: "Where a property is invited to proceed to a more detailed stage, Polegrid may provide an Advanced Technical Site Assessment covering relevant site, access, physical, location and infrastructure considerations.",
    notice: "The assessment fee applies only where a property owner has been invited to proceed. The assessment provides a more detailed evaluation of the property and supports further consideration.",
    features: [
      "Heavy equipment and road access feasibility review",
      "Physical elevation and line-of-sight analysis",
      "Structured technical assessment dossier for infrastructure stakeholders",
    ],
    ctaText: "READ ASSESSMENT FAQ",
    ctaLink: "/faq",
    image: "/hero4.jpg",
  },
  {
    number: "04",
    tag: "STAKEHOLDER ENGAGEMENT",
    badge: "COORDINATION",
    title: "Infrastructure Opportunity Support",
    desc: "Where an appropriate infrastructure opportunity arises, Polegrid supports the preparation and coordination of relevant property information for further consideration.",
    features: [
      "Packaging location information for telecommunications requirements",
      "Demarcation and access route coordination",
      "Facilitating structured review with infrastructure planners",
    ],
    ctaText: "REGISTER YOUR PROPERTY",
    ctaLink: "/register-property",
    image: "/hero5.jpg",
  },
  {
    number: "05",
    tag: "CORPORATE TRANSACTIONS",
    badge: "GASL OPERATIONS",
    title: "Infrastructure Site Acquisition & Transaction Coordination",
    desc: "Through its corporate operations, Geospatial Asset Systems Limited (GASL) engages with telecommunications and digital infrastructure organizations and supports appropriate site acquisition and transaction coordination requirements.",
    notice: "Commercial engagements are subject to separately agreed terms.",
    features: [
      "Corporate engagement with telecom operators and TowerCos",
      "End-to-end site acquisition lifecycle support",
      "Legal and regulatory documentation alignment",
    ],
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
    image: "/hero3.jpg",
  },
  {
    number: "06",
    tag: "ENTERPRISE PORTFOLIO",
    badge: "MULTI-SITE",
    title: "Corporate, Institutional & Multi-Site Engagement",
    desc: "Polegrid works with organizations that own, manage or control multiple properties, campuses or potential infrastructure locations including estate developers, corporate organizations, educational institutions, healthcare facilities, religious institutions, and industrial developments.",
    notice: "Commercial engagements are subject to applicable requirements and separately agreed terms.",
    features: [
      "Portfolio-wide geospatial mapping and infrastructure suitability audit",
      "Campus connectivity & small cell node planning",
      "Institutional transaction coordination",
    ],
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
    image: "/hero6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner - Solid dark, borderless, photography overlay */}
      <section className="relative bg-zinc-950 text-white py-28 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Services Overview"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            What Polegrid Does
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Infrastructure Intelligence Services
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
            Polegrid provides infrastructure intelligence services designed to support the identification, evaluation and coordination of potential telecommunications and digital infrastructure opportunities.
          </p>
        </div>
      </section>

      {/* Main Services - Alternating Photo Split Layout, No Box Borders, No Gradients */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {servicesList.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={srv.number}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
            >
              {/* Photo Showcase (6 cols) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3] relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[11px] font-bold text-white tracking-wider">
                    {srv.badge}
                  </div>
                </div>
              </div>

              {/* Editorial Text (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-zinc-400 block">
                    {srv.number} • {srv.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                  {srv.desc}
                </p>

                {srv.notice && (
                  <div className="p-5 rounded-2xl bg-zinc-50 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {srv.notice}
                  </div>
                )}

                <div className="space-y-2.5 pt-1">
                  {srv.features.map((ft, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-zinc-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={srv.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Photo Callout - No Borders, No Gradients */}
      <section className="relative py-24 bg-zinc-950 text-white overflow-hidden">
        <img
          src="/hero5.jpg"
          alt="Telecom Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Put Your Property on the Radar?
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Start with free property registration. No payment is required to submit your land to the Polegrid National Site Intelligence Network.
          </p>
          <div className="pt-2">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-xl"
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
