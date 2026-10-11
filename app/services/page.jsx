import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle,
  ShieldCheck,
  Building2,
  MapPin,
  Radio
} from "lucide-react";

const servicesList = [
  {
    number: "01",
    tag: "PROPERTY REGISTRATION",
    title: "Register Your Property",
    desc: "Register land or property with the Polegrid National Site Intelligence Network.",
    pricing: "FREE",
    priceNote: "Property registration is the starting point for property owners who want their property information considered within the Polegrid network.",
    image: "/hero1.JPG",
    badge: "FREE REGISTRATION",
    ctaText: "REGISTER YOUR PROPERTY",
    ctaLink: "/register-property",
  },
  {
    number: "02",
    tag: "PROPERTY & LOCATION INTELLIGENCE",
    title: "Property & Location Intelligence",
    desc: "Polegrid organizes and maintains relevant property and location information to support infrastructure-related evaluation and planning.",
    secondaryDesc: "This helps make potentially relevant locations easier to identify and understand as infrastructure requirements evolve.",
    image: "/hero2.jpg",
    badge: "LOCATION INTELLIGENCE",
    ctaText: "REGISTER YOUR PROPERTY",
    ctaLink: "/register-property",
  },
  {
    number: "03",
    tag: "ADVANCED TECHNICAL SITE ASSESSMENT",
    title: "Advanced Technical Site Assessment",
    desc: "Where a property is invited to proceed to a more detailed stage, Polegrid may provide an Advanced Technical Site Assessment covering relevant site, access, physical, location and infrastructure considerations.",
    pricing: "₦15,500",
    priceTitle: "Advanced Technical Site Assessment Fee",
    priceNote: "The assessment fee applies only where a property owner has been invited to proceed.",
    secondaryNote: "The assessment provides a more detailed evaluation of the property and supports further consideration.",
    image: "/hero3.jpg",
    badge: "INVITATION ONLY • ₦15,500",
    ctaText: "ASSESSMENT INFORMATION",
    ctaLink: "/assessment-payment",
  },
  {
    number: "04",
    tag: "INFRASTRUCTURE OPPORTUNITY SUPPORT",
    title: "Infrastructure Opportunity Support",
    desc: "Where an appropriate infrastructure opportunity arises, Polegrid supports the preparation and coordination of relevant property information for further consideration.",
    image: "/hero4.jpg",
    badge: "OPPORTUNITY SUPPORT",
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "05",
    tag: "SITE ACQUISITION & TRANSACTION COORDINATION",
    title: "Infrastructure Site Acquisition & Transaction Coordination",
    desc: "Through its corporate operations, Geospatial Asset Systems Limited (GASL) engages with telecommunications and digital infrastructure organizations and supports appropriate site acquisition and transaction coordination requirements.",
    secondaryDesc: "This may include supporting the identification and coordination of suitable property opportunities for infrastructure requirements.",
    disclaimer: "Commercial engagements are subject to separately agreed terms.",
    image: "/hero5.jpg",
    badge: "MANAGED BY GASL",
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "06",
    tag: "CORPORATE, INSTITUTIONAL & MULTI-SITE ENGAGEMENT",
    title: "Have Multiple Properties or Potential Infrastructure Locations?",
    desc: "Polegrid works with organizations that own, manage or control multiple properties, campuses or potential infrastructure locations.",
    bodyBullets: [
      "Property companies, estate developers, and corporate organizations",
      "Educational institutions and healthcare organizations",
      "Religious and community institutions",
      "Industrial developments, public institutions, and other organizations with suitable property interests",
    ],
    secondaryDesc: "Where appropriate, We can support infrastructure intelligence, site assessment and site acquisition coordination for multi-site and institutional engagements.",
    disclaimer: "Commercial engagements are subject to applicable requirements and separately agreed terms.",
    image: "/hero6.jpg",
    badge: "MULTI-SITE & INSTITUTIONAL",
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-32 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Services Overview"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span 
            className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ color: '#34d399' }}
          >
            SERVICES
          </span>
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white !text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)] uppercase"
            style={{ color: '#ffffff' }}
          >
            What Polegrid Does
          </h1>
          <p 
            className="text-lg sm:text-2xl text-white !text-white leading-relaxed max-w-3xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ color: '#ffffff' }}
          >
            Polegrid provides infrastructure intelligence services designed to support the identification, evaluation and coordination of potential telecommunications and digital infrastructure opportunities.
          </p>
        </div>
      </section>

      {/* Main 6 Services - High Impact Editorial Split Layout */}
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
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md text-xs sm:text-sm font-black text-white tracking-wider">
                    {srv.badge}
                  </div>
                </div>
              </div>

              {/* Editorial Text (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                
                {/* Category Header */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-black text-emerald-800 uppercase tracking-widest block">
                    {srv.number} • {srv.tag}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                    {srv.title}
                  </h2>
                </div>

                {/* Primary Description */}
                <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                  {srv.desc}
                </p>

                {/* Secondary Description */}
                {srv.secondaryDesc && (
                  <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                    {srv.secondaryDesc}
                  </p>
                )}

                {/* Bullet Points if applicable */}
                {srv.bodyBullets && (
                  <div className="space-y-3 pt-2">
                    <p className="text-sm font-black uppercase tracking-wider text-zinc-500">
                      Organizations Include:
                    </p>
                    {srv.bodyBullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-base text-zinc-800 font-bold">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pricing / Fee Highlight Box */}
                {srv.pricing && (
                  <div className="p-6 rounded-2xl bg-zinc-50 space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight">
                        {srv.pricing}
                      </span>
                      {srv.priceTitle && (
                        <span className="text-base sm:text-lg font-black text-zinc-900">
                          {srv.priceTitle}
                        </span>
                      )}
                    </div>
                    {srv.priceNote && (
                      <p className="text-sm sm:text-base text-zinc-700 font-semibold leading-relaxed">
                        {srv.priceNote}
                      </p>
                    )}
                    {srv.secondaryNote && (
                      <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed pt-1">
                        {srv.secondaryNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Disclaimer */}
                {srv.disclaimer && (
                  <p className="text-sm text-zinc-500 italic font-medium">
                    *{srv.disclaimer}*
                  </p>
                )}

                {/* Call to action */}
                <div className="pt-4">
                  <Link
                    to={srv.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105 uppercase tracking-wide"
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
          <h3 
            className="text-3xl sm:text-5xl font-black text-white !text-white tracking-tight uppercase [text-shadow:_0_3px_20px_rgba(0,0,0,1)]"
            style={{ color: '#ffffff' }}
          >
            CONNECT WITH POLEGRID
          </h3>
          <p 
            className="text-zinc-100 !text-white text-base sm:text-xl max-w-2xl mx-auto font-medium [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ color: '#ffffff' }}
          >
            Commercial engagements are subject to applicable requirements and separately agreed terms.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-2xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition shadow-2xl transform hover:scale-105"
            >
              CONNECT WITH POLEGRID
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
