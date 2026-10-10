import { Link } from "react-router-dom";
import { ArrowLeft, Printer, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
              PRIVACY POLICY
            </h1>
            <p className="text-xs text-zinc-500 font-semibold">
              Effective Date: 9 October 2025
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Polegrid Solutions is an Infrastructure Intelligence Platform managed by Geospatial Asset Systems Limited (GASL). This Privacy Policy explains how personal information is collected, used, stored, shared and protected when you interact with our website, submit property information, contact us or use our services.
          </p>

          <p className="text-slate-600 leading-relaxed">
            We handle personal information in accordance with applicable Nigerian data-protection requirements, including the Nigeria Data Protection Act 2023.
          </p>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">1. WHO IS RESPONSIBLE FOR YOUR INFORMATION?</h2>
            <p>GASL manages the Polegrid platform and is responsible for personal information processed for the platform's own services and purposes, subject to the applicable legal arrangements for a particular engagement.</p>
            <p>Where another organization separately determines the purposes and means of processing information under a specific engagement, the relevant arrangement and applicable law will govern those responsibilities.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">2. INFORMATION WE MAY COLLECT</h2>
            <p>The information collected depends on your interaction with Polegrid:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>A. Personal and contact information:</strong> Your name, phone number, email address, correspondence address, job title and other contact details you provide.</li>
              <li><strong>B. Property and location information:</strong> Property address, location coordinates, property type, site characteristics, photographs, supporting materials and information necessary to understand the property.</li>
              <li><strong>C. Ownership and supporting documents:</strong> Property records, evidence of authority to submit information, identity information or other supporting documentation where required.</li>
              <li><strong>D. Organization information:</strong> Organization name, type, contact person role, business contact details, portfolio information, and purpose of enquiry.</li>
              <li><strong>E. Communications and service records:</strong> Messages, enquiries, assessment records, reports, payment confirmations, complaints and other interaction records.</li>
              <li><strong>F. Technical website information:</strong> IP address, browser/device information, website activity, cookies and analytics information.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">3. HOW WE COLLECT INFORMATION</h2>
            <p>Information may be collected through property registration forms, organization enquiry forms, assessment submissions, email/telephone/WhatsApp channels, and website analytics.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">4. HOW WE USE INFORMATION</h2>
            <p>We use information to receive property registrations, maintain location intelligence, consider properties for infrastructure opportunities, provide assessment services (ATA), respond to enquiries, administer payments and comply with legal requirements.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">5. LAWFUL BASIS FOR PROCESSING</h2>
            <p>We process information pursuant to contractual necessity, compliance with legal obligations, legitimate business interests, and consent where applicable.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">6. PROPERTY INFORMATION AND INFRASTRUCTURE OPPORTUNITIES</h2>
            <p>Property information is organized to evaluate relevance to telecommunications needs. Registration does not mean information is automatically made public. Contact details and documents are shared with third-party stakeholders only where an appropriate lawful basis and consent applies.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">7. WHEN WE MAY SHARE INFORMATION</h2>
            <p>Information may be shared with technology/hosting providers, payment service providers, professional advisers, and infrastructure stakeholders involved in an authorized engagement. We do not sell personal data for unrelated marketing purposes.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">8. INTERNATIONAL PROCESSING</h2>
            <p>Where third-party technology or communication services process data outside Nigeria, we ensure applicable safeguards compliant with the Nigeria Data Protection Act 2023.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">9. PAYMENT INFORMATION</h2>
            <p>Card payments are processed securely through licensed payment processors (e.g. Flutterwave). Polegrid does not directly store sensitive payment card details.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">10. DATA RETENTION & SECURITY</h2>
            <p>We retain records for as long as necessary for service delivery, dispute resolution, and legal compliance. We apply reasonable technical and administrative controls to protect against unauthorized access or disclosure.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">11. YOUR DATA PROTECTION RIGHTS</h2>
            <p>Under Nigerian law, you have the right to request access to your personal data, request correction of inaccurate records, request deletion where legally applicable, and withdraw consent where applicable.</p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-lg font-bold text-zinc-950">CONTACT & DATA REQUESTS</h2>
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
