import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Plus, 
  Minus, 
  HelpCircle, 
  Radio, 
  PhoneCall, 
  ArrowRight
} from "lucide-react";

const allFaqs = [
  {
    id: 1,
    category: "General",
    question: "What is Polegrid?",
    answer:
      "Polegrid is an Infrastructure Intelligence Platform managed by Geospatial Asset Systems Limited (GASL). It focuses on property and location intelligence relevant to telecommunications and digital infrastructure opportunities across Nigeria.",
  },
  {
    id: 2,
    category: "Registration",
    question: "Is property registration free?",
    answer:
      "Yes. Property registration is completely free. No payment is required to submit your property information to the Polegrid National Site Intelligence Network.",
  },
  {
    id: 3,
    category: "Registration",
    question: "What happens after I register?",
    answer:
      "Your submitted property information is reviewed for preliminary geospatial consideration. Where appropriate, you may be contacted for additional clarification or invited to proceed to further assessment based on infrastructure demand.",
  },
  {
    id: 4,
    category: "Registration",
    question: "Will every registered property become an infrastructure site?",
    answer:
      "Not necessarily. Registration places your property information within the Polegrid environment for consideration. Whether a property progresses depends on applicable requirements and actual infrastructure needs.",
  },
  {
    id: 5,
    category: "Earning & Commercial",
    question: "Will I earn money if I register?",
    answer:
      "Registration itself does not create an immediate income entitlement. Where a property becomes relevant to an infrastructure opportunity and a suitable commercial arrangement is reached, the property owner may receive income through the applicable lease or property arrangement.",
  },
  {
    id: 6,
    category: "Earning & Commercial",
    question: "How much can I earn?",
    answer:
      "There is no fixed amount for every property. Commercial terms depend on factors such as the location, property characteristics, infrastructure requirements and the agreement ultimately reached by the relevant parties.",
  },
  {
    id: 7,
    category: "Assessment & Fees",
    question: "What is the Advanced Technical Site Assessment?",
    answer:
      "The Advanced Technical Site Assessment is a more detailed assessment that may be offered to a property owner whose property has progressed to further consideration. The standard fee is ₦15,500. The fee applies to the professional assessment service and associated report/process.",
  },
  {
    id: 8,
    category: "Assessment & Fees",
    question: "When do I pay the assessment fee?",
    answer:
      "Only when your property has been shortlisted and invited to proceed to the Advanced Technical Site Assessment. Property registration itself is 100% free.",
  },
  {
    id: 9,
    category: "Assessment & Fees",
    question: "Does paying for the Advanced Technical Site Assessment guarantee a tower?",
    answer:
      "No. The assessment is a professional technical evaluation designed to provide more detailed information for further consideration. Any eventual infrastructure opportunity depends on applicable technical requirements, stakeholder decisions and the relevant commercial arrangement.",
  },
  {
    id: 10,
    category: "Operations",
    question: "Does Polegrid sell land to telecom companies?",
    answer:
      "No. Polegrid is not a conventional land seller or real estate marketplace. The property remains under the full control of the property owner. Where a suitable infrastructure opportunity arises, Polegrid/GASL may support the relevant site acquisition and transaction coordination process between the parties.",
  },
  {
    id: 11,
    category: "Property Types",
    question: "Will a telecom company use my entire property?",
    answer:
      "Not necessarily. The space required depends on the specific infrastructure, site conditions, access requirements and the final arrangement governing the use of the property. For example, a tower or small cell may occupy only a fraction of a plot or compound.",
  },
  {
    id: 12,
    category: "Property Types",
    question: "Can I register vacant land?",
    answer:
      "Yes. You may register vacant or unused land where you have the appropriate ownership, control or authority to submit the property.",
  },
  {
    id: 13,
    category: "Property Types",
    question: "Can I register a family property?",
    answer:
      "Yes, provided you have the appropriate authority from the family or lawful titleholders to submit the property.",
  },
  {
    id: 14,
    category: "Organizations",
    question: "Can organizations with multiple properties or locations work with Polegrid?",
    answer:
      "Yes. Companies, estate developers, institutions and other organizations that own, manage or control multiple properties, campuses or potential infrastructure locations can engage with Polegrid for infrastructure intelligence, site assessment and related site acquisition support. Commercial terms depend on scope.",
  },
  {
    id: 15,
    category: "Registration",
    question: "Can I register multiple properties?",
    answer:
      "Yes. Individual property owners may register multiple properties by submitting each property separately through our free form. Organizations with large land portfolios or campuses may contact Polegrid directly for multi-site engagement.",
  },
  {
    id: 16,
    category: "General",
    question: "Do I need to visit a Polegrid office?",
    answer:
      "No. Initial property registration and communications are handled digitally online through our platform and official WhatsApp review channels.",
  },
  {
    id: 17,
    category: "Organizations",
    question: "Can organizations work with Polegrid?",
    answer:
      "Yes. Geospatial Asset Systems Limited (GASL) engages with appropriate telecommunications and digital infrastructure organizations on infrastructure intelligence, site acquisition and related coordination opportunities.",
  },
  {
    id: 18,
    category: "General",
    question: "Is Polegrid a telecom operator or TowerCo?",
    answer:
      "No. Polegrid is an Infrastructure Intelligence Platform managed by Geospatial Asset Systems Limited (GASL).",
  },
  {
    id: 19,
    category: "Registration",
    question: "Does registration guarantee a lease or deployment?",
    answer:
      "Registration provides an opportunity for consideration. Any eventual lease, commercial arrangement or infrastructure deployment depends on the relevant requirements and decisions of the parties involved.",
  },
  {
    id: 20,
    category: "Registration",
    question: "How do I register my property?",
    answer:
      "Simply click 'REGISTER YOUR PROPERTY — FREE' on the website and submit the requested 28-question property and location information.",
  },
];

const categories = ["All", "General", "Registration", "Assessment & Fees", "Earning & Commercial", "Property Types", "Organizations"];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner - Photographic overlay, No Gradients */}
      <section className="relative bg-zinc-950 text-white py-28 overflow-hidden">
        <img
          src="/hero4.jpg"
          alt="FAQ Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            Information & Clarification
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Clear answers regarding property registration, technical assessments, earning potential, and organizational collaboration.
          </p>

          {/* Borderless Search Box */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="absolute left-5 top-4 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search topics, e.g. 'fees', 'vacant land'..."
                className="w-full bg-zinc-900 text-white placeholder-zinc-500 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 shadow-xl font-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ List - Borderless Editorial Style (Clean horizontal rules only) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "bg-zinc-950 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions without boxy borders */}
        <div className="divide-y divide-zinc-200">
          {filteredFaqs.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <p className="text-zinc-800 font-semibold">No questions found matching "{search}"</p>
              <button onClick={() => setSearch("")} className="text-xs text-zinc-500 underline">
                Clear search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-6 transition-colors">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left flex items-start justify-between gap-6 focus:outline-none group"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-emerald-700 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-zinc-100 text-zinc-600 shrink-0 mt-1">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 text-sm text-zinc-600 leading-relaxed font-light animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Link */}
        <div className="pt-12 text-center space-y-3">
          <p className="text-xs text-zinc-500 font-light">
            Have a question not addressed here?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:underline"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

    </div>
  );
}
