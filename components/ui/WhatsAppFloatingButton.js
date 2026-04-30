import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import companyInfo from '@/data/config/companyInfo'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={companyInfo.links.whatsapp}
      className="fixed inset-x-4 bottom-4 z-40 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-primary-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-900/25 transition hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 md:hidden"
      aria-label="Falar com a Madeiras Santos pelo WhatsApp"
    >
      <ChatBubbleLeftRightIcon aria-hidden="true" className="h-5 w-5" />
      Falar no WhatsApp
    </a>
  )
}
