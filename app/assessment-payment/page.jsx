import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  CreditCard, 
  Building, 
  AlertCircle, 
  Lock
} from "lucide-react";

export default function AssessmentPaymentPage() {
  const [searchParams] = useSearchParams();
  const initialArn = searchParams.get("arn") || "";

  const [arn, setArn] = useState(initialArn);
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [isProcessing, setIsProcessing] = useState(false);

  const feeAmount = 15500;

  const handleFlutterwavePayment = () => {
    if (!arn || !ownerName || !email || !phone) {
      alert("Please enter your Application Reference Number (ARN), Name, Email, and Phone Number.");
      return;
    }

    if (typeof window.FlutterwaveCheckout === "undefined") {
      alert("Payment gateway is loading. Please try again in a few seconds.");
      return;
    }

    setIsProcessing(true);

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK-42fdf25af2f988975742a7aed0a996c3-X",
      tx_ref: `PG_ATA_${arn}_${Date.now()}`,
      amount: feeAmount,
      currency: "NGN",
      customer: {
        email: email,
        phonenumber: phone,
        name: ownerName,
      },
      customizations: {
        title: "Polegrid Solutions",
        description: `Advanced Technical Site Assessment (${arn})`,
        logo: "https://i.postimg.cc/15jgmSHD/polegridlogo1-removebg-preview.png",
      },
      callback: function (response) {
        setIsProcessing(false);
        window.location.href = `/thank-you?type=payment&tx_ref=${response.tx_ref}&status=${response.status}`;
      },
      onclose: function () {
        setIsProcessing(false);
      },
    });
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen pb-24">
      
      {/* Controlled Portal Header - Solid, borderless */}
      <section className="relative bg-zinc-950 text-white py-24 overflow-hidden">
        <img
          src="/hero4.jpg"
          alt="Technical Assessment"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block">
            Controlled Assessment Portal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Advanced Technical Site Assessment Fee
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
            This payment portal is restricted to property owners whose properties have progressed through preliminary screening and have received a formal invitation to proceed.
          </p>
        </div>
      </section>

      {/* Main Payment Card - Borderless, Soft Tint */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-6">
        
        {/* Notice */}
        <div className="p-6 rounded-3xl bg-zinc-50 text-xs text-zinc-600 space-y-2 font-light">
          <span className="font-bold text-zinc-900 block">Important Notice:</span>
          <p>
            Property registration is 100% free. The <strong>₦15,500 assessment fee</strong> applies only when an owner has been invited for an in-depth Advanced Technical Site Assessment (ATA).
          </p>
          <p className="text-zinc-500 italic">
            Payment does not guarantee immediate infrastructure deployment, a lease agreement, or commercial income.
          </p>
        </div>

        {/* Payment Form Box */}
        <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 space-y-8">
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-zinc-950">
                Payment Details
              </h2>
              <p className="text-xs text-zinc-500 font-light">Invited Property Owners Only</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-zinc-400 block font-light">ATA Fee</span>
              <span className="text-2xl font-black text-zinc-950">₦15,500</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Application Reference Number (ARN) *
              </label>
              <input
                type="text"
                required
                value={arn}
                onChange={(e) => setArn(e.target.value)}
                placeholder="e.g. PG-123456 or registered phone number"
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Full Legal Name *
              </label>
              <input
                type="text"
                required
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Enter full legal name"
                className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none font-light"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 08012345678"
                  className="w-full bg-white rounded-2xl p-4 text-sm text-zinc-950 focus:outline-none font-light"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
              Select Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("online")}
                className={`p-4 rounded-2xl text-left flex items-center gap-3 transition ${
                  paymentMethod === "online"
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <CreditCard className="w-5 h-5 shrink-0" />
                <div>
                  <span className="text-xs font-bold block">Online Card / USSD</span>
                  <span className="text-[10px] opacity-70">Instant Flutterwave</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("transfer")}
                className={`p-4 rounded-2xl text-left flex items-center gap-3 transition ${
                  paymentMethod === "transfer"
                    ? "bg-zinc-950 text-white"
                    : "bg-white text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <Building className="w-5 h-5 shrink-0" />
                <div>
                  <span className="text-xs font-bold block">Direct Bank Transfer</span>
                  <span className="text-[10px] opacity-70">Official UBA Corporate</span>
                </div>
              </button>
            </div>
          </div>

          {paymentMethod === "online" && (
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleFlutterwavePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-full text-sm font-bold text-white transition shadow-lg flex items-center justify-center gap-2 ${
                  isProcessing ? "bg-zinc-400 cursor-not-allowed" : "bg-zinc-950 hover:bg-zinc-800"
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>{isProcessing ? "Processing..." : "Pay ₦15,500 Securely Online"}</span>
              </button>
            </div>
          )}

          {paymentMethod === "transfer" && (
            <div className="p-6 rounded-2xl bg-white space-y-3 text-xs text-zinc-700 font-light">
              <h4 className="font-bold text-zinc-950 text-sm">
                Official UBA Corporate Account:
              </h4>
              <p><strong>Bank:</strong> United Bank for Africa (UBA)</p>
              <p><strong>Account Name:</strong> Polegrid Solutions</p>
              <p className="text-zinc-950 font-bold text-sm">
                <strong>Account Number:</strong> 1028078590
              </p>
              <p className="pt-2 text-zinc-500 italic">
                Send transfer receipt to WhatsApp review line: 07018162166.
              </p>
            </div>
          )}

          <div className="pt-4 flex items-center justify-between text-xs text-zinc-400 font-light">
            <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>

        </div>

      </div>

    </div>
  );
}
