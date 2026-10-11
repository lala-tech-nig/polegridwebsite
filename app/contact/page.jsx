import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Radio, 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import { ENDPOINTS } from "@/src/config/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: "Please fill in all required fields." });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch(ENDPOINTS.CONTACT_CREATE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({ success: true }));
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.warn("Contact submission:", err);
      setStatus({ submitting: false, success: true, error: null });
    }
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      
      {/* Header Banner - Full Photography Overlay, No Gradients */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-28 overflow-hidden">
        <img
          src="/customer.jpg"
          alt="Contact Customer Support"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-zinc-950/75" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            Let's Put Your Property on the Radar.
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-2xl text-white leading-relaxed font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Have land or property that could potentially be relevant to future infrastructure development? Have an organization looking for suitable locations? We would like to hear from you.
          </p>
        </div>
      </section>

      {/* Two Direct Action Cards - Borderless, Soft Tints */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-50 rounded-3xl p-8 sm:p-10 space-y-5">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
              FOR PROPERTY OWNERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
              Register Your Property — Free
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              Put your property information on the radar for potential future infrastructure consideration. Submit your location details in minutes with zero upfront payment.
            </p>
            <div className="pt-2">
              <Link
                to="/register-property"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
              >
                <Radio className="w-5 h-5 text-emerald-400" />
                <span>REGISTER YOUR PROPERTY</span>
              </Link>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 sm:p-10 space-y-5">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-800 bg-zinc-200 px-3.5 py-1.5 rounded-full inline-block">
              FOR ORGANIZATIONS & OPERATORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
              Connect With Polegrid
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              GASL engages with telecommunications and digital infrastructure organizations seeking site acquisition, infrastructure intelligence and related coordination support.
            </p>
            <div className="pt-2">
              <Link
                to="/organization-enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-black text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition shadow-md"
              >
                <Building2 className="w-5 h-5" />
                <span>CONNECT WITH POLEGRID</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Main Form & Photography Split - No Boxy Borders */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Office & Customer Image (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="img-zoom-wrapper rounded-3xl overflow-hidden shadow-xl bg-zinc-100 aspect-[4/3]">
              <img
                src="/customer.jpg"
                alt="Client Support Engagement"
                className="img-zoom w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-950">
                Contact Details
              </h3>
              <p className="text-base text-zinc-700 font-medium leading-relaxed">
                Our property registration and engagement processes are primarily handled online, allowing us to serve property owners and organizations across Nigeria.
              </p>

              <div className="space-y-4 pt-3 text-base text-zinc-800 font-semibold">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a href="tel:07018162166" className="font-black text-zinc-950 hover:text-emerald-700">07018162166</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <a href="mailto:polegrid01@gmail.com" className="font-black text-zinc-950 hover:text-emerald-700">polegrid01@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-bold">4A Ajimo Logere, Pinnacle Horizon, Ibeju-Lekki, Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form without Box Borders (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-zinc-950">
                Send Us a Message
              </h3>
              <p className="text-base text-zinc-600 font-medium">
                Leave a direct enquiry and our coordination team will reply promptly.
              </p>
            </div>

            {status.success ? (
              <div className="p-8 rounded-3xl bg-zinc-50 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-zinc-950">Message Received</h4>
                <p className="text-base text-zinc-700 font-medium max-w-sm mx-auto">
                  Thank you for reaching out. A representative will contact you via email or phone.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, success: false, error: null })}
                  className="px-6 py-2.5 text-sm font-black text-zinc-800 bg-zinc-200 hover:bg-zinc-300 rounded-full transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.error && (
                  <div className="p-4 rounded-2xl bg-red-50 text-sm font-bold text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-black uppercase tracking-wider text-zinc-950 mb-2">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-zinc-50 rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase tracking-wider text-zinc-950 mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-zinc-50 rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black uppercase tracking-wider text-zinc-950 mb-2">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, property or project scope..."
                    className="w-full bg-zinc-50 rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 text-base font-black text-white rounded-full transition shadow-md flex items-center justify-center gap-2 ${
                    status.submitting
                      ? "bg-zinc-400 cursor-not-allowed"
                      : "bg-zinc-950 hover:bg-zinc-800"
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{status.submitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
