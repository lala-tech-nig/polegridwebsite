import AnnouncementTicker from "@/components/AnnouncementTicker";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementTickerComp from "@/components/AnnouncementTicker";

export default function RootLayout({ children }) {
  return (
    <>
      <AnnouncementTickerComp />
      {/* Navigation */}
      {/* The app-level Navbar is provided by src/RootLayout.jsx when using routes */}
      <main className="min-h-screen">{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
