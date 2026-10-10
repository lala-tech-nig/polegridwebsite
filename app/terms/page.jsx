import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Printer } from "lucide-react";

export default function TermsPage() {
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
            <span>Print Document</span>
          </button>
        </div>

        {/* Paper Container - Borderless, Clean Surface */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 space-y-8 leading-relaxed text-sm text-zinc-700">
          
          <div className="pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              POLEGRID SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              TERMS & CONDITIONS
            </h1>
            <p className="text-xs text-zinc-500 font-semibold">
              Effective Date: 9 October 2025
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            These Terms & Conditions govern access to and use of the Polegrid Solutions website, property registration process and related services.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Polegrid Solutions is an Infrastructure Intelligence Platform managed by <strong>Geospatial Asset Systems Limited (GASL)</strong>. References to “Polegrid,” “we,” “us” or “our” in these Terms refer to Polegrid Solutions and GASL acting through the platform, as applicable to the relevant service and agreement.
          </p>

          <p className="text-slate-600 leading-relaxed">
            By accessing the website, submitting a form or purchasing a service, you agree to the provisions applicable to that activity. Where a separate written agreement governs a specific commercial service, that agreement will apply to the extent of any inconsistency with these general website Terms.
          </p>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">1. ABOUT POLEGRID</h2>
            <p>Polegrid focuses on property and location intelligence relevant to telecommunications and digital infrastructure opportunities.</p>
            <p>Its activities may include property information management, preliminary screening, assessment services and coordination relating to potential infrastructure opportunities.</p>
            <p>Polegrid is not itself a telecommunications operator or TowerCo. It does not acquire ownership of a property merely because information about that property is submitted to the platform.</p>
            <p>Through GASL, Polegrid may support infrastructure site acquisition and transaction coordination for organizations under appropriate commercial arrangements.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">2. DEFINITIONS</h2>
            <p><strong>Property Owner:</strong> An individual or organization that owns, controls or has lawful authority to submit information concerning a property.</p>
            <p><strong>Property Registration:</strong> Submission of property information for inclusion in the Polegrid National Site Intelligence Network and consideration for relevant services.</p>
            <p><strong>Advanced Technical Site Assessment (ATA):</strong> A further assessment service offered to a property owner invited to proceed, with the scope communicated before payment.</p>
            <p><strong>Infrastructure Opportunity:</strong> A potential telecommunications or digital infrastructure requirement for which a property may be considered.</p>
            <p><strong>Infrastructure Stakeholder:</strong> An organization involved in or seeking telecommunications, connectivity or other digital infrastructure, or a related professional service.</p>
            <p><strong>Assessment Report:</strong> A report or other deliverable included within the agreed scope of an assessment service.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">3. PROPERTY REGISTRATION</h2>
            <p>Property registration is free.</p>
            <p>Submitting a property makes its information available for consideration through the applicable Polegrid process. It does not guarantee shortlisting, assessment, stakeholder interest, a lease, deployment or income.</p>
            <p>Polegrid may review submitted information and determine whether further information or assessment is appropriate, using relevant considerations for the service concerned.</p>
            <p>Registration does not transfer ownership, possession or other property rights to Polegrid or GASL.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">4. ACCURACY AND AUTHORITY</h2>
            <p>You must provide information that is accurate to the best of your knowledge and must not knowingly submit false, misleading, altered or unauthorized information.</p>
            <p>If you submit information for another person, family, company, institution or organization, you must have the authority required to do so.</p>
            <p>Where supporting documentation or clarification is reasonably required, you must cooperate with the request if you wish the relevant service to continue.</p>
            <p>You should notify Polegrid if you become aware of a material error or change in the information you supplied.</p>
            <p>Polegrid may pause its consideration of information that is incomplete, inconsistent or requires clarification.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">5. SCREENING AND FURTHER ASSESSMENT</h2>
            <p>Property information may be reviewed for preliminary consideration. Further assessment may be offered where appropriate.</p>
            <p>A property's progression through one stage does not guarantee progression to another. Technical requirements, the available information, the nature of the property and actual infrastructure requirements may affect whether further consideration is appropriate.</p>
            <p>Polegrid may request clarification or decline to proceed where the available information is insufficient, the property is outside the relevant service scope or there is another legitimate operational or legal reason.</p>
            <p>Where a paid service has already been purchased, any cancellation, refund or incomplete-service issue will be handled under the Refund Policy and applicable law.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">6. ADVANCED TECHNICAL SITE ASSESSMENT</h2>
            <p>The standard fee for the individual-property ATA pathway is currently:</p>
            <p className="p-4 bg-zinc-100 rounded-2xl font-bold text-emerald-800">
              ₦15,500 — Advanced Technical Site Assessment Fee
            </p>
            <p>This fee applies only where the property owner has been invited to proceed. Property registration itself remains free.</p>
            <p>Before payment, Polegrid will communicate the applicable assessment scope, deliverables, fee and payment instructions.</p>
            <p>Corporate, institutional and multi-site engagements may be covered by separate written quotations or agreements.</p>
            <p>An ATA provides the assessment service described to the customer. Unless expressly included in a separate written scope, it is not a substitute for a formal title search, legal opinion, cadastral or boundary survey, detailed engineering design, regulatory approval or other specialist certification.</p>
            <p>An assessment or report does not, by itself, certify legal ownership, guarantee technical acceptance by a stakeholder or establish that construction can proceed.</p>
            <p>The assessment fee does not purchase a guaranteed tower installation, lease, commercial engagement, deployment or income.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">7. INFRASTRUCTURE OPPORTUNITIES</h2>
            <p>Polegrid may support the consideration of relevant property information for potential infrastructure opportunities.</p>
            <p>The existence of a registration or assessment does not mean a stakeholder has selected, accepted or approved a property.</p>
            <p>Any subsequent commercial arrangement depends on the relevant property owner, stakeholder, applicable requirements and terms agreed by the parties.</p>
            <p>Polegrid does not promise a particular rental amount, lease duration, payment schedule, selection date or deployment date.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">8. PROPERTY RIGHTS AND TRANSACTION AGREEMENTS</h2>
            <p>Any lease, licence, easement, purchase or other right relating to a property must be established through the appropriate agreement between the relevant parties.</p>
            <p>Property owners remain responsible for having the authority required to grant the property rights set out in the applicable agreement.</p>
            <p>Polegrid or GASL may coordinate a transaction or participate in it where separately authorized and appropriately documented. Neither the website nor property registration alone authorizes Polegrid or GASL to bind a property owner or stakeholder to a transaction.</p>
            <p>The rights and obligations of the parties to an actual property transaction will be governed by the relevant executed agreement and applicable law.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">9. FEES AND PAYMENT</h2>
            <p>Property registration is free.</p>
            <p>An ATA fee is payable only after the property owner has been invited to proceed and has been informed of the applicable service scope and fee.</p>
            <p>Other services, including corporate and multi-site engagements, are subject to the relevant written quotation or agreement.</p>
            <p>Payments must be made through the payment method officially communicated for the service. Users should not make payments to personal accounts or persons claiming to act for Polegrid unless the payment arrangement has been independently confirmed through an official channel.</p>
            <p>Receipts or other appropriate payment confirmations will be provided for payments received.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">10. USER RESPONSIBILITIES AND ACCEPTABLE USE</h2>
            <p>You must not:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>knowingly submit fraudulent or unauthorized property information;</li>
              <li>impersonate another person or organization;</li>
              <li>use the platform to commit an unlawful act;</li>
              <li>attempt unauthorized access to Polegrid systems or information;</li>
              <li>copy, scrape, extract or commercially reproduce protected website content, reports or platform materials without permission; or</li>
              <li>misuse information obtained through an authorized engagement.</li>
            </ul>
            <p>You remain responsible for the lawfulness of the information and materials you submit.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">11. INTELLECTUAL PROPERTY</h2>
            <p>The Polegrid name, branding, website materials, original platform content, report formats and other proprietary materials remain the property of their respective rights holders or licensors.</p>
            <p>Submitting property information does not transfer ownership of your property or original documents to Polegrid.</p>
            <p>You grant GASL, acting through Polegrid, permission to receive, store, process and use submitted information as reasonably necessary to administer the platform, provide the requested service, consider relevant infrastructure opportunities, maintain appropriate records and comply with applicable law.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">12. THIRD-PARTY ORGANIZATIONS</h2>
            <p>Telecommunications companies, TowerCos, professional advisers and other external organizations make their own technical, regulatory and commercial decisions.</p>
            <p>Polegrid cannot guarantee their actions, requirements, timelines, commercial terms or decision to proceed.</p>
            <p>Nothing on the website represents that a named organization has entered into a partnership with Polegrid unless that relationship has been established and is accurately represented.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">13. ASSESSMENT REPORTS AND SERVICE LIMITATIONS</h2>
            <p>Reports reflect the information, materials, scope and assessment activities described for the service concerned.</p>
            <p>Property owners and organizations remain responsible for seeking any additional independent advice or formal approval needed for their own purposes.</p>
            <p>Polegrid will exercise reasonable care in providing its agreed services. If you believe a deliverable contains a material factual error or fails to reflect the agreed scope, please contact us with the relevant details so the matter can be reviewed and, where appropriate, corrected.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">14. PRIVACY AND CONFIDENTIALITY</h2>
            <p>Personal information is handled in accordance with the Polegrid Privacy Policy and applicable data-protection requirements.</p>
            <p>Polegrid takes reasonable steps to protect information and restrict access to authorized purposes. However, information may need to be processed or disclosed to provide a requested service, consider a legitimate opportunity, use service providers or comply with law.</p>
            <p>Users should not submit information they have no authority to disclose.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">15. SUSPENSION AND DISCONTINUATION</h2>
            <p>Polegrid may pause, restrict or discontinue a service where reasonably necessary because of inaccurate or unauthorized information, suspected misuse, security concerns, legal requirements or operational circumstances.</p>
            <p>Where the change affects a paid service already purchased, Polegrid will address the affected service and any refund entitlement in accordance with the Refund Policy, the relevant agreement and applicable law.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">16. LIABILITY</h2>
            <p>Nothing in these Terms excludes or restricts a right, remedy or liability that cannot lawfully be excluded or restricted under Nigerian law.</p>
            <p>Polegrid is not responsible for a commercial outcome merely because a property was registered or assessed, or because a third party ultimately decides not to proceed.</p>
            <p>Subject to the preceding paragraph and applicable law, liability arising from a particular paid service will be assessed in light of the agreed scope, the circumstances of the service, the actual loss and any applicable contractual or statutory limits.</p>
            <p>Nothing in these Terms relieves Polegrid of an obligation to exercise reasonable care, provide the agreed service or comply with applicable consumer-protection and data-protection laws.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">17. COMPLAINTS AND DISPUTES</h2>
            <p>If you have a complaint, contact Polegrid through official channels and provide sufficient information for the matter to be reviewed.</p>
            <p>The parties should first attempt to resolve a dispute through good-faith communication.</p>
            <p>If it cannot be resolved, either party may pursue an applicable legal or dispute-resolution process available under Nigerian law.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">18. CHANGES TO THESE TERMS</h2>
            <p>Polegrid may update these Terms when its services, processes or legal requirements change.</p>
            <p>The current version and its effective date will be published on the website.</p>
          </section>

          <section className="space-y-3 pt-4">
            <h2 className="text-lg font-bold text-slate-900">19. GOVERNING LAW</h2>
            <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-lg font-bold text-zinc-950">20. CONTACT</h2>
            <p><strong>Polegrid Solutions</strong><br />
            Infrastructure Intelligence Platform<br />
            Managed by Geospatial Asset Systems Limited (GASL)</p>
            <p>Email: <a href="mailto:polegrid01@gmail.com" className="text-emerald-700 underline font-medium">polegrid01@gmail.com</a><br />
            Phone / WhatsApp: 07018162166</p>
          </section>

        </div>
      </div>
    </div>
  );
}
