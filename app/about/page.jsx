import { Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  Radio, 
  ArrowRight,
  TrendingUp,
  Layers,
  Globe
} from "lucide-react";

const teamMembers = [
  {
    name: "Ogechukwu Obianyo",
    role: "Strategic Growth Lead",
    bio: "Focuses on strategic direction, platform growth, market engagement and corporate initiatives.",
    image: "/oge.png",
  },
  {
    name: "Saratu Silas",
    role: "Legal & Corporate Documentation Lead",
    bio: "Supports legal considerations, documentation review, corporate structuring and commercial agreements.",
    image: "/saratu.jpg",
  },
  {
    name: "Leke Olushola",
    role: "Technical Lead",
    bio: "Guides technical assessment processes, site evaluation workflows and platform data management.",
    image: "/leke.jpg",
  },
  {
    name: "Ebenezer Omojola",
    role: "Business & Partnerships Lead",
    bio: "Leads stakeholder engagement, partnership development, organizational relationships and commercial outreach.",
    image: "/eben.png",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-32 overflow-hidden">
        <img
          src="/about.jpg"
          alt="About Polegrid Team"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            ABOUT POLEGRID SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            INFRASTRUCTURE INTELLIGENCE FOR NIGERIA
          </h1>
          <p className="text-lg sm:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Managed by Geospatial Asset Systems Limited (GASL), Polegrid organizes location data to bridge property owners with telecommunications deployment.
          </p>
        </div>
      </section>

      {/* PLATFORM IDENTITY Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
              PLATFORM IDENTITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-[1.12]">
              AN INFRASTRUCTURE INTELLIGENCE PLATFORM.
            </h2>
            <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-semibold">
              Polegrid Solutions is managed by <strong className="text-zinc-950">Geospatial Asset Systems Limited (GASL)</strong>.
            </p>
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              We focus on building and maintaining a structured national location intelligence network for telecommunications, connectivity and digital infrastructure in Nigeria.
            </p>
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              Our role is to bring relevant property and location information into view, review it against telecom deployment needs, and coordinate legitimate commercial engagements where suitable.
            </p>

            <div className="p-6 rounded-3xl bg-zinc-50 flex items-center gap-4 text-sm sm:text-base font-bold text-zinc-800 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <span>
                Registered with the Special Control Unit Against Money Laundering (SCUML) under Nigerian regulatory compliance.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3]">
              <img
                src="/about1.jpg"
                alt="Polegrid Field Intelligence"
                className="img-zoom w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE ARE & ARE NOT */}
      <section className="py-24 sm:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
              OUR FOCUS & SCOPE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              INTELLIGENCE. LOCATION. OPPORTUNITY.
            </h2>
            <p className="text-zinc-700 text-lg sm:text-xl font-medium leading-relaxed">
              Polegrid focuses on infrastructure intelligence and opportunity support around locations that may become relevant to telecommunications and digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5 bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-black text-zinc-950 flex items-center gap-2">
                <span className="text-zinc-400 font-mono text-base">01 /</span>
                WHAT WE ARE NOT
              </h3>
              <ul className="space-y-4 text-base text-zinc-700 font-semibold">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We are <strong>not</strong> a conventional land seller or real estate marketplace.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We <strong>do not</strong> simply list land for sale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We do not acquire ownership of properties submitted to our platform.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-5 bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-black text-zinc-950 flex items-center gap-2">
                <span className="text-emerald-700 font-mono text-base">02 /</span>
                WHAT WE DO
              </h3>
              <ul className="space-y-4 text-base text-zinc-800 font-semibold">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Where an appropriate infrastructure opportunity arises, Polegrid/GASL supports the relevant site acquisition and transaction coordination process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>The property remains under the full control and authority of the property owner at all times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Any eventual property arrangement is subject to the agreement reached by the relevant parties.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* OUR VISION Section */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block">
            FUTURE OUTLOOK
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow">
            NIGERIA FIRST. TOWARDS A BROADER CONTINENTAL AMBITION.
          </h2>

          <p className="text-zinc-100 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Polegrid is building a growing national infrastructure intelligence network designed to help organize relevant property and location information. Starting from Nigeria, our ambition is to support a broader African infrastructure intelligence ecosystem.
          </p>

          <div className="pt-4">
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

      {/* OUR TEAM Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-800 block">
            TEAM & ADVISORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            THE PEOPLE BEHIND POLEGRID
          </h2>
          <p className="text-zinc-700 text-lg sm:text-xl font-medium">
            Polegrid is supported by a professional team with complementary experience across operations, infrastructure, documentation and corporate development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group space-y-4 bg-zinc-50 p-5 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <div className="img-zoom-wrapper rounded-2xl overflow-hidden shadow-md bg-zinc-200 aspect-[4/5] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-zoom w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-zinc-950">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-emerald-700 mt-0.5">
                  {member.role}
                </p>
                <p className="text-zinc-600 text-sm mt-2 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Communication Notice */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 max-w-3xl mx-auto text-center space-y-3 text-sm sm:text-base text-zinc-700 font-medium shadow-sm">
          <p className="font-black text-zinc-950 text-base sm:text-lg">
            OFFICIAL COMMUNICATION NOTICE
          </p>
          <p>
            For operational, property-owner and organizational enquiries, please use Polegrid's official communication channels. Specific team members may participate in engagements where their expertise or involvement is appropriate.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-zinc-900">
            <a href="tel:07018162166" className="hover:text-emerald-700 underline">Phone: 07018162166</a>
            <span>•</span>
            <a href="mailto:polegrid01@gmail.com" className="hover:text-emerald-700 underline">Email: polegrid01@gmail.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
