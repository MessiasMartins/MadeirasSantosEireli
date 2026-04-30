import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 text-brand-graphite">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}

export default LayoutWrapper
