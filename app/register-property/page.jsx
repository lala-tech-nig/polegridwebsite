import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Radio, 
  MapPin, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  Camera,
  Layers
} from "lucide-react";
import { ENDPOINTS } from "@/src/config/api";

const landmarkTypes = [
  "Filling Station",
  "Educational Institution (School/College)",
  "Place of Worship (Church/Mosque)",
  "Commercial Hub (Market/Mall)",
  "Transport Node (Bus Stop/Junction)",
  "Healthcare Facility",
  "Government Facility",
  "Other",
];

const installationLocations = [
  "Greenfield (Vacant land)",
  "Rooftop (Concrete decking/slab on your building only)",
  "Co-location (Near an Existing Mast 2–3 houses away)",
  "Fence or Wall (Small Cell)",
];

const structureHeights = [
  "Vacant Land",
  "Single-Floor Structure (Bungalow)",
  "1-Story Building / Duplex",
  "2-Story Building",
  "3-Story Building",
  "4-Story Building or Higher",
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe", 
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara"
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
        setErrorMsg("Please complete all property characteristic questions.");
        return false;
      }
    }
    if (currentStep === 4) {
      if (!formData.existingMastNearby || !formData.roadAccessType || !formData.distanceToMainRoad || !formData.heavyEquipmentAccess || !formData.electricityAvailable || !formData.allYearAccessible) {
        setErrorMsg("Please answer all accessibility & infrastructure questions.");
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
      setErrorMsg("Please answer all required questions on terms.");
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
      
      {/* Header Banner - Photographic Background, No Gradients, No Borders */}
      <section className="relative bg-zinc-950 text-white py-24 overflow-hidden">
        <img
          src="/hero1.JPG"
          alt="Site Registration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            National Site Intelligence Network
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Register Your Property
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl mx-auto font-light">
            Property registration is currently <strong className="text-white font-semibold">100% free</strong> and allows submitted locations to undergo preliminary geospatial review. Registration does not guarantee immediate deployment or lease approval.
          </p>
        </div>
      </section>

      {/* Main Wizard - Borderless, Clean Surface Tints */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        {/* Support Bar without box borders */}
        <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
          <span className="font-medium text-zinc-800">
            Need help completing the form? Call/SMS: <strong>07018162166</strong>
          </span>
          <a
            href="https://wa.me/2347018162166"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-bold hover:underline"
          >
            WhatsApp Support Line →
          </a>
        </div>

        {/* Wizard Form Container - Soft Tint, No Harsh Borders */}
        <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 space-y-8">
          
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-500">
              <span>Step {step} of 5</span>
              <span>{step * 20}%</span>
            </div>
            <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-zinc-950 h-full rounded-full transition-all duration-300"
                style={{ width: `${step * 20}%` }}
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Applicant Information & Authority
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">* Required questions</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    1. Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your legal full name"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    2. Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 08012345678"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    3. Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="e.g. yourname@example.com"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    20. Are you authorized to lease this property? *
                  </label>
                  <div className="space-y-2">
                    {[
                      "Yes — I am the owner",
                      "Yes — I represent the owner/family",
                      "No",
                    ].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-zinc-100 cursor-pointer text-sm font-light">
                        <input
                          type="radio"
                          name="authorizationToLease"
                          value={opt}
                          checked={formData.authorizationToLease === opt}
                          onChange={handleChange}
                          className="w-4 h-4 text-zinc-900"
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
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Property Location & Geospatial Details
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">Accurate details allow preliminary review</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    4. Full Property Address / Location *
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    required
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="Enter street name, area and number"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    5. Nearest Bus stop / Landmark *
                  </label>
                  <input
                    type="text"
                    name="nearestBusStop"
                    required
                    value={formData.nearestBusStop}
                    onChange={handleChange}
                    placeholder="e.g. Alausa Bus Stop, Total Filling Station"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      6. Local Government Area (LGA) *
                    </label>
                    <input
                      type="text"
                      name="localGovernment"
                      required
                      value={formData.localGovernment}
                      onChange={handleChange}
                      placeholder="e.g. Ibeju-Lekki"
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      7. State *
                    </label>
                    <select
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    >
                      <option value="">Select State</option>
                      {nigerianStates.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900">
                    8. Property Location Pin (Google Maps Link) (Optional)
                  </label>
                  <input
                    type="url"
                    name="locationPin"
                    value={formData.locationPin}
                    onChange={handleChange}
                    placeholder="Paste Google Maps link here"
                    className="w-full bg-zinc-50 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                  <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                    Open Google Maps → Press and hold location → Tap Share → Copy link → Paste here.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      9. Nearest Known Landmark Type *
                    </label>
                    <select
                      name="landmarkType"
                      required
                      value={formData.landmarkType}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    >
                      <option value="">Select Landmark Type</option>
                      {landmarkTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      10. Landmark Name *
                    </label>
                    <input
                      type="text"
                      name="landmarkName"
                      required
                      value={formData.landmarkName}
                      onChange={handleChange}
                      placeholder="e.g. Oando Station, St. Peters"
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Property Characteristics & Space
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">Physical dimensions and structural nature</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    11. Type of Property *
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    12. Preferred Installation Location or Space *
                  </label>
                  <div className="space-y-2">
                    {installationLocations.map((loc) => (
                      <label key={loc} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-zinc-100 cursor-pointer text-sm font-light">
                        <input
                          type="radio"
                          name="preferredInstallationLocation"
                          value={loc}
                          checked={formData.preferredInstallationLocation === loc}
                          onChange={handleChange}
                          className="w-4 h-4 text-zinc-900"
                        />
                        <span>{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    13. Land Dimensions / Size *
                  </label>
                  <input
                    type="text"
                    name="landDimensions"
                    required
                    value={formData.landDimensions}
                    onChange={handleChange}
                    placeholder="e.g. 60ft x 120ft (1 Plot), or Rooftop 15m x 15m"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    14. Is the property currently occupied or developed? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Partially"].map((opt) => (
                      <label key={opt} className={`p-3 rounded-2xl text-center cursor-pointer text-sm transition ${
                        formData.isOccupied === opt ? "bg-zinc-950 text-white font-bold" : "bg-white text-zinc-700 font-light"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    15. Primary Structure Height *
                  </label>
                  <select
                    name="primaryStructureHeight"
                    required
                    value={formData.primaryStructureHeight}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
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
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Infrastructure & Road Access Readiness
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">Physical equipment & access factors</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    16. Existing telecom mast within area? *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Yes", "No", "Not sure"].map((opt) => (
                      <label key={opt} className={`p-3 rounded-2xl text-center cursor-pointer text-sm transition ${
                        formData.existingMastNearby === opt ? "bg-zinc-950 text-white font-bold" : "bg-white text-zinc-700 font-light"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    17. Road Access Type *
                  </label>
                  <select
                    name="roadAccessType"
                    required
                    value={formData.roadAccessType}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      18. Distance to Main Road *
                    </label>
                    <select
                      name="distanceToMainRoad"
                      required
                      value={formData.distanceToMainRoad}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    >
                      <option value="">Select Distance</option>
                      <option value="Direct frontage">Direct frontage</option>
                      <option value="Under 500m">Under 500m</option>
                      <option value="About 1km">About 1km</option>
                      <option value="Interior">Interior</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                      19. Area Classification *
                    </label>
                    <select
                      name="areaClassification"
                      value={formData.areaClassification}
                      onChange={handleChange}
                      className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-light"
                    >
                      <option value="">Select Classification</option>
                      <option value="Urban / Commercial">Urban / Commercial</option>
                      <option value="Semi-Urban / Suburban">Semi-Urban / Suburban</option>
                      <option value="Rural / Highway Corridor">Rural / Highway Corridor</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      23. Heavy trucks access? *
                    </label>
                    <select
                      name="heavyEquipmentAccess"
                      required
                      value={formData.heavyEquipmentAccess}
                      onChange={handleChange}
                      className="w-full bg-white rounded-xl p-3 text-xs focus:outline-none font-light"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      24. Power available? *
                    </label>
                    <select
                      name="electricityAvailable"
                      required
                      value={formData.electricityAvailable}
                      onChange={handleChange}
                      className="w-full bg-white rounded-xl p-3 text-xs focus:outline-none font-light"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-600 mb-1">
                      25. Accessible in rains? *
                    </label>
                    <select
                      name="allYearAccessible"
                      required
                      value={formData.allYearAccessible}
                      onChange={handleChange}
                      className="w-full bg-white rounded-xl p-3 text-xs focus:outline-none font-light"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    26. Flooding, erosion, or environmental issues? (Optional)
                  </label>
                  <textarea
                    name="floodingOrEnvironmentalIssues"
                    rows={2}
                    value={formData.floodingOrEnvironmentalIssues}
                    onChange={handleChange}
                    placeholder="Leave blank if none."
                    className="w-full bg-white rounded-2xl p-3.5 text-xs text-zinc-950 focus:outline-none font-light resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Terms & Submission Declaration
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">Final confirmation before registration</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    21. Willing to lease for telecom infrastructure (10–30 years)? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className={`p-3 rounded-2xl text-center cursor-pointer text-sm transition ${
                        formData.willingToLeaseLongTerm === opt ? "bg-zinc-950 text-white font-bold" : "bg-white text-zinc-700 font-light"
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    22. Any known ownership, family, or legal disputes? *
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    {["No", "Yes"].map((opt) => (
                      <label key={opt} className={`p-3 rounded-2xl text-center cursor-pointer text-sm transition ${
                        formData.hasDisputes === opt ? "bg-zinc-950 text-white font-bold" : "bg-white text-zinc-700 font-light"
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    27. Willing to be contacted for future verification if shortlisted? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className={`p-3 rounded-2xl text-center cursor-pointer text-sm transition ${
                        formData.willingToBeContacted === opt ? "bg-zinc-950 text-white font-bold" : "bg-white text-zinc-700 font-light"
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                    28. Referral / Consultant Code (Optional)
                  </label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    placeholder="Enter agent code if applicable"
                    className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none font-light"
                  />
                </div>

                {/* Photo guidance notice */}
                <div className="p-5 rounded-2xl bg-white space-y-2 text-xs text-zinc-600 font-light">
                  <span className="font-bold text-zinc-900 block">Photo Guidance via WhatsApp:</span>
                  <p>
                    Applicants may be requested to send recent property photographs (front view, installation space, road access) via the WhatsApp review line: <strong>07018162166</strong>.
                  </p>
                </div>

                {/* Declaration without box borders */}
                <div className="p-6 rounded-2xl bg-white space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                    Submission Declaration *
                  </h4>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    By submitting this form, you confirm that the information provided is accurate and may be reviewed as part of Polegrid's preliminary infrastructure assessment process. Submission does not constitute site approval or commercial commitment.
                  </p>

                  <label className="flex items-center gap-3 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="declarationConfirmed"
                      required
                      checked={formData.declarationConfirmed}
                      onChange={handleChange}
                      className="w-4 h-4 text-zinc-950 rounded focus:ring-zinc-900"
                    />
                    <span className="text-xs font-bold text-zinc-950">
                      I confirm and understand *
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Wizard Navigation */}
            <div className="flex items-center justify-between pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-3 rounded-full bg-zinc-200 text-xs font-semibold text-zinc-800 hover:bg-zinc-300 transition"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-7 py-3.5 rounded-full bg-zinc-950 text-xs font-bold text-white hover:bg-zinc-800 transition"
                >
                  Continue to Step {step + 1}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-8 py-4 rounded-full text-xs font-bold text-white transition shadow-lg ${
                    submitting ? "bg-zinc-400 cursor-not-allowed" : "bg-zinc-950 hover:bg-zinc-800"
                  }`}
                >
                  {submitting ? "Submitting..." : "SUBMIT PROPERTY REGISTRATION — FREE"}
                </button>
              )}
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
