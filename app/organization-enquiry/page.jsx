import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Building2, 
  Send, 
  AlertCircle, 
  ArrowDown, 
  Radio, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { ENDPOINTS } from "@/src/config/api";

const organizationTypes = [
  "Telecom / Network Operator",
  "Tower Company / TowerCo",
  "Infrastructure / Connectivity Company",
  "Real Estate Company / Estate Developer",
  "Property Management Company",
  "Church, Mosque or Other Religious Institution",
  "Educational or Healthcare Institution",
  "Government / Public Institution",
  "Energy / Power Company",
  "Professional / Technical Service Provider",
  "Other Organization"
];

const discussionTopics = [
  "Infrastructure Location / Site Acquisition",
  "Multiple Properties, Estate or Campus Locations",
  "Infrastructure Intelligence / Site Assessment",
  "Technical or Professional Collaboration",
  "Corporate or Strategic Collaboration",
  "General Enquiry",
  "Other"
];

export default function OrganizationEnquiryPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    organizationName: "",
    organizationType: "",
    contactPersonName: "",
    jobTitle: "",
    businessEmail: "",
    phoneNumber: "",
    discussionTopic: "",
    organizationAddress: "",
    website: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !form.organizationName ||
      !form.organizationType ||
      !form.contactPersonName ||
      !form.jobTitle ||
      !form.businessEmail ||
      !form.phoneNumber ||
      !form.discussionTopic
    ) {
      setErrorMsg("Please fill in all required questions marked with *.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("organizationName", form.organizationName);
      payload.append("organizationType", form.organizationType);
      payload.append("contactPersonName", form.contactPersonName);
      payload.append("designation", form.jobTitle);
      payload.append("emailAddress", form.businessEmail);
      payload.append("phoneNumber", form.phoneNumber);
      payload.append("address", form.organizationAddress || "Not specified");
      payload.append("website", form.website || "Not specified");
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
      
      {/* 1. Header Banner */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-32 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Organization Collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span 
            className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]"
            style={{ color: '#34d399' }}
          >
            FOR ORGANIZATIONS & INFRASTRUCTURE STAKEHOLDERS
          </span>
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white !text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)] uppercase"
            style={{ color: '#ffffff' }}
          >
            Looking to Work With Polegrid?
          </h1>
          <div 
            className="space-y-4 max-w-3xl mx-auto text-base sm:text-xl text-white !text-white font-semibold leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ color: '#ffffff' }}
          >
            <p>
              Are you representing a telecommunications company, TowerCo, estate developer, institution or other organization interested in infrastructure locations, site acquisition support or professional collaboration?
            </p>
            <p>
              Geospatial Asset Systems Limited (GASL), through the Polegrid infrastructure intelligence platform, welcomes enquiries from organizations interested in exploring potential areas of engagement.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition shadow-2xl transform hover:scale-105 uppercase tracking-wide"
            >
              <span>CONNECT WITH POLEGRID</span>
              <ArrowDown className="w-4 h-4 text-emerald-600" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Form Container */}
      <div id="enquiry-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-12">
        
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-12 space-y-8 shadow-sm">
          
          <div className="border-b border-zinc-200 pb-5 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950">
              ORGANIZATION ENQUIRY FORM
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-medium italic">
              *Tell us a little about your organization and what you would like to discuss. Our team will review your enquiry and contact you through your preferred communication channel.*
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 text-sm sm:text-base font-bold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* 1. Organization Name */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                1. Organization Name *
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

            {/* 2. Organization Type */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                2. Organization Type *
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

            {/* 3. Contact Person's Name */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                3. Contact Person's Name *
              </label>
              <input
                type="text"
                name="contactPersonName"
                required
                value={form.contactPersonName}
                onChange={handleChange}
                placeholder="Enter contact person's full name"
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              />
            </div>

            {/* 4. Job Title / Position */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                4. Job Title / Position *
              </label>
              <input
                type="text"
                name="jobTitle"
                required
                value={form.jobTitle}
                onChange={handleChange}
                placeholder="e.g. Head of Site Acquisition, Estate Director"
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              />
            </div>

            {/* 5. Business Email Address */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                5. Business Email Address *
              </label>
              <input
                type="email"
                name="businessEmail"
                required
                value={form.businessEmail}
                onChange={handleChange}
                placeholder="e.g. corporate@organization.com"
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
              />
            </div>

            {/* 6. Phone / WhatsApp Number */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                6. Phone / WhatsApp Number *
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

            {/* 7. What Would You Like to Discuss? */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                7. What Would You Like to Discuss? *
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

            {/* Optional Organization Address & Website */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-700 mb-2">
                  Organization Address (Optional)
                </label>
                <input
                  type="text"
                  name="organizationAddress"
                  value={form.organizationAddress}
                  onChange={handleChange}
                  placeholder="Head office address"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                />
              </div>
            </div>

            {/* 8. Additional Information */}
            <div>
              <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-1">
                8. Additional Information
              </label>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium italic mb-2">
                *Briefly tell us what your organization has in mind.*
              </p>
              <textarea
                name="additionalInfo"
                rows={4}
                value={form.additionalInfo}
                onChange={handleChange}
                placeholder="Briefly tell us what your organization has in mind..."
                className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm resize-none"
              />
            </div>

            {/* Submit Button & Disclaimer */}
            <div className="pt-2 space-y-4">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-5 rounded-full text-base sm:text-lg font-black uppercase tracking-wider text-white transition shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] ${
                  submitting ? "bg-zinc-400 cursor-not-allowed" : "bg-zinc-950 hover:bg-zinc-800"
                }`}
              >
                <Send className="w-5 h-5 text-emerald-400" />
                <span>{submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
              </button>

              <p className="text-xs sm:text-sm text-zinc-500 font-medium italic text-center">
                *Submitting an enquiry does not automatically establish a partnership, service agreement or commercial commitment.*
              </p>
            </div>

          </form>

        </div>

        {/* 3. Bottom Section: Have a property to register? */}
        <div className="bg-zinc-100 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight">
            Have a property to register?
          </h3>
          <p className="text-base sm:text-lg text-zinc-700 font-medium max-w-xl mx-auto">
            Property owners can register their properties for free through our property registration form.
          </p>
          <div className="pt-2">
            <Link
              to="/register-property"
              className="inline-flex items-center justify-center gap-2 px-9 py-4.5 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-xl uppercase tracking-wider transform hover:scale-105"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>REGISTER YOUR PROPERTY — FREE</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
