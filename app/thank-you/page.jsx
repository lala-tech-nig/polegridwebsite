import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Confetti from "react-confetti";
import { 
  CheckCircle2, 
  Radio, 
  ShieldCheck, 
  Home as HomeIcon,
  ArrowRight,
  Camera
} from "lucide-react";

export default function ThankYouPage() {
  const [searchParams] = useSearchParams();
  const submissionType = searchParams.get("type");
  const refCode = searchParams.get("ref") || searchParams.get("tx_ref") || `PG-${Math.floor(100000 + Math.random() * 900000)}`;

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-20 flex items-center justify-center relative overflow-hidden">
      
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={false}
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          
          <div className="w-14 h-14 rounded-full bg-zinc-200 text-zinc-950 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          {submissionType === "org" ? (
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">
                ORGANIZATION ENQUIRY RECEIVED
              </span>
              <h1 className="text-3xl font-black text-zinc-950 tracking-tight">
                Thank You for Connecting
              </h1>
              <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mx-auto font-light">
                Your enquiry has been received. Our corporate geospatial team will review your project and follow up shortly.
              </p>
            </div>
          ) : submissionType === "payment" ? (
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">
                PAYMENT CONFIRMATION
              </span>
              <h1 className="text-3xl font-black text-zinc-950 tracking-tight">
                Assessment Fee Received
              </h1>
              <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mx-auto font-light">
                Your payment has been logged. Our technical team will begin your property evaluation dossier.
              </p>
              <div className="p-3 rounded-2xl bg-white text-xs font-mono text-zinc-800">
                Ref: {refCode}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 block">
                REGISTRATION CONFIRMED
              </span>
              <h1 className="text-3xl font-black text-zinc-950 tracking-tight">
                Property Registration Received
              </h1>
              <div className="p-6 rounded-2xl bg-white text-left space-y-2 text-xs sm:text-sm text-zinc-800 font-light">
                <p className="font-semibold text-zinc-950">
                  Thank you for submitting your property information to Polegrid.
                </p>
                <p>
                  Your registration has been received for preliminary screening.
                </p>
                <p className="font-bold text-zinc-950">
                  No payment is required at this stage.
                </p>
                <p className="text-zinc-600">
                  If your property progresses to the next stage, Polegrid will contact you with further information.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white text-xs text-zinc-600 font-mono flex items-center justify-between">
                <span>Reference (ARN):</span>
                <span className="font-bold text-zinc-950">{refCode}</span>
              </div>
            </div>
          )}

          {/* Photo Reminder */}
          <div className="p-5 rounded-2xl bg-white text-left space-y-2 text-xs text-zinc-600 font-light">
            <div className="flex items-center gap-2 font-bold text-zinc-950">
              <Camera className="w-4 h-4" />
              <span>Next Steps — Property Photos:</span>
            </div>
            <p>
              To assist geospatial verification, send recent property photos with your ARN to our WhatsApp review line:
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/2347018162166?text=Hello%20Polegrid,%20property%20photos%20for%20ARN:%20${refCode}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white text-xs font-bold hover:bg-zinc-800 transition"
              >
                Send Photos via WhatsApp (07018162166)
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-zinc-950 text-white text-xs font-bold hover:bg-zinc-800 transition"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
