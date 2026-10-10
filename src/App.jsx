import { Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "@/app/page";
import ServicesPage from "@/app/services/page";
import AboutPage from "@/app/about/page";
import TestimonialsPage from "@/app/testimonials/page";
import FAQPage from "@/app/faq/page";
import ContactPage from "@/app/contact/page";
import RegisterPropertyPage from "@/app/register-property/page";
import OrganizationEnquiryPage from "@/app/organization-enquiry/page";
import AssessmentPaymentPage from "@/app/assessment-payment/page";
import TermsPage from "@/app/terms/page";
import PrivacyPage from "@/app/privacy/page";
import RefundPolicyPage from "@/app/refund-policy/page";
import ThankYouPage from "@/app/thank-you/page";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Main Navigation Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Primary Action Forms */}
        <Route path="/register-property" element={<RegisterPropertyPage />} />
        <Route path="/organization-enquiry" element={<OrganizationEnquiryPage />} />

        {/* Controlled Assessment Payment Portal (Shortlisted Properties) */}
        <Route path="/assessment-payment" element={<AssessmentPaymentPage />} />

        {/* Backward Compatibility Aliases */}
        <Route path="/payment" element={<AssessmentPaymentPage />} />
        <Route path="/start-earning" element={<RegisterPropertyPage />} />

        {/* Legal Policy Pages */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />

        {/* Confirmation Screen */}
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Route>
    </Routes>
  );
}
