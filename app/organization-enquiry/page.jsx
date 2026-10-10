import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Building2, 
  Send, 
  Radio, 
  AlertCircle 
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
  "Other Organization",
];

const discussionTopics = [
  "Infrastructure Location / Site Acquisition",
  "Multiple Properties, Estate or Campus Locations",
  "Infrastructure Intelligence / Site Assessment",
  "Technical or Professional Collaboration",
  "Corporate or Strategic Collaboration",
  "General Enquiry",
  "Other",
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !form.organizationName ||
      !form.organizationType ||
      !form.contactPersonName ||
      !form.designation ||
      !form.emailAddress ||
      !form.phoneNumber ||
      !form.discussionTopic
    ) {
      setErrorMsg("Please fill in all required fields indicated with an asterisk (*).");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("organizationName", form.organizationName);
      payload.append("emailAddress", form.emailAddress);
      payload.append("phoneNumber", form.phoneNumber);
      payload.append("address", form.address || "Corporate Office / Not Specified");
      payload.append("organizationType", form.organizationType);
      payload.append("contactPersonName", form.contactPersonName);
      payload.append("designation", form.designation);
      payload.append("contactPersonEmail", form.emailAddress);
      payload.append("contactPersonPhone", form.phoneNumber);
      payload.append("registrationProcess", form.discussionTopic);
      payload.append("otherPurpose", form.additionalInfo || "None");

      await fetch(ENDPOINTS.ORGANIZATION_REGISTER, {
        method: "POST",
        body: payload,
      }).catch(() => {});

      navigate("/thank-you?type=org");
    } catch (err) {
      navigate("/thank-you?type=org");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen pb-24">
      
      {/* Header Banner - Full Photography Overlay, No Gradients */}
      <section className="relative bg-zinc-950 text-white py-24 overflow-hidden">
        <img
          src="/about.jpg"
          alt="Organization Collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            Enterprise Engagement
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Looking to Work With Polegrid?
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl mx-auto font-light">
            Geospatial Asset Systems Limited (GASL), through the Polegrid platform, welcomes enquiries from telecom operators, TowerCos, estate developers, and institutions seeking site acquisition or multi-site coordination.
          </p>
        </div>
      </section>

      {/* Main Form Container - Borderless, Soft Tint */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-zinc-950">
              Organization Enquiry Form
            </h2>
            <p className="text-xs text-zinc-500 font-light mt-1">
              Tell us a little about your organization and what you would like to discuss.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                1. Organization Name *
              </label>
              <input
                type="text"
                name="organizationName"
                required
                value={form.organizationName}
                onChange={handleChange}
                placeholder="Enter organization name"
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                2. Organization Type *
              </label>
              <select
                name="organizationType"
                required
                value={form.organizationType}
                onChange={handleChange}
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
              >
                <option value="">Select Organization Type</option>
                {organizationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  3. Contact Person's Name *
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  required
                  value={form.contactPersonName}
                  onChange={handleChange}
                  placeholder="e.g. Engr. Adeola Balogun"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  4. Job Title / Position *
                </label>
                <input
                  type="text"
                  name="designation"
                  required
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="e.g. Head of Site Acquisition"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  5. Business Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  value={form.emailAddress}
                  onChange={handleChange}
                  placeholder="e.g. corporate@company.com"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  6. Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g. 08012345678"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Organization Address (Optional)
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Head office address or location"
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                7. What Would You Like to Discuss? *
              </label>
              <select
                name="discussionTopic"
                required
                value={form.discussionTopic}
                onChange={handleChange}
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
              >
                <option value="">Select Topic</option>
                {discussionTopics.map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                8. Additional Information (Optional)
              </label>
              <textarea
                name="additionalInfo"
                rows={4}
                value={form.additionalInfo}
                onChange={handleChange}
                placeholder="Briefly describe what your organization has in mind..."
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light resize-none"
              />
            </div>

            <div className="pt-2 space-y-4">
              <p className="text-xs text-zinc-500 font-light italic">
                * Submitting an enquiry does not automatically establish a partnership, service agreement or commercial commitment.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 rounded-full text-sm font-bold text-white transition shadow-md flex items-center justify-center gap-2 ${
                  submitting ? "bg-zinc-400 cursor-not-allowed" : "bg-zinc-950 hover:bg-zinc-800"
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Submitting..." : "SUBMIT ENQUIRY"}</span>
              </button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
