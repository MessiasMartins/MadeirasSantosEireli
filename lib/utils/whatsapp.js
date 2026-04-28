const WHATSAPP_PHONE = '5531992482390'

export function getWhatsAppLink(message) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`
}

export default getWhatsAppLink
