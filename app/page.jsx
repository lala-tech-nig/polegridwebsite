import { Link } from "react-router-dom";
import HeroSlider from "@/components/HeroSlider";
import { 
  Building2, 
  MapPin, 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Layers,
  FileCheck2,
  Lock,
  Landmark,
  Eye
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "FREE PROPERTY REGISTRATION",
    subtitle: "Submit Property Details",
    desc: "Tell us about your property, its location, size and accessibility in our free online form.",
    image: "/hero1.JPG",
    badge: "Step 1 • Free",
  },
  {
    number: "02",
    title: "PRELIMINARY GEOSPATIAL REVIEW",
    subtitle: "Internal Screening",
    desc: "Polegrid reviews your property information against telecom coverage needs and location criteria.",
    image: "/hero2.jpg",
    badge: "Step 2 • Internal Review",
  },
  {
    number: "03",
    title: "ADVANCED TECHNICAL ASSESSMENT",
    subtitle: "Shortlisted Properties Only",
    desc: "If your property shows potential, you may be invited to proceed with a paid technical assessment (ATA — ₦15,500).",
    image: "/hero4.jpg",
    badge: "Step 3 • Invited Only",
  },
  {
    number: "04",
    title: "POTENTIAL INFRASTRUCTURE MATCH",
    subtitle: "Commercial Opportunity",
    desc: "Qualified properties may be matched with telecommunication companies, tower companies, or infrastructure developers.",
    image: "/hero6.jpg",
    badge: "Step 4 • Opportunity",
  },
];

const whyRegisterPerks = [
  "Put your land on the radar for future telecommunications, connectivity and digital infrastructure needs.",
  "100% Free Preliminary Geospatial Screening with no upfront payment.",
  "Zero disruption to normal land usage until a lease agreement is executed.",
  "Opportunity for long-term lease income (10–30 years) with institutional operators.",
  "Professional management and structured screening by Geospatial Asset Systems Limited (GASL).",
];

