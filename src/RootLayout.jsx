import AnnouncementTicker from '@/components/AnnouncementTicker'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
      <AnnouncementTicker />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
