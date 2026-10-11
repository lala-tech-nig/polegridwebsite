import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle,
  Radio
} from "lucide-react";

const servicesList = [
  {
    number: "01",
    tag: "01. PROPERTY REGISTRATION",
    title: "Register Your Property",
    desc: "Free Register property with the Polegrid National Site Intelligence Network.",
    // pricing: "FREE",
    bullets: [
      "Free property registration nationwide",
      "Digital property information submission",
      "Individual and organizational registration",
      "Potential infrastructure opportunity consideration",
    ],
    image: "/hero1.JPG",
    badge: "FREE REGISTRATION",
    ctaText: "REGISTER YOUR PROPERTY — FREE",
    ctaLink: "/register-property",
  },
  {
    number: "02",
    tag: "02. PROPERTY & LOCATION INTELLIGENCE",
    title: "Property & Location Intelligence",
    desc: "Polegrid organizes property and location information for infrastructure planning.",
    bullets: [
      "Organized property information records",
      "Structured property and location data",
      "Geographic context for properties",
      "Infrastructure planning support information",
    ],
    image: "/hero2.jpg",
    badge: "LOCATION INTELLIGENCE",
    ctaText: "REGISTER YOUR PROPERTY — FREE",
    ctaLink: "/register-property",
  },
  {
    number: "03",
    tag: "03. ADVANCED TECHNICAL SITE ASSESSMENT",
    title: "Advanced Technical Site Assessment",
    desc: "Invited properties may proceed to detailed assessment.",
    // pricing: "₦15,500",
    priceTitle: "₦15,500 Advanced Technical Site Assessment Fee",
    priceNote: "Payable only after an invitation.",
    bullets: [
      "Property and location information review",
      "Geographic coordinate accuracy checks",
      "Site access and terrain review",
      "Agreed technical assessment report",
    ],
    disclaimer: "Assessment does not guarantee selection, leasing, deployment or income.",
    image: "/hero3.jpg",
    badge: "INVITATION ONLY • ₦15,500",
    ctaText: "LEARN MORE ABOUT ATA",
    ctaLink: "/assessment-payment",
  },
  {
    number: "04",
    tag: "04. INFRASTRUCTURE OPPORTUNITY SUPPORT",
    title: "Infrastructure Opportunity Support",
    desc: "Polegrid supports relevant property information for potential infrastructure opportunities.",
    bullets: [
      "Prepare property information for consideration",
      "Organize relevant opportunity information",
      "Support appropriate stakeholder communication",
      "Coordinate information and next steps",
    ],
    image: "/hero4.jpg",
    badge: "OPPORTUNITY SUPPORT",
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "05",
    tag: "05. SITE ACQUISITION & TRANSACTION COORDINATION",
    title: "Infrastructure Site Acquisition & Transaction Coordination",
    desc: "GASL supports site acquisition and transaction coordination for infrastructure organizations.",
    bullets: [
      "Coordinate infrastructure site requirements",
      "Identify potentially suitable properties",
      "Coordinate property owner communications",
      "Coordinate transaction documentation support",
    ],
    disclaimer: "Commercial engagements require separately agreed terms.",
    image: "/hero5.jpg",
    badge: "MANAGED BY GASL",
    ctaText: "CONNECT WITH POLEGRID",
    ctaLink: "/organization-enquiry",
  },
  {
    number: "06",
    tag: "06. CORPORATE, INSTITUTIONAL & MULTI-SITE ENGAGEMENT",
    title: "Have Multiple Properties or Potential Infrastructure Locations?",
    desc: "Polegrid works with organizations controlling multiple properties, campuses or potential infrastructure locations.",
    subDesc: "This includes estates, companies, churches, mosques, universities, hospitals and public institutions.",
    bullets: [
      "Review multiple property locations",
      "Organize institutional portfolio information",
      "Scope multi-site assessment services",
      "Coordinate potential multi-location opportunities",
    ],
    disclaimer: "Commercial engagements depend on scope and requirements.",
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
            Polegrid provides infrastructure intelligence for potential telecommunications and digital infrastructure opportunities.
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
                    {srv.tag}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                    {srv.title}
                  </h2>
                </div>

                {/* Primary Description */}
                <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                  {srv.desc}
                </p>

                {/* Sub Description if present */}
                {srv.subDesc && (
                  <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                    {srv.subDesc}
                  </p>
                )}

                {/* Pricing / Fee Highlight Box */}
                {srv.pricing && (
                  <div className="p-6 rounded-2xl bg-zinc-50 space-y-1">
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
                      <p className="text-sm sm:text-base text-zinc-700 font-semibold leading-relaxed pt-1">
                        {srv.priceNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Bullet Points */}
                {srv.bullets && (
                  <div className="space-y-3 pt-2">
                    {srv.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-base sm:text-lg text-zinc-800 font-bold">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Disclaimer */}
                {srv.disclaimer && (
                  <p className="text-sm text-zinc-500 italic font-medium pt-1">
                    *{srv.disclaimer}*
                  </p>
                )}

                {/* Call to action */}
                {srv.ctaText && (
                  <div className="pt-4">
                    <Link
                      to={srv.ctaLink}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105 uppercase tracking-wide"
                    >
                      <span>{srv.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Callout Section: READY TO GET STARTED? */}
      <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        <img
          src="/hero5.jpg"
          alt="Telecom Infrastructure"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span 
            className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ color: '#34d399' }}
          >
            READY TO GET STARTED?
          </span>
          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white !text-white tracking-tight uppercase [text-shadow:_0_3px_20px_rgba(0,0,0,1)]"
            style={{ color: '#ffffff' }}
          >
            Your Property. Your Information. Your Potential Opportunity.
          </h2>
          <p 
            className="text-zinc-100 !text-white text-base sm:text-xl max-w-2xl mx-auto font-medium [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ color: '#ffffff' }}
          >
            Put your property information on the radar.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-2xl transform hover:scale-105 uppercase"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition shadow-2xl transform hover:scale-105 uppercase"
            >
              CONNECT WITH POLEGRID
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto italic pt-4">
            *Property registration is free. Paid assessments apply only to invited properties. Registration or assessment does not guarantee deployment, lease approval, commercial engagement or income.*
          </p>
        </div>
      </section>

    </div>
  );
}
