import companyInfo from '@/data/config/companyInfo'

const baseClassName =
  'w-full min-h-[48px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:text-lg'

const ctas = [
  {
    label: 'WhatsApp',
    href: companyInfo.links.whatsapp,
    className: `${baseClassName} text-white bg-green-600 hover:bg-green-700`,
  },
  {
    label: 'Ligar',
    href: companyInfo.contact.phoneHref,
    className: `${baseClassName} text-gray-800 bg-yellow-50 border-yellow-200 hover:bg-yellow-100`,
  },
  {
    label: 'Visitar loja',
    href: companyInfo.links.routeMap,
    className: `${baseClassName} text-gray-800 bg-yellow-50 border-yellow-200 hover:bg-yellow-100`,
    external: true,
  },
]

export default function PrimaryCtas({ stacked = false }) {
  return (
    <div className={stacked ? 'space-y-3' : 'sm:flex sm:gap-3'}>
      {ctas.map((cta) => (
        <div key={cta.label} className={stacked ? '' : 'mt-3 sm:mt-0'}>
          <a
            href={cta.href}
            className={cta.className}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noopener noreferrer' : undefined}
            aria-label={cta.label}
          >
            {cta.label}
          </a>
        </div>
      ))}
    </div>
  )
}
