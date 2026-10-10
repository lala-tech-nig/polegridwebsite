import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Radio, 
  MapPin, 
  Building2, 
  Compass, 
  Layers, 
  Target, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  UserCheck
} from "lucide-react";

const teamMembers = [
  {
    name: "Oge B.",
    role: "Infrastructure Technical Adviser",
    bio: "Provides technical support and professional input relating to telecommunications and digital infrastructure matters, contributing to the organization's understanding and coordination of relevant technical requirements where required.",
    image: "/oge.png",
  },
  {
    name: "Saratu T.",
    role: "Compliance & Documentation Adviser",
    bio: "Provides support on documentation, compliance-related matters and operational record standards, helping ensure relevant information and engagements are handled responsibly and consistently.",
    image: "/saratu.jpg",
  },
  {
    name: "Leke A.",
    role: "Corporate & Infrastructure Development Adviser",
    bio: "Provides professional support and strategic input on corporate relationships, infrastructure-related opportunities and organizational development where required.",
    image: "/leke.jpg",
  },
  {
    name: "Ebenezer A.",
    role: "Head of Operations",
    bio: "Oversees the day-to-day operations of Polegrid Solutions, coordinating service delivery, communication and operational activities while maintaining the organization's service and operational standards.",
    image: "/eben.png",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Hero Header - Photography Focused, Borderless */}
      <section className="relative bg-zinc-950 text-white py-28 overflow-hidden">
        <img
          src="/about1.jpg"
          alt="Digital Infrastructure Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-zinc-950/75" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            About Polegrid
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            A Bridge to Nigeria’s Digital Infrastructure
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
            Infrastructure Begins With Better Information. <br />
            Polegrid is an <strong className="text-white font-semibold">Infrastructure Intelligence Platform managed by Geospatial Asset Systems Limited (GASL)</strong>.
          </p>
        </div>
      </section>

      {/* Mission & Photo Split - No Borders */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
              Core Purpose
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Make potentially relevant locations easier to identify, understand and evaluate for infrastructure opportunity.
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Polegrid brings together property and location information relevant to telecommunications and digital infrastructure and provides a structured environment through which that information can be considered as infrastructure needs evolve.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              We work with property owners and appropriate infrastructure organizations to support better visibility, better information and better coordination around potential infrastructure locations.
            </p>

            <div className="p-5 rounded-2xl bg-zinc-50 text-xs sm:text-sm text-zinc-700 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>SCUML Verified:</strong> Polegrid Solutions is registered with the Special Control Unit Against Money Laundering (SCUML).
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3]">
              <img
                src="/about.jpg"
                alt="Polegrid Infrastructure Operations"
                className="img-zoom w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* OUR ROLE Section - Clean Editorial Comparison, No Box Borders */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
              Our Role
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
              Intelligence. Location. Opportunity.
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
              Polegrid focuses on infrastructure intelligence and opportunity support around locations that may become relevant to telecommunications and digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-950 flex items-center gap-2">
                <span className="text-zinc-400 font-mono text-sm">01 /</span>
                What We Are Not
              </h3>
              <ul className="space-y-3 text-sm text-zinc-600 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We are <strong>not</strong> a conventional land seller or real estate marketplace.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We <strong>do not</strong> simply list land for sale.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  <span>We do not acquire ownership of properties submitted to our platform.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-950 flex items-center gap-2">
                <span className="text-zinc-400 font-mono text-sm">02 /</span>
                What We Do
              </h3>
              <ul className="space-y-3 text-sm text-zinc-700 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Where an appropriate infrastructure opportunity arises, Polegrid/GASL may support the relevant site acquisition and transaction coordination process between the parties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>The property remains under the full control and authority of the property owner at all times.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>Any eventual property arrangement is subject to the agreement reached by the relevant parties.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* OUR VISION Section - Cinematic Video Background */}
      <section className="relative py-28 bg-zinc-950 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/75" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
            Continental Vision
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Building Infrastructure Intelligence for a Connected Africa
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Nigeria's continuing digital development will require suitable locations and better information about where infrastructure can be developed.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Polegrid is building a growing national infrastructure intelligence network designed to help organize relevant property and location information. Starting from Nigeria, our ambition is to support a broader African infrastructure intelligence ecosystem.
          </p>

          <div className="pt-4">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-xl"
            >
              <Radio className="w-4 h-4 text-emerald-600" />
              REGISTER YOUR PROPERTY — FREE
            </Link>
          </div>
        </div>
      </section>

      {/* OUR TEAM Section - Clean Photographic Gallery, No Box Borders */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            Team & Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
            The People Behind Polegrid
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light">
            Polegrid is supported by a professional team with complementary experience across operations, infrastructure, documentation and corporate development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group space-y-4"
            >
              <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-lg bg-zinc-100 aspect-[4/5] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-zoom w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-zinc-950">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {member.role}
                </p>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Communication Notice - Seamless */}
        <div className="p-8 rounded-3xl bg-zinc-50 max-w-3xl mx-auto text-center space-y-2 text-xs sm:text-sm text-zinc-600 font-light">
          <p className="font-bold text-zinc-900">
            Official Communication Notice:
          </p>
          <p>
            For operational, property-owner and organizational enquiries, please use Polegrid's official communication channels. Specific team members may participate in engagements where their expertise or involvement is appropriate.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold text-zinc-800">
            <a href="tel:07018162166" className="hover:underline">Phone: 07018162166</a>
            <span>•</span>
            <a href="mailto:polegrid01@gmail.com" className="hover:underline">Email: polegrid01@gmail.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
