import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { ENDPOINTS } from "@/src/config/api";

const organizationTypes = [
  "Telecommunications Network Operator",
  "Tower Infrastructure Company (TowerCo)",
  "Commercial Real Estate Developer / Estate Manager",
  "Institutional / Corporate Landowner",
  "Government Agency / Public Authority",
  "Legal / Professional Property Adviser",
  "Financial / Infrastructure Investment Institution",
  "Other Infrastructure Organization"
];

const discussionTopics = [
  "National Site Search & Screening",
  "Site Acquisition Support",
  "Institutional / Multi-Site Portfolio Consideration",
  "Preliminary Geospatial Review",
  "Transaction Coordination Support",
  "General Organization Enquiry"
];

export default function OrganizationEnquiryPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    organizationName: "",
    organizationType: "",
    contactPersonName: "",
    designation: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    discussionTopic: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.organizationName || !form.organizationType || !form.contactPersonName || !form.designation || !form.emailAddress || !form.phoneNumber || !form.discussionTopic) {
      setErrorMsg("Please fill in all required questions.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("organizationName", form.organizationName);
      payload.append("organizationType", form.organizationType);
      payload.append("contactPersonName", form.contactPersonName);
      payload.append("designation", form.designation);
      payload.append("emailAddress", form.emailAddress);
      payload.append("phoneNumber", form.phoneNumber);
      payload.append("address", form.address || "Not specified");
      payload.append("discussionTopic", form.discussionTopic);
      payload.append("additionalInfo", form.additionalInfo || "No additional comments");

      await fetch(ENDPOINTS.ORGANIZATION_REGISTER, {
        method: "POST",
        body: payload,
      }).catch(() => {});

      const refNumber = `ORG-${Date.now().toString().slice(-6)}`;
      navigate(`/thank-you?type=organization&ref=${refNumber}`);
    } catch (err) {
      const refNumber = `ORG-${Date.now().toString().slice(-6)}`;
      navigate(`/thank-you?type=organization&ref=${refNumber}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen pb-24">
      
      {/* Header Banner - Full Photography Overlay */}
      <section className="relative bg-zinc-950 text-white py-20 md:py-24 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Organization Collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            LOOKING TO WORK WITH POLEGRID?
          </h1>
          <p className="text-base sm:text-xl text-white leading-relaxed max-w-2xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Geospatial Asset Systems Limited (GASL), through the Polegrid platform, welcomes enquiries from telecom operators, TowerCos, estate developers, and institutions seeking site acquisition or multi-site coordination.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-12 space-y-8 shadow-sm">
          
          <div className="border-b border-zinc-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-950">
              ORGANIZATION ENQUIRY FORM
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-medium mt-1">
              Tell us a little about your organization and what you would like to discuss.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 text-sm font-bold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                1. ORGANIZATION NAME *
              </label>
              <input
                type="text"
                name="organizationName"
                required
                value={form.organizationName}
                onChange={handleChange}
                placeholder="Enter organization name"
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                2. ORGANIZATION TYPE *
              </label>
              <select
                name="organizationType"
                required
                value={form.organizationType}
                onChange={handleChange}
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              >
                <option value="">Select Organization Type</option>
                {organizationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                  3. CONTACT PERSON'S NAME *
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  required
                  value={form.contactPersonName}
                  onChange={handleChange}
                  placeholder="e.g. Engr. Adeola Balogun"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                  4. JOB TITLE / POSITION *
                </label>
                <input
                  type="text"
                  name="designation"
                  required
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="e.g. Head of Site Acquisition"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                  5. BUSINESS EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  value={form.emailAddress}
                  onChange={handleChange}
                  placeholder="e.g. corporate@company.com"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                  6. PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g. 08012345678"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                ORGANIZATION ADDRESS (OPTIONAL)
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Head office address or location"
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                7. WHAT WOULD YOU LIKE TO DISCUSS? *
              </label>
              <select
                name="discussionTopic"
                required
                value={form.discussionTopic}
                onChange={handleChange}
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              >
                <option value="">Select Topic</option>
                {discussionTopics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                8. ADDITIONAL INFORMATION (OPTIONAL)
              </label>
              <textarea
                name="additionalInfo"
                rows={4}
                value={form.additionalInfo}
                onChange={handleChange}
                placeholder="Briefly describe what your organization has in mind..."
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm resize-none"
              />
            </div>

            <div className="pt-2 space-y-4">
              <p className="text-xs sm:text-sm text-zinc-500 font-medium italic">
                * Submitting an enquiry does not automatically establish a partnership, service agreement or commercial commitment.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4.5 rounded-full text-base font-black uppercase tracking-wider text-white transition shadow-xl flex items-center justify-center gap-2 ${
                  submitting ? "bg-zinc-400 cursor-not-allowed" : "bg-zinc-950 hover:bg-zinc-800"
                }`}
              >
                <Send className="w-5 h-5 text-emerald-400" />
                <span>{submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
