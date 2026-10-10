import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Quote, 
  Radio, 
  ShieldCheck, 
  Sparkles
} from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    category: "property-owner",
    topic: "Registration Experience",
    quote:
      "The registration process was straightforward, and the information provided helped me understand how my property could be considered for future infrastructure opportunities.",
    author: "Verified Partner",
    role: "Property Owner",
    location: "Lagos, Nigeria",
  },
  {
    id: 2,
    category: "property-owner",
    topic: "Communication & Respect",
    quote:
      "I appreciated the respectful communication and the clear explanations provided throughout my interaction with Polegrid.",
    author: "Verified Partner",
    role: "Property Owner",
    location: "Ogun, Nigeria",
  },
  {
    id: 3,
    category: "property-owner",
    topic: "Understanding the Process",
    quote:
      "Polegrid explained the assessment process clearly and helped me understand the importance of accurate property information.",
    author: "Verified Partner",
    role: "Landowner",
    location: "Oyo, Nigeria",
  },
  {
    id: 4,
    category: "organization",
    topic: "Multiple Locations Portfolio",
    quote:
      "We were looking for a structured way to discuss potential infrastructure locations across our property portfolio. Our engagement with Polegrid helped us begin that conversation.",
    author: "Verified Partner",
    role: "Estate Developer",
    location: "Abuja FCT",
  },
  {
    id: 5,
    category: "organization",
    topic: "Campus & Institutional Locations",
    quote:
      "Our organization needed a professional way to discuss the potential use of some of our locations for infrastructure. Polegrid provided a point of contact for that discussion.",
    author: "Verified Partner",
    role: "Institutional Representative",
    location: "Enugu, Nigeria",
  },
  {
    id: 6,
    category: "property-owner",
    topic: "Assessment Service Scope",
    quote:
      "The assessment process gave us an opportunity to review relevant information about our property and better understand the considerations involved.",
    author: "Verified Partner",
    role: "Property Owner",
    location: "Rivers, Nigeria",
  },
  {
    id: 7,
    category: "organization",
    topic: "Corporate Location Requirements",
    quote:
      "Our interaction with GASL/Polegrid helped us discuss our infrastructure location requirements in a more organized manner.",
    author: "Verified Partner",
    role: "Corporate Representative",
    location: "Commercial Entity",
  },
  {
    id: 8,
    category: "organization",
    topic: "Multi-Site Management",
    quote:
      "Managing information about multiple locations can be challenging. We valued having an opportunity to discuss our property portfolio and potential infrastructure interests.",
    author: "Verified Partner",
    role: "Property Portfolio Representative",
    location: "Kano, Nigeria",
  },
  {
    id: 9,
    category: "property-owner",
    topic: "Professional Guidance",
    quote:
      "Polegrid communicated the applicable requirements and next steps clearly, which helped me understand what to expect from the service.",
    author: "Verified Partner",
    role: "Property Owner",
    location: "Delta, Nigeria",
  },
  {
    id: 10,
    category: "organization",
    topic: "Professional Engagement",
    quote:
      "Our initial engagement was professional and informative. We were able to explain our interests and discuss possible areas of collaboration.",
    author: "Verified Partner",
    role: "Organization Representative",
    location: "Edo, Nigeria",
  },
  {
    id: 11,
    category: "property-owner",
    topic: "Expectations & Transparency",
    quote:
      "I appreciated that Polegrid explained the difference between registering a property and securing an actual infrastructure opportunity. The process helped me understand the expectations.",
    author: "Verified Partner",
    role: "Landowner",
    location: "Kaduna, Nigeria",
  },
  {
    id: 12,
    category: "organization",
    topic: "Overall Enquiry Experience",
    quote:
      "The team communicated professionally and treated our enquiry seriously. We appreciated the opportunity to discuss our property and its potential relevance to infrastructure development.",
    author: "Verified Partner",
    role: "Property or Institutional Representative",
    location: "South-West Region",
  },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = testimonialsData.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner with full photography overlay, No gradients */}
      <section className="relative bg-zinc-950 text-white py-28 overflow-hidden">
        <img
          src="/hero3.jpg"
          alt="Field Engagements"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            Trust & Community
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            What People Say About Polegrid
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Trust should come from genuine experience. As our network grows, we share genuine feedback from actual property owners and organizations.
          </p>
        </div>
      </section>

      {/* Filter Tabs - Borderless, clean pills */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div>
            <h2 className="text-xl font-bold text-zinc-950">
              Verified Engagement Notes
            </h2>
            <p className="text-xs text-zinc-500 font-light mt-0.5">
              Reflecting authentic experiences across Nigeria
            </p>
          </div>

          <div className="flex items-center gap-2 bg-zinc-100 p-1.5 rounded-full">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                filter === "all"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              All ({testimonialsData.length})
            </button>
            <button
              onClick={() => setFilter("property-owner")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                filter === "property-owner"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Landowners (6)
            </button>
            <button
              onClick={() => setFilter("organization")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                filter === "organization"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              Organizations (6)
            </button>
          </div>
        </div>

        {/* Testimonials Grid - Borderless, clean cards with soft background */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-zinc-50 flex flex-col justify-between space-y-6 hover:bg-zinc-100/70 transition-colors"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  {item.topic}
                </span>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/60">
                <h4 className="text-xs font-bold text-zinc-950">
                  {item.role}
                </h4>
                <span className="text-[11px] text-zinc-500 font-light block">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 text-center">
          <Link
            to="/register-property"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
          >
            <Radio className="w-4 h-4 text-emerald-400" />
            REGISTER YOUR PROPERTY — FREE
          </Link>
        </div>
      </section>

    </div>
  );
}