const propertyTypes = [
  {
    title: "VACANT LAND & OPEN PLOTS",
    desc: "Fenced or open parcels of land in residential, commercial, industrial or rural corridors.",
    image: "/hero1.JPG",
  },
  {
    title: "COMMERCIAL & RESIDENTIAL ROOFTOPS",
    desc: "Rooftops of multi-storey buildings offering strategic transmission elevation.",
    image: "/hero2.jpg",
  },
  {
    title: "SPACIOUS COMPOUNDS & YARDS",
    desc: "Commercial yards, warehouse perimeters, and institutional properties with surplus footprint.",
    image: "/hero3.jpg",
  },
  {
    title: "HIGHWAY CORRIDORS & ROAD FRONTAGES",
    desc: "Strategic properties situated along transit arteries and interstate expressways.",
    image: "/hero4.jpg",
  },
  {
    title: "ESTATE & COMMUNITY PERIMETERS",
    desc: "Designated utility corners or border zones within residential estates and planned communities.",
    image: "/hero5.jpg",
  },
  {
    title: "AGRICULTURAL & RURAL MARGINS",
    desc: "Perimeter borders of farmland or rural holdings situated near cellular coverage blindspots.",
    image: "/hero6.jpg",
  },
  {
    title: "EDUCATIONAL & INSTITUTIONAL GROUNDS",
    desc: "School grounds, campuses, and health centres with perimeter space for connectivity infrastructure.",
    image: "/about.jpg",
  },
  {
    title: "INDUSTRIAL & LOGISTICS FACILITIES",
    desc: "Depots, manufacturing plants, and truck yards requiring high-density communications hubs.",
    image: "/about1.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <HeroSlider />

      {/* 2. THE OPPORTUNITY - Bold, Image-heavy Split Layout */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Photography Left (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative group">
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    src="/hero2.jpg"
                    alt="Telecommunications Tower Site in Nigeria"
                    className="img-zoom w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-zinc-600 font-semibold">
                  <span className="flex items-center gap-2 font-bold text-zinc-900">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    Digital Infrastructure Expansion Across Nigeria
                  </span>
                  <span className="font-bold text-emerald-800">Geospatial Intelligence</span>
                </div>
              </div>
            </div>

            {/* Narrative Content Right (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
                THE OPPORTUNITY
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
                YOUR PROPERTY. OUR INTELLIGENCE. POTENTIAL OPPORTUNITY.
              </h2>

              <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                As Nigeria continues to expand its digital infrastructure, suitable locations remain an important part of the process.
              </p>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                The value of property can extend beyond ownership when its location becomes relevant to infrastructure development. Polegrid provides property owners with a simple way to place their property information within an infrastructure intelligence environment built around locations that may matter to future telecommunications and digital infrastructure.
              </p>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                Where a property becomes relevant to an infrastructure requirement and a suitable commercial arrangement is reached, the property owner may benefit through lease income or another agreed property arrangement.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY — FREE
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-full transition"
                >
                  Explore Services
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-zinc-500 italic pt-1 font-medium">
                * Actual opportunities and commercial terms depend on the property, infrastructure requirements and the agreements reached by the relevant parties.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH VIDEO INTERLUDE BANNER */}
      <section className="relative h-[420px] sm:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            NATIONAL FOOTPRINT
          </span>
          <h3 
            className="text-3xl sm:text-5xl lg:text-6xl font-black !text-white tracking-tight [text-shadow:_0_3px_20px_rgba(0,0,0,1),_0_6px_40px_rgba(0,0,0,0.95)]"
            style={{ color: "#ffffff" }}
          >
            CONNECTING REAL LAND ASSETS WITH FUTURE DIGITAL CONNECTIVITY
          </h3>
          <p 
            className="!text-white text-base sm:text-xl max-w-3xl mx-auto font-semibold [text-shadow:_0_2px_14px_rgba(0,0,0,1)]"
            style={{ color: "#ffffff" }}
          >
            Every tower, small cell, and optical node begins with verified location data.
          </p>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800">
              PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
              A SIMPLE START. <br />
              A POTENTIALLY VALUABLE OPPORTUNITY.
            </h2>
            <p className="text-zinc-700 text-lg sm:text-xl font-medium">
              Understand the clear progression from free property submission to potential infrastructure engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div
                key={st.number}
                className="group space-y-5 bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition"
              >
                <div className="img-zoom-wrapper rounded-2xl overflow-hidden shadow-sm bg-zinc-200 aspect-[16/10] relative">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-black text-white tracking-wider">
                    {st.badge}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-mono font-black text-zinc-400 block">
                    {st.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700">
                    {st.subtitle}
                  </p>
                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-zinc-600 italic font-medium">
              * Not every registered property will progress to further consideration.
            </p>
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              START WITH FREE REGISTRATION
            </Link>
          </div>

        </div>
      </section>

      {/* 5. WHY REGISTER? */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-7">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
                WHY REGISTER?
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
                YOUR PROPERTY COULD BE WORTH EXPLORING.
              </h2>

              <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
                You may already own property in an area that could become relevant to future infrastructure development.
              </p>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                Registering helps put your property information on the radar for potential consideration as infrastructure requirements evolve.
              </p>

              <div className="space-y-4 pt-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-900 block">
                  WHAT YOU GET STARTED WITH
                </span>

                <ul className="space-y-3.5">
                  {whyRegisterPerks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3.5 text-zinc-900 text-sm sm:text-base font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY — FREE
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-zinc-100">
                  <img
                    src="/hero3.jpg"
                    alt="Telecom Infrastructure Compound"
                    className="img-zoom w-full h-full object-cover"
                  />
                </div>
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-zinc-100 mt-8">
                  <img
                    src="/hero5.jpg"
                    alt="Mast Location Verification"
                    className="img-zoom w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOR PROPERTY OWNERS - 8 Property Types */}
      <section className="py-24 sm:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
              FOR PROPERTY OWNERS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
              YOU OWN THE PROPERTY. <br />
              WE HELP PUT THE INFORMATION ON THE RADAR.
            </h2>
            <p className="text-zinc-700 text-lg sm:text-xl font-medium">
              Polegrid welcomes property owners who have suitable land or property and the appropriate authority to submit it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((item, idx) => (
              <div
                key={idx}
                className="group space-y-3.5 bg-white p-5 rounded-3xl shadow-sm hover:shadow-md transition"
              >
                <div className="img-zoom-wrapper rounded-2xl overflow-hidden shadow-sm bg-zinc-200 aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-zinc-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-zinc-800 text-base font-bold">
              Your property may become relevant to future infrastructure requirements.
            </p>
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
          </div>

        </div>
      </section>

      {/* 7. EARNING OPPORTUNITY */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
                EARNING OPPORTUNITY
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
                COULD YOUR PROPERTY GENERATE INCOME?
              </h2>

              <p className="text-2xl sm:text-3xl font-black text-emerald-800">
                POTENTIALLY.
              </p>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                A property may become commercially relevant where it meets applicable requirements, becomes suitable for an infrastructure need and is selected for further engagement.
              </p>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                Where an agreement is reached, the property owner may receive income through the applicable lease or property arrangement.
              </p>

              <div className="p-6 rounded-3xl bg-zinc-50 space-y-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                <span className="font-black text-zinc-950 block">
                  Commercial Transparency:
                </span>
                <p>
                  There is no fixed income amount for every property. Commercial terms depend on factors such as the property, location, infrastructure requirements and the agreement reached by the relevant parties.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-900">
                  YOUR FIRST STEP IS FREE
                </p>
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3]">
                <img
                  src="/hero6.jpg"
                  alt="Infrastructure Location Opportunity"
                  className="img-zoom w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-700 font-bold px-2">
                <span>Lease terms agreed directly between parties</span>
                <span className="text-emerald-800">Long-Term Income Potential</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOR ORGANIZATIONS SPOTLIGHT BANNER */}
      <section className="relative py-24 sm:py-32 bg-black text-white overflow-hidden">
        <img
          src="/about.jpg"
          alt="Organization Collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            FOR ORGANIZATIONS & INFRASTRUCTURE STAKEHOLDERS
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            LOOKING TO WORK WITH POLEGRID?
          </h2>

          <p className="text-white text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Geospatial Asset Systems Limited (GASL), through the Polegrid platform, welcomes enquiries from telecom operators, TowerCos, estate developers, and institutions interested in infrastructure locations, site acquisition, and multi-site coordination.
          </p>

          <div className="pt-4">
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-xl transform hover:scale-105"
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              CONNECT WITH POLEGRID
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL HOME CTA */}
      <section className="py-24 sm:py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
            NATIONAL SITE INTELLIGENCE
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.12]">
            YOUR PROPERTY. YOUR INFORMATION. <br />
            YOUR POTENTIAL OPPORTUNITY.
          </h2>

          <p className="text-lg sm:text-2xl text-zinc-800 max-w-2xl mx-auto font-semibold leading-relaxed">
            Nigeria's infrastructure needs suitable locations. <br />
            Your property could be one of them.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-zinc-800 hover:text-zinc-950 bg-white hover:bg-zinc-100 rounded-full transition shadow-sm"
            >
              Read FAQs
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-zinc-500 font-bold">
            <span>No upfront payment required</span>
            <span>•</span>
            <span>100% Free Registration</span>
            <span>•</span>
            <span>Managed by GASL</span>
          </div>
        </div>
      </section>

    </div>
  );
}
