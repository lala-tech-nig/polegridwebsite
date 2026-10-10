import { Link } from "react-router-dom";
import {
  Radio,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Home as HomeIcon,
  TreePine,
  Briefcase,
  Users,
  Compass,
  FileCheck,
  Search,
  Layers,
  Sparkles,
  TrendingUp,
  MapPin,
  Building2,
  Play
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

const propertyTypes = [
  {
    title: "Vacant Land",
    desc: "Unimproved plots or open land ready for geospatial consideration.",
    image: "/hero1.JPG",
  },
  {
    title: "Unused Land",
    desc: "Sections of property currently unutilized with road access.",
    image: "/hero2.jpg",
  },
  {
    title: "Spacious Compounds",
    desc: "Large residential or corporate compounds with available footprint.",
    image: "/hero3.jpg",
  },
  {
    title: "Family Property",
    desc: "Properties with authorized representatives to lease for infrastructure.",
    image: "/about1.jpg",
  },
  {
    title: "Agricultural Property",
    desc: "Farmland or rural locations situated near key transmission routes.",
    image: "/hero4.jpg",
  },
  {
    title: "Residential Property",
    desc: "Homes, estates, or rooftops suitable for small cells or towers.",
    image: "/hero5.jpg",
  },
  {
    title: "Commercial Property",
    desc: "Business districts, retail plazas, or industrial centers.",
    image: "/hero6.jpg",
  },
  {
    title: "Company & Institutional",
    desc: "Corporate holdings, academic campuses, or religious institutions.",
    image: "/about.jpg",
  },
];

const steps = [
  {
    number: "01",
    title: "REGISTER",
    subtitle: "Tell us about your property.",
    badge: "FREE",
    desc: "Submit your location pin, landmark, dimensions, and property characteristics in minutes without any payment.",
    image: "/hero1.JPG",
  },
  {
    number: "02",
    title: "REVIEW",
    subtitle: "Preliminary Consideration",
    badge: "DESK REVIEW",
    desc: "Our geospatial analysts screen submitted property information for initial suitability, network demand, and access.",
    image: "/hero2.jpg",
  },
  {
    number: "03",
    title: "FURTHER ASSESSMENT",
    subtitle: "Where Appropriate",
    badge: "INVITED ONLY",
    desc: "Where appropriate, property owners may be invited to provide additional verification or proceed to a detailed assessment.",
    image: "/hero4.jpg",
  },
  {
    number: "04",
    title: "POTENTIAL OPPORTUNITY",
    subtitle: "Infrastructure Engagement",
    badge: "AGREEMENT",
    desc: "Where a property matches an infrastructure requirement, further engagement and commercial lease discussions may follow.",
    image: "/hero5.jpg",
  },
];

const whyRegisterPerks = [
  "Free property registration — no payment required",
  "Preliminary review of submitted property information",
  "Structured property intelligence on the national radar",
  "Potential consideration for infrastructure opportunities",
  "Access to further assessment where applicable",
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <HeroSlider />

      {/* 2. THE OPPORTUNITY - Image-heavy Split Layout, No Borders, No Gradients */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
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

                {/* Overlaid minimal caption bar */}
                <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium text-zinc-800">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Digital Infrastructure Expansion Across Nigeria
                  </span>
                  <span>Geospatial Intelligence</span>
                </div>
              </div>
            </div>

            {/* Narrative Content Right (6 cols) */}
            <div className="lg:col-span-6 space-y-7 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
                The Opportunity
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
                Your Property. Our Intelligence. Potential Opportunity.
              </h2>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                As Nigeria continues to expand its digital infrastructure, suitable locations remain an important part of the process.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                The value of property can extend beyond ownership when its location becomes relevant to infrastructure development. Polegrid provides property owners with a simple way to place their property information within an infrastructure intelligence environment built around locations that may matter to future telecommunications and digital infrastructure.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                Where a property becomes relevant to an infrastructure requirement and a suitable commercial arrangement is reached, the property owner may benefit through lease income or another agreed property arrangement.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-lg"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY — FREE
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-full transition"
                >
                  Explore Services
                </Link>
              </div>

              <p className="text-xs text-zinc-400 italic pt-1 font-light">
                * Actual opportunities and commercial terms depend on the property, infrastructure requirements and the agreements reached by the relevant parties.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH VIDEO INTERLUDE BANNER */}
      <section className="relative h-[380px] sm:h-[480px] overflow-hidden bg-zinc-950 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            National Footprint
          </span>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connecting Real Land Assets With Future Digital Connectivity
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Every tower, small cell, and optical node begins with verified location data.
          </p>
        </div>
      </section>

      {/* 4. HOW IT WORKS - Image-backed Editorial Steps, No Boxy Borders */}
      <section id="how-it-works" className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
              A Simple Start. <br />
              A Potentially Valuable Opportunity.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light">
              Understand the clear progression from free property submission to potential infrastructure engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div
                key={st.number}
                className="group space-y-5"
              >
                {/* Photo Thumbnail */}
                <div className="img-zoom-wrapper rounded-2xl overflow-hidden shadow-md bg-zinc-200 aspect-[16/10] relative">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-[10px] font-bold text-white tracking-wider">
                    {st.badge}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-zinc-400 block">
                    {st.number}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    {st.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    {st.subtitle}
                  </p>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-zinc-500 italic font-light">
              * Not every registered property will progress to further consideration.
            </p>
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              START WITH FREE REGISTRATION
            </Link>
          </div>

        </div>
      </section>

      {/* 5. WHY REGISTER? - Photo Gallery Showcase, No Borders */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
                Why Register?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
                Your Property Could Be Worth Exploring.
              </h2>

              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
                You may already own property in an area that could become relevant to future infrastructure development.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                Registering helps put your property information on the radar for potential consideration as infrastructure requirements evolve.
              </p>

              {/* Perks List */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                  WHAT YOU GET STARTED WITH
                </span>

                <ul className="space-y-3">
                  {whyRegisterPerks.map((perk, index) => (
                    <li key={index} className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-zinc-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY — FREE
                </Link>
              </div>
            </div>

            {/* Photo Collage Showcase (6 cols) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-zinc-100">
                  <img
                    src="/hero3.jpg"
                    alt="Telecom Infrastructure Compound"
                    className="img-zoom w-full h-full object-cover"
                  />
                </div>
                <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-zinc-100 mt-8">
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

      {/* 6. FOR PROPERTY OWNERS - Image Grid of 8 Property Types, No Borders */}
      <section className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
              For Property Owners
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
              You Own the Property. <br />
              We Help Put the Information on the Radar.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light">
              Polegrid welcomes property owners who have suitable land or property and the appropriate authority to submit it.
            </p>
          </div>

          {/* 8 Image Cards with elegant typography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((item, idx) => (
              <div
                key={idx}
                className="group space-y-3 cursor-default"
              >
                <div className="img-zoom-wrapper rounded-2xl overflow-hidden shadow-md bg-zinc-200 aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-zoom w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-zinc-700 text-sm font-normal">
              Your property may become relevant to future infrastructure requirements.
            </p>
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
          </div>

        </div>
      </section>

      {/* 7. EARNING OPPORTUNITY - Clean Editorial & Photography Split, No Borders */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
                Earning Opportunity
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
                Could Your Property Generate Income?
              </h2>

              <p className="text-2xl font-bold text-zinc-950">
                Potentially.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                A property may become commercially relevant where it meets applicable requirements, becomes suitable for an infrastructure need and is selected for further engagement.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                Where an agreement is reached, the property owner may receive income through the applicable lease or property arrangement.
              </p>

              <div className="p-6 rounded-3xl bg-zinc-50 space-y-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                <span className="font-bold text-zinc-900 block">
                  Commercial Transparency:
                </span>
                <p>
                  There is no fixed income amount for every property. Commercial terms depend on factors such as the property, location, infrastructure requirements and the agreement reached by the relevant parties.
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  YOUR FIRST STEP IS FREE
                </p>
                <Link
                  to="/register-property"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
                >
                  <Radio className="w-4 h-4 text-emerald-400" />
                  REGISTER YOUR PROPERTY
                </Link>
              </div>
            </div>

            {/* Right Photography Feature (6 cols) */}
            <div className="lg:col-span-6">
              <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3]">
                <img
                  src="/hero6.jpg"
                  alt="Infrastructure Location Opportunity"
                  className="img-zoom w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 font-light px-2">
                <span>Lease terms agreed directly between parties</span>
                <span>Long-Term Income Potential</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOR ORGANIZATIONS SPOTLIGHT BANNER - Full-bleed Image Background, Solid, No Gradients */}
      <section className="relative py-28 bg-zinc-950 text-white overflow-hidden">
        <img
          src="/about.jpg"
          alt="Organization Collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            For Organizations & Infrastructure Stakeholders
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Looking to Work With Polegrid?
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Geospatial Asset Systems Limited (GASL), through the Polegrid platform, welcomes enquiries from telecom operators, TowerCos, estate developers, and institutions interested in infrastructure locations, site acquisition, and multi-site coordination.
          </p>

          <div className="pt-4">
            <Link
              to="/organization-enquiry"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-lg"
            >
              <Building2 className="w-4 h-4" />
              CONNECT WITH POLEGRID
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL HOME CTA - Clean, Minimalist, Editorial */}
      <section className="py-28 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            National Site Intelligence
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]">
            Your Property. Your Information. <br />
            Your Potential Opportunity.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
            Nigeria's infrastructure needs suitable locations. <br />
            Your property could be one of them.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-100 rounded-full transition shadow-sm"
            >
              Read FAQs
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400 font-light">
            <span>No upfront payment required</span>
            <span>•</span>
            <span>SCUML Verified</span>
            <span>•</span>
            <span>Managed by GASL</span>
          </div>
        </div>
      </section>

    </div>
  );
}
