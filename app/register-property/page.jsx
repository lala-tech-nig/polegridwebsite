import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  Radio, 
  AlertCircle, 
  ArrowRight, 
  ChevronRight, 
  PhoneCall,
  Info
} from "lucide-react";
import { ENDPOINTS } from "@/src/config/api";

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

const landmarkTypes = [
  "Fuel Station / Gas Plant",
  "Market / Commercial Centre",
  "Place of Worship (Church/Mosque)",
  "School / University",
  "Hospital / Medical Facility",
  "Major Road Junction / Expressway",
  "Police Station / Government Office",
  "Hotel / Event Centre",
  "Other Prominent Landmark"
];

const installationLocations = [
  "Open Ground / Vacant Plot",
  "Compound Area / Open Yard",
  "Rooftop of Existing Building",
  "Farm / Agricultural Land Edge",
  "Perimeter Boundary / Fence Line",
  "Industrial / Commercial Yard"
];

const structureHeights = [
  "No Structure (Bare Land)",
  "Bungalow (Single Storey)",
  "2 Floors (1 Storey Building)",
  "3–4 Floors (Multi-Storey)",
  "5 Floors and Above (High-Rise)",
  "Warehouse / Industrial Shed"
];

export default function RegisterPropertyPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    authorizationToLease: "",
    propertyAddress: "",
    nearestBusStop: "",
    localGovernment: "",
    state: "",
    locationPin: "",
    landmarkType: "",
    landmarkName: "",
    propertyType: "",
    preferredInstallationLocation: "",
    landDimensions: "",
    isOccupied: "",
    primaryStructureHeight: "",
    existingMastNearby: "",
    roadAccessType: "",
    distanceToMainRoad: "",
    areaClassification: "",
    heavyEquipmentAccess: "",
    electricityAvailable: "",
    allYearAccessible: "",
    floodingOrEnvironmentalIssues: "",
    willingToLeaseLongTerm: "",
    hasDisputes: "",
    disputeDetails: "",
    willingToBeContacted: "",
    referralCode: "",
    declarationConfirmed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep = (currentStep) => {
    setErrorMsg("");
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phoneNumber || !formData.authorizationToLease) {
        setErrorMsg("Please fill in all required questions in this step.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.propertyAddress || !formData.nearestBusStop || !formData.localGovernment || !formData.state || !formData.landmarkType || !formData.landmarkName) {
        setErrorMsg("Please provide complete property location details.");
        return false;
      }
    }
    if (currentStep === 3) {
      if (!formData.propertyType || !formData.preferredInstallationLocation || !formData.landDimensions || !formData.isOccupied || !formData.primaryStructureHeight) {
        setErrorMsg("Please provide all required property characteristics.");
        return false;
      }
    }
    if (currentStep === 4) {
      if (!formData.existingMastNearby || !formData.roadAccessType || !formData.distanceToMainRoad || !formData.areaClassification || !formData.heavyEquipmentAccess || !formData.electricityAvailable || !formData.allYearAccessible) {
        setErrorMsg("Please answer all required accessibility & infrastructure questions (Questions 16–25).");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.willingToLeaseLongTerm || !formData.hasDisputes || !formData.willingToBeContacted) {
      setErrorMsg("Please answer all required questions on terms and agreements.");
      return;
    }

    if (!formData.declarationConfirmed) {
      setErrorMsg("You must confirm the Submission Declaration before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.emailAddress || "not-provided@polegrid.com");
      payload.append("phoneNumber", formData.phoneNumber);
      payload.append("propertyOwnerName", formData.fullName);
      payload.append("propertyAddress", formData.propertyAddress);
      payload.append("nearestBusStop", formData.nearestBusStop);
      payload.append("localGovernment", formData.localGovernment);
      payload.append("state", formData.state);
      payload.append("propertyType", formData.propertyType);
      payload.append("serviceType", "Telecom Infrastructure Opportunity");
      payload.append("fullRegistrationData", JSON.stringify(formData));

      await fetch(ENDPOINTS.LANDLORD_REGISTER, {
        method: "POST",
        body: payload,
      }).catch(() => {});

      const refNumber = `PG-${Date.now().toString().slice(-6)}`;
      navigate(`/thank-you?type=property&ref=${refNumber}`);
    } catch (err) {
      const refNumber = `PG-${Date.now().toString().slice(-6)}`;
      navigate(`/thank-you?type=property&ref=${refNumber}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen pb-24">
      
      {/* Header Banner */}
      <section className="relative bg-zinc-950 text-white py-20 md:py-24 overflow-hidden">
        <img
          src="/hero1.JPG"
          alt="Site Registration"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-400 block [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            NATIONAL SITE INTELLIGENCE NETWORK
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white [text-shadow:_0_3px_20px_rgba(0,0,0,1)]">
            REGISTER YOUR PROPERTY
          </h1>
          <p className="text-base sm:text-xl text-white leading-relaxed max-w-2xl mx-auto font-semibold [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
            Property registration is currently <strong className="text-emerald-300 font-black underline decoration-emerald-400">100% free</strong> and puts your location on Nigeria's digital infrastructure radar. Registration provides an opportunity for review and does not guarantee immediate deployment.
          </p>
        </div>
      </section>

      {/* Main Wizard Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        {/* Support Bar */}
        <div className="bg-zinc-100 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-zinc-900 font-bold shadow-sm text-center">
          <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Need help completing the form?</span>
          <a
            href="https://wa.me/2347018162166"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-black hover:text-emerald-900 underline flex items-center gap-1 ml-1"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Wizard Form Card */}
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-12 space-y-8 shadow-sm">
          
          {/* Progress Indicator */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-700">
              <span>STEP {step} OF 5</span>
              <span>{step * 20}% COMPLETED</span>
            </div>
            <div className="w-full bg-zinc-200 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${step * 20}%` }}
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 text-sm font-bold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
                    APPLICANT INFORMATION & AUTHORITY
                  </h3>
                  <p className="text-sm text-zinc-600 font-medium mt-1">Questions 1–3 and Question 20 (* Required fields)</p>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    1. FULL NAME OF PROPERTY OWNER / CONTACT PERSON *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your legal full name"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    2. PHONE NUMBER (PRIMARY WHATSAPP ENABLED) *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 08012345678"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    3. EMAIL ADDRESS (OPTIONAL)
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="e.g. yourname@example.com"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    20. ARE YOU AUTHORIZED TO LEASE THIS PROPERTY? *
                  </label>
                  <div className="space-y-3">
                    {[
                      "Yes — I am the owner",
                      "Yes — I represent the owner/family",
                      "No",
                    ].map((opt) => (
                      <label key={opt} className={`flex items-center gap-3.5 p-4 rounded-2xl cursor-pointer text-base font-bold transition shadow-sm ${
                        formData.authorizationToLease === opt
                          ? "bg-zinc-950 text-white"
                          : "bg-white text-zinc-800 hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="authorizationToLease"
                          value={opt}
                          checked={formData.authorizationToLease === opt}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-500"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
                    PROPERTY LOCATION & GEOSPATIAL DETAILS
                  </h3>
                  <p className="text-sm text-zinc-600 font-medium mt-1">Questions 4–10 (* Required fields)</p>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    4. FULL PROPERTY ADDRESS / LOCATION *
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    required
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="Enter street name, house/plot number, and community"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    5. NEAREST BUS STOP / LANDMARK *
                  </label>
                  <input
                    type="text"
                    name="nearestBusStop"
                    required
                    value={formData.nearestBusStop}
                    onChange={handleChange}
                    placeholder="e.g. Alausa Bus Stop, Total Filling Station"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      6. LOCAL GOVERNMENT AREA (LGA) *
                    </label>
                    <input
                      type="text"
                      name="localGovernment"
                      required
                      value={formData.localGovernment}
                      onChange={handleChange}
                      placeholder="e.g. Ibeju-Lekki"
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      7. STATE *
                    </label>
                    <select
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white space-y-2 shadow-sm">
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950">
                    8. PROPERTY LOCATION PIN (GOOGLE MAPS LINK) (OPTIONAL)
                  </label>
                  <input
                    type="url"
                    name="locationPin"
                    value={formData.locationPin}
                    onChange={handleChange}
                    placeholder="Paste Google Maps link here"
                    className="w-full bg-zinc-50 rounded-xl p-3.5 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  />
                  <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                    How to copy link: Open Google Maps → Press and hold location pin on your land → Tap Share → Copy link → Paste here.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      9. NEAREST KNOWN LANDMARK TYPE *
                    </label>
                    <select
                      name="landmarkType"
                      required
                      value={formData.landmarkType}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    >
                      <option value="">Select Landmark Type</option>
                      {landmarkTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      10. LANDMARK NAME *
                    </label>
                    <input
                      type="text"
                      name="landmarkName"
                      required
                      value={formData.landmarkName}
                      onChange={handleChange}
                      placeholder="e.g. Oando Station, St. Peters Catholic Church"
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
                    PROPERTY CHARACTERISTICS & SPACE
                  </h3>
                  <p className="text-sm text-zinc-600 font-medium mt-1">Questions 11–15 (* Required fields)</p>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    11. TYPE OF PROPERTY *
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  >
                    <option value="">Select Property Type</option>
                    <option value="Vacant Land">Vacant Land</option>
                    <option value="Unused Land / Portion">Unused Land / Portion</option>
                    <option value="Residential Property">Residential Property</option>
                    <option value="Commercial Property">Commercial Property</option>
                    <option value="Spacious Compound">Spacious Compound</option>
                    <option value="Family Property">Family Property</option>
                    <option value="Agricultural Property">Agricultural Property</option>
                    <option value="Company / Organizational Property">Company / Organizational Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    12. PREFERRED INSTALLATION LOCATION OR SPACE *
                  </label>
                  <div className="space-y-2.5">
                    {installationLocations.map((loc) => (
                      <label key={loc} className={`flex items-center gap-3.5 p-4 rounded-2xl cursor-pointer text-base font-bold transition shadow-sm ${
                        formData.preferredInstallationLocation === loc
                          ? "bg-zinc-950 text-white"
                          : "bg-white text-zinc-800 hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="preferredInstallationLocation"
                          value={loc}
                          checked={formData.preferredInstallationLocation === loc}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-500"
                        />
                        <span>{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    13. LAND DIMENSIONS / SIZE *
                  </label>
                  <input
                    type="text"
                    name="landDimensions"
                    required
                    value={formData.landDimensions}
                    onChange={handleChange}
                    placeholder="e.g. 60ft x 120ft (1 Plot), or Rooftop 15m x 15m"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    14. IS THE PROPERTY CURRENTLY OCCUPIED OR DEVELOPED? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Partially"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.isOccupied === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="isOccupied"
                          value={opt}
                          checked={formData.isOccupied === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    15. PRIMARY STRUCTURE HEIGHT *
                  </label>
                  <select
                    name="primaryStructureHeight"
                    required
                    value={formData.primaryStructureHeight}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  >
                    <option value="">Select Height</option>
                    {structureHeights.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
                    INFRASTRUCTURE, ROAD ACCESS & READINESS
                  </h3>
                  <p className="text-sm text-zinc-600 font-medium mt-1">Questions 16–19 and Questions 23–26 (* Required fields)</p>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    16. EXISTING TELECOM MAST WITHIN AREA? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.existingMastNearby === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="existingMastNearby"
                          value={opt}
                          checked={formData.existingMastNearby === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    17. ROAD ACCESS TYPE *
                  </label>
                  <select
                    name="roadAccessType"
                    required
                    value={formData.roadAccessType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  >
                    <option value="">Select Road Type</option>
                    <option value="Tarred / Paved Road">Tarred / Paved Road</option>
                    <option value="Graded Earth / Dirt Road">Graded Earth / Dirt Road</option>
                    <option value="Gravel / Stone Base">Gravel / Stone Base</option>
                    <option value="Interlocked Pavement">Interlocked Pavement</option>
                    <option value="Footpath Only">Footpath Only</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      18. DISTANCE TO MAIN ROAD *
                    </label>
                    <select
                      name="distanceToMainRoad"
                      required
                      value={formData.distanceToMainRoad}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    >
                      <option value="">Select Distance</option>
                      <option value="Direct frontage">Direct frontage</option>
                      <option value="Under 500m">Under 500m</option>
                      <option value="About 1km">About 1km</option>
                      <option value="Interior">Interior</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                      19. AREA CLASSIFICATION *
                    </label>
                    <select
                      name="areaClassification"
                      required
                      value={formData.areaClassification}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                    >
                      <option value="">Select Classification</option>
                      <option value="Urban / Commercial">Urban / Commercial</option>
                      <option value="Semi-Urban / Suburban">Semi-Urban / Suburban</option>
                      <option value="Rural / Highway Corridor">Rural / Highway Corridor</option>
                    </select>
                  </div>
                </div>

                {/* Question 23 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    23. CAN HEAVY EQUIPMENT / TRUCK ACCESS YOUR PROPERTY? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.heavyEquipmentAccess === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="heavyEquipmentAccess"
                          value={opt}
                          checked={formData.heavyEquipmentAccess === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 24 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    24. IS ELECTRICITY OR POWER INFRASTRUCTURE AVAILABLE WITHIN THE PROPERTY AREA? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Not Sure"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.electricityAvailable === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="electricityAvailable"
                          value={opt}
                          checked={formData.electricityAvailable === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 25 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    25. IS THE PROPERTY GENERALLY ACCESSIBLE THROUGHOUT THE YEAR, INCLUDING DURING RAINY SEASONS? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Not Sure"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.allYearAccessible === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="allYearAccessible"
                          value={opt}
                          checked={formData.allYearAccessible === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 26 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-1">
                    26. ARE THERE ANY KNOWN FLOODING, ACCESS, OR ENVIRONMENTAL ISSUES AFFECTING THE PROPERTY AREA? (OPTIONAL)
                  </label>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-2.5">
                    Instruction: (Examples: seasonal flooding, severe erosion, restricted access roads, security concerns, or road conditions that may affect access during rainy periods. If none, you may leave this blank.)
                  </p>
                  <textarea
                    name="floodingOrEnvironmentalIssues"
                    rows={3}
                    value={formData.floodingOrEnvironmentalIssues}
                    onChange={handleChange}
                    placeholder="Provide details if applicable, or leave blank if none."
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-950">
                    TERMS, DISPUTES & SUBMISSION DECLARATION
                  </h3>
                  <p className="text-sm text-zinc-600 font-medium mt-1">Questions 21, 22, 27, 28, Property Photo Guidance & Declaration</p>
                </div>

                {/* Question 21 - Fully Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    21. ARE YOU WILLING TO LEASE FOR TELECOM INFRASTRUCTURE (10–30 YEARS)? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.willingToLeaseLongTerm === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="willingToLeaseLongTerm"
                          value={opt}
                          checked={formData.willingToLeaseLongTerm === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 22 - Fully Capitalized with Dispute Details */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    22. ARE THERE ANY KNOWN OWNERSHIP, FAMILY, COMMUNITY, OR LEGAL DISPUTES RELATING TO THE PROPERTY? *
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {["No", "Yes"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.hasDisputes === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="hasDisputes"
                          value={opt}
                          checked={formData.hasDisputes === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>

                  {formData.hasDisputes === "Yes" && (
                    <div className="pt-2 animate-in fade-in duration-200">
                      <label className="block text-xs sm:text-sm font-bold text-zinc-800 mb-1.5">
                        If Yes, please briefly provide details regarding the nature of the dispute or ongoing resolution status (Optional):
                      </label>
                      <textarea
                        name="disputeDetails"
                        rows={2}
                        value={formData.disputeDetails}
                        onChange={handleChange}
                        placeholder="Briefly describe dispute or resolution status..."
                        className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Question 27 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-2">
                    27. ARE YOU WILLING TO BE CONTACTED FOR FUTURE INFRASTRUCTURE-RELATED VERIFICATION OR ASSESSMENT IF YOUR PROPERTY IS SHORTLISTED? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className={`p-4 rounded-2xl text-center cursor-pointer text-base transition shadow-sm ${
                        formData.willingToBeContacted === opt ? "bg-zinc-950 text-white font-black" : "bg-white text-zinc-800 font-bold hover:bg-zinc-100"
                      }`}>
                        <input
                          type="radio"
                          name="willingToBeContacted"
                          value={opt}
                          checked={formData.willingToBeContacted === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 28 - Fully restored & Capitalized */}
                <div>
                  <label className="block text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950 mb-1">
                    28. REFERRAL / AGENT NAME / CONSULTANT CODE (OPTIONAL)
                  </label>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium mb-2.5">
                    "Internal Tracking Code: Please do not edit this field to ensure your application is assigned to the correct consultant."
                  </p>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    placeholder="Enter agent / consultant code if applicable"
                    className="w-full bg-white rounded-2xl p-4 text-base font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900 shadow-sm"
                  />
                </div>

                {/* PROPERTY PHOTO SUPPORT GUIDANCE - Fully Capitalized Heading */}
                <div className="p-6 rounded-3xl bg-white space-y-3 shadow-sm">
                  <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-950">
                    PROPERTY PHOTO SUPPORT
                  </h4>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    During review stages, applicants may be requested to provide recent property photographs through the official Polegrid WhatsApp review line to support geospatial verification and infrastructure suitability assessment.
                  </p>
                  <div className="text-sm font-semibold text-zinc-800 space-y-1 pl-1">
                    <p className="font-bold text-zinc-950">Recommended photographs may include:</p>
                    <p>• Front view of the property</p>
                    <p>• Available installation space</p>
                    <p>• Road access to the property</p>
                    <p>• Rooftop area (where applicable)</p>
                    <p>• Surrounding environment</p>
                  </div>
                  <div className="pt-2 text-sm font-black text-emerald-800">
                    Official Polegrid WhatsApp Review Line: <a href="https://wa.me/2347018162166" target="_blank" rel="noreferrer" className="underline font-black">07018162166</a>
                  </div>
                </div>

                {/* SUBMISSION DECLARATION - Fully Capitalized Heading & Content */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white space-y-4 shadow-sm">
                  <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-950">
                    SUBMISSION DECLARATION *
                  </h4>
                  
                  <div className="space-y-3 text-sm text-zinc-700 leading-relaxed font-medium">
                    <p>
                      By submitting this form, you confirm that the information provided is accurate to the best of your knowledge and may be reviewed as part of Polegrid's preliminary infrastructure assessment process.
                    </p>
                    <p>
                      Polegrid Solutions reserves the right to independently verify submitted property information during internal review processes.
                    </p>
                    <p>
                      Submission of this form does not constitute site approval, lease execution, infrastructure deployment, commercial commitment, or selection by any telecom operator, tower company, or infrastructure developer.
                    </p>
                    <p>
                      Only properties that satisfy Polegrid's preliminary screening criteria or demonstrate potential suitability for telecommunications or digital infrastructure will be shortlisted and may be contacted for Advanced Technical Site Assessment or subsequent stages of the Polegrid evaluation process.
                    </p>
                  </div>

                  <label className="flex items-start sm:items-center gap-3.5 pt-4 cursor-pointer p-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition">
                    <input
                      type="checkbox"
                      name="declarationConfirmed"
                      required
                      checked={formData.declarationConfirmed}
                      onChange={handleChange}
                      className="w-5 h-5 text-emerald-600 rounded focus:ring-zinc-900 mt-0.5 sm:mt-0"
                    />
                    <span className="text-sm sm:text-base font-black uppercase tracking-wider text-zinc-950">
                      I CONFIRM AND UNDERSTAND *
                    </span>
                  </label>

                  <div className="pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>“Polegrid Solutions is registered with the Special Control Unit Against Money Laundering (SCUML).”</span>
                  </div>
                </div>
              </div>
            )}

            {/* Wizard Navigation Buttons */}
            <div className="flex items-center justify-between pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3.5 rounded-full bg-zinc-200 text-sm font-bold text-zinc-900 hover:bg-zinc-300 transition"
                >
                  ← PREVIOUS
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-4 rounded-full bg-zinc-950 text-sm font-black uppercase tracking-wider text-white hover:bg-zinc-800 transition shadow-md"
                >
                  CONTINUE TO STEP {step + 1} →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-8 py-4 rounded-full text-sm sm:text-base font-black uppercase tracking-wider text-white transition shadow-xl ${
                    submitting ? "bg-zinc-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
                </button>
              )}
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
