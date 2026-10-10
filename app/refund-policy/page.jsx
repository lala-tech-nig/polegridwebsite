import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ShieldCheck } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="bg-zinc-100 text-zinc-900 selection:bg-zinc-900 selection:text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-900 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-200 rounded-full transition shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Policy</span>
          </button>
        </div>

        {/* Paper Container - Borderless */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 space-y-8 leading-relaxed text-sm text-zinc-700">
          
          <div className="pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              POLEGRID SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              REFUND POLICY
            </h1>
            <p className="text-xs text-zinc-500 font-semibold">
              Effective Date: 9 October 2025
            </p>
          </div>

          <p className="text-zinc-600 leading-relaxed">
            This Refund Policy explains how cancellations and refunds are handled for paid Polegrid services.
          </p>

          <div className="p-5 rounded-2xl bg-emerald-50 text-xs sm:text-sm text-emerald-950 font-semibold space-y-1">
            <p>Property Registration is free. No fee is charged simply to register a property.</p>
            <p className="text-emerald-800 font-normal">
              The current standard fee for an invited individual-property Advanced Technical Site Assessment (ATA) is <strong>₦15,500</strong>. Any different fee for a corporate, institutional or multi-site engagement will be communicated in the applicable written quotation or agreement before payment.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            This Policy operates subject to applicable Nigerian consumer-protection law. Where the law provides a remedy that is more protective than a term in this Policy, the law will apply.
          </p>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">1. FREE PROPERTY REGISTRATION</h2>
            <p>Property Registration is free. There is no registration fee to refund. No person should request payment merely to submit a standard property registration.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">2. ADVANCED TECHNICAL SITE ASSESSMENT</h2>
            <p>Where a property owner is invited to proceed to a paid ATA, Polegrid will communicate the scope of the service, the deliverables, the fee and the payment instructions before payment.</p>
            <p className="font-bold text-slate-900">₦15,500 — Advanced Technical Site Assessment Fee</p>
            <p>The fee covers the assessment service and the report or other deliverables described to the customer before payment.</p>
            <p className="text-slate-600 italic">The ATA is an assessment service, not a guarantee of a commercial outcome. The fee does not buy a guaranteed tower, lease, stakeholder selection, deployment or income.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">3. CANCELLATION BEFORE WORK COMMENCES</h2>
            <p>If you request cancellation before substantive assessment work has commenced, you may request a full refund. We will review the service status and communicate the outcome. Any deduction or cancellation charge will be made only where it is lawful, reasonable, applicable to the circumstances and disclosed where required.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">4. CANCELLATION AFTER WORK HAS COMMENCED</h2>
            <p>If you cancel after substantive work has commenced, the refund, if any, will reflect the value of work already performed and any permitted, reasonable costs that were disclosed and properly incurred. We will not impose an arbitrary forfeiture merely because a cancellation request has been made.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">5. IF POLEGRID CANNOT PROVIDE THE SERVICE</h2>
            <p>If Polegrid is unable to provide an assessment for reasons attributable to Polegrid, we will inform you and discuss an appropriate remedy, which may include rescheduling or a full refund where no substantive work has been performed.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">6. DELAYS AND MISSING INFORMATION</h2>
            <p>An assessment may be delayed if required information or cooperation has not been provided. Where this happens, Polegrid will communicate the information needed and the effect on service timing.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">7. ERRORS IN A DELIVERABLE</h2>
            <p>If you believe an Assessment Report contains a material factual error or does not reflect the agreed service scope, contact Polegrid and explain the issue so the matter can be reviewed and corrected.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">8. NO REFUND SOLELY BECAUSE NO COMMERCIAL OPPORTUNITY ARISES</h2>
            <p>Where Polegrid has provided the assessment service in accordance with the agreed scope, the absence of a subsequent tower installation, lease, stakeholder selection, deployment or income does not by itself mean the assessment service was not provided.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">9. DUPLICATE OR INCORRECT PAYMENTS</h2>
            <p>If you believe you have made a duplicate payment or paid an incorrect amount, contact Polegrid with the transaction reference and relevant details. Confirmed duplicate payments will be reviewed and refunded promptly.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">10. HOW TO REQUEST A REFUND</h2>
            <p>Send your request to:</p>
            <p><strong>Email:</strong> polegrid01@gmail.com<br />
            <strong>Phone / WhatsApp:</strong> 07018162166</p>
            <p>Please include: your name, phone number, property registration reference, payment reference and transaction details, and reason for your request.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">11. REFUND REVIEW AND PROCESSING</h2>
            <p>Approved refunds will normally be sent through the original payment method where practicable within <strong>10 working days</strong> after approval.</p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-lg font-bold text-zinc-950">14. CONTACT</h2>
            <p><strong>Polegrid Solutions</strong><br />
            Managed by Geospatial Asset Systems Limited (GASL)</p>
            <p>Email: <a href="mailto:polegrid01@gmail.com" className="text-emerald-700 underline font-medium">polegrid01@gmail.com</a><br />
            Phone / WhatsApp: 07018162166</p>
          </section>

        </div>
      </div>
    </div>
  );
}
